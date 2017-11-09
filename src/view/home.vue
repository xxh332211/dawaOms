<template>
  <div class="home">
    <el-row class="home_container">
      <el-col class="nav" :span="4">
        <div class="logo">
          <img :src="pic.logopic" alt="大袜网OMS">
        </div>
        <div class="nav_content">
          <!-- 这是nav的内容 -->
        </div>
      </el-col>
      <el-col class="content" :span="20">
        <div class="header_nav"></div>
        <div class="main_content">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 图片引入
import Logopic from '../assets/pic/home/logo.png'
// 其他引入

export default{
  data () {
    return {
      pic: {
        logopic: Logopic
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" scoped lang="scss">
.home {
  height:100%;
  .home_container {
    height:100%;
    .nav {
      height: 100%;
      position: relative;
      .logo {
        background: black;
        height:100px;
        overflow: hidden;
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        img {
          width: 100%;
        }
      }
      .nav_content {
        background: pink;
        height: 100%;
        padding-top:100px;
      }
    }
    .content {
      height: 100%;
      .header_nav {
        height: 100px;
        background: black;
      }
    }
  }
  
}
</style>


