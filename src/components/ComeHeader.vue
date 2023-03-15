<template>
    <div class="nav-header">
        <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item class="nav-left" v-for="item in menuDataLeft" :key="item.name" :index="item.name">
                <a v-if="!item.icon">{{ item.label }}</a>
                <a v-else-if="item.icon"><i class="iconfont" :class="`${item.icon}`"></i></a>
            </el-menu-item>
            <!-- 登录dialog -->
            <el-menu-item class="fa-login" index="login">
                <el-button type="text" class="login" @click="dialogFormVisible = true">
                    登录
                </el-button>
            </el-menu-item>
            <el-dialog style="visibility:hidden" :modal="false" :center="true" width="65%" top="4vh"
                :modal-append-to-body="false" :visible.sync="dialogFormVisible">
                <login-view style="visibility:visible" :close="handleDialog"></login-view>
                <div slot="footer" class="dialog-footer"></div>
            </el-dialog>
            <el-menu-item class="nav-right" v-for="item in menuDataRight" 
            :key="item.name" 
            @click="handleSkip(item)"
            :index="item.name ">
                {{ item.label }}
            </el-menu-item>
        </el-menu>
    </div>
</template>
   
<script>
import LoginView from '@/views/LoginView.vue';
export default {
    components: {
        LoginView
    },
    data() {
        return {
            menuDataLeft: [
                {
                    path: "/git",
                    name: "git",
                    label: "GitHub",
                    icon: "icon-github-fill",
                    url: "",
                },
                {
                    path: "/function",
                    name: "function",
                    label: "功能介绍",
                    icon: "",
                    url: "",
                },
                {
                    path: "/user",
                    name: "collaboration",
                    label: "请求协作",
                    icon: "",
                    url: "UserManage/UserManage",
                },
                {
                    path: "/documentation",
                    name: "documentation",
                    label: "项目文档",
                    icon: "",
                    url: "UserManage/UserManage",
                },
            ],
            menuDataRight: [
                {
                    path: "/home",
                    name: "home",
                    label: "主页",
                    icon: "",
                    url: "/home",
                },
                {
                    path: "/message",
                    name: "message",
                    label: "消息",
                    icon: "",
                    url: "MallManage/MallManage",
                },
            ],
            //登录弹窗设置
            dialogFormVisible: false,
        };
    },
    methods: {
        handleDialog() {
            if (!this.dialogFormVisible)
                return;
            this.dialogFormVisible = false
        },
        handleSkip(item){
            if(item.path === '')
                return 
            if(this.$route.path !== item.path){
                this.$router.push(item.path)
            }
        }
    }
};
</script>
   
<style lang='less' scoped>
@import url("https://at.alicdn.com/t/c/font_3952653_b70i9qntgi.css");

.nav-header {
    font-size: 25px;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    .fa-login {
        display: flex;
        float: right;

        .login {
            width: auto;
            height: auto;
            color: #909399;
        }
    }

}

.nav-right {
    float: right;
    margin-left: 20px;
}

.el-menu {
    width: 100%;
    background-image: url(../assets/img/header.png);
}

.el-menu-item .el-button {
    margin-right: 40px;
    margin-left: 40px;
}

.iconfont {
    margin: 0 5px;
    font-size: 25px;
    color: black;
    padding: 3px;
    opacity: 0.5;
    transition: 0.1s;
}


.iconfont:hover {
    opacity: 1;
    transition: 0.15s;
    cursor: pointer;
}
</style>