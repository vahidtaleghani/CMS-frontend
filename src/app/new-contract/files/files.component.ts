import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Files {
  date: string;
  fileName: string;
  comment: string;
  final: boolean;
}

const EXAMPLE_DATA: Files[] = [
  { date: '25.10.2021', fileName: 'PDF_1.pdf', comment: 'Lorem ipsum dolor sit', final: false },
  { date: '15.01.2022', fileName: 'PDF_2.pdf', comment: '', final: false },
  { date: '16.01.2022', fileName: 'PDF_3.pdf', comment: '', final: true }
];

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  displayedColumns: string[] = ['date', 'fileName', 'comment', 'final', 'edit'];
  dataSource = EXAMPLE_DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoNextPage(){
    this.router.navigate(['contract/home']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/signed']); 
  }

}
