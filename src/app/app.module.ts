import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightedDirective } from './directives/highlighted.directive';
import { MarqueeComponent } from './marquee/marquee.component';
import { PresidentComponent } from './president/president.component';
import { TestComponent } from './test/test.component';
import { PageComponent } from './page/page.component'; // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    HighlightedDirective,
    MarqueeComponent,
    PresidentComponent,
    TestComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
