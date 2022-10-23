import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Duty } from './models/duty';
import { DutyType } from './models/dutytype';
import { DutyService } from './services/duty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrls: ['./duties.component.css']
})
export class DutiesComponent implements OnInit {

  displayedColumns: string[] = ['date', 'typ', 'comment', 'edit'];

  public dutyTypes: DutyType[] = [];
  public duties: Duty[] = [];
  public duty: Duty;

  constructor(private service: DutyService,private router: Router) { }

  ngOnInit(): void {
    this.duty = this.clearFormInputArea();
    this.loadPage();
  }

  getDutyTypeById(id: number): string {
    return this.dutyTypes.filter(x => x.Id === id)[0].Type;;
  }

  isNumeric(num) {
    return !isNaN(num);
  }

  getDutyTypeId(type: string): number {
    if (!this.isNumeric(type)) {
      return this.dutyTypes.filter(x => x.Type === type)[0].Id;
    }
    return Number(type);
  }

  getDutyById(id: number): Duty {
    return this.duties.filter(x => x.Id === id)[0];
  }

  getAllDutyTypes(): DutyType[] {
    let dutytypes: DutyType[] = [];

    dutytypes.push(new DutyType(1, "F&E"));
    dutytypes.push(new DutyType(2, "Intern"));
    dutytypes.push(new DutyType(3, "Sonstiges"));

    return dutytypes;
  }

  // getAllAddedDuty() : Duty[] {
  //   let duties: Duty[] = [];
  //   duties.push(new Duty(1, "2022-06-21", this.getDutyTypeById(1), "Comment1"));
  //   duties.push(new Duty(2, "2022-07-21", this.getDutyTypeById(2), "Comment2"));
  //   return duties;
  // }

  clearFormInputArea(): Duty {
    return new Duty(0, "Datum", "Typ", "");
  }

  loadPage() {
    let dutyTypes: DutyType[] = [];

    this.service.getAllDutyTypes().subscribe(data => {
      console.log(data['Data']);

      data['Data'].forEach(element => {
        dutyTypes.push(new DutyType(element['Id'], element['Type']));
      })

      this.dutyTypes = dutyTypes;


      this.getAllAddedDuty();
    })

  }

  getAllAddedDuty() {
    let duties: Duty[] = [];

    const data = this.service.getAllAddedDuty().subscribe(res => {

      for (let index = 0; index < res.length; index++) {
        console.log(res[index]['Date']);
        duties.push(new Duty(res[index]['Id'], res[index]['Date'], this.getDutyTypeById(res[index]['DutyTypeId']), res[index]['Comment']));
      }

      this.duties = duties;
    });
  }

  hasFormFilledProperly(dutyForm: NgForm): boolean {
    let values = new Array();

    Object.entries(dutyForm.value).forEach(([key, value]) => values.push(value));

    if (values.includes("")) {
      return false;
    }
    return true;
  }

  submit(dutyForm: NgForm): void {
    if (this.hasFormFilledProperly(dutyForm)) {

      console.log(dutyForm.value);
      dutyForm.value['dutyTypeId'] = this.getDutyTypeId(dutyForm.value['dutyTypeId']);
      console.log(dutyForm.value);

      let duty = {
        'id': this.duty.Id,
        'dutyTypeId': dutyForm.value['dutyTypeId'],
        'comment': dutyForm.value['comment'],
        'date': dutyForm.value['date']
      }

      this.service.createDuty(duty).subscribe(response => {
        console.log(response);
        this.getAllAddedDuty();
      })
    }
    else {
      alert("Error");
    }

  }

  edit(id: number) {
    this.duty = this.getDutyById(id);
  }

  deleteById(id: number) {

  }

  gotoNextPage(){
    this.router.navigate(['contract/notification']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/categorization']); 
  }

}
