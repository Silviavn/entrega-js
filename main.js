//definimos las variables
function promedio(totalNotas, cantidadNotas ) {
    let promedio = totalNotas / cantidadNotas;
    return promedio;
}

let cantidadNotas = parceInt(prompt("Ingrese la cantidad de notas"))

let totalNotas =0;

for(let i = 0; i < cantidadNotas; i++){
    let nuevaNota = parseInt(prompt("Registre las notas"));

    totalNotas = totalNotas + nuevaNota;
}

let promedio = calcularPromedio(totalNotas, cantidadNotas);

console.log("El promedio de las notas es:" + promedio);

if(promedio > 6) {
    alert("Pasaste de curso!!!")
}
else if(promedio > 3) {
    alert("Pasaste arrastrando")
}
else {
    alert("Repetiste el año, vino a puro calentar el asiento!!!")
}