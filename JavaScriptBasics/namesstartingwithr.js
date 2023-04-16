function findNames(arr,charecter){
   let result = []
   arr.forEach(element => {
    if(element.charAt(0).toLowerCase() == charecter.toLowerCase()){
        result.push(element)
    }
   });
   return result
}

let arr = ["raju","rani","nalini","ramya"]
console.log(findNames(arr,'r'))