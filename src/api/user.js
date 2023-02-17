import request from '@/utils/request'

export function login(data) {
  var bodyFormData = new FormData()
  bodyFormData.append('username', data.username)
  bodyFormData.append('password', data.password)
  return request({
    url: '/login/accountlogin',
    method: 'post',
    data: bodyFormData
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
