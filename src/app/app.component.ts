<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var AOS: any;
=======
import { Component } from '@angular/core';
>>>>>>> efcae813fe88408f088e57a135791f4a271fb970

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
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
=======
export class AppComponent {
  title = 'Stack-queue';
>>>>>>> efcae813fe88408f088e57a135791f4a271fb970
}
