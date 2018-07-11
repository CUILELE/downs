var all = {
	downApp: function() {
		var ua = navigator.userAgent.toLowerCase();
		if(/iphone|ipad|ipod/.test(ua)) {
			window.location.href = 'https://itunes.apple.com/app/id1352868443';
		} else if(/android/.test(ua)) {
			if(ua.match(/MicroMessenger/i) == "micromessenger") {
				$('#mask1').show();
			} else {
				window.location.href = 'http://www.hybtad.com/channelapk/autobild.apk';
			}
		}
	},
	downAppTwo: function(isoHttp,andHttp) {
		//判读微信qq浏览器，判断ios and 手机
		var uaTwo = navigator.userAgent.toLowerCase();
		
		if(uaTwo.match(/MicroMessenger/i) == "micromessenger") {
			is_ios_and(isoHttp,andHttp)
		} else if(uaTwo.match(/QQ/i) == "qq") {
			is_ios_and(isoHttp,andHttp)
		};
		
		function is_ios_and(isoHttp,andHttp){
			if(/iphone|ipad|ipod/.test(uaTwo)){
				window.location.href = isoHttp;
			}else if(/android/.test(uaTwo)){
				window.location.href = andHttp;
			}
		};
		return false;
	}
}

