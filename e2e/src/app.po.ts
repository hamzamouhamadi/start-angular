import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/courses').subscribe(
      courses => this.courses = courses);
    ;
  }
}
