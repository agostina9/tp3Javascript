//simular lanzamiento de dos dados math.random
//sumar el resultado de lanza dos dados y anotar en un array
let sumas=[];
for (let i = 0; i < 50; i++) {
    let dado1=Math.floor(Math.random()*(6-1 +1)+1);
    let dado2=Math.floor(Math.random()*(6-1 +1)+1);   
    let suma=dado1+dado2;
    sumas.push(suma);
}
document.write(sumas)

//mostrar con que frecuencia aparecen los resultados de todas las sumas
document.write(`<table>
<tbody>
<tr><td>Resultado</td><td>Frecuencias</td>
`)
for (let resultado = 2; resultado <= 12; resultado++) {
    let contador=0;
    for(let posicion=0; posicion<sumas.length; posicion++){
        if(resultado === sumas[posicion]){
            //sumar las apariciones
            contador++
            
        }
    }
    document.write(`<tr><td>${resultado}</td><td>${contador}</td>`)
}

document.write(`</tbody></table>`)