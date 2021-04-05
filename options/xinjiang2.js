let option2 = {
    title: {
        text: '各省各年总收入(亿元)'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:  ['北京', '天津', '上海', '重庆','河北','河南','云南','辽宁','黑龙江','湖南','安徽','山东','新疆','江苏','浙江','江西','湖北','广西','甘肃','山西','内蒙古','陕西','吉林', '福建','贵州','广东','青海','西藏','四川','宁夏', '海南', '台湾','香港', '澳门'],
        top:'0%',
        left:'20%'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        top:'20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['1995', '2000', '2005', '2010', '2015', '2018', '2019']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '北京',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '天津',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '上海',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '重庆',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '河北',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '河南',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '云南',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '辽宁',
            type: 'line',
            stack: '总量',
            label: {
                show: false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '黑龙江',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '湖南',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '安徽',
            type: 'line',
            stack: '总量',
            label: {
                show: false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '山东',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '新疆',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '江苏',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '浙江',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '江西',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '湖北',
            type: 'line',
            stack: '总量',
            label: {
                show: false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '广西',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '甘肃',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '山西',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '内蒙古',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '陕西',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '吉林',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '福建',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '贵州',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '广东',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '青海',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '西藏',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '四川',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '宁夏',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '海南',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '台湾',
            type: 'line',
            stack: '总量',
            label: {
                show:  false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },
        {
            name: '香港',
            type: 'line',
            stack: '总量',
            label: {
                show: false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        },{
            name: '澳门',
            type: 'line',
            stack: '总量',
            label: {
                show: false,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};
export default option2;