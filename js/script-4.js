// grafik Agama
let labels1 = ['Posyandu Balita','Polindes','Posyandu Lansia','Posbidu','Bidan Desa', 'Puskesmas ', 'Taman Kanak-Kanak', 'SD/MI',
                 'SMP', 'SMA', 'TPQ', 'Masjid', 'Mushola', 'Pura', 'Lapangan', 'Pemakaman'];
let data1 = [4,1,2,2,1,1,2,2,0,0,4,4,7,1,3];
let colors1 = ['#49A9EA', '#36CAAB','#36a832','#a83232','#fff200','#000','#22ff00','#0000ff'  , '#36CAAA','#36a831','#a83233','#fff450','#e4e4ff','#22ff10','#0004ff'];
let myChart1 = document.getElementById("myChart").getContext('2d');
let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        } ]
    },
    responsive:true,
    maintainAspectRatio:false,
    options:{
        responsive:true,
        maintainAspectRatio:false,
        scales:{
            yAxes: [{
                ticks:{
                    beginAtZero:true
                }
            }

            ]
        }
        
    }
} );


