import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  constructor(private form:FormBuilder){}

  getintouch=this.form.group({
    firstname:['',[Validators.required,Validators.pattern("^[a-zA-Z][a-zA-Z0-9_ -]{2,19}$")]],
    emailid:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    lastname:['',[Validators.required,,Validators.pattern("^[a-zA-Z][a-zA-Z0-9_ -]{2,19}$")]],
    subject:['',[Validators.required,Validators.minLength(25)]],
    message:['',[Validators.required,Validators.minLength(100)]]
  })

  contactFormSubmission(){

  }
}
