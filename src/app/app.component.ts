import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'STACK-QUEUE';
  navbartoggle:boolean=true;
  footertoggle:boolean=true;

  constructor(private route:Router){
    route.events.subscribe((value)=>{
      if(value instanceof NavigationEnd){
        if(value.url=='/login'){
          this.navbartoggle=false;
          this.footertoggle=false;
        }
        if(value.url=='/register'){
          this.navbartoggle=false;
          this.footertoggle=false;
        }
      }
    })
  }

  ngOnInit() {
    AOS.init({
      // Global settings for AOS here
    });

  }
}
