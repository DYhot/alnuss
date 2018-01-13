<template>
  <div>
    <one></one>
    <div class="box">
      <div class="overview">
        <div class="overview-left">
          <h2>网站简介 /about</h2>
          <p> Alnuss网站不是大而全的家居建材网站，也不是只面对行业的家居媒体，家
            具迷网站是一个面对消费者的家具门户 网站，亦可理解为家具导购类网站我
            们本着以“凝alnuss企业文化之精髓，创家具优秀之品牌”的精神和“为客户创
            造价值”的信誉理念立足市场，倾力打造alnuss优秀的国际品牌，努力朝一流
            的企业迈进。设计理念空间的利用，视觉上的享受，设计的简洁、大方都将是
            流行的趋势，也是设计师们努力追求的方向每一个转角，每一个功能，每一
            个结构，我们努力做到有限空间，无限可能，一切都因你而追求完美，细节
            铸就品质，诚信共创未来。品牌文化“卡诺诗”是一个时尚、潮流的家居品牌，
            它极力倡导一种个性、简洁、自然的现代主流的家居文化，给您带来摩登、时
            尚的家居环境。</p>
        </div>
        <div class="overview-right">
          <img src="../../../static/images/historyBanner7.jpg" alt="">
        </div>
      </div>
      <div class="serviceContent">
        <div class="overview-left">
          <img src="../../../static/images/picture21.jpg" alt="">
        </div>
        <div class="overview-right">
          <h2>服务内容/service</h2>
          <h4>整体软装设计</h4>
          <p> 精装豪宅、高端别墅、高端住宅、私人会所、特色餐厅、售楼样板房等空间的软装设计（家具、配饰等整体设计）。
          </p>
          <h4>整体软装设计</h4>
          <p>精装豪宅、高端别墅、高端住宅、私人会所、特色餐厅、售楼样板房等空间的软装硬装一体化设计，
            我们会有长期合作的硬装团队和专业的施工团队，他们施工质量高，值得信赖且价格公道。全方
            位打造出属于您的完美独特空间。</p>
        </div>
      </div>
    </div>
    <mymap></mymap>

  </div>

</template>
<script>
 // import AMap from 'AMap';
 import mymap from '../index/mymap';
  import one from '../one';
  export default {
    name: 'aboutme',
    data: function () {
      return {

      }
    },
    components:{
      one:one,
      mymap: mymap
    },
    // mounted() {
    //   this.loadmap();     //加载地图和相关组件
    // },
    methods: {
      // loadmap() {
      //   var map = new AMap.Map('container', {
      //     resizeEnable: true,
      //     zoom: 11,
      //     center: [116.397428, 39.90923]
      //   });
      // }
    }
  }
</script>
<style scoped lang="less">

  @color: red;
  .h4wh {
    width: 150px;
    height: 30px;
    text-align: center;
    background-color: #c7c7c7;
    color: white;
  }

  .widhei {
    width: 100%;
    height: 400px;
    text-align: center;
  }

  .contentWh {
    width: 45%;
    height: 100%;
    text-align: left;
    line-height: 30px;
    font-size: 15px;
  }

  .h2P {
    font-weight: lighter;
    color: #8C8C8C;
  }

  .h4P {
    font-weight: lighter;
    color: #8c8c8c;
    margin-top: 10px;
  }

  .circleimg {
    width: 150px;
    height: 150px;
    margin-left: -5px;
    margin-top: -5px;
  }

  .circlespan {
    font-size: 16px;
    margin-left: 5px;
  }
  .box {
    width: 80%;
    margin: 0 auto;
  }
  .banner{
    width: 100%;
    height: 400px;
    border: 1px solid red;

  }
  h1 {
    color: @color;
  }

  .overview {
    margin-top: 30px;
    .widhei;
    > div {
      float: left;
    }
  }

  .overview-left, .overview-right {
    .contentWh;
    > p {
      text-indent: 35px
    }
  ;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  .overview-left {
    margin-right: 50px;
    margin-left: 20px;
    >h2{
      margin-bottom: 20px;
    }
  }

  .serviceContent {
    margin-top: 30px;
    .widhei;
    > div {
      float: left;
    }
  ;
    > div:nth-of-type(1) {
      margin-left: 20px;
    }
    >.overview-left{
      margin-left: -80px;
    }
    > .overview-right {
      padding-left: 10px;
      margin-left: 0px;
      >h2{
        margin: 50px 0 20px 0;
      }
      > h4 {
        .h4wh
      }
    ;
      > p {
        text-indent: 30px
      }
    ;
    }
  }

  .serviceProcess {
    margin-bottom: 20px;
    .widhei;
    > h2 {
      margin-top: 50px;
      .h2P;
    }
  ;
    > h4 {
      margin-bottom: 60px;
      .h4P;
    }
  ;
    > div {
      float: left;
      margin-right: 31px;
      > div {
        width: 140px;
        height: 140px;
        border-radius: 70px;
        overflow: hidden;
        border: 3px solid #c6c6c6;
        margin: 0 auto;

        > img {
          .circleimg;
          transition: transform ease 0.3s;
        }
      ;
        &:hover {
          > img {
            transform: scale(1.2);
            transition: transform ease 0.3s;
          }
        ;
        }
      }
    ;
      h2 {
        color: #8C8C8C;
        > span {
          .circlespan;
        }
      }
    }
  ;
    > div:nth-of-type(2), > div:nth-of-type(4), > div:nth-of-type(6) {
      margin-top: 30px;
    }
  ;
    > div:nth-of-type(1) {
      margin-left: 15px;
    }
  ;
  }

  .adress {
    .widhei;
    > h2 {
      .h2P
    }
  ;
    > h4 {
      .h4P
    }
    > div {
      float: left;
    }
    > div:nth-of-type(1) {
      width: 40%;
      height: 65%;
      color: #5f5f5f;
      margin: 100px 50px 50px 50px;
      > h4 {
        text-align: left;
        font-weight: lighter;
        margin-top: 20px;
      }
      > h2:nth-of-type(1) {
        text-align: left;
        font-weight: lighter;
      }
      > h2:nth-of-type(2) {
        font-weight: lighter;
        text-align: right;
      }
    }
  }

  .mymap {
    border: 1px solid #e4e4e4;
    float: right;
    width: 50%;
    height: 70%;
    margin-top: 50px;
  }

</style>
