<template >
  <div>
    <div class="paymentnav">
      <ul class="headernav">
        <li><span>1</span><span>我的购物袋</span><img src="../../../static/images/step_cur_b.gif" alt=""></li>
        <li><span>2</span><span>填写核对清单</span><img src="../../../static/images/step_def_g.png" alt=""></li>
        <li><span>3</span><span>订单提交成功</span></li>
      </ul>
    </div>
    <div class="box">
      <div class="orderinfo">
        <ul>
          <li>
            <img src="../../../static/images/selectedcircle.png" alt="">
            <span>订单已于</span><span>{{datetime}}</span><span>提交成功，请您尽快付款！</span> 订单号：
            <span>{{ordernumber}}</span>  | 应付金额：
            <span> ￥{{totalPrice}}.00</span>元
          </li>
          <li>请您在提交订单后 <span>{{countdowntime}}分钟</span> 内完成支付，否则订单会自动取消。</li>
        </ul>
        <ul>
          <li>
            <img src="../../../static/images/WXPAY.png" alt="" v-show="paymentmethod==0">
            <img src="../../../static/images/alipay.jpg" alt="" v-show="paymentmethod==1">
            <img src="../../../static/images/unionpay.gif" alt="" v-show="paymentmethod==2">
            <span v-show="paymentmethod==0">欢迎使用微信支付</span>
            <span v-show="paymentmethod==1">欢迎使用支付宝支付</span>
            <span v-show="paymentmethod==2">欢迎使用银联支付</span>
            <span @click="changePaymethod">更改支付方式</span>
            <img src="../../../static/images/WXPAY.png" alt="" v-show="isShow==1" @click="change(0)">
            <img src="../../../static/images/alipay.jpg" alt="" v-show="isShow==1" @click="change(1)">
            <img src="../../../static/images/unionpay.gif" alt="" v-show="isShow==1" @click="change(2)">
          </li>
          <li id="paysaomaimg">
            <ul class="saoma " id="wexinsaoma" v-show="paymentmethod==0">
              <li>
                <p>扫一扫付款(元)</p>
                <p>￥{{totalPrice}}.00元</p>
                <img src="../../../static/images/weixinzhifu1.png" alt="">
                <img src="../../../static/images/weixinzhifu2.png" alt="">
              </li>
            </ul>
            <ul class="saoma" v-show="paymentmethod==1">
              <li>
                <p>扫一扫付款(元)</p>
                <p>￥{{totalPrice}}.00元</p>
                <img src="../../../static/images/zhifubao1.png" alt="">
                <img src="../../../static/images/zhifubao2.png" alt="">
              </li>
            </ul>
            <ul class="saoma" v-show="paymentmethod==2">
              <li>
                <p></p>
                <p>              暂未支持银联支付
                </p>
              </li>
            </ul>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
        name: 'paymoney',
      data() {
        return {
          datetime:"",
          ordernumber:"",
          paymentmethod:-1,
          isShow:0,
          countdowntime:30
        }
      },
    methods:{
      changePaymethod(){
        this.isShow=1;
      },
      change(val){
        this.paymentmethod=val;
      },
      countdown(){
        let _this=this;
        let m = 29;
        let s = 60;
        var timer1,timer2;
        if(m>0){
          timer1=setInterval(function () {
            m=m-1;
            s=60;
          },60000)
        }
        if(s>0){
          timer2=setInterval(function () {
            s=s-1;
            if(s<10){
              s="0"+s;
            }
            _this.countdowntime=m+":"+s;
          },1000)
        }
        if(m==0&&s==0){
          clearInterval(timer1);
          clearInterval(timer2);
        }
      }
    },
    created(){
          let date=new Date();
          let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
          let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
          let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
          let time=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+hour+":"+minute+":"+second;
          this.datetime=time;
          this.ordernumber=Math.floor(Math.random()*999999999999999999);
          let selected=this.$route.query.paymethod;
          this.paymentmethod=selected.paymentmethod;
          console.log("我是 this.paymentmethod", this.paymentmethod);
          this.countdown()
    },
    computed:{
      ...mapGetters(['totalPrice'])
    },
  }
</script>
<style scoped >
  .box{
    width: 70%;
    color: #1F1F1F;
    margin: 40px auto;
    border: 1px solid #E4E4E4;
    padding: 30px 20px;
    border-top:2px solid #1AFA29;
  }
  .paymentnav{
    width: 73%;
    height: 30px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .paymentnav>.headernav{
    width: 100%;
    height: 100%;
    color: white;
    position: relative;
  }
  .headernav>li{
    width: 33%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    font-size: 14px;
  }
  .headernav>li:nth-of-type(1),
  .headernav>li:nth-of-type(2){
    background-color: #0085D0;
  }
  .headernav>li:nth-of-type(3){
    background-color: #E4E4E4;
  }
  .headernav img{
    position: absolute;
  }
  .headernav>li:nth-of-type(1) img{
    left: 320px;
  }
  .headernav>li:nth-of-type(2) img{
    left: 640px;
  }
  .headernav>li>span:nth-of-type(1){
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 10px;
    display: inline-block;
    background-color: #0085D0;
    border: 1px solid white;
    margin-right: 10px;
    font-size: 12px;
  }
  .headernav>li:nth-of-type(3){
    color: #626262;
  }
  .headernav>li:nth-of-type(3)>span:nth-of-type(1){
    background-color: white;
  }
  .orderinfo{
    color: #999999;
    font-size: 14px;
  }
  .orderinfo>ul:nth-of-type(1)>li:nth-of-type(1)>img{
    width: 25px;
    height: 25px;
    margin-top: 2px;
  }
  .orderinfo>ul:nth-of-type(1)>li:nth-of-type(1)>span{
    color: #ED2668;
  }
  .orderinfo>ul:nth-of-type(1)>li:nth-of-type(1)>span:nth-of-type(1),
  .orderinfo>ul:nth-of-type(1)>li:nth-of-type(1)>span:nth-of-type(3){
    color: #00C800;
    font-weight: bold;
  }
  .orderinfo>ul:nth-of-type(1)>li:nth-of-type(1){
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .orderinfo>ul:nth-of-type(1)>li:nth-of-type(2)>span{
    color: #ED2668;
  }
  .orderinfo>ul:nth-of-type(2){
    width: 99.9%;
    height: 500px;
    margin-top: 30px;
    border-top: 1px solid #cccccc;
  }
  .orderinfo>ul:nth-of-type(2)>li{
    float: left;
    background-color: #f9f9f9;
  }
  .orderinfo>ul:nth-of-type(2)>li:nth-of-type(1){
    width: 100%;
    text-align: left;
    height: 60px;
  }
  .orderinfo>ul:nth-of-type(2)>li:nth-of-type(1)>span{
    display: inline-block;
    width: 15%;
    text-align: left;
    height: 60px;
    line-height: 60px;
    color: #F58F22;
  }
  .orderinfo>ul:nth-of-type(2)>li:nth-of-type(1)>img{
    margin-top: 10px;
  }
  .orderinfo>ul:nth-of-type(2)>li:nth-of-type(1)>span:nth-of-type(4){
    cursor: pointer;
    color: #0085D0;
    margin-left: 10px;
  }
  .orderinfo>ul:nth-of-type(2)>li:nth-of-type(1) img:nth-of-type(3),
  .orderinfo>ul:nth-of-type(2)>li:nth-of-type(1) img:nth-of-type(4),
  .orderinfo>ul:nth-of-type(2)>li:nth-of-type(1) img:nth-of-type(5){
    cursor: pointer;
  }
  #paysaomaimg{
    width: 100%;
  }
  .saoma{
    width: 80%;
    height: 20%;
    margin: 0 auto;
    /*border: 1px solid red;*/
  }
  .saoma img:nth-of-type(1){
    margin-left: 120px;
  }
  .saoma img:nth-of-type(2){
    width: 20%;
    height: 20%;
  }
  .saoma p:nth-of-type(1){
    margin-top: 50px;
  }
  .saoma p:nth-of-type(2){
    font-size: 30px;
    font-weight: bold;
    color: #FF6600;
    margin-bottom: 30px;
    margin-top: 10px;
  }
  #wexinsaoma img:nth-of-type(2){
    width: 30%;
    height: 30%;
  }
  #wexinsaoma img:nth-of-type(1){
   margin-left: 250px;
    margin-top: 50px;
    margin-right: 30px;
  }
</style>
