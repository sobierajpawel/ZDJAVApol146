# Utworzenie komponentu dodawania studenta

1. Za pomocą poniższego polecenia utwórz nowy komponent 

```ps
ng generate component create-student 
```

2. Zamontuj komponent w głównym widoku w pliku `app.component.html`.

```html
<div class="container-fluid">
  <app-create-student></app-create-student>
</div>
```

3. Uruchom aplikacje i zobacz czy komponent jest prawidłowo wyświetlany.

4. Utwórz plik html z formularzem umożliwiającym dodawanie studenta.

```html
<div class="new-student">
    <h2>Dodaj nowego studenta</h2>
    <label for="name">Imię i nazwisko:</label>
    <input type="text" id="name" #name>
  
    <label for="email">Adres e-mail:</label>
    <input type="email" id="email" #email>
  
    <button (click)="add(name.value, email.value); name.value=''; email.value=''">Dodaj</button>
  </div>
```

5. Utwórz w serwisie `StudentService` metodę umożliwiającą dodawanie nowego studenta do API za pomocą metody POST.

```ts
  addStudent(student: Student) : Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student);
  }
```
6. Dodaj metodę to dodawania studenta w komponencie dodawania studenta w pliku ts.

```ts
add(name: string, email: string): void {
    // Usunięcie białych znaków z danych
    name = name.trim();
    email = email.trim();
  
    // Zaprzestanie wykonywania, kiedy pola są puste
    if (!name || !email) {
      return;
    }
  
    // Zaprzestanie wykonywania, kiedy adres e-mail nie zawiera "@"
    if (email.indexOf('@') < 1) {
      return;
    }
  
    this.studentService.addStudent({ name, email } as Student)
      .subscribe(student=> {
        alert('Udało się dodać studenta');
      });
  }
```

7. Sprawdź jak działa powyższa implementacja, użyj devtools do sprawdzania czy API zostało faktycznie wywołane.
