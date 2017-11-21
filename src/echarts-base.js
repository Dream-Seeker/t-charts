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
    axisLine: {
      show: false
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: '#80848F'
      }
    }
  },
  line: {
    smooth: true
  },
  grid: {
    containLabel: true,
    left: 10,
    right: 10
  }
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
