// form Validation

const btn = document.getElementById("btn_login");

btn.addEventListener("click", function () {

    const uName = document.getElementById("uName");
    const uPass = document.getElementById("uPassword");

    const p = checkUserNameValidity(uName.value);
    const q = checkPasswordValidity(uPass.value);

    if (p && q) {
        console.log({ userName: uName.value, password: uPass.value });
    } else {
        console.log("Invalid Credentials");
    }
});

function checkUserNameValidity(userName) {
    return userName.includes("@gmail.com");
}

function checkPasswordValidity(password) {
    return password.length === 6;
}