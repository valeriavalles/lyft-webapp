$(document).ready(function() {

    var content = $('#borde');
    var primary =$('#primary');

    // Reseteo del boton resend
    primary.on('click',function(){
        content.val('');
    })
    content.on('keyup',function(){
     // habilitando y debilitando el boton next   
    if(content.val().length == 3){
        $('#veryfi-btn').attr('disabled',false);
        $('#veryfi-btn').addClass('purple-next');
        
    }else  {
        $('#veryfi-btn').attr('disabled',true);
    } 

 
});
});