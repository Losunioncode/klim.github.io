// var heading = document.querySelector('h1')
// var answer = document.querySelector('h2')
// heading.textContent = 'Hello World'
// var ask = prompt('How old are you ?')

// answer.textContent = ask


// Function

// function multiply(num1, num2){
//     var result = num1 * num2;
//     return result;
// }


// Events 

// heading.onclick = function(){
//     // alert('Stop clicking on me ');
//     co
// }

// Adding new images 

var myImage = document.querySelector('img')
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    
    if(mySrc === "/Users/tatianalipkina/Desktop/images/nature1.png") {
        myImage.setAttribute("src", "/Users/tatianalipkina/Desktop/images/nature2.png")
    } else {
        myImage.setAttribute("src", "/Users/tatianalipkina/Desktop/images/nature1.png")
    }
}
    
function setUserName() {
    var myName = prompt("Please enter your name : ")
    localStorage.setItem("name", myName);
    myHeading.textContent = "Something is here " + myName
}

if(!localStorage.getItem("name")) {

    setUserName();

} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Something is here " + storedName;

}


myButton.onclick = function (){
    setUserName();

}
