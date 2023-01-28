import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ContractPartner } from './models/contractpartner';
import { Address } from './models/address';
import { Info } from './models/info';
import { ContractpartnerService } from './services/contractpartner.service';


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
	
  
	expandedElement: Сontractpartner | null
	columnsToDisplay: string[] = ['contactperson', 'registernumber', 'department', 'street', 'homenumber', 'district', 'city', 'edit'];
	columnsToDisplayHidden: string[] = ['email', 'telNumber'];
	constructor(private service: ContractpartnerService) {
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
			contractPartners.push(new ContractPartner(element['contractId'], element['Id'], element['CompanyName'], element['Person'], element['CompanyRegistrationNumber'], element['Department'], new Address(element['Address']['Street'], element['Address']['HouseNumber'], element['Address']['PostalCode'], element['Address']['City']), [new Info(element['Email'], element['TelNumber'])]));
		  });
		  this.contractPartners = contractPartners;
		  console.log(this.contractPartners);
		})
	  }


	  edit(id: number) {
		
	  }
	
	  deleteById(id: number) {
	  }

}