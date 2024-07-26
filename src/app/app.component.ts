import { Component } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-';
  courseMe = COURSES[0];
  courseMe2 = COURSES[1];
  courseMe3 = COURSES[2];

  onCourseSelected(course:Course){
    console.log
    ("APP-comp...",course)
  }
}
