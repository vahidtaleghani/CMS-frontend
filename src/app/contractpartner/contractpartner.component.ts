import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ContractPartner } from './models/contractpartner';
import { Address } from './models/address';
import { Info } from './models/info';
import { ContractpartnerService } from './services/contractpartner.service';
import { ContractType } from './models/contracttype';
import { ContractStatus } from './models/contractstatus';


export interface Сontractpartner {
	contactperson: string;
	registernumber: string;
	department: string;
	address?: Address;
	info?: Info[];
}


@Component({
    selector: 'app-contractpartner',
    templateUrl: './contractpartner.component.html',
    styleUrls: ['./contractpartner.component.css'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
})
export class ContractpartnerComponent implements OnInit {

	@ViewChildren('innerTables') innerTables: QueryList<MatTable<Info>>;

	public allContactPartners: ContractPartner[] = [];
	public contractPartners: ContractPartner[] = [];
	public contractType: ContractType[] = [];
	public contractStatus: ContractStatus[] = [];
  
	expandedElement: Сontractpartner | null
	columnsToDisplay: string[] = ['contactperson', 'registernumber', 'department', 'street', 'homenumber', 'district', 'city', 'edit'];
	columnsToDisplayHidden: string[] = ['companyName', 'contactNumber', 'contractType', 'contactPerson', 'status'];
	constructor(private service: ContractpartnerService) {
		this.getAllContractPartners();
	}

	ngOnInit(): void {
	}

	getContractTypeById(id: number): string {
		return this.contractType.filter(x => x.Id === id)[0].Type;
	  }
	  getContractStatusById(id: number): string {
		return this.contractStatus.filter(x => x.Id === id)[0].Status;
	  }

	getAllContractPartners() {

		this.allContactPartners.length = 0;
		this.contractPartners.length = 0;
		let contractPartners: ContractPartner[] = []

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
			  this.service.getAllContractPartners().subscribe(data => {
				data.forEach(element => {
				  contractPartners.push(new ContractPartner(element['ContractId'], element['Id'], element['CompanyName'], element['Person'], element['CompanyRegistrationNumber'], element['Department'], new Address(element['Address']['Street'], element['Address']['HouseNumber'], element['Address']['PostalCode'], element['Address']['City']), 
				  [new Info(element['CompanyName'], element['InfoId'],this.getContractTypeById(element['ContractTypeId']),element['Person'],this.getContractStatusById(element['ContractStatusId']))]));
				});
				this.contractPartners = contractPartners;
				console.log(this.contractPartners);
			  });
			});
		  });

	  }


	  edit(id: number) {
		
	  }
	
	  deleteById(id: number) {
	  }

}