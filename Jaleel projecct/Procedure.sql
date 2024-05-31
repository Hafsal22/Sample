USE [SalesApplication]
GO
alter PROCEDURE SP_LOGIN
(
@UserName  varchar(500),
@Password  varchar(500)
)
As
BEGIN

if((select COUNT(1) FROM USERS WHERE UserName=@UserName and Password=@Password)>0)
BEGIN
 Select 'Success' as Result
END
ELSE
BEGIN 

 Select 'Failed' as Result
END

END