import { Component, VERSION, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Contract } from './models/contract';
import { filter } from 'rxjs/operators';
import { ContractService } from './services/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: ContractService) { }

  ngOnInit(): void {
    //alert(this.getCurrentUrl);
    if (this.getCurrentUrl() === '/contract') {
      this.service.getContractStatus().subscribe(res => {
        console.log(res);
        if (res) {
          const proceed = confirm("Are you sure you want to start a new contract?");
          if(proceed){
            this.startNewContract();
          }
          else{
            // this.transferToOldPage();
          }
        }
      })
    }
  }


  // not working properly.
  transferToOldPage() {
    let previousUrl: string;
    let currentUrl: string;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        previousUrl = currentUrl;
        currentUrl = event.url;
        if (previousUrl !== undefined) {
          this.router.navigate(['/' + previousUrl]); // error.
        }
      });
  }

  public getCurrentUrl() {
    let currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      //alert(currentUrl);
        currentUrl = event.url;
      };
    });

    return currentUrl;
  }

  startNewContract(): void {
    const contract = new Contract("farasat-user-token", "active");
    const requestBody = JSON.stringify(contract);
    //alert(requestBody);
    const response = this.service.startNewContract(requestBody).subscribe(res =>{
      console.log(requestBody);
    });
  }
}


