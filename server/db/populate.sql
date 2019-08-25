/* users */
insert into Users (Name) values ("Me");
insert into Users (Name) values ("That guy");
/* scheduler */
insert into Days (Day, Month, Year, UserID) values (4, 7, 2019, 0);
insert into Days (Day, Month, Year, UserID) values (27, 10, 2019, 1);
/* activities */
insert into Activities (Day, Month, Year, UserID, Location, Description) values (4, 7, 2019, 0, "Somewhere", "Something");
