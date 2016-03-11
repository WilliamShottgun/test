<?php

$valor_decodificado = json_decode(file_get_contents('php://input'), true);
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'qwe12qwe';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}

$sql = 'INSERT INTO usuario (primer_nombreUsuario, segundo_nombreUsuario, primer_apellidoUsuario, segundo_apellidoUsuario, rutUsuario, correoUsuario, passwordUsuario, tipo_usuario_idTipo_usuario) VALUES (\'' . $valor_decodificado['data']['primer_nombreUsuario'] . '\', \'' . $valor_decodificado['data']['segundo_nombreUsuario'] . '\', \'' . $valor_decodificado['data']['primer_apellidoUsuario'] . '\', \'' . $valor_decodificado['data']['segundo_apellidoUsuario'] . '\', \'' . $valor_decodificado['data']['rutUsuario'] . '\', \'' . $valor_decodificado['data']['correoUsuario'] . '\', \'' . $valor_decodificado['data']['passwordUsuario'] . '\', \'' . $valor_decodificado['data']['tipo_usuario_idTipo_usuario'] . '\');';

mysql_select_db('clientedb');

// Al enviar la consulta más la conexión obtenemos, a través de la función mysql_query, un listado de usuario
$retval = mysql_query($sql, $conn);
if (!$retval) {
    die('Could not get data: ' . mysql_error());
}
echo 'exito';
mysql_close($conn);

