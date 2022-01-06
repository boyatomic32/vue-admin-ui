import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue3-admin-pro/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  return request({
    url: '/vue3-admin-pro/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: '/vue3-admin-pro/user/logout',
    method: 'post',
  })
}

export function fetchList(query) {
  // return request({
  //   url: '/vue3-admin-pro/article/list',
  //   method: 'get',
  //   params: query,
  // })
  console.log('query', query)
  return Promise.resolve({
    code: 20000,
    data: {
      total: 10,
      items: [
        {
          id: '16',
          truckid: '',
          gps_id: '860585005101414',
          car_registation: '83-1521',
          description: '',
          image: '',
          status: 1,
          last_update: '2020-09-15 16:25:42',
          remark: null,
        },
        {
          id: '15',
          truckid: '',
          gps_id: '860585005093637',
          car_registation: '83-0554',
          description: '',
          image: '',
          status: 1,
          last_update: '2020-07-29 16:09:43',
          remark: null,
        },
        {
          id: '14',
          truckid: '13678',
          gps_id: '860585007125734',
          car_registation: '82-4839',
          description: 'Truck',
          image: '',
          status: 1,
          last_update: '2020-07-01 15:47:48',
          remark: null,
        },
        {
          id: '7',
          truckid: '14229',
          gps_id: '860585005093660',
          car_registation: '83-3543 ปราบขยะ',
          description: '860585005093660 > 83-3543 ปราบขยะ',
          image: '2c181c1bb39db86eb8817338bd130022.jpg',
          status: 1,
          last_update: '2020-06-13 23:42:39',
          remark: null,
        },
        {
          id: '12',
          truckid: '14389',
          gps_id: '860585005100465',
          car_registation: '83-0855',
          description: 'Truck',
          image: '',
          status: 1,
          last_update: '2020-04-25 21:40:47',
          remark: null,
        },
        {
          id: '13',
          truckid: '14549',
          gps_id: '860585005100051',
          car_registation: '83-5350 ปราบขยะ',
          description: 'Truck',
          image: '',
          status: 1,
          last_update: '2020-04-24 15:04:48',
          remark: null,
        },
        {
          id: '10',
          truckid: '13785',
          gps_id: '860585005093702',
          car_registation: '83-4356 ปราบขยะ',
          description: '860585005093702 > 83-4356 ปราบขยะ',
          image: 'dbeb71db73ec0f20413410557763e4e3.jpg',
          status: 1,
          last_update: '2020-02-06 15:56:39',
          remark: null,
        },
        {
          id: '8',
          truckid: '14393',
          gps_id: '860585005093645',
          car_registation: '83-0163 ปราบขยะ',
          description: '860585005093645 > 83-0163 ปราบขยะ',
          image: '30076a54a4ba7d80797f0475a2528da3.jpg',
          status: 1,
          last_update: '2020-02-06 15:56:17',
          remark: null,
        },
        {
          id: '11',
          truckid: '14152',
          gps_id: '860585005092555',
          car_registation: '82-4838',
          description: 'Truck',
          image: '',
          status: 1,
          last_update: '2020-01-15 00:11:47',
          remark: null,
        },
        {
          id: '9',
          truckid: '14451',
          gps_id: '860585005096010',
          car_registation: '82-1019 ปราบขยะ',
          description: '860585005096010 > 82-1019 ปราบขยะ',
          image: '566374dee890612c3025a1606883eac7.jpg',
          status: 1,
          last_update: '2019-08-08 15:20:11',
          remark: null,
        },
      ],
    },
  })
}
