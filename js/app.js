/* ==================================================
   app.js
   Absensi Shalat Fardhu Takmir
   Masjid Al-Amin Sidosermo
   Versi 1.1 Final
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Isi tanggal otomatis
    setTodayDate();// Kunci kolom tanggal agar tidak bisa diubah
const tanggal = document.getElementById("tanggal");

tanggal.addEventListener("keydown", (e) => e.preventDefault());
tanggal.addEventListener("click", (e) => e.preventDefault());
tanggal.addEventListener("focus", () => tanggal.blur());

    // Submit form
    const form = document.getElementById("absensiForm");
    form.addEventListener("submit", submitAbsensi);

    // Tombol selesai
    document.getElementById("btnSelesai").addEventListener("click", function () {

        document.getElementById("successPage").style.display = "none";
        document.getElementById("formPage").style.display = "block";

        resetForm();
        setTodayDate();

    });

});


/* ===============================================
   SUBMIT ABSENSI
=============================================== */

async function submitAbsensi(e) {

    e.preventDefault();

    if (!konfirmasiSimpan()) return;

    showLoading();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;

    if (nama === "") {

        hideLoading();
        showMessage("Silakan pilih nama Takmir.", "error");
        return;

    }

    if (tanggal === "") {

        hideLoading();
        showMessage("Tanggal belum dipilih.", "error");
        return;

    }

    const checklist = document.querySelectorAll(".checklist input");

    const data = {

        nama: nama,
        tanggal: tanggal,

        subuh: false,
        dzuhur: false,
        ashar: false,
        maghrib: false,
        isya: false

    };

    checklist.forEach(item => {

        if (item.checked) {

            switch (item.value) {

                case "Subuh":
                    data.subuh = true;
                    break;

                case "Dzuhur":
                    data.dzuhur = true;
                    break;

                case "Ashar":
                    data.ashar = true;
                    break;

                case "Maghrib":
                    data.maghrib = true;
                    break;

                case "Isya":
                    data.isya = true;
                    break;

            }

        }

    });

    const hasil = await kirimAbsensi(data);

    hideLoading();

    if (hasil.success) {

        document.getElementById("successNama").textContent = nama;
        document.getElementById("successTanggal").textContent = tanggal;

        document.getElementById("formPage").style.display = "none";
        document.getElementById("successPage").style.display = "block";

    } else {

        showMessage(

            hasil.message || "Gagal menyimpan data.",

            "error"

        );

    }

}