var titulo = document.querySelector(".tituloprincipal")
titulo.textContent = "teste";

console.log(titulo.textContent)
var pacientes = document.querySelectorAll(".paciente")

for(i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i]
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent; 
    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;
    tdimc = paciente.querySelector(".info-imc")
    console.log(paciente);

    var pesoehvalido = true;
    var alturaehvalida = true;


    if(peso <= 0 || peso >= 1000){
        console.log("Peso invalido")
        var pesoehvalido = false;
        tdimc.textContent = "Peso Invalido"
        paciente.classList.add("pacienteInvalido");
    }
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura Invalida")
        var alturaehvalida = false;
        tdimc.textContent = "Altura Invalida"
        paciente.classList.add("pacienteInvalido");

    }

    if(pesoehvalido == true && alturaehvalida == true){
        var imc = peso / (altura * altura)
        console.log(imc)
        
        tdimc.textContent = imc.toFixed(2);
    }

}
