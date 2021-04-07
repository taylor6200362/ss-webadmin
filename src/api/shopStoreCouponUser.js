import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shopStoreCouponUser',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/shopStoreCouponUser/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/shopStoreCouponUser',
    method: 'put',
    data
  })
}
