var nextYearVal = 1;
console.log("next year plus :", nextYearVal)
document.getElementById("demo").innerHTML = 2020 + nextYearVal;

let user = {
    name: "Metin",
    age: 28
};

function alertUser() {
    document.getElementById("userButton").innerHTML = "user name " + user.name + " user age" + user.age;
}
console.log("%d is age of %s", user.age, user.name)

let name = "Metin";
let height = 6.2;
document.getElementById("metin").innerHTML = name + " " + " is tall " + height

document.getElementById("timestamp").innerHTML = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear()

let numberArray = [4, 5, 6, 7, 8];

document.getElementById("numberArray").innerHTML = numberArray


document.getElementsByClassName("number")[0].innerHTML = "1 2 3 4 5" ;

// document.write("document write in javascript file");