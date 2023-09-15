# Instalacja frameworka Angular i utworzenie pierwszego projektu

1. Pobierz i zainstaluj Visual Studio Code - https://code.visualstudio.com.

2. Pobierz i zainstaluj Node.js - https://nodejs.org/en/download.

3. Otwórz terminal w Visual Studio Code i wywołaj następujące polecenia:

```ps
npm -v
```

```ps
node -v
```

```ps
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

4. Następnie utwórz nowy folder, który będzie Twoim folderem projektowym. Możesz użyć powershell'a lub stworzyć folder manualnie.

```ps
New-Item -Path 'sub-folderPath' -Type Director
```

5. Zainstaluj Angular CLI za pomocą polecenia.

```ps
npm install -g @angular/cli
```

6. Sprawdź czy Angular CLI zostało poprawnie zaintalowane globalnie za pomocą polecenia.

```ps
ng version
```

7.Utwórz nową aplikację Angular za pomocą komendy.

```ps
ng new student-manager-angular
```
Wybierz domyślną wersję routingu oraz CSS jako wybór języka do arkusza styli.

8. Zamontuj utworzony folder za pomocą polecenia.

```ps
cd student-manager-angular
```

9. Uruchom aplikacje poleceniem 

```ps
ng serve --open
```
