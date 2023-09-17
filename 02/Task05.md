# Utworzenie komponentu dodawania studenta z wykorzystaniem FormBuilder i Bootstrap

1. Za pomocą poniższego polecenia utwórz nowy komponent 

```ps
ng generate component create-student-form
```

2. Sprawdź czy router-outlet jest prawidłowo zamontowany w  `app.component.html`.

```html
<div class="container-fluid">
    <router-outlet></router-outlet>
</div>
```

3. Stwórz formularz używając operacji submit oraz formularza z użyciem bootstrapa i formBuildera.

```html
<h2>Dodaj nowego studenta</h2>   

<form [formGroup]="addStudentForm" (ngSubmit)="onSubmit()">

    <div>
      <label for="name" class="form-label">
        Imię i nazwisko studenta
      </label>
      <input id="name" class="form-control" type="text" formControlName="name">
    </div>
  
    <div>
      <label for="email" class="form-label">
        Adres Email
      </label>
      <input id="email" class="form-control" type="email" formControlName="email">
    </div>
  
    <button class="btn btn-primary" type="submit">Zapisz</button>
  
  </form>
```

4. W pliku typescript componentu dodaj prostą obsługę metode `onSubmit()` oraz formularz zbudowany z buildera.

```ts
 addStudentForm = this.formBuilder.group({
    name: '',
    email: ''
  });
```

```ts
  onSubmit() {
    console.log("submit is working");
   }
```

5. Nie zapomnij o dodaniu odpowiednich zależności wstrzykniętych do klasy.

```ts
  constructor(private formBuilder: FormBuilder, private studentService: StudentService) {

  }
```

6. Zaimportuj moduły `FormsModul` oraz `ReactiveFormsModule` do głównego modułu aplikacji.

```ts
 imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
```

7. Dodaj walidację do formularza z wykorzystaniem formBuildera pod polami input.

```html
<div *ngIf="f.name.invalid && submitted" class="alert alert-danger">

      <div *ngIf="f.name.errors?.['required']">
        Imię i nazwisko studenta jest wymagane
      </div>
      <div *ngIf="f.name.errors?.['minlength']">
        Imię i nazwisko musi mieć przynajmniej 4 znaki
      </div>
    </div>
```

```html
 <div *ngIf="f.email.invalid && submitted" class="alert alert-danger">
      <div *ngIf="f.email.errors?.['required']">
        Email studenta jest wymagane
      </div>
      <div *ngIf="f.email.errors?.['email']">
        Email musi spełniać walidacje
      </div>
    </div>
```

8. Dodaj zmienną submitted do pliku ts.

```ts
submitted = false;
```

9. Dodaj domyślne walidacje do buildera.

```ts
 addStudentForm = this.formBuilder.group({
    name: ['',
      [Validators.required,
      Validators.minLength(4)]
    ],
    email: ['',
      [Validators.required,
      Validators.email]
    ],
  });
```
10. Dodaj odpowiednie obsłużenie metody `onSubmit()` i przetestuj działanie aplikacji.

```ts
onSubmit() {
    console.log("submit is working");

    this.submitted = true;
    // Sprawdź czy formularz spełnia dane.
    if (this.addStudentForm.invalid) {
      return;
    }

    this.studentService.addStudent({ name: this.f.name.value, email: this.f.email.value } as Student)
      .subscribe(student => {
        alert('Udało się dodać studenta');
      });
  }
```
