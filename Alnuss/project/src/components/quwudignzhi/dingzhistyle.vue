<template>
  <div class="main_list">
    <div class="dingimgs">
      <div class="listone_f1">
        <img :src="$path+img1" alt="">
        <div class="blank" title="米兰风"></div>
      </div>
      <div class="listone_f2">
        <img :src="'../../../static/images/'+img2" alt="">
        <div class="blank" title="温暖风"></div>
      </div>
    </div>

    <div class="dingimgss">
      <div class="dingimgssleft">
        <img :src="'../../../static/images/'+img3" alt="">
        <div class="blankleft" title="北欧风"></div>
      </div>
      <figure class="imgfigure">
        <div class="dingimgssright">
          <img :src="'../../../static/images/'+img4" alt=""/>
          <div class="blankright" title="日系风"></div>
        </div>
        <h4>艺术风格</h4>
        <p>适当的选择合适的搭配，能够营造出舒适的室内环境氛围，独特的设计风格是我们设计的一大特点，
          能够适应各方面的需求人群，主要有古典、现代、艺术、简约、时尚、流行等风格，最大程度地与视觉审美方面
          的要求相结合，达到客户的室内设计的艺术审美要求。</p>
      </figure>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dingzhistyle",
    props:['img1','img2','img3','img4']
  }
</script>

<style scoped>
  .main_list{
    width: 100%;
    height: auto;
    display: inline-block;
    /*outline: 1px solid red;*/
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
  /*第二部分图片*/
  .dingimgss{
    width: 67%;
    /*height: 60%;*/
    margin: 0 auto;
    /*outline:1px solid blueviolet;*/
    /*display: inline-block;*/
  }
  .dingimgssleft{
    width: 50%;
    float: left;
    /*display: block;*/
    position: relative;
    overflow: hidden;
  }
  .imgfigure{
    width: 50%;
    float: left;
    margin: 0;
    /*display: block;*/
    position: relative;
  }
  .imgfigure>h4{
    max-width: 450px;
    margin: 13px 0;
  }
  .imgfigure>p{
    max-width: 450px;
    text-align: left;
    line-height: 26px;
    text-indent: 20px;
    margin:10px 0 0 10px ;
  }
  .dingimgssright{
    margin: 0;
    position: relative;
    overflow: hidden;
  }

  .dingimgssleft>img{
    width: 450px;
    height: 470px;
    /*outline:1px solid gold;*/
    display: block;
    transition: all .3s linear;
  }
  .dingimgssright>img{
    width: 450px;
    height: 300px;
    /*outline:1px solid lightcoral;*/
    display: block;
    transition: all .3s linear;
  }


  /*特效*/
  .blank{
    width: 450px;
    height: 315px;
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
  .blankleft{
    width: 450px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s linear 0s;
    position: absolute;
    top:0;
    z-index: 999;
  }
  .blankleft:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .dingimgssleft > .blankleft::after {
    bottom: 400px;
    content: attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    right: 20px;
    transition: all 0.3s linear 0s;
    width: 100px;
    z-index: 4;
  }
  .dingimgssleft:hover .blankleft::after {
    opacity: 1;
  }
  .dingimgssleft > .blankleft::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    bottom: 350px;
    content: "";
    height: 160px;
    opacity: 0;
    position: absolute;
    right: -10px;
    transition: all 0.3s linear 0s;
    width: 160px;
    z-index: 4;
  }
  .dingimgssleft:hover .blankleft::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }
  .dingimgssleft:hover>img {
    transform:scale(1.2,1.2);
  }
  /*第四张图*/
  .blankright{
    width: 450px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s linear 0s;
    position: absolute;
    top:0;
    z-index: 999;
  }
  .blankright:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .dingimgssright > .blankright::after {
    bottom: 200px;
    content: attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    left: 20px;
    transition: all 0.3s linear 0s;
    width: 100px;
    z-index: 4;
  }
  .dingimgssright:hover .blankright::after {
    opacity: 1;
  }
  .dingimgssright > .blankright::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    bottom: 150px;
    content: "";
    height: 160px;
    opacity: 0;
    position: absolute;
    left: -10px;
    transition: all 0.3s linear 0s;
    width: 160px;
    z-index: 4;
  }
  .dingimgssright:hover .blankright::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }
  .dingimgssright:hover>img {
    transform:scale(1.2,1.2);
  }

</style>

