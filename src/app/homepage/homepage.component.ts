import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    this.coursedetails=coursedetails;
    })
  }

  customerRegister(){
    this.router.navigateByUrl("login");
  }
}
