//Chapter 43 to 48
//Question 1

function link(){
var click = document.getElementById("clickhere")
// console.log(click)
alert("This is a tag")
}

//Question 2

function img(){
var img1 = document.getElementById("img1")
// console.log(img1)
alert("Thanks for purchasing Car from our Show Room")

}

function imG(){
var img2 = document.getElementById("img2")
alert("Thanks for Purchasing Car from our Show Room")
}

//Question 3

function dlt1(){
var table1 = document.getElementById("dlt1")
table1.remove()
console.log(table1)

var table2 = document.getElementById("dlt2")
table2.remove()
console.log(table2)

}
function dlt2(){
var table2 = document.getElementById("dlt2")
table2.remove()
console.log(table2)

}

function dlt3(){
var table3 = document.getElementById("dlt3")
table3.remove()
console.log(table3)

}

function dlt4(){
var table4 = document.getElementById("dlt4")
table4.remove()
console.log(table4)

}

//Question 4

function mouseOver(){
var over = document.getElementById("img")
console.log(over)
over.src = "./bmw1.jpg"
}

function mouseOut(){
var out = document.getElementById("img")
out.src = "./bmw2.jpg"
}

//Question 5
var count = 0;
var counterElement = document.getElementById("click")
function addition(){
count++;
counterElement.innerText = count;
}

function subtraction(){
count--;
counterElement.innerText = count;
}


//Chapter 49 to 52
//Question 1

function getValue(){
var name = document.getElementById("name")
var email = document.getElementById("email")
var password = document.getElementById("password")

document.write(name.value + "<br />")
document.write(email.value + "<br />")
document.write(password.value + "<br />")
}

//Question 2

var loremTxt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deserunt totam iste tempore"

function seeMore(parameter1){
var para = document.getElementById("para");
var seeBtn = parameter1;
if(seeBtn.innerHTML == "See More"){
seeBtn.innerHTML = "See less"
para.innerHTML = loremTxt
} else{
seeBtn.innerHTML = "See More"
para.innerHTML = "Lorem ipsum dolor sit amet"

}
}


//Question 3
function dlt1(){
var table1 = document.getElementById("dlt1")
table1.remove()
console.log(table1)

var table2 = document.getElementById("dlt2")
table2.remove()
console.log(table2)

}
function dlt2(){
var table2 = document.getElementById("dlt2")
table2.remove()
console.log(table2)

}

function dlt3(){
var table3 = document.getElementById("dlt3")
table3.remove()
console.log(table3)

}

function dlt4(){
var table4 = document.getElementById("dlt4")
table4.remove()
console.log(table4)

}


//here i used chatgpt
let studentList = [];

function addStudent() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let student = {name: name, email: email, phone: phone};
studentList.push(student);
displayStudents();
document.querySelector('form').reset();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";
    for(let i = 0; i < studentList.length; i++) {
    let student=studentList[i];
    let row=table.insertRow(); //
    let nameCell = row.insertCell(0);
    let emailCell=row.insertCell(1);
    let phoneCell=row.insertCell(2);
    let actionCell = row.insertCell(3);
}
}