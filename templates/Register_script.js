
alert("kk");

function RegisterCheck() {
    var x = document.getElementById("name");
    var p1 = document.getElementById("code");
    var p2 = document.getElementById("confirm");
    var phone = document.getElementById("phoneNumber");
    var mail = document.getElementById("mail");
    var ifagree = document.getElementById("agree");


    var oError1 = document.getElementById("box1");
    var oError2 = document.getElementById("box2");
    var oError3 = document.getElementById("box3");
    var oError4 = document.getElementById("box4");
    var oError5 = document.getElementById("box5");
    var oError6 = document.getElementById("box6");
    var jump = true;
    if(x.value.length>20 || x.value.length < 6){
        x.style.borderColor = "crimson";
        oError1.innerHTML = "用户名必须为6-20位字符";
        jump = false;
    }else if(x.value.charCodeAt(0)>=48  && x.value.charCodeAt(0)<=57){
        x.style.borderColor = "crimson";
        oError1.innerHTML = "首字符必须为字母";
        jump = false;
    }

    if(p1.value.length>20 || p1.value.length<6){
        p1.style.borderColor = "crimson";
        oError2.innerHTML = "密码必须为6-20位字符";
        jump = false;
    }
    if(p1.value!= p2.value){
        p2.style.borderColor = "crimson";
        oError3.innerHTML = "两次输入的密码必须一致";
        jump = false;
    }
    if(!/^1[3-9]\d{9}$/.test(phone.value)){
        phone.style.borderColor = "crimson";
        oError4.innerHTML = "手机号码格式不合法";
        jump = false;
    }
    if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(mail.value)){
        mail.style.borderColor = "crimson";
        oError5.innerHTML = "邮箱格式不合法";
        jump = false;
    }

    if(jump == true){
        alert("注册成功!");
        window.location.href = "login.html";
    }
}

function getback() {
    window.location.href = 'login.html';
}