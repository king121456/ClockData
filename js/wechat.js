var monthEnum = {"Jan":1,"Feb":2,"Mar":3,"Apr":4,"May":5,"Jun":6,"Jul":7,"Aug":8,"Sep":9,"Oct":10,"Nov":11,"Dec":12};
var weekEnum = {"Mon":"星期一","Tue":"星期二","Wed":"星期三","Thu":"星期四","Fri":"星期五","Sat":"星期六","Sun":"星期日"};

function QClass(className){
		return document.getElementsByClassName(className)[0];
}
	function QSelector(className){
		return document.querySelector(className);
}
var initAttnDate = function(dateTime){
		//时间戳转日期对象
		var times = new Date;
		times.setTime(dateTime);
		//解析日期
		var _point = times.toString().split(" ");
		var _week = _point[0];
		var _month = _point[1];
		var _date = _point[2];
		var _year = _point[3];
		var _time = _point[4];
		var _timePoint = _time.split(":")[0];
		//初始化日期
		_month = eval("monthEnum."+_point[1]);
		QClass("header_date_week").innerHTML = eval("weekEnum."+_week);
		QClass("header_date_date").innerHTML = "<p class='header_date_time'>"+_year+"年"+_month+"月"+_date+"日</p><img class='signDayIcon'/><span class='header_date_text'></span>";
		//词库
		var wisdomArr = [
	                    "天上掉不下馅饼，时间捎不来战果，撸起袖子加油干，把满满的劲头使出来，才能不辜负这一历史际遇。——习近平",
						"小康不小康，关键在老乡。——习近平",
						"中国是世界上最大的发展中国家，一直是世界减贫事业的积极倡导者和有力推动者。——习近平",
						"改革开放30多年来，中国人民积极探索、顽强奋斗，走出了一条中国特色减贫道路。——习近平",
						"要看真贫、扶真贫、真扶贫。——习近平",
						"扶贫开发要增强紧迫感，真抓实干，不能光喊口号，决不能让困难地区和困难群众掉队。——习近平",
						"牢固树立政治意识、大局意识、核心意识、看齐意识，坚定不移抓好各项重大改革举措。——习近平",
						"面向未来，面对挑战，全党同志一定要不忘初心、继续前进。——习近平",
						"文化自信，是更基础、更广泛、更深厚的自信。——习近平",
						"大家撸起袖子加油干，我们就一定能够走好我们这一代人的长征路。——习近平",
						"贫困之冰，非一日之寒；破冰之功，非一春之暖。—习近平",
						"脱贫不要脱离实际随意提前，所有扶贫地区的领导干部都要坚守岗位。—习近平",
						"扶贫开发贵在精准，重在精准，成败之举在于精准，需要下一番“绣花”功夫。—习近平",
						"脱贫攻坚一定要扎扎实实，我们的时间表就是到2020年实现全面建成小康社会，还有几年时间，不要脱离实际随意提前，这样的提前就容易掺水。—习近平",
						
						"天上掉不下馅饼，时间捎不来战果，撸起袖子加油干，把满满的劲头使出来，才能不辜负这一历史际遇。——习近平",
						"小康不小康，关键在老乡。——习近平",
						"中国是世界上最大的发展中国家，一直是世界减贫事业的积极倡导者和有力推动者。——习近平",
						"改革开放30多年来，中国人民积极探索、顽强奋斗，走出了一条中国特色减贫道路。——习近平",
						"要看真贫、扶真贫、真扶贫。——习近平",
						"扶贫开发要增强紧迫感，真抓实干，不能光喊口号，决不能让困难地区和困难群众掉队。——习近平",
						"牢固树立政治意识、大局意识、核心意识、看齐意识，坚定不移抓好各项重大改革举措。——习近平",
						"面向未来，面对挑战，全党同志一定要不忘初心、继续前进。——习近平",
						"文化自信，是更基础、更广泛、更深厚的自信。——习近平",
						"大家撸起袖子加油干，我们就一定能够走好我们这一代人的长征路。——习近平",
						"贫困之冰，非一日之寒；破冰之功，非一春之暖。—习近平",
						"脱贫不要脱离实际随意提前，所有扶贫地区的领导干部都要坚守岗位。—习近平",
						"扶贫开发贵在精准，重在精准，成败之举在于精准，需要下一番“绣花”功夫。—习近平",
						"脱贫攻坚一定要扎扎实实，我们的时间表就是到2020年实现全面建成小康社会，还有几年时间，不要脱离实际随意提前，这样的提前就容易掺水。—习近平",
		                 
		                 "夫志当存高远。——诸葛亮","志向和热爱是伟大行为的双翼。——歌德","古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。——苏轼","雄心壮志是茫茫黑夜中的北斗星。——勃朗宁","真正的才智是刚毅的志向。——拿破仑","贫而懒惰乃真穷，贱而无志乃真贱。——罗丹","人若有志，万事可为。——斯迈尔斯","让自己的内心藏着一条巨龙，既是一种苦刑，也是一种乐趣。——雨果","目标越接近，困难越增加。——歌德","立志是读书人最要紧的一件事。——孙中山","伟大的人物都走过了荒沙大漠，才登上光荣的高峰。——巴尔扎克","浪费时间是所有支出中最奢侈及最昂贵的。——富兰克林","人生太短，要干的事太多，我要争分夺秒。——爱迪生","对时间的慷慨，就等于慢性自杀。——奥斯特洛夫斯基","莫等闲，白了少年头，空悲切。——岳飞","谁虚度年华，青春就要裉色，生命就会抛弃他们。——雨果","所虑时光疾，常怀紧迫情，蹒跚行步慢，落后最宜鞭。——董必武","多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕。——毛泽东","世界抛弃了我，可还有篮球陪着我——科比","现在他们确实比我强，但我相信在不久的将来会打败他们——姚明","我把每一场比赛都当作我最后的一场比赛来打——艾弗森","我可以接受失败，但无法接受放弃——乔丹","我从不惧怕任何对手，只怕对手不够强大-乔丹","我们必须检讨自己，我们必须改进。——托雷斯","艰难的时刻总会过去,只要你能坚持下来。——贝克汉姆","人生的经验里都会经过一个失败的教训，也会经过成功的快乐。——吴宇森","我绝不会说我是天下第一，可是我也绝不会承认我是第二。——李小龙","做人要诚恳，认真，努力，少抱怨。——成龙","你想用卖糖水来度过余生，还是想要一个机会来改变世界？——乔布斯","最可怕的敌人，就是没有坚强的信念。——比尔·盖茨","坚持下去，成功就在下一个街角处等着你。——比尔·盖茨","当你成功的时候，你说的所有话都是真理。——马云","如果早起的那只鸟没有吃到虫子，那就会被别的鸟吃掉。——马云","别人是求学问，我是抢学问。——李嘉诚","我从来不曾有过自我怀疑。我从来不曾灰心过。——巴菲特","我们应集中关注将要发生什么，而不是什么时候发生。——巴菲特","优美的姿态，来源于与知识同行而不是独行。——奥黛丽·赫本","世界是一面镜子，你笑它便笑。——卓别林","有理想的人，生活总是火热的。 ——斯大林","平日多流汗 , 战时少流血。——埃尔温·隆美尔"]
		var wisdomLength = wisdomArr.length;
		var num = parseInt(Math.random()*(wisdomLength-1));
		QClass("message_left_tip").innerHTML = wisdomArr[num];
		if( _timePoint >=6 && _timePoint<12 ){
			QClass("message_left_title").innerHTML = "早上好 ^.^";
			setStyle("city1","bg1","login_history2","login_check2","login_workin1","login_workout1","#0e5162","#fff","#fdec94");
			QClass('bg_sky').style.background = "url(../img/morning.jpg) no-repeat";
			QClass('bg_sky').style.backgroundSize = "cover";
		}else if(  _timePoint >=12 && _timePoint <18  ){
			QClass("message_left_title").innerHTML = "下午好 ^.^";
			setStyle("city2","bg2","login_history2","login_check2","login_workin1","login_workout1","#fff","#fff","#73b5ff");
			QClass('bg_sky').style.background = "url(../img/afternoon.jpg) no-repeat";
			QClass('bg_sky').style.backgroundSize = "cover";
		}else{
			QClass("message_left_title").innerHTML = "晚上好 ^.^";
			setStyle("city3","bg3","login_history3","login_check3","login_workin2","login_workout2","#f3eff0","#f3eff0","#f3eff0");
			QClass('bg_sky').style.background = "url(../img/evening.jpg) no-repeat";
			QClass('bg_sky').style.backgroundSize = "cover";
		}
		return times;
	};
