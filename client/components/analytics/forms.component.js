function AddForm($scope, $uibModal, mainService) {
    var vm = this;
    const value = 'student';

    //to get the topper combining all schools and all subjects
    $scope.gettopper=function() {
        mainService.gettopstudent(value).then(function(response) {        
        vm.students = response.data;  
       })   
    } 
    //to get the Top subject
    $scope.getsubject=function() {
        mainService.gettopsubject(value).then(function(response) {        
        vm.students = response.data;  
       })   
    } 
    //to get the Top school
    $scope.gettopschool=function() {
        mainService.gettopschool(value).then(function(response) {        
        vm.students = response.data;  
       })   
    }     
}
 
 app.component('forms',{
     templateUrl: 'components/analytics/forms.html',
     controller: AddForm,
     controllerAs: 'vm',
 }) 
 