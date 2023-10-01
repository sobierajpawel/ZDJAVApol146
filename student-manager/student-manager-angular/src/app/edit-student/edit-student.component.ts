import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  // 1) Request typu PUT -> do aktualizacji danych studenta - Student Service - DONE!
  // 2) MEtodę obsłużyć z przycisku Zapisz -> formularz (submit)-ngSubmit
  // 3) Powiadomić użytkownika o sukcesie operacji
  // 4) Zablokujmy możliwość wielokrotnej wysyłki
    student! : Student;
    isSuccessUpdate = false;
    isUpdateProcessing = false;

  constructor(private activatedRoute : ActivatedRoute, private studentService : StudentService){
    this.activatedRoute.params.subscribe(param=>{
      //alert('Przekazano parametr: ' + param["id"]);
      this.studentService.getStudentById(param["id"])
        .subscribe(data =>{
          this.student = data;
          console.log(this.student);
        })
    });
  }

  save(){
      this.isUpdateProcessing = true;

      this.studentService.updateStudent(this.student)
        .pipe(delay(2000))
        .subscribe(data=>{
            //alert("Dokonano aktualizacji!")
            this.isSuccessUpdate = true;
            this.isUpdateProcessing = false;
          });
  }
}
