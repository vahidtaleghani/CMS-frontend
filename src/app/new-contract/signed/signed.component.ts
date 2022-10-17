import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Signature } from './models/signature';
import { NgForm } from '@angular/forms';
import { SignService } from './services/sign.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signed',
  templateUrl: './signed.component.html',
  styleUrls: ['./signed.component.css']
})
export class SignedComponent implements OnInit {

  displayedColumns: string[] = ['date', 'name', 'surname', 'signed', 'edit'];
  // dataSource = EXAMPLE_DATA;

  public signatures: Signature[] = [];
  public signature: Signature;

  constructor(private service: SignService,private router: Router) { }

  ngOnInit(): void {
    this.signature = this.clearFormInputArea();
    this.getAllAddedSignature();
  }

  getAllAddedSignature() {
    let signatures: Signature[] = [];

    const data = this.service.getAllAddedSign().subscribe(res => {
      console.log(res);
      
      for (let index = 0; index < res.length; index++) {
        const isSigned = res[index]['IsSigned'] === true ? 'true' : '';
        const isCompletlySigned = res[index]['IsCompletlySigned'] === true ? 'true' : '';

        signatures.push(new Signature(res[index]['Id'], res[index]['FirstName'], res[index]['LastName'], isSigned, isCompletlySigned, res[index]['Date']));
      }

      this.signatures = signatures;
    });

  }

  getSignatureById(id: number): Signature {
    return this.signatures.filter(x => x.Id === id)[0];
  }

  submit(signForm: NgForm) {
    
    let sign = {
      'id': this.signature.Id,
      'date': signForm.value['date'],
      'firstname': signForm.value['firstname'],
      'lastname': signForm.value['lastname'],
      'isSigned': signForm.value['isSigned'] === '' ? false : signForm.value['isSigned'],
      'isCompletlySigned': signForm.value['isCompletlySigned'] === '' ? false : signForm.value['isCompletlySigned']
    }

    console.log(sign);

    this.service.createSign(sign).subscribe(response => {
      console.log(response);
      this.getAllAddedSignature();
    })

  }

  clearFormInputArea(): Signature {
    return new Signature(0, "", "", "", "", "Datum");
  }

  edit(id: number) {

    this.signature = this.getSignatureById(id);
  }

  deleteById(id: number) {

  }
  gotoNextPage(){
    this.router.navigate(['contract/files']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/comments']); 
  }

}
