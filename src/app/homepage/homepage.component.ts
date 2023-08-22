import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  coursedetails:any;
  isshowhide:boolean=false;
  constructor(private _http:HttpClient,private router:Router){
    this._http.get<any>("http://localhost:3000/courses").subscribe((coursedetails)=>{
      console.log(coursedetails);
    this.coursedetails=coursedetails;
    })
  }

  customerRegister(){
    this.router.navigateByUrl("login");
}
ngOnInit() {
  AOS.init({
  });
}
}
