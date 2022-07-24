var username = "Nandhini R"
var email = "nandhinirathinam08@gmail.com"
var firstname = "Nandhini"
var lastname = "R"

console.log(username.length)//10
console.log(username.startsWith('the')) //FALSE
console.log(email.toLowerCase())
console.log(email.toUpperCase())
console.log(firstname.concat(lastname))
console.log(username.split(" "))
var data = username.split(" ")
console.log(data.join(" "))
console.log("string method:- "+ username.slice(4,10))
console.log("webshinelearning method:- "+ webshinelearningSlice(username,4,10))
function webshinelearningSlice(myUser,start, end){
    var myFirstName = ""
    for(var i = username.indexOf('v'); i <= end; i++){
        myFirstName += myUser[i] // myFirstName = myFirstName + username[i]
    }
    return myFirstName
}

console.log(username.indexOf("v"))
