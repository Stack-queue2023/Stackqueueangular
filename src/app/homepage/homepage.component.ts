
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from "@angular/fire/firestore";
import { collection } from 'firebase/firestore';
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
  constructor(private router:Router,private firestore:Firestore){
    this.url=`https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
    // this._http.get<any>("http://localhost:3000/courses").subscribe((coursedetails)=>{
    // this.coursedetails=coursedetails;
    // })
    const instance=collection(this.firestore,'courses');
    collectionData(instance).subscribe(x=>{
      this.coursedetails=x;
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
