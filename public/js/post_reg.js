var reg_show=function (){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
					var result=xhr.responseText
						console.log(result)
						if(result==1){
							alert("注册成功")
						}
						if(result==0){
							alert("注册失败请重试")
						}
				}
			}
			if(uname.value.length==0){
				msg1.innerHTML="用户名不能为空"
				return;
			}
			if(phone.value.length==0){
				alert("手机号不能为空")
				return;
			}
			if(email.value.length==0){
				alert("邮箱不能为空")
				return;
			}
			if(upwd.value.length==0){
				alert("密码不能为空")
				return;
			}
			if(upwd.value!==uupwd.value){
				alert("请再次确认密码");
				return;
			}
			 
			if(box.checked!==true){
				alert("请阅读法律声明和隐私条款")
				return;
			xhr.open("post","/user/v1/reg",true)
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
			var formdata="&uname="+uname.value+"&phone="+phone.value+"&email="+email.value+"&upwd="+upwd.value
			console.log(formdata)
			xhr.send(formdata);
		};
var login_show=function (){
		//1.获取xhr异步对象
		var xhr=new XMLHttpRequest();
		//4.绑定监听,接收响应
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var result=xhr.responseText
				console.log(result)
				if(result==1){
						alert("登录成功")
					}
					if(result==0){
						alert("用户名或者密码错误")
					}
				}
			}
				//非空验证
					if(uname.value=="")
					{
						alert("用户名不能为空");
						return;
						}
						if(upwd.value=="")
						{
			      alert("密码不能为空");
						return;
						}
			 //console.log(uname.value,upwd.value)
			 //2.打开连接,创建请求
			 xhr.open("get","/user/v1/login/"+uname.value+"-"+upwd.value,true)
			 //3.发送请求
			 xhr.send();
		}