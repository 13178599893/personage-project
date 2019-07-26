#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS hammer;
#创建数据库，设置存储的编码
CREATE DATABASE hammer CHARSET=UTF8;
#进入该数据库
USE hammer;
/******首页轮播广告商品*******/
CREATE TABLE hammer_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  href VARCHAR(128)
);

/*****插入首页轮播广告商品数据*******/
INSERT INTO hammer_index_carousel VALUES
(NULL,'img/banner1.jpg','details1.html?lid=30'),
(NULL,'img/banner2.jpg','details1.html?lid=31'),
(NULL,'img/banner3.jpg','details1.html?lid=32');



/*****首页F1商品*****/
CREATE TABLE hammer_index_product (
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(128),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	href VARCHAR(128),
	lid INT
);

/*******插入首页商品数据*******/
INSET INTO hammer_index_product_F1 VALUES
(NULL,'Smartisan 帆布鞋','一双踏实、舒适的帆布鞋','img/plimsollsshop.webp',199,'details2.html?lid=1','1'),
(NULL,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','img/portableF1.webp',69,'details1.html?lid=2','1'),
(NULL,'各色DNA检测套装','各色DNA检测套装','img/DNAdetection.webp',499,'details1.html?lid=3','1'),
(NULL,'Smartisan T恤 皇帝的新装','','img/Tshit.webp',149,'details1.html?lid=4','1'),
(NULL,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','img/FMboxF1.webp',149,'details1.html?lid=5','1'),
(NULL,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','img/headsetF1.webp',59,'details1.html?lid=6','1'),
(NULL,'坚果彩虹数据线','随机发货,为生活增添一份小小惊喜','img/dataLineF1.webp',39,'details1.html?lid=7','1'),
(NULL,'Smartisan 双口 & 快充车载充电器','铝合金机身、双口 & 快充、智能调节','img/carchargerF1.webp',79,'details1.html?lid=8','1'),
(NULL,'地平线 8 号 28 寸旅行箱','一款让旅行箱挑剔者满意的旅行箱','img/luggageF2.webp',599,'details1.html?lid=9','2'),
















