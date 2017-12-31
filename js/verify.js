$(document).ready(function() {

    var content = $('#borde');
    var primary =$('#primary');

    primary.on('click',function(){
        content.val('');
    })
    content.on('keyup',function(){
    if(content.val().length == 3){
        $('#veryfi-btn').attr('disabled',false);
        $('#veryfi-btn').addClass('purple-next');
        
    }else  {
        $('#veryfi-btn').attr('disabled',true);
    } 

 
});
});