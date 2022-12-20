import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

export interface Search {
  id: number;
  name: string;
}

export interface Contract {
  number: string;
  status: string;
  companyName: string;
  type: string;
  contactPerson: string;
  notifications: boolean;

}

const EXAMPLE_SEARCH: Search[] = [
  { id: 1, name: 'Firmenname' },
  { id: 2, name: 'Vertragsnummer' },
  { id: 3, name: 'Vertragstyp' },
  { id: 4, name: 'Ansprechperson' },
  { id: 5, name: 'Interne Anchprechperson' }
];

const CONTRACT_DATA: Contract[] = [
  { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: true},
  { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: true},
  { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: true},
  { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false},
  { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false},
  {number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: true},
  { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false},
  { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false },
  
  {number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false}
];

@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.css']
})
export class AllContractsComponent implements OnInit {

  displayedColumns: string[] = ['number', 'status', 'companyName', 'type', 'contactPerson',"notifications",  'edit'];
  dropdownList =  EXAMPLE_SEARCH;
  selectedItems: any[];
  contractData = CONTRACT_DATA;
  dropdownSettings: IDropdownSettings;

  constructor() { }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
  }

  onItemSelect(item: any) {
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
