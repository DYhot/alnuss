<template>
  <div id="HTML">
    <div class="cont1">
      <div class="buZ">
        <div class="yuan">1
          <div class="xian"></div>
          <p class="bzFont"><b style="color:#ff9966;">步骤一：模拟设计</b></p>
        </div>
        <div class="yuan">2
          <div class="xian"></div>
          <p class="bzFont">步骤二：家具选择</p>
        </div>
        <div class="yuan">3
          <div class="xian"></div>
          <p class="bzFont">步骤三：颜色选择</p>
        </div>
        <div class="yuan">4
          <div class="xian"></div>
          <p class="bzFont">步骤四：保存设计</p>
        </div>
        <div class="yuan">5
          <p class="bzFont">步骤五：订单生成</p>
        </div>
      </div>
      <p class="shuoM"><b style="color:#ff9966;">说明：</b>你可以选择样板间模板，然后根据您的喜好选择素材来设计，或是上传您的实际居住环境上传图片来设计。</p>
    </div>
    <div class="kong"></div>
    <div class="cont2">
      <div class="cont2-1">
        <div class="cont2-1-1">样板间</div>
        <div class="cont2-1-1">素材</div>
        <select class="cont2-1-1">
          <option value="" disabled>风格</option>
          <option value="北欧">北欧</option>
          <option value="地中海">地中海</option>
          <option value="中式">中式</option>
        </select>
        <select class="cont2-1-1">
          <option value="" disabled>功能</option>
          <option value="北欧">北欧</option>
          <option value="地中海">地中海</option>
          <option value="中式">中式</option>
        </select>
        <div class="allImg">
          <img src="../../static/images/sucai1.png" alt="" class="cont2img">
          <img src="../../static/images/sucai2.png" alt="" class="cont2img">
          <img src="../../static/images/sucai3.png" alt="" class="cont2img">
          <img src="../../static/images/sucai4.png" alt="" class="cont2img">
          <img src="../../static/images/sucai5.png" alt="" class="cont2img">
          <img src="../../static/images/sucai6.png" alt="" class="cont2img">
        </div>
      </div>
      <div class="cont2-2">
        <img src="../../static/images/sucai7.jpg" alt="" width="660px" height="411px" class="cont2-2img">
      </div>
      <div class="cont2-3">
        <div class="cont2-3top">
          <div class="cont2-3-1">更换配色</div>
          <div class="cont2-3-1">上传图片</div>
        </div>
        <p class="shuoM2"><b style="color:#ff9966;">说明：</b>选中图片区域即可换色</p>
        <div class="color">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'myDesign'
  }

</script>
<style scoped>
  #HTML{
    overflow: hidden;
  }
  *{
    margin: 0;
    padding: 0;
  }
  /*第一部分*/
  .cont1{
    position: relative;
    height: 120px;
    width: 100%;
    background-color: rgb(239,239,239);
  }
  .yuan{
    position: relative;
    width: 19px;
    height: 19px;
    border: 1px solid #333333;
    border-radius: 20px;
    line-height: 20px;
    text-align: center;
    float: left;
    color: #333333;
    margin: 10px 141px 0 0;
  }
  .xian{
    position: absolute;
    width: 141px;
    height: 1px;
    background-color: #333333;
    top:10px;
    left:20px;
  }
  .buZ{
    margin: 10px 0 0 342px;
  }
  .bzFont{
    position: absolute;
    left:-40px;
    width: 100px;
  }
  .shuoM{
    position: absolute;
    bottom: 10px;
    left: 290px;
    color: #333333;
  }
  /*间隔div*/
  .kong{
    width: 100%;
    height: 35px;
  }
  /*第二部分*/
  .cont2-1{
    width: 25%;
    height: 650px;
    background-color: white;
    opacity: .8;
    float: left;
  }
  .cont2-2{
    position: relative;
    top: 20px;
    width: 51%;
    background-color: white;
    opacity: .8;
    float: left;
  }
  .cont2-3{
    position: relative;
    width: 24%;
    height: 650px;
    background-color: white;
    opacity: .8;
    float: left;
  }
  .cont2-1-1{
    height: 46px;
    width: 118px;
    float: left;
    text-align: center;
    font-size: 20px;
    margin: 10px 0 0 38px;
  }
  select{
    border: 0;
    background: transparent;
    padding: 0 14px;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    /*在选择框的最右侧中间显示小箭头图片*/
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;
  }
  .allImg{
    margin: 0 0 0 20px;
  }
  .cont2-1btn{
    margin: 30px 0 0 220px;
  }
  .triangle-left {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 16px solid #333333;
    border-bottom: 8px solid transparent;
    float: left;
  }
  .triangle{
    float: left;
    position: relative;
    top:-3px;
    margin: 0 10px 0 10px;
  }
  .triangle-right {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 16px solid #333333;
    border-bottom: 8px solid transparent;
    float: left;
  }
  .cont2img{
    padding: 10px;
  }
  .cont2-2img{
    padding: 60px 10px 10px 10px;
  }
  .cont2-3top{
    margin: 5px 0 0 60px;
  }
  .cont2-3-1{
    width: 100px;
    height: 40px;
    float: left;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
  }
  .shuoM2{
    position: absolute;
    top: 70px;
    left: 50px;
  }
  ul{
    list-style: none;
    position: relative;
    top: 70px;
    left: 37px;
  }
  ul li{
    float: left;
    margin: 20px 30px 30px 10px;
  }
  li:nth-child(1){
    width: 44px;
    height: 42px;
    border: 1px solid red;
    background-color: red;
  }
  li:nth-child(2){
    width: 44px;
    height: 42px;
    border: 1px solid #333366;
    background-color: #333366;
  }
  li:nth-child(3){
    width: 44px;
    height: 42px;
    border: 1px solid #949494;
    background-color: #949494;
  }
  li:nth-child(4){
    width: 44px;
    height: 42px;
    border: 1px solid #0D0D0D;
    background-color: #0D0D0D;
  }
  li:nth-child(5){
    width: 44px;
    height: 42px;
    border: 1px solid #336600;
    background-color: #336600;
  }
  li:nth-child(6){
    width: 44px;
    height: 42px;
    border: 1px solid #CC3333;
    background-color: #CC3333;
  }
  li:nth-child(7){
    width: 44px;
    height: 42px;
    border: 1px solid #000099;
    background-color: #000099;
  }
  li:nth-child(8){
    width: 44px;
    height: 42px;
    border: 1px solid #FF66CC;
    background-color: #FF66CC;
  }
  li:nth-child(9){
    width: 44px;
    height: 42px;
    border: 1px solid #FF6600;
    background-color: #FF6600;
  }
  .cont2-3btn{
    margin: 400px 0 0 200px;
  }
</style>

