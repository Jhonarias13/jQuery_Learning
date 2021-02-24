// jQuery(document).ready(function() {

// });
// funcion para que se ejecute jQuery

$(function() {
    'use strict';

    //agregando clases
    $('div.logo img').addClass('activo');
    $('#navegacion').show();
    $('main article:first').addClass('activo');
    $('main article:last').addClass('activo');

    $('.navegacion ul li a').on('click', function(e) {
        $('.navegacion ul li a').removeClass('activo');
        e.preventDefault();
        $(this).addClass('activo');
    })


    // $('#menu').on('click', function() {
    //     $('#navegacion').show();
    // })

    /*
        $('div.logo img').on('mouseenter', function() {
            console.log('sobre el logo');
        });
        $('div.logo img').on('mouseleave', function() {
            console.log('afuera del logo');
        });
    */
    /*
        $('div.logo img').on('click', function() {
            $(this).remove();
        });

    */
    /*
        $('div.logo img').on('click', function() {
            console.log('has hecho click en el logo');
        });
        */
    /*
        $('main article:first').hide();

        var copia = $('main article:last').clone();
        //copia clona el final
        // $('main').append(copia);
        //copia el comienzo
        // $('main').prepend(copia);
        //pega al comienzo
        // $(copia).prependTo('main');
        //copia el final
        // $(copia).appendTo('main');


    */
});