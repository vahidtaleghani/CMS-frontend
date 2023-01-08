import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Claim, PaymentPeriod } from './models/claim';
import { ClaimService } from './services/claim.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../alert/services/alert.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})

export class ClaimComponent implements OnInit {
  public claims: Claim[] = [];
  public claim: Claim;

  displayedColumns: string[] = ['date', 'monthly', 'quarterly', 'annually', 'edit'];

  // for alert
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  getTotalCost(paymentPeriodId: string) {
    return this.claims.filter(c => c.PaymentPeriodId === paymentPeriodId).map(c => c.Cost).reduce((acc, value) => acc + value, 0);
  }

  constructor(private service: ClaimService,private router: Router,public dialog: MatDialog, public alertService: AlertService) {

    this.claim = this.clearFormInputArea();
    this.getAllClaims();
  }

  ngOnInit(): void {
  }

  getAllClaims() {
    const data = this.service.getLiabilites().subscribe(res => {
      this.claims = res;

      for (let index = 0; index < this.claims.length; index++) {
        const paymentPeriodId = this.claims[index]['PaymentPeriodId'];
        this.claims[index]['PaymentPeriodId'] = PaymentPeriod[paymentPeriodId];
      }
      console.log(this.claims);
    });
  }

  getclaimById(id: number): Claim {
    return this.claims.filter(x => x.Id === id)[0];
  }

  getLastAddedclaim(): Claim {

    if (this.claims.length == 0) {
      return new Claim(parseInt(sessionStorage.getItem('Id') as string), 0, "", "", 0);
    }

    return this.claims[this.claims.length - 1];
  }

  clearFormInputArea(): Claim {
    return new Claim(parseInt(sessionStorage.getItem('Id') as string), 0, "", "", Number(""));
  }

  hasFormFilledProperly(claimForm: NgForm): boolean {
    let values = new Array();

    Object.entries(claimForm.value).forEach(([key, value]) => values.push(value));

    if (values.includes("")) {
      return false;
    }
    return true;
  }

  submit(claimForm: NgForm) {

    if (this.hasFormFilledProperly(claimForm)) {
      claimForm.value['contractId'] = parseInt(sessionStorage.getItem('Id') as string)
      claimForm.value['id'] = this.claim.Id;

      if (claimForm.value['paymentPeriodId'] === "Annually" || claimForm.value['paymentPeriodId'] === "Quarterly"
        || claimForm.value['paymentPeriodId'] === "Monthly") {

        claimForm.value['paymentPeriodId'] = PaymentPeriod[claimForm.value['paymentPeriodId']];
      }
      const createclaimResponse = this.service.createClaim(claimForm.value).subscribe((responseData) => {
        this.claim = this.clearFormInputArea();
        claimForm.reset();
        this.getAllClaims();
      });
    }
    else {
      alert("error");
    }

  }


  edit(id: number) {
    this.claim = this.getclaimById(id);
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
        this.service.deleteClaim(id).subscribe((responseData) =>{
          this.clearFormInputArea();
          this.getAllClaims();
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
    this.router.navigate(['contract/affected-department']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/liability']); 
  }

}