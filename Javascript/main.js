window.onload = function () {
    document.getElementById("ChangePasswordButton").onclick = function () {
        location.href = "ChangePassword.ejs";
    }
    document.getElementById("DeleteAccountButton").onclick = function () {
        location.href = "DeleteAccount.ejs";
    }
    document.getElementById("SavePasswordButton").onclick = function () {
        location.href = "Settings.html";
    }
}
