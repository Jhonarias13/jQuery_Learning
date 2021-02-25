// jQuery(document).ready(function() {

// });
// funcion para que se ejecute jQuery

$(function() {
    'use strict';

    $('.navegacion ul li a').on('click', function(e) {
        e.preventDefault();
        $(this).text('click');
    });

    //animate, animaciones con jQuery
    $('main article img').on({
        mouseenter: function() {
            $(this).animate({ 'width': '100%' });
        },
        mouseleave: function() {
            $(this).animate({ 'width': '200px' });
        }
    }, );



    //refactorizacion para selectores mas complejos
    // $('main').on({
    //     click: function() {
    //         $(this).addClass('fondorojo activo');
    //     },
    //     mouseenter: function() {
    //         $(this).addClass('fondorojo');
    //     },
    //     mouseleave: function() {
    //         $(this).addClass('activo');
    //     }
    // });

    //agregando clases
    // $('div.logo img').addClass('activo');
    // $('#navegacion').show();
    // $('main article:first').addClass('activo');
    // $('main article:last').addClass('activo');

    // $('.navegacion ul li a').on('click', function(e) {
    //     $('.navegacion ul li a').removeClass('activo');
    //     e.preventDefault();
    //     $(this).addClass('activo');
    // });


    // $('#menu').on({
    //     click: function() {
    //         console.log('click');

    //     },
    //     mouseenter: function() {
    //         console.log('mouseeter');

    //     },
    //     mouseleave: function() {
    //         console.log('mouseleave');

    //     }
    // });

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