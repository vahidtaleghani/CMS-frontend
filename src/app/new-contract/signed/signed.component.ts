import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Signature } from './models/signature';
import { NgForm } from '@angular/forms';
import { SignService } from './services/sign.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../alert/services/alert.service';

@Component({
  selector: 'app-signed',
  templateUrl: './signed.component.html',
  styleUrls: ['./signed.component.css']
})
export class SignedComponent implements OnInit {

  displayedColumns: string[] = ['date', 'name', 'surname', 'signed', 'edit'];
  // dataSource = EXAMPLE_DATA;

  public signatures: Signature[] = [];
  public signature: Signature;
  
  // for alert
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };
  constructor(private service: SignService,private router: Router ,public dialog: MatDialog, public alertService: AlertService) { }

  ngOnInit(): void {
    this.signature = this.clearFormInputArea();
    this.getAllAddedSignature();
  }

  getAllAddedSignature() {
    let signatures: Signature[] = [];

    const data = this.service.getAllAddedSign().subscribe(res => {
      console.log(res);
      
      for (let index = 0; index < res.length; index++) {
        const isSigned = res[index]['IsSigned'] === true ? 'true' : '';
        const isCompletlySigned = res[index]['IsCompletlySigned'] === true ? 'true' : '';

        signatures.push(new Signature(parseInt(sessionStorage.getItem('Id') as string), res[index]['Id'], res[index]['FirstName'], res[index]['LastName'], isSigned, isCompletlySigned, res[index]['Date']));
      }

      this.signatures = signatures;
    });

  }


  getSignatureById(id: number): Signature {
    return this.signatures.filter(x => x.Id === id)[0];
  }

  submit(signForm: NgForm) {
    console.log(signForm.value['isCompletlySigned']);
    
    let sign = {
      'contractId': sessionStorage.getItem('Id'),
      'id': this.signature.Id,
      'date': signForm.value['date'],
      'firstname': signForm.value['firstname'],
      'lastname': signForm.value['lastname'],
      'isSigned': signForm.value['isSigned'] === '' ? false : signForm.value['isSigned'],
      'isCompletlySigned': signForm.value['isCompletlySigned'] === '' || signForm.value['isCompletlySigned'] === null ? false : signForm.value['isCompletlySigned']
    }

      this.service.createSign(sign).subscribe(response => {
        console.log(response);
        this.signature =this.clearFormInputArea();
        signForm.reset();
        this.getAllAddedSignature();
      })

  }

  clearFormInputArea(): Signature {
    return new Signature(parseInt(sessionStorage.getItem('Id') as string), 0, "", "", "", "", "Datum");
  }


  edit(id: number) {

    this.signature = this.getSignatureById(id);
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
        this.service.deleteSign(id).subscribe((responseData) =>{
          this.clearFormInputArea();
          this.getAllAddedSignature();
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
    this.router.navigate(['contract/files']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/comments']); 
  }

}