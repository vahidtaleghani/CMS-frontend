import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface Info {
	email: string;
	phonenumber: string;
}

export interface Сontractpartner {
	contactperson: string;
	registernumber: string;
	department: string;
	street: string;
	homenumber: string;
	district: string;
	city: string;
	firmname: string;
	info?: Info [] | MatTableDataSource<Info>;
}


const EXAMPLE_DATA: Сontractpartner[] = [
	{
		contactperson: 'Berger A.', registernumber: '63636', department: 'Abteilung1', street: 'Postgasse', homenumber: '12', district: '1020', city: 'Wien', firmname: 'firma2',
		info: [{
			email: 'email2@email.email',
			phonenumber: '311111111'
		}]
	},
	{
		contactperson: 'Braun B.', registernumber: '15263', department: 'Abteilung2', street: 'Ringstrasse', homenumber: '32', district: '1030', city: 'Wien', firmname: 'firma',
		info: [{
			email: 'email2@email.email',
			phonenumber: '311111111'
		}]
	}

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

	@ViewChildren('innerTables') innerTables: QueryList<MatTable<Info>>;



	dataSource = EXAMPLE_DATA;
  
	expandedElement: Сontractpartner | null;
	columnsToDisplay: string[] = ['contactperson', 'registernumber', 'department', 'street', 'homenumber', 'district', 'city', 'edit'];
	columnsToDisplayHidden: string[] = ['email', 'phonenumber'];
	constructor(
	) {}

	ngOnInit(): void {
	}



}