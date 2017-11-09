/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// 1-- Je dois créer un tableau PremierTrismetre avec 3dimensions. Les étudiants, les matières et les notes.


// PremierTrimestre = new Array(5);
// PremierTrimestre[0] = new Array(5);
// PremierTrimestre[1] = new Array(5);
// PremierTrimestre[2] = new Array(5);
// PremierTrimestre[3] = new Array(5);
// PremierTrimestre[4] = new Array(5);
// PremierTrimestre[0][0]="Etudiant";         PremierTrimestre[0][1]="Hugo";     PremierTrimestre[0][2]="Nathan";   PremierTrimestre[0][3]="Florent";  PremierTrimestre[0][4]="Rodolphe";   PremierTrimestre[0][5]="JM";
// PremierTrimestre[1][0]="Français";         PremierTrimestre[1][1]="12";       PremierTrimestre[1][2]="17";       PremierTrimestre[1][3]="19";       PremierTrimestre[1][4]="6";          PremierTrimestre[1][5]="16";
// PremierTrimestre[2][0]="Mathématiques";    PremierTrimestre[2][1]="19";       PremierTrimestre[2][2]="4";        PremierTrimestre[2][3]="2";        PremierTrimestre[2][4]="7";          PremierTrimestre[2][5]="14";
// PremierTrimestre[3][0]="Physique";         PremierTrimestre[3][1]="4";        PremierTrimestre[3][2]="11";       PremierTrimestre[3][3]="15";       PremierTrimestre[3][4]="2";          PremierTrimestre[3][5]="17";   
// PremierTrimestre[4][0]="Moyenne" ;         PremierTrimestre[4][1]=moyenne();  PremierTrimestre[4][2]=moyenne();  PremierTrimestre[4][3]=moyenne();  PremierTrimestre[4][4]=moyenne();    PremierTrimestre[4][5]=moyenne();

// function moyenne(PremierTrimestre)
// {       for(var indice in PremierTrimestre)
//         var n = PremierTrimestre.length;   // nombre de valeurs
//         var somme = 0;
//         for(i=0; i<n; i++)
//                 somme += tableau[i];
//         return somme/n;   // somme divisee par le nombre de valeurs
// }

// console.log(PremierTrimestre);
// document.write(PremierTrimestre);

// var arrayLignes = document.getElementById("monTableau").rows; //on récupère les lignes du tableau
// var longueur = arrayLignes.length;//on peut donc appliquer la propriété length


// for(var i=0; i<longueur; i++)//on peut directement définir la variable i dans la boucle
// {
// 	var arrayColonnes = arrayLignes[i].cells;//on récupère les cellules de la ligne
// 	var largeur = arrayColonnes.length;

// 	for(var j=0; j<largeur; j++)
// 	{
// 		if(j % 2 == 0)//si la clé est paire
// 		{
// 			arrayColonnes[j].style.backgroundColor = "#bdcbf5";
// 		}
// 		else //elle est impaire
// 		{
// 			arrayColonnes[j].style.backgroundColor = "#829eeb";
// 		}
// 	}
// }
// document.write(PremierTrimestre.join());


var PremierTrimestre = [
    {
        nom       :   "LIEGEARD",
        prenom    :   "Hugo",
        moyenne   :   {
                            francais : 4,
                            math     : 8,
                            physique : 18
                        }
    },
    {
        nom       :   "MANAS",
        prenom    :   "Tanguy",
        moyenne   :   {
                            francais : 6,
                            math     : 15,
                            physique : 9,
                            anglais  : 15.5
                        }
    },
    {
        nom       :   "ARAUJO",
        prenom    :   "Thiago",
        moyenne   :   {
                            francais : 10,
                            math     : 15,
                            physique : 16
                        }
    },
    {
        nom       :   "BOSS",
        prenom    :   "Hugo",
        moyenne   :   {
                            francais : 12,
                            sport    : 6,
                            physique : 11
                        }
    },
    {
        nom       :   "HEGO",
        prenom    :   "Nathan",
        moyenne   :   {
                            francais : 19,
                            math     : 7,
                            anglais  : 15
                        }
    }
];

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for...in

// -- Petite fonction de raccourcis (lesFlemards.js)

function w(t) {
    document.write(t);
}

function l(e) {
    console.log(e);
}


l(PremierTrimestre);


w('<ol>');
//-- Je souhaite afficher la liste de mes étudiants
for(let i=0; i < PremierTrimestre.length; i++) {

    //-- On récupère l'Objet Etudiant de l'itération
    let Etudiant = PremierTrimestre[i];

    //-- Apercu dans la console
    l(Etudiant);

    var NombreDeMatiere = 0, SommeDesNotes = 0;

    w('<li>');
    //-- Afficher le prénom et le nom d'un Etudiant
        w(Etudiant.prenom + " " + Etudiant.nom);

        w('<ul>');
            for(let matiere in Etudiant.moyenne){
                l(matiere);
                //-- On récupère la moyenne de l'étudiant pour une matière.
                l(Etudiant.moyenne[matiere]);

                NombreDeMatiere++;
                SommeDesNotes += Etudiant.moyenne[matiere];

                w('<li>');
                    w(matiere + " : " + Etudiant.moyenne[matiere]);

                w('</li>');
        } //-- Fin de la boucle matière
        
            w('<li>');
                w("<strong>Moyenne Générale : </strong>" + (SommeDesNotes / NombreDeMatiere).toFixed(2) );
            w('</li>');

        w('</ul>');

    w('</li>');



}
w('</ol>');