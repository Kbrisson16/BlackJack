window.onload = function () {
    document.getElementById("ChangePasswordButton").onclick = function () {
        location.href = "ChangePassword.html";
    }
    document.getElementById("DeleteAccountButton").onclick = function () {
        location.href = "DeleteAccount.html";
    }
    document.getElementById("SavePasswordButton").onclick = function () {
        location.href = "Settings.html";
    }
  
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
