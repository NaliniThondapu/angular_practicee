## Array

 -    An Array is a linear data structure which can be used to hold one or more values of any type.  An array index will starts from zero.
   
 ``` 
 eg: const arr = [1,2,3,4,"xyz"] 
 
 ```
 
 ### Below are the Methods and Its Examples Need to learn for intervew 
 
 ```
 // An Array is a linear data structure which can be used to hold  one or more values
// The array index will start from zero

// toString()
//converts an array to a string(comma seperated values array values)
const fruits = ["Apple","Banana", "Orange","Mango"]
console.log("Fruits:"+fruits.toString())

//pop() method , removes the last element from an array
fruits.pop()
console.log("Fruits:"+fruits.toString())

//push() , add the element at the end of an array
fruits.push("PineApple");
console.log("Fruits:"+fruits.toString())

//length() , it returns the size of the array
console.log(fruits.length)

//at() method will used to get the element by position
console.log("Element at Index 3:"+fruits.at(3))


const a = [1,2,3,4,"x"]
//findIndex() , will get the index/position of the given value
// this method will accept only arrow function
console.log("Index of :"+a.findIndex((element)=> element === "x"))

//unshift() is used to insert a new element at start of an array
a.unshift(10)
console.log(a)

//shift() method removes the first element from an array
a.shift();
console.log(a)

//fill() method replcae all the values with the given value
const b = [1,2,3,4]
console.log(b.fill(1))

//join() method is used to convert an array into string
console.log(b.join(" "))
console.log(b.join(","))


//from() method of an Array class is used to convert the string into an Array
console.log(Array.from("Nalini"))

//isArray() method is used to check the onput is an array or not
console.log(Array.isArray(a))

//reverse() method is used to reverse an array
console.log(a.reverse())

//includes() method verifies whether the given element is included in an array or not
const c = [1,2,3,4,5]
console.log(c.includes(5))

//map() metod is used to creare the new array with the modified elements
const arr1 = [1,2,3,4]
const newArr = arr1.map(function(e1){
    return e1*3;
})
console.log(arr1)
console.log(newArr)

//find() method returns the value of the first element that passes the test
// here we have 3,4 are both greather than 2 , but the condition satisfied first for 3 only thats why will return only 3
const arr2 = [1,2,3,4]
var data = arr2.find(ele => ele > 2)
console.log(data)

//filter() method is used to create a new array with the filtered values
var newArr1 = arr2.filter(e => e > 2)
console.log(newArr1)


// filter the objects by the condition
const objs = [{name: "nalini",age:37},
              {name:"shiva",age:39},
            {name:"nalinishiva",age:25}]
// var newObjs = objs.filter(el => el.age > 30)
//Or 
var newObjs = objs.filter(function(e1){
    return e1.age > 30
})
console.log(newObjs)

//every() , executes a function for each array element and returns true if the function returns true for all elements
//it is just like an AND condition between all the elements
const ar = [1,2,3,4]
var result = ar.every(el => el>2)
// the above function will check like 1>2 && 2>2 && 3>2 && 4>2
console.log(result) // as per the above all were not true so it returns false

//some() will exceutes like an OR operator
var res = ar.some(el => el>2)
// the above function will check like 1>2 || 2>2 || 3>2 || 4>2
console.log(res) //true


//the reduce() method is used to accumulate the result like sum and retuns a single value
// it accepts two parameters one is array iterated element and the result

const arr3 = [1,2,3,4]
var result1 = arr3.reduce((total,number) => total+number,0)
//In the above function total is initialized as zero and number is the each element os an array
console.log(result1)

//the slice() , it returns a new array from a given start up to (not include) the given end
// this method always creates a new array and do not remove any elements from the source array
var newa = [1,2,3,4,5,6,7]
var newArr2 = newa.slice(1,5)
console.log(newArr2)

//the splice() , it is used to add new items to an array 
//the first parameter(2) defines the position where the new elements should be added ,
// the second parameter(1) defines how many elements should be removed from the position defined as first parameter
//the rest of the parameters define the new elements to be added (any number of elements we can give)
newa.splice(2,1,50,60,70,80)
console.log("splice:"+newa)
// newa.splice(0,1)

//for-each
newa.forEach(element => {
    console.log(element)
});

//combine two arrays into a single array by using concat() method
const x = [1,2,3,4]
const y = ["abc","def"]
const z = [5,6,7]
var newx = x.concat(y).concat(z)
console.log(newx)

//sort() method is used to sort the array elements into an  ascending order
const arr4 = [1,2,5,6,3]
var newarr4 = arr4.sort();
console.log(newarr4)

//arry sort in decending order
//first sort in the ascending and then reverce the sorted array
const arr5 = [1,2,5,6,3]
var newarr5 = arr5.sort();
console.log(newarr5.reverse())

//copyWithin() , method copies array elements to another position in the same array
//array.copyWithin(target,startposition,endposition)

const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits1.copyWithin(2, 0, 2);
console.log(fruits1)
fruits1.copyWithin(2, 0);
console.log(fruits1)

//the entries() method returns an Array Iterator object with key/value pairs:

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits3.entries();

for (let x of f) {
  console.log(x)
}


var emp1 = {
  name:"nalini",
  deatils:function(role,exp,certified){
    return this.name+" "+role+" "+exp+" "+certified;
  }
}

var emp2 ; {
  name:"rama"
}

emp1.deatils.bind(emp1)

```
 
 ## Numbers
 -  In javascript we can create the number in two ways
 
 ```
 1 using primitivetype
       --- var a =100;
 2 using object
        var a = new Number(100)
```

```
eg: a == b // answer is true (only compare values)
    a === b // answer false (compares both value and type)

    var price = 20.123
    price.toExponential() --- will get exponential value
    price.toFixed(2) -- 20.12
    price.toPrecision(2) -- 20
    price.toPrecision(3) --20.1
```

## Dates

- Java script provides a predefined date object to get the current date from system date.

```
var date = new Date()
     date --- will get date and time (2023-04-13T03:33:38.223Z)
     date.getDate() == 13
     date.getDay() == 4 (Mon / tues like that)
     date.getMonth()  == 4
     date.getFullYear() == 2023
     date.getHours() == 03
     date.getMinutes() == 33
     date.getSeconds()  == 38
     date.getMilliSeconds()
var customDate  = new Date(1986,06,18)--- (year,month,date)
```

- Calculate the Number of days between two dates

```
 var pdate  = new Date("3/13/2023) === user defined date
 var cDate = new Date() ===system current date

 var diffInDays = (cDate - pdate)/(1000 * 60 * 60 *24)
  console.log(diffIndays)
 ```
 
 ## Strings:
 -  Difference between slice and substring methods
 ### Slice()
     slice() method will extract some part of the original string
     - If start index is greater than end will try to get chars from the -ve index only so, always returns empty string  
 ```
 var str3 = "Nalini"
console.log(str3.slice(0,1)) // output is "N" // get the string at 0 as start position and (1-1) end position i.e.N
console.log(str3.slice(3,1))// If start index is greater than end will try to get chars from the -ve index only so, always returns empty string
console.log(str3.slice(0,0))// output is empty
 // In the above case it will try to get the string 0 as start and (0-1) i.e -1 is end position will try 
 //to get the string at 0 and -1 porsion i.e. empty will return.
```
### Substring()

 - The substring() method will extract some part of the string
 - If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
 - Start or end values less than 0, are treated as 0.
 ```
 1. console.log(str3.substring(4,1))//output is ali start from 1 to (4-1 =3) end //If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
2. console.log(str3.substring(-3)) // Output is "Nalini" // If "start" is less than 0, it will start from index 0:
//if end is lessthan zero , it will considered as zero
//i.e 3,0
// In this case start is greater than end , areguments are swapped i.e. 0,3 so, start from zero to (3-1 =2) as end index
console.log(str3.substring(3,-2)) // output is "Nal"
```


