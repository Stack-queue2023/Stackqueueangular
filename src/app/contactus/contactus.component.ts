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
    firstname:['',Validators.required],
    emailid:['',Validators.required],
    lastname:['',Validators.required],
    subject:['',Validators.required],
    message:['',Validators.required]
  })
}
