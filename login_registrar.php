<?php
include("conexion.php");


$nombre = $_POST["inputNombre"];
$apellidos = $_POST["inputApellidos"];
$email1 = $_POST["inputEmail1"];
$pass1 = $_POST["inputPassword1"];


//Registrar
if(isset($_POST["btnregistrar"])){

    $sqlgrabar= "INSERT INTO login(nombre, email, contraseña, apellidos) VALUES('{$nombre}','{$email1}','{$pass1}','{$apellidos}')";
    
if(mysqli_query($conn, $sqlgrabar))
    {echo "<script> alert('Usuario registrado con exito'); window.location='cart.html'</script>";
}else{
   echo "Error ".$sql."<br>".mysql_error($conn);
}
}

?>