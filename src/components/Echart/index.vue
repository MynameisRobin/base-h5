<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '380px'
    },
    options: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  watch: {
    options: {
      deep: true,
      handler: function (newVal, oldVal) {
        this.refreshChart()
      }
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption(this.options)
    },
    refreshChart() {
      if (this.chart) {
        this.chart.clear()
        this.chart.setOption(this.options, true)
      }
    }
  }
}
</script>
