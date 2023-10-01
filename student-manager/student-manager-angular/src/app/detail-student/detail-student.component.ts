import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent {
    // 1) Wydobyli id z tego url (alert) i pobrać dane o studencie
    // 2) Zbudowali zawartość komponentów - pochodnych
    // 3) Użyj komponentów pochodnych w tym komponencie
    student! : Student;

    constructor(private activatedRoute : ActivatedRoute,
      private studentService : StudentService, private router : Router){
      this.activatedRoute.params.subscribe(param=>{
          //alert('Przekazano id: ' + param["id"]);
        this.studentService.getStudentById(param["id"])
          .subscribe(data=>{
            this.student = data;
            
          });

      })
    }


    navigateToEdit(){
      alert('Przechodzisz do edycji studenta');
      
      this.router.navigate(['/edit-student/' + this.student.id]);
    }
}
