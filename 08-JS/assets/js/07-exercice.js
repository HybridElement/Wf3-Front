/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

// var Prenom = prompt("Quel est votre Prénom?");
// var naissance = new Date();
// var age = prompt("Bonjour " + Prenom + ", quel age as-tu?");
// document.write("ah tu as " + age + "ans; tu es donc nez en " + ( naissance.getFullYear - age ));


//-----------Correction-------//

// 1 - Initialisation des Variables
var DateObj = new Date();
var AnneeActuelle = DateObj.getFullYear();

// 2 - Création de ma fonction
function Hello() {

    //  2a - Je demande à l'utilisateur son prénom
    let prenom = prompt("Hey! Comment tu t'intitule?",
                        "<Saisir votre prénom>");
    console.log(prenom);
    console.log(typeof prenom);

    //  2b - Je lui demande son age
    let age = parseInt (prompt("Hello " + prenom + " ! Combien t'as de printemps ?" , 
    "<Saisir votre Age>"));
    console.log(prenom);
    console.log(typeof age);

    //  2c - J'affiche une alert avec son année de naissance
    alert("WHouuua ! Dingue tu es né en " + (AnneeActuelle - age) + "!");

    //  2d - Affichage dans ma page HTML
    document.write("Hey! "+ prenom + " Tu as "+ age +" ans!" );
}
// 3 - Execution de ma fonction
Hello();