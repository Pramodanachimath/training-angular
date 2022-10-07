import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'courses',component:CourseComponent},
  {path:'contact',component:ContactusComponent},
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
