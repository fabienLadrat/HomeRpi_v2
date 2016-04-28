//var sqlite3 = require("sqlite3").verbose();
// ======== restrict constantes ========
var dataBaseFile ="./homeRPi2.db";
//var exists = fs.existsSync(dataBaseFile);

var sqli = require('sqli')
, sqlite = sqli.getDriver('sqlite')
, db = sqlite.connect(':memory:');

var pool = sqlite.createPool(dataBaseFile, 5, 10000);
db = pool.get();

// get room with specific id
exports.getRoomById = function (id, callback) {
	db.exec("SELECT id, room_name from room where id=?",id).each(function(row) {
		if(row){
			var room={  
				id: row.id,
				roomName: row.room_name
			};
			callback(room);
        }
	});
}

// get full room list
exports.getRoomList = function (callback) {
	db.exec("SELECT id, room_name from room").all(function(rows) {
		if(rows){
			var response={  
				roomList: rows
			};
			callback(response);
        }
	});
}

// add new room
exports.addRoom = function (roomName) {
    db.begin();
	db.exec("insert into room(room_name) values (?)", roomName);
	db.commit();
}

// update room
exports.updateRoom = function (room) {
    db.begin();
	db.exec("update room set room_name=? where id=?", [room.name, room.id]);
	db.commit();
}

// delete room
exports.deleteRoom = function (id) {
    db.begin();
	db.exec("delete from room where id=?", id);
	db.commit();
}