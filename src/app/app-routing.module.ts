import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:'teacher',component:TeacherComponent},
  {path:'student',component:StudentComponent},
  {path:'department',component:DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
