//length
var str = "My name is Nalini"
console.log(str.length)

//trim() will remove the white spaces on start and end of the string
var str1 = " My  name  is   nalini  "
console.log(str1.trim())

//trimStart() remove the spaces at the starting of the string
console.log(str1.trimStart);

//trimEnd() remove the extra white spaces will remove at the end
console.log(str1.trimEnd())

//replace() will replace only the first occurences
console.log(str1.replace("  "," "))

//replcaeALl() will replcae all the occurences
console.log(str1.replaceAll("  "," "))

//concat() method will combine two strings into one
console.log("nalini".concat("shiva"))

//padStart(strlength , whatcharneed to add) will add the chars at the start
var str2 = "abc";
console.log(str2.padStart(6,3))// total length is 6 already input has 3 chars , so at the start will add three more 3's

//padEnd()  will add the chars at the end
console.log(str2.padEnd(8,3))

//toUpperCase() -- will convert the string into uppercase
//toLowerCase() -- will convert the string into lowercase

//slice() method will extract some part of the original string
var str3 = "Nalini"
console.log(str3.slice(0,1)) // output is "N" // get the string at 0 as start position and (1-1) end position i.e.N
console.log(str3.slice(3,1))// If start is greater than end will try to get chars from the -ve index only so, always returns empty string
console.log(str3.slice(0,0))// output is empty
 // In the above case it will try to get the string 0 as start and (0-1) i.e -1 is end position will try 
 //to get the string at 0 and -1 porsion i.e. empty will return.

 //the substring() method will extract some part of the string
 //If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
// Start or end values less than 0, are treated as 0.

console.log(str3.substring(4,1))//output is ali start from 1 to (4-1 =3) end //If start is greater than end, arguments are swapped: (4, 1) = (1, 4).
console.log(str3.substring(-3)) // Output is "Nalini" // If "start" is less than 0, it will start from index 0:
//if end is lessthan zero , it will considered as zero
//i.e 3,0
// In this case start is greater than end , areguments are swapped i.e. 0,3 so, start from zero to (3-1 =2) as end index
console.log(str3.substring(3,-2)) // output is "Nal"

// These are also the differences between slice and substring




