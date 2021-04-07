import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shopStoreCouponIssueUser',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/shopStoreCouponIssueUser/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/shopStoreCouponIssueUser',
    method: 'put',
    data
  })
}
