function sumar(){
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = primerNumeroId.value;
    numeroDos = segundoNumeroId.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno + numeroDos;

    resultadoId.value = resultado;
}

function restar(){
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = primerNumeroId.value;
    numeroDos = segundoNumeroId.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno - numeroDos;

    resultadoId.value = resultado;
}

function dividir(){
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = primerNumeroId.value;
    numeroDos = segundoNumeroId.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    if(numeroDos <= 0){
        alert("No se puede dividir por 0 o numeros negativos")
    }
    else{
        resultado = numeroUno / numeroDos

        resultadoId.value = resultado;
    }
}

function multiplicar(){
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = primerNumeroId.value;
    numeroDos = segundoNumeroId.value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno * numeroDos;

    resultadoId.value = resultado;
}