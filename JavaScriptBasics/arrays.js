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