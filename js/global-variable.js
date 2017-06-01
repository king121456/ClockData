/*! 前端js文件压缩 */
var version = "1476416004941",
	URL_NAME = "http://" + location.hostname + ("" != location.port ? ":" + location.port : "") + "/",
	URL_NAME_ADMIN = URL_NAME + "wodaola-admin/",
	WORKTIMETODAY = 13,
	TimesWorkTimeToday = 0,
	Times = 0,
	Thread = null,
	regName = /^[\u4E00-\u9FA5\uF900-\uFA2D\w\s]+$/,
	regCompanyName = /^[\u4E00-\u9FA5\uF900-\uFA2D\w\s\u0028\u0029\u002D\u002E\u0026]+$/g;
jQuery.support.cors = !0, $.getScript = function(url, callback) {
	$.ajax({
		type: "GET",
		url: url + "?v=" + version,
		async: !1,
		success: callback || {},
		dataType: "script",
		ifModified: !0,
		cache: !0
	})
}, jQuery.fn.extend({
	animation: function(animate) {
		this.css({
			visibility: "visible",
			"-webkit-animation": animate,
			"-moz-animation": animate,
			"-o-animation": animate
		})
	},
	animationStar: function(animate) {
		this.css({
			visibility: "visible",
			"-webkit-animation": animate,
			"-moz-animation": animate,
			"-o-animation": animate
		})
	},
	dropReasonList: function() {
		var phoneWidth = window.screen.width,
			phoneHeight = window.screen.height;
		$(".Mask").css({
			width: phoneWidth + "px",
			height: phoneHeight + "px",
			display: "block"
		}), this.css({
			display: "block",
			"box-shadow": "1px 1px 2px #FAFBFC",
			bottom: "-300px",
			padding: "10px 15px",
			height: "320",
			width: "100%"
		}).animate({
			bottom: "0px"
		}, 100, "swing")
	}
}), Date.prototype.format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		S: this.getMilliseconds()
	};
	/(y+)/.test(fmt) && (fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
	for(var k in o) new RegExp("(" + k + ")").test(fmt) && (fmt = fmt.replace(RegExp.$1, 1 == RegExp.$1.length ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
	return fmt
};
var seeyon = {
	loadingShow: function(msg) {
		var content;
		content = void 0 == msg ? "正在加载" : msg, $.showLoading(content)
	},
	loadingHidden: function() {
		$.hideLoading()
	},
	caution: function(msg, fun) {
		void 0 == fun ? $.alert(msg, "") : $.alert(msg, "", fun)
	},
	Tback: function(url) {
		location.href = url
	},
	ajaxLink: function(URL) {
		URL += URL.indexOf("?") >= 0 ? "&v=" + version : "?v=" + version, $.ajax({
			type: "get",
			url: URL,
			async: !0,
			beforeSend: function() {
				$.showLoading("正在加载")
			},
			complete: function(data) {
				$.hideLoading(), location.href = URL
			}
		})
	},
	ajaxReplace: function(URL) {
		URL += URL.indexOf("?") >= 0 ? "&v=" + version : "?v=" + version, $.ajax({
			type: "get",
			url: URL,
			async: !0,
			beforeSend: function() {
				$.showLoading("正在加载")
			},
			complete: function(data) {
				$.hideLoading(), location.replace(URL)
			}
		})
	},
	badLinkState: function() {
		alert("网络发生异常,请重诿")
	},
	btnActiveJQ: function(url) {
		return this.css({
			background: "url(" + url + ") no-repeat",
			"background-size": "100%"
		}), this
	},
	windowCancel: function() {
		$(".dropWindow").css({
			width: "0",
			height: "0",
			"box-shadow": "0 0 7px 2px #AAA",
			display: "none",
			padding: "0"
		}), $(".Mask").css({
			display: "none"
		}), $(".dropWindow .mui-btn").removeClass("mui-btn-primary"), $("textarea").val("")
	}
};
/*! ours-wdl 最后修改于＿ 2016-10-14 */