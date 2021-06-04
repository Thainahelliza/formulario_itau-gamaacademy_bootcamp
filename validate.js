console.log("JavaScript carregado");

function validatelCel(telCel) {
    if (telCel.length <= 10) {
        return false
    }   return true
}

function validacpf(cpf) {
    
    if (cpf.length != 11){
        return false;
        }
        else {
            var numeros = cpf.substring(0, 9);
            var digitos = cpf.substring(9);

            var soma = 0;
            for (var i = 10; i > 1; i-- ) {
                soma += numeros.charAt(10 - i) * i;
            }

            console.log(soma)

            var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

                //resultado do primeiro digito
                if (resultado != digitos.charAt(0)) {
                    return false;
                }

                soma = 0;
                numeros = cpf.substring(0, 10);

                //resultado segundo digito
                for (var k = 11; k > 1; k--){
                    soma += numeros.charAt(11 - k) * k;
                }

                resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

                if (resultado != digitos.charAt(1))
                    return false;
        
        } return true;

    }

function validacao() {
    console.log ("Validando");
    // document.getElementById("success").style.display = 'none';
    // document.getElementById("error").style.display = 'none';
    
        var nome = document.getElementById("nome").value
        var cpf = document.getElementById("cpf").value.replace(/\D+/g, '');
        var endereco = document.getElementById("endereco").value
        var numero = document.getElementById("numero").value
        var telCel = document.getElementById("telCel").value.replace(/\D+/g, '');

    console.log(nome)
    console.log(cpf)
    console.log(endereco)
    console.log(numero)
    console.log(telCel)
    
      var resultadoNome = nome;
      var resultadoCpf = validacpf(cpf);
      var resultadoEnd = endereco;
      var resultadoNum = numero;
      var resultadoTel = validatelCel(telCel);
      console.log(resultadoTel)

          if (resultadoCpf == true && resultadoTel == true) {
        alert("Enviado com sucesso!")
          }  else {
        alert("Valide o preenchimento dos campos.")
          }
    }   