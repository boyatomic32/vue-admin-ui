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
      total: 0,
      items: [],
    },
  })
}
