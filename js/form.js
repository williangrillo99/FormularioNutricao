var adicionar = document.querySelector("#adicionar-paciente")
adicionar.addEventListener("click", mostrarMensagem)
console.log(adicionar);
function mostrarMensagem(event){
    
    event.preventDefault();
    console.log("Funcionou")

    //extraindo informações do form
    var form = document.querySelector("#form-adiciona")

    var paciente = obtemformulariopaciente(form);
    montarTr(paciente)
    console.log(paciente)


    //adicionando pacientes na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr)

    console.log(pacienteTr)
}

function obtemformulariopaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


function montarTr(paciente){
    //criar tr e td
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
 
 
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
 
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    // pacienteTr.appendChild(imcTd)
    console.log(pacienteTr)
    return pacienteTr;
}