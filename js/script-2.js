// grafik Agama
let labels1 = ['Jumlah Kepala Keluarga','Penduduk Usia Balita(1-5 Thn)','Penduduk Usia Sekolah(6-17 Thn)','Penduduk Usia Pemuda(18-40 Thn)','Penduduk Usia Pekerja(41-60 Thn)', 'Penduduk Usia Lansia(60 Thn Up) '];
let data1 = [1002,194,538,1013,940,457];
let colors1 = ['#49A9EA', '#36CAAB','#36a832','#a83232','#fff200','#000'];
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


