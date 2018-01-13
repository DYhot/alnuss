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
        <button @click="login_xz">登录</button>
      </div>
      <!--登录注册界面-->
      <div class="lg-content" v-if="ok">
        <h2>登 录</h2>
        <form>
          <div>
            <label>手机号：</label><input v-model="phone" v-on:blur="change" type="text" placeholder="请输入手机号"/>
            <span class="flag">
              <svg class="icon" aria-hidden="true" v-show="shows">
                  <use xlink:href="#icon-chenggong"></use>
              </svg>
              <svg class="icon" aria-hidden="true" v-show="showss">
                  <use xlink:href="#icon-cuowu"></use>
              </svg>
            </span>
          </div>
          <div>
            <label>密　码：</label><input v-model="password" type="password" placeholder="请输入密码"/>
            <span class="flag">
              <svg class="icon" aria-hidden="true" v-show="pwd_shows">
                  <use xlink:href="#icon-chenggong"></use>
              </svg>
              <svg class="icon" aria-hidden="true" v-show="pwd_showss">
                  <use xlink:href="#icon-cuowu"></use>
              </svg>
            </span>
          </div>
          <div class="rembpwd">
            <input type="checkbox" id="jz"/><label for="jz">记住密码</label>
            <router-link to="/forgot" tag="span">忘记密码？</router-link>
          </div>
          <div>
            <button type="button" class="login" @click="login">登　录</button>
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
            <label>手机号：</label><input type="text" v-model="zc_phone" v-on:blur="changezc" placeholder="请输入手机号"/>
            <span class="zc_flag">
              <svg class="icon" aria-hidden="true" v-show="zc_shows">
                  <use xlink:href="#icon-chenggong"></use>
              </svg>
              <svg class="icon" aria-hidden="true" v-show="zc_showss">
                  <use xlink:href="#icon-cuowu"></use>
              </svg>
            </span>
          </div>
          <div>
            <label>昵　称：</label><input type="text" v-model="zc_name" placeholder="请输入昵称"/>
          </div>
          <div>
            <label>密　码：</label><input type="password" v-model="zc_pwd" placeholder="请输入密码"/>
          </div>
          <div class="qr-pwd">
            <label>确认密码：</label><input type="password" v-model="zc_pwds" placeholder="确认密码"/>
          </div>
          <div>
            <label>验证码：</label><input type="text" v-model="zc_yzm" placeholder="请输入验证码"/>
            <button type="button" class="yanzheng" @click="yanzheng">获取验证码</button>
          </div>
          <div>
            <button type="button" class="rt-regist" @click="zc_regist">注册</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../../static/js/iconfont";
  import {setCookie, getCookie} from "../../assets/cookie";
  export default {
    name: "login",
    data(){
      return {
        ok: true,
        isA: false,
        shows:false,
        showss:false,
        pwd_shows:false,
        pwd_showss:false,
        phone: "",
        password: "",
        zc_phone:"",
        zc_name:"",
        zc_pwd:"",
        zc_pwds:"",
        zc_yzm:"",
        zc_shows:false,
        zc_showss:false,
      }
    },
    methods: {
      /*注册切换动画*/
      regist(){
        $(".lg-content").animate({marginLeft: "2%"}, "slow")
          .animate({marginLeft: "8%"}, "normal")
          .animate({marginLeft: "2%"}, "normal");
        this.ok = false;
      },
      /*登录动画切换*/
      login_xz(){
        $(".lg-content").animate({marginLeft: "56%"}, "slow")
          .animate({marginLeft: "53%"}, "normal")
          .animate({marginLeft: "56%"}, "normal");
        this.ok = true;
      },
      /*change光标离开验证手机号*/
      change(){
        this.$axios.post("/api/getUserTel.do", {"tel": this.phone})
          .then(res => {
            var flag=res.data.flag;
            if(flag==1){
                this.shows=true;
                this.showss=false;
            }else{
                this.shows=false;
                this.showss=true;
            }
          })
      },
      /*登录实现*/
      login(){
        if (this.phone == "" || this.password == "") {
          alert("请输入用户名或密码")
        } else {
          /*存数据给后台进行判断*/
          this.$axios.post("/api/userLogin.do", {"phone":this.phone,"password": this.password})
            .then(res => {
              var name=res.data.data[0].a_name;
              var flag = res.data.flag;
              if (flag == -1) {
                 this.pwd_shows=false;
                 this.pwd_showss=true;
              }else{
                  this.pwd_shows=true;
                  this.pwd_showss=false;
                setCookie("username", name, 1000 * 60);
                var url = this.$route.query.url;
                if (url == undefined) {
                  url = ""
                } else {
                  url = this.$route.query.url
                }
                setTimeout(function () {
                  this.$router.push("/" + url)
                }.bind(this), 100)
              }
            });

        }
      },
      /*注册实现*/
      changezc(){
          var phone=this.zc_phone;
          this.$axios.post("/api/getUserTel.do",{"tel":phone})
            .then(res=>{
                var flag=res.data.flag;
                if(flag==1){
                    this.zc_shows=false;
                    this.zc_showss=true;
                }else{
                    this.zc_shows=true;
                    this.zc_showss=false;
                }
            })
      },
      /*发送验证码*/
      yanzheng(){
          this.$axios.post("/api/getCode.do",{"phone":this.zc_phone})
            .then(res=>{
            })
      },
      zc_regist(){
          this.$axios.post("/api/register.do",{"code":this.zc_yzm,"phone":this.zc_phone})
            .then(res=>{
                var flag=res.data.flag;
              if(flag==1){
                    this.$axios.post("/api/addUser.do",{"phone":this.zc_phone,"pwd":this.zc_pwd,"username":this.zc_name})
                      .then(ress=>{
                        setCookie("username", this.zc_name, 1000 * 60);
                          this.$router.push('/home')
                      })
                }
            })
      }
    },
    mounted(){
      if (getCookie("username")) {
        this.$router.push("/")
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
  .flag{
    position: absolute;
    right:15%;
  }
  .zc_flag{
    position: absolute;
    right:25%;
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

  .yanzheng {
    width: 80px;
    font-size: 10px;
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
    margin-left: 56%;
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

  .thridparty span {
    margin-left: 15%;
    font-size: 28px;
    display: inline-block;
    margin-bottom: 2em;
    &:first-child {
      margin-left: 0;
    }
  }

  /*注册样式*/
  .lg-regist {
    padding-bottom: 1rem;
    div {
      text-align: left;
      margin-left: 10%;
    }
  }

  div.qr-pwd {
    margin-left: 6%;
  }

  .rt-regist {
    margin-left: 20%;
  }
</style>
