<template>
    <nav>
      <div class="navTop clear">
        <div>
          <router-link to="/cart" tag="div">
            <i>&#xe50f;</i>
            <span>购物车</span>
          </router-link>
          <!--登录信息-->
          <router-link to="/" tag="div" v-if="ok">
            <router-link to="/login" tag="span">登录</router-link>
            |
            <router-link to="/login" tag="span">注册</router-link>
          </router-link>
          <!--登录完成-->
          <router-link to="/" tag="div" v-else>
            <span>{{name}}</span>
            |
            <router-link to="/admin/admininfo" tag="span">个人中心</router-link>
            |
            <span @click="quit">退出</span>
          </router-link>
        </div>
      </div>
      <div class="navBtm clear">
        <router-link to="/" tag="h1"><img src="../../../static/images/logo3.png" alt="logo"></router-link>
        <ul>
          <router-link to="/home" tag="li">首页</router-link>
          <router-link to="/dingzhi" tag="li">全屋定制</router-link>
          <router-link to="/shop" tag="li">家具商城</router-link>
          <router-link to="/myDesign" tag="li">模拟搭配</router-link>
          <router-link to="/3dvr" tag="li">VR体验</router-link>
          <router-link to="/aboutme" tag="li">关于我们</router-link>
          <router-link to="/designerdetail" tag="li">设计师详情</router-link>
          <router-link to="/demo" tag="li">demo</router-link>
          <li>|</li>
          <li><i>&#xe6c3;</i></li>
        </ul>
      </div>
    </nav>
</template>

<script>
  import {setCookie,getCookie,delCookie} from "../../assets/cookie";
    export default {
        name: "a_nav",
        data(){
          return {
            name:"",
            ok:true
          }
        },
        methods:{
            quit(){
                delCookie("username");
                this.ok=true;
            }
        },
        /*监听路由变化实现登录*/
        watch:{
           "$route":function () {
             let uname=getCookie("username");
             this.name=uname;
             if(uname!=""){
               this.ok=false;
             }
           }
        }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  html{
    font-size: 12px;
  }
  @font-face {
    font-family: navfont;
    src:url("../../../static/font/navfont/iconfont.woff");
  }
  li{
    list-style-type: none;
  }
  i{
    font-style: normal;
    font-family: navfont;
  }
  nav{
    width: 100%;
    height: 120px;
    padding: 0 2rem;
    box-sizing:border-box;
    background: #FFFFFF;
  }
  .navTop{
    padding-top: 10px;
  }
  .navTop>div{
    float: right;
  }
  .navTop>div span{
    cursor: pointer;
  }
  .clear::after{
    content: '';
    height: 0;
    display: block;
    clear: both;
  }
  .navTop>div>div{
    float: left;
    margin: 0 10px;
  }
  .navBtm img{
    width: 135px;
  }
  .navBtm>h1{
    float: left;
    margin: 18px 0;
  }
  .navBtm>ul{
    display: inline-block;
  }
  .navBtm>ul>li{
    float: left;
    padding: 0 30px;
    line-height: 80px;
  }

</style>
