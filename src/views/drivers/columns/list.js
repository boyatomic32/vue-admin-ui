const columnList = [
  {
    dataIndex: 'id',
    width: 80,
    title: 'ID',
    noTable: false,
    sortable: 'custom',
  },
  {
    dataIndex: 'pic',
    width: 120,
    title: 'Cover',
    scopedSlots: { customRender: 'cover' },
  },
  {
    dataIndex: 'car_registation',
    width: 200,
    title: 'Car Code',
  },
  {
    dataIndex: 'name',
    minWidth: 200,
    align: 'left',
    title: 'Name',
  },
  {
    dataIndex: 'email',
    minWidth: 200,
    align: 'left',
    title: 'Email',
  },
  {
    dataIndex: 'status_car',
    width: 100,
    title: 'Car Status',
    scopedSlots: { customRender: 'status' },
  },
  {
    dataIndex: 'remark',
    width: 200,
    title: 'Remark',
    align: 'left',
  },
  {
    dataIndex: 'status',
    width: 100,
    title: 'Status',
    scopedSlots: { customRender: 'status' },
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
