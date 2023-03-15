<template>
    <div>
        <el-menu default-active="" class="el-menu-vertical-demo" :collapse="isCollapse">
            <el-menu-item @click="changeState()">
                <i :class="`el-icon-arrow-${isCollapse ? 'right' : 'left'}`"></i>
                <span slot="title" v-text="!isCollapse ? '收起' : '展开'"></span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">我的文件</span>
                </template>
                <el-menu-item @click="clickMenu(item)" v-for="item in fileTypeData" :key="item.name" :index="item.name">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{ item.label }}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="2" @click="recycleFile">
                <i class="el-icon-delete"></i>
                <span slot="title">回收站</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isCollapse: true,
            fileTypeData: [
                {
                    label: "全部",
                    name: "all",
                    icon: "upload",
                    path: '/home/main/operation'
                },
                {
                    label: "图片",
                    name: "image",
                    icon: "picture",
                },
                {
                    label: "文档",
                    name: "doc",
                    icon: "document",
                },
                {
                    label: "视频",
                    name: "mp4",
                    icon: "view",
                },
                {
                    label: "音乐",
                    name: "mp3",
                    icon: "service",
                },
                {
                    label: "其他",
                    name: "other",
                    icon: "more",
                },
            ],
        };
    },
    methods: {
        changeState() {
            // console.log("点击事件");
            this.isCollapse = !this.isCollapse;
        },
        async clickMenu(item) {
            try {
                this.$store.state.isRec = false;
                if (item.name == 'all')
                    await this.$store.dispatch('file/getFileList')
                else
                    await this.$store.dispatch('file/getFileType', item.name);
                this.$message({
                    title: '成功',
                    message: `成功获取到${item.label}文件`,
                    type: 'success',
                    duration: 1500
                });

            } catch (error) {
                console.log(error);
            }
        },
        async recycleFile() {
            try {
                this.$store.state.isRec = true;
                await this.$store.dispatch('file/recycleFile')
                this.$message({
                    title: '成功',
                    message: `成功获取到回收站文件`,
                    type: 'success',
                    duration: 1500
                });

            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

.el-menu {
    width: auto;
}
</style>