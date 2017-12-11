import echarts from '../../echarts-base'
import { lineMini } from './main'
import Core from '../../core'
export default {
  name: 'LineMini',
  mixins: [Core],
  created () {
    this.chartHandler = lineMini
    this.echartsLib = echarts
  }
}
