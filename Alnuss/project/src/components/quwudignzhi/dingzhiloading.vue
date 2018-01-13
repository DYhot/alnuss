<template>
  <div class="sectiontwo">
    <div class="dingimgs">
      <div class="listone_f1">
        <img :src="$path+img1" alt="">
        <div class="blank" title="简约"></div>
      </div>
      <div class="listone_f2">
        <img :src="$path+img2" alt="">
        <div class="blank" title="大气"></div>
      </div>

      <div class="ddingimgs">
        <div class="ddingimgsbotto">
          <img :src="$path+img3" alt="">
          <div class="blankbotto" title="时尚"></div>
        </div>
        <div class="blankbutton">
          <button>
            <span>加载更多...</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "dingzhiloading",
    props:['img1','img2','img3']
  }
</script>

<style scoped>
  .sectiontwo{
    width: 100%;
    margin-top: 30px;
    display: inline-block;
  }
  .dingimgs{
    width: 67%;
    height: auto;
    margin: 0 auto;
    /*font-size:0;*/
  }
  .dingimgs img{
    max-width: 450px;
    display: block;
    transition: all .3s linear;
  }
  .listone_f1{
    /*outline:1px solid green;*/
    float: left;
    position: relative;
    overflow: hidden;
  }
  .listone_f2{
    float: left;
    /*outline:1px solid red;*/
    position: relative;
    overflow: hidden;
  }
  .blank{
    width: 450px;
    height: 320px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s linear 0s;
    position: absolute;
    top:0;
    z-index: 999;
  }
  .blank:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .listone_f1 > .blank::after {
    bottom: 30px;
    content: attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    right: 20px;
    transition: all 0.3s linear 0s;
    width: 100px;
    z-index: 4;
  }
  .listone_f1:hover .blank::after {
    opacity: 1;
  }
  .listone_f1 > .blank::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    bottom: -10px;
    content: "";
    height: 160px;
    opacity: 0;
    position: absolute;
    right: -10px;
    transition: all 0.3s linear 0s;
    width: 160px;
    z-index: 4;
  }
  .listone_f1:hover .blank::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }
  .listone_f1:hover>img {
    transform:scale(1.2,1.2);
  }
  /*第二张图特效*/
  .listone_f2 > .blank::after {
    bottom: 30px;
    /*content: "简约——键而不凡,呈现出舒服的感觉";*/
    content: attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    left: 20px;
    transition: all 0.3s linear 0s;
    width: 100px;
    z-index: 4;
  }
  .listone_f2:hover .blank::after {
    opacity: 1;
  }
  .listone_f2 > .blank::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    bottom: -10px;
    content: "";
    height: 160px;
    opacity: 0;
    position: absolute;
    left: -10px;
    transition: all 0.3s linear 0s;
    width: 160px;
    z-index: 4;
  }
  .listone_f2:hover .blank::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }
  .listone_f2:hover>img {
    transform:scale(1.2,1.2);
  }
  .ddingimgs{
    width: 100%;
  }
  .ddingimgsbotto{
    display: inline-block;
    position: relative;
    overflow: hidden;
    /*outline: 1px solid rebeccapurple;*/
  }
  .ddingimgsbotto>img{
    max-width: 900px;
    transition: all .3s linear;
  }
  .blankbutton>button{
    width: 120px;
    height: 30px;
    margin: 20px auto;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.2);
  }
  .blankbotto{
    width: 900px;
    height: 650px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s linear 0s;
    position: absolute;
    top:0;
    z-index: 999;
  }
  .blankbotto:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .ddingimgsbotto > .blankbotto::after {
    top: 30px;
    content: attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    right:400px;
    transition: all 0.3s linear 0s;
    width: 100px;
    z-index: 4;
  }
  .ddingimgsbotto:hover .blankbotto::after {
    opacity: 1;
  }
  .ddingimgsbotto > .blankbotto::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    top: -30px;
    content: "";
    height: 160px;
    opacity: 0;
    position: absolute;
    right: 370px;
    transition: all 0.3s linear 0s;
    width: 160px;
    z-index: 4;
  }
  .ddingimgsbotto:hover .blankbotto::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }
  .ddingimgsbotto:hover>img {
    transform:scale(1.2,1.2);
  }
</style>

