import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursedetails:any;
  isshowhide:boolean[]=[false];
  oldBoolean:any;

  constructor(private _http:HttpClient){
    this._http.get<any>("http://localhost:3000/courses").subscribe((coursedetails)=>{
    console.log(coursedetails);
    this.coursedetails=coursedetails;
    })
  }

  toggledetails(index:any){
    this.isshowhide=[false];
    this.isshowhide[index]=true;
  }
}
