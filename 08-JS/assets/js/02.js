// -- Déclarer un Tableau Numérique
var monTableau = [];
var myArray    = new Array;

// -- Affecter des valeurs à un tableau numérique
monTableau[0] = "Hugo";
monTableau[1] = "Nathan";
monTableau[2] = "Lou";

// -- Afficher le contenu de mon tableau dans la console.
console.log(monTableau[0]); //--Hugo
console.log(monTableau[1]); //--Nathan
console.log(monTableau); //--Afficher toutes les données.

// -- Déclarer et Affecter des valeurs à un tableau nuémrique
var NosPrenoms = ["Emilie","Hocine","Terry","Benjamin","Hugo"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// -- Déclarer et Affecter des Valeurs à un Objet.
// : (Pas de Tableau associatif en JS)

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 27
};

console.log(Coordonnee);
console.log(typeof Coordonnee);

// -- Je vais créer 2 tableaux numériques
var listeDePrenoms = ["Hugo","Rodrigue","Benjamin"];
var listeDeNoms    = ["LIEGEARD","NOUEL","JOURAND"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes
// -- 2 tableaux précèdents.

var Annuaire = [listeDePrenoms, listeDeNoms];
console.log(Annuaire);

// -- Afficher sur ma page le Nom et Prénom de Rodrigue.
document.write(Annuaire[0][1]);
document.write("  ");
document.write(Annuaire[1][1]);



/*--------------------------------------------------------

                        EXERCICES
    ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~ 

        Créez un Tableau à 2 dimensions appelé
        "AnnuaireDesStagiaires" qui contiendra
        toutes les coordonnées pour chaque stagiaire.

        Ex.: Nom, Prénom, Tél

---------------------------------------------------------*/

// var numTel =[+33656921450, +33651255788, +33621843975]

// var AnnuaireDesStagiaires =[Annuaire,numTel]

// console.log(AnnuaireDesStagiaires);
// document.write(AnnuaireDesStagiaires);

// ----------- Correction ---------- 
var AnnuaireDesStagiaires = [
    {prenom: "Hugo", nom:"LIEGEARD", tel: "0783 97 15 15"},
    {prenom: "Benjamin", nom:"JOURAND", tel: "0XXX XX XX XX"},
    {prenom: "Hocine", nom:"ALILI", tel: "0XXX XX XX XX"},
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[0]["prenom"]);
console.log(AnnuaireDesStagiaires[1].prenom);
console.log(AnnuaireDesStagiaires[2].prenom);


/*-------------------------------------------------------

                   AJOUTER UN ELEMENTS

-------------------------------------------------------*/

var Couleurs = ["Rouge", "Jaune", "Vert" ];
// -- Si je souhaite ajouter un élément dans mon tableau
//-- Je fais appel à la fonction push() qui me renvoi le nombre d'éléments de mon tableau.
console.log(Couleurs);
var nombreElementDeMonTableau = Couleurs.push("Orange");
console.log(Couleurs);
console.log(nombreElementDeMonTableau);

// -- NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments en début de tableau.


/*-------------------------------------------------------

        RECUPERER ET SORTIR LE DERNIER ELEMENT

-------------------------------------------------------*/

//-- La fonction pop() me permet de supprimer la dernier element de mon tableau et d'en récupérer la valeur

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);

//-- La même chose est possible avec le premier élément en utilisant la fonction shift()

//-- NB : La fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.