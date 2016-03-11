<?php

$valor_decodificado = json_decode(file_get_contents('php://input'), true);
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'qwe12qwe';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}

$sql = 'INSERT INTO producto (nombreProducto, stockProducto, precioProducto, tipo_producto_idTipo_producto) VALUES (\'' . $valor_decodificado['data']['nombreProducto'] . '\', \'' . $valor_decodificado['data']['stockProducto'] . '\', \'' . $valor_decodificado['data']['precioProducto'] . '\', \'' . $valor_decodificado['data']['tipo_producto_idTipo_producto'] . '\');';

mysql_select_db('clientedb');

// Al enviar la consulta más la conexión obtenemos, a través de la función mysql_query, un listado de producto
$retval = mysql_query($sql, $conn);
if (!$retval) {
    die('Could not get data: ' . mysql_error());
}
echo 'exito';
mysql_close($conn);

