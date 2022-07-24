function perimetroDeRectangulo(lado1,lado2){
    perimetro=2*(lado1+lado2)
    document.write('El perimetro del rectangulo es :' + perimetro)

}

let lado1Ingresado=parseInt(prompt('Ingresar el valor de un lado del rectangulo'))
let lado2Ingresado=parseInt(prompt('Ingresar el valor de otro lado del rectangulo'))

perimetroDeRectangulo(lado1Ingresado,lado2Ingresado)