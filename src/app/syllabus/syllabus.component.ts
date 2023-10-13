import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection } from 'firebase/firestore';

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
  courseRating:any;
  splitcourseRating:any;
  coursenameSelected:any;
  mobileslideimages:any;
  mobileimage:any;
  mobileslideimagearray:any=[];
  getmobileslideimage:any;
  ispython:boolean=false;
  parsedmobileImage:any=[];
  parsecourseRating:any;
  starvisible:boolean=false;

  constructor(private _http:HttpClient,private route:Router,private firestore:Firestore){
    this.courseLengthCount=1;
    this.courseRating=sessionStorage.getItem('courserating');
    this.splitcourseRating=this.courseRating.split('.');
    this.parsecourseRating=new Array(parseInt(this.courseRating));
    if(parseInt(this.splitcourseRating[1])>0){
      this.parsecourseRating=new Array(parseInt(this.courseRating));
      this.starvisible=true;
    }

    this.coursenameSelected=sessionStorage.getItem('coursename');
    this.courseSyllabus=sessionStorage.getItem('coursessyllabusdetails');
    this.parsedsyllabus=JSON.parse(this.courseSyllabus);
    this.storesyllabus=this.parsedsyllabus[0];
    this.slideimage=sessionStorage.getItem('slideimg');
    this.nextslideimage=sessionStorage.getItem('nextslideimage');
    this.parseslideimage=sessionStorage.getItem('nextcoursedetails');
    this.parsedImage=JSON.parse(this.parseslideimage);
    this.mobileimage=sessionStorage.getItem('mobilecourseimage');
    this.getmobileslideimage=sessionStorage.getItem('mobileslideimage');
    this.parsedmobileImage=JSON.parse(this.getmobileslideimage);
    if(this.coursenameSelected=="Python"){
      this.mobileslideimagearray=JSON.parse(this.mobileimage);
      this.ispython=true;
    }
    else{
      this.mobileslideimages=this.mobileimage;
      this.ispython=false;
    }
  }


  courseDetails(coursename:any){
    const instance=collection(this.firestore,'courses');
    collectionData(instance).subscribe(courseselection=>{
      this.checkCount=0;
      const course=courseselection.find((course:any)=>{
        this.storeCourseLength=this.courseLengthCount++;
        this.courseFind=course;
        this.courseRating=course.rating;
        this.splitcourseRating=this.courseRating.split('.');
        this.parsecourseRating=parseInt(course.rating);
        this.coursenameSelected=course.coursename;
        this.parsedsyllabus=course.syllabus;
        this.courseSelection=courseselection;
        this.slideimage=course.slideimage;
        this.nextslideimage=course.nextslideimage;
        return coursename===course.coursename;
      });
      if(course){
        this.j=1;
        if(parseInt(this.splitcourseRating[1])>0){
          this.parsecourseRating=new Array(parseInt(this.courseRating));
          this.starvisible=true;
        }
        else{
          this.starvisible=false;
          this.parsecourseRating=new Array(parseInt(this.courseRating));
        }
        for(this.i=0;this.i<2;this.i++){
          if(this.courseSelection[(this.storeCourseLength-1)+this.j]){
          this.checkCount++;
          this.parsedImage[this.i]=this.courseSelection[(this.storeCourseLength-1)+this.j];
          }
          else{
            this.j=0;
            if(this.checkCount>0){
              this.parsedImage[this.i]=this.courseSelection[this.i-1];
            }
            else{
              this.parsedImage[this.i]=this.courseSelection[this.i];
            }
            this.storeCourseLength=1;

          }
          this.j++;
        }
        this.courseLengthCount=1;
      }
      else{
        console.log("Failure");
      }

    })
  }















  mobilecourseDetails(coursename:any){
    const instance=collection(this.firestore,'courses');
    collectionData(instance).subscribe(courseselection=>{
      this.checkCount=0;
      const course=courseselection.find((course:any)=>{
        this.storeCourseLength=this.courseLengthCount++;
        this.courseFind=course;
        this.coursenameSelected=course.coursename;
        this.courseRating=course.rating;
        this.splitcourseRating=this.courseRating.split('.');
        this.parsecourseRating=parseInt(course.rating);
        this.parsedsyllabus=course.syllabus;
        if(course.coursename=="Python"){
          this.mobileslideimagearray=course.mobileimage;
          this.ispython=true;
        }
        else{
          this.mobileslideimages=course.mobileimage;
          this.ispython=false;
        }
        this.courseSelection=courseselection;
        return coursename===course.coursename;
      });
      if(course){
        this.j=1;
        if(parseInt(this.splitcourseRating[1])>0){
          this.parsecourseRating=new Array(parseInt(this.courseRating));
          this.starvisible=true;
        }
        else{
          this.starvisible=false;
          this.parsecourseRating=new Array(parseInt(this.courseRating));
        }
        for(this.i=0;this.i<3;this.i++){
          if(this.courseSelection[(this.storeCourseLength-1)+this.j]){
          this.checkCount++;
          this.parsedmobileImage[this.i]=this.courseSelection[(this.storeCourseLength-1)+this.j];
          }
          else{
            this.j=0;
            if(this.checkCount>0){
              this.parsedmobileImage[this.i]=this.courseSelection[this.i-1];
            }
            else{
              this.parsedmobileImage[this.i]=this.courseSelection[this.i];
            }
            this.storeCourseLength=1;

          }
          this.j++;
        }
        this.courseLengthCount=1;
      }
      else{
        console.log("Failure");
      }

    })
  }

  pythonImageChange(index:any){
    if(index==0){
      var temp=this.mobileslideimagearray[index];
      this.mobileslideimagearray[index]=this.mobileslideimagearray[2];
      this.mobileslideimagearray[2]=this.mobileslideimagearray[1];
      this.mobileslideimagearray[1]=temp;
    }
    else if(index==2){
      var temp=this.mobileslideimagearray[0];
      this.mobileslideimagearray[0]=this.mobileslideimagearray[index];
      this.mobileslideimagearray[index]=this.mobileslideimagearray[1];
      this.mobileslideimagearray[1]=temp;
    }
}
enrollNow(){
  this.route.navigateByUrl('admissionform');
}
}
