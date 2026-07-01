/* ==========================================================
   admin.js
   Dashboard Admin
   Absensi Shalat Fardhu Takmir
   Masjid Al-Amin Sidosermo
   Versi 2.0
========================================================== */

let rankingChart = null;

/* ==========================================================
   INIT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadDashboard();

    loadRanking();

});


/* ==========================================================
   LOAD DASHBOARD
========================================================== */

async function loadDashboard() {

    try {

        const data = await getDashboard();

        document.getElementById("totalTakmir").textContent =
            data.totalTakmir || 0;

        document.getElementById("totalAbsensi").textContent =
            data.totalAbsensi || 0;

        document.getElementById("totalShalat").textContent =
            data.totalShalat || 0;

    } catch (error) {

        console.error("Dashboard :", error);

    }

}


/* ==========================================================
   LOAD RANKING
========================================================== */

async function loadRanking() {

    try {

        const ranking = await getRanking();

        renderRanking(ranking);

        renderChart(ranking);

    } catch (error) {

        console.error("Ranking :", error);

    }

}


/* ==========================================================
   RENDER RANKING
========================================================== */

function renderRanking(ranking) {

    const tbody = document.getElementById("rankingBody");

    tbody.innerHTML = "";

    if (!ranking || ranking.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="3">
                    Belum ada data ranking.
                </td>
            </tr>
        `;

        return;

    }

    ranking.forEach((item, index) => {

        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.total}</td>
            </tr>
        `;

    });

}


/* ==========================================================
   RENDER CHART
========================================================== */

/* ==========================================================
   RENDER CHART
========================================================== */

function renderChart(ranking) {

    const top10 = ranking.slice(0, 10);

    const labels = top10.map(item => {

        if (item.nama.length > 15) {

            return item.nama.substring(0, 15) + "...";

        }

        return item.nama;

    });

    const totals = top10.map(item => item.total);

    const colors = [

        "#FFD700", // Juara 1 (Emas)
        "#C0C0C0", // Juara 2 (Perak)
        "#CD7F32", // Juara 3 (Perunggu)
        "#16a34a",
        "#16a34a",
        "#16a34a",
        "#16a34a",
        "#16a34a",
        "#16a34a",
        "#16a34a"

    ];

    const ctx = document
        .getElementById("rankingChart")
        .getContext("2d");

    if (rankingChart) {

        rankingChart.destroy();

    }

    rankingChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels,

            datasets: [{

                data: totals,

                backgroundColor: colors,

                borderRadius: 10,

                borderSkipped: false,

                hoverBackgroundColor: "#15803d"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {

                duration: 1200,

                easing: "easeOutQuart"

            },

            plugins: {

                legend: {

                    display: false

                },

                tooltip: {

                    backgroundColor: "#166534",

                    titleColor: "#fff",

                    bodyColor: "#fff",

                    displayColors: false,

                    callbacks: {

                        label(context) {

                            return " Kehadiran : " + context.raw;

                        }

                    }

                }

            },

            scales: {

                x: {

                    grid: {

                        display: false

                    },

                    ticks: {

                        maxRotation: 45,

                        minRotation: 20

                    }

                },

                y: {

                    beginAtZero: true,

                    ticks: {

                        precision: 0,

                        stepSize: 1

                    }

                }

            }

        }

    });

}