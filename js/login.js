/* ==========================================================
   login.js
   Login Admin
   Absensi Shalat Fardhu Takmir
   Masjid Al-Amin Sidosermo
   Versi 1.0
========================================================== */

/* ==========================================================
   INIT
========================================================== */
/* ==========================================================
   DEFAULT ADMIN
========================================================== */

const DEFAULT_USERNAME = "admin";

const DEFAULT_PASSWORD = "admin123";

document.addEventListener("DOMContentLoaded", () => {

    checkLogin();

    document
        .getElementById("loginForm")
        .addEventListener("submit", loginAdmin);

});


/* ==========================================================
   LOGIN
========================================================== */

function loginAdmin(e) {

    e.preventDefault();

    const username = document
        .getElementById("username")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value
        .trim();

    const message = document
        .getElementById("loginMessage");

    if (username === "" || password === "") {

        message.textContent = "Username dan Password wajib diisi.";

        return;

    }

    const adminUsername =
    localStorage.getItem("adminUsername")
    || DEFAULT_USERNAME;

const adminPassword =
    localStorage.getItem("adminPassword")
    || DEFAULT_PASSWORD;

if (

    username === adminUsername &&
    password === adminPassword

) {

    localStorage.setItem("isLogin", "true");

    localStorage.setItem("adminName", adminUsername);

    window.location.href = "admin.html";

    return;

}

    message.textContent = "Username atau Password salah.";

}


/* ==========================================================
   CHECK LOGIN
========================================================== */

function checkLogin() {

    const isLogin = localStorage.getItem("isLogin");

    if (isLogin === "true") {

        window.location.href = "admin.html";

    }

}