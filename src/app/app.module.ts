import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DepartmentComponent } from './department/department.component';
import { HeaderComponent } from './page-layout/header/header.component';
import { FooterComponent } from './page-layout/footer/footer.component';
import { SidebarComponent } from './page-layout/sidebar/sidebar.component';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';

@NgModule({
  declarations: [				
    AppComponent,
      StudentComponent,
      TeacherComponent,
      DepartmentComponent,
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      TemplateDashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
