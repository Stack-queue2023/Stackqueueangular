import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admissionform',
  templateUrl: './admissionform.component.html',
  styleUrls: ['./admissionform.component.css']
})
export class AdmissionformComponent {
  splitDate:any;
  currentDate:any;
  getTime:any;
  formatDate:any;
  joinedDate:any;
  getJoinedTime:any;
  joinedFormatDate:any;
  expiryDate:any="";
  constructor(private formsbuilder:FormBuilder){}

  //get Admission Details
  AdmissionDetails=this.formsbuilder.group({
    Studentname:['',[Validators.required,Validators.pattern("^(?!.*\\s{2,})[a-zA-Z\\s]+$")]],
    Studentaddress:['',[Validators.required,Validators.minLength(20)]],
    Studentphonenumber:['',[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]],
    Studentemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    Studentjoined:['',Validators.required],
    paymentmode:['',Validators.required],
    duedate:['2023-08-18',Validators.required]
  });

  getAdmissionDetails(){

  }

  dateJoined(joined:any){
  this.splitDate=joined.split("-");
    this.currentDate=new Date();
    this.getTime=this.currentDate.getTime();
    this.formatDate=(formatDate(this.getTime,'MM-dd-yyyy hh:mm:ss','en-US','+0530'));
    console.log(this.formatDate);
    this.joinedDate=new Date(joined);
    this.getJoinedTime=this.joinedDate.getTime();
    this.joinedFormatDate=formatDate(this.getJoinedTime,'MM-dd-yyyy 00:00:00','en-US','+0530');
    console.log(this.joinedFormatDate);
    if(this.getTime<this.getJoinedTime){
      this.expiryDate="";
    }
    else{
      this.expiryDate="Date Expires";
    }
  }
}

