/* ==========================================
   api.js
   Absensi Shalat Fardhu Takmir
   Masjid Al-Amin Sidosermo
========================================== */

/* ==========================================
   WEB APP URL
========================================== */

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwH3xjHvrDm_C9BSo_DDGfXA9s07QMRRRD2G521A2_aQP_5r6ZvGKN7zEXTmljxkhd3/exec";

/* ==========================================
   KIRIM DATA ABSENSI
========================================== */

async function kirimAbsensi(data) {

    try {

        const formData = new FormData();

        formData.append("data", JSON.stringify(data));

        const response = await fetch(WEB_APP_URL, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        return result;

    } catch (error) {

        console.error("Gagal mengirim data:", error);

        return {
            success: false,
            message: "Tidak dapat terhubung ke server."
        };

    }

}

/* ==========================================
   AMBIL DATA TAKMIR
   (Digunakan pada Dashboard nanti)
========================================== */

async function getTakmir() {

    try {

        const response = await fetch(

            WEB_APP_URL + "?action=takmir"

        );

        const result = await response.json();

        return result;

    } catch (error) {

        console.error(error);

        return [];

    }

}

/* ==========================================
   AMBIL RIWAYAT ABSENSI
========================================== */

async function getRiwayat() {

    try {

        const response = await fetch(

            WEB_APP_URL + "?action=riwayat"

        );

        const result = await response.json();

        return result;

    } catch (error) {

        console.error(error);

        return [];

    }

}

/* ==========================================
   AMBIL DASHBOARD
========================================== */

async function getDashboard() {

    try {

        const response = await fetch(

            WEB_APP_URL + "?action=dashboard"

        );

        const result = await response.json();

        return result;

    } catch (error) {

        console.error(error);

        return {};

    }

}

/* ==========================================
   AMBIL RANKING
========================================== */

async function getRanking() {

    try {

        const response = await fetch(

            WEB_APP_URL + "?action=ranking"

        );

        const result = await response.json();

        return result;

    } catch (error) {

        console.error(error);

        return [];

    }

}

/* ==================================================
   GET REKAP BULANAN
================================================== */

/* ==================================================
   GET REKAP BULANAN
================================================== */

async function getRekap(bulan, tahun) {

    try {

        const response = await fetch(

            `${WEB_APP_URL}?action=rekap&bulan=${bulan}&tahun=${tahun}`

        );

        if (!response.ok) {

            throw new Error("Gagal mengambil data rekap.");

        }

        return await response.json();

    }

    catch (error) {

        console.error(error);

        return [];

    }

}

/* ==================================================
   GET CHART DISTRIBUSI SHALAT
================================================== */

async function getChartShalat() {

    try {

        const response = await fetch(

            `${WEB_APP_URL}?action=chartShalat`

        );

        if (!response.ok) {

            throw new Error("Gagal mengambil data grafik.");

        }

        return await response.json();

    }

    catch (error) {

        console.error(error);

        return null;

    }

}

/* ==================================================
   GET CHART TREN BULANAN
================================================== */

async function getChartTrend() {

    try {

        const response = await fetch(

            `${WEB_APP_URL}?action=chartTrend`

        );

        if (!response.ok) {

            throw new Error("Gagal mengambil data tren.");

        }

        return await response.json();

    }

    catch (error) {

        console.error(error);

        return null;

    }

}