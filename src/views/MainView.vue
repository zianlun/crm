<template>
    <div>
        <el-container>
            <el-aside width="auto"><sub-aside></sub-aside></el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
  
<script>
import SubAside from '../components/SubAside.vue'
export default {
    components: {
        SubAside
    }
}
</script>
  
<style scoped>
.el-aside {
    height: 500px;
}
</style>