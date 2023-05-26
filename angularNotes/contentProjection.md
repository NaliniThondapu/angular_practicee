## Content Projection
- We can trasfter "HTML" content between different components by using content projection.
- If we want to transfer the HTML content from parent to child , we need to add **ng-content** element in the child component html.
- The entire HTML content in the parent is transfered to child.
- we need add the content in the parent under child component name (<app-child>) in the parent component.4
 - please check the detailed example of contentprojection under angular.
  
  
  ## app.component.html
  ```
  <h1> Content Projection</h1>
<app-child>
  <div class = "header">
    <h1> I am a header</h1>
  </div>
  <div class = "body">
    <h1> I am a Boady</h1>
  </div>
  <div class = "footer">
    <h1> I am a footer</h1>
  </div>
</app-child>

  ```
  ## child.component.html
  ```
  <ng-content></ng-content>
  ```
  
  ## Output
  ```
  Content Projection
I am a header
I am a body
I am a footer
  ```
  
  ## Transfer Only some content instead of all
  - If we want to transfer only few HTML content by tag name or class name, we need add the below in the child component html.
  
  ```
  <!-- will get only header content -->
<ng-content select = ".header"></ng-content>
  
  ```

 ## ngContainer
  - the ng-content will transfer entire element what ever it have.
  - where as ng-container will transfer only the content related element to the child. 
  - For example in the above example, we used **ng-content** it will transfer entire DIV element to the child.
  - If we use ng-container it will tansfer only h1 element. Out put looks same but HTML DOM is not heavy.
  
  ## Exaample
  
  ## app.component.html
  
  ```
  <h1> Content Projection</h1>
<app-child>
  <ng-container class = "header">
    <h1> I am a header</h1>
  </ng-container>
  <ng-container class = "body">
    <h1> I am a Boady</h1>
  </ng-container>
  <ng-container class = "footer">
    <h1> I am a footer</h1>
  </ng-container>
</app-child>

  ```
  
  ## child.component.html
  
  ```
  <!-- will display all the parent html content-->
<ng-content></ng-content>

<!-- will display only one header element-->

<!--<ng-content select = ".header"></ng-content>-->

  ```
  
  
