<template>
    <div>
        <common-header />
        <el-container>
            <common-aside />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
  
<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue"
export default {
    name: "HomeView",
    mounted() {
        
    },
    components: {
        CommonAside,
        CommonHeader
    },
};
</script>
  
<style lang='less' scoped>
.el-aside {
    height: 100vh;
}
</style>