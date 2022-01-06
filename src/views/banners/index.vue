<template>
  <div class="app-container">
    <ProTable
      ref="bannerTable"
      border
      show-selection
      :columns="columns"
      :data="loadData"
      :query-param="queryParam"
      :default-sort="{ prop: 'id', order: 'ascending' }"
      @sort-change="sortChange"
      @selection-change="handleSelectionChange"
    >
      <template #btn>
        <el-button type="primary" icon="el-icon-plus" @click="handleCreate">
          Add
        </el-button>
        <el-button type="danger" :disabled="multipleSelection.length === 0">
          <i class="el-icon-delete" /> Delete
        </el-button>
      </template>

      <template #banner>
        <el-avatar
          shape="square"
          :size="80"
          fit="cover"
          src="https://picsum.photos/380/180?random=1"
        ></el-avatar>
      </template>
      <template #status="slotProps">
        <el-tag :type="tagStatus(slotProps.row.status)">
          {{ statusName(slotProps.row.status) }}
        </el-tag>
      </template>
      <template #status_car="slotProps">
        <el-tag :type="tagStatus(slotProps.row.status_car)">
          {{ statusName(slotProps.row.status_car) }}
        </el-tag>
      </template>

      <template #actions="slotProps">
        <span class="fixed-width">
          <el-button
            type="primary"
            size="mini"
            @click="handleUpdate(slotProps.row)"
          >
            <svg-icon icon-class="edit" /> Edit
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(slotProps.row)"
          >
            <i class="el-icon-delete" /> Delete
          </el-button>
        </span>
      </template>
    </ProTable>
    <ProDialog
      v-model="dialogVisible"
      :title="dialogTitle"
      width="50%"
      :confirm-loading="confirmLoading"
      @close="handleDialogClose"
      @ok="handleDialogOk"
    >
      <ProForm
        ref="ProForm"
        :form-param="form"
        :form-list="columns"
        :layout="{ formWidth: '560px', labelWidth: '100px' }"
        @proSubmit="proSubmit"
      >
      </ProForm>
    </ProDialog>
  </div>
</template>

<script>
import { reactive, ref, toRaw } from 'vue'
import { fetchList } from '@/api/banner'
import { columnList } from './columns/list'
import Message from 'element-plus/lib/el-message'
import useDict from '@/hooks/dict'
import { parseTime, copyValue } from '@/utils'

export default {
  name: 'BannerTable',
  setup() {
    // Table
    const proTable = ref(null)
    const columns = ref(columnList)
    const queryParam = reactive({
      sort: 'desc',
      keyword: '',
      sortName: '',
    })
    const multipleSelection = ref([])
    // Form
    const dialogTitle = ref('')
    const dialogVisible = ref(false)
    const ProForm = ref()
    const confirmLoading = ref(false)
    const defaultFormParams = {
      id: undefined,
      name: '',
      email: '',
      phone: '',
      password: '',
      facebookID: '',
      status: 1,
      level: 1,
      car: 0,
      pic: '',
      last_update: '',
      partner_id: 0,
      player_id: '',
      car_registation: '',
    }
    const form = reactive(Object.assign({}, defaultFormParams))
    const isEdit = ref(false)
    let formData = null
    // Filter
    const dict = useDict
    // loadData
    function loadData(parameter) {
      const requestParameters = Object.assign({}, parameter, queryParam)
      return fetchList(requestParameters).then((res) => {
        // format data
        return res
      })
    }
    // Delete
    function handleDelete(row, index) {
      console.log(toRaw(row))
      Message({ message: 'Success', type: 'success' })
      proTable.value.list.splice(index, 1)
    }
    // Sort
    function sortChange(data) {
      console.log(data)
      const { prop, order } = data
      if (prop === 'id') {
        sortByID(order)
      }
    }
    function sortByID(order) {
      if (order === 'ascending') {
        queryParam.sort = 'asc'
      } else {
        queryParam.sort = 'desc'
      }
      proTable.value.refresh(true)
    }

    // Modify Status
    function handleSelectionChange(data) {
      multipleSelection.value = data
    }

    function tagStatus(status) {
      let type = ''
      switch (status) {
        case 1:
          type = 'success'
          break
        case 2:
          type = 'info'
          break
        case 3:
          type = 'warning'
          break
        default:
          type = 'danger'
      }
      return type
    }

    function statusName(status) {
      let name = ''
      switch (status) {
        case 1:
          name = 'Active'
          break
        case 2:
          name = '-'
          break
        case 3:
          name = '-'
          break
        default:
          name = 'InActive'
      }
      return name
    }
    // Create
    function handleCreate() {
      // reset FormParams
      Object.assign(form, defaultFormParams)
      dialogTitle.value = 'Create'
      isEdit.value = false
      dialogVisible.value = true
    }
    function create() {
      form.id = parseInt(Math.random() * 100) + 1024 // mock a id
      form.timestamp = parseTime(form.timestamp)
      formData = JSON.parse(JSON.stringify(toRaw(form)))
      //return createArticle(form)
    }
    function createSuccess() {
      formData.author = 'vue3'
      formData.reviewer = 'element-plus'
      formData.pageviews = 0
      proTable.value.list.unshift(formData)
      dialogVisible.value = false
    }
    // Update
    function handleUpdate(row) {
      dialogTitle.value = 'Update'
      copyValue(form, row)
      formData = JSON.parse(JSON.stringify(toRaw(row)))
      form.timestamp = parseTime(form.timestamp)
      isEdit.value = true
      dialogVisible.value = true
    }
    function update() {
      //return updateArticle(form)
    }
    function updateSuccess() {
      Object.assign(formData, form)
      const index = proTable.value.list.findIndex((v) => v.id === formData.id)
      proTable.value.list.splice(index, 1, formData)
      dialogVisible.value = false
    }
    function handleDialogOk() {
      // dialogVisible.value = false
      ProForm.value.handleSubmit()
    }
    function proSubmit() {
      confirmLoading.value = true
      let method = isEdit.value ? update : create
      method(form)
        .then((res) => {
          Message({ message: res.msg, type: 'success' })
          formCB()
        })
        .finally(() => {
          confirmLoading.value = false
        })
    }
    function formCB() {
      return isEdit.value ? updateSuccess() : createSuccess()
    }
    function handleDialogClose() {
      console.log('handleDialogClose')
      isEdit.value = false
      dialogVisible.value = false
    }

    return {
      proTable,
      queryParam,
      columns,
      dialogVisible,
      dialogTitle,
      ProForm,
      confirmLoading,
      isEdit,
      form,
      multipleSelection,
      loadData,
      dict,
      handleUpdate,
      handleDelete,
      sortChange,
      handleCreate,
      handleDialogOk,
      proSubmit,
      handleDialogClose,
      handleSelectionChange,
      tagStatus,
      statusName,
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
