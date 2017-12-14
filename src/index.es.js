import VeBar from './packages/bar'
import VeBarMini from './packages/bar-mini'
import VeHistogram from './packages/histogram'
import VeHistogramMini from './packages/histogram-mini'
import VeLine from './packages/line'
import VeLineMini from './packages/line-mini'
import VePie from './packages/pie'
import VeRing from './packages/ring'
import VeWaterfall from './packages/waterfall'
import VeFunnel from './packages/funnel'
import VeRadar from './packages/radar'
import VeChart from './packages/chart'
import VeMap from './packages/map'
import VeBmap from './packages/bmap'
import VeSankey from './packages/sankey'
import VeHeatmap from './packages/heatmap'

const components = [
  VeBar,
  VeBarMini,
  VeHistogram,
  VeHistogramMini,
  VeLine,
  VeLineMini,
  VePie,
  VeRing,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeChart,
  VeMap,
  VeBmap,
  VeSankey,
  VeHeatmap
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  VeBar,
  VeHistogram,
  VeRing,
  VeLine,
  VePie,
  VeWaterfall,
  VeFunnel,
  VeRadar,
  VeChart,
  VeMap,
  VeBmap,
  VeSankey,
  VeHeatmap,
  install
}
