import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/db-data';
import { HttpClient, HttpParams } from '@angular/common/http'
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  // @ViewChildren(CourseCardComponent)
  // cards;
  @ViewChild('cardRef1', { read: ElementRef })
  card1: ElementRef;
  @ViewChild('courseImage')
  courseImage: ElementRef


  constructor() {

  }

  ngAfterViewInit(): void {
    console.log('courseImage', this.courseImage);

  }

  onCourseSelected(course: Course) {
    console.log('card 111', this.card1);
  }
  onCourseEdited() {

  }
}
