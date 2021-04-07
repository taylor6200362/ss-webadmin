import request from '@/utils/request'

export function getBrand(){
    return request({
        url: 'api/shopBrand',
        method: 'get',
    })
}

export function add(data) {
return request({
url: 'api/shopBrand',
method: 'post',
data
})
}

export function del(ids) {
return request({
url: 'api/shopBrand/',
method: 'delete',
data: ids
})
}

export function edit(data) {
return request({
url: 'api/shopBrand',
method: 'put',
data
})
}

export default { add, edit, del }
