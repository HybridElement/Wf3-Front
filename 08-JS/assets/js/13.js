/*-------------------------------------------------------------

                LA MANIPULATION DES CONTENUS

-------------------------------------------------------------*/

function l(e){
    console.log(e);
}

//-- Je souhaite récupérer mon lien ; comment procéder ?
var google = document.getElementById('google');
l(google);

//-- Maintenant, je souhaite accéder aux informations de ce lien.
//-- Par rexemple ...

    //-- A : Le lien vers lequel pointe la balise :
    l('le lien vers lequel point la balise : ');
    l(google.href);

    //-- B : L'ID de la balise :
    l("l'ID de la balise : ");
    l(google.id);

    //-- C : Le Classe de la balise :
    l("la Classe de la balise :");
    l(google.className);

    //-- D : Le Texte de la Balise :
    l("Le Texte de la balise :");
    l(google.textContent);    

    //-- Maintenant, je souhaite modifier le contenu de la balise ! 
    //-- Comme une variable classique je vais simplement venir affecter
    //-- une nouvelle valeur.
    google.textContent="mon lien vers google";

/*-------------------------------------------------------------
                AJOUTER UN ELEMENT DANS MA PAGE
-------------------------------------------------------------*/

//-- Nous allons utiliser 2 méthodes : 

    //-- 1 : La fonction document.createElement() va permettre de 
    //--     générer un nouvel élement dans le DOM ; que je pourrais
    //--     par la suite modifier avec les méthodes que nous venons 
    //--     de voir.

    //-- PS : Ce nouvel élément est placé en mémoire.

    //-- Définition de l'élément
    var span = document.createElement('span');

    //-- Si je souhaite lui donner un ID
    span.id="MonSpan";

    //-- Si je souhaite lui attribuer du contenu...
    span.textContent = "Mon Beau Texte en JS !";

    //-- La fonction appendChild() va permettre de rejouter un enfant 
    //-- à un élément du DOM.
    google.appendChild(span);



/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> 
ayant comme contenu : "Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url
de votre choix.

BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */
// var h1 = document.createElement('h1');
// h1.id="titre";
// h1.textContent ="Titre de mon Article";
// google.appendChild(h1);
// h1.style.color="red";
// h1.style.textDecoration="none";

/* -------------------------------
           CORRECTION
-------------------------------- */
    //--Création de la balise h1
    var h1 = document.createElement('h1');

    //--Création de la balise a
    var a = document.createElement('a');

    //--je vais donner un titre à mon lien
    a.textContent = "Titre de mon Article";

    //--Je veux donner un lien à mon lien
    a.href="#";

    //--appenChild()

        //--Je met mon lien (a) dans mon h1
        h1.appendChild(a);

        //--Je met mon h1 dans ma page, dans mon body
        document.body.appendChild(h1);

    //-- Bonus

        //--Je veux que mon lien soit de couleur rouge : 
        a.style.color="red";

        //--Je veux que mon lien ne soit pas souligné : 
        a.style.textDecoration = "none";