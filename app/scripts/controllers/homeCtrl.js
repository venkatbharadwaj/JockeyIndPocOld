'use strict';

/**
 * @ngdoc function
 * @name jockeyIndPocApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jockeyIndPocApp
 */
angular.module('jockeyIndPocApp')

    .controller('HomeCtrl', ["$scope", "$log", "apiCallFactory",
        function ($scope, $log, apiCallFactory) {

            $scope.sizes = [];

            var config = {
                method: 'GET',
                url: "assets/productData.json"
            }

            apiCallFactory
                .callApi(config)
                .then(function (data) {
                    $log.log("Success Callback");
                    $scope.productsData = data;

                    angular.forEach($scope.productsData.response.docs, function (val, key) {
                        angular.forEach(val.availablesizes, function (innerVal, key) {
                            if($scope.sizes.indexOf(innerVal) < 0){
                                $scope.sizes.push(innerVal);
                            }
                        })
                    });

                }, function (status) {
                    $log.log("Failure Callback");
                });

            $scope.filterBySize = function (size) {
                $log.log(size);
            };

        }]);
