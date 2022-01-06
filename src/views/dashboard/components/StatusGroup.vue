<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="12" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-success el-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Completed</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="32"
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
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="message" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Complaint</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="24"
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
        <div class="card-panel-icon-wrapper icon-color-warning">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Processing</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="14"
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
        <div class="card-panel-icon-wrapper icon-color-error">
          <i class="el-icon-error el-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Error</div>
          <vue3-autocounter
            ref="counter"
            :start-amount="0"
            :end-amount="10"
            :duration="2"
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
  name: 'StatusGroup',
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

      .icon-color-warning {
        background: #ffba00;
      }

      .icon-color-error {
        background: #ff4949;
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

    .icon-color-warning {
      color: #ffba00;
    }

    .icon-color-error {
      color: #ff4949;
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
