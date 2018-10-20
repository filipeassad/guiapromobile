angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('login');

    $stateProvider.state('login', {
        url : '/login',
        templateUrl : 'templates/login.html',
        controller: 'loginCtrl'
    })
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu_lateral.html',
        controller: 'menuCtrl'
    })
    .state('app.categorias', {
        url: '/categorias',
        views:{
            'menuContent': {
                templateUrl: 'templates/listagem_categoria.html',
                controller: 'categoriasCtrl'
            }
        }          
    }).state('app.profissionais', {
        url: '/profissionais',
        views:{
            'menuContent': {
                templateUrl: 'templates/listagem_profissionais.html',
                controller: 'profissionaisCtrl'
            }
        }          
    });

});