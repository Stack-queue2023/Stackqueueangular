import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent {
  slideimage:any;
  nextslideimage:any;
  parseslideimage:any;
  parsedImage:any=[];
  courseFind:any;
  courseImage:any;
  i:any=0;
  j:any=1;
  courseLengthCount:any;
  nextCoursesSlide:any;
  courseSelection:any;
  courseLength:any;
  storeCourseLength:any;
  checkCount:any=0;
  courseSyllabus:any;
  parsedsyllabus:any;
  storesyllabus:any;
  coursenameSelected:any;
  constructor(private _http:HttpClient){
    this.courseLengthCount=1;
    this.coursenameSelected=sessionStorage.getItem('coursename');
    this.courseSyllabus=sessionStorage.getItem('coursessyllabusdetails');
    this.parsedsyllabus=JSON.parse(this.courseSyllabus);
    this.storesyllabus=this.parsedsyllabus[0];
    console.log(this.storesyllabus.content0);
    this.slideimage=sessionStorage.getItem('slideimg');
    this.nextslideimage=sessionStorage.getItem('nextslideimage');
    this.parseslideimage=sessionStorage.getItem('nextcoursedetails');
    this.parsedImage=JSON.parse(this.parseslideimage);
    console.log(this.parsedImage);
  }


  courseDetails(coursename:any){
    this._http.get<any>("http://localhost:3000/courses").subscribe((courseDetails)=>{
      this.checkCount=0;
      const course=courseDetails.find((course:any)=>{
        this.storeCourseLength=this.courseLengthCount++;
        console.log(course.syllabus);
        this.courseFind=course;
        this.coursenameSelected=course.coursename;
        this.parsedsyllabus=course.syllabus;
        this.courseSelection=courseDetails;
        this.slideimage=course.slideimage;
        this.nextslideimage=course.nextslideimage;
        return coursename===course.coursename;
      });
      if(course){
        console.log(this.storeCourseLength);
        this.j=1;
        for(this.i=0;this.i<2;this.i++){
          console.log(this.courseSelection[(this.storeCourseLength-1)+this.j]);
          if(this.courseSelection[(this.storeCourseLength-1)+this.j]){
          this.checkCount++;
          this.parsedImage[this.i]=this.courseSelection[(this.storeCourseLength-1)+this.j];
          }
          else{
            this.j=0;
            if(this.checkCount>0){
              console.log(this.i);
              this.parsedImage[this.i]=this.courseSelection[this.i-1];
            }
            else{
              console.log(this.i);
              this.parsedImage[this.i]=this.courseSelection[this.i];
            }
            this.storeCourseLength=1;

          }
          console.log(this.parsedImage);
          this.j++;
        }
        this.courseLengthCount=1;
      }
      else{
        console.log("Failure");
      }

    })
  }
}
