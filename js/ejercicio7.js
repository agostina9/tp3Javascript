function tablaDeMultiplicar(numero){
   document.write('Tabla de multiplicar del '+ numero)
   document.write('<ul>')
   for(i=1; i<=10;i++){
    document.write('<li>');
    document.write(numero+'x'+i+'='+numero*i);
    document.write('</li>');
   }
   document.write('</ul>');

}

let numeroIngresado= parseInt(prompt('Ingresar un numero'))

tablaDeMultiplicar(numeroIngresado)