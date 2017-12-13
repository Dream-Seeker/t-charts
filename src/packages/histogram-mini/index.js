import echarts from '../../echarts-base'
import { histogrammini } from '../bar-mini/main'
import Core from '../../core'
export default {
  name: 'HistogramMini',
  mixins: [Core],
  created () {
    this.chartHandler = histogrammini
    this.echartsLib = echarts
  }
}
