<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script>
import en from 'element-plus/lib/locale/lang/en'
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const locale = ref(en)

    return {
      locale,
    }
  },
}
</script>
<style>
.vue-map {
  min-height: 400px !important;
}
</style>
