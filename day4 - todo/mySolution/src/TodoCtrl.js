function TodoCtrl($scope){
    $scope.todos = [];

    $scope.add = function(todo){
        $scope.todos.push({
            title: todo.title,
            completed: false
        })
    }

    $scope.remove = function(index){
        $scope.todos.splice(index, 1);
    }
}