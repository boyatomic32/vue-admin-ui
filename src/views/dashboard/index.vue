<template>
  <div class="dashboard-editor-container">
    <div class="filter-container">
      <el-row class="pb-5" :gutter="20">
        <el-col :xs="24" :sm="8" :lg="8">
          <el-select
            v-model="partnerId"
            class="filter-item"
            @change="handleFilter"
          >
            <el-option
              v-for="item in partners"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :xs="24" :sm="8" :lg="8">
          <el-date-picker
            v-model="filterDate"
            type="date"
            placeholder="Pick a day"
            class="filter-item"
          />
        </el-col>
        <el-col :xs="24" :sm="8" :lg="8">
          <el-button
            class="filter-item"
            type="primary"
            icon="el-icon-search"
            @click="handleFilter"
          >
            Search
          </el-button>
        </el-col>
      </el-row>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>ข้อมูลการเก็บขยะ</span>
          </div>
        </template>
        <div class="box-item">
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="12">
              <driver-summary />
            </el-col>
            <el-col :xs="24" :sm="24" :lg="12">
              <div class="chart-wrapper">
                <CardChart
                  title="กราฟข้อมูลการเก็บขยะ"
                  :options="PieChartOptions"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>สถานะการเก็บขยะ</span>
          </div>
        </template>
        <div class="box-item">
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="12">
              <status-group />
            </el-col>
            <el-col :xs="24" :sm="24" :lg="12">
              <div class="chart-wrapper">
                <CardChart
                  title="กราฟสถานะการเก็บขยะ"
                  :options="PieRoseTypeChartOptions"
                />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Location : 6</span>
          </div>
        </template>
        <div class="box-item">
          <el-row :gutter="32">
            <el-col :xs="24" :sm="24" :lg="24">
              <location-group />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <CardChart
        class="mb-5"
        title="กราฟข้อมูลคนขับรถ"
        :options="BarStackDataChartSetOptions"
      />

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Map : 106 จุด</span>
          </div>
        </template>
        <div class="box-item googleMap">
          <GMapMap
            :center="center"
            :zoom="zoomMap"
            map-type-id="terrain"
            class="googleMap"
          >
            <GMapCluster :zoom-on-click="true">
              <GMapMarker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center = m.position"
              />
            </GMapCluster>
          </GMapMap>
        </div>
      </el-card>

      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Drivers : 6 คน</span>
          </div>
        </template>
        <div class="box-item">
          <el-row :gutter="8">
            <el-col
              :xs="{ span: 24 }"
              :sm="{ span: 12 }"
              :md="{ span: 12 }"
              :lg="{ span: 6 }"
              :xl="{ span: 6 }"
              class="driver-card"
            >
              <driver-card />
            </el-col>
            <el-col
              :xs="{ span: 24 }"
              :sm="{ span: 12 }"
              :md="{ span: 12 }"
              :lg="{ span: 6 }"
              :xl="{ span: 6 }"
              class="driver-card"
            >
              <driver-card />
            </el-col>
            <el-col
              :xs="{ span: 24 }"
              :sm="{ span: 12 }"
              :md="{ span: 12 }"
              :lg="{ span: 6 }"
              :xl="{ span: 6 }"
              class="driver-card"
            >
              <driver-card />
            </el-col>
            <el-col
              :xs="{ span: 24 }"
              :sm="{ span: 12 }"
              :md="{ span: 12 }"
              :lg="{ span: 6 }"
              :xl="{ span: 6 }"
              class="driver-card"
            >
              <driver-card />
            </el-col>
            <el-col
              :xs="{ span: 24 }"
              :sm="{ span: 12 }"
              :md="{ span: 12 }"
              :lg="{ span: 6 }"
              :xl="{ span: 6 }"
              class="driver-card"
            >
              <driver-card />
            </el-col>
            <el-col
              :xs="{ span: 24 }"
              :sm="{ span: 12 }"
              :md="{ span: 12 }"
              :lg="{ span: 6 }"
              :xl="{ span: 6 }"
              class="driver-card"
            >
              <driver-card />
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import DriverSummary from './components/DriverSummary'
import DriverCard from './components/DriverCard'
import StatusGroup from './components/StatusGroup'
import LocationGroup from './components/LocationGroup'

import { ref } from 'vue'
import { getPieList, getBarStackList } from '@/api/charts'
import { PieCommonOptions, BarCommonOptions } from '@/utils/echarts'
import CardChart from './components/CardChart.vue'

export default {
  name: 'DashboardAdmin',
  components: {
    DriverSummary,
    DriverCard,
    StatusGroup,
    LocationGroup,
    CardChart,
  },
  setup() {
    const PieChartOptions = ref()
    const PieRoseTypeChartOptions = ref()

    const BarStackDataChartSetOptions = ref()

    function initPieChart(res) {
      const legend = [
        'Team',
        'Trips',
        'Idle time',
        'Moving time',
        'Stoping time',
      ]
      const data = []
      legend.forEach((item, index) => {
        data.push({
          value: res.data.yData[index],
          name: item,
        })
      })
      PieChartOptions.value = PieCommonOptions(data)
    }

    function initPieRoseTypeCharts(res) {
      const legend = ['Completed', 'Complaint', 'Processing', 'Error']
      const data = []
      legend.forEach((item, index) => {
        data.push({
          value: res.data.yData[index],
          name: item,
        })
      })
      const options = PieCommonOptions(data)
      options.series.roseType = 'area'
      PieRoseTypeChartOptions.value = options
    }

    function initBarStackChart(res) {
      const legend = ['จำนวน', 'ระยะทาง']
      const data = [res.data.yData.data1, res.data.yData.data2]
      BarStackDataChartSetOptions.value = BarCommonOptions(
        res.data.xData,
        data,
        legend
      )
    }
    function getList() {
      getPieList().then((res) => {
        initPieChart(res)
        initPieRoseTypeCharts(res)
      })
      getBarStackList().then((res) => {
        initBarStackChart(res)
      })
    }

    getList()

    return {
      PieChartOptions,
      PieRoseTypeChartOptions,
      BarStackDataChartSetOptions,
    }
  },
  data() {
    return {
      search: '',
      partnerId: 1,
      partners: [
        { label: 'เทศบาลปทุมธานี', value: 1 },
        { label: 'เทศบาลตำบลธัญบุรี', value: 2 },
      ],
      filterDate: new Date(),
      center: { lat: 14.0121, lng: 100.53466 },
      zoomMap: 13,
      markers: [],
    }
  },
  mounted() {
    this.geoLocate()
  },
  methods: {
    async handleFilter() {},
    async geoLocate() {
      this.setMarkers()
    },
    setMarkers() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.markers.push({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        })
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.driver-card {
  margin-bottom: 30px;
}
.box-card {
  margin-bottom: 15px;
}
.filter-item,
.el-date-editor.el-input {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100% !important;
}
.googleMap {
  width: 100%;
  min-height: 400px;
}
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
