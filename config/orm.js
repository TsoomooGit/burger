var connection=require("./connection");

    var orm = {
     
        selectAll: function(columnName, tableName, condition, cb){
        var queryString = "select "+columnName+ " from "+tableName+" where "+condition;
        connection.query(queryString, function(err,result){
          if(err) throw err;
            cb(result);
        })
        },
        insertOne: function(tableName,columnName, value, cb) {
          var queryString = "INSERT INTO ?? (??) VALUES (?);";
          connection.query(queryString, [tableName, columnName, value], function(err, result) {
            if (err) throw err;
            cb(result);
          });
        },
     
        delete: function(tableName,columnName, value, cb) {
            var queryString = "DELETE FROM ?? WHERE ?? = ?;";
            connection.query(queryString, [tableName, columnName, value], function(err, result) {
                if (err) throw err;     
              cb(result);
            });
          },


          updateOne: function(tableName,columnName, value, id, cb) {
            var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
            connection.query(queryString, [tableName, columnName, value, id], function(err, result) {
              if (err) throw err;
              cb(result);
            });
          },
    
    
    };

    module.exports = orm;