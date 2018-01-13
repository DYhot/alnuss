<template>
  <div class="container clear">
    <div class="adminLeft">
      <div class="adminImg">
        <img src="../../../static/images/my.gif" alt="用户头像">
        <p>15982307113</p>
      </div>
      <div class="adminItem">
        <ul>
          <router-link to="/admin/admininfo" tag="li">个人信息</router-link>
          <router-link to="/admin/adminorder" tag="li">我的订单</router-link>
          <router-link to="/admin/admincollect" tag="li">我的收藏</router-link>
          <router-link to="/admin/adminconvention" tag="li">我的预约</router-link>
          <router-link to="/admin/adminaddr" tag="li">我的地址</router-link>
          <router-link to="/admin/admindesign" tag="li">我的设计</router-link>
        </ul>
      </div>
    </div>
    <div class="adminRight">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "a_admin"
    }
</script>

<style scoped lang="less">

  li{
    list-style-type: none;
    padding: 10px 0;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  .clear::after{
    content: '';
    height: 0;
    display:block;
    clear:both;
  }
  .container{
    padding: 2rem 2rem ;
    box-sizing: border-box;
    width: 100%;
    >div{
      border: 1px solid rgba(0,0,0,.2);
    }
  }
  .adminLeft{
    width: 20%;
    float: left;
  }
  .adminRight{
    width: 77%;
    float: right;
  }
  .adminImg{
    border-bottom: 1px rgba(0,0,0,.2) dashed;
    width: 80%;
    margin: auto;
    >img{
      width:100px;
      border-radius:100px;
      margin: 15px 0;
      box-shadow: 0 5px 5px 0 rgba(0,0,0,.3);
    }
  }
  .adminItem>ul{
    margin: 30px;
    >li:hover{
      background: rgba(0,0,0,.6);
      color: #fff;
    }
  }
</style>
