let salir = ''
let ciudades = []

while (salir == '') {
    ciudad = prompt('Ingresar nombre de ciudades')
    if (ciudad != null) {
        ciudades.push(ciudad)
    }
    let seguir = confirm('Desea ingresar mas ciudades?')
    if (!seguir) {
        salir = 'y'
    }
}
console.log(ciudades)
document.write(ciudades);

document.write('<br>Longitud del array;'+ ciudades.length)
while (salir == '') {
    ciudad = prompt('Ingresar nombre de ciudades')
    if (ciudad != null) {
        ciudades.push(ciudad)
    }
    let seguir = confirm('Desea ingresar mas ciudades?')
    if (!seguir) {
        salir = 'y'
    }
}
console.log(ciudades)

document.write('<br>Items posicionados primero, tercero y ultimo' + series[0, 2, 9])

ciudades.push('Paris')
document.write('<br>Agrego Paris al final del arreglo:<br>')
while (salir == '') {
    ciudad = prompt('Ingresar nombre de ciudades')
    if (ciudad != null) {
        ciudades.push(ciudad)
    }
    let seguir = confirm('Desea ingresar mas ciudades?')
    if (!seguir) {
        salir = 'y'
    }
}
console.log(ciudades)
document.write(ciudades)

document.write('<br>Elemento que ocupa la segunda posicion' + ciudades[1])


ciudades[1] = 'Barcelona'
document.write('<br>Sustituyo el segundo elemento por Barcelona<br>')
while (salir == '') {
    ciudad = prompt('Ingresar nombre de ciudades')
    if (ciudad != null) {
        ciudades.push(ciudad)
    }
    let seguir = confirm('Desea ingresar mas ciudades?')
    if (!seguir) {
        salir = 'y'
    }
}
console.log(ciudades)
document.write(ciudades)

