function checkEmailDomain(email) {
    var validDomains = ["gmail.com", "yahoo.com", "hotmail.com"]
    var domain = email.split('@')[1]
    if (validDomains.includes(domain)) {
        console.log("The email has valid domain ::" + domain)
    } else {
        console.log("The domain ::" + domain + "::is not valid")
    }
}

checkEmailDomain("nalini@gmail.com")
checkEmailDomain("nalini@hotmail.com")
checkEmailDomain("nalini@xyz.com")