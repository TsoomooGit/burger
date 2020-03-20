
     drop database if exists burger;
     Create database burger;
     use burger;

     create table burgers(
         id int not null auto_increment,
         name varchar(100) not null,
         deleted varchar(1),
         primary key(id)
     );