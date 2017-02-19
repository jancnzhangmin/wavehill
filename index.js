define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	require("cordova!cordova-plugin-device");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	require("cordova!com.justep.cordova.plugin.alipay");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelLoad = function(event){
    var tokenUrl="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx5726c31c9832f709&secret=1452d18439c24dc52b19df787d035c88";



    $.ajax({
        url:tokenUrl,
        type:"get",
        dataType:"JSONP",
        success:function(data){
            var token=data.access_token;
            var openid=data.openid;
            Get_User_Info(token,openid);
        }
    });




	};
	
	function Get_User_Info(token,openid)
	{
	var access_url="https://api.weixin.qq.com/cgi-bin/user/info?access_token="+token+"&openid="+openid+"&lang=zh_CN"; 
	    $.ajax({
        url:access_url,
        type:"get",
        dataType:"JSONP",
        success:function(data){
alert(data);
        }
    });
	}

	return Model;
});