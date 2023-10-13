import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggle:boolean=true;
  isLogged:boolean=false;
  getstudentDetails:any;
  studentDetails:any;
  constructor(){
    if( !sessionStorage.getItem("islogged")==undefined ||sessionStorage.getItem("islogged")=="true" ){
      this.isLogged=false;
      this.getstudentDetails=sessionStorage.getItem("studentDetails");
      this.studentDetails=JSON.parse(this.getstudentDetails);
      console.log(this.studentDetails);
    }
    else{
      this.isLogged=true;
    }
  }
  showheart(){
    this.toggle=!this.toggle;
  }
  Logout(){
    sessionStorage.removeItem('islogged');
    sessionStorage.removeItem('studentDetails');
    window.location.reload();
  }
}
