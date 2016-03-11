<?php

$valor_decodificado = json_decode(file_get_contents('php://input'), true);
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'qwe12qwe';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}

$sql = 'UPDATE usuario SET primer_nombreUsuario = \'' . $valor_decodificado['data']['primer_nombreUsuario'] . '\', segundo_nombreUsuario = \'' . $valor_decodificado['data']['segundo_nombreUsuario'] . '\', primer_apellidoUsuario = \'' . $valor_decodificado['data']['primer_apellidoUsuario'] . '\', segundo_apellidoUsuario = \'' . $valor_decodificado['data']['segundo_apellidoUsuario'] . '\', rutUsuario = \'' . $valor_decodificado['data']['rutUsuario'] . '\', correoUsuario = \'' . $valor_decodificado['data']['correoUsuario'] . '\', passwordUsuario = \'' . $valor_decodificado['data']['passwordUsuario'] . '\', tipo_usuario_idTipo_usuario = \'' . $valor_decodificado['data']['tipo_usuario_idTipo_usuario'] . '\' WHERE idUsuario = ' . $valor_decodificado['data']['idUsuario'] . ';';

mysql_select_db('clientedb');

// Al enviar la consulta más la conexión obtenemos, a través de la función mysql_query, un listado de usuario
$retval = mysql_query($sql, $conn);
if (!$retval) {
    die('Could not get data: ' . mysql_error());
}
echo 'exito';
mysql_close($conn);

