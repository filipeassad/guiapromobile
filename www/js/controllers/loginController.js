app.controller('loginCtrl', [
    '$scope',
    'httpService',
    '$state',
    function(
        $scope,
        httpService,
        $state) {

        var url = url_principal + "api/login";
        $scope.usuario = {};

        $scope.logar = function(){
            httpService.posthttp(url, $scope.usuario)
            .then(function mySuccess(response) {                
                if(response.data.success == true){
                    token = response.data.token;
                    //document.cookie = "token="+response.data.token; 
                    //window.location.href = url_principal;  
                    $state.go('app.categorias');  
                }
                else
                    alert("Usuário ou senha incorretos.");
            }, function myError(response) {
                alert("Problemas com o servidor.");
            });
        }
    
}]);