import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shopStoreOrderStatus',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/shopStoreOrderStatus/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/shopStoreOrderStatus',
    method: 'put',
    data
  })
}
