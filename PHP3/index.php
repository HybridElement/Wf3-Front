<?php
$valeur = rand( -1000, 1000);
echo("<p>La valeur test est : $valeur</p>");

if ($valeur < 0)
    $message = "La valeur est negative";

elseif ($valeur > 0) 
    $message = "La valeur est positive";

else 
    $message = "La valeur est nulle";

echo("<p>$message</p>");
?>

<?php
$valeur = rand();
echo("<p>La valeur test est $valeur</p>");

if ($valeur % 1)
    $message = "La valeur est un multiple de 1";

elseif ($valeur % 2) 
    $message = "La valeur est un multiple de 2";

elseif ($valeur % 3) 
$message = "La valeur est un multiple de 3";

elseif ($valeur % 4) 
$message = "La valeur est un multiple de 4";

elseif ($valeur % 5) 
$message = "La valeur est un multiple de 5";

elseif ($valeur % 6) 
$message = "La valeur est un multiple de 6";

elseif ($valeur % 7) 
$message = "La valeur est un multiple de 7";

elseif ($valeur % 8) 
$message = "La valeur est un multiple de 8";

else
$message = "La valeur est un multiple de 9";

echo("<p>$message</p>");
?>

<?php
$valeur = rand();
$message ="<h1>$valeur</h1>";

for ($i = 1 ; $i <= 10 ; $i++) {
    if ($valeur % $i == 0)
        $message .= "<p>$valeur est un multiple de $i</p>";
}
echo ($message);
?>