import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { delay } from 'rxjs';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  isLoaded = false;
  btnTitle = "Pokaż";
  students: Student[] = [];
  copyStudents: Student[] = [];
  isDataSearching = false;
  isErrorOccured = false;

  constructor(private studentService: StudentService) {

  }

  searchBy(searchPhrase : string){
    this.students = 
      this.copyStudents
      .filter(x=>x.name.toLowerCase()
        .startsWith(searchPhrase.toLowerCase()));
  }

  search() {
    console.log("Kliknięto przycisk Wyszukaj!");
    this.isLoaded = !this.isLoaded;

    if (this.isLoaded) {

      this.isDataSearching = true;
      this.btnTitle = "Wyszukiwanie...";
      this.students = [];

      this.studentService.getStudents()
        .pipe(delay(2000))
        .subscribe({
          next: data => {
            console.log("wewnatrz subscribe");
            console.log(data);
            this.students = data;
            this.copyStudents = data;
            this.isDataSearching = false;
            this.btnTitle = "Ukryj"
          },
          error: ()=>{
            this.isDataSearching = false;
            this.isLoaded = false;
            this.btnTitle = "Pokaż"
            this.isErrorOccured = true;
          },
        });

      console.log("poza subscribe");
    } else {
      this.btnTitle = "Pokaż";
    }

  }

  delete(id : number){
    //alert("Kliknięto przycisk usuń! Na studencie o id = " + id);

    this.studentService.deleteStudent(id)
      .subscribe(()=>{
        //Wyfiltrować z aktualnej tablicy studentów wszystkich którzy mają inne id niż to usuwane
        this.students = this.students.filter(x=>x.id != id);
      });
  }
}
