import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';
import {Firestore, addDoc, collection, collectionData} from '@angular/fire/firestore'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private route:Router,private form:FormBuilder,private firestore:Firestore){
    // database.list('/courses')

  }
  homepage(){
    this.route.navigateByUrl('').then(()=>{
      window.location.reload();
    });
  }

  registerform=this.form.group({
    username:['',[Validators.required,Validators.pattern("^(?!.*(.).*\\1{3})[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]],
    phonenumber:['',[Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}")]],
    password:['',[Validators.required,Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
    confirmpassword:['',Validators.required]
  })

  registerFormSubmit(registerDetails:any){
    if(registerDetails.password == registerDetails.confirmpassword){
    const instance=collection(this.firestore,'userregistration');
    collectionData(instance).subscribe((x)=>{
      console.log(x);
      const user=x.find((userdata: any) => {
        return userdata.email == registerDetails.email;
      });
      // console.log(user);
      if(user){
        alert("Already registered");
      }
      else{
        const instance=collection(this.firestore,'userregistration');
        addDoc(instance, registerDetails).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
    alert("thanks");
      }
    })

  }
  else{
    alert("Confirm password does not match");
  }

  }
}
