import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})


export class SidemenuComponent {

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  
  currentUrl;
  sidemenuContract: boolean;


  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
    
        this.currentUrl = event.urlAfterRedirects;
        console.log(event.urlAfterRedirects);
        
        if (this.currentUrl.split("/").includes("contract")) {
          this.sidemenuContract = true;
        } else  {
          this.sidemenuContract = false;
        }
    
      }
    });

  }
  info(){
    this.router.navigate(['info'], {relativeTo:this.route});
  }

}

