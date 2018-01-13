<template>
  <footer>
    <div class="left">
      <img src="../../../static/images/logo.png">
    </div>
    <div class="right">
      <article>
        <h5>客服服务</h5>
        <p>联系我们</p>
        <p>购物攻略</p>
      </article>
      <article>
        <h5>关于我们</h5>
        <p>设计理念</p>
        <p>小屋也能装大世界</p>
      </article>
      <article>
        <h5>工作在Alnuss</h5>
        <p>现在就申请</p>
      </article>
      <article>
        <h5>订阅更新</h5>
      </article>
    </div>
    <div class="address">
      <span>Alnuss家具品牌&copy;2017四川成都天府三街云华路1号</span>
    </div>
  </footer>
</template>
<script>
  export default{
      name:"footer"
  }
</script>
<style scoped lang="less">
  * {
    margin: 0;
    padding: 0;
  }
  footer {
     width: 100%;
     overflow: hidden;
     background: #484848;
     padding:1rem 0;
   }
  .left {
    width: 20%;
    float: left;
    line-height: 200px;
    img {
      width: 70%;
      height: 100%;
      margin-top:20%;
      margin-left:10%;
    }
  }
  .right {
    float: right;
    width: 80%;
    overflow: hidden;
  }
  article{
    float: left;
    margin-left:7rem;
    color: #fff;
    h5{
      margin-bottom:2rem;
    }
    p{
      margin-bottom:1rem;
      color: grey;
      font-weight: bold;
      font-size: 14px;
    }
  }
  .address{
    margin-top:10rem;
    color: grey;
    span{
      margin-left:-13rem;
    }
  }
</style>
