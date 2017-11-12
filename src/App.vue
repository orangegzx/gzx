<template>
  <div id="app">
   <el-row class="header">
      <el-col :span='4'>
       <h2 class="title">选课系统</h2>
      </el-col>
      <el-col :span='20'>
          
      </el-col>
    </el-row>
    <el-row ><!--导航-->
      <el-col :span='4' class="nav">
        <el-menu router=true default-active="2" class="el-menu-vertical-demo" text-color="#fff" background-color="#545c64" active-text-color="#ffd04b">
          <el-submenu index="/student">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>学生信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/student/info"><i class="el-icon-document"></i>学生档案</el-menu-item>
              <el-menu-item index="/student/grade"><i class="el-icon-document"></i>学生选课</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="/class">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>班级管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/class/info"><i class="el-icon-document"></i>班级信息</el-menu-item>
              <el-menu-item index="/class/test"><i class="el-icon-document"></i>考试安排</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="/course">
            <template slot="title">
              <i class="el-icon-star-off"></i>
              <span>课程管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/course/info"><i class="el-icon-document"></i>课程信息</el-menu-item>
              <el-menu-item index="/course/test"><i class="el-icon-document"></i>课程安排</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>

      </el-col>
      <el-col :span='20'><!--放置路由 显示-->
          <router-view/>
      </el-col>
    </el-row>
  
  </div>
</template>

<script >
import $ from 'jquery'
export default {
  name: 'app',
  data:function(){
    return {
      title:'你好Vue'
    }
  },
  mounted:window.onresize=function(){
    $('.nav').height($(window).height()-48);
  }
}
</script>

<style>

 body{
    margin: 0;
    padding:0;
  }
  .header{
    background-color: #1f2d3d;
    color: #fff;
  }
  .header .title{
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    
  }
  .nav{
    background-color: rgb(84, 92, 100);
  }
  .nav ul{
    width:100%;
  }
</style>