/* ==========================================================
   pengaturan.js
   Pengaturan Sistem
   Absensi Shalat Fardhu Takmir
   Masjid Al-Amin Sidosermo
   Versi 1.0
========================================================== */

/* ==========================================================
   DEFAULT
========================================================== */

const DEFAULT_SETTING = {

    namaMasjid: "Masjid Al-Amin Sidosermo",

    alamatMasjid: "Sidosermo, Surabaya",

    tahun: "2026",

    username: "admin",

    password: "admin123"

};


/* ==========================================================
   INIT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadSetting();

    document
        .getElementById("btnSimpan")
        .addEventListener("click", simpanSetting);

    document
        .getElementById("btnReset")
        .addEventListener("click", resetSetting);

});


/* ==========================================================
   LOAD
========================================================== */

function loadSetting() {

    document.getElementById("namaMasjid").value =
        localStorage.getItem("namaMasjid")
        || DEFAULT_SETTING.namaMasjid;

    document.getElementById("alamatMasjid").value =
        localStorage.getItem("alamatMasjid")
        || DEFAULT_SETTING.alamatMasjid;

    document.getElementById("tahunCopyright").value =
        localStorage.getItem("tahunCopyright")
        || DEFAULT_SETTING.tahun;

    document.getElementById("usernameAdmin").value =
        localStorage.getItem("adminUsername")
        || DEFAULT_SETTING.username;

    document.getElementById("passwordAdmin").value =
        localStorage.getItem("adminPassword")
        || DEFAULT_SETTING.password;

}


/* ==========================================================
   SIMPAN
========================================================== */

function simpanSetting() {

    localStorage.setItem(

        "namaMasjid",

        document.getElementById("namaMasjid").value

    );

    localStorage.setItem(

        "alamatMasjid",

        document.getElementById("alamatMasjid").value

    );

    localStorage.setItem(

        "tahunCopyright",

        document.getElementById("tahunCopyright").value

    );

    localStorage.setItem(

        "adminUsername",

        document.getElementById("usernameAdmin").value

    );

    localStorage.setItem(

        "adminPassword",

        document.getElementById("passwordAdmin").value

    );

    alert("✅ Pengaturan berhasil disimpan.");

}


/* ==========================================================
   RESET
========================================================== */

function resetSetting() {

    if (!confirm("Reset semua pengaturan ke default?")) {

        return;

    }

    localStorage.setItem(

        "namaMasjid",

        DEFAULT_SETTING.namaMasjid

    );

    localStorage.setItem(

        "alamatMasjid",

        DEFAULT_SETTING.alamatMasjid

    );

    localStorage.setItem(

        "tahunCopyright",

        DEFAULT_SETTING.tahun

    );

    localStorage.setItem(

        "adminUsername",

        DEFAULT_SETTING.username

    );

    localStorage.setItem(

        "adminPassword",

        DEFAULT_SETTING.password

    );

    loadSetting();

    alert("✅ Pengaturan berhasil direset.");

}