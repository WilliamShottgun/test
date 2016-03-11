var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/ingreso_tipo_usuario', {
        templateUrl: 'views/tipo_usuario/ingreso_tipo_usuario.html',
        controller: 'ingreso_tipo_usuario_controller'
    }).when('/listado_tipo_usuario', {
        templateUrl: 'views/tipo_usuario/listado_tipo_usuario.html',
        controller: 'listado_tipo_usuario_controller'
    }).when('/editar_tipo_usuario', {
        templateUrl: 'views/tipo_usuario/detalle_tipo_usuario.html',
        controller: 'editar_tipo_usuario_controller'
    }).when('/listado_usuario', {
        templateUrl: 'views/usuario/listado_usuario.html',
        controller: 'listado_usuario_controller'
    }).when('/listado_producto', {
        templateUrl: 'views/producto/listado_producto.html',
        controller: 'listado_producto_controller'
    }).when('/ingreso_tipo_producto', {
        templateUrl: 'views/tipo_producto/ingreso_tipo_producto.html',
        controller: 'ingreso_tipo_producto_controller'
    }).when('/listado_tipo_producto', {
        templateUrl: 'views/tipo_producto/listado_tipo_producto.html',
        controller: 'listado_tipo_producto_controller'
    }).when('/editar_tipo_producto', {
        templateUrl: 'views/tipo_producto/detalle_tipo_producto.html',
        controller: 'editar_tipo_producto_controller'
    }).when('/ingreso_usuario', {
        templateUrl: 'views/usuario/ingreso_usuario.html',
        controller: 'ingreso_usuario_controller'
    }).when('/listado_usuario', {
        templateUrl: 'views/usuario/listado_usuario.html',
        controller: 'listado_usuario_controller'
    }).when('/editar_usuario', {
        templateUrl: 'views/usuario/detalle_usuario.html',
        controller: 'editar_usuario_controller'
    }).when('/ingreso_cliente', {
        templateUrl: 'views/cliente/ingreso_cliente.html',
        controller: 'ingreso_cliente_controller'
    }).when('/listado_cliente', {
        templateUrl: 'views/cliente/listado_cliente.html',
        controller: 'listado_cliente_controller'
    }).when('/editar_cliente', {
        templateUrl: 'views/cliente/detalle_cliente.html',
        controller: 'editar_cliente_controller'
    }).when('/ingreso_producto', {
        templateUrl: 'views/producto/ingreso_producto.html',
        controller: 'ingreso_producto_controller'
    }).when('/listado_producto', {
        templateUrl: 'views/producto/listado_producto.html',
        controller: 'listado_producto_controller'
    }).when('/editar_producto', {
        templateUrl: 'views/producto/detalle_producto.html',
        controller: 'editar_producto_controller'
    });

});

// Begin: controlador principal
app.controller('principal', function ($scope, $http) {
    $scope.nombre_sistema = 'Administracion de clientes';
    $scope.navbar = 'views/includes/nav.html';
    $scope.menu = 'views/includes/menu.html';
    $scope.mostrar_vista = false;
    $http.post('server/login/consultar_logeo.php').success(
            function (data) {
                if (data == 'desconectado') {
                    window.location = "/proyecto";
                } else {
                    $scope.mostrar_vista = true;
                }
            });
    $scope.logout = function () {
        $http.post('server/login/logout.php').success(
                function (data) {
                    window.location = "/proyecto";
                });
    };

});
// End: controlador principal

// Begin: controlador navbar
app.controller('navbar_controller', function ($scope) {
    /*$scope.comunicarconservidor = function(){
     $http.post('servidor.php', {"usuario": "Frank Kismann", "edad": 27}).success(
     function(data){
     $scope.texto=data;
     });
     }*/
});
// End: controlador navbar


// Begin: controlador menu
app.controller('menu_controller', function ($scope) {
    $('#side-menu').metisMenu();
});
// End: controlador menu


