/*---------------------------------------------------------------

             - LE CHAINAGE DE METHODE AVEC JQUERY-

---------------------------------------------------------------*/


$(function(){

    //-- Je souhaite cacher toutes les div
    // console.log($('div'));

    $('div').hide('slow', function(){
        //--une fois que la méthode hide() est erminée, mon alerte peut s'exécuter.
        alert('Fin du Hide');


    //-- NOTA BENE : La focntion s'executera pour l'ensemble des éléments du selecteur.

    //-- CSS
    $('div').css('background','yellow');
    $('div').css('color','red');
    

    //-- Je fais réapparaitre mes divs
    $('div').show('slow');

    }); //-- Fin fonction anonyme

    //-- En utilisant le chainage de méthode, vous pouvez faire 
    //-- s'enchainer plusieurs fonctions les unes après les autres...
    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    //-- MAIS C'EST ENCORE TROP LONG
    $('p').hide(1000).css({color : 'green', 'font-size' : '20px'}).delay(2000).show(500); 

});