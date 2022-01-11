var adicionar = document.querySelector("#adicionar-paciente")
adicionar.addEventListener("click", mostrarMensagem);

function mostrarMensagem(event){
    
    event.preventDefault();

    // console.log("Funcionou")

    var form = document.querySelector("#form-adiciona")
    var paciente = obtemformulariopaciente(form);
    
    var pacienteTr = montarTr(paciente)

    //adicionando pacientes na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr)
    form.reset();
}

function obtemformulariopaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value),
    }

    return paciente;
}


function montarTr(paciente){
    //criar tr e td
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
   
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
 
 
    var nomeTd = montarTd(paciente.nome, "info-nome")
    var pesoTd = montarTd(paciente.peso, "info-peso")
    var alturaTd = montarTd(paciente.altura, "info-altura")
    var gorduraTd = montarTd(paciente.gordura, "info-gordura")
    var imcTd = montarTd(paciente.imc, "info-imc")

 
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)
    
    console.log(pacienteTr)

    return pacienteTr;
}
function montarTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}