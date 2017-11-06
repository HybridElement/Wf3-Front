/*-------------------------------------------------------

                    LES FONCTIONS

-------------------------------------------------------*/

// -- Déclarer une fonction
// -- Cette fonction ne retourne aucune valeur

function ditBonjour() {
    //-- Lors de l'appel de cette fonction, les instructions
    //-- ci-dessous seront exécutées...
    alert("Bonjour !");
}

//-- Je vais appeler ma fonction "ditBonjour" et déclencher
//-- ses instructions.

ditBonjour();

//-- Déclarer une fonction qui prends une variable en paramètre
function Bonjour(Prenom, Nom) {
    document.write("<p>Hello <strong> " + Prenom + "  " + Nom + "</strong>!</p>");
}

//-- Appeler / utiliser une fonction avec des paramètres
Bonjour("Florent","BANCE");

var MonPrenom = "Nathan";
var MonNom ="HEGO";

Bonjour(MonPrenom,MonNom);

/*--------------------------
Exercice : 
Créez une fonction permettant d'effectuer l'addition de deux nombre passés en paramètre.
--------------------------*/

// function Calcul(nb1, nb2) {
//     document.write("Le resultat est : " + resultat );
// }

// var nb,nb, resultat;

// nb1 = 10;
// nb2 = 5;
// resultat = nb1+nb2;

// Calcul();

/*--------- Correction -------*/

function Addition(nb1,nb2){
    return nb1 + nb2;
}
document.write("<p> " + Addition(10, 5) + "</p>");