## Object.create()
- create an object using another object. we can inherit the data from one ovject to another object.

### Example

```
var bank = {
  name:"sbi",
  ifsc:1234
  branch:"chandanagar"
}

var customer = Object.create(bank);

customer.username = "nalini"
customer.accno=1234567;
customer.balance = 9000;

console.log(customer)
// The output is {"username:"nalini",accno:1234567, balance:9000}

//we can access parant bank elements as well
console.log(cutomer.name) //output is sbi

// This means bank is parent and customer is child object
// we can get parent data to child but not possible vice versa

```

## Notes
- primitives reassign ment will not accept if it is const type

```
const x =100
x=10
console.log(x) // It will throw error "assignment to const is not allowed"

```

- non-primitives, reassignment will not ccept if it is const type
- But we can apply the methods like push,change the value on these, those will reflect. 

### Example

```
const users = [10,20,30]
users.push(40);
console.log(users)// ouput is [10,20,30,40]

users = []
console.log(users) // here get the error "reassignment not allowed for const type"

```

- In case of Objects we can able to change

```
const user ={
name:"nalini",
city:"hyd"
}

user.city = "bng"
console.log(user)// the output is {name:"nalini", city:"bng"}

```

- In case if we want to make this as empty , means reassignments that will not accept

```
user =[] // throw an error "reassignment will not allow for const"

```

## Object.freeze()
- This method is used to create the objects , which were not able to update through out the any one.

### Example

```
var config = Object.freeze({
port:9011,
host:"ww.facebook.com",
id:123
});

console.log(config) // output is {port:9011,host:"www.facebook.com",id:123}

//If we want to update the port

config.port = 9993

// out put is same because we freeze the object. It will not give any error
console.log(config) // output is {port:9011,host:"www.facebook.com",id:123}
```

## Notes

- Object.isFrozen()  is used to find the object is freeze or not
- Object.keys(objectname) will get all the keys of an object. return type is an array
- Object.values(objectname) will get values of keys of an object  return type is an array
- Object.entries(objectname) will get all entries of an object(entry is nothing but key and value) return type is an array

