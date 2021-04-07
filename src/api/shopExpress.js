import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shopExpress',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/shopExpress/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/shopExpress',
    method: 'put',
    data
  })
}

