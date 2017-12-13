<template>
  <div style="background:#eee;padding: 20px">
    <Card :bordered="false"
          style="width: 270px;height: 156px">
      <div class="t-content">
        <p>新增玩家</p>
        <p><span class="t-font">{{changeNum}}</span><span>{{changePer}}</span></p>
        <p style="height: 46px">
          <line-mini  :data="chartData"
                      :settings="chartSettings"
                      width="100%"
                      height="46px"
                      style="position: absolute;left: -38px;right: 20px">
          </line-mini>
        </p>
      </div>
    </Card>
    <Card :bordered="false"
          style="width: 270px;height: 156px">
      <div class="t-content">
        <p>新增玩家</p>
        <p style="height: 46px">
          <histogram-mini   :data="barData"
                            :settings="barSettings"
                            width="100%"
                            height="60px">
          </histogram-mini>
        </p>
      </div>
    </Card>
  </div>
</template>

<script>
  import LineMini from '../../src/packages/line-mini'
  import barMini from '../../src/packages/bar-mini'
  import histogramMini from '../../src/packages/histogram-mini'
  export default {
    props: {},
    created: function () {
      this.chartData = {
        columns: ['日期', '成本'],
        rows: [
          { '日期': '1月1日', '成本': 1523 },
          { '日期': '1月2日', '成本': 1223 },
          { '日期': '1月3日', '成本': 2123 },
          { '日期': '1月4日', '成本': 4123 },
          { '日期': '1月5日', '成本': 3123 },
          { '日期': '1月6日', '成本': 8123 }
        ]
      }
      this.chartSettings = {
        stack: { '售价': ['成本', '利润'] },
        area: true
      }
      this.barData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1号', '成本': 123, '利润': 3 },
          { '日期': '1月2号', '成本': 1223, '利润': 6 },
          { '日期': '1月3号', '成本': 2123, '利润': 30 },
          { '日期': '1月4号', '成本': 4123, '利润': 12 },
          { '日期': '1月5号', '成本': 3123, '利润': 15 },
          { '日期': '1月6号', '成本': 7123, '利润': 20 },
          { '日期': '1月1号', '成本': 123, '利润': 3 },
          { '日期': '1月2号', '成本': 1223, '利润': 6 },
          { '日期': '1月3号', '成本': 2123, '利润': 30 },
          { '日期': '1月4号', '成本': 4123, '利润': 12 },
          { '日期': '1月5号', '成本': 3123, '利润': 15 },
          { '日期': '1月6号', '成本': 7123, '利润': 20 }
        ]
      }
      this.barSettings = {
        dimension: ['成本'],
        metrics: ['利润']
      }
    },
    data () {
      return {
        changeNum: '57,789',
        changePer: '12.45%',
        product: {},
        typeList: []
      }
    },
    components: { LineMini, barMini, histogramMini },
    computed: {},
    methods: {}
  }
</script>
<style>
  .t-content{
    padding: 5px;
  }
  .t-content p{
    margin-bottom: 16px;
  }
  .t-font{
    font-size: 30px;
  }
</style>
