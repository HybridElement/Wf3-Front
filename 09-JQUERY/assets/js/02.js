/*---------------------------------------------------------------

                   - LES SELECTEUR JQUERY

---------------------------------------------------------------*/

//-- Format : $('selecteur')
//-- En jQuery, tous les selecteurs CSS sont disponibles...

$(function() {
    //--DOM REDAY !
    //--LesFlemards.js
    function l(e) {
        console.log(e);
    }

    //-- Selectionner les balises SPAN : 

        //-- Version Javascript : 
        l(document.getElementsByTagName('span'));

        //-- Version jQuery
        l($('span'));

    //-- Selctionner le menu :

        //-- Version Javascript : 
        l(document.getElementById('menu'));

        //-- Version jQuery :
        l($('menu'));

    //-- Selectionner une Classe :

        //-- Version Javascript : 
        l(document.getElementsByClassName('MaClasse'));
        
        //-- Version jQuery :
        l($('.MaClasse'));

//-- Selectionner un Attribut :
        
        //-- Version jQuery :
        l($('[href="https://www.google.fr"]'));

});