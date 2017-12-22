<?php
include "functions.php";

$longueur = $_POST["longueur"];
$largeur = $_POST["largeur"];

$surface = calculerSurface($longueur, $largeur);

if ($surface) {
    echo("La surface est de " . $surface);
}

else {
    echo("Vérifie tes données...");
}
// $toto = "La longueur est de $longueur et la largeur est de $largeur.";

// echo($toto);