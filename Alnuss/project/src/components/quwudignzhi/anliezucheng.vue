<template>
  <div class="piczucheng">
    <div class="captiontwo">
      <h3>{{name}}</h3>
      <hr>
      <h5>{{script}}</h5>
    </div>

    <div class="pictures">
      <div class="picturesv">
        <div class="picturesone">
          <img src="../../../static/images/bedrom1.jpg" alt="">
          <div class="blankleft" title="折叠床">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
        <div class="picturesone">
          <img src="../../../static/images/bedrom2.jpg" alt="">
          <div class="blankleft" title="电视柜">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
        <div class="picturesone">
          <img src="../../../static/images/bedrom3.jpg" alt="">
          <div class="blankleft" title="衣橱柜">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
        <div class="picturesone">
          <img src="../../../static/images/sitroom1.jpg" alt="">
          <div class="blankleft" title="床头柜">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
        <div class="picturesone">
          <img src="../../../static/images/sitroom2.jpg" alt="">
          <div class="blankleft" title="吊灯">
            <button>
              <span>查看详情</span>
              <!--<router-link to="/anliedetail" tag="span">查看详情</router-link>-->
            </button>
          </div>
        </div>
        <div class="picturesone">
          <img src="../../../static/images/sitroom3.jpg" alt="">
          <div class="blankleft" title="沙发">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "anliezucheng",
    props:["name","script"]
  }
</script>

<style scoped>
  .piczucheng{
    width: 100%;
  }
  .captiontwo{
    margin-bottom: 7px;
    width: 100%;
  }
  hr{
    width: 100px;
    margin: 10px auto;
    background-color: rgba(0,0,0,0.9);
  }
  .pictures{
    width: 100%;
  }
  .picturesv{
    width: 70%;
    margin: 0 auto;
    display: inline-block;
  }
  .pictures img{
    max-width: 300px;
    margin: 4px 4px;
    float: left;
  }
  .picturesone{
    position: relative;
    display: inline-block;
    /*outline:1px solid blue;*/
  }
  .picturesone>p{
    margin: 195px 0 20px 0;
    /*outline:1px solid red;*/
  }
  .blankleft{
    width: 300px;
    height: 213px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s linear 0s;
    position: absolute;
    top:4px;
    left:4px;
    z-index: 999;
  }
  .blankleft:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .picturesone > .blankleft::after {
    bottom: 60px;
    content:attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    right: 16px;
    transition: all 0.3s linear 0s;
    width: 80px;
    z-index: 4;
  }
  .picturesone:hover .blankleft::after {
    opacity: 1;
  }
  .picturesone > .blankleft::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    bottom: -10px;
    content: "";
    height: 120px;
    opacity: 0;
    position: absolute;
    right: -10px;
    transition: all 0.3s linear 0s;
    width: 120px;
    z-index: 4;
  }
  .picturesone:hover .blankleft::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }

  .blankleft>button{
    width: 70px;
    height: 22px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s linear 0s;
    position: absolute;
    bottom:20px;
    right: 20px;
    opacity: 0;
    z-index: 999;
  }
  .blankleft>button>span{
    font-size: 8px;
    color: white;
  }
  .picturesone:hover .blankleft>button {
    opacity: 1;
  }
</style>

