#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS hammer;
#创建数据库，设置存储的编码
CREATE DATABASE hammer CHARSET=UTF8;
#进入该数据库
USE hammer;
CREATE TABLE hammer_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname CHAR(30) UNIQUE,
	phone CHAR(12),
	email CHAR(40),
	upwd  CHAR(16)
)