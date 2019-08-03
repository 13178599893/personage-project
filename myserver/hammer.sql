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
(NULL,'Smartisan 帆布鞋','一双踏实、舒适的帆布鞋','img/plimsollsshop.webp',199,'details-shoe.html?lid=1','1'),
(NULL,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','img/portableF1.webp',69,'details1.html?lid=2','1'),
(NULL,'各色DNA检测套装','各色DNA检测套装','img/DNAdetection.webp',499,'details1.html?lid=3','1'),
(NULL,'Smartisan T恤 皇帝的新装','&nbsp;','img/Tshit.webp',149,'details1.html?lid=4','1'),
(NULL,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','img/FMboxF1.webp',149,'details1.html?lid=5','1'),
(NULL,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','img/headsetF1.webp',59,'details1.html?lid=6','1'),
(NULL,'坚果彩虹数据线','随机发货,为生活增添一份小小惊喜','img/dataLineF1.webp',39,'details1.html?lid=7','1'),
(NULL,'Smartisan 双口 & 快充车载充电器','铝合金机身、双口 & 快充、智能调节','img/carchargerF1.webp',79,'details1.html?lid=8','1'),
(NULL,'','','img/F2img.jpg','','','2'),
(NULL,'地平线 8 号 28 寸旅行箱','一款让旅行箱挑剔者满意的旅行箱','img/luggageF2.webp',599,'details1.html?lid=10','2'),
(NULL,'地平线 8 号 全功能城市背包 Atlas X','一款通行城市的全功能双肩包','img/schoolbagF2.webp',69,'details1.html?lid=11','2'),
(NULL,'Smartisan T恤 经典款','','img/T1F2.webp',149,'details1.html?lid=12','2'),
(NULL,'Smartisan T恤 皇帝的新装','','img/T2F2.webp',149,'details1.html?lid=13','2'),
(NULL,'Smartisan T恤 红白机','','img/T3F2.webp',149,'details1.html?lid=14','2'),
(NULL,'Smartisan T恤 萌锤','','img/T4F2.webp',149,'details1.html?lid=15','2'),
(NULL,'','','img/IMGf3.jpg','','','3'),
(NULL,'畅呼吸智能空气净化器 · 超级除甲醛版','超强除甲醛能力，超低噪音，智能操控','img/purifierF3.webp','2999','details1.html?lid=17','3'),
(NULL,'畅呼吸除霾除甲醛高效复合滤芯','精选防护材质、过滤更精细、去味更有效','img/breatheF3.webp','699','details1.html?lid=18','3'),
(NULL,'','','img/IMGF4.jpg','','','4'),
(NULL,'Smartisan 耳机转接头','别即插即用、全面兼容','img/headsetfirst.webp','19','details1.html?lid=20','4'),
(NULL,'Smartisan 双口 & 快充车载充电器','铝合金机身、双口 & 快充、智能调节','img/carchargerF4.webp','79','details1.html?lid=21','4'),
(NULL,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','img/headsetF4.webp','59','details1.html?lid=22','4'),
(NULL,'坚果彩虹数据线','七彩随机发货，为生活增添一份小小惊喜','img/dataLineF4.webp','19','details1.html?lid=23','4'),
(NULL,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','img/portableF4.webp','69','details1.html?lid=24','4'),
(NULL,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','img/BoxF4.webp','149','details1.html?lid=25','4'),
(NULL,'','','img/IMGF5.jpg','','','5'),
(NULL,'坚果 Pro 2S','双系统，无限屏','img/P1F5.webp','1998','details1.html?lid=27','5'),
(NULL,'坚果 R1','次世代旗舰手机，内藏来自未来的“电脑”','img/P2F5.webp','3799','details1.html?lid=28','5'),
(NULL,'坚果彩虹数据线','七彩随机发货，为生活增添一份小小惊喜','img/dataLineF4.webp','39','details1.html?lid=29','5'),
(NULL,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','img/portableF4.webp','69','details1.html?lid=30','5'),
(NULL,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','img/BoxF4.webp','149','details1.html?lid=31','5'),
(NULL,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','img/headsetF4.webp','59','details1.html?lid=32','5'),
(NULL,'[开箱] 坚果 Pro 2S 内敛骚蓝惊艳炫光...','内敛骚蓝，惊艳炫光','img/IMGF6.webp','','','6'),
(NULL,'[开箱] 坚果 Pro 2S 惊艳开箱...','全新的炫光蓝及炫光红色相当惊艳','img/IMGF6.webp','','','6'),
(NULL,'[开箱] 纯白色坚果 Pro2 图赏...','有美如斯，冰清玉洁','img/IMG3F6.webp','','','6'),
(NULL,'[合辑] 八月优秀摄影作品欣赏...','8 月的优秀作品如期而至','img/IMG4F6.webp','','','6');

/*****首页6F论坛数据*****/
CREATE TABLE hammer_index_F6 (
	lid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128),
	subtitle VARCHAR(128),
	pic VARCHAR(128)
);

/*******插入首页6F数据************/
/**INSERT INTO hammer_index_F6 VALUES**/





/*****详情页信息与图片******/
CREATE TABLE hammer_details_products(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128),	#标题
	subtitle VARCHAR(128),	#子标题
	price DECIMAL(10,2),	#价格
	picblack VARCHAR(56),	#黑色图片
	picwhite VARCHAR(56),	#白色图片
	picblue VARCHAR(56),	#蓝色图片
	sku INT,		#库存
	detailspic VARCHAR(255) #详情图片
);

INSERT INTO hammer_details_products VALUES
(2,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源',69,'img/01.webp','img/02.webp','img/03.webp',50,'img/01_1.webp,img/01_2.webp,img/01_3.webp,img/01_4.webp,img/01_5.webp,img/01_6.webp,img/01_7.webp,img/01_8.webp,img/01_9.webp,img/01_10.webp'),

(3,'各色DNA检测套装','各色DNA检测套装',499,'img/11.webp','img/12.webp','img/13.webp',60,'img/11_1.webp,img/11_2.webp,img/11_3.webp,img/11_4.webp,img/11_5.webp,img/11_6.webp,img/11_7.webp,img/11_8.webp,img/11_9.webp,img/11_10.webp,img/11_11.webp'),

(4,'Smartisan T恤 皇帝的新装','皇帝的新装',149,'img/21.webp','img/22.webp','img/23.webp',77,'img/21_1.webp,img/21_2.webp,img/21_3.webp,img/21_4.webp,img/21_5.webp'),

(5,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱',149,'img/31.webp','img/32.webp','img/33.webp',58,'img/31_1.webp,img/31_2.webp,img/31_3.webp,img/31_4.webp,img/31_5.webp,img/31_6.webp,img/31_7.webp,img/31_8.webp,img/31_9.webp,img/31_10.webp'),

(6,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风',59,'img/41.webp','img/42.webp','img/43.webp',100,'img/41_1.webp,img/41_2.webp,img/41_3.webp,img/41_4.webp,img/41_5.webp,img/41_6.webp,img/41_7.webp,img/41_8.webp,img/41_9.webp,img/41_10.webp,img/41_11.webp'),

(7,'坚果彩虹数据线','随机发货,为生活增添一份小小惊喜',39,'img/51.webp','img/52.webp','img/53.webp',105,'img/51_1.webp,img/51_2.webp,img/51_3.webp,img/51_4.webp,img/51_5.webp,img/51_6.webp,img/51_7.webp'),

(8,'Smartisan 双口 & 快充车载充电器','铝合金机身、双口 & 快充、智能调节',79,'img/71.webp','img/72.webp','img/73.webp',105,'img/71_1.webp,img/71_2.webp,img/71_3.webp,img/71_4.webp,img/71_5.webp,img/71_6.webp,img/71_7.webp,img/71_8.webp,img/71_9.webp,img/71_10.webp'),

(10,'地平线 8 号 28 寸旅行箱','一款让旅行箱挑剔者满意的旅行箱',599,'img/81.webp','img/82.webp','img/83.webp',105,'img/81_1.webp,img/81_2.webp,img/81_3.webp,img/81_4.webp,img/81_5.webp,img/81_6.webp,img/81_7.webp,img/81_8.webp'),

(11,'地平线 8 号 全功能城市背包 Atlas X','一款通行城市的全功能双肩包',69,'img/91.webp','img/92.webp','img/93.webp',155,'img/91_1.webp,img/91_2.webp,img/91_3.webp,img/91_4.webp,img/91_5.webp,img/91_6.webp,img/91_7.webp,img/91_8.webp,img/91_9.webp'),

(12,'Smartisan T恤 经典款','Smartisan T恤 经典款',149,'img/101.webp','img/102.webp','img/103.webp',95,'img/21_1.webp,img/21_2.webp,img/21_3.webp,img/21_4.webp,img/21_5.webp'),

(13,'Smartisan T恤 皇帝的新装','皇帝的新装',149,'img/111.webp','img/112.webp','img/113.webp','35','img/21_1.webp,img/21_2.webp,img/21_3.webp,img/21_4.webp,img/21_5.webp'),

(14,'Smartisan T恤 红白机','皇帝的新装',149,'img/121.webp','img/122.webp','img/123.webp','25','img/21_1.webp,img/21_2.webp,img/21_3.webp,img/21_4.webp,img/21_5.webp'),

(15,'Smartisan T恤 萌锤','皇帝的新装',149,'img/131.webp','img/132.webp','img/133.webp','105','img/21_1.webp,img/21_2.webp,img/21_3.webp,img/21_4.webp,img/21_5.webp'),

(17,'畅呼吸智能空气净化器 · 超级除甲醛版','超强除甲醛能力，超低噪音，智能操控','2999','img/141.webp','img/142.webp','img/143.webp','19','img/151_1.webp,img/151_2.webp,img/151_3.webp,img/151_4.webp,img/151_5.webp,img/151_6.webp,img/151_7.webp'),

(18,'畅呼吸除霾除甲醛高效复合滤芯','精选防护材质、过滤更精细、去味更有效','699','img/151.webp','img/152.webp','img/153.webp','77','img/151_1.webp,img/151_2.webp,img/151_3.webp,img/151_4.webp,img/151_5.webp,img/151_6.webp,img/151_7.webp'),

(20,'Smartisan 耳机转接头','别即插即用、全面兼容','19','img/161.webp','img/162.webp','img/163.webp','105','img/161_1.webp,img/161_2.webp,img/161_3.webp,img/161_4.webp'),

(21,'Smartisan 双口 & 快充车载充电器','铝合金机身、双口 & 快充、智能调节','79','img/71.webp','img/72.webp','img/73.webp','105','img/71_1.webp,img/71_2.webp,img/71_3.webp,img/71_4.webp,img/71_5.webp,img/71_6.webp,img/71_7.webp,img/71_8.webp,img/71_9.webp,img/71_10.webp'),

(22,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','59','img/41.webp','img/42.webp','img/43.webp','15','img/41_1.webp,img/41_2.webp,img/41_3.webp,img/41_4.webp,img/41_5.webp,img/41_6.webp,img/41_7.webp,img/41_8.webp,img/41_9.webp,img/41_10.webp,img/41_11.webp'),

(23,'坚果彩虹数据线','七彩随机发货，为生活增添一份小小惊喜','19','img/51.webp','img/52.webp','img/53.webp','135','img/51_1.webp,img/51_2.webp,img/51_3.webp,img/51_4.webp,img/51_5.webp,img/51_6.webp,img/51_7.webp'),

(24,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','69','img/201.webp','img/202.webp','img/203.webp','105','img/201_1.webp,img/201_2.webp,img/201_3.webp,img/201_4.webp,img/201_5.webp,img/201_6.webp,img/201_7.webp,img/201_8.webp,img/201_9.webp,img/201_10.webp,img/201_11.webp'),

(25,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','149','img/211.webp','img/212.webp','img/213.webp','155','img/211_1.webp,img/211_2.webp,img/211_3.webp,img/211_4.webp,img/211_5.webp,img/211_6.webp,img/211_7.webp,img/211_8.webp,img/211_9.webp,img/211_10.webp'),

(27,'坚果 Pro 2S','双系统，无限屏','1998','img/221.webp','img/222.webp','img/223.webp','25','img/221_1.webp,img/221_2.webp,img/221_3.webp,img/221_4.webp,img/221_5.webp,img/221_6.webp,img/221_7.webp,img/221_8.webp,img/221_9.webp,img/221_10.webp,img/221_11.webp,img/221_12.webp,img/221_13.webp,img/221_14.webp'),

(28,'坚果 R1','次世代旗舰手机，内藏来自未来的“电脑”','3799','img/231.webp','img/232.webp','img/233.webp','105','img/221_1.webp,img/221_2.webp,img/221_3.webp,img/221_4.webp,img/221_5.webp,img/221_6.webp,img/221_7.webp,img/221_8.webp,img/221_9.webp,img/221_10.webp,img/221_11.webp,img/221_12.webp,img/221_13.webp,img/221_14.webp'),

(29,'坚果彩虹数据线','七彩随机发货，为生活增添一份小小惊喜','19','img/51.webp','img/52.webp','img/53.webp','135','img/51_1.webp,img/51_2.webp,img/51_3.webp,img/51_4.webp,img/51_5.webp,img/51_6.webp,img/51_7.webp'),

(30,'坚果“电池形电池”移动电源','别具一格的“全能型”移动电源','69','img/201.webp','img/202.webp','img/203.webp','105','img/201_1.webp,img/201_2.webp,img/201_3.webp,img/201_4.webp,img/201_5.webp,img/201_6.webp,img/201_7.webp,img/201_8.webp,img/201_9.webp,img/201_10.webp,img/201_11.webp'),

(31,'坚果砖式蓝牙小音箱','一款设计出色、音质出众的随身音箱','149','img/211.webp','img/212.webp','img/213.webp','155','img/211_1.webp,img/211_2.webp,img/211_3.webp,img/211_4.webp,img/211_5.webp,img/211_6.webp,img/211_7.webp,img/211_8.webp,img/211_9.webp,img/211_10.webp'),

(32,'Smartisan 半入耳式耳机','经典配色、专业调音、高品质麦克风','59','img/41.webp','img/42.webp','img/43.webp','15','img/41_1.webp,img/41_2.webp,img/41_3.webp,img/41_4.webp,img/41_5.webp,img/41_6.webp,img/41_7.webp,img/41_8.webp,img/41_9.webp,img/41_10.webp,img/41_11.webp')


