<template>
    <div class="app">
        <el-container>
            <come-header></come-header>
            <index-view></index-view>
            <el-footer>
                <common-footer></common-footer>
            </el-footer>
        </el-container>

    </div>
</template>

<script>
import ComeHeader from '@/components/ComeHeader.vue';
import IndexView from './IndexView.vue';
import CommonFooter from '@/components/CommonFooter.vue'
export default {
    name:"ComeView",
    components:{
        ComeHeader,
        IndexView,
        CommonFooter
    }
}
</script>

<style lang='less' scoped>
.el-footer {
    padding: 0px;
}
</style>