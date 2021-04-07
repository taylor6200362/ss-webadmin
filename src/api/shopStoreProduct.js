import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shopStoreProduct',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/shopStoreProduct/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/shopStoreProduct',
    method: 'put',
    data
  })
}

export function onsale(id, data) {
  return request({
    url: 'api/shopStoreProduct/onsale/' + id,
    method: 'post',
    data
  })
}

export function recovery(id) {
  return request({
    url: 'api/shopStoreProduct/recovery/' + id,
    method: 'delete'
  })
}

export function isFormatAttr(id, data) {
  return request({
    url: 'api/shopStoreProduct/isFormatAttr/' + id,
    method: 'post',
    data
  })
}

export function setAttr(id, data) {
  return request({
    url: 'api/shopStoreProduct/setAttr/' + id,
    method: 'post',
    data
  })
}

export function clearAttr(id) {
  return request({
    url: 'api/shopStoreProduct/clearAttr/' + id,
    method: 'post'
  })
}

export function getAttr(id) {
  return request({
    url: 'api/shopStoreProduct/attr/' + id,
    method: 'get'
  })
}

