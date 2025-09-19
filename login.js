function validateLoginForm() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Хэрэглэгчийн нэр болон нууц үгээ оруулна уу.");
        return false; 
    }

   
    if (username == "admin" && password == "123") {
        alert("Амжилттай нэвтэрлээ");
    } else {
        alert("Хэрэглэгчийн нэр эсвэл нууц үг буруу байна");
    }
    
    return false;
}
