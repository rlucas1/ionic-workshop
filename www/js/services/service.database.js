angular.module('services')

    .factory('databaseService', function ($q, $cordovaSQLite, $ionicPlatform) {

        return {
            /**
             * This function execute a query
             * @query : sql query
             * @parameters : data of the query
             *
             * sample : execute("INSERT INTO test_table (data, data_num) VALUES (?,?)",["test", 100]);
             */
            executeQuery: function (query, parameters) {
                parameters = parameters || [];
                var q = $q.defer();

                $ionicPlatform.ready(function () {
                    $cordovaSQLite.execute(db, query, parameters)
                        .then(function (result) {
                            q.resolve(result);
                        }, function (error) {
                            console.warn('I found an error');
                            console.warn(error);
                            q.reject(error);
                        });
                });
                return q.promise;
            }
        };
    }
)
;