app.controller('categoriasCtrl', [
    '$scope',
    'httpService',
    '$state',
    function(
        $scope,
        httpService,
        $state) {

        var url = url_principal + "api/mobile/categoria";
        
        $scope.categorias = [];
        httpService.gethttpToken(url)
        .then(function mySuccess(response) {                
            if(response.data != null) { 
                $scope.categorias = response.data;
            }
            else
                alert("Categorias não encontradas.");
        }, function myError(response) {
            alert("Problemas com o servidor.");
        });

        $scope.selecionar_categoria = function(categoria){
            categoria_selecionada = angular.copy(categoria);
            $state.go('app.profissionais');
        };

        $scope.buscar_imagem_categoria = function(categoria){
            if(categoria.descricao == 'Encanador'){
                return "../img/img_categorias/encanador.png";
            }else if(categoria.descricao == 'Marceneiro'){
                return "../img/img_categorias/marceneiro.png";  
            }else if(categoria.descricao == 'Pedreiro'){
                return "../img/img_categorias/pedreiro.png";  
            }else if(categoria.descricao == 'Pintor'){
                return "../img/img_categorias/pintor.png";  
            }else if(categoria.descricao == 'Eletricista'){
                return "../img/img_categorias/eletricista.png";  
            }else if(categoria.descricao == 'Calhas'){
                return "../img/img_categorias/calhas.png";  
            }else if(categoria.descricao == 'Construtores'){
                return "../img/img_categorias/construtores.png";  
            }else if(categoria.descricao == 'Acabamento'){
                return "../img/img_categorias/acabamento.png";  
            }else if(categoria.descricao == 'Serralheiros'){
                return "../img/img_categorias/serralheiros.png";  
            }else if(categoria.descricao == 'Munk'){
                return "../img/img_categorias/munk.png";  
            }else if(categoria.descricao == 'Jardineiros'){
                return "../img/img_categorias/jardineiros.png";  
            }else if(categoria.descricao == 'Gesseiros'){
                return "../img/img_categorias/gesso.png";  
            }else if(categoria.descricao == 'Decoradores'){
                return "../img/img_categorias/decoradores.png";  
            }else if(categoria.descricao == 'Carpinteiro'){
                return "../img/img_categorias/carpinteiros.png";  
            }else if(categoria.descricao == 'Banheiros'){
                return "../img/img_categorias/banheiras.png";  
            }else if(categoria.descricao == 'Limpeza'){
                return "../img/img_categorias/limpeza.png";  
            }else if(categoria.descricao == 'Engenheiros'){
                return "../img/img_categorias/engenheiros.png";  
            }else if(categoria.descricao == 'Reparos Gerais'){
                return "../img/img_categorias/reparogerais.png";  
            }else if(categoria.descricao == 'Banheiras'){
                return "../img/img_categorias/banheiras.png";  
            }else if(categoria.descricao == 'Vidraceiros'){
                return "../img/img_categorias/vidraceiros.png";  
            }else if(categoria.descricao == 'Piscina'){
                return "../img/img_categorias/piscina.png";  
            }else if(categoria.descricao == 'Arquitetos'){
                return "../img/img_categorias/arquitetos.png";  
            }else if(categoria.descricao == 'Papel de Parede'){
                return "../img/img_categorias/papeldeparede.png";  
            }else{
                return "../img/img_categorias/engenheiros.png"; 
            }
        }

}]);                   