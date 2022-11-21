import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';
import { Department } from './models/department';
import { DepartmentType } from './models/depatmentType';
import { DepartmentService } from './services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affected-department',
  templateUrl: './affected-department.component.html',
  styleUrls: ['./affected-department.component.css']
})
export class AffectedDepartmentComponent implements OnInit {

  dropdownList: any[];
  public allDepartments: DepartmentType[] = [];
  public selectedDepartments: Department[] = [];

  selectedItems: any[];
  dropdownSettings: IDropdownSettings;

  displayedColumns: string[] = ['person','name', 'edit'];

  constructor(private service: DepartmentService,private router: Router) {

  }

  ngOnInit() {
    // this.getAllDepartmentOptions();
    this.loadPage();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onItemRemove(item: any) {
    console.log(item);
  }

  getAllDepartmentOptions() {
    let departments: DepartmentType[] = [];

    this.service.getAllDepartments().subscribe(data => {
      console.log(data);
      departments = data['Data'];

      departments.forEach(element => {
        this.dropdownList.push(new DepartmentType(element['Id'], element['Name']));
      })

      // this.dropdownList = this.allDepartments;
    })

    //console.log(this.allDepartments);

  }

  getDepartmentNameById(id: number): string {
    return this.dropdownList.filter(x => x.Id === id)[0].name;
  }

  getDepartmentIdByName(name: string): number {
    return this.dropdownList.filter(x => x.name === name)[0].id;
  }

  loadPage() {
    let departments: DepartmentType[] = [];
    let selectedDepartments: Department[] = [];
    this.allDepartments;

    this.service.getAllDepartments().subscribe(data => {
      departments = data['Data'];

      departments.forEach(element => {
        this.allDepartments.push(new DepartmentType(element['Id'], element['Name']));
      })

      this.dropdownList = this.allDepartments;

      this.getSelectedDepartments();
    })
  }

  getSelectedDepartments() {
    let selectedDepartments: Department[] = [];
     this.service.getSelectedDepartments().subscribe(data => {
      data['Data'] = data['Data']?.sort((a, b) => (a.DepartmentTypeId > b.DepartmentTypeId ? 1 : -1));
      (data['Data']).forEach(element => {
        selectedDepartments.push(new Department(element['Id'],element['ContractId'],this.getDepartmentNameById(element['DepartmentTypeId']),element['PersonName']));
      })
      this.selectedDepartments = selectedDepartments;
    }) 
  }

  submit(departmentForm: NgForm): void {
    let departments : any = [];
    console.log(departmentForm.value['department']);
    console.log(departmentForm.value['personName']);
    departmentForm.value['department'].forEach(element => {
      const department = {
        'Id': element.id,
        'DepartmentTypeId': this.getDepartmentIdByName(element.name),
        'PersonName' : departmentForm.value['personName']
      };
      departments.push(department);
    })
    console.log(departments);
    this.service.createDepartment(departments).subscribe(data => {
      this.getSelectedDepartments();
    })
  }

  gotoNextPage(){
    this.router.navigate(['contract/fine']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/claim']); 
  }
}
