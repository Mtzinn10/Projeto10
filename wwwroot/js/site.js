$(document).ready(
     function(){
        $("#formCadastro").submit(function (e)
            {
                e.preventDefault();
                Cadastrar();
            }
        );
      }
     );
     function Cadastrar()
     {  
     var parametros = {
     Nome: $("#Idnome").val(),
     Email: $("#Idemail").val(),
     Mensagem: $("#Idmensagem").val(),
     };

     $.post("/Home/Cadastrar", parametros)

     .done(function(data)
     {
      if(data.status == "Tudo Certo")
      {
     $("#formCadastro").after("<h3>Cadastro enviado com sucesso!</h3>");
     $("#formCadastro").hide();
      }
      else{
     alert(data.mensagem);
       }
      }
     )
     };