<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var AOS: any;
>>>>>>> 13565991add74c0ec9759559e272fd3a7a88c6cc

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {
  title = 'STACK-QUEUE';
=======
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
>>>>>>> 13565991add74c0ec9759559e272fd3a7a88c6cc
}
