<?php

// Nastavení zóny
mb_internal_encoding("UTF-8");
date_default_timezone_set("Europe/Prague");

// Simple autoloader
function autoload($class)
{
    if (preg_match('/Controller$/', $class)) {
        require("Controllers/$class.php");
    }
}

spl_autoload_register("autoload");


// nastavení routeru
$router = new RouterController();
$router->process(array($_SERVER["REQUEST_URI"]));
$router->renderView();
