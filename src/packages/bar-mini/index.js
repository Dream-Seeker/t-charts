import echarts from '../../echarts-base'
import { barmini } from './main'
import Core from '../../core'

export default {
  name: 'VeBarMini',
  mixins: [Core],
  created () {
    this.chartHandler = barmini
    this.echartsLib = echarts
  }
}
