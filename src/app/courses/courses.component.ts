import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursedetails:any;
  isshowhide:boolean[]=[false];
  oldBoolean:any;
  courseFind:any;
  slideimages:any;
  courseName:any;

  constructor(private _http:HttpClient,private route:Router){
    this._http.get<any>("http://localhost:3000/courses").subscribe((coursedetails)=>{
    console.log(coursedetails);
    this.coursedetails=coursedetails;
    })
  }

  toggledetails(index:any){
    this.isshowhide=[false];
    this.isshowhide[index]=true;
  }

  courseDetails(coursename:any){
    this._http.get("http://localhost:3000/courses").subscribe((courseselection:any)=>{
      const course=courseselection.find((coursefind:any)=>{
        this.courseFind=coursefind;
        console.log(coursefind.coursename);
        this.courseName=coursefind.coursename;
        return coursename===coursefind.coursename;
      });
      if(course){
        console.log(this.courseFind.slideimage);
        sessionStorage.setItem('slideimg',this.courseFind.slideimage);
        this.route.navigateByUrl('/coursesyllabus');
      }
      else{
        alert("not found");
      }
    })
  }
}
