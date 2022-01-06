const columnList = [
  {
    dataIndex: 'id',
    width: 80,
    title: 'ID',
    noTable: false,
    sortable: 'custom',
  },
  {
    dataIndex: 'cover',
    width: 200,
    title: 'Cover',
    scopedSlots: { customRender: 'cover' },
  },
  {
    dataIndex: 'name',
    width: 300,
    title: 'Name',
    isForm: true,
    valueType: 'input',
    prop: [{ required: true, message: 'กรุณาป้อนชื่อประเภทขยะ' }],
    placeholder: 'ชื่อประเภทขยะ',
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
