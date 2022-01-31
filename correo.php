<?php

$destino = "franklin12fernandez@gmail.com";

$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$header = "FORMULARIO DE CONTACTO";
$mensajeCompleto = "\n Nombres: ".$nombres."\n"."Apellidos: ".$apellidos."\n Email: ".$email."\n Telefono: ".$telefono."\n Mensaje: ".$mensaje;
mail("franklin12fernandez@gmail.com","contacto",$mensajeCompleto);
header('Location:index.html');
?>