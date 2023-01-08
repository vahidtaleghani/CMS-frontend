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
    console.log("Hello");
    alert(this.getCurrentUrl());
    if (this.getCurrentUrl() === '/contract') {
      console.log("send req");
      this.service.getContractStatus().subscribe(res => {
        console.log(res);
        if (res) {
          const proceed = confirm("Are you sure you want to start a new contract?");
          if(proceed){
            alert("N")
            this.startNewContract();
          }
          else{
            // this.transferToOldPage();
          }
        }
        else{
          this.startNewContract();
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
    const id = sessionStorage.getItem('Id');
    const contract = new Contract(parseInt(id as string), "active");
    const requestBody = JSON.stringify(contract);
    const response = this.service.startNewContract(requestBody).subscribe(res =>{
      sessionStorage.removeItem('Id')
      sessionStorage.setItem('Id', res['Message']);
    });
  }
}
