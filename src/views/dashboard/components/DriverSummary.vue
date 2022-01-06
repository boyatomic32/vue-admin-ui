<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Team</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="6"
            :duration="2"
            decimal-separator="."
            :decimals="2"
            :autoinit="true"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="component" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Trips</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="0.0"
            :duration="2"
            decimal-separator="."
            :decimals="2"
            :autoinit="true"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-warning">
          <i class="el-icon-time el-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Idle time</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="28.0"
            :duration="3"
            decimal-separator="."
            :decimals="2"
            :autoinit="true"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <i class="el-icon-odometer el-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Moving time</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="12.37"
            :duration="3"
            decimal-separator="."
            :decimals="2"
            :autoinit="true"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <i class="el-icon-timer el-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Stoping time</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="53.02"
            :duration="3"
            decimal-separator="."
            :decimals="2"
            :autoinit="true"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Vue3Autocounter from 'vue3-autocounter'

export default {
  name: 'DriverSummary',
  components: {
    Vue3Autocounter,
  },
}
</script>

<style lang="scss" scoped>
.el-panel-icon:before {
  font-size: 58px;
}
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }

      .icon-warning {
        background: #ffba00;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .icon-warning {
      color: #ffba00;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
