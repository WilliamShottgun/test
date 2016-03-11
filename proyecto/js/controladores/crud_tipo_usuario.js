// Begin: controlador listado_tipo_usuario
app.controller('listado_tipo_usuario_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Listado de Tipos de Usuario';
    $http.post('server/tipo_usuario/listado_tipo_usuario.php').success(
            function (data) {
                $scope.tipo_usuarios = data;
            });
    $scope.detalle_tipo_usuario = function (tipo_usuario) {
        localStorage.setItem('tipo_usuario', JSON.stringify(tipo_usuario));
        $location.path('/editar_tipo_usuario');
    };
});
// End: controlador listado_tipo_usuario
// Begin: controlador editar_tipo_usuario
app.controller('editar_tipo_usuario_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Tipo Usuario';
    $scope.tipo_usuario = JSON.parse(localStorage.getItem('tipo_usuario'));
    $scope.nombreTipo_usuario = $scope.tipo_usuario.nombreTipo_usuario;
    $scope.editarTipo_usuario = function () {
        if ($scope.nombreTipo_usuario == undefined) {
            $("#nombreTipo_usuario").focus();
            return false;
        }
        var data = {
            "idTipo_usuario": $scope.tipo_usuario.idTipo_usuario,
            "nombreTipo_usuario": $scope.nombreTipo_usuario
        };
        $http.post('server/tipo_usuario/editarTipo_usuario.php', {'data': data}).success(
                function (data) {
                    alert('Editado con éxito');
                });
    };
    $scope.eliminarTipo_usuario = function () {
        var r = confirm('Realmente desea eliminar esta entidad');
        if (r == true) {
            var data = {
                "idTipo_usuario": $scope.tipo_usuario.idTipo_usuario
            };
            $http.post('server/tipo_usuario/eliminarTipo_usuario.php', {'data': data}).success(
                    function (data) {
                        if (data == 'exito') {
                            $location.path('/listado_tipo_usuario');
                        } else {
                            alert('No se pudo eliminar, ya que existen dependencias');
                        }
                    });
        }

    };
});
// End: controlador editar_tipo_usuario
// Begin: controlador ingreso_tipo_usuario
app.controller('ingreso_tipo_usuario_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Tipo Usuario';
    $scope.guardarTipo_usuario = function () {
        if ($scope.nombreTipo_usuario == undefined) {
            $("#nombreTipo_usuario").focus();
            return false;
        }
        var data = {
            "nombreTipo_usuario": $scope.nombreTipo_usuario
        };
        $http.post('server/tipo_usuario/guardarTipo_usuario.php', {'data': data}).success(
                function (data) {
                    $location.path('/listado_tipo_usuario');
                });
    };
});
// End: controlador ingreso_tipo_usuario