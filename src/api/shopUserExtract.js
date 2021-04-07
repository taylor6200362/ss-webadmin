import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shopUserExtract',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/shopUserExtract/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/shopUserExtract',
    method: 'put',
    data
  })
}
