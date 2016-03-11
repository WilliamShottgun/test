<?php

session_start();

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'qwe12qwe';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}

$sql = 'SELECT * FROM usuario WHERE correoUsuario=\'' . $_POST['correoUsuario'] . '\' AND passwordUsuario=\'' . $_POST['passwordUsuario'] . '\' ORDER BY idUsuario DESC';

mysql_select_db('clientedb');

// Al enviar la consulta más la conexión obtenemos, a través de la función mysql_query, un listado de usuario
$retval = mysql_query($sql, $conn);
// Recorro fila a fila obtenida desde la base de datos 
$cont = 0;
while ($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
    $cont++;
}
if ($cont > 0) {
    $_SESSION["conectado"] = true;
    header("Location: /proyecto/sistema.html");
    die();
} else {
    $_SESSION["conectado"] = false;
    header("Location: /proyecto");
    die();
}
mysql_close($conn);
