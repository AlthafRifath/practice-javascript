// IF STATEMENTS = if a condition is true, execute some code if not, do something 

let age;
let hasLicense = true;
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

// 1
if (age >= 18){
    console.log("You are old enough to drive")

    if(hasLicense){
        console.log("You have your license!")
    }else{
        console.log("You do not have your license yet!");
    }

}else{
    console.log("You must be 18+ to have a license")
}


// 2

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age)
    if(age >= 120) {
        resultElement.textContent = `You are too old to enter this site`
    }
    else if (age == 0){
        resultElement.textContent = `You can't enter you were just born`
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`
    }
    else if(age < 0){
        resultElement.textContent = `Enter a valid age`
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`
    }
}


// 3
let isStudent = true;

if (isStudent){
    console.log("You are a student")
}else{
    console.log("You are not a student")
}

