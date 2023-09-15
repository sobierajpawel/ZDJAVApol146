# Zmiana struktury projektu oraz dodanie Bootstrap'a

1. Usuń z pliku app.component.html zawartość między komentarzami.

2. Wprowadź następujący fragment kodu html w app.component.html i uruchom projekt poleceniem `ng serve`.

3. Wprowadź zmiany w kodzie html.

```html
<header class="container">
  <h1>
    {{ title }}
  </h1>
</header>

<main class="container">
  <router-outlet></router-outlet>
</main>

<footer class="container">
</footer>
```

4. Wprowadź zmiany w komponencie do zmiennej `title`. Dodaj zmienną `footer` i osadź ją w komponencie html w stopce. Uruchom aplikacje i zobacz zmiany w przeglądarce.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplikacja zarządzająca studentami';
  footer = "Copyright 2023 by SDA.";
}

```

```html
<header class="container">
  <h1>
    {{ title }}
  </h1>
</header>

<main class="container">
  <router-outlet></router-outlet>
</main>

<footer class="container">
{{ footer }}
</footer>
```


5. Zainstaluj bootstrap w projekcie poleceniem za pomocą menadżera pakietów NPM.

```ps
  npm install bootstrap --save
```

6. Dodaj następujące skrypty dla css oraz js w pliku `angular.json`.

```json
    "styles": 
    [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "src/styles.css"
     ],
     "scripts": 
     [
      "./node_modules/bootstrap/dist/js/bootstrap.js"
     ]
```


7. Wprowadź następujący kod html w app.component.html. 

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{{title}}</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Dodaj studenta</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Przeglądaj studenta</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container-fluid">
  <router-outlet></router-outlet>
</div>

<div class="navbar fixed-bottom">
  <div class="container">
    <span class="text-muted">  {{footer}} </span>
  </div>
</div>
```

8. Wprowadź zmiany dotyczące koloru tła stopki/nagłówka za pomocą atrybutu style.


```html
<div class="navbar fixed-bottom" style="background-color: lightgray;">
  <div class="container">
    <span class="text-muted">  {{footer}} </span>
  </div>
</div>
```

9. Wprowadź zmiany do pliku zgodnie ze swoimi potrzebami. 
