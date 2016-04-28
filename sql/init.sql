/*-table device (detail d'un device avec son protocole, son nom, l'endroit ou il se situe)
-table device_state (etat on/off d'un device et le mode de fonctionnement auto/manuel)
-table piece (liste des pieces de la maison)
-table presence (stocker ou se situe le proprietaire)
-table parameter (clé valeur pour stocker des infos statics ip sarah, clé gcm notif...)
-table modules
-table scenarios
-table cron ?
-table routeur*/

sqlite3 homeRPi2.db

create table room(id INTEGER primary key autoincrement, room_name VARCHAR(255));

create table physical_situation(emplacement VARCHAR(255), date_update_emplacement DATE);

create table modules(id INTEGER primary key autoincrement, module_name VARCHAR(255), module_file_name VARCHAR(255));

create table scenarios(id INTEGER primary key autoincrement, scenario_name VARCHAR(255), scenario_file_name VARCHAR(255));

create table params(param_name VARCHAR(255), param_value VARCHAR(255));

create table device_state(id_device INTEGER, state VARCHAR(255), mode VARCHAR(255));

create table device(id INTEGER primary key autoincrement, device_name VARCHAR(255), device_libelle VARCHAR(255), physical_id INTEGER, device_type VARCHAR(255), device_room INTEGER, protocol VARCHAR(255));

insert into physical_situation(emplacement, date_update_emplacement) values ('none', new Date());

commit;
