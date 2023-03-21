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
        <el-menu-item >
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <el-avatar :size="40" :src="userInfo.avatar" style="margin-bottom: 10px;"></el-avatar>
              {{ userInfo.username }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">个人中心</el-dropdown-item>
              <el-dropdown-item command="b">信息查询</el-dropdown-item>
              <el-dropdown-item command="loginOut">安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
        <el-menu-item v-for='(item, index) in menuData' :key='item.name' @click="clickMenu(item)" :index="`${index}`">
          <a>{{ item.label }}</a>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      menuData: [
        {
          label: '项目地址',
          name: 'home',
          path: '/home',
          icon: '',
          url: ''
        },
        {
          label: '用户反馈',
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
        }
      ],
    };
  },
  mounted(){
    this.getUserInfo().then(() => {

    })
  },
  computed:{
    ...mapState('user',[
        'userInfo'
      ])
  },
  methods: {
    ...mapActions('user', [
      'loginOut',
      'getUserInfo'
    ]),
    clickMenu(item) {
      if (item.path === '')
        return
      if (this.$route.path !== item.path) {
        this.$router.push(item.path)
      }
    },
    async handleLoginOut() {
      //退出登录
      //1、发送请求，通知服务器退出登录
      //2、清除项目中的数据token
      //3、跳转到登录页面
      await this.loginOut()
      this.$router.push("/index")
      this.$notify({
        title: '成功',
        message: '退出登录成功！正在跳转到首页',
        type: 'success',
      })
      setTimeout(() => {
        this.$notify.closeAll()
      }, 1000)
    },
    async handleCommand(command){
      if(command == "loginOut"){
        await this.handleLoginOut()
      }
    }
  },
};
</script>
<style scoped lang='less'>

.head {
  .el-menu-demo {
    width: 100%;
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
        font-size: 14px;
        float: left;
        padding-left: 5px;
        padding-right: 5px;
      }

      .name {
        font-size: 25px;
        font-weight: 900;
      }
    }

    .head-right {
      float: right;
      margin-right: 40px;
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