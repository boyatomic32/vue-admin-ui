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
    dataIndex: 'place',
    width: 100,
    align: 'Right',
    title: 'Place',
    scopedSlots: { customRender: 'place' },
  },
  {
    dataIndex: 'complete',
    width: 100,
    align: 'Right',
    title: 'Complete',
    scopedSlots: { customRender: 'complete' },
  },
  {
    dataIndex: 'error',
    width: 100,
    align: 'Right',
    title: 'Error',
    scopedSlots: { customRender: 'error' },
  },
  {
    dataIndex: 'distance',
    width: 100,
    title: 'Distance',
    align: 'Right',
    scopedSlots: { customRender: 'distance' },
  },
  {
    dataIndex: 'period',
    width: 200,
    title: 'Period',
    scopedSlots: { customRender: 'period' },
  },
  {
    dataIndex: 'status',
    width: 100,
    title: 'Status',
    scopedSlots: { customRender: 'status' },
  },
]

export { columnList }
