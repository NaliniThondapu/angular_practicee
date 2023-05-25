var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//variables
var username = "nalini";
var age = 35;
var iscertified = false;
//any means we can store any type of data into this variable(like string , number, boolean ...etc)
var varname = "123";
console.log(varname); //123
console.log(username); //nalini
console.log(age); //35
console.log(iscertified); //false
//initialize the arrays
var array = [1, 2, 3, 4];
console.log(array); //[1,2,3,4]
//create the objecttype variable
var obj = {};
//datatypes
//string
var user = "nalini";
//number
var password = 123;
//boolean
var isDone = true;
//any
var anydata;
anydata = 100;
anydata = "hello";
anydata = false;
//array
var data = ["nalini", "123"];
var scores = [12, 45, 67.56];
//it can store any kind of data
var data1 = [145, "s", true, [1, 2, 3], { key: [1, 2, 34] }];
//tuple
var d = ["hello", 123, false];
//object
var x = {
    a: 100,
    b: 200
};
var customer = /** @class */ (function () {
    function customer() {
    }
    customer.prototype.withdraw = function () {
        console.log("withdraw");
    };
    return customer;
}());
var cust1 = new customer();
cust1.name = "nalini";
cust1.withdraw();
var test = /** @class */ (function () {
    function test(name) {
        this.name = name;
        console.log("Test class constructor");
    }
    test.prototype.testM1 = function () {
        console.log("Test method");
    };
    return test;
}());
var testObj = new test("nalini");
testObj.testM1();
//method overloading
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.authenticate = function (input1, input2) {
        if (typeof input1 == "number") {
            console.log("Login with mobile number");
            return;
        }
        else {
            console.log("Login with email");
        }
    };
    return Login;
}());
var login = new Login();
login.authenticate(9550788106, "1234");
var userObject = /** @class */ (function () {
    function userObject() {
        this.name = "nalini";
        this.mobileNumber = 12345;
    }
    userObject.prototype.m1 = function () {
        console.log(this.name + " " + this.mobileNumber);
    };
    return userObject;
}());
var user2 = new userObject();
user2.m1();
var bmw = /** @class */ (function () {
    function bmw() {
        this.noOfwheels = 4;
    }
    bmw.prototype.moveforward = function () {
        console.log("yes will move forword");
    };
    return bmw;
}());
var implementclass = /** @class */ (function (_super) {
    __extends(implementclass, _super);
    function implementclass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mode = "automatic";
        return _this;
    }
    implementclass.prototype.havebreaks = function () {
        console.log(true);
        console.log(this.mode);
        console.log(this.noOfwheels);
    };
    return implementclass;
}(bmw));
var obj4 = new implementclass();
obj4.havebreaks();
var charecter = /** @class */ (function () {
    function charecter() {
    }
    return charecter;
}());
var configurations;
(function (configurations) {
    configurations["name"] = "nalini";
    configurations["password"] = "1234";
    configurations["email"] = "abc@gmail.com";
})(configurations || (configurations = {}));
//advance types
//union types
var myvar;
myvar = 123; //valid
myvar = "nalini"; //valid
var myobject = {
    propA: 10,
    propB: "Nalini"
};
console.log(myobject); //{ propA: 10, propB: 'Nalini' }
//type guards
function doSomething(value) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value.toUpperCase());
    }
}
doSomething(123.3545);
doSomething("nalini");
