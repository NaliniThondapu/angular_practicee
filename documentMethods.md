## Document Methods
   - These methods are used to get the html elements by nameor id or class name etc.
  -  Please check the Example have good intevriew Questions
   
 ```
 <html>

<body>
    UserName:<input type="text" id="uname"></input><br>
    Email:<input type="email" name="email"></input><br>
    MobileNUmber:<input type="number" id="number"></input>
    <p class="abc">I am a paragraph</p>

    <script>
        //get html element by id
        var uname = document.getElementById("uname");
        console.log(uname);
        //this placeholder is used to set the default values for the field
        uname.placeholder = "enter userName";


        //get all the elements which has the name
        //this emthod returns HTMLCollection
        var email = document.getElementsByName("email");
        console.log(email);
        //get the elements by tag name
        var inputTags = document.getElementsByTagName("input")
        console.log(inputTags)

        //get the elements by class name
        var ptag = document.getElementsByClassName("abc")
        console.log(ptag);

        //querySelector() method returns the first element that matches a css selector
        //#uname means by id
        var uname1 = document.querySelector("#uname")
        //. means by class name
        var pptag = document.querySelector(".abc")

        //querySelectorAll() method returns all the elements that matches the selector
        //getting all the elements by tag name
        //this method retuns static nodelist
        var inputTags = document.querySelectorAll("input")
        //getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.
        //querySelectorAll() method returns a static NodeList.
        //A NodeList and an HTMLcollection is very much the same thing.
        //Both have a length property that returns the number of elements in the list (collection).

        // An HTMLCollection is a collection of document elements.
        //A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

        // HTMLCollection items can be accessed by their name, id, or index number.

        // NodeList items can only be accessed by their index number.

        // An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

        // A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.



    </script>
</body>

</html>

```
