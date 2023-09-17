import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentsListComponent } from './students-list/students-list.component';

//localhost:4200/add-student -> CreateStudentComponent
//localhost:4200/students -> StudentsListComponent

const routes: Routes = [
  { path:"add-student", component: CreateStudentComponent},
  { path: "students", component: StudentsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
