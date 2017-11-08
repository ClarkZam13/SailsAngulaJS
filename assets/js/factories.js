angular.module("app.services", [])

.service('AutoCRUDService',['$http', function ($http) {
	
    this.getAuto = function getAuto(autoId){
        return $http({
          method: 'GET',
          url: 'autos/'+autoId
        });
	}
	
    this.addAuto = function addAuto(marca, nombre, ano){
        return $http({
          method: 'POST',
          url: 'autos',
          data: {marca:marca, nombre:nombre, ano:ano}
        });
    }
	
    this.deleteAuto = function deleteAuto(id){
        return $http({
          method: 'DELETE',
          url: 'autos/'+id
        })
    }
	
    this.updateAuto = function updateAuto(id, marca, nombre, ano){
        return $http({
          method: 'PUT',
          url: 'autos/'+id,
          data: {marca:marca, nombre:nombre, ano:ano}
        })
    }
	
    this.getAllAutos = function getAllAutos(){
        return $http({
          method: 'GET',
          url: 'autos'
        });
    }
}]);