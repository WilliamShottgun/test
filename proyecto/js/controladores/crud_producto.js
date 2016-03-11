// Begin: controlador listado_producto
app.controller('listado_producto_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Listado de Productos';
    $http.post('server/producto/listado_producto.php').success(
            function (data) {
                $scope.productos = data;
            });
    $scope.detalle_producto = function (producto) {
        localStorage.setItem('producto', JSON.stringify(producto));
        $location.path('/editar_producto');
    };
});
// End: controlador listado_producto
// Begin: controlador editar_producto
app.controller('editar_producto_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Producto';
    $scope.producto = JSON.parse(localStorage.getItem('producto'));
    // Begin: tratamiento de variables a entero
    $scope.producto.precioProducto = parseInt($scope.producto.precioProducto);
    $scope.producto.stockProducto = parseInt($scope.producto.stockProducto);
    // End: tratamiento de variables a entero
    $scope.editarProducto = function () {
        if ($scope.producto.nombreProducto == undefined || $scope.producto.nombreProducto == '') {
            $("#nombreProducto").focus();
            return false;
        }
        if ($scope.producto.stockProducto == undefined || $scope.producto.stockProducto == '') {
            $("#stockProducto").focus();
            return false;
        }
        if ($scope.producto.precioProducto == undefined || $scope.producto.precioProducto == '') {
            $("#precioProducto").focus();
            return false;
        }
        if ($scope.producto.tipo_producto_idTipo_producto == undefined || $scope.producto.tipo_producto_idTipo_producto == '') {
            $("#tipo_producto_idTipo_producto").focus();
            return false;
        }
        var data = {
            "idProducto": $scope.producto.idProducto,
            "nombreProducto": $scope.producto.nombreProducto,
            "stockProducto": $scope.producto.stockProducto,
            "precioProducto": $scope.producto.precioProducto,
            "tipo_producto_idTipo_producto": $scope.producto.tipo_producto_idTipo_producto
        };
        $http.post('server/producto/editarProducto.php', {'data': data}).success(
                function (data) {
                    alert('Editado con éxito');
                });
    };
    $scope.eliminarProducto = function () {
        var confirmacion = confirm('Realmente desea eliminar esta entidad');
        if (confirmacion == true) {
            var data = {
                "idProducto": $scope.producto.idProducto
            };
            $http.post('server/producto/eliminarProducto.php', {'data': data}).success(
                    function (data) {
                        if (data == 'exito') {
                            $location.path('/listado_producto');
                        } else {
                            alert('No se pudo eliminar, ya que existen dependencias');
                        }
                    });
        }

    };

    // Datos complementarios
    $http.post('server/tipo_producto/listado_tipo_producto.php').success(
            function (data) {
                $scope.tipo_productos = data;
            });
});
// End: controlador editar_producto
// Begin: controlador ingreso_producto
app.controller('ingreso_producto_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Producto';
    $scope.guardarProducto = function () {
        if ($scope.nombreProducto == undefined) {
            $("#nombreProducto").focus();
            return false;
        }
        if ($scope.stockProducto == undefined) {
            $("#stockProducto").focus();
            return false;
        }
        if ($scope.precioProducto == undefined) {
            $("#precioProducto").focus();
            return false;
        }
        if ($scope.tipo_producto_idTipo_producto == undefined) {
            $("#tipo_producto_idTipo_producto").focus();
            return false;
        }
        var data = {
            "idProducto": $scope.idProducto,
            "nombreProducto": $scope.nombreProducto,
            "stockProducto": $scope.stockProducto,
            "precioProducto": $scope.precioProducto,
            "tipo_producto_idTipo_producto": $scope.tipo_producto_idTipo_producto
        };
        $http.post('server/producto/guardarProducto.php', {'data': data}).success(
                function (data) {
                    $location.path('/listado_producto');
                });
    };

    // Datos complementarios
    $http.post('server/tipo_producto/listado_tipo_producto.php').success(
            function (data) {
                $scope.tipo_productos = data;
            });
});
// End: controlador ingreso_producto
