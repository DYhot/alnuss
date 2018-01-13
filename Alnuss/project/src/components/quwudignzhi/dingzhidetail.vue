<template>
  <div class="sectionthree">
    <div class="threeimg">
      <img :src="$path+img1" alt="">
      <div class="blankimg" title="错落有致">
        <button>
          <router-link to="/anliedetail" tag="span">查看详情</router-link>
        </button>

      </div>
    </div>
    <div class="threeimg">
      <img :src="$path+img2" alt="">
      <div class="blankimg" title="风情万中">
        <button>
          <span>查看详情</span>
        </button>
      </div>
    </div>
    <div class="threeimg">
      <img :src="$path+img3" alt="">
      <div class="blankimg" title="粉白弹奏 ">
        <button>
          <span>查看详情</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dingzhidetail",
    props:['img1','img2','img3']
  }
</script>

<style scoped>
  /*第三部分*/
  .sectionthree{
    width: 70%;
    margin: 0 auto;
    /*outline: 1px solid rosybrown;*/
  }
  .sectionthree img{
    max-width: 307px;
    margin: 3px 3px;
    display: block;
  }
  .threeimg{
    max-width: 307px;
    position: relative;
    float: left;
    margin: 0 3px;
    overflow: hidden;
    /*outline: 1px solid red;*/
  }
  .blankimg{
    width: 309px;
    height: 175px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s linear 0s;
    position: absolute;
    top:3px;
    left: 3px;
    z-index: 999;
  }
  .blankimg:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .threeimg > .blankimg::after {
    bottom: 120px;
    /*content: "漫天飞舞";*/
    content:attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    left: 10px;
    transition: all 0.3s linear 0s;
    width: 100px;
    z-index: 4;
  }
  .threeimg:hover .blankimg::after {
    opacity: 1;
  }
  .threeimg > .blankimg::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    bottom: 70px;
    content: "";
    height: 120px;
    opacity: 0;
    position: absolute;
    left: -10px;
    transition: all 0.3s linear 0s;
    width: 120px;
    z-index: 4;
  }
  .threeimg:hover .blankimg::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }
  .blankimg>button{
    width: 55px;
    height: 20px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s linear 0s;
    position: absolute;
    top:70px;
    left: 30px;
    opacity: 0;
    z-index: 999;
    outline: none;
  }
  .blankimg>button>span{
    font-size: 7px;
    color: white;
  }
  .threeimg:hover .blankimg>button {
    opacity: 1;
  }
</style>

