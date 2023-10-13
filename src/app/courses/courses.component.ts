import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection } from 'firebase/firestore';

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
  i:any=0;
  j:any=1;
  nextCoursesSlide:any=[];
  courseSelection:any;
  sendCourseDetails:any;
  courseSyllabus:any;
  checkCount:any=0;
  mobileslideimages:any=[];
  courseReview:any;

  constructor(private _http:HttpClient,private route:Router,private firestore:Firestore){
    // this._http.get<any>("http://localhost:3000/courses").subscribe((coursedetails)=>{
    // this.coursedetails=coursedetails;
    // })
    const instance=collection(this.firestore,'courses');
    collectionData(instance).subscribe(x=>{
      this.coursedetails=x;
    })
  }

  toggledetails(index:any){
    this.isshowhide=[false];
    this.isshowhide[index]=true;
  }

  courseDetails(coursename:any,index:any){
    console.log(index);
    const instance=collection(this.firestore,'courses');
    collectionData(instance).subscribe(courseselection=>{
      this.courseSelection=courseselection;
      const course=courseselection.find((coursefind:any)=>{
        this.courseFind=coursefind;
        this.courseReview=coursefind.rating;
        this.courseSyllabus=coursefind.syllabus;
        this.courseName=coursefind.coursename;
        return coursename===coursefind.coursename;
      });
      if(course){
        for(this.i=0;this.i<2;this.i++){
          if(this.courseSelection[index+this.j]){
            this.checkCount++;
            this.nextCoursesSlide[this.i]=this.courseSelection[index+this.j];
            }
            else{
              this.j=0;
              if(this.checkCount>0){
                this.nextCoursesSlide[this.i]=this.courseSelection[this.i-1];
              }
              else{
                this.nextCoursesSlide[this.i]=this.courseSelection[this.i];
              }

            }
          this.j++;
        }
        console.log(this.courseSyllabus);
        sessionStorage.setItem('courserating',this.courseReview);
        sessionStorage.setItem('coursessyllabusdetails',JSON.stringify(this.courseSyllabus));
        sessionStorage.setItem('coursename',this.courseName);
        sessionStorage.setItem('nextcoursedetails',JSON.stringify(this.nextCoursesSlide));
        sessionStorage.setItem('slideimg',this.courseFind.slideimage);
        sessionStorage.setItem('nextslideimage',this.courseFind.nextslideimage);
        this.route.navigateByUrl('/coursesyllabus');
      }
      else{
        alert("not found");
      }
    })
  }
  mobilecourseDetails(coursename:any,index:any){

    const instance=collection(this.firestore,'courses');
    collectionData(instance).subscribe(courseselection=>{
      console.log(courseselection);
      this.courseSelection=courseselection;
      const course=courseselection.find((coursefind:any)=>{
        this.courseFind=coursefind;
        this.courseSyllabus=coursefind.syllabus;
        this.courseReview=coursefind.rating;
        this.courseName=coursefind.coursename;
        return coursename===coursefind.coursename;
      });
      if(course){
        for(this.i=0;this.i<3;this.i++){
          if(this.courseSelection[index+this.j]){
            this.checkCount++;
            this.mobileslideimages[this.i]=this.courseSelection[index+this.j];
            }
            else{
              this.j=0;
              if(this.checkCount>0){
                this.mobileslideimages[this.i]=this.courseSelection[this.i-1];
              }
              else{
                this.mobileslideimages[this.i]=this.courseSelection[this.i];
              }

            }
          this.j++;
        }
        sessionStorage.setItem('courserating',this.courseReview);
        sessionStorage.setItem('coursessyllabusdetails',JSON.stringify(this.courseSyllabus));
        sessionStorage.setItem('coursename',this.courseName);
        sessionStorage.setItem('mobileslideimage',JSON.stringify(this.mobileslideimages));
        if(this.courseName=="Python"){
          sessionStorage.setItem('mobilecourseimage',JSON.stringify(this.courseFind.mobileimage));
          console.log(this.courseFind.mobileimage);
        }
        else{
          sessionStorage.setItem('mobilecourseimage',this.courseFind.mobileimage);
        }
        this.route.navigateByUrl('/coursesyllabus');
      }
      else{
        alert("not found");
      }
    })
  }

}
