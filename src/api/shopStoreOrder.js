import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shopStoreOrder',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/shopStoreOrder/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/shopStoreOrder',
    method: 'put',
    data
  })
}

export function editT(data) {
  return request({
    url: 'api/shopStoreOrder/check',
    method: 'put',
    data
  })
}


export function refund(data) {
  return request({
    url: 'api/shopStoreOrder/refund',
    method: 'post',
    data
  })
}

export function editOrder(data) {
  return request({
    url: 'api/shopStoreOrder/edit',
    method: 'post',
    data
  })
}

export function remark(data) {
  return request({
    url: 'api/shopStoreOrder/remark',
    method: 'post',
    data
  })
}

export function get() {
  return request({
    url: 'api/shopExpress',
    method: 'get'
  })
}

export function express(data) {
  return request({
    url: 'api/shopStoreOrder/express',
    method: 'post',
    data
  })
}

