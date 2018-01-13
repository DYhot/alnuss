<template>
  <div class="projectdetail">
    <div class="projectdetaildiv">
      <div class="imformation">
        <!--{{anliedata.imfomation}}-->
        <h3>项目信息</h3>
        <p>户型：{{huxin}}</p>
        <p>面积： {{mianji}}</p>
        <p>风格： {{styles}}</p>
        <p>类型： {{leixin}}</p>
        <p>地址：{{address}}</p>
        <h3>业主需求</h3>
        <p>{{content}}</p>
      </div>
      <div class="picture">
        <h5>户型图</h5>
        <img src="../../../static/images/户型图1.jpg" alt="">
      </div>
      <div class="desinger">
        <img src="../../../static/images/设计师1.jpg" alt="">
        <h3>{{name}}</h3>
        <hr>
        <h5>{{myyear}}</h5>
        <router-link to="/designerdetail" tag="button">查看详情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "anlieproject",
        props:["huxin","mianji","styles","leixin","address","content","name","myyear","script"]
    }
</script>

<style scoped>
  /*第一部分*/
  .projectdetail{
    width: 100%;
    /*outline:1px solid tan;*/
    display: inline-block;
  }
  .projectdetaildiv{
    width: 70%;
    background-color: ghostwhite;
    margin: 0 auto;
  }
  .imformation{
    width: 30%;
    float: left;
  }
  .imformation>h3{
    margin-top: 15px;
    text-align: left;
  }
  .imformation>p{
    margin-top: 10px;
    text-align: left;
  }
  hr{
    width: 100px;
    margin: 10px auto;
    background-color: rgba(0,0,0,0.9);
  }
  .picture{
    width: 40%;
    float: left;
  }
  .picture img{
    max-width: 400px;
  }
  .desinger{
    width: 30%;
    float: left;
    /*outline: 1px solid red;*/
  }
  .desinger>img{
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  .desinger>button{
    width: 90px;
    height: 30px;
    margin-top: 15px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>

