function removeDuplicates(data){
    var unique = []
    data.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element)
        }
    });
    console.log(unique)
}

var data = ["apple","mango","apple"]
removeDuplicates(data)

//using set method
function usingSet(arr){
    //create a new array from the Set using the spread operator
    return [...new Set(arr)]
}


console.log("Using set:"+usingSet(data))

//using indexof
function usingIndexof(arr){
    var unique = []
    arr.forEach(element=>{
        if(unique.indexOf(element) === -1){
            unique.push(element)
        }
    });

    console.log("Using Indexof:"+unique)
}

usingIndexof(data)
