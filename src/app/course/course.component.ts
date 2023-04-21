import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './mocks/data-courses';
import { CourseService } from './CourseService';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})

export class CourseComponent implements OnInit {
  public courses: Array<Course> = [];

  constructor(private courseService: CourseService) {}

  getCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  getCourseList(): Array<Course> {
    return dataCourses;
  }

  ngOnInit() {
    this.getCourseList();
  }
}
