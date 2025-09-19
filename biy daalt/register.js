document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.querySelector("form");

    registrationForm.onsubmit = function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var dob = document.getElementById("dob").value;
        var address = document.getElementById("address").value;
        var gender = document.getElementById("gender").value;
        var province = document.getElementById("province").value;
        var occupation = document.getElementById("occupation").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;

        if (!name || !email || !phone || !dob || !address || !province|| !occupation || !password || !confirmPassword) {
            alert("Бүх талбарыг бөглөнө үү.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Нууц үг тохирохгүй байна.");
            return false;
        }
        alert("Амжилттай бүртгүүллээ!");


        return false; 
    };
});
