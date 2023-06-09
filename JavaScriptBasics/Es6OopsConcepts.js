//normal javascript object

var emp = {
    name: "ravi",
    age: 29,
    certified: true
}

//using function Constructor
function EMPLOYEE(name, age, certified) {
    this.name = name;
    this.age = age;
    this.certified = certified;
}

var emp1 = new EMPLOYEE('ravi', 35, true);
var emp2 = new EMPLOYEE('kiran', 45, false);
console.log(emp1) // EMPLOYEE { name: 'ravi', age: 35, certified: true }
console.log(emp2) //EMPLOYEE { name: 'kiran', age: 45, certified: false }

class Employee {
    firstname;
    lastname;
    age;

    empfullname() {
        return this.firstname + " " + this.lastname;
    }

}

var emp3 = new Employee();
emp3.firstname = 'raju'
emp3.lastname = 'rani'
emp3.age = 35;

console.log(emp3) //Employee { firstname: 'raju', lastname: 'rani', age: 35 }
emp3.lastname = "shiva"
console.log(emp3)//Employee { firstname: 'raju', lastname: 'shiva', age: 35 }


class A {
    name = "A";

    constructor() {
        console.log("This is the class A");
    }

    getName() {
        return this.name;
    }
}

var a = new A();//This is the class A
console.log(a.getName()); //A


class B extends A{
    constructor(){
        super();
        console.log("Class B constructor")
    }
}

var b = new B(); //This is the class A
//Class B constructor
console.log(b) //B { name: 'A' }

class StaticDemo{
    static name="ravi";
    address="hyderabad";
    id;
    age;
}

var sd = new StaticDemo();

sd.id=900;
sd.name="kiran";// It will not throw any error but the original value does not change

console.log(sd.id);//900
console.log(sd.name);//kiran

console.log(StaticDemo.name)//ravi


class Emp{
    name;
    set name(name){
        if(name == null || name == ""){
            console.log("Name cannot be empty");
        }else{
            this.name = name;
        }
    }

    get name(){
        return this.name;
    }
}

var emp = new Emp();
emp.name = "nalini";// in this case set method will call and set the value for the name
emp.name = "";// In this case "Name can not be empty"
console.log(emp) //In this case will call the getmethod automatically no need to call explicitly


//generators

function* f1(){
    console.log(1)
    console.log(2)
    yield "block-1"
    console.log(3)
    console.log(4)
    yield "block-2"
    console.log(5)
    console.log(6)
    yield "block-3"
    console.log(7)

}

function f2(){
    console.log("Function f2");
}

var generator = f1()
generator.next();
f2();
generator.next();
console.log('random text')
generator.next()
generator.next()
generator.next()