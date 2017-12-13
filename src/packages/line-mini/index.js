import echarts from '../../echarts-base'
import { linemini } from './main'
import Core from '../../core'
export default {
  name: 'LineMini',
  mixins: [Core],
  created () {
    this.chartHandler = linemini
    this.echartsLib = echarts
  }
}
