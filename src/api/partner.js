import request from '@/utils/request'

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
          id: 6,
          name: 'โทนี่',
          phone: '083-4444479',
          location: 'โทนี่',
          createdate: '2019-10-10 21:05:14',
          lastupdate: '2019-10-11 22:29:09',
          status: 0,
          tokenLine: '',
        },
        {
          id: 5,
          name: 'บอย',
          phone: '087-6241223',
          location: 'รักบ้านเกิด',
          createdate: '2019-10-10 21:04:43',
          lastupdate: '2019-10-11 23:51:12',
          status: 0,
          tokenLine: '',
        },
        {
          id: 3,
          name: 'เทศบาลสนั่นรักษ์',
          phone: '11111111',
          location: 'เทศบาลสนั่นรักษ์',
          createdate: '2020-04-05 21:38:12',
          lastupdate: '2020-04-05 21:38:12',
          status: 1,
          tokenLine: '',
        },
        {
          id: 2,
          name: 'เทศบาลปทุมธานี',
          phone: '096-8767761',
          location: 'เทศบาลปทุมธานี',
          createdate: '2019-11-11 16:22:07',
          lastupdate: '2019-11-11 16:30:36',
          status: 1,
          tokenLine: '',
        },
        {
          id: 1,
          name: 'เทศบาลตำบลธัญบุรี',
          phone: '1111111',
          location: 'เทศบาลตำบลธัญบุรี',
          createdate: '2021-05-08 01:37:18',
          lastupdate: '2021-05-08 01:37:20',
          status: 1,
          tokenLine: '',
        },
      ],
    },
  })
}

export function fetchArticle(id) {
  return request({
    url: '/vue3-admin-pro/article/detail',
    method: 'get',
    params: { id },
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue3-admin-pro/article/pv',
    method: 'get',
    params: { pv },
  })
}

export function createArticle(data) {
  return request({
    url: '/vue3-admin-pro/article/create',
    method: 'post',
    data,
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue3-admin-pro/article/update',
    method: 'post',
    data,
  })
}
export function getStatus() {
  return request({
    url: '/vue3-admin-pro/article/getStatus',
    method: 'get',
  })
}
