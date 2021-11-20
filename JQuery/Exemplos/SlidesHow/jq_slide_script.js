$(function(){
    $('#sA').click(function () { 
        $('#iA').show();
        $('#iB').hide();
        $('#iC').hide();
    });

    $('#sB').click(function () { 
        $('#iA').hide();
        $('#iB').show();
        $('#iC').hide();
    });

    $('#sC').click(function () { 
        $('#iA').hide();
        $('#iB').hide();
        $('#iC').show();
    });
});