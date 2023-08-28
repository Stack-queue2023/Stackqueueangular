import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent {
  slideimage:any;

  constructor(){
    this.slideimage=sessionStorage.getItem('slideimg');
    console.log(this.slideimage);
  }

}
