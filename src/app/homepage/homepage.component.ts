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
  phoneNumber:any=7904925991;
  defaultMessage:any='Hello STACK-QUEUE, We need more details about your service.';
  url:any;
  constructor(private _http:HttpClient,private router:Router){
    this.url=`https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
    this._http.get<any>("http://localhost:3000/courses").subscribe((coursedetails)=>{
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
