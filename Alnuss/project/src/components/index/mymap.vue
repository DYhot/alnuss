<template>
  <div>
    <h3>设计服务流程</h3>
    <div class="line"></div>
    <h5>Design service process</h5>
    <div class="serviceProcess">
      <div class="circle one">
        <div>
          <img src="../../../static/images/circle1.png" alt="">
        </div>
        <h3>01<span>量房阶段</span></h3>
      </div>
      <div class="circle two">
        <h3>02<span>预测阶段</span></h3>
        <div>
          <img src="../../../static/images/circle2.png" alt="">
        </div>
      </div>
      <div class="circle three">
        <div>
          <img src="../../../static/images/circle3.png" alt="">
        </div>
        <h3>03<span>深化阶段</span></h3>
      </div>
      <div class="circle four">
        <h3>04<span>配套阶段</span></h3>
        <div>
          <img src="../../../static/images/circle4.png" alt="">
        </div>
      </div>
      <div class="circle five">
        <div>
          <img src="../../../static/images/circle5.png" alt="">
        </div>
        <h3>05<span>摆场阶段</span></h3>
      </div>
      <div class="circle six">
        <h3>06<span>结案阶段</span></h3>
        <div>
          <img src="../../../static/images/circle6.png" alt="">
        </div>
      </div>
    </div>
    <div id="serve">
      <div class="left">
      <p class="linian">心随环境而变</p>
      <p class="linian">为你打造心的空间</p>
      <p class="about_p"><span class="jiacu">联系电话：</span>028-5682376 <i class="iconfont tubiao">&#xe649;</i></p>
      <p class="about_p about_p1"><span class="jiacu">地址：</span>四川省成都市景翠苑附近 <i class="iconfont tubiao">&#xe64e;</i></p>
      <p class="about_p about_p1"><span class="jiacu">邮箱：</span>JEANchive@design.com <i class="iconfont tubiao">&#xe76a;</i></p>
      </div>
        <mmap id="map" :m="giveData"></mmap>
    </div>
  </div>
</template>

<script>
  import mmap from "./map.vue"
    export default{
      data () {
        return {
          giveData:{  //vue2.0将数据定位对象的形式，实现父子组件的通信
            height:300,
            longitude:104.062317,
            latitude:30.546279
          }
        }
      },
      components:{
        mmap:mmap
      },
    }
</script>

<style scoped lang="less">
  *{
    font-family: 微软雅黑;
  }
  @font-face {
    font-family: 'iconfont';
    src: url('../../../static/font/mapfont/iconfont.woff');
  }
  h3{
    margin-top: 35px;
  }
  .line{
    border: 1px solid black;
    margin: 0 auto;
    width: 80px;
  }
  .serviceProcess{
    width: 100%;
    margin-top: 15px;
    height: 364px;
    background-color: #f7f7f7;
    .circle{
      float: left;
      margin-left: 10px;
      margin-top: 20px;
      color: #5d5d5d;
      img{
        width: 160px;
        height: 160px;
        margin-top: 45px;
      }
      h3{
        margin-top: 50px;
        span{
          font-size: 16px;
        }
      }
    }
    .one{
      margin-left: 165px;
    }
  }
  #map{
    height: 270px;
    width: 600px;
    margin-left: 420px;
    float: right;
    /*border: 1px solid red;*/
  }
  #serve{
    position: relative;
    margin-left: 160px;
    margin-top: 25px;
    margin-bottom: 30px;
    float: left;
  }
  .jiacu{
    font-size: 15px;
    font-weight: bold;
  }
  .linian{
    font-size: 25px;
    color: #515151;
    text-align: left;
    line-height: 70px;
  }
  .linian:nth-of-type(2){
    margin-left: 180px;
  }
  .left{
    position: absolute;
    width: 410px;
    height: 270px;
  }

  .about_p{
    margin-top: 5px;
    font-size: 14px;
    text-align: left;
    color: #515151;
    letter-spacing: 1px;
    line-height: 25px;
    padding-top: 20px;
  }
  .about_p1{
    padding-top: 2px;
  }
  .tubiao{
    font-size: 14px;
    color: #515151;
    padding-left: 10px;
    font-family: 'iconfont';
  }



</style>
