'use strict'; // Ativa o modo restrito
// Código para consumo de API da ViaCep
// https://viacep.com.br/ws/86082006/json/


// Limpar consulta do form já realizada
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP
const cepValido = (cep) =>  cep.length == 8 && eNumero(cep);