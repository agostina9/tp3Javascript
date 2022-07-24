function letrasTexto(argumento){
    let resultado = argumento;
    if(argumento===argumento.toLowerCase()){
        resultado='El texto esta compuesto por minusculas';
    }
    else if (argumento===argumento.toUpperCase()){
        resultado='El texto esta compuesto por mayusculas';

    }else{
        resultado='Esta formada por mayusculas y minusculas';
    }
    return resultado;
}
console.log(letrasTexto('HOLA'));
console.log(letrasTexto('HolA'));
console.log(letrasTexto('hola'));