/*-------------------------------------------------------------

                        LES EVENEMENTS

        Les évenements vont me permettre de déclencher
    une fonction, c'est-à-dire : une série d'instructions :
    suite à une action de mon utilisateur.

    OBJECTIF : Être en mesure de capturer ces évènements,
    afin d'executer une fonction.

    Les Evenements : MOUSE (Souris)

        click       : au clic sur un élément
        mouseenter  : la souris passe au dessus de la zone 
                      qu'occupe un élément.
        mouseleave  : la souris sort de cette zone.

    Les Evenements : KEYBORD (Clavier)

        keydown     : une touche du clavier est enfoncée
        keyup       : une touche à été relachée


    Les Evenements : WINDOW (fenêtre)

        scroll      : défilement de la fenêtre
        resize      : redimensionnement de la fenêtre

    Les Evenements : FORM (Formulaire)

        change      : pour les éléments <input>, <select> 
                      et <textarea>
        submit      : à l'envoi(soumission) d'un formulaire

    Les Evenements : DOCUMENT

        DOMcontentloaded : Exécuté lorsque le document HTML
                           est complétement chargé, sans 
                           attendre le CSS et les images
        

-------------------------------------------------------------*/

/*-------------------------------------------------------------

                LES ECOUTEURS D'EVENEMENTS


        Pour attacher un événement à un élément, ou 
    autrement dit, pour déclarer un écouteur d'événement
    qui se chargera de lancer un action, c'est une fonction 
    pour un événement donné, je vais utiliser la synthaxe suivante:

    
-------------------------------------------------------------*/

var p = document.getElementById('MonParagraphe');
console.log(p);

//-- Je souhaite que mon paragraphe soit rouge au clic de la souris

    //-- 1 : Je défini une fonction chargé d'exécuter cette action
    function changeColorToRed() {
        p.style.color="red";
    }

    //-- 2 : Je déclare un écouteur qui se chargera d'appeler la fonction
    //-- au déclenchement de l'événement (click)
    p.addEventListener('click', changeColorToRed);