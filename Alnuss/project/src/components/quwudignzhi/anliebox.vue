<template>
  <div class="pictures">
    <div class="picturesv">
      <div class="picturesone">
        <img src="../../../static/images/detail1.jpg" alt="">
        <div class="blankleft" title="错落有致">
          <button>
            <span>查看详情</span>
          </button>
        </div>
        <p>错落有致</p>
      </div>
      <div class="picturesone">
        <img src="../../../static/images/detail2.jpg" alt="">
        <div class="blankleft" title="风情万种">
          <button>
            <span>查看详情</span>
          </button>
        </div>
        <p>风情万种</p>
      </div>
      <div class="picturesone">
        <img src="../../../static/images/detail3.jpg" alt="">
        <div class="blankleft" title="粉白弹奏">
          <button>
            <span>查看详情</span>
          </button>
        </div>
        <p>粉白弹奏</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "anliebox",
  }
</script>

<style scoped>
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
    margin: 225px 0 20px 0;
    /*outline:1px solid red;*/
  }
  .blankleft{
    width: 300px;
    height: 207px;
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
    content: attr(title);
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
  }
  .blankleft>button>span{
    font-size: 9px;
    color: white;
  }
  .picturesone:hover .blankleft>button {
    opacity: 1;
  }
</style>

