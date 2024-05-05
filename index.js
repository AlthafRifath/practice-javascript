
// Professional Way
let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}


// Easy Way
// let username;
// username = window.prompt("What is your username?");
// console.log(username);