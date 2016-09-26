(function(){
    var app = angular.module("todoApp", [

    ]);

    app.controller("TodoCtrl", [function(){
        var self = this;

        self.todos = [];
        self.newTodo = {};

        self.remove = function (index) {
            self.todos.splice(index, 1);
        };

        self.submit = function () {
            self.todos.push(self.newTodo);
            self.newTodo = {};
        };
    }]);
}());