USE [SalesApplication]
GO
CREATE TABLE  USERS
(
UserId INT  primary key identity(1,1),
UserName  nvarchar(500),
Password nvarchar(500)

)

GO
INSERT INTO USERS (UserName,Password) VALUES('Admin','1234')


CREATE TABLE SalesMan(Id_SalesMan int identity(1,1)primary key,name varchar(100))gocreate table ShopName(Id_ShopName int identity(1,1)primary key,name varchar(200),place varchar(200),openingBalance decimal(18,2))gocreate table Route (Id_route int identity(1,1)primary key,name varchar(100))goinsert into SalesMan values('Ajmal'),('Rifadh'),('Jaleel'),('Tharique')goinsert into ShopName values('Famous bazar','Bazar',100.00),('Live','Bazar',200.00),('Dosa kada','Moozhikal',500.00),('Famous moozhikal','Moozhikal',0.00),('Cafe rikka','Cheruvatta',1000.00)goinsert into Route values('Bazar'),('Moozhikal'),('Cheruvatta')gocreate table salesTransaction(Id_salesTransaction int identity(1,1)primary key,fk_salesMan int foreign key references salesMan(id_salesman),                              date date,fk_route int foreign key references route(id_route),BillAmount decimal(18,2),CashReceived decimal(18,2))goalter table salesTransaction add fk_shopname int goalter table salesTransaction add constraint FK_ShopName1 foreign key (fk_shopname) references ShopName (Id_ShopName)goinsert into salesTransaction values('2023-10-1',1,2,1,400.00,500.00),('2023-10-1',1,2,1,300.00,00.00),('2023-10-1',2,2,1,200.00,200.00),('2023-10-1',2,3,2,1000.00,500.00),('2023-10-1',2,4,2,1100.00,500.00),('2023-10-1',2,5,3,00.00,500.00)select * from SalesManselect * from ShopNameselect * from Routeselect * from salesTransaction