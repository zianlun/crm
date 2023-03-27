<template>
    <div>
        <el-menu default-active="0" class="el-menu-vertical-demo">
            <el-menu-item v-for='(item, index) in menuData' :key='item.name' :index="`${index}`" @click='clickMenu(item)'>
                <i :class="`el-icon-${item.icon}`"></i>
                <span>{{ item.label }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            menuData: [
                {
                    label: '首页',
                    name: 'share',
                    path: '/home/work',
                    icon: 's-home',
                    url: ''
                },
                {
                    label: '文件',
                    name: 'main',
                    path: '/home/main',
                    icon: 'cloudy',
                    url: ''
                },
                {
                    label: '市场活动',
                    name: 'market',
                    path: '/home/market',
                    icon: 's-marketing',
                    url: ''
                },
                {
                    label: '消息',
                    name: 'message',
                    path: '/home/message',
                    icon: 'bell',
                    url: ''
                },
                {
                    label: '设置',
                    name: 'set',
                    path: '/home/set',
                    icon: 'setting',
                    url: ''
                },
                {
                    label: '工具',
                    name: 'tools',
                    path: '/home/tools',
                    icon: 'suitcase',
                    url: ''
                },
            ]
        }
    },
    methods: {
        clickMenu(item) {
            if (item.path === '')
                return
            if (this.$route.path !== item.path) {
                console.log("正在跳转到", item.name)
                this.$router.push(item.path)
            }
        }
    }
}
</script>
  
<style lang="less" scoped>
.el-menu {
    width: 140px;
}
</style>
  