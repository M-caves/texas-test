import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';

const routes: Routes = [
  {path:'teacher',component:TeacherComponent},
  {path:'student',component:StudentComponent},
  {path:'department',component:DepartmentComponent},
  {path:'dashboard',component:TemplateDashboardComponent},
  {path:'',component:TemplateDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
