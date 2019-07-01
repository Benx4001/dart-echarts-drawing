const echarts = require("echarts");


const lineOptions = {
    title: null,
    tooltip: {
        trigger: 'axis'
    },
    legend: null,
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    calculable: true,
    xAxis: [],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} 辆'
            }
        }
    ],
    series: []
};



function drawLine(target, title, legend, titles, data, unit) {

    var chart = echarts.init(target);
    lineOptions.legend = legend;
    lineOptions.title = title;
    lineOptions.xAxis[0] = titles;
    lineOptions.series = data;
    lineOptions.yAxis[0].axisLabel.formatter = `{value} ${unit}`;
    chart.setOption(lineOptions);

}

function sayHello(target, str) {
    target.innerHTML = str;

}


module.exports = { drawLine, sayHello };


