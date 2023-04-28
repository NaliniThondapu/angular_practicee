## Scopes
- If we declare a variable outside of the function that is a globalvariable
- If we declare a variable inside the function that is a local variable
- If we declare a variable using let that is mostly block level variable.

```

var variable = "this is a global variable"

function f1(){
 local = "this is a local variable"

 users = ["ravi","kiran","rama"]
users.forEach(user=>{
//here let means block level variable
let email = user.concat("@gmail.com")
});
}
```
