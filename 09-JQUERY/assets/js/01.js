/*---------------------------------------------------------------

                   - La Disponibilité du DOM -


    A partir du moment ou mon DOM, c'est a dire l'ensemble
    de l'arborescence de ma page est complétement chargée,
    je peux commencer à utiliser jQuery.

    Je vais mettre l'ensemble de mon code dans une fonction,
    cette fonction sera appelé AUTOMATIQUEMENT par jQuery
    lorsque le DOM sera entièrement défini.

    3 façons de faire : 

---------------------------------------------------------------*/

//-- 1ère possibilité :
jQuery(document).ready(function() {
    
});

//-- 2ème possibilité :
$(document).ready(function() {
   
});

//-- 3ème possibilité :
$(function() {
    //-- Ici, le DOM est entièrement chargé, je peux procéder à 
    //-- mon code JS.
   alert("J'ai 20ans!");

   //-- En JS : 
   document.getElementById('TexteEnJQuery').innerHTML = "<strong>Mon Texte en JS</strong>";

    //-- En jQuery, les sélecteurs sont les même qu'en css :
    $('#TexteEnJQuery').html("Mon Texte en JQ !");


});

       