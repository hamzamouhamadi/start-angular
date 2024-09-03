import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { PageComponent } from './page/page.component';
import { MarqueeComponent } from './marquee/marquee.component';

const routes: Routes = [
  {path: "",component:MarqueeComponent},
  {path: "test",component:TestComponent},
  {path: "page",component:PageComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
