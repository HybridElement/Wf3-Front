/*---------------------------------------------------------------

             - LES SELECTEUR D'ENFANTS JQUERY

---------------------------------------------------------------*/


$(function() {
    //--DOM REDAY !
    //--LesFlemards.js
    function l(e) {
        console.log(e);
    }

        //-- Je souhaite sélectionner toutes mes divs
        l($('div'))

        //-- Je souhaite sélectionner mon menu
        l($('nav'))

        //-- Je souhaite sélectionner tous les éléments descendants direct
        //--(enfants) qui sont dans le menu.
        l($('nav').children())

        //-- Je souhaite parmis ces enfants, uniquement les éléments <ul>
        l($('nav').children('ul'))

        //-- Je souhaite récupérer tout les éléments <li> de mon <ul>
        l($('nav').children('ul').find('li'))

        //-- Je souhaite récupérer uniquement le 2ème élément de mes <li>
        l($('nav').children('ul').find('li').eq(1))

         //-- Je souhaite connaitre le voisin immediat de mon menu
        l($('nav').next())
        l($('nav').next().next()) //-- Le voisin du voisin
        l($('nav').prev()) //-- Le voisin d'avant

        //-- Les parents
        l($('nav').parent())
        

});