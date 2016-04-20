(function ( $ ) 
{

    $.fn.imgZoom = function( options ) 
    {             
        var settings = $.extend({
            escalaX :               1.4,
            escalaY:                1.4,
            rotacion:               '25deg',
            velAnimacionEntrada:    '1.4s',
            velAnimacionSalida:     '.5s',
            linAnimacion:           'ease-in'
        }, options );            
        
        //Inicializar cada uno de los elementos 
        this.each(function () 
        {            
            $(this).css('border', '1px solid green');
        });                         
            
        this.hover(function(event)
        {
            console.log('Initi');
            console.log(event['type']);

            $(this).css({                
                'transition' : 'all ' + settings.velAnimacionEntrada + ' ' +settings['linAnimacion'],
                'transform' : 'rotateY( ' + settings.rotacion + ') scale(' + settings['escalaX'] +  ', ' +settings['escalaY'] + ' )'
            });

            /*$(this).css({
                'transition' : 'all 1s ease-in',
                'transform' : 'rotateY(-45deg)'
            });*/
        });
            
        this.mouseleave(function()
        {
            $(this).css({
                'transition' : 'all ' + settings.velAnimacionSalida + ' ' + settings['linAnimacion'],
                'transform' : 'rotateY( ' + settings.rotacion + ') scale(' + settings['escalaX'] + ', ' + settings['escalaY'] + ' )' 
            });
        });                   
        
        return this;                                  
    }  
    
}( jQuery ));
