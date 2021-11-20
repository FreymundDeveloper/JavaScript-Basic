$(function () {
    $('#ocultar').click(function () { 
        $('h1')
            .fadeOut('slow')
            .delay(1000)
            .fadeIn(5000);
        
    });

    $('#cor').click(function () { 
        $('p').css("color", "blue");
        $('#mensagem')
            .text("Cor alterada")
            .css({color:'green', border: '1px solid red', backgroundColor: 'blue'})
            .delay(2000).fadeOut('fast');
    });
    
});