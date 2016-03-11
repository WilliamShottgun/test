<?php

$valor_decodificado = json_decode(file_get_contents('php://input'), true);
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'qwe12qwe';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$conn) {
    die('Could not connect: ' . mysql_error());
}

$sql = 'UPDATE producto SET nombreProducto = \'' . $valor_decodificado['data']['nombreProducto'] . '\', stockProducto = \'' . $valor_decodificado['data']['stockProducto'] . '\', precioProducto = \'' . $valor_decodificado['data']['precioProducto'] . '\', tipo_producto_idTipo_producto = \'' . $valor_decodificado['data']['tipo_producto_idTipo_producto'] . '\' WHERE idProducto = ' . $valor_decodificado['data']['idProducto'] . ';';

mysql_select_db('clientedb');

// Al enviar la consulta más la conexión obtenemos, a través de la función mysql_query, un listado de producto
$retval = mysql_query($sql, $conn);
if (!$retval) {
    die('Could not get data: ' . mysql_error());
}
echo 'exito';
mysql_close($conn);

