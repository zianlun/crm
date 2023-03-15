<template>
  <div class='head'>
    <el-menu class="el-menu-demo" mode="horizontal"
      active-text-color="#ffd04b">
      <div class='head-left'>
        <el-menu-item index="8" class='logo'>

        </el-menu-item>
        <el-menu-item index="7" class='name'>
          主页
        </el-menu-item>
      </div>
      <div class='head-right'>
        <el-menu-item v-for='(item, index) in menuData' :key='item.name' @click="clickMenu(item)" :index="`${index}`">
          <a>{{ item.label }}</a>
        </el-menu-item>
        <el-menu-item @click="loginOut">
          <span>退出登录</span>
        </el-menu-item>
        <el-menu-item class='user'>
          用户头像
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: [
        {
          label: '客户端下载',
          name: 'client',
          path: '/client',
          icon: '',
          url: ''
        },
        {
          label: '反馈',
          name: 'feedback',
          path: '/feedback',
          icon: '',
          url: ''
        },
        {
          label: '传输列表',
          name: 'trans',
          path: '/trans',
          icon: '',
          url: ''
        },
        {
          label: '首页',
          name: 'home',
          path: '/home',
          icon: '',
          url: ''
        },
        {
          label: '个人中心',
          name: 'user',
          path: '/user',
          icon: '',
          url: ''
        },
      ]
    };
  },
  methods: {
    clickMenu(item) {
      if (item.path === '')
        return
      if (this.$route.path !== item.path) {
        this.$router.push(item.path)
      }
    },
    async loginOut() {
      //退出登录
      //1、发送请求，通知服务器退出登录
      //2、清除项目中的数据token
      //3、跳转到登录页面
      await this.$store.dispatch("user/loginOut")
      this.$router.push("/login")
      this.$notify({
        title: '成功',
        message: '退出登录成功！正在跳转到登录界面',
        type: 'success',
      })
      setTimeout(() => {
        this.$notify.closeAll()
      }, 1000)
    }
  },
};
</script>
<style scoped lang='less'>

.head {
  .el-menu-demo {
    width: 100%;
    background-image: url(../assets/img/header.png);
    .head-left {
      float: left;

      img {
        height: 50px;
        width: 50px;
        background-color: aliceblue;
        border-radius: 50%;
      }

      .logo {
        margin-left: 20px;

      }

      .el-menu-item {
        float: left;
        padding-left: 5px;
        padding-right: 5px;
      }

      .name {
        font-size: 23px;
        font-weight: 900;
      }
    }

    .head-right {
      float: right;

      .el-menu-item {
        float: right;
        margin-left: 20px;
      }

      .user {
        padding-right: 0px;
        margin-right: 0px;

        img {
          width: 45px;
          height: 45px;
          border-radius: 50%;

        }
      }
    }
  }
}
</style>