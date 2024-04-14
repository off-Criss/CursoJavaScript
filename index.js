/*
let misdatos={
    nombre : "Juan",
    edad : 18,
    sexo : "M",

};


let myarray = ["Maria","Marcos","Cris"];

console.log(myarray[2]);*/

let boton = document.getElementById("Boton");

boton.addEventListener("click",function(){

;});

async function getData(urt,elemento){
try {
    let response= await fetch(url);
    let json =await response.json();
    return json;
    
} catch (error) {
    console.log(error);
    
}
let datos = getData("https://pokeapi.co/api/v2/pokemon/ditto");
console.log(datos);
elemento.InnerHTML = datos;

}