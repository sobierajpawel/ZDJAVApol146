import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';

//localhost:4200/add-student -> CreateStudentComponent
//localhost:4200/students -> StudentsListComponent
//localhost:4200/edit-student/1 -> EditStudentComponent dla studenta 1
//localhost:4200/edit-student/2 -> EditStudentComponent dla studenta 2
//localhost:4200/detail-student/1 -> DetailStudentComponent dla studenta 1
//localhost:4200/detail-student/2 -> DetailStudetnComponent dla studenta 2


const routes: Routes = [
  { path:"add-student", component: CreateStudentComponent},
  { path: "students", component: StudentsListComponent},
  { path: "edit-student/:id", component: EditStudentComponent},
  { path: "detail-student/:id", component: DetailStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
