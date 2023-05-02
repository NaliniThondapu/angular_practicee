console.log("Hello world")

function findFizzBuzz(no) {
    if (no < 0) {
        console.log("-ve numbers were not allowed")
    }
    else {
        if (no % 3 == 0 && no % 5 == 0) {
            console.log("Fizz Buzz")
        } else if (no % 3 == 0) {
            console.log("Fizz")
        } else if (no % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log("Number neither divisible by 3 nor 5")
        }

    }

}

findFizzBuzz(15)
findFizzBuzz(3)
findFizzBuzz(5)
findFizzBuzz(40)
findFizzBuzz(4)
findFizzBuzz(-2)