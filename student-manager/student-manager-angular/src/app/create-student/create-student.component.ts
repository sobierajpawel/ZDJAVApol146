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

  save(name : string, email : string){
    //alert("Imie i nazwisko:" + name +", email: " + email);
    this.isAddedProcessing = true;

    this.studentService.addStudent({name, email} as Student)
    .subscribe(()=>{
      //alert('Sukces operacji!');
      this.isAddedProcessing = false;
      this.isAddedSuccessful = true;
      name = "";
    });

    return false;
  }
}
