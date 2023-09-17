import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  isLoaded = false;
  btnTitle = "Pokaż";
  students: Student[] = [];

  constructor(private studentService: StudentService) {

  }

  search() {
    console.log("Kliknięto przycisk Wyszukaj!");
    this.isLoaded = !this.isLoaded;

    if (this.isLoaded) {
      this.btnTitle = "Ukryj"
      this.studentService.getStudents().subscribe(data => {
        console.log("wewnatrz subscribe");
        console.log(data);
        this.students = data;
      });

      console.log("poza subscribe");
    } else {
      this.btnTitle = "Pokaż";
    }

  }
}
