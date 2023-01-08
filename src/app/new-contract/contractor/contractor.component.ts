import { Component, OnInit } from '@angular/core';
import { Address } from './models/address';
import { ContractPartner } from './models/contractpartner';
import { NgForm } from '@angular/forms';
import { ContractorService } from './services/contractor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {

  public contractPartners: ContractPartner[] = [];
  public contractPartner: ContractPartner;
  public allContactPartners: ContractPartner[] = [];

  displayedColumns: string[] = ['contactperson', 'registernumber', 'department', 'street', 'homenumber', 'district', 'city', 'edit'];

  constructor(private service: ContractorService,private router: Router) {
    this.contractPartner = this.clearFormInputArea();
    this.getAllContractPartners();
  }

  ngOnInit(): void {
  }

  getAllContractPartners() {
    this.allContactPartners.length = 0;
    this.contractPartners.length = 0;
    let contractPartners: ContractPartner[] = []

    this.service.getAllContractPartners().subscribe(data => {
      data.forEach(element => {
        contractPartners.push(new ContractPartner(element['contractId'], element['Id'], element['CompanyName'], element['Person'], element['CompanyRegistrationNumber'], element['Department'], new Address(element['Address']['Street'], element['Address']['HouseNumber'], element['Address']['PostalCode'], element['Address']['City']), element['Email'], element['TelNumber']));
      });
      this.contractPartners = contractPartners;
      console.log(this.contractPartners);
    })
  }

  getContractPartnerById(id: number) {
    this.contractPartner = this.contractPartners.filter(x => x.Id === id)[0];
  }

  submit(contractPartnerForm: NgForm): void {
    
    const contractPartner = new ContractPartner(parseInt(sessionStorage.getItem('Id') as string),this.contractPartner.Id, contractPartnerForm.value['companyName'], contractPartnerForm.value['person'], contractPartnerForm.value['companyRegistrationNumber'], contractPartnerForm.value['department'], new Address(contractPartnerForm.value['street'], contractPartnerForm.value['houseNumber'], contractPartnerForm.value['postalCode'], contractPartnerForm.value['city']), contractPartnerForm.value['email'], contractPartnerForm.value['telNumber']);

    this.service.postNewContractPartner(contractPartner).subscribe(response => {
      console.log(response);
      this.contractPartner = this.clearFormInputArea();
      this.getAllContractPartners();
    })
  }
  
  clearFormInputArea(): ContractPartner {
    return new ContractPartner(parseInt(sessionStorage.getItem('Id') as string),0, "", "", "", "", new Address("", "", "", ""), "", "");
  }

  edit(id: number) {
    this.getContractPartnerById(id);
  }

  deleteById(id: number) {
  }

  gotoNextPage(){
    this.router.navigate(['contract/liability']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/info']); 
  }
}
