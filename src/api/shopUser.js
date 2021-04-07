import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shopUser',
    method: 'post',
    data
  })
}

export function del(uid) {
  return request({
    url: 'api/shopUser/' + uid,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/shopUser',
    method: 'put',
    data
  })
}

export function onStatus(id, data) {
  return request({
    url: 'api/shopUser/onStatus/' + id,
    method: 'post',
    data
  })
}

export function editp(data) {
  return request({
    url: 'api/shopUser/money',
    method: 'post',
    data
  })
}
