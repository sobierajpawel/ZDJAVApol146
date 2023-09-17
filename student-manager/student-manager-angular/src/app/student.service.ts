import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient : HttpClient) { }

  //Metoda odpowiedzialną za pobieranie studentów z aplikacji backendowej
  getStudents(){
    return this.httpClient.get<Student[]>(this.url);
  }

  //Metoda odpowiedzialną za wysyłanie żądania DELETE i usunięcie zasobu o określony id
  deleteStudent(studentId : number){
    //adres_url/users/9 -> DELETE
    let studentUrl = this.url + "/" + studentId;
    return this.httpClient.delete<Student>(studentUrl);
  }

  //Metoda odpowiedzialna za wysyłanie żądania POST
  addStudent(student : Student){
    return this.httpClient.post<Student>(this.url, student);
  }
}
