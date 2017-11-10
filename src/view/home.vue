<template>
  <div class="home">
    <el-row class="home_container">
      <div class="nav">
        <div class="logo">
          <img :src="pic.logopic" alt="大袜网OMS">
        </div>
        <div class="nav_content">
          <!-- 这是nav的内容 -->
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>导航2</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="content">
        <div class="header_nav">
          
        </div>
        <div class="main_content">
          <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb_content">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="view_container">
            <router-view></router-view>
          </div>
        </div>
      </div>
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
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style rel="stylesheet/scss" scoped lang="scss">
.home {
  height:100%;
  margin:0 auto;
  .home_container {
    height:100%;
    .nav {
      height: 100%;
      width:200px;
      float: left;
      position:relative;
      padding-top:60px;
      z-index: 2;
      .el-menu-vertical-demo {
        border: none;
      }
      .logo {
        background: #fff;
        overflow: hidden;
        width: 200px;
        height: 60px;
        position: absolute;
        top:0;
        left:0;
        img {
          width: 200px;
        }
      }
      .nav_content {
        background: #545c64;
        height: 100%;
      }
    }
    .content {
      height: 100%;
      width:100%;
      padding-left: 200px;
      background: #f5f5f5;
      position: relative;
      padding-top: 60px;
      z-index: 1;
      .header_nav {
        height: 60px;
        width: 100%;
        background: #fff;
        position: absolute;
        padding-left: 200px;
        top: 0;
        left: 0;
      }
      .main_content {
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        padding: 20px;
        padding-top: 40px;
        position: relative;
        .breadcrumb {
          position: absolute;
          top:0;
          left:20px;
          height: 40px;
          padding-top:10px;
          .breadcrumb_content {
            height: 1em;
            
          }
        }
        .view_container {
          height:100%;
          width: 100%;
          &>div {
            width:100%;
            height:100%;
            overflow: auto;
          }
        }
      }
    }
  }
}
</style>


