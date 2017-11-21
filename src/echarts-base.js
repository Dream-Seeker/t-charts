import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

echarts.registerTheme('ve-chart', {
  categoryAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false }
  },
  valueAxis: {
    axisLine: { show: false }
  },
  line: {
    smooth: true
  },
  grid: {
    containLabel: true,
    left: 10,
    right: 10
  },
  'seriesCnt': '3',
  'backgroundColor': 'rgba(0, 0, 0, 0)',
  'titleColor': '#495060',
  'subtitleColor': '#80848f',
  'textColorShow': false,
  'textColor': '#333',
  'markTextColor': '#ffffff',
  'color': [
    '#2d8cf0',
    '#2de2c5',
    '#fcc45f',
    '#ff8454',
    '#db425a',
    '#34508c',
    '#5bb6fd',
    '#56d08b',
    '#b3e768',
    '#71808f'
  ],
  'borderColor': '#ccc',
  'borderWidth': '0',
  'visualMapColor': [
    '#34508c',
    '#2b85e4',
    '#1cb6fb',
    '#1bdbf5',
    '#80f2da',
    '#c1f9d6'
  ],
  'legendTextColor': '#495060',
  'kColor': '#2d8cf0',
  'kColor0': '#db425a',
  'kBorderColor': '#2d8cf0',
  'kBorderColor0': '#db425a',
  'kBorderWidth': 1,
  'lineWidth': '2',
  'symbolSize': '8',
  'symbol': 'emptyCircle',
  'symbolBorderWidth': '2',
  'lineSmooth': false,
  'graphLineWidth': 1,
  'graphLineColor': '#bbbec4',
  'mapLabelColor': '#1c2438',
  'mapLabelColorE': '#1c2438',
  'mapBorderColor': '#ffffff',
  'mapBorderColorE': '#ffffff',
  'mapBorderWidth': 0.5,
  'mapBorderWidthE': 1,
  'mapAreaColor': '#e9eaec',
  'mapAreaColorE': '#fcc45f',
  'axes': [
    {
      'type': 'all',
      'name': '通用坐标轴',
      'axisLineShow': true,
      'axisLineColor': '#333',
      'axisTickShow': true,
      'axisTickColor': '#333',
      'axisLabelShow': true,
      'axisLabelColor': '#333',
      'splitLineShow': true,
      'splitLineColor': [
        '#ccc'
      ],
      'splitAreaShow': false,
      'splitAreaColor': [
        'rgba(250,250,250,0.3)',
        'rgba(200,200,200,0.3)'
      ]
    },
    {
      'type': 'category',
      'name': '类目坐标轴',
      'axisLineShow': true,
      'axisLineColor': '#dddee1',
      'axisTickShow': true,
      'axisTickColor': '#dddee1',
      'axisLabelShow': true,
      'axisLabelColor': '#495060',
      'splitLineShow': false,
      'splitLineColor': [
        '#ccc'
      ],
      'splitAreaShow': false,
      'splitAreaColor': [
        'rgba(250,250,250,0.3)',
        'rgba(200,200,200,0.3)'
      ]
    },
    {
      'type': 'value',
      'name': '数值坐标轴',
      'axisLineShow': false,
      'axisLineColor': '#333',
      'axisTickShow': false,
      'axisTickColor': '#333',
      'axisLabelShow': true,
      'axisLabelColor': '#80848f',
      'splitLineShow': true,
      'splitLineColor': [
        '#e9eaec'
      ],
      'splitAreaShow': false,
      'splitAreaColor': [
        'rgba(250,250,250,0.3)',
        'rgba(200,200,200,0.3)'
      ]
    },
    {
      'type': 'log',
      'name': '对数坐标轴',
      'axisLineShow': true,
      'axisLineColor': '#333',
      'axisTickShow': true,
      'axisTickColor': '#333',
      'axisLabelShow': true,
      'axisLabelColor': '#333',
      'splitLineShow': true,
      'splitLineColor': [
        '#ccc'
      ],
      'splitAreaShow': false,
      'splitAreaColor': [
        'rgba(250,250,250,0.3)',
        'rgba(200,200,200,0.3)'
      ]
    },
    {
      'type': 'time',
      'name': '时间坐标轴',
      'axisLineShow': true,
      'axisLineColor': '#333',
      'axisTickShow': true,
      'axisTickColor': '#333',
      'axisLabelShow': true,
      'axisLabelColor': '#333',
      'splitLineShow': true,
      'splitLineColor': [
        '#ccc'
      ],
      'splitAreaShow': false,
      'splitAreaColor': [
        'rgba(250,250,250,0.3)',
        'rgba(200,200,200,0.3)'
      ]
    }
  ],
  'axisSeperateSetting': true,
  'toolboxColor': '#80848f',
  'toolboxEmpasisColor': '#495060',
  'tooltipAxisColor': '#bbbec4',
  'tooltipAxisWidth': 1,
  'timelineLineColor': '#80848f',
  'timelineLineWidth': '1',
  'timelineItemColor': '#2d8cf0',
  'timelineItemColorE': '#2d8cf0',
  'timelineCheckColor': '#2d8cf0',
  'timelineCheckBorderColor': '#d7e9fc',
  'timelineItemBorderWidth': 1,
  'timelineControlColor': '#80848f',
  'timelineControlBorderColor': '#80848f',
  'timelineControlBorderWidth': '0.5',
  'timelineLabelColor': '#495060',
  'datazoomBackgroundColor': 'rgba(47,69,84,0)',
  'datazoomDataColor': 'rgba(47,69,84,0.3)',
  'datazoomFillColor': 'rgba(167,183,204,0.4)',
  'datazoomHandleColor': '#a7b7cc',
  'datazoomHandleWidth': '100',
  'datazoomLabelColor': '#333'
})

export const itemPoint = (color) => {
  return [
    '<span style="',
    `background-color:${color};`,
    'display: inline-block;',
    'width: 10px;',
    'height: 10px;',
    'border-radius: 50%;',
    'margin-right:2px;',
    '"></span>'
  ].join('')
}

export const color = [
  '#2d8cf0', '#2de2c5', '#fcc45f',
  '#ff8454', '#db425a', '#34508c',
  '#5bb6fd', '#56d08b', '#b3e768',
  '#71808f'
]

export const HEAT_MAP_COLOR = ['#313695', '#4575b4', '#74add1',
  '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090',
  '#fdae61', '#f46d43', '#d73027', '#a50026']

export const HEAT_BMAP_COLOR = ['blue', 'blue', 'green', 'yellow', 'red']

export default echarts
