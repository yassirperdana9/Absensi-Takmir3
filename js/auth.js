/* ==========================================================
   auth.js
   Proteksi Halaman Admin
   Absensi Shalat Fardhu Takmir
   Versi 1.1
========================================================== */

/* ==========================================================
   CEK LOGIN
========================================================== */

(function () {

    const isLogin = localStorage.getItem("isLogin");

    if (isLogin !== "true") {

        window.location.href = "login.html";

    }

})();

/* ==========================================================
   INIT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", function (e) {

            e.preventDefault();

            logout();

        });

    }

});

/* ==========================================================
   LOGOUT
========================================================== */

function logout() {

    const yakin = confirm("Apakah Anda yakin ingin logout?");

    if (!yakin) return;

    localStorage.removeItem("isLogin");

    localStorage.removeItem("adminName");

    window.location.replace("login.html");

}