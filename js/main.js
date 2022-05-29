var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.04, // The line thickness
    radiusScale: 0.95, // Relative radius
    pointer: {
      length: 0.54, // // Relative to gauge radius
      strokeWidth: 0.022, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6F6EA0',   // Colors
    colorStop: '#C0C0DB',    // just experiment with them
    strokeColor: '#EEEEEE',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]],
    staticLabels: {
        font: "8px sans-serif",  // Specifies font
        labels: [0, 10, 20, 30, 40, 50, 60],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
  staticZones: [
    {strokeStyle: "rgb(92 214 92)", min: 0, max: 15, height: 1},
    {strokeStyle: "rgb(255 255 128)", min: 15, max: 30, height: 1},
    {strokeStyle: "rgb(255 184 77)", min: 30, max: 45, height: 1},
    {strokeStyle: "rgb(255 51 51)", min: 45, max: 60, height: 1},
  ],
  
    
  };
  var target = document.getElementById('guage-1'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 60; // set max gauge value
  gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 47; // set animation speed (32 is default value)
  gauge.set(15); // set actual value

  var target2 = document.getElementById('guage-2'); // your canvas element
  var gauge2 = new Gauge(target2).setOptions(opts); // create sexy gauge!
  gauge2.maxValue = 60; // set max gauge value
  gauge2.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge2.animationSpeed = 47; // set animation speed (32 is default value)
  gauge2.set(30); // set actual value

  var target3 = document.getElementById('guage-3'); // your canvas element
  var gauge3 = new Gauge(target3).setOptions(opts); // create sexy gauge!
  gauge3.maxValue = 60; // set max gauge value
  gauge3.setMinValue(0);  // Prefer setter over gauge.minValue = 0
  gauge3.animationSpeed = 47; // set animation speed (32 is default value)
  gauge3.set(20); // set actual value


$(document).ready(function () {
    Chart.defaults.font.size = 8;

    const ctx4 = document.getElementById('gragh-line-chart1').getContext('2d');
    const myChart = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
            datasets: [{
                label: 'Todays Cases',
                data: [30, 59, 100, 84, 150, 200],
                fill: false,
                borderColor: 'rgb(75, 192, 192)'
              }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });

    const ctx5 = document.getElementById('gragh-line-chart2').getContext('2d');
    const myChart2 = new Chart(ctx5, {
        type: 'pie',
        data: {
            labels: [                
                'Info',
                'Error',
                'Warning',
                'Success',
              ],
              datasets: [{
                label: 'Active Surveyors',
                data: [30, 30, 10, 25],
                backgroundColor: [
                  'rgb(230, 192, 104)',
                  'rgb(219, 107, 42)',
                  'rgb(203, 21, 12)',
                  'rgb(50, 131, 91)'
                ],
                hoverOffset: 4
              }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });

    const ctx6 = document.getElementById('gragh-line-chart3').getContext('2d');
    const myChart3 = new Chart(ctx6, {
        type: 'bar',
        data: {
            labels: [                
                'FB',
                'Insta',
                'Other',
                'Web',
                'Agent',
              ],
              datasets: [{
                label: 'Cases Registered',
                data: [10, 30, 80, 25, 60],
                backgroundColor: [
                  'rgb(230, 192, 104)',
                  'rgb(219, 107, 42)',
                  'rgb(203, 21, 12)',
                  'rgb(50, 131, 91)'
                ],
                hoverOffset: 4
              }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });



    const ctx8 = document.getElementById('gragh-line-chart4').getContext('2d');
    const myChart8 = new Chart(ctx8, {
        type: 'line',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
            datasets: [{
                label: 'Todays Cases',
                data: [30, 59, 100, 84, 150, 200],
                fill: false,
                borderColor: 'rgb(75, 192, 192)'
              }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });



    const ctx7 = document.getElementById('gragh-line-chart5').getContext('2d');
    const myChart4 = new Chart(ctx7, {
        type: 'bar',
        data: {
            labels: [                
                'FB',
                'Insta',
                'Other',
                'Web',
                'Agent',
              ],
              datasets: [{
                label: 'Cases Registered',
                data: [10, 30, 80, 25, 60],
                backgroundColor: [
                  'rgb(230, 192, 104)',
                  'rgb(219, 107, 42)',
                  'rgb(203, 21, 12)',
                  'rgb(50, 131, 91)'
                ],
                hoverOffset: 4
              }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                }
            }
        }
    });
    
});
