// grafik Agama
let labels1 = ['Tani','Buruh Tani','Pedagang','Peternakan','PNS', 'TNI / POLRI ', 'Karyawan Swasta', 'Usaha Lainnya'];
let data1 = [202,301,62,6,62,11,345,28];
let colors1 = ['#49A9EA', '#36CAAB','#36a832','#a83232','#fff200','#000','#22ff00','#0000ff'];
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


