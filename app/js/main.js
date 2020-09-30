// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartId1 = document.getElementById("chart-container-jobs-stock-market");
let chartId2 = document.getElementById("chart-container-jobs-stock-market-2");


function drawHighcharts() {
    Highcharts.chart(chartId1, {
        chart: {
            type: 'scatter',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1koa-bO711pqegdZp2ecwEtnGIPJCYdvgu48NXI8HTQg',
            endRow: 162,
            endColumn: 1
        },
        // for bar charts only
        plotOptions: {
            scatter: {
                lineWidth: 1
            } ,
            series: {
                marker: {
                    radius: 3
                },
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            title: {
                text: 'S&P 500'
            },
            max: 3501,
            min: 500,
            gridLineWidth: 1,
            tickLength: 0,
            labels: {
                useHTML:!0, overflow:"allow", formatter:function() {
                    return Highcharts.numberFormat(this.value, 0, ".", ",")
                }
            }
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 15,
            min: 3,
            tickAmount: 5,
            title: {
                text: 'Unemployment rate'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        annotations: [{
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 1335.85,
                    y: 4.5
                },
                shape: 'connector',
                text: 'Sept. 2006',
                align: 'right',
                y: -10,
                x: -10,
                padding: 0
            },{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 1036.19,
                    y: 10.10
                },
                shape: 'connector',
                text: 'Oct. 2009',
                align: 'right',
                y: -10,
                x: -10,
                padding: 0
            },{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 2954.22,
                    y: 3.5
                },
                shape: 'connector',
                text: 'Feb. 2020',
                align: 'left',
                x: 20,
                padding: 0
            }]
        }],
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),
    Highcharts.chart(chartId2, {
        chart: {
            type: 'scatter',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1koa-bO711pqegdZp2ecwEtnGIPJCYdvgu48NXI8HTQg',
            endColumn: 1
        },
        // for bar charts only
        plotOptions: {
            scatter: {
                lineWidth: 1
            } ,
            series: {
                clip: false,
                marker: {
                    radius: 3
                },
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            title: {
                text: 'S&P 500'
            },
            max: 3501,
            min: 500,
            gridLineWidth: 1,
            tickLength: 0,
            labels: {
                useHTML:!0, overflow:"allow", formatter:function() {
                    return Highcharts.numberFormat(this.value, 0, ".", ",")
                }
            }
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 15,
            min: 3,
            tickAmount: 5,
            title: {
                text: 'Unemployment rate'
            },
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        annotations: [{
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 1335.85,
                    y: 4.5
                },
                shape: 'connector',
                text: 'Sept. 2006',
                align: 'right',
                y: -10,
                x: -10,
                padding: 0
            },{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 1036.19,
                    y: 10.10
                },
                shape: 'connector',
                text: 'Oct. 2009',
                align: 'right',
                y: -10,
                x: -10,
                padding: 0
            },{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 2954.22,
                    y: 3.5
                },
                shape: 'connector',
                text: 'Feb. 2020',
                align: 'left',
                x: 20,
                padding: 0
            },{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: 2912.43,
                    y: 14.7
                },
                shape: 'connector',
                text: 'April 2020',
                align: 'right',
                y: 20,
                x: -20,
                padding: 0
            }]
        }],
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}