
// COMO CALCULAR CUANTO PARACETAMOL DAR A UN NINIO DEPENDIENDO DE SU PESO 
// LA INDICACION MEDICA ES ADMINISTRAR 15MG/KG DE PESO DEL PACIENTE C/ 6HRS
// LA PRESENTACION DEL PARACETAMOL ES 120MG/5ML o 100MG/ML



function calcularDosis (peso , presentacion){

    peso = parseFloat (peso);
    presentacion = parseInt (presentacion);

    let dosisMg = 0;
    let dosisFinal = 0;

    if ( peso <= 25 && presentacion == 1){
        
        dosisMg = peso * 15;
        dosisFinal = (dosisMg / 120) * 5; 
        return dosisFinal
    }

    else if ( peso <= 25 && presentacion == 2){
        dosisMg = peso * 15;
        dosisFinal = (dosisMg / 100) * 1; 
        return dosisFinal
    }

}


console.log ("Bienvenido/a a nuestro sistema!");
console.log ("Te ayudamos a calcular la dosis de PARACETAMOL para niños");

let peso = 1; 

while ( peso != 0){

    peso = prompt("Ingrese el peso del niño, debe ser peso mayor a 0");

    if (peso == 0 ){
        break;
    }

    let presentacion = prompt ("Ingrese 1 si la presentacion del paracetamol es de 120mg/5ml o Ingrese 2 si la presentacion es de 100mg/ml")

    if (presentacion == 0 || presentacion > 2 ){
        break;
    }

    if ( presentacion == 1 ){

        let dosisMl =  calcularDosis (peso, presentacion);

        console.log ("Su presentacion del paracetamol es: 120mg / 5ml")
        console.log ("Tu niño pesa: ", peso , "kg");
        console.log ("Debe administrar entonces: ", dosisMl , "ml");
        
    }

    else if (presentacion == 2){

        let dosisMl =  calcularDosis (peso, presentacion);

        console.log ("Su presentacion del paracetamol es: 100mg/ml")
        console.log ("Tu niño pesa: ", peso , "kg");
        console.log ("Debe administrar entonces: ", dosisMl , "ml");

    }

}



