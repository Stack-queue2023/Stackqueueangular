import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { SyllabusComponent } from './syllabus/syllabus.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CoursesComponent,
    RegisterComponent,
    LoginComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    SyllabusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
>>>>>>> 13565991add74c0ec9759559e272fd3a7a88c6cc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
