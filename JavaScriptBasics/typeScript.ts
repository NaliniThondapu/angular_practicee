//variables
var username: string = "nalini"
var age: number = 35
var iscertified: boolean = false
//any means we can store any type of data into this variable(like string , number, boolean ...etc)
var varname: any = "123"

console.log(varname) //123
console.log(username) //nalini
console.log(age) //35
console.log(iscertified) //false

//initialize the arrays
var array: number[] = [1, 2, 3, 4];
console.log(array) //[1,2,3,4]

//create the objecttype variable
var obj: {} = {}


//datatypes

//string
var user: string = "nalini"
//number
var password: number = 123
//boolean
var isDone: boolean = true
//any
var anydata: any;
anydata = 100;
anydata = "hello"
anydata = false

//array
var data: string[] = ["nalini", "123"]
var scores: number[] = [12, 45, 67.56]
//it can store any kind of data
var data1: any = [145, "s", true, [1, 2, 3], { key: [1, 2, 34] }]

//tuple
var d: [string, number, boolean] = ["hello", 123, false]

//object
var x: object = {
    a: 100,
    b: 200
}

class customer {
    name: string
    accountnumber: number
    accountbalance: number
    mobileno: number

    withdraw() {
        console.log("withdraw")

    }
}

var cust1 = new customer()
cust1.name = "nalini"
cust1.withdraw()


class test {

    name: string

    constructor(name) {
        this.name = name;
        console.log("Test class constructor")
    }

    testM1() {
        console.log("Test method")
    }

}

var testObj = new test("nalini")
testObj.testM1()

//method overloading
class Login {

    authenticate(email: string, password: string);
    authenticate(mobileno: number, password: string);

    authenticate(input1: string | number, input2: string) {
        if (typeof input1 == "number") {
            console.log("Login with mobile number")
            return;
        } else {
            console.log("Login with email")
        }
    }
}

var login = new Login()
login.authenticate(9550788106, "1234")


//interface
interface userinterface {
    name: string
    mobileNumber: number

    m1();

}

class userObject implements userinterface {
    name = "nalini"
    mobileNumber = 12345

    m1() {
        console.log(this.name + " " + this.mobileNumber)
    }
}

var user2: userinterface = new userObject();
user2.m1()

interface car {
    noOfwheels: number
    mode: string

    moveforward()
    havebreaks()
}

abstract class bmw implements car {
    noOfwheels = 4;
    abstract mode: string;
    moveforward() {
        console.log("yes will move forword");
    }

    abstract havebreaks();

}

class implementclass extends bmw {

    mode = "automatic"

    havebreaks() {
        console.log(true);
        console.log(this.mode)
        console.log(this.noOfwheels)

    }

}

var obj4: car = new implementclass()
obj4.havebreaks();

class charecter {
    public username: string // this can be accessed directly by a class or a subclass as well
    private _name: string // this can accessed with in this class only
    static uname: string // it can be inherited by a class , but actuval value will remains same in the parent class
    readonly uname1: string //it can be inherited but cannot be modified
}


enum configurations {
    name = "nalini",
    password = "1234",
    email = "abc@gmail.com"
}

//advance types
//union types
let myvar: number | string
myvar = 123 //valid
myvar = "nalini" //valid

//intersection type
interface A {
    propA: number
}

interface B {
    propB: String
}

type IntersectionType = A & B

let myobject: IntersectionType = {
    propA: 10,
    propB: "Nalini"
}

console.log(myobject) //{ propA: 10, propB: 'Nalini' }

//type guards
function doSomething(value: string | number) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2))
    } else {
        console.log(value.toUpperCase())
    }
}

doSomething(123.3545) //123.35
doSomething("nalini") //NALINI

//conditional types
type isString<T> = T extends string ? true : false
let value1 :isString<"nalini">
//mappedtypes
interface person{
    name:string;
    age:number
}
type Readonlyperson = Readonly<person>
// ReadonlyPerson is { readonly name: string; readonly age: number; }

class ABC implements Readonlyperson{
    name = "nalini"
    age =23
}