import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  //Metoda odpowiedzialną za pobieranie studentów z aplikacji backendowej
  getStudents(){
    return this.httpClient.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }
}
