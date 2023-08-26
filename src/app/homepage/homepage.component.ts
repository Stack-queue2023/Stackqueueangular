import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  coursedetails:any;
  phoneNumber:any=7904925991;
  defaultMessage:any='Hello STACK-QUEUE, We need more details about your service.';
  url:any;
  constructor(private _http:HttpClient){
    this.url=`https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
    this._http.get<any>("http://localhost:3000/courses").subscribe((coursedetails)=>{
    console.log(coursedetails);
    this.coursedetails=coursedetails;
    })
  }

  ngOnInit() {
    AOS.init({
    });
  }
}
