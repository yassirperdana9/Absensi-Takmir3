/* ==========================================================
   riwayat.js
   Riwayat Absensi Takmir
   Masjid Al-Amin Sidosermo
   Versi 1.0
========================================================== */

let semuaRiwayat = [];


/* ==========================================================
   INIT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadRiwayat();

    initFilter();

});


/* ==========================================================
   LOAD RIWAYAT
========================================================== */

async function loadRiwayat() {

    try {

        semuaRiwayat = await getRiwayat();

        renderRiwayat(semuaRiwayat);

    } catch (err) {

        console.error(err);

    }

}


/* ==========================================================
   RENDER TABEL
========================================================== */

function renderRiwayat(data) {

    const tbody = document.getElementById("riwayatBody");

    tbody.innerHTML = "";

    if (!data || data.length === 0) {

        tbody.innerHTML = `

        <tr>

            <td colspan="9">

                Belum ada data absensi.

            </td>

        </tr>

        `;

        return;

    }

    data.forEach((item, index) => {

        tbody.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${item.nama}</td>

            <td>${formatTanggal(item.tanggal)}</td>

            <td>${item.subuh || "-"}</td>

            <td>${item.dzuhur || "-"}</td>

            <td>${item.ashar || "-"}</td>

            <td>${item.maghrib || "-"}</td>

            <td>${item.isya || "-"}</td>

            <td>${item.total}</td>


        </tr>

        `;

    });

}


/* ==========================================================
   FILTER
========================================================== */

function initFilter() {

    const nama = document.getElementById("searchNama");

    const tanggal = document.getElementById("filterTanggal");

    const reset = document.getElementById("btnReset");

    nama.addEventListener("input", filterRiwayat);

    tanggal.addEventListener("change", filterRiwayat);

    reset.addEventListener("click", resetFilter);

}


/* ==========================================================
   FILTER DATA
========================================================== */

function filterRiwayat() {

    const keyword = document
        .getElementById("searchNama")
        .value
        .toLowerCase()
        .trim();

    const tanggal = document
        .getElementById("filterTanggal")
        .value;

    const hasil = semuaRiwayat.filter(item => {

        const cocokNama =
            item.nama.toLowerCase().includes(keyword);

        const cocokTanggal =
            tanggal === "" ||
            item.tanggal === tanggal;

        return cocokNama && cocokTanggal;

    });

    renderRiwayat(hasil);

}


/* ==========================================================
   RESET FILTER
========================================================== */

function resetFilter() {

    document.getElementById("searchNama").value = "";

    document.getElementById("filterTanggal").value = "";

    renderRiwayat(semuaRiwayat);

}


/* ==========================================================
   FORMAT TANGGAL
========================================================== */

function formatTanggal(tanggal) {

    if (!tanggal) return "-";

    const d = new Date(tanggal);

    if (isNaN(d.getTime())) {

        return tanggal;

    }

    return d.toLocaleDateString("id-ID", {

        day: "2-digit",

        month: "long",

        year: "numeric"

    });

}

