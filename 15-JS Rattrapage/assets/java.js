// chiffre : [1,2,3,...]
// string ["foizfej","foirjzfoiz","qpoidspize",...]
// objet : var toto ={"clé", "valeur"}
// object à plusieurs clés =  {"cle1" : "valeur",
//                             "cle2" : "valeur2",
//                             "cle3" : 40,
//                             "cle4" : [12,14,15],
//                             "cle5" : { "rue" :"nomDeLaRue",
//                                         "numero" : 40,
//                                         "ville" : "Ville" }}




// Outils de test JS : https://jsfiddle.net
// Verification du code : http://jslint.com

exercice : 
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
                            math     : 14,
                            physique : 9,
                            anglais  : 15.5
                        }
    },
    {
        nom       :   "ARAUJO",
        prenom    :   "Thiago",
        moyenne   :   {
                            francais : 10,
                            math     : 19,
                            physique : 16
                        }
    }
];

// ----------------resultat--------------

console.log(PremierTrimestre[1].nom);

// ----------------resultat--------------
var nouveauEleve = {
    nom     : "MACCALOWAY",
    prenom  : "Peter",
    moyenne : {
        francais : 10,
        math     : 12,
        physique : 16
    }
}
PremierTrimestre.push(nouveauEleve);

console.log(PremierTrimestre);

for (var i = 0; i < PremierTrimestre.length ; i++) {
    console.log(PremierTrimestre[i].prenom);
		
}

for (var i = 0; i < PremierTrimestre.length ; i++) {
    console.log(PremierTrimestre[i].moyenne.math);
}

var total = 0;

for (var i = 0; i < PremierTrimestre.length; i++) {
    total += PremierTrimestre[i].moyenne.math;
}
var moyenne = total / PremierTrimestre.length;
console.log(moyenne);

var moyenneGeneral = 0;
for(var i = 0; i < PremierTrimestre.length; i++){
    var moyenneEleve = 0;
    for(var elm in PremierTrimestre[i].moyenne){
        moyenneEleve += Number(PremierTrimestre[i].moyenne[elm]);
    }
moyenneGeneral += moyenneEleve / Object.keys(PremierTrimestre[i].moyenne).length;
}
moyenneGeneral / PremierTrimestre.length;