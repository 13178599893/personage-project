$(function(){
    //验证函数
    function vail($txt,reg,msg){
        var $txt=$txt
        if(reg.test($txt.val())){
            console.log(1)
            $txt.next().html(`<img class="w-25"  src='img/success.png'>`).css({
                top:"45px",left:"480px"
            })
        }else{
            $txt.next().html(`<img  src='img/fail.png'>${msg}`).css({
                top:"90px",
                left:"120px"
            })
        }
    }


    var $txtName=$("#uname");
    var $phone=$("#phone");
    var $email=$("#email");
    var $pwdName=$("#upwd");
    var $upwd=$("#uupwd");
    //用户名
    $txtName.blur(function(){
        
       vail($(this),/^\w{6,16}$/,"用户名必须介于6到16位")
       
    })

    //手机验证框
    $phone.blur(function(){
        vail($(this),/^1[3-9]\d{9}$/,"手机号码格式错误")
    })

    //邮箱验证
    $email.blur(function(){
        vail($(this),/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,"邮箱格式错误")
    })

    //密码框
    $pwdName.blur(function(){
        vail($(this),/^(?![a-z0-9]+$)(?![A-Za-z]+$)[A-Za-z0-9]{8,16}$/,"密码至少包含一个大写字母和一位数字,长度6~12")
           
        })

    $upwd.blur(function(){
        $txt=$(this)
        if($pwdName.val()==$upwd.val()){
            $txt.next().html(`<img class="w-25"  src='img/success.png'>`).css({
                top:"45px",left:"480px"
            })
        }else{
            $txt.next().html(`<img  src='img/fail.png'>两次密码不一致`).css({
                top:"90px",
                left:"120px"
            })
        }
        }
    )










    //不可删
})