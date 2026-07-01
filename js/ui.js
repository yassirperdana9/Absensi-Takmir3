/* ===================================================
   ui.js
   Absensi Shalat Fardhu Takmir
   Masjid Al-Amin Sidosermo
   Versi 1.1 Final
=================================================== */

/* ==========================================
   Menampilkan Pesan Status
========================================== */

function showMessage(message, type = "success") {

    const status = document.getElementById("status");

    if (!status) return;

    status.textContent = message;

    switch (type) {

        case "success":
            status.style.color = "#16a34a";
            break;

        case "error":
            status.style.color = "#dc2626";
            break;

        case "warning":
            status.style.color = "#f59e0b";
            break;

        default:
            status.style.color = "#2563eb";
            break;
    }

    setTimeout(() => {
        status.textContent = "";
    }, 4000);

}


/* ==========================================
   Loading Tombol Simpan
========================================== */

function showLoading() {

    const btn = document.querySelector("#absensiForm .btn");

    if (!btn) return;

    btn.disabled = true;
    btn.innerHTML = "⏳ Menyimpan...";

}


/* ==========================================
   Tombol Normal
========================================== */

function hideLoading() {

    const btn = document.querySelector("#absensiForm .btn");

    if (!btn) return;

    btn.disabled = false;
    btn.innerHTML = "💾 Simpan Absensi";

}


/* ==========================================
   Reset Form
========================================== */

function resetForm() {

    document.getElementById("nama").selectedIndex = 0;

    document.querySelectorAll(".checklist input").forEach(item => {
        item.checked = false;
    });

}


/* ==========================================
   Tanggal Hari Ini (Waktu Lokal)
========================================== */

function setTodayDate() {

    const input = document.getElementById("tanggal");

    if (!input) return;

    const now = new Date();

    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");

    input.value = `${yyyy}-${mm}-${dd}`;

}


/* ==========================================
   Konfirmasi Simpan
========================================== */

function konfirmasiSimpan() {

    return confirm("Apakah Anda yakin ingin menyimpan absensi?");

}