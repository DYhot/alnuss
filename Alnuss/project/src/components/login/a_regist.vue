<template>
  <div class="bg">
    <div class="content">
      <!--注册-->
      <div class="left">
        <p>没有账号？</p>
        <p>那还在等什么？来加入我们的大家庭吧~</p>
        <button class="regist" @click="regist">注册</button>
      </div>
      <!--登录-->
      <div class="right">
        <p>已拥有账号？</p>
        <p>从这里开始你的完美购买体验之旅吧~</p>
        <button @click="login">登录</button>
      </div>
      <!--登录注册界面-->
      <div class="lg-content" v-if="ok">
        <h2>登 录</h2>
        <form>
          <div>
            <label>手机号：</label><input type="text" placeholder="请输入手机号"/>
          </div>
          <div>
            <label>密　码：</label><input type="password" placeholder="请输入密码"/>
          </div>
          <div class="rembpwd">
            <input type="checkbox" id="jz"/><label for="jz">记住密码</label>
            <router-link to="/forgot" tag="span">忘记密码？</router-link>
          </div>
          <div>
            <router-link tag="button" class="login" to="/">登　录</router-link>
          </div>
          <div class="thridparty">
            <span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-qq"></use>
                </svg>
            </span>
            <span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-weixin"></use>
                </svg>
            </span>
          </div>
        </form>
      </div>
      <div class="lg-content lg-regist" v-else>
        <h2>注 册</h2>
        <form>
          <div>
            <label>手机号：</label><input type="text" placeholder="请输入手机号"/>
          </div>
          <div>
            <label>昵　称：</label><input type="text" placeholder="请输入昵称"/>
          </div>
          <div>
            <label>密　码：</label><input type="password" placeholder="请输入密码"/>
          </div>
          <div class="qr-pwd">
            <label>确认密码：</label><input type="password" placeholder="确认密码"/>
          </div>
          <div>
            <label>验证码：</label><input type="text" placeholder="请输入验证码"/>
            <button type="button" class="yanzheng">获取验证码</button>
          </div>
          <div>
            <router-link tag="button" to="/regist" class="rt-regist">注　册</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../../static/js/iconfont";
  import $ from "jquery";
  export default {
    name: "login",
    data(){
      return {
        ok:false
      }
    },
    methods:{
      regist(){
        $(".lg-content").animate({marginLeft:"2%"},"slow")
          .animate({marginLeft:"8%"},"normal")
          .animate({marginLeft:"2%"},"normal");
        this.ok=false;
      },
      login(){
        $(".lg-content").animate({marginLeft:"56%"},"slow")
          .animate({marginLeft:"53%"},"normal")
          .animate({marginLeft:"56%"},"normal");
        this.ok=true;
      }
    }
  }
</script>

<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  /*登录注册样式*/
  @width: 200px;
  @height: 130px;
  @padding: 2rem;
  @background: #f2f2f2;
  @margin-top: 7%;
  @margin-left: 4%;
  @float: left;
  .style(@width,@height,@padding,@background,@margin-top,@margin-left,@float) {
    width: @width;
    height: @height;
    padding: @padding;
    background: @background;
    margin-top: @margin-top;
    margin-left: @margin-left;
    float: @float;
  }

  .bg {
    width: 100%;
    height: 638px;
    background: url("../../../static/images/loginBG.jpg") no-repeat center center;
    background-size: cover;
    position: relative;
  }

  .content {
    width: 70%;
    height: 350px;
    background: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  .left {
    z-index: 1;
    position: relative;
    .style(@width, @height, @padding, @background, @margin-top, @margin-left, @float);
    p {
      margin-bottom: 1rem;
    }
  }

  button {
    width: 110px;
    height: 25px;
    text-align: center;
    color: white;
    background: #666;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .yanzheng{
    width: 80px;
    font-size:10px;
  }
  .right {
    z-index: 1;
    position: relative;
    .style(@width, @height, @padding, @background, @margin-top, 37%, @float);
    p {
      margin-bottom: 1rem;
    }
  }

  /*登录页面*/
  form div {
    margin-bottom: 2rem;
  }

  .lg-content {
    width: 390px;
    height: 400px;
    background: #d7d7d7;
    z-index: 3;
    position: absolute;
    margin-top: -3%;
    margin-left: 2%;
    h2 {
      margin-top: 3rem;
      font-weight: 400;
      font-size: 22px;
      margin-bottom: 2rem;
    }
  }
  /*input框*/
  input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid gray;
    background: transparent;
    outline: none;
  }
  .rembpwd {
    font-size: 14px;
    span {
      margin-left: 20%;
      cursor: pointer;
    }
  }
  .login {
    width: 120px;
    height: 30px;
    background: #169bd5;
    border-radius: 5px;
    padding: 0.4rem 2rem;
  }
  .thridparty span{
    margin-left:15%;
    font-size: 28px;
    display: inline-block;
    margin-bottom: 2em;
    &:first-child{
      margin-left: 0;
    }
  }
  /*注册样式*/
  .lg-regist{
    padding-bottom:1rem;
    div{
      text-align: left;
      margin-left:10%;
    }
  }
  div.qr-pwd{
    margin-left: 6%;
  }
  .rt-regist{
    margin-left:20%;
  }
</style>

