// Begin: controlador listado_usuario
app.controller('listado_usuario_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Listado de Usuarios';
    $http.post('server/usuario/listado_usuario.php').success(
            function (data) {
                $scope.usuarios = data;
            });
    $scope.detalle_usuario = function (usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        $location.path('/editar_usuario');
    };
});
// End: controlador listado_usuario
// Begin: controlador editar_usuario
app.controller('editar_usuario_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Usuario';
    $scope.usuario = JSON.parse(localStorage.getItem('usuario'));
    $scope.usuario.password_originalUsuario = '';
    $scope.cambio_pass = false;
    $scope.compara_pass = function () {
        if ($scope.usuario.passwordUsuario == $scope.usuario.password_originalUsuario) {
            $scope.cambio_pass = true;
        }
    };
    $scope.editarUsuario = function () {
        if ($scope.usuario.primer_nombreUsuario == undefined || $scope.usuario.primer_nombreUsuario == '') {
            $("#primer_nombreUsuario").focus();
            return false;
        }
        if ($scope.usuario.segundo_nombreUsuario == undefined || $scope.usuario.segundo_nombreUsuario == '') {
            $("#segundo_nombreUsuario").focus();
            return false;
        }
        if ($scope.usuario.primer_apellidoUsuario == undefined || $scope.usuario.primer_apellidoUsuario == '') {
            $("#primer_apellidoUsuario").focus();
            return false;
        }
        if ($scope.usuario.segundo_apellidoUsuario == undefined || $scope.usuario.segundo_apellidoUsuario == '') {
            $("#segundo_apellidoUsuario").focus();
            return false;
        }
        if ($scope.usuario.rutUsuario == undefined || $scope.usuario.rutUsuario == '') {
            $("#rutUsuario").focus();
            return false;
        }
        if ($scope.usuario.tipo_usuario_idTipo_usuario == undefined || $scope.usuario.tipo_usuario_idTipo_usuario == '') {
            $("#tipo_usuario_idTipo_usuario").focus();
            return false;
        }
        if ($scope.usuario.correoUsuario == undefined || $scope.usuario.correoUsuario == '') {
            $("#correoUsuario").focus();
            return false;
        }
        if ($scope.usuario.passwordUsuario == undefined || $scope.usuario.passwordUsuario == '') {
            $("#passwordUsuario").focus();
            return false;
        }
        var data = {
            "idUsuario": $scope.usuario.idUsuario,
            "primer_nombreUsuario": $scope.usuario.primer_nombreUsuario,
            "segundo_nombreUsuario": $scope.usuario.segundo_nombreUsuario,
            "primer_apellidoUsuario": $scope.usuario.primer_apellidoUsuario,
            "segundo_apellidoUsuario": $scope.usuario.segundo_apellidoUsuario,
            "rutUsuario": $scope.usuario.rutUsuario,
            "correoUsuario": $scope.usuario.correoUsuario,
            "passwordUsuario": $scope.usuario.passwordUsuario,
            "tipo_usuario_idTipo_usuario": $scope.usuario.tipo_usuario_idTipo_usuario
        };
        $http.post('server/usuario/editarUsuario.php', {'data': data}).success(
                function (data) {
                    alert('Editado con éxito');
                });
    };
    $scope.eliminarUsuario = function () {
        var confirmacion = confirm('Realmente desea eliminar esta entidad');
        if (confirmacion == true) {
            var data = {
                "idUsuario": $scope.usuario.idUsuario
            };
            $http.post('server/usuario/eliminarUsuario.php', {'data': data}).success(
                    function (data) {
                        if (data == 'exito') {
                            $location.path('/listado_usuario');
                        } else {
                            alert('No se pudo eliminar, ya que existen dependencias');
                        }
                    });
        }

    };

    // Datos complementarios
    $http.post('server/tipo_usuario/listado_tipo_usuario.php').success(
            function (data) {
                $scope.tipo_usuarios = data;
            });
});
// End: controlador editar_usuario
// Begin: controlador ingreso_usuario
app.controller('ingreso_usuario_controller', function ($scope, $http, $location) {
    $scope.titulo = 'Usuario';
    $scope.guardarUsuario = function () {
        if ($scope.primer_nombreUsuario == undefined) {
            $("#primer_nombreUsuario").focus();
            return false;
        }
        if ($scope.segundo_nombreUsuario == undefined) {
            $("#segundo_nombreUsuario").focus();
            return false;
        }
        if ($scope.primer_apellidoUsuario == undefined) {
            $("#primer_apellidoUsuario").focus();
            return false;
        }
        if ($scope.segundo_apellidoUsuario == undefined) {
            $("#segundo_apellidoUsuario").focus();
            return false;
        }
        if ($scope.rutUsuario == undefined) {
            $("#rutUsuario").focus();
            return false;
        }
        if ($scope.tipo_usuario_idTipo_usuario == undefined) {
            $("#tipo_usuario_idTipo_usuario").focus();
            return false;
        }
        if ($scope.correoUsuario == undefined) {
            $("#correoUsuario").focus();
            return false;
        }
        if ($scope.passwordUsuario == undefined) {
            $("#passwordUsuario").focus();
            return false;
        }
        var data = {
            "idUsuario": $scope.idUsuario,
            "primer_nombreUsuario": $scope.primer_nombreUsuario,
            "segundo_nombreUsuario": $scope.segundo_nombreUsuario,
            "primer_apellidoUsuario": $scope.primer_apellidoUsuario,
            "segundo_apellidoUsuario": $scope.segundo_apellidoUsuario,
            "rutUsuario": $scope.rutUsuario,
            "correoUsuario": $scope.correoUsuario,
            "passwordUsuario": $scope.passwordUsuario,
            "tipo_usuario_idTipo_usuario": $scope.tipo_usuario_idTipo_usuario
        };
        $http.post('server/usuario/guardarUsuario.php', {'data': data}).success(
                function (data) {
                    $location.path('/listado_usuario');
                });
    };

    // Datos complementarios
    $http.post('server/tipo_usuario/listado_tipo_usuario.php').success(
            function (data) {
                $scope.tipo_usuarios = data;
            });
});
// End: controlador ingreso_usuario
