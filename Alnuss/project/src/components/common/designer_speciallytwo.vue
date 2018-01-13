<template>
  <figure>
    <img :src="'../../../static/images/'+imgsrc" alt="">
    <div class="line"></div>
    <h2>{{productTitle}}</h2>
  </figure>
</template>
<script>
  export default{
    name:"designer_speciallytwo",
    props:{
      imgsrc:{},
      productTitle:{}
//      whclass:{}
    }
  }
</script>

<style scoped lang="less">
  figure {
    position: relative;
    /*float: left;*/
    overflow: hidden;
    /*margin: 10px 1%;*/
    /*min-width: 320px;*/
    /*max-width: 480px;*/
    /*max-height: 360px;*/
    width: 338px;
    height: 320px;
    background-color: rgba(126, 129, 139, 0.8);
    text-align: center;
    cursor: pointer;
    &:hover h2{
      opacity: 1;
    }
    .line{
      border: 1px solid white;
      width: 200px;
      height: 200px;
      border-radius: 200px;
      position: absolute;
      top: -135px;
      left: -105px;
      opacity: 0;
      -webkit-transition: all .2s linear;
    }
    &:hover .line{
      opacity: 1;
      top: -105px;
      left: -65px;
    }
  }
 figure h2{
    position: absolute;
   color: white;
    top: 15px;
    left: 15px;
   opacity: 0.5;
  }
  figure img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    -webkit-transition: all .3s linear;
  }
  figure img:hover{
    opacity: 0.5;
    -webkit-transform: scale(1.1,1.1);
  }
  figure img:after{
    content: "";
  }
  figure h2 span {
    font-weight: 800;
  }
  figure h2{
    font-size: 18px;
  }
</style>
