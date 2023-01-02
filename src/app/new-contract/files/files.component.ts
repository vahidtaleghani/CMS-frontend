import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { File } from './models/file';
import { FilesService } from './services/files.service';
import { NgForm } from '@angular/forms';
import {formatDate} from '@angular/common';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { AlertService } from '../../alert/services/alert.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  @ViewChild("fileData") fileData: ElementRef;

  public files: File[] = [];
  public file: File;
  public fileName = '';
  public data: any;

  public fileInput: HTMLInputElement;

  displayedColumns: string[] = ['date', 'fileName', 'comment', 'final', 'edit'];

  // for alert
  options = {
  autoClose: true,
  keepAfterRouteChange: false
  };

  constructor(private service: FilesService,private router: Router,public dialog: MatDialog, public alertService: AlertService) { }

  ngOnInit(): void {
    this.file = this.clearFormInputArea();
    this.loadPage();
  }


  loadPage() {
    let files: File[] = [];

    this.service.getAllFiles().subscribe(res => {
      for (let index = 0; index < res.length; index++) {

        const isFinal = res[index]['IsFinal'] === true ? 'true' : '';
        files.push(new File(res[index]['FileId'], res[index]['Date'], res[index]['FileName'], res[index]['Comment'],isFinal));
      }
      this.files = files;
    });
  }

  onFileSelected(event) {
    this.data = event.target.files[0];
    this.fileName = event.target.files[0].name;
    console.log(this.data);
  }


  //MultipartFile 

  submit(fileForm: NgForm) {
     


    this.fileInput = this.fileData.nativeElement;
    console.log(this.fileInput.files);

      /* let formData = new FormData();
      formData.append('id', this.file.Id.toString());
      formData.append('date', formatDate(new Date(), 'yyyy-MM-dd','en-US'));
      formData.append('fileName', this.fileName);
      formData.append('comment', fileForm['comment']);
      formData.append('isfinal', fileForm['final'] === '' ? false : fileForm['final']);
      formData.append('data' , this.fileInput.files); 
 */

       let file = {
        'id': this.file.Id,
        'date': formatDate(new Date(), 'yyyy-MM-dd','en-US'),
        'fileName': this.fileName,
        'comment': fileForm['comment'],
        'isfinal': fileForm['final'] === '' ? false : fileForm['final'], 
        'data' : this.data
      } 

      //console.log(file);
      /* let formData = new FormData();
      formData.append('file' , this.data); */

      this.service.createFile(file).subscribe(response => {
        //console.log(file);
        this.loadPage();
        this.alertService.success("Erfolgreich hinzugefügt", this.options);
      },
      error => {
        this.alertService.error(error, this.options);
      })
  }

  clearFormInputArea(): File {
    return new File(0,'','','','');
  }

  deleteById(id: number) {
    console.log(id);
    const confirmDialog = this.dialog.open(ConfirmDialogComponent,{
      data:{
        title: 'Bestätigen Entfernen',
        message: 'Sind Sie sicher, dass Sie Folgendes entfernen möchten: ' 
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.deleteFile(id).subscribe((responseData) =>{
          this.clearFormInputArea();
          this.loadPage();
          this.alertService.success("Erfolgreich gelöscht", this.options);
        })
      }
    },error =>{
      console.log(error);
      this.alertService.error("Ein Fehler ist aufgetreten", this.options);
    }
    );
  }

  gotoNextPage(){
    this.router.navigate(['contract/home']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/signed']); 
  }

}
