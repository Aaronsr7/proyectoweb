<?php

include("conexion.php");

$email= $_POST["inputEmail"];
$pass= $_POST["inputPassword"];


//LOGIN


if(isset($_POST["btningresar"])){
    $query = mysqli_query($conn,"SELECT * FROM login WHERE email = '$email' and contraseña = '$pass'");
    $nr = mysqli_num_rows($query);
    
    if($nr == 1)
    {echo "<script> alert('Bienvenido $email'); window.location='carrotarjeta.html'</script>";
}else{
    echo "<script> alert('El usuario o la contraseña son incorrectos'); window.location='index.php'</script>";
}
}

?>
