<template>
    <div class="app-container">
        <!--工具栏-->
        <div class="head-container">
                <div v-if="crud.props.searchToggle">
                    <!-- 搜索 -->
                    <el-input v-model="query.value" clearable placeholder="输入搜索内容" style="width: 200px;" class="filter-item" @keyup.enter.native="crud.toQuery" />
                    <el-select v-model="query.type" clearable placeholder="类型" class="filter-item" style="width: 130px">
                        <el-option v-for="item in queryTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
                    </el-select>
                    <rrOperation :crud="crud" />
                </div>
            <!--如果想在工具栏加入更多按钮，可以使用插槽方式， slot = 'left' or 'right'-->
            <crudOperation :permission="permission" />
            <!--表单组件-->
            <el-dialog :close-on-click-modal="false" :before-close="crud.cancelCU" :visible.sync="crud.status.cu > 0" :title="crud.status.title" width="500px">
                <el-form ref="form" :model="form" :rules="rules" size="small" label-width="80px">
                                <el-form-item label="品牌名称">
                                        <el-input v-model="form.brandName" style="width: 370px;" />
                                </el-form-item>
                                <el-form-item label="品牌首字母">
                                            <el-select v-model="form.brandNameStart" filterable placeholder="请选择">
                                                <el-option
                                                        v-for="item in dict.brand_name_start"
                                                        :key="item.id"
                                                        :label="item.label"
                                                        :value="item.value" />
                                            </el-select>
                                </el-form-item>
                                <el-form-item label="是否精选">
                                            <el-radio v-for="item in dict.yes_no" :key="item.id" v-model="form.isSelect" :label="item.value">{{ item.label }}</el-radio>
                                </el-form-item>
                                <el-form-item label="品牌简述">
                                        <el-input :rows="3" v-model="form.brandSketch" type="textarea" style="width: 370px;" />
                                </el-form-item>
                                <el-form-item label="品牌介绍">
                                        <el-input :rows="3" v-model="form.brandDetailed" type="textarea" style="width: 370px;" />
                                </el-form-item>
                                <el-form-item label="品牌封面">
                                        <MaterialList
                                                v-model="brandCoverArr"
                                                style="width: 915px;"
                                                type="image"
                                                :num="1"
                                                :width="150"
                                                :height="150"
                                        />
                                </el-form-item>
                                <el-form-item label="品牌详细图">
                                        <MaterialList
                                                v-model="brandDetailviewArr"
                                                style="width: 915px;"
                                                type="image"
                                                :num="3"
                                                :width="150"
                                                :height="150"
                                        />
                                </el-form-item>
                                <el-form-item label="是否展示">
                                            <el-radio v-for="item in dict.yes_no" :key="item.id" v-model="form.isShow" :label="item.value">{{ item.label }}</el-radio>
                                </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="text" @click="crud.cancelCU">取消</el-button>
                    <el-button :loading="crud.cu === 2" type="primary" @click="crud.submitCU">确认</el-button>
                </div>
            </el-dialog>
            <!--表格渲染-->
            <el-table ref="table" v-loading="crud.loading" :data="crud.data" size="small" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
                <el-table-column type="selection" width="55" />
                                <el-table-column v-if="columns.visible('id')" prop="id" label="品牌id" />
                                <el-table-column v-if="columns.visible('brandName')" prop="brandName" label="品牌名称" />
                                <el-table-column v-if="columns.visible('brandNameStart')" prop="brandNameStart" label="品牌首字母">
                                    <template slot-scope="scope">
                                        {{ dict.label.brand_name_start[scope.row.brandNameStart] }}
                                    </template>
                                </el-table-column>
                                <el-table-column v-if="columns.visible('isSelect')" prop="isSelect" label="是否精选">
                                    <template slot-scope="scope">
                                        {{ dict.label.yes_no[scope.row.isSelect] }}
                                    </template>
                                </el-table-column>
                                <el-table-column v-if="columns.visible('brandSketch')" prop="brandSketch" label="品牌简述" />
                                <el-table-column v-if="columns.visible('brandDetailed')" prop="brandDetailed" label="品牌介绍" />
                                <el-table-column v-if="columns.visible('brandCover')" prop="brandCover" label="品牌封面">
                                    <template slot-scope="scope">
                                        <a :href="scope.row.brandCover" style="color: #42b983" target="_blank">
                                            <img :src="scope.row.brandCover" alt="点击打开" class="table-img" />
                                        </a>
                                    </template>
                                </el-table-column>
                                <el-table-column v-if="columns.visible('brandDetailview')" prop="brandDetailview" label="品牌详细图">
                                    <template slot-scope="scope">
                                        <a :href="scope.row.brandDetailview" style="color: #42b983" target="_blank">
                                            <img :src="scope.row.brandDetailview" alt="点击打开" class="table-img" />
                                        </a>
                                    </template>
                                </el-table-column>
                                <el-table-column v-if="columns.visible('isShow')" prop="isShow" label="是否展示">
                                    <template slot-scope="scope">
                                        {{ dict.label.yes_no[scope.row.isShow] }}
                                    </template>
                                </el-table-column>
                                <el-table-column v-if="columns.visible('createTime')" prop="createTime" label="添加时间">
                                    <template slot-scope="scope">
                                        <span>{{ formatTimeTwo(scope.row.createTime) }}</span>
                                    </template>
                                </el-table-column>
                <el-table-column v-permission="['admin','shopBrand:edit','shopBrand:del']" label="操作" width="150px" align="center">
                    <template slot-scope="scope">
                        <udOperation
                                :data="scope.row"
                                :permission="permission"
                        />
                    </template>
                </el-table-column>
            </el-table>
            <!--分页组件-->
            <pagination />
        </div>
    </div>
</template>

<script>
    import crudShopBrand from '@/api/shopBrand'
    import CRUD, { presenter, header, form, crud } from '@crud/crud'
    import rrOperation from '@crud/RR.operation'
    import crudOperation from '@crud/CRUD.operation'
    import udOperation from '@crud/UD.operation'
    import pagination from '@crud/Pagination'
    import MaterialList from "@/components/material";
    import { formatTimeTwo } from '@/utils/index'

    // crud交由presenter持有
    const defaultCrud = CRUD({ title: '品牌信息', url: 'api/shopBrand', sort: 'id,asc', crudMethod: { ...crudShopBrand }})
    const defaultForm = { id: null, brandName: null, brandNameStart: null, isSelect: null, brandSketch: null, brandDetailed: null, brandCover: null, brandDetailview: null, isShow: null, createTime: null, updateTime: null, isDel: null }
    export default {
        name: 'ShopBrand',
        components: { pagination, crudOperation, rrOperation, udOperation ,MaterialList},
        mixins: [presenter(defaultCrud), header(), form(defaultForm), crud()],
        dicts: ['brand_name_start', 'yes_no'],
        data() {
            return {
                brandCoverArr:[],brandDetailviewArr:[],
                permission: {
                    add: ['admin', 'shopBrand:add'],
                    edit: ['admin', 'shopBrand:edit'],
                    del: ['admin', 'shopBrand:del']
                },
                rules: {
        },
            queryTypeOptions: [
                { key: 'brandName', display_name: '品牌名称' },
            ]
        }
        },
        watch: {
            "brandCoverArr":function(val) {
                if (val) {
                    this.form.brandCover = val.join(",");
                }
            },
            "brandDetailviewArr":function(val) {
                if (val) {
                    this.form.brandDetailview = val.join(",");
                }
            },
        },
        methods: {
            formatTimeTwo,
            // 获取数据前设置好接口地址
            [CRUD.HOOK.beforeRefresh]() {
                const query = this.query
                if (query.type && query.value) {
                    this.crud.params[query.type] = query.value
                }else{
                    delete this.crud.params.id
                    delete this.crud.params.brandName
                    delete this.crud.params.brandNameStart
                    delete this.crud.params.isSelect
                    delete this.crud.params.brandSketch
                    delete this.crud.params.brandDetailed
                    delete this.crud.params.brandCover
                    delete this.crud.params.brandDetailview
                    delete this.crud.params.isShow
                    delete this.crud.params.createTime
                    delete this.crud.params.updateTime
                    delete this.crud.params.isDel
                }
                return true
            }, // 新增与编辑前做的操作
            [CRUD.HOOK.afterToCU](crud, form) {
                if (form.brandCover && form.id) {
                    this.brandCoverArr = form.brandCover.split(",");
                }else{
                    this.brandCoverArr=[]
                }
                if (form.brandDetailview && form.id) {
                    this.brandDetailviewArr = form.brandDetailview.split(",");
                }else{
                    this.brandDetailviewArr=[]
                }
            },
        }
    }



</script>

<style scoped>
    .table-img {
        display: inline-block;
        text-align: center;
        background: #ccc;
        color: #fff;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        vertical-align: middle;
        width: 32px;
        height: 32px;
        line-height: 32px;
    }
</style>
