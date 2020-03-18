/* 
//Primeiro exercício
let age = 18;
console.log(age)

age = 20
console.log(age)
*/

/*
//Segundo exercício
let firstName = "Evandro";
let lastName = "Correia";

console.log(`${firstName} ${lastName}`) //template literals ES6
*/


/*
//Terceiro exercício
let weather = "sunny"
if (weather == "rainy") {
    console.log("Take an umbrella") 
} 
else if (weather == "stormy"){
    console.log("Dont go outside :O") 
}
else {
    console.log("Run, forest!") 
}
*/

/*
//Quarto exercício
let rain = false
let thunder = false

if(rain || thunder){
    console.log("Chvendo")
} else if (!rain && !thunder) { 
    console.log("Go outside")
}
*/

/*
//Quinto exercício
const beatles = ["Romeu", "Correia"]

beatles.forEach(beatle => { console.log(`Beatle: ${beatle}`)})
*/

/*
//Sexto exercício
//Usando conceito de lambda no ES6
let fisrtName = "Davis"
let lastName = "Jr"

const printFullName = (first, last) => { console.log(`${first} ${last}`)}
printFullName(fisrtName, lastName)
*/

//Sétimo exercício
const title = document.getElementById("title")
console.log(title.innerHTML) 

const btn = document.getElementById("btn")
//      btn.addEventListener( `mouseover`, () => {alert("You clicked me!")} )
      btn.addEventListener( `click`, () => {alert("You clicked me!")} )