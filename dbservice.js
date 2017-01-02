(function() {

    angular.module('starter').factory('SpendingService', ['$q', SpendingService]);

    function SpendingService($q) {  
        var _db;    
        var _spendEntries;

        return {
            initDB: initDB,

            getAllSpending: getAllSpending,
            addSpending: addSpending,
            updateSpending: updateSpending,
            deleteSpending: deleteSpending
        };

        function initDB() {
            // Creates the database or opens if it already exists
            _db = new PouchDB('spendEntries', {adapter: 'websql'});
        };

        function addSpending(spendEntry) {
            return $q.when(_db.post(spendEntry));
        };

        function updateSpending(spendEntry) {
            return $q.when(_db.put(spendEntry));
        };

        function deleteSpending(spendEntry) {
            return $q.when(_db.remove(spendEntry));
        };

        function getAllSpending() {

            if (!_spendEntries) {
                return $q.when(_db.allDocs({ include_docs: true}))
                          .then(function(docs) {

                            // Each row has a .doc object and we just want to send an 
                            // array of spending objects back to the calling controller,
                            // so let's map the array to contain just the .doc objects.
                            _spendEntries = docs.rows.map(function(row) {
                                // Dates are not automatically converted from a string.
                                row.doc.Date = new Date(row.doc.Date);
                                return row.doc;
                            });

                            // Listen for changes on the database.
                            _db.changes({ live: true, since: 'now', include_docs: true})
                               .on('change', onDatabaseChange);

                           return _spendEntries;
                         });
            } else {
                // Return cached data as a promise
                return $q.when(_spendEntries);
            }
        };

        function onDatabaseChange(change) {
            var index = findIndex(_spendEntries, change.id);
            var spendEntry = _spendEntries[index];

            if (change.deleted) {
                if (spendEntry) {
                    _spendEntries.splice(index, 1); // delete
                }
            } else {
                if (spendEntry && spendEntry._id === change.id) {
                    _spendEntries[index] = change.doc; // update
                } else {
                    _spendEntries.splice(index, 0, change.doc) // insert
                }
            }
        }
        
        function findIndex(array, id) {
          var low = 0, high = array.length, mid;
          while (low < high) {
            mid = (low + high) >>> 1;
            array[mid]._id < id ? low = mid + 1 : high = mid
          }
          return low;
        }
    }
})();
