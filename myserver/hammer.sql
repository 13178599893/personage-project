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
(NULL,'img/banner1.jpg','details1.html?lid=50'),
(NULL,'img/banner2.jpg','details1.html?lid=51'),
(NULL,'img/banner3.jpg','details1.html?lid=52');



/*****首页商品*****/
CREATE TABLE hammer_index_product (
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(128),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	href VARCHAR(128),
	fid INT
);

/*******插入首页商品数据*******/
INSERT INTO hammer_index_product VALUES
(NULL,'Smartisan 帆布鞋','一双踏实、舒适的帆布鞋','img/plimsollsshop.webp',199,'details2.html?lid=1','1'),
(NULL,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','img/portableF1.webp',69,'details1.html?lid=2','1'),
(NULL,'各色DNA检测套装','各色DNA检测套装','img/DNAdetection.webp',499,'details1.html?lid=3','1'),
(NULL,'Smartisan T恤 皇帝的新装','&nbsp;','img/Tshit.webp',149,'details1.html?lid=4','1'),
(NULL,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','img/FMboxF1.webp',149,'details1.html?lid=5','1'),
(NULL,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','img/headsetF1.webp',59,'details1.html?lid=6','1'),
(NULL,'坚果彩虹数据线','随机发货,为生活增添一份小小惊喜','img/dataLineF1.webp',39,'details1.html?lid=7','1'),
(NULL,'Smartisan 双口 & 快充车载充电器','铝合金机身、双口 & 快充、智能调节','img/carchargerF1.webp',79,'details1.html?lid=8','1'),
(NULL,'','','img/F2img.jpg','','details1.html?lid=9','2'),
(NULL,'地平线 8 号 28 寸旅行箱','一款让旅行箱挑剔者满意的旅行箱','img/luggageF2.webp',599,'details1.html?lid=10','2'),
(NULL,'地平线 8 号 全功能城市背包 Atlas X','一款通行城市的全功能双肩包','img/schoolbagF2.webp',69,'details1.html?lid=11','2'),
(NULL,'Smartisan T恤 经典款','','img/T1F2.webp',149,'details1.html?lid=12','2'),
(NULL,'Smartisan T恤 皇帝的新装','','img/T2F2.webp',149,'details1.html?lid=13','2'),
(NULL,'Smartisan T恤 红白机','','img/T3F2.webp',149,'details1.html?lid=14','2'),
(NULL,'Smartisan T恤 萌锤','','img/T4F2.webp',149,'details1.html?lid=15','2'),
(NULL,'','','img/IMGf3.jpg','','details1.html?lid=16','3'),
(NULL,'畅呼吸智能空气净化器 · 超级除甲醛版','超强除甲醛能力，超低噪音，智能操控','img/purifierF3.webp','2999','details1.html?lid=17','3'),
(NULL,'畅呼吸除霾除甲醛高效复合滤芯','精选防护材质、过滤更精细、去味更有效','img/breatheF3.webp','699','details1.html?lid=18','3'),
(NULL,'','','img/IMGF4.jpg','','details1.html?lid=19','4'),
(NULL,'Smartisan 耳机转接头','别即插即用、全面兼容','img/headsetfirst.webp','19','details1.html?lid=20','4'),
(NULL,'Smartisan 双口 & 快充车载充电器','铝合金机身、双口 & 快充、智能调节','img/carchargerF4.webp','79','details1.html?lid=21','4'),
(NULL,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','img/headsetF4.webp','59','details1.html?lid=22','4'),
(NULL,'坚果彩虹数据线','七彩随机发货，为生活增添一份小小惊喜','img/dataLineF4.webp','19','details1.html?lid=23','4'),
(NULL,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','img/portableF4.webp','69','details1.html?lid=24','4'),
(NULL,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','img/BoxF4.webp','149','details1.html?lid=25','4'),
(NULL,'','','img/IMGF5.jpg','','details1.html?lid=25','5'),
(NULL,'坚果 Pro 2S','双系统，无限屏','img/P1F5.webp','1998','details1.html?lid=26','5'),
(NULL,'坚果 R1','次世代旗舰手机，内藏来自未来的“电脑”','img/P2F5.webp','3799','details1.html?lid=27','5'),
(NULL,'坚果彩虹数据线','七彩随机发货，为生活增添一份小小惊喜','img/dataLineF4.webp','39','details1.html?lid=28','5'),
(NULL,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','img/portableF4.webp','69','details1.html?lid=29','5'),
(NULL,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','img/BoxF4.webp','149','details1.html?lid=30','5'),
(NULL,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','img/headsetF4.webp','59','details1.html?lid=31','5'),
(NULL,'[开箱] 坚果 Pro 2S 内敛骚蓝惊艳炫光...','内敛骚蓝，惊艳炫光','img/IMGF6.webp','','','6'),
(NULL,'[开箱] 坚果 Pro 2S 惊艳开箱...','全新的炫光蓝及炫光红色相当惊艳','img/IMGF6.webp','','','6'),
(NULL,'[开箱] 纯白色坚果 Pro2 图赏...','有美如斯，冰清玉洁','img/IMG3F6.webp','','','6'),
(NULL,'[合辑] 八月优秀摄影作品欣赏...','8 月的优秀作品如期而至','img/IMG4F6.webp','','','6');

/*****首页6F论坛数据*****/
CREATE TABLE hammer_index_F6 (
	Fid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128),
	subtitle VARCHAR(128),
	pic VARCHAR(128)
);

/*******插入首页6F数据************/
/**INSERT INTO hammer_index_F6 VALUES**/

















