<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'qwe12qwe';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(!$conn){
  die('Could not connect: ' . mysql_error());
}

$sql = 'SELECT * FROM tipo_usuario ORDER BY idTipo_usuario DESC';

mysql_select_db('clientedb');

// Al enviar la consulta más la conexión obtenemos, a través de la función mysql_query, un listado de tipo_usuario
$retval = mysql_query($sql,$conn);
if(!$retval){
  die('Could not get data: ' . mysql_error());
}

$arr = array();
// Recorro fila a fila obtenida desde la base de datos 
while($row = mysql_fetch_array($retval, MYSQL_ASSOC)){
    $arr[] = $row;
}

// json_encode es una función de PHP que ransforma sus datos en json legibles para javascript
echo json_encode($arr);
mysql_close($conn);
