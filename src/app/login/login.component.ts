import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Firestore, collection, collectionData} from '@angular/fire/firestore'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  collectioninstance:any;
  constructor(private route:Router,private form:FormBuilder,private firestore:Firestore){

  }

  homepage(){
    this.route.navigateByUrl('').then(()=>{
      window.location.reload();
    });
  }

  loginvalidation=this.form.group({
    Email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    Password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]]
  })

  userLoginDetails(){

  }

}
