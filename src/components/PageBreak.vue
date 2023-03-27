<template>
  <div id="app">
    <div class="page">
        <a @click="handleClick(1)">首页</a>
        <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleClick"
        :page-size="pageInfo.pageSize"
        :total="pageInfo.total">
        </el-pagination>
        <a @click="handleClick(pageInfo.pages)">尾页</a>
    </div>
  </div>
</template>

<script>
export default {
    name:'PageBreak',
    props:{
        pageInfo:{
            
        }
    },
    methods:{
        handleClick(pager){
            console.log(this.pageInfo)
            this.$emit("handleClick",pager)
        }
    }
}
</script>

<style scoped lang="less">
#app{
    .page{
        display: flex;
        height: 36px;
        a {
            padding-top: 6px;
            cursor:pointer;
        }
    }
}
</style>