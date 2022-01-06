<template>
  <el-card class="box-card-component" style="margin-left: 8px">
    <template #header>
      <div class="card-header">
        <img src="https://picsum.photos/300/180?random=1" />
      </div>
    </template>
    <div style="position: relative">
      <div class="progress-item">
        <h4>Driver <span>83-4356 ปราบขยะ</span></h4>
      </div>
      <div class="progress-item"><b>Distance</b>181.86Km.</div>
      <div class="progress-item"><b>Average speed :</b> 23.67Km/hr</div>
      <div class="progress-item"><b>Processing :</b> 17</div>
      <div class="progress-item"><b>Error : </b> 0</div>
      <div class="progress-item"><b>Fuel : </b> 0 %</div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DriverCard',
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger',
      }
      return statusMap[status]
    },
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024,
      },
    }
  },
  computed: {
    ...mapGetters(['name', 'avatar', 'roles']),
  },
}
</script>

<style lang="scss">
.box-card-component {
  .el-card__header {
    padding: 0px !important;
  }
}
</style>
<style lang="scss" scoped>
.el-panel-icon:before {
  font-size: 58px;
}
.box-card-component {
  .box-card-header {
    position: relative;
    height: 180px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px !important;
    width: 70px !important;
    position: absolute !important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none !important;
    ::v-deep .pan-info {
      box-shadow: none !important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px) {
    .mallki-text {
      display: none;
    }
  }
}
</style>
