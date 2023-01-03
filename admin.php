<?php
include("conexion.php");


$nombre = $_POST["nombre1"];
$precio = $_POST["precio1"];
$cantidad = $_POST["cantidad1"];



//crear tabla BBDD
if(isset($_POST["procesar-compra"])){

    $sqlgrabar= "INSERT INTO pedido(nombre, precio, cantidad) VALUES('{$nombre}','{$precio}','{$cantidad}')";
    
if(mysqli_query($conn, $sqlgrabar))
    {echo "<script> alert('pedido registrado con exito')</script>";
}else{
   echo "Error ".$sql."<br>".mysql_error($conn);
}
}

?>