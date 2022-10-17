import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Category } from './models/category';
import { CategoryType } from './models/categorytype';
import { NgForm } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorization',
  templateUrl: './categorization.component.html',
  styleUrls: ['./categorization.component.css']
})
export class CategorizationComponent implements OnInit {

  displayedColumns: string[] = ['category', 'comment', 'edit'];
  // dataSource = EXAMPLE_DATA;

  public categoryTypes: CategoryType[] = [];
  public categories: Category[] = [];
  public category: Category;

  constructor(private service: CategoryService,private router: Router) { }

  ngOnInit(): void {
    this.category = this.clearFormInputArea();
    this.loadPage();
  }

  getCategoryTypeOptions(): CategoryType[] {
    let categorytypes: CategoryType[] = [];

    categorytypes.push(new CategoryType(1, "F&E"));
    categorytypes.push(new CategoryType(2, "Intern"));
    categorytypes.push(new CategoryType(3, "Sonstiges"));

    return categorytypes;
  }

  getCategoryTypById(id: number): string {
    return this.categoryTypes.filter(x => x.Id === id)[0].Type;
  }

  clearFormInputArea(): Category {
    return new Category(0, "", "Kategorie");
  }

  getCategoryById(id) {
    return this.categories.filter(x => x.Id === id)[0];
  }

  hasFormFilledProperly(categoryForm: NgForm): boolean {
    let values = new Array();

    Object.entries(categoryForm.value).forEach(([key, value]) => values.push(value));

    if (values.includes("")) {
      return false;
    }
    return true;
  }


  isNumeric(num) {
    return !isNaN(num)
  }

  getCategoryTypeId(type: string): number {
    if (!this.isNumeric(type)) {
      return this.categoryTypes.filter(x => x.Type === type)[0].Id;
    }
    return Number(type);
  }

  loadPage() {
    let categoryTypes: CategoryType[] = [];

    this.service.getAllCategoryTypes().subscribe(data => {

      data['Data'].forEach(element => {
        categoryTypes.push(new CategoryType(element['CategoryTypeId'], element['Type']));
      })


      this.categoryTypes = categoryTypes;


      this.getAllAddedCategory();
    })

  }

  getAllAddedCategory() {
    let categories: Category[] = [];
    
    const data = this.service.getAllAddedCategory().subscribe(res => {
      console.log(res);

      for (let index = 0; index < res.length; index++) {
        console.log(res[index]['Id']);
        categories.push(new Category(res[index]['Id'], res[index]['Comment'], this.getCategoryTypById(res[index]['CategoryTypeId'])));
      }

      this.categories = categories;
    });
  }

  submit(categoryForm: NgForm) {
    if (this.hasFormFilledProperly(categoryForm)) {

      categoryForm.value['categoryTypeId'] = this.getCategoryTypeId(categoryForm.value['categoryTypeId']);
      console.log(categoryForm.value);
      console.log(this.category);

      let category = {
        'id': this.category.Id,
        'categoryTypeId': categoryForm.value['categoryTypeId'],
        'comment': categoryForm.value['comment']
      }

      this.service.createCategory(category).subscribe(response => {
        console.log(response);
        this.getAllAddedCategory();
      })
    }
    else {
      alert("Error");
    }

  }

  edit(id: number) {

    this.category = this.getCategoryById(id);
    // this.fine = this.getFineById(id);
    // console.log(this.fine);

  }

  deleteById(id: number) {

  }

  gotoNextPage(){
    this.router.navigate(['contract/duties']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/fine']); 
  }
}
