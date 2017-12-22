<?php
$resultat = "<ul>";
for($i = 0 ; $i <= 100 ; $i++) {
    $resultat .= "<li>" . $i . "</li>";
}
$resultat .= "</ul>";

echo($resultat);
?>

<?php
$resultat = "<ul>";
for($i = 2 ; $i <= 128 ; $i += 2) {
    if ($i % 5 == 0) {
        $resultat .= "<li>" . $i . "</li>";
    }
}
$resultat .= "</ul>";

echo($resultat);
?>

<?php
$resultat = "<ul>";

for($i = 0 ; $i <= 128 ; $i += 2) {
    if ($i % 5 == 0) {
        $resultat .= "<li>" . $i;
        $resultat .= "<ul>";
        for ($j = 0 ; $j <= 10 ; $j++){
            if ($j % 3 == 0) {
                $resultat .= "<li>" . $j . "</li>";
            }
        
        }
        $resultat .= "</ul>";
        $resultat .= "</li>";
    }
}
$resultat .= "</ul>";

echo($resultat);
?>