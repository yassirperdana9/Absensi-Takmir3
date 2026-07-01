/* ==========================================================
   grafik.js
   Halaman Grafik Dashboard
   Absensi Shalat Fardhu Takmir
   Masjid Al-Amin Sidosermo
   Versi 1.0
========================================================== */

let rankingChart = null;
let shalatChart = null;
let trendChart = null;

/* ==========================================================
   INIT
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadRankingChart();
/* ==========================================================
   DISTRIBUSI SHALAT
========================================================== */

async function loadShalatChart() {

    try {

        const data = await getChartShalat();

        renderShalatChart(data);

    }

    catch (error) {

        console.error(error);

    }

}

    loadShalatChart();
/* ==========================================================
   LOAD CHART TREN
========================================================== */

async function loadTrendChart() {

    try {

        const data = await getChartTrend();

        renderTrendChart(data);

    }

    catch (error) {

        console.error(error);

    }

}
    loadTrendChart();
/* ==========================================================
   PIE CHART
========================================================== */

function renderShalatChart(data) {

    const ctx = document
        .getElementById("shalatChart")
        .getContext("2d");

    if (shalatChart) {

        shalatChart.destroy();

    }

    shalatChart = new Chart(ctx, {

        type: "pie",

        data: {

            labels: [

                "Subuh",
                "Dzuhur",
                "Ashar",
                "Maghrib",
                "Isya"

            ],

            datasets: [{

                data: [

                    data.subuh,
                    data.dzuhur,
                    data.ashar,
                    data.maghrib,
                    data.isya

                ],

                backgroundColor: [

                    "#16a34a",
                    "#22c55e",
                    "#84cc16",
                    "#f59e0b",
                    "#3b82f6"

                ]

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom"

                }

            }

        }

    });

}
});


/* ==========================================================
   TOP 10 KEHADIRAN
========================================================== */

async function loadRankingChart() {

    try {

        const ranking = await getRanking();

        renderRankingChart(ranking);

    }

    catch (error) {

        console.error(error);

    }

}


/* ==========================================================
   RENDER BAR CHART
========================================================== */

function renderRankingChart(ranking) {

    const top10 = ranking.slice(0, 10);

    const labels = top10.map(item => item.nama);

    const totals = top10.map(item => item.total);

    const colors = [

        "#FFD700",
        "#C0C0C0",
        "#CD7F32",
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

                label: "Jumlah Kehadiran",

                data: totals,

                backgroundColor: colors,

                borderRadius: 8

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        precision: 0

                    }

                }

            }

        }

    });

}


/* ==========================================================
   PIE CHART (Placeholder)
========================================================== */

function renderPlaceholderPie() {

    const ctx = document
        .getElementById("shalatChart")
        .getContext("2d");

    shalatChart = new Chart(ctx, {

        type: "pie",

        data: {

            labels: [

                "Subuh",
                "Dzuhur",
                "Ashar",
                "Maghrib",
                "Isya"

            ],

            datasets: [{

                data: [1,1,1,1,1],

                backgroundColor: [

                    "#16a34a",
                    "#22c55e",
                    "#84cc16",
                    "#f59e0b",
                    "#3b82f6"

                ]

            }]

        },

        options: {

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                title:{

                    display:true,

                    text:"Segera tersedia"

                }

            }

        }

    });

}


/* ==========================================================
   LINE CHART (Placeholder)
========================================================== */

/* ==========================================================
   LINE CHART TREN BULANAN
========================================================== */

function renderTrendChart(chartData) {

    const ctx = document
        .getElementById("trendChart")
        .getContext("2d");

    if (trendChart) {

        trendChart.destroy();

    }

    trendChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: chartData.labels,

            datasets: [{

                label: "Jumlah Kehadiran",

                data: chartData.data,

                borderColor: "#16a34a",

                backgroundColor: "rgba(22,163,74,.15)",

                fill: true,

                tension: .35,

                pointRadius: 5,

                pointBackgroundColor: "#16a34a"

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        precision: 0

                    }

                }

            }

        }

    });

}