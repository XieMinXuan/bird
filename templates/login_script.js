

function loginCheck() {
    var x = document.getElementById("Name");
    var p = document.getElementById("code");
    var oError1 = document.getElementById("box1");
    var oError2 = document.getElementById("box2");
    var jump = true;
    if(x.value==''){
        x.style.borderColor = "crimson";
        oError1.innerHTML = '用户名不能为空！';
        jump = false;
    }
    if(x.value.length>0 && x.value.length < 6){
        x.style.borderColor = "crimson";
        oError1.innerHTML = '用户名长度不符！';
        jump = false;
    }
    if(p.value.length == 0){
        p.style.borderColor = "crimson";
        oError2.innerHTML = '密码不能为空！';
        jump = false;
    }
    if(p.value.length>0 && p.value.length <5 || p.value.length > 20){
        p.style.borderColor = "crimson";
        oError2.innerHTML = '密码长度不符！';
        jump = false;
    }
    if(jump == true){
        window.location.href = 'Home.html';
    }

}

$('#login').click(function () {
    $.post("login.json",
        {
            "name":$("#Name").val(),
            "password":$("#code").val()
        },
        function (data) {
            var json = data[0];
            if(json.success == 0){
                alert("用户名或密码错误");
            }
            else if(json.success == 1){
                window.location.href = "Home.html";
            }
        }
        )
});

