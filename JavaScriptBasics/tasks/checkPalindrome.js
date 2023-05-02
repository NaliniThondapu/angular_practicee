function checkPalindrome(name) {
    var strLength = name.length;
    if (strLength > 0) {
        var reverseString = "";
        // Remove non-alphanumeric characters and convert to lowercase
        name = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        for (let i = strLength - 1; i >= 0; i--) {
            reverseString = reverseString.concat(name.charAt(i));
        }
        if (name == reverseString) {
            return `The String ${name} is palindrome`;
        }
    }
    return `The String ${name} is not palindrome`;
}

var data = "A man, a plan, a canal: Panama";
console.log(checkPalindrome(data));

data = "liril liril"
console.log(checkPalindrome(data));