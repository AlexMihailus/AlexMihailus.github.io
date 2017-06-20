$(document).ready(function () {

    var Button = $(".cal_button")
    var Display = $(".cal_display");
    var Equally = $(".cal_equally");
    var Clear = $(".cal_clear");
    var Sqrt = $(".cal_sqrt");
    var Backspace = $(".backspace");

   
    Button.on('click', function () {
        if (Display.val() == 'NaN' | Display.val() == 'Infinity') { Display.val('');}
       
        if (Display.val().length < 16) {
        Display.val(Display.val() + $(this).attr('value') );
     
        }

        
    });

    Clear.on('click', function () {
        Display.val('');
    });

    Equally.on('click', function () {
        if (Display.val() == 'NaN' | Display.val() == 'Infinity') { Display.val('');}
        Display.val( eval( Display.val() ) );
    });

     Sqrt.on('click', function () {
        Display.val( Math.sqrt( Display.val()) );
    });

    Backspace.on('click', function () {
        if (Display.val() == 'NaN' | Display.val() == 'Infinity') { Display.val('');}
        Display.val( Display.val().substring(0, Display.val().length-1) );
    });


});
