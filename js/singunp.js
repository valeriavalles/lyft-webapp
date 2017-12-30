

$(document).ready(function() {
   /*habilitando/desabilitando el boton */
    var area = $('#number');
    var expresion = /^[0-9]+$/;

    $('#number').on('keyup',function(){

        if(area.val().length == 10){
            $('#area').attr('disabled',false);  
        }else  {
            $('#area').attr('disabled',true); 
        }  
    })    
});
    