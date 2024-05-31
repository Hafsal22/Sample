 
var objlogin = new Login();

Login.prototype.init = function () {
    
}

Login.prototype.Login = function () {
    var UserName = $("#txtUsername").val();
    var Password = $("#txtPassword").val();
    $.ajax({
        url: "/Home/Login",
        type: "GET",
        data: { "UserName": UserName, "Password": Password },
        dataType: "json",
        contentType: "Application/json;charset=utf-8",
        success: function (data) {
            if (data.d != "") {
                var objdata = $.parseJSON(data);
                if (objdata[0].Result == "Failed") {
                    alert("Wrong username or password");
                }
                else {
                   
                    window.location = "/Home/Dashboard";
                }

            }
            
        },
        error: function (request, status, error) {

        }
    });

}
function Login() {

}