# Edycja studenta

1. Utwórz nowy komponent do edycji studenta.

```ps
ng generate EditStudent
```

2. Dodaj kod html do obsługi szablonu.

```html
<section *ngIf="student">
    <h2>Edycja #{{student.id}} <i>{{student.name}}</i></h2>
  
    <div>
      <label for="name">Imię i nazwisko:</label>
      <input type="text" id="name" [(ngModel)]="student.name">
    </div>
  
    <div>
      <label for="email">Adres e-mail:</label>
      <input type="email" id="email" [(ngModel)]="student.email">
    </div>
  
    <div>
      <button (click)="goBack()" class="button">Anuluj</button>
      <button (click)="save()" class="button button-green">Zapisz</button>
    </div>
  </section>
```
3. Dodaj kod ts do obsługi komponentu.

```ts
export class EditStudentFormComponent implements OnInit {
  student!: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    const id = + this.route.snapshot.paramMap.get('id')!;
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // Zapisuje dane i przekierowuje do poprzedniego widoku
    this.studentService.updateStudent(this.student)
      .subscribe(() => this.goBack());
  }
```

4. Dopisz brakujące metody do serwisu do pobierania danego studenta oraz aktualizacji.

```ts
  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

```
```ts
  updateStudent(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.put<Student>(url, student, this.httpOptions);
  }
```

5. Dodaj routing do edycji studenta w `app.routing.modules`.

```ts
const routes: Routes = [
  ...
  { path: 'students/edit/:id', component: EditStudentFormComponent}
];
```

6. Dodaj przycisk edycji studenta w komponencie listy studentów.

```html
  <a class="btn btn-warning" routerLink="/students/edit/{{student.id}}">Edytuj</a>
```
