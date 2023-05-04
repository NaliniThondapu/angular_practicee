## Html Elements Navigation
- Everything in an HTML document is a node.
- The entire document is a document node
- Every HTML element is an element node
- The text inside HTML elements are text nodes
- Every HTML attribute is an attribute node (deprecated)
- All comments are comment nodes

## Example

```
<html>

  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>

```

```
- <html> is the root node
- <html> has no parents
- <html> is the parent of <head> and <body>
- <head> is the first child of <html>
- <body> is the last child of <html>

```

```
<head> has one child: <title>
<title> has one child (a text node): "DOM Tutorial"
<body> has two children: <h1> and <p>
<h1> has one child: "DOM Lesson one"
<p> has one child: "Hello world!"
<h1> and <p> are siblings

```

## Navigating Between Nodes

You can use the following node properties to navigate between nodes with JavaScript

- parentNode
- childNodes[nodenumber]
- firstChild
- lastChild
- nextSibling
- previousSibling

### Example

```
<title id="demo">DOM Tutorial</title>

myTitle = document.getElementById("demo").innerHTML; //output is "DOM Tutorial"

//Accessing the innerHTML property is the same as accessing the nodeValue of the first child:

myTitle = document.getElementById("demo").firstChild.nodeValue; //output is "DOM Tutorial"

//Accessing the first child can also be done like this:

myTitle = document.getElementById("demo").childNodes[0].nodeValue; //output is "DOM Tutorial"

```


## Example

```

<html>

<head>
</head>

<body>
    <h1 id="id01">My First Page</h1>
    <p id="id02"> This is my paragraph data</p>
    <a href="">Link</a>
    <script>
        body = document.body;
        bodyParent = body.bodyParent;
        console.log(bodyParent) //output is html
        console.log(bodyParent.bodyParent) // document

        console.log(body.firstChild.nextSibling) //h1
        console.log(body.lastChild.previousSibling.previousSibling)//a

        var x = body.lastChild.previousSibling.previousSibling;
        x.href = "https://facebook.com";
    </script>
</body>

</html>

```









