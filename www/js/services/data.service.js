angular.module('services', [])
    /** Data access services **/
    .factory('dataService', function ($q) {
        return {
            getClassicalList : function(){
                return $q.when([{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}]);
            }
        }
    }
);
