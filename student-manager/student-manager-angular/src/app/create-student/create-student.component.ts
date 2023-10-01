import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  isAddedProcessing = false;
  isAddedSuccessful = false;

  constructor(private studentService : StudentService){

  }

  save(nameInput : HTMLInputElement, emailInput : HTMLInputElement){
    //alert("Imie i nazwisko:" + name +", email: " + email);
    this.isAddedProcessing = true;

    this.studentService.addStudent({name: nameInput.value, email: emailInput.value} as Student)
    .subscribe(()=>{
      //alert('Sukces operacji!');
      this.isAddedProcessing = false;
      this.isAddedSuccessful = true;
      nameInput.value = "";
      emailInput.value = "";
    });

    return false;
  }
}
