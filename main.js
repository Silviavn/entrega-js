//definimos las variables
function calcularPromedio(totalNotas, cantidadNotas ) {
    let promedio = totalNotas / cantidadNotas;
    return promedio;
}

let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"))

let totalNotas =0;

for(let i = 0; i < cantidadNotas; i++){
    let nuevaNota = parseInt(prompt("Registre las notas"));

    totalNotas = totalNotas + nuevaNota;
}

let promedio = calcularPromedio(totalNotas, cantidadNotas);

console.log("El promedio de las notas es:" + promedio);

document.body.querySelector("p").innerText = "El promedio fue: " + promedio 

if(promedio > 4) {
    alert("Pasaste de curso!!!")
}
else if(promedio == 4) {
    alert("Pasaste arrastrando")
}
else {
    alert("Repetiste el año, vino a puro calentar el asiento!!!")
}