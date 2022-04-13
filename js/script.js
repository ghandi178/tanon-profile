// grafik Agama
let labels1 = ['Kristen','Islam','Hindu','Katolik'];
let data1 = [18,2712,310,102];
let colors1 = ['#49A9EA', '#36CAAB','#36a832','#a83232'];
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


