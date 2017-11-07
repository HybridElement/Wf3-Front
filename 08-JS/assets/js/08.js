/*-------------------------------------------------------

                    LES CONDITIONS

-------------------------------------------------------*/

// var MajoriteLegaleFR = 18;

// if(18 >= MajoriteLegaleFR){
//     alert("Bienvenue !");
// } else {
//     alert("Google...");
// }


/*------------------------------------------------------

                    EXERCICE
        Créer une fonction permettant de vérifier 
        l'age d'un visiteur (prompt).
        S'il a la majorité légale, alors je lui
        souhaite la bienvenue, sinon, je fait une 
        redirection sur Google après avoir signalé
        le soucis.

-------------------------------------------------------*/

// var MajoriteLegaleFR = 18;
// let age = parseInt (prompt("Hello ! Combien t'as de printemps ?" , 
// "<Saisir votre Age>"));

// if(age >= MajoriteLegaleFR){
//     alert("Bienvenue !");
// } else {
//     alert("RTS (Range ton sexe)")
//     document.location.href="https://www.google.fr";
// }


//------------------ Correction -----------------//

// 1 - Déclarer la Majorité Légale
    var MajoriteLegaleFR = 18;

// 2 - Créer une fonction pour demander son age
    function verifierAge() {

//-----METHODE 1 -------//
        // let age = prompt("Bonjour, Quel age avez-vous?", "<Saisissez votre age>")
        // age = parseInt(age);
        // return age;

//-----METHODE 2 -------//
        return parseInt(prompt("Bonjour, Quel age avez-vous?", "<Saisissez votre age>"));
    }


// 3 - Une condition pour vérifier si l'age de l'utilisateur est supérieur à la MajoriteLegaleFR.
        if(verifierAge() >= MajoriteLegaleFR) {
   
    // 3a - J'affiche un message de bienvenue
    alert("Bienvenue sur mon site internet pour les majeurs...")
} else {
    // 3b - J'effectue une redirection
    document.location.href="https://www.google.fr";
}




/*------------------------------------------------------------------------------------

                    LES OPERATEURS DE COMPARAISON

        L'opérateur de comparaison "==" signifie : Egal à.
        Il permet de vérifier que 2 variables sont identiques.

        L'opérateur de comparaison "===" signifie : Strictrement Egale à ...
        Il va comparer la valeur et le type de donnée.

        L'opérateur de comparaison "!=" signifie : Différent de
        L'opérateur de comparaison "!==" signifie : Strictement Différent de.


-------------------------------------------------------------------------------------*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

//---------Correction ------//

// if( email == "wf3@hl-media.fr"  &&  pass == "wf3" )

// {
//     alert('login accepter');
// }else{
//     alert('login echec');
// }

// 1 - Demander l'email utilisateur
var emailUser = prompt("Bonjour, quel est votre email?",
                        "<Saisissez votre email>");

// 2 - Je vérifie si l'email saisit (emailUser) correspond à celui de la BDD
if(emailUser === email){
    // 2a - Tout est ok, je continu la vérification avec le mot de passe.
        // 2a1 - je demande à l'utilisateur son mdp
        var mdpUser = prompt("Bonjour, quel est votre mot de passe?",
        "<Saisissez votre mot de passe>");
        if(mdpUser === mdp){
            alert("Bienvenue !");
        } else {
            alert("Attention, ce n'est pas le bon mot de passe");
        }
} else {


    // 2b - Sinon, les emails ne correspondent pas, je lance une alerte.
    alert("Attention, nous n'avons pas reconnu votre adresse email");
}

//-- EXEMPLE AVEC LES FONCTIONS

/** */

function  monUtilisateurEstCorrect(emailUser,mdpUser){
    if(emailuser ===email && mdpUser ===mdp) {
        return true;
    }
    else {
        return false;
    }
}

var emailUser = prompt("Bonjour, quel est votre email?",
"<Saisissez votre email>");

var mdpUser = prompt("Bonjour, quel est votre mot de passe?",
"<Saisissez votre mot de passe>");

if(monUtilisateurEstCorrect (emailUser, mdpUser)){
    alert("Bienvenue" + emailUser);
} else {
    alert("ATTENTION, email/mot de passe incorrect");
}


/*---------------------------------------------------------------------------------------------

                                LES OPERATEURS LOGIQUES

        L'opérateur ET : && ou AND
        Si la combinaise emailUser et email correspond ET la combinaison mdpUser
        et mot de passe correspond.

        Dans cette condition, les 2 doivent OBLIGATOIREMENT correspondre pour être validée.

---------------------------------------------------------------------------------------------*/
        if(emailUser === email && mdpUser === mdp) { . . . }
/*---------------------------------------------------------------------------------------------

        L'opérateur OU : || ou OR
        Si la combinaise emailUser et email correspond ET la combinaison mdpUser
        et mot de passe correspond.

        Ici, dans cette condition, Au moins l'une des deux doit correspondre pour 
        être validée.

---------------------------------------------------------------------------------------------*/
        if(emailUser === email || mdpUser === mdp) { . . . }

/*---------------------------------------------------------------------------------------------

        L'opérateur ! : qui signifie le CONTRAIRE DE... ou encore NOT

---------------------------------------------------------------------------------------------*/
        var monUtilisateurEstApprouve = true;
        if(!monUtilisateurEstApprouve){ . . . } //- Si mon utilisateur n'est pas approuvé
        
        //-- Reviens également à écrire
        if(monUtilisateurEstApprouve == false){ . . . }