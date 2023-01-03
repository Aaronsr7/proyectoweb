<?php 

    // Iniciamos la sesion
    session_start();

    // Borramos la sesion
    session_unset();

    // Destruimos la sesion
    session_destroy();

    // Redirección
    header('Location: index.php');

?>
