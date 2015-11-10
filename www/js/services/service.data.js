angular.module('services', [])

    /** Data access services **/
    .factory('dataService', function ($q, databaseService) {

        var data;

        function generateIndexedElement(index) {
            return {
                id: index,
                name: 'Item ' + index,
                description: 'Item ' + index + ' description'
            }
        }

        return {
            /** this function return data */
            getSimpleData: function () {
                if(!data) {
                    data = [];
                    for (var i = 0; i <= 10; i++) {
                        data.push(generateIndexedElement(i));
                    }
                }
                return $q.when(data);
            },

            /** this function allows to get an element by its id */
            getDataById : function(id){
                if(!data){
                    return this.getSimpleData().then(function(data){
                        return $q.when(data[id]);
                    });
                }else {
                    return $q.when(data[id]);
                }
            },

            insertItem: function (item) {
                return databaseService.executeQuery("INSERT INTO item (name,description)    VALUES (?,?)", [item.name, item.description]);
            },

            getDatabaseItems: function () {
                return databaseService.executeQuery("SELECT * FROM item");
            }

        };
    }
);
