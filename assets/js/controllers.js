angular.module("app.controllers", ["app.services"])
/*
.controller("AutoCRUDController", function($scope, PostsFactory)
{
    PostsFactory.get().
    success(function(res)
    {
        $scope.posts = res;
    })
    .error(function(error)
    {
        console.log(error)
    })
})

.controller("profileCtrl", function($scope)
{

})*/
.controller('AutoCRUDCtrl', ['$scope','AutoCRUDService', function ($scope,AutoCRUDService) {
	  
    $scope.updateAuto = function () {
        AutoCRUDService.updateAuto($scope.auto.id,$scope.auto.marca,$scope.auto.nombre,$scope.auto.ano)
          .then(function success(response){
              $scope.message = 'Auto actualizado';
              $scope.errorMessage = '';
          },
          function error(response){
              $scope.errorMessage = 'Error al actualizar auto';
              $scope.message = '';
          });
    }
    
    $scope.getAuto = function () {
        var id = $scope.auto.id;
        AutoCRUDService.getAuto($scope.auto.id)
          .then(function success(response){
              $scope.auto = response.data;
              $scope.auto.id = id;
              $scope.message='';
              $scope.errorMessage = '';
          },
          function error (response ){
              $scope.message = '';
              if (response.status === 404){
                  $scope.errorMessage = 'Auto no encontrado';
              }
              else {
                  $scope.errorMessage = "Error obteniendo auto";
              }
          });
    }
    
    $scope.addAuto = function () {
        if ($scope.auto != null && $scope.auto.nombre) {
            AutoCRUDService.addAuto($scope.auto.marca, $scope.auto.nombre,$scope.auto.ano)
              .then (function success(response){
                  $scope.message = 'Auto Agregado';
                  $scope.errorMessage = '';
              },
              function error(response){
                  $scope.errorMessage = 'Error al agregar el auto';
                  $scope.message = '';
            });
        }
        else {
            $scope.errorMessage = 'Please enter a name!';
            $scope.message = '';
        }
    }
    
    $scope.deleteAuto = function () {
        AutoCRUDService.deleteAuto($scope.auto.id)
          .then (function success(response){
              $scope.message = 'El auto fue eliminado';
              $scope.Auto = null;
              $scope.errorMessage='';
          },
          function error(response){
              $scope.errorMessage = 'Error al borrar el auto';
              $scope.message='';
          })
    }
    
    $scope.getAllAutos = function () {
        AutoCRUDService.getAllAutos()
          .then(function success(response){
              $scope.autos = response.data;
              $scope.message='';
              $scope.errorMessage = '';
          },
          function error (response ){
              $scope.message='';
              $scope.errorMessage = 'Error onteniendo Autos';
          });
    }

}]);
