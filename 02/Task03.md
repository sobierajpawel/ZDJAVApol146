# Usuwanie studenta

1. Zmień przycisk usuwania studenta na wiązanie do odpowiedniego zdarzenia.

```html
 <button class="btn btn-danger" (click)="delete(student)">Usuń</button>
```

2. W komponencie studentów dodaj obsługę metody.


```ts
 delete(student: Student): void {
    this.students = this.students.filter(s => s !== student);
    this.studentService.deleteStudent(student).subscribe();
    alert('Usunięto studenta: ' + student.name);
  }
```

3. Dodaj metodę serwisu wysyłającą żądanie DELETE w serwisie CRUD do obsługi studentów.

```ts
  deleteStudent(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.delete<Student>(url, this.httpOptions);
  }
```
