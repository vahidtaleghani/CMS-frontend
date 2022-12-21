import { Component, OnInit } from '@angular/core';
import { Info } from './models/info';
import { ContractType } from './models/contracttype';
import { ContractStatus } from './models/contractstatus';
import { NgForm } from '@angular/forms';
import { InfoService } from './services/info.service';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public contractType: ContractType[] = [];
  public contractStatus: ContractStatus[] = [];
  public info: Info;
  public selectedStatus: ContractStatus;
  public selectedType: ContractType;

  constructor(private service: InfoService,private router: Router) {
    
  }
  terminationPeriod: any;
  projectReference: any;

  ngOnInit(): void {
    this.info = this.clearFormInputArea();
    this.loadPage();
  }


  getContractTypeById(id: number): string {
    return this.contractType.filter(x => x.Id === id)[0].Type;
  }
  getContractStatusById(id: number): string {
    return this.contractStatus.filter(x => x.Id === id)[0].Status;
  }

  isNumeric(num) {
    return !isNaN(num)
  }

  getContractTypeId(type: string): number {
    if (!this.isNumeric(type)) {
      return this.contractType.filter(x => x.Type === type)[0].Id;
    }
    return Number(type);
  }

  getContractStatusId(status: string): number {
    if (!this.isNumeric(status)) {
      return this.contractStatus.filter(x => x.Status === status)[0].Id;
    }
    return Number(status);
  }


  clearFormInputArea(): Info {
    return new Info("", "", "Status", "Type", "", "", "", 0, "", "", "");
  }

  hasFormFilledProperly(infoForm: NgForm): boolean {
    let values = new Array();

    Object.entries(infoForm.value).forEach(([key, value]) => values.push(value));

    if (values.includes("")) {
      return false;
    }
    return true;
  }


  loadPage() {
    this.service.getContractStatusOptions().subscribe(data => {
      const jsonObj = JSON.stringify(data);
      const contractStatusData = JSON.parse(jsonObj)['Data'];

      contractStatusData.forEach(data => {
        this.contractStatus.push(new ContractStatus(data['Id'], data['Status']));
      })

      this.service.getContractTypeOptions().subscribe(data => {
        const jsonObj = JSON.stringify(data);
        console.log(jsonObj);
        const contractTypeData = JSON.parse(jsonObj)['Data'];
        contractTypeData.forEach(data => {
          this.contractType.push(new ContractType(data['ContractTypeId'], data['Type']));
        })
        this.service.getInfo().subscribe(data => {
          console.log(data);
          
          if(data == undefined){
            this.info = this.clearFormInputArea();
          }
          else{
            console.log(typeof( data['StartDate']));
            this.info = new Info(data['Comment'], data['IsTemporary'].toString(), this.getContractStatusById(data['ContractStatusId']), this.getContractTypeById(data['ContractTypeId']), this.changeDateFormat(data['StartDate']), this.changeDateFormat(data['EndDate']), data['IsReferencedToAnotherProject'].toString(), data['ProjectId'], data['ProjectName'], data['TerminationPeriod'], this.changeDateFormat(data['ExpDate']));
            this.projectReference = this.info.IsReferencedToAnotherProject;
            this.terminationPeriod = this.info.TerminationPeriod;
          }
        });
      });
    });
  }

  changeDateFormat(dbDate: string): string{
    const newdate= dbDate.substring(0,10);
    const dateParts= newdate.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const date = dateParts[2];

    let newDate = month + " / " + date + " / " + year;

    console.log(newDate);
    
    return newDate;
  }

  submit(infoForm: NgForm): void {

    if (this.hasFormFilledProperly(infoForm)) {
      // post info 
      infoForm.value['ContractId'] = sessionStorage.getItem('Id');
      infoForm.value['contractTypeId'] = this.getContractTypeId(infoForm.value['contractTypeId']);
      infoForm.value['contractStatusId'] = this.getContractStatusId(infoForm.value['contractStatusId']);
      infoForm.value['isTemporary'] = (infoForm.value['isTemporary'] === 'true');
      infoForm.value['isReferencedToAnotherProject'] = (infoForm.value['isReferencedToAnotherProject'] === 'true');

      if (infoForm.value['isTemporary'] === 'true' || infoForm.value['isTemporary'] === 'false') {
        infoForm.value['isTemporary'] = (infoForm.value['isTemporary'] === 'true');
      }
      if (infoForm.value['isReferencedToAnotherProject'] === 'true' || infoForm.value['isReferencedToAnotherProject'] === 'false') {
        infoForm.value['isReferencedToAnotherProject'] = (infoForm.value['isReferencedToAnotherProject'] === 'true');
      }
      const response = this.service.postInfo(infoForm.value);
      this.router.navigate(['contract/contractor']);
    }
    else {
      alert("Error");
    }
  }
}