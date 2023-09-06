
// COMO CALCULAR CUANTO PARACETAMOL DAR A UN NINIO DEPENDIENDO DE SU PESO 
// LA INDICACION MEDICA ES ADMINISTRAR 15MG/KG DE PESO DEL PACIENTE C/ 6HRS
// LA PRESENTACION DEL PARACETAMOL ES 120MG/5ML o 100MG/ML



class Paciente {

    constructor (nombre, peso, edad, presentacion){
        this.nombre =  nombre;
        this.peso = peso;
        this.edad = edad;
        this.presentacion = presentacion
    }

    esNinio(){
        return this.edad <=12;
    }

    calcularDosis(){
        if (!this.esNinio) return;

        if (this.presentacion == 1){
            let dosisMg = this.peso * 15;
            let dosisFinal = (dosisMg / 120) * 5; 
            return dosisFinal
        }

        let dosisMg = this.peso * 15;
        let dosisFinal = (dosisMg / 100) * 1; 
        return dosisFinal
    }

    imprimir(){
        let presentacionTexto = "100mg/ml"

        if (this.presentacion == 1  ){
            presentacionTexto = "120mg/5ml"
        }

        console.log ("Nombre del paciente: ", this.nombre);
        console.log ("Su presentacion del paracetamol es: ", presentacionTexto);
        console.log ("Peso: ", this.peso , "kg");
        console.log ("Debe administrar entonces: ", this.calcularDosis() , "ml");
    }
}

let pacientes = [];

function pedirDatos(){
    
    let nombre = prompt ("Ingrese el nombre del niño");
    let peso = prompt ("Ingrese el peso del niño, debe ser peso mayor a 0");
    let edad = prompt ("Ingrese la edad del niño");    
    let presentacion = prompt ("Ingrese 1 si la presentacion del paracetamol es de 120mg/5ml o Ingrese 2 si la presentacion es de 100mg/ml");
    
    while (presentacion == 0 || presentacion >= 3 ){
        presentacion = prompt("VALOR INVALIDO. \nIngrese 1 si la presentacion del paracetamol es de 120mg/5ml o Ingrese 2 si la presentacion es de 100mg/ml")
    }

    const paciente = new Paciente(nombre, peso, edad, presentacion);
    pacientes.push(paciente)
}


function imprimirInfo(){
    let resultadoFilter = pacientes.filter(paciente=>paciente.esNinio());
    resultadoFilter.forEach(paciente=>paciente.imprimir())
}


console.log ("Bienvenido/a a nuestro sistema!");
console.log ("Te ayudamos a calcular la dosis de PARACETAMOL para niños");
pedirDatos();
imprimirInfo();