<?php
function calculerSurface($longueur, $largeur) {
        if ($longueur > 0 && $largeur > 0){
        return $longueur * $largeur;
    }
    return false;
}

function calculer($longueur, $largeur, $hauteur) {
    if ($longueur > 0 && $largeur > 0 && $hauteur >0){
        return calculerSurface($longueur, $largeur) * $hauteur;}
        else 
            return false;
        }
        function calculerVolume($longueir)
}