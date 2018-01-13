<template>
  <div>
    <h3>全屋套装方案</h3>
    <div id="line"></div>
    <h5>Full house suit</h5>
    <div class="top">
      <product_speciallytwo class="img"  v-for="item in productArr3" :key="item.id" :productTitle="item.name" :imgsrc="item.img"
                            whclass="a"
      ></product_speciallytwo>
      <div class="warp">
        <div class="content one">
        <p>商品详细的介绍</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
        </p>
        </div>
      </div>
    </div>
    <div class="medu">
      <div class="warp">
        <div class="content">
        <p>商品详细的介绍</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum
        </p>
        </div>
      </div>
      <!--<img src="../../../static/images/fabulous-design-ideas-of-convertible-furniture-for-small-spaces-with-brown-w.jpg" alt="">-->
      <product_speciallytwo class="img"  v-for="item in productArr2" :key="item.id" :productTitle="item.name" :imgsrc="item.img"
      ></product_speciallytwo>
    </div>
    <div class="bottom">
      <product_speciallytwo class="list" v-for="item in productArr" :key="item.id" :productTitle="item.name" :imgsrc="item.img"
      ></product_speciallytwo>

      <!--<div class="list">-->
        <!--<img src="../../../static/images/fabulous-design-ideas-of-convertible-furniture-for-small-spaces-with-brown-w.jpg" alt="">-->
        <!--<p>-->
          <!--此项目位于高新区，成都市高新，为用户带来便利-->
        <!--</p>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  /*====商品特效2=====*/
  import product_speciallytwo from "../common/product_speciallytwo.vue"
    export default{
      data () {
        return {
          productArr: [
            {id: 1, name: '定制1', img: 'wj_007.jpg', price: 30},
            {id: 2, name: '定制2', img: 'wj_08.jpg', price: 50},
            {id: 3, name: '定制3', img: 'wj_10.jpg', price: 20}
          ],
          productArr2: [
            {id: 4, name: '定制4', img: 'wj_15.jpg', price: 30}
          ],
          productArr3: [
            {id: 5, name: '定制5', img: 'wj_16.jpg', price: 30}
          ]
        }},
      components: {
        product_speciallytwo
      }
    }
</script>

<style scoped lang="less">
  div{
    font-family: 微软雅黑;
    overflow: hidden;
  }
  #line{
    width: 80px;
    border: 0.5px solid black;
    margin: 0 auto;
  }
  .top{
    float: right;
  }
  .medu{
    float: left;
  }
  .img{
    width: 500px;
    height: 260px;
    display: inline-block;
  }
  .warp{
    width: 673px;
    height: 260px;
    background-color: #f7f7f7;
    display: inline-block;
    right: 0;
  }
  .content{
    width: 500px;
    height: 260px;
    float:right;
  }
  .one{
    float:left;
  }
  .bottom{

    float: left;
    margin-top: 25px;
    margin-left: 142px;
    .list{
      /*border:1px solid #c3c3c3;*/
      float: left;
      margin-left: 26px;
      /*width: 318px;*/
      /*height: 272px;*/
      img{
        /*width: 318px;*/
        /*height: 199px;*/
      }
    }
  }
</style>
