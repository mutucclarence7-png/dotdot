
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "student" && password === "12345") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        document.getElementById("error").innerText =
            "Invalid Student ID or Password!";
    }
}

function logout() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "block";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function showPage(page) {
    let pages = document.querySelectorAll(".page");

    pages.forEach(function(section) {
        section.classList.add("hidden");
    });

    document.getElementById(page).classList.remove("hidden");
}
