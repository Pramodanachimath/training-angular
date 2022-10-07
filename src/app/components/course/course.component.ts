import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
courses:Course[]=[]

  constructor(private _courseService:CourseService) { }

  ngOnInit(): void {
    let obs=this._courseService.getCourses();
    obs.subscribe({
      next:(ncourses:Course[])=>{
        console.log(ncourses); //local
        this.courses=ncourses; //assign the ncourses data to  courses
      },error:(error)=>{
        console.log(error);
      },complete:()=>{
        console.log(`completed`);
      }
    })
  }

}
