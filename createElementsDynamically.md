## Document
  - The Document object represents the webpage.
  - If you want to access/manipulate elements in an html page , we can do using Document object.
  - Below are the examples, how we can access/manipulate elements using document object.

## Finding the Html elements

- document.getElementById(id) == get only one element which has an id
- document.getElementsByTagName(name) === get the elements by tag name which has the tag name which is passed in the argument.
- document.getElementsByClassName(name) == get the elements which has the class name which is passed in the argument.

## Changing Html elements
- element.innerHTML =  new html content (change the inner html of the element)
- element.attribute = new value (change the attribute value of an element)
- element.style.property = new style (change the style of an element)
- element.setAttribute(attribute, value)(change the attribute value of an element)

## Adding and Deleting Elements
- document.createElement(element)(create a html element)
- document.removeChild(element)(remove the html element)
- document.appendChild(element)(Add an html element)
- document.replaceChild(new, old)	Replace an HTML element
- document.write(text)(write into the html output stream)

## Adding Events Handlers
- document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event

### Example

```
<html>

<head>

</head>

<body>
    <script>
        //get the body tag
        var body = document.getElementsByTagName("body")

        //create the form element
        var form = document.createElement("form");

        //create the input type
        var input = document.createElement("input")
        input.type = "text"
        input.placeholder = "Enter username"
        input.style = "margin-right: 10px"

        //create the buttom
        var button = document.createElement("button")
        button.value = "Submit"
        button.innerHTML = "submit"

        //append the button and input to form
        form.appendChild(input)
        form.appendChild(button)
        //append form to the button
        body[0].appendChild(form)
    </script>
</body>

</html>

```
