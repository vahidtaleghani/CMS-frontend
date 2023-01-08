import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fine } from './models/fine';
import { FineType } from './models/finetype';
import { FineService } from './services/fine.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../alert/services/alert.service';


@Component({
  selector: 'app-fine',
  templateUrl: './fine.component.html',
  styleUrls: ['./fine.component.css']
})
export class FineComponent implements OnInit {

  public fines: Fine[] = [];
  public deadlines: FineType[] = [];
  public fine: Fine;

  displayedColumns: string[] = ['deadline', 'price', 'comment', 'edit'];

  // for alert
  options = {
  autoClose: true,
  keepAfterRouteChange: false
  };

  constructor(private service: FineService,private router: Router,public dialog: MatDialog, public alertService: AlertService) { }

  ngOnInit(): void {
    this.fine = this.clearFormInputArea();
    // this.fines = this.getAddedFines();
    // this.getDeadlines();
    // this.getAllAddedFine();
    this.loadPage();

  }


  getFineById(id: number): Fine {
    return this.fines.filter(x => x.Id === id)[0];
  }

  getFineTypeById(id: number): string {
    return this.deadlines.filter(x => x.Id === id)[0].Type;
  }

  clearFormInputArea(): Fine {
    return new Fine(parseInt(sessionStorage.getItem('Id') as string), 0, "Frist", 0, "");
  }

  getFineTypeId(type: string): number {
    return this.deadlines.filter(x => x.Type === type)[0].Id;
  }

  loadPage() {
    let fineTypes: FineType[] = [];

    this.service.getAllFineTypes().subscribe(data => {
      console.log(data);

      data['Data'].forEach(element => {
        if (element.Type === 'start') {
          fineTypes.push(new FineType(element.FineTypeId, "Erste des Monats"))
        }
        else if (element.Type === 'middle') {
          fineTypes.push(new FineType(element.FineTypeId, "Mitte des Monats"))
        }
        else if (element.Type === 'end') {
          fineTypes.push(new FineType(element.FineTypeId, "Ende des Monats"))
        }
      })
      this.deadlines = fineTypes;

      this.getAllAddedFine();
    })


  }

  getAllAddedFine() {
    let fines: Fine[] = [];

    const data = this.service.getAllAddedFines().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        console.log(res[index]['Id']);
        fines.push(new Fine(parseInt(sessionStorage.getItem('Id') as string), res[index]['Id'], this.getFineTypeById(res[index]['FineTypeId']), res[index]['Price'], res[index]['Comment']));
      }

      this.fines = fines;
    });
  }

  hasFormFilledProperly(fineForm: NgForm): boolean {
    let values = new Array();

    Object.entries(fineForm.value).forEach(([key, value]) => values.push(value));

    if (values.includes("") || values.includes("Frist")) {
      return false;
    }
    return true;
  }


  submit(fineForm: NgForm) {

    if (this.hasFormFilledProperly(fineForm)) {

      let fine = {
        'contractId': sessionStorage.getItem('Id'),
        'id': this.fine.Id,
        'fineTypeId': this.getFineTypeId(fineForm.value['deadline']),
        'price': fineForm.value['price'],
        'comment': fineForm.value['comment']
      }

      this.service.createFine(fine).subscribe(response => {
        console.log(response);
        this.fine = this.clearFormInputArea();
        fineForm.reset();
        this.getAllAddedFine();
      })
    }
    else{
      alert("Error");
    }

  }

  edit(id: number) {
    this.fine = this.getFineById(id);
  }

  deleteById(id: number) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent,{
      data:{
        title: 'Bestätigen Entfernen',
        message: 'Sind Sie sicher, dass Sie Folgendes entfernen möchten: ' 
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.deleteFine(id).subscribe((responseData) =>{
          this.clearFormInputArea();
          this.getAllAddedFine();
          this.alertService.success("Erfolgreich gelöscht", this.options);
        })
      }
    },error =>{
      console.log(error);
      this.alertService.error("Ein Fehler ist aufgetreten", this.options);
    }
    );
  }

  gotoNextPage(){
    this.router.navigate(['contract/categorization']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/affected-department']); 
  }
}