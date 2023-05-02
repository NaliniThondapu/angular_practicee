function getNamesStartWithR(arr) {
    if (arr.length > 0) {
        return arr.filter(name => name.toLowerCase().startsWith('r'));
    }
    return [];
}

var names = ["raja","rani","rama","nalini"];
var result = getNamesStartWithR(names);
console.log(result)

names = ["nalini","karthikeya"]
result = getNamesStartWithR(names)
console.log(result)
