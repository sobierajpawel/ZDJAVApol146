# Routing

1. Zamontuj `route-outlet` w pliku `app.component.html`.

```html
<div class="container-fluid">
  <router-outlet></router-outlet>
</div>
```

2. W pliku `app-routing.module.ts` zadeklaruj odpowiednie ścieżki.

```ts
const routes: Routes = [
  { path: 'students', component: StudentsListComponent },
  { path: 'students/add', component: CreateStudentComponent }
];
```

3. W menu nawigacyjnym aplikacji wykorzystaj routing do konkretnych komponentów.

```html
 <li class="nav-item">
          <a class="nav-link" [routerLinkActive]="['is-active']"  [routerLink]="['/students/add']">Dodaj studenta</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLinkActive]="['is-active']" [routerLinkActiveOptions]="{ exact: true }" [routerLink]="['/students']">Przeglądaj studenta</a>
        </li>
```

4. Dodaj implementacje stylu w style.css dla klasy `.is-active`.

```css
.is-active{
    background-color: lightblue;
}
```

5. Uruchom aplikacje i sprawdź działanie, zmodyfikuj styl menu nawigacyjnego aktualnie wybranego komponentu wg własnego uznania.
