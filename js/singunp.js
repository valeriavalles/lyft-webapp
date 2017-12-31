

$(document).ready(function() {
   /*habilitando/desabilitando el boton */
    var content = $('#number');
    var expresion = /^[0-9]+$/;
    var numero = 0;
     numero = Math.floor(Math.random()*100 + 100);

    $('#number').on('keyup',function(){

        if(content.val().length == 10){
            $('#area').attr('disabled',false);
            $('#area').addClass('purple-next');
            
        }else  {
            $('#area').attr('disabled',true);
        }  
    })
    /* Generando numeros aleatorios */

   /* $('#area').on('click',function(){
        $(this).addclass('');
    }) */

    var boton = document.getElementById('area');
    boton.addEventListener('click',numeroGenerado );
    function numeroGenerado(){
    var numero = 0;
    numero = Math.floor(Math.random()*100)+100;
    var codigo = "Tu código: Lab-"+ numero;
    alert(codigo);
    }

});

