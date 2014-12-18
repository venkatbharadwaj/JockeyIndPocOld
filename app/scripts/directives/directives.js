angular.module('jockeyIndPocApp')

    .directive('productDisplay', function () {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                productsData: '='
            },
            link : function(scope, element, attrs){

            },
            controller: function ($scope) {
                var panes = $scope.panes = [];

                $scope.select = function (pane) {
                    angular.forEach(panes, function (pane) {
                        pane.selected = false;
                    });
                    pane.selected = true;
                };

                this.addPane = function (pane) {
                    if (panes.length === 0) {
                        $scope.select(pane);
                    }
                    panes.push(pane);
                };
            },
            templateUrl: 'views/singleProduct.html'
        };
    });