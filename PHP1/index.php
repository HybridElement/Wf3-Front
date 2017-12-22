<?php
$titre = "<h1>Titre</h1>";
$message = "ceci est un message";
$prenom = "Florent";
$prenom .= "Bance"
//vaut ($prenom + Bance)
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP1</title>
</head>
<body>
<?php
// phpinfo();
// Comentaire
/*
Ceci est un commentaire sur plusieurs lignes
*/
$toto = "<h1>Coucou</h1>";
echo($toto);
echo($titre);
echo($message);
echo("<p>Bonjour " . $prenom . "</p>"); //Chiant
echo("<p>Bonjour \"$prenom\"</p>"); //classe
?>
    
</body>
</html>
