## Synchronous 
- As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one

### Example

```
var a =20;
var b =30;

function Synchronous(a,b){
  console.log(a+b);
}
Synchronous(a,b);

```

## Asynchronous 
  -  As we saw in the synchronous code example, all instructions in the program execute one after another, and every instruction waits for its previous instruction to get executed. 
  -  Due to this nature of synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the user interface. 
  -  Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.
  -    we have not only setTimeout ti achieve the asynchronous functionality.
  -    We have some inbuilt http methods to achieve asychronous operations.

```
// the settimeout will execute the function after 1sec(1000milliseconds)
  setTimeOut(function(){
    console.log("step1)
  },1000);
 console.log("step2");

}

asynchronous();

//output is 
//step2 after 1000ms step1 will print

```
## Asynchronous with IIFEs

```
<html>
    <head>

    </head>

    <body>
        <table border="2" width="100%">
            <thead>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>UserName</td>
            </thead>
            <tbody id="tbody">

            </tbody>
        </table>

        <script>
            // I am creating IIFES need to execute this while loading the page itself
            (function(){
                var http = new XMLHttpRequest();
                http.open("GET","https://jsonplaceholder.typicode.com/users");
                //the below function will execute when readystatechange is true otherwise it will keep on exeute this
                //because the IIFE need to finish before the application is initialised
                http.onreadystatechange = function(){
                    if(http.status == 200 && http.readyState == 4){
                        var users = JSON.parse(http.responseText);
                        var tbody = document.getElementById("tbody");

                        users.forEach(user => {
                            tbody.innerHTML += "<tr>"+"<td>"+  user.name  +"</td>"+"<td>"+  user.email  +"</td>"+"<td>"+  user.phone  +"</td>"+"<td>"+  user.username  +"</td>"+"</tr>"  
                        });

                    }
                }
                http.send();
            })();
        </script>
    </body>
</html>

```

## Callback and CallBack Hell

- A callback is a function that is passed as an argument to another function that executes the callback based on the result. 
- They are basically functions that are executed only after a result is produced. Callbacks are an important part of asynchronous JavaScript.

## Example

```
// Main function
const mainFunction = (callback) => {
    setTimeout(() => {
        callback([2, 3, 4]);
    }, 2000)
}
  
// Add function
const add = (array) => {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    console.log(sum);
}
  
// Calling main function
mainFunction(add); //output is 9

```

- Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure. 
- Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

## Example

```
<html>
<body>
    <div class="container">
        <h2 class="word">Geeks</h2>
        <h2 class="word">For</h2>
        <h2 class="word">Geeks</h2>
    </div>
</body>
<script>
    let words = document.querySelectorAll(".word");
  
    const animateAll = (animate) => {
        setTimeout(() => {
            animate(words[0]);
            setTimeout(() => {
                animate(words[1]);
                setTimeout(() => {
                    animate(words[2]);
                }, 1000)
            }, 1000)
        }, 1000)
    }
  
    const animate = (word) => {
        word.classList.add("animate");
    }
  
    animateAll(animate);
</script>
  
</html>

```


## Callback hell issue we can avoid by Prmoises

- A promise is an object returned by an asynchronous function, which represents the current state of the operation. 
- At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.

## Example With One Promise

```
<html>

<head>
  <H1>Promises</H1>
</head>

<body>
  <script>
    const getPostById = (postId) => {
      return new Promise((resolve, reject) => {
        console.log("Inside the promise")
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then(response => {
            console.log(response.status)
            if (!response.ok) {
              reject(`Error:${response.status}`)
            }
           post = response.json();
            resolve(post);
          })
      })
    }

    getPostById(1)
      .then(post => {
        console.log(post);
      })
      .catch(error => {
        console.error(error);
      });

  </script>
</body>

</html>

```

## Example With Multiple Promises

```
<html>

<head>
  <H1>Promises</H1>
</head>

<body>
  <script>
    const getPostById = (postId) => {
      return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then(response => {
            if (!response.ok) {
              reject(`Error:${response.status}`)
            }
            return response.json();
          }).then(post => {
            return new Promise((resolve, reject) => {
              fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}`)
                .then(response => {
                  if (!response.ok) {
                    reject(`Error:${response.status}`)
                  }
                  return response.json();
                }).then(user => {
                  resolve(user);
                }).catch(error => reject(error));
            })
          }).then(postWithUser => {
            resolve(postWithUser)
          }).catch(error => reject(error))
      })
    }

    getPostById(1)
      .then(post => {
        console.log(post);
      })
      .catch(error => {
        console.error(error);
      });

  </script>
</body>

</html>

```
## Calling Multiple Promises

```
const add = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num1 + num2;
      resolve(result);
    }, 1000);
  });
};

const multiply = (num1, num2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = num1 * num2;
      resolve(result);
    }, 1000);
  });
};

add(2, 3)
  .then(sum => {
    console.log(`Sum: ${sum}`);
    return multiply(sum, 4);
  })
  .then(product => {
    console.log(`Product: ${product}`);
    return add(product, 5);
  })
  .then(finalResult => {
    console.log(`Final Result: ${finalResult}`);
  })
  .catch(error => {
    console.error(error);
  });


```
