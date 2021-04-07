let option4 = {
    legend: {},
    title : {
        top:'7%',
        text: '各省年总收入(亿元)' },
    tooltip: {
        trigger: 'axis',
        showContent: false
    },
    dataset: {
        source: [
            ['product', '1995', '2000', '2005', '2010', '2015', '2018','2019'],
            ['北京', 2181.60,2768.00,3618.91,5044.61,4605.61,4605.00,5516.39,5192.47],
            ['天津', 132.75, 231.76, 509.01, 1419.51, 3298.11, 1109.85,1182.54],
            ['河北', 42.01, 141.90, 209.17, 350.71, 501.91, 646.67,740.32],
            ['山西',20.62, 49.91,116.22, 464.60, 297.10, 377.98, 409.95],
            ['内蒙古',90.52,126.45, 352.07,601.90,962.49,1272.10,1340.09],
            ['辽宁',189.01,382.65,737.77,2259.33,1636.50,1739.58,1739.03],
            ['吉林',41.48,58.04,119.52,304.92,724.14,685.85,614.96],
            ['黑龙江',60.62,189.05,340.43,762.50,395.33,537.06,645.93],
            ['上海',939.42,1612.67,3555.88,6340.92,5860.44,7261.39,8243.56],
            ['江苏',259.88,723.84,2259.74,4783.43,3527.29,4648.36,4743.56],
            ['浙江',235.91,513.97,1716.26,3930.20,6788.47,2595.79,2668.24],
            ['安徽',31.39,86.21,185.58,708.98,2262.87,3187.57,3387.69],
            ['福建',484.12,893.82,1305.29,2978.24,5561.40,2828.21,3398.45],
            ['江西',24.99,62.34,103.95,346.03,567.00,745.38,865.38],
            ['山东',153.84,315.13,780.23,2155.04,2896.48,3292.82,3413.14],
            ['河南',60.20,123.90,216.04,498.77,623.6,723.23,946.96],
            ['湖北',73.17,145.72,276.36,751.16,1671.90,2379.69,2654.16],
            ['湖南',64.93,220.78,390.24,906.22,857.72,1520.41,2250.87],
            ['广东',2392.68,4112.21,6388.05,12382.61,17884.66,20511.74,20521.31,],
            ['广西',121.09,306.61,358.93,806.15,1916.86,2777.73,3511.28],
            ['海南',80.98,108.83,128.46,322.36,248.52,770.52,972.37],
            ['重庆',125.23,138.40,264.36,703.20,1468.57,2189.89,2524.83],
            ['四川',125.32,121.87,315.95,354.09,118.87,1511.65,2023.79],
            ['贵州',28.98,60.92,101.41,129.58,231.33,317.63,345.03],
            ['云南',165.03,339.02,528.01,1323.65,2875.50,4418.00,5147.36],
            ['西藏',11.30,52.26,44.43,103.59,176.66,247.09,279.07],
            ['陕西',139.43,280.25,446.25,1015.96,2000.22,3126.66,3367.65],
            ['甘肃',20.79,54.63, 58.76,14.81,14.18,28.30 ,59.05 ],
            ['新疆', 74.36, 94.94, 100.09, 185.42, 555.89, 946.37,454.00],
            ['宁夏',1.13, 2.72,2.30, 5.99, 20.84, 55.87, 69.32],
            ['青海',2.38, 7.20,11.02, 20.45, 38.76, 36.13, 33.36]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {gridIndex: 0},
    grid: {top: '55%'},
    series: [
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
        {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},

        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '30%'],
            emphasis: {focus: 'data'},
            label: {
                formatter: '{b}: {@1995} ({d}%)'
            },
            encode: {
                itemName: 'product',
                value: '1995',
                tooltip: '1995'
            }
        }
    ]
};


export default option4;