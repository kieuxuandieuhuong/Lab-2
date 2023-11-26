// login.js

var user = document.getElementById("user");
var password = document.getElementById("pwd");
var eyeIcon = document.getElementById("eye-icon");
var eye = document.getElementById("hide-eye");
var eyeSlash = document.getElementById("hide-eye-slash");
var login = document.getElementById("login");
var hello = document.getElementById("hello");
var name = document.getElementById("user-name");

eyeIcon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eye.style.display = "none";
        eyeSlash.style.display = "block";
    } else {
        password.type = "password";
        eye.style.display = "block";
        eyeSlash.style.display = "none";
    }
};

function loginClick() {
    login.style.display = 'none';
    hello.style.display = 'block';

    if (checkCredentials(user.value, password.value)) {
        name.innerHTML = user.value;
    } else {
        name.innerHTML = 'Tên Đăng Nhập Rỗng';
        login.style.display = 'block';
        hello.style.display = 'none';
    }
}

function logoutClick() {
    name.innerHTML = 'Tên Đăng Nhập Rỗng';
    login.style.display = 'block';
    hello.style.display = 'none';
}

function checkCredentials(username, password) {
    // Check for extra spaces, special characters, and all cases in the username
    const usernamePattern = /^[a-zA-Z\s']*$/;
    if (!usernamePattern.test(username.trim())) {
        alert("Invalid Name or Password.");
        return false;
    }

    // Check for spaces and special characters (besides @) in the password
    const passwordPattern = /^[^\s@]*$/;
    if (!passwordPattern.test(password.trim())) {
        alert("Invalid Name or Password.");
        return false;
    }

    // If all conditions pass, return true (valid credentials)
    return true;
}
