## Content Projection
- We can trasfter "HTML" content between different components by using content projection.
- If we want to transfer the HTML content from parent to child , we need to add **ng-content** element in the child component html. The entire HTML content in the parent 
  is transfered to child.
 - we need add the content in the parent under child component name (<app-child>) in the parent component.
  
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
  
  ## Transfer Only some content instead of all
  - If we want to transfer only few HTML content by tag name or class name, we need add the below in the child component html.
  
  ```
  <!-- will get only header content -->
<ng-content select = ".header"></ng-content>
  
  ```

  
