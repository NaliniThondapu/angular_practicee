## Basic commands

```
ng new FirstApp --- to create the new angular app
ng serve  -- to start the application, by defult the port is 4200
ng serve --port 4500 --- to start the application with required port
we can write the above commanda like below as well
ng s --port 4500
ng generate component <componentname> --- this command is used to create the component
ng generate service <servicename> -- is used to create the services

```

## Package.json
- It has all the project dependencies.
- In case of any new libraries added to our node modules , the dependency need to add in this package.json if not available
- It has dependencies and devdependencies. Dependencies , it has list of prduction dependencies required by angular application.
- These dependencies include Angular libraries, third-party libraries, and other modules needed for the application to function correctly
- The devDependencies section of the package.json file lists the development dependencies required for development and build processes. These dependencies include tools like TypeScript, testing frameworks, build tools, and other development-specific modules. Dev dependencies are not included in the production build of the application. Similar to production dependencies, you can manage dev dependencies using the package manager.

## tsconfig.json
- The application builds  basing on this configuration only at the time of compilation time.
- we have **strict = true** under **compilerOptions** , if it is true we must add the datatype to the variable in the class components otherwise not.

## index.html
- This is under src folder of our application "C:\Nalini\angular_practice\angular_practicee\angular\FirstApp\src\index.html".
- This is the only file which will be rendered into the browser.
- We will navigate between the components only. Not reload the page everytime thats why we can achieve single page functionality by using angular.

## assets folder
- the assets folder will have all the images and datafiles of the project.
## favicon.ico
- this is an icon which we can used as a icon for our application.

## app folder
- This is present in the below path **C:\Nalini\angular_practice\angular_practicee\angular\FirstApp\src\app**
- This **app** folder is nothing but app module. This is the main module of an application.
- This module has **app-routing.module.ts**, to create the navigation between modules using this routing ts file.
- **app.component.css** , this has styling for this app module
- **app.component.html** , this will loading into my application via index.html
- **app.component.ts** , this is the class file that means it has app component file
- **app.modules.ts**, we can import or export the modules required for our application.

## component
- Every component will contain 4 files html,css,component and spec file.

## Router outlet
- **router-outlet tag** , it will act as a placeholder to hold one component at a time basing on the given path and it is provided by the angular.
- "a routerLink="register"" , this routerLink property usage is to add this "register" in the url like "http://localhost:4200/register"
-  with the above path , it will check **app.routing.module.ts** is there any path matching with if it matches load the component otherwise not. 




