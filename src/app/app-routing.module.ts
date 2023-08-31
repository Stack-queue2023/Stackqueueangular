import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { AdmissionformComponent } from './admissionform/admissionform.component';
import { useractiveGuard } from './useractive.guard';


const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"home",
    component:HomepageComponent
  },
  {
    path:"courses",
    component:CoursesComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
  path:"coursesyllabus",
  component:SyllabusComponent,
  canActivate:[useractiveGuard]
  },
  {
    path:"admissionform",
    component:AdmissionformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
