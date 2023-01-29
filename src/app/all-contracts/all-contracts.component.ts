import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { FormBuilder, FormGroup , NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { AllcontractsService } from './all-contracts.service';

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
  { id: 5, name: 'Interne Ansprechperson' }
];

const CONTRACT_DATA: Contract[] = [
  // { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: true},
  // { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: true},
  // { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: true},
  // { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false},
  // { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false},
  // {number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: true},
  // { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false},
  // { number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false },
  
  // {number: 'V-12345678', status: 'status1', companyName: 'MusterFirma GmbH', type: 'type1', contactPerson: 'Muster Mann', notifications: false}
];

@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.css']
})
export class AllContractsComponent implements OnInit {

  CONTRACT_DATA = null;
  displayedColumns: string[] = ['number', 'status', 'companyName', 'type', 'contactPerson',"notifications",  'edit'];
  dropdownList =  EXAMPLE_SEARCH;
  selectedItems: any[];
  contractData = CONTRACT_DATA;
  dropdownSettings: IDropdownSettings;
  searchText = "";

  constructor(private service: AllcontractsService) { }

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

    this.getAllContracts();
  }

  getAllContracts(){
    CONTRACT_DATA.length = 0;
    this.contractData.length = 0;
    const data = this.service.getAllContracts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        const number = 'V-12345678' //element['ContractNo'];
        const status = element['Status'];
        const companyName = element['CompanyName'];
        const type = element['ContractType'];
        const contactPerson = element['ContactPerson'];
        const notifications = true;
        const contractData: Contract = { number: number, status: status, companyName: companyName, type: type, contactPerson: contactPerson, notifications: notifications};
        CONTRACT_DATA.push(contractData);
      }
    });
  }

  searchByText(text, filters){
    if(isNaN(text)){
      text === 'empty'
    }

    const data = this.service.searchByText(text, filters).subscribe(res => {
      CONTRACT_DATA.length = 0;
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        const number = 'V-12345678' //element['ContractNo'];
        const status = element['Status'];
        const companyName = element['CompanyName'];
        const type = element['ContractType'];
        const contactPerson = element['ContactPerson'];
        const notifications = true;
        const contractData: Contract = { number: number, status: status, companyName: companyName, type: type, contactPerson: contactPerson, notifications: notifications};
        CONTRACT_DATA.push(contractData);
      }
    })
  }

  onKeypressEvent(event: any){
    // alert(this.searchText);
    console.log(this.searchText);
 }

  submit(searchField: NgForm) {
    console.log(searchField.value['personName']);
    let filters: any[] = [];
    
    if(searchField.value['items'] !== undefined){
       filters = this.convertFilterIdToString(searchField.value['items']); 
  }    
    
    this.searchByText(this.searchText, filters);
  }

  convertFilterIdToString(itemIds) : any[]{
    if(itemIds === null)
         return itemIds;

    let stringItems: any[] = [];
    for (let index = 0; index < itemIds.length; index++) {
      let element = itemIds[index];
      const value = EXAMPLE_SEARCH.at(element - 1)?.name
      stringItems.push(value);
    }

    return stringItems;
  }

  onItemSelect(item: any) {
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
