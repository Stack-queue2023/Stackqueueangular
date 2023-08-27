import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component'
=======
import { HomeComponent } from './home/home.component';
import { ManiComponent } from './mani/mani.component';
import { JeevaComponent } from './jeeva/jeeva.component';
>>>>>>> efcae813fe88408f088e57a135791f4a271fb970

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CoursesComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
=======
    HomeComponent,
    ManiComponent,
    JeevaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> efcae813fe88408f088e57a135791f4a271fb970
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
