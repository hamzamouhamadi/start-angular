import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from 'src/db-data';
import { HttpClient, HttpParams } from '@angular/common/http'
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';
import { HighlightedDirective } from './directives/highlighted.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>

  @ViewChild(HighlightedDirective, { read: HighlightedDirective })
  highlighted: HighlightedDirective;
  // @ViewChild('courseImage')
  // courseImage: ElementRef


  constructor() {

  }
  onToggle(isHilighted: boolean) {
    //console.log("isHilighted", isHilighted);

  }

  ngAfterViewInit(): void {

    //console.log(this.highlighted);


  }

  onCourseSelected(course: Course) {

  }
  onCourseEdited() {
    this.courses.push({
      id: 13,
      description: 'Angular test test',
      longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
      category: 'ADVANCED',
      lessonsCount: 12
    });

  }
}
