app.controller('profissionaisCtrl', [
    '$scope',
    'httpService',
    '$state',
    function(
        $scope,
        httpService,
        $state) {

    $scope.categoria = angular.copy(categoria_selecionada);

}]);