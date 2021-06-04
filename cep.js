$(document).ready(function() {
    $("#cep").blur(function(){
    
        // Remove tudo o que não é número para fazer a pesquisa
    
        var cep = this.value.replace(/[^0-9]/, "");
        console.log(cep)
        
        // Validação do CEP; caso o CEP não possua 8 números, então cancela
        // a consulta

        if(cep.length != 8){
            return false;
        }
        
        var url = "https://viacep.com.br/ws/"+cep+"/json/";
        
        $.getJSON(url, function(dadosRetorno){
            try{
                // Preenche os campos de acordo com o retorno da pesquisa
                $("#endereco").val(dadosRetorno.logradouro);
                $("#bairro").val(dadosRetorno.bairro);
                $("#cidade").val(dadosRetorno.localidade);
                $("#uf").val(dadosRetorno.uf);
            }catch(ex){}
        });
    })();
});