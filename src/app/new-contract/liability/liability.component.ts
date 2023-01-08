import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Liability, PaymentPeriod } from './models/liability';
import { LiabilityService } from './services/liability.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { AlertComponent } from '../../alert/alert.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../alert/services/alert.service';

@Component({
  selector: 'app-liability',
  templateUrl: './liability.component.html',
  styleUrls: ['./liability.component.css']
})
export class LiabilityComponent implements OnInit {

  public liabilities: Liability[] = [];
  public liability: Liability;

  displayedColumns: string[] = ['date', 'monthly', 'quarterly', 'annually', 'edit'];

  // for alert
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  getTotalCost(paymentPeriodId: string) {
    return this.liabilities.filter(c => c.PaymentPeriodId === paymentPeriodId).map(c => c.Cost).reduce((acc, value) => acc + value, 0);
  }

  constructor(private service: LiabilityService,private router: Router,public dialog: MatDialog, public alertService: AlertService) {
    this.liability = this.clearFormInputArea();
    this.getAllLiabilities();
  }

  ngOnInit(): void {
  }


  getAllLiabilities() {
    const data = this.service.getLiabilites().subscribe(res => {
      this.liabilities = res;
      
      for (let index = 0; index < this.liabilities.length; index++) {
        const paymentPeriodId = this.liabilities[index]['PaymentPeriodId'];
        this.liabilities[index]['PaymentPeriodId'] = PaymentPeriod[paymentPeriodId];
      }
      console.log(this.liabilities);
    });
  }

  getLiabilityById(id: number): Liability {
    return this.liabilities.filter(x => x.Id === id)[0];
  }

  getLastAddedLiability(): Liability {

    if (this.liabilities.length == 0) {
      return new Liability(parseInt(sessionStorage.getItem('Id') as string), 0, "", "", 0);
    }

    return this.liabilities[this.liabilities.length - 1];
  }

  clearFormInputArea(): Liability {
    return new Liability(parseInt(sessionStorage.getItem('Id') as string),0, "", "", Number(""));
  }

  hasFormFilledProperly(liabilityForm: NgForm): boolean {
    let values = new Array();

    Object.entries(liabilityForm.value).forEach(([key, value]) => values.push(value));

    if (values.includes("")) {
      return false;
    }
    return true;
  }

  submit(liabilityForm: NgForm) {

    if (this.hasFormFilledProperly(liabilityForm)) {
      liabilityForm.value['contractId'] = parseInt(sessionStorage.getItem('Id') as string)
      liabilityForm.value['id'] = this.liability.Id;

      if (liabilityForm.value['paymentPeriodId'] === "Annually" || liabilityForm.value['paymentPeriodId'] === "Quarterly"
        || liabilityForm.value['paymentPeriodId'] === "Monthly") {

        liabilityForm.value['paymentPeriodId'] = PaymentPeriod[liabilityForm.value['paymentPeriodId']];
      }
      const createLiabilityResponse = this.service.createLiability(liabilityForm.value).subscribe((responseData) => {
        this.liability = this.clearFormInputArea();
        this.getAllLiabilities();
      });
    }
    else {
      alert("error");
    }

  }

  edit(id: number) {
    this.liability = this.getLiabilityById(id);
  }

  deleteById(id: number) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent,{
      data:{
        title: 'Bestätigen Entfernen',
        message: 'Sind Sie sicher, dass Sie Folgendes entfernen möchten: ' 
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.deleteLiability(id).subscribe((responseData) =>{
          this.clearFormInputArea();
          this.getAllLiabilities();
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
    this.router.navigate(['contract/claim']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/contractor']); 
  }

}
