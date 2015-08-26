angular.module('services', [])

    /** Data access services **/
    .factory('dataService', function ($q) {

        function generateIndexedElement(index) {
            return {
                id: index,
                name: 'Item ' + index,
                description: 'Item ' + index + ' description'
            }
        }

        return {
            getSimpleData: function () {
                var data = [];
                for (var i = 0; i <= 10; i++) {
                    data.push(generateIndexedElement(i));
                }
                return $q.when(data);
            }
        };
    }
);
