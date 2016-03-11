// Begin: controlador listado_tipo_producto
app.controller('listado_tipo_producto_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Listado de Tipos de Producto';
    $http.post('server/tipo_producto/listado_tipo_producto.php').success(
            function (data) {
                $scope.tipo_productos = data;
            });
    $scope.detalle_tipo_producto = function (tipo_producto) {
        localStorage.setItem('tipo_producto', JSON.stringify(tipo_producto));
        $location.path('/editar_tipo_producto');
    };
});
// End: controlador listado_tipo_producto
// Begin: controlador editar_tipo_producto
app.controller('editar_tipo_producto_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Tipo Producto';
    $scope.tipo_producto = JSON.parse(localStorage.getItem('tipo_producto'));
    $scope.editarTipo_producto = function () {
        if ($scope.tipo_producto.nombreTipo_producto == undefined) {
            $("#nombreTipo_producto").focus();
            return false;
        }
        var data = {
            "idTipo_producto": $scope.tipo_producto.idTipo_producto,
            "nombreTipo_producto": $scope.tipo_producto.nombreTipo_producto
        };
        $http.post('server/tipo_producto/editarTipo_producto.php', {'data': data}).success(
                function (data) {
                    alert('Editado con éxito');
                });
    };
    $scope.eliminarTipo_producto = function () {
        var r = confirm('Realmente desea eliminar esta entidad');
        if (r == true) {
            var data = {
                "idTipo_producto": $scope.tipo_producto.idTipo_producto
            };
            $http.post('server/tipo_producto/eliminarTipo_producto.php', {'data': data}).success(
                    function (data) {
                        if (data == 'exito') {
                            $location.path('/listado_tipo_producto');
                        } else {
                            alert('No se pudo eliminar, ya que existen dependencias');
                        }
                    });
        }

    };
});
// End: controlador editar_tipo_producto
// Begin: controlador ingreso_tipo_producto
app.controller('ingreso_tipo_producto_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Tipo Producto';
    $scope.guardarTipo_producto = function () {
        if ($scope.nombreTipo_producto == undefined) {
            $("#nombreTipo_producto").focus();
            return false;
        }
        var data = {
            "nombreTipo_producto": $scope.nombreTipo_producto
        };
        $http.post('server/tipo_producto/guardarTipo_producto.php', {'data': data}).success(
                function (data) {
                    $location.path('/listado_tipo_producto');
                });
    };
});
// End: controlador ingreso_tipo_producto
