// Begin: controlador listado_cliente
app.controller('listado_cliente_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Listado Clientes';
    $http.post('server/cliente/listado_cliente.php').success(
            function (data) {
                $scope.clientes = data;
            });
    $scope.detalle_cliente = function (cliente) {
        localStorage.setItem('cliente', JSON.stringify(cliente));
        $location.path('/editar_cliente');
    };
});
// End: controlador listado_cliente
// Begin: controlador editar_cliente
app.controller('editar_cliente_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Cliente';
    $scope.cliente = JSON.parse(localStorage.getItem('cliente'));
    $scope.editarCliente = function () {
        if ($scope.cliente.nombreCliente == undefined || $scope.cliente.nombreCliente == '') {
            $("#nombreCliente").focus();
            return false;
        }
        if ($scope.cliente.rutCliente == undefined || $scope.cliente.rutCliente == '') {
            $("#rutCliente").focus();
            return false;
        }
        var data = {
            "idCliente": $scope.cliente.idCliente,
            "nombreCliente": $scope.cliente.nombreCliente,
            "rutCliente": $scope.cliente.rutCliente
        };
        $http.post('server/cliente/editarCliente.php', {'data': data}).success(
                function (data) {
                    alert('Editado con éxito');
                });
    };
    $scope.eliminarCliente = function () {
        var r = confirm('Realmente desea eliminar esta entidad');
        if (r == true) {
            var data = {
                "idCliente": $scope.cliente.idCliente
            };
            $http.post('server/cliente/eliminarCliente.php', {'data': data}).success(
                    function (data) {
                        if (data == 'exito') {
                            $location.path('/listado_cliente');
                        } else {
                            alert('No se pudo eliminar, ya que existen dependencias');
                        }
                    });
        }

    };
});
// End: controlador editar_cliente
// Begin: controlador ingreso_cliente
app.controller('ingreso_cliente_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Cliente';
    $scope.guardarCliente = function () {
        if ($scope.nombreCliente == undefined) {
            $("#nombreCliente").focus();
            return false;
        }
        if ($scope.rutCliente == undefined) {
            $("#rutCliente").focus();
            return false;
        }
        var data = {
            "nombreCliente": $scope.nombreCliente,
            "rutCliente": $scope.rutCliente
        };
        $http.post('server/cliente/guardarCliente.php', {'data': data}).success(
                function (data) {
                    $location.path('/listado_cliente');
                });
    };
});
// End: controlador ingreso_cliente
