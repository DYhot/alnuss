<template>
  <div>
    <h3>主推产品</h3>
    <div id="line"></div>
    <h5>start products</h5>
    <div class="title">
      <div class="left">
        <ul>
          <li>
            <img src="../../../static/images/Details2.jpg" alt="">
          </li>
          <li>
            <img src="../../../static/images/Details3.jpg" alt="">
          </li>
          <li>
            <img src="../../../static/images/Details4.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="right">
        <!--<img src="../../../static/images/fabulous-design-ideas-of-convertible-furniture-for-small-spaces-with-brown-w.jpg" alt="">-->
        <product_specially whclass="c" class="img" imgsrc="Details1.jpg"></product_specially>
        <div class="guide">
          <h2>产品介绍</h2>
          <p>
            极致简约，给你完美的体验，3d式亲身体验，让你 360度预览各风格式房屋
</p>
        </div>
        <div class="t_times">
          <ul>
            <li class="t_time">
                <h3>365</h3>
                <p>day</p>
            </li>
            <li class="t_time">
              <h3>23</h3>
              <p>hour</p>
            </li>
            <li class="t_time">
              <h3>59</h3>
              <p>minutes</p>
            </li>
            <li class="t_time">
              <h3>25</h3>
              <p>seconds</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <product_specially class="list" v-for="item in productArr" :key="item.id" :productTitle="item.name" :productPrice="item.price"
                         :imgsrc="item.img" whclass="b"
      ></product_specially>
      <!--<div class="list">-->
        <!--<img src="../../../static/images/fabulous-design-ideas-of-convertible-furniture-for-small-spaces-with-brown-w.jpg" alt="">-->
        <!--<p>-->
          <!--此项目位-->
        <!--</p>-->
        <!--<span>$330</span>-->
      <!--</div>-->
    </div>
    <div class="bottom tomm">
      <product_specially class="list" v-for="item in productArr2" :key="item.id" :productTitle="item.name" :productPrice="item.price"
                         :imgsrc="item.img" whclass="b"
      ></product_specially>
    </div>
  </div>
</template>

<script>
  /*====商品特效=====*/
  import product_specially from "../common/product_specially.vue"
    export default{
      data () {
        return {
        productArr: [
          {id: 1, name: '产品1', img: 'gy_pro1.jpg', price: 30},
          {id: 2, name: '产品2', img: 'gy_pro2.jpg', price: 50},
          {id: 3, name: '产品3', img: 'gy_pro3.jpg', price: 20},
          {id: 4, name: '产品4', img: 'gy_pro4.jpg', price: 60}
        ],
          productArr2: [
            {id: 5, name: '产品5', img: 'gy_pro5.jpg', price: 30},
            {id: 6, name: '产品6', img: 'gy_pro6.jpg', price: 50},
            {id: 7, name: '产品7', img: 'gy_pro7.jpg', price: 20},
            {id: 8, name: '产品8', img: 'gy_pro8.jpg', price: 60}
          ]
      }},
      components: {
        product_specially
      }
    }
</script>

<style scoped lang="less">
  div{
    margin-top: 45px;
    font-family: 微软雅黑;
    overflow: hidden;
  }
  #line{
    width: 80px;
    border: 0.5px solid black;
    margin: 0 auto;
  }
  .title{
    width: 100%;
    height: 320px;
    background-color: #f7f7f7;
    .left{
      float: left;
      margin-top: 15px;
      margin-left: 170px;
      ul>li>img{
        width: 120px;
        height: 90px;
        margin-bottom: 13px;
      }

    }
    .right{
      width: 866px;
      height: 288px;
      background-color: white;
      margin-top: 15px;
      margin-left: 20px;
      float: left;
      .img{
        float: left;
        width: 276px;
        height: 245px;
        margin-top: 25px;
        margin-left: 20px;
      }
      .guide{
        float: left;
        width: 384px;
        height: 288px;
      }
      .t_times{
        float: right;
        margin-top: 0;
        background-color: #ffcc66;
        color: white;
        .t_time{
          line-height: 35px;
          width: 120px;
          height: 71px;
          border: 1px solid white;
          h4{
            /*margin-top: 5px;*/
          }
        }
      }
    }
  }

  .bottom{
    float: left;
    margin-top:25px;
    margin-left: 146px;
    .list{
      float: left;
      margin-left: 23px;
      margin-top: 25px;
      /*width: 235px;*/
      /*height: 272px;*/
      img{
        /*width: 235px;*/
        /*height: 191px;*/
      }
    }
  }
  .tomm{
    margin-top:-15px;
  }
</style>
