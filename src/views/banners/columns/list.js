const columnList = [
  {
    dataIndex: 'id',
    width: 80,
    title: 'ID',
    noTable: false,
    sortable: 'custom',
  },
  {
    dataIndex: 'banner',
    width: 200,
    title: 'banner',
    scopedSlots: { customRender: 'banner' },
  },
  {
    dataIndex: 'title',
    width: 150,
    title: 'Title',
    isForm: true,
    valueType: 'input',
    prop: [{ required: true, message: 'กรุณาป้อนชื่อโฆษณา' }],
    placeholder: 'ชื่อโฆษณา',
  },
  {
    dataIndex: 'url',
    minWidth: 200,
    title: 'URL',
    isForm: true,
    valueType: 'input',
    placeholder: 'Url โฆษณา',
  },
  {
    dataIndex: 'status',
    width: 100,
    title: 'Status',
    scopedSlots: { customRender: 'status' },
    isForm: true,
    valueType: 'switch',
  },
  {
    dataIndex: 'last_update',
    width: 200,
    title: 'Update At',
    scopedSlots: { customRender: 'date' },
    valueType: 'date-picker',
    attrs: {
      type: 'date',
      format: 'YYYY-MM-DD HH-mm-ss',
      'start-placeholder': 'Please select Date',
    },
  },
  {
    dataIndex: 'actions',
    fixed: 'right',
    width: 180,
    title: 'Actions',
    scopedSlots: { customRender: 'actions' },
  },
]

export { columnList }
