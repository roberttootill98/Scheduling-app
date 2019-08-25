create database if not exists Scheduler;
use Scheduler;

create table if not exists Scheduler.Users (
  UserID int primary key auto_increment,
  Name varchar(25)
);

create table if not exists Scheduler.Days (
  Day int,
  Month int,
  Year int,
  UserID int,
  constraint PRIMARY KEY (Day, Month, Year, UserID),
  constraint FOREIGN KEY (UserID) REFERENCES Users (UserID),
);

create table if not exists Scheduler.Activities (
  ActivityID int primary key auto_increment,
  Day int,
  Month int,
  Year int,
  UserID int;
  Location varchar(50),
  Description varchar(150),
  constraint FOREIGN KEY (Day, Month, Year, UserID) REFERENCES Days (Day, Month, Year, UserID)
);
