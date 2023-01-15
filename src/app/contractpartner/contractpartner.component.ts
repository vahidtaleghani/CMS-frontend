import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';





export interface contractpartner {
	contactperson: string;
	registernumber: string;
	department: string;
	street: string;
	homenumber: string;
	district: string;
	city: string;


	firmname: string;
	email: string;
	phonenumber: string;
}






const EXAMPLE_DATA: contractpartner[] = [
	{ contactperson: 'Berger A.', registernumber: '63636', department: 'Abteilung1', street: 'Postgasse', homenumber: '12', district: '1020', city: 'Wien', firmname: 'firma2', email: 'email2@email.email', phonenumber: '311111111' },
	{ contactperson: 'Braun B.', registernumber: '15263', department: 'Abteilung2', street: 'Ringstrasse', homenumber: '32', district: '1030', city: 'Wien', firmname: 'firma', email: 'email@email.email', phonenumber: '123123123' }

];




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

  
	dataSource = EXAMPLE_DATA;
  
	expandedElement: contractpartner | null;
	columnsToDisplay: string[] = ['contactperson', 'registernumber', 'department', 'street', 'homenumber', 'district', 'city', 'edit'];
	columnsToDisplayHidden: string[] = ['phonenumber', 'email', 'firmname'];
	constructor() {}

	ngOnInit(): void {
	}

}