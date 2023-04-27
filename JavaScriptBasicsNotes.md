## Array

 -    An Array is a linear data structure which can be used to hold one or more values of any type.  An array index will starts from zero.
   
 ``` 
 eg: const arr = [1,2,3,4,"xyz"] 
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


