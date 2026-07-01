/* ==========================================================
   rekap.js
   Rekap Absensi Takmir
   Masjid Al-Amin Sidosermo
   Versi 1.0
========================================================== */

/* ==========================================================
   INIT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initPeriode();

    document
        .getElementById("btnTampilkan")
        .addEventListener("click", loadRekap);

});


/* ==========================================================
   INISIALISASI PERIODE
========================================================== */

function initPeriode() {

    const bulan = document.getElementById("bulan");

    const tahun = document.getElementById("tahun");

    const sekarang = new Date();

    const bulanSekarang = sekarang.getMonth() + 1;

    const tahunSekarang = sekarang.getFullYear();

    bulan.value = bulanSekarang;

    tahun.innerHTML = "";

    for (let i = tahunSekarang; i >= tahunSekarang - 5; i--) {

        tahun.innerHTML += `

            <option value="${i}">

                ${i}

            </option>

        `;

    }

}


/* ==========================================================
   LOAD REKAP
========================================================== */

async function loadRekap() {

    const bulan = document.getElementById("bulan").value;

    const tahun = document.getElementById("tahun").value;

    try {

        const data = await getRekap(bulan, tahun);

        renderRekap(data);

    }

    catch (error) {

        console.error(error);

    }

}

/* ==========================================================
   RENDER TABEL
========================================================== */

function renderRekap(data) {

    const tbody = document.getElementById("rekapBody");

    tbody.innerHTML = "";

    if (!data || data.length === 0) {

        tbody.innerHTML = `

            <tr>

                <td colspan="9">

                    Belum ada data rekap.

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

                <td>${item.subuh}</td>

                <td>${item.dzuhur}</td>

                <td>${item.ashar}</td>

                <td>${item.maghrib}</td>

                <td>${item.isya}</td>

                <td>${item.total}</td>

                <td>${item.persentase}%</td>

            </tr>

        `;

    });

}