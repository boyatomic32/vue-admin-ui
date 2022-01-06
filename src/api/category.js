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
      items: [
        {
          id: '1',
          name: 'แก้ว',
          image: '6a4a9a8408188fed67e200fe531bcf72.png',
          status: 1,
          last_update: '2018-07-04 13:47:29',
        },
        {
          id: '2',
          name: 'กระดาษ',
          image: 'b9fdc0f5456c7139c904f1fe4ebdb6d2.png',
          status: 1,
          last_update: '2018-04-24 13:01:34',
        },
        {
          id: '3',
          name: 'พลาสติก',
          image: '05ea539b145c9fec8abe4936b9ad18dd.png',
          status: 1,
          last_update: '2018-04-24 13:01:47',
        },
        {
          id: '4',
          name: 'เหล็ก',
          image: '2584c6874d3e2c97f43778604846ea67.png',
          status: 1,
          last_update: '2018-04-24 13:01:56',
        },
        {
          id: '5',
          name: 'โลหะ',
          image: '611e094da8826e3260ed2244f89b2d6c.png',
          status: 1,
          last_update: '2018-04-24 13:02:05',
        },
        {
          id: '6',
          name: 'อื่นๆ',
          image: '4e70213f5218a0a27400f26b37e3be31.png',
          status: 1,
          last_update: '2018-04-24 13:02:11',
        },
        {
          id: '7',
          name: 'gme',
          image: 'fbb6b7ed4d30e42050155fe539cc95f3.png',
          status: 1,
          last_update: '2021-02-27 19:49:00',
        },
        {
          id: '8',
          name: 'asadsa',
          image: '471141461c7c995c4409a9eef0345867.png',
          status: 1,
          last_update: '2021-02-27 19:51:00',
        },
        {
          id: '9',
          name: 'xcxzc',
          image: '04dab10bfa809c9bbef673575b9bd173.png',
          status: 1,
          last_update: '2021-02-27 20:03:00',
        },
      ],
    },
  })
}
