<template>
  <figure>
    <div class="img">
      <a :href="'../static/pages/'+html">
      <img class="yp-img" :src="'/api/images/'+imgsrc">
      <div class="img-content">
         {{img_content}}
      </div>
      </a>
    </div>
    <div class="ct-content">
      {{ct_content}}
    </div>
    <div class="desiger">
      <div class="des_left">
         <img class="img-desiger" :src="'/api/images/'+des_img">
         <span>{{des_people}}</span>
      </div>
      <div class="des_right">
        <span>&#xe50f;</span>
         <span>&#xe682;</span>
         <span>&#xe616;</span>
      </div>
    </div>
  </figure>
</template>
<script>
  export default{
      name:"showlist",
    data(){
        return {

        }
    },
      props:["html","imgsrc","des_img","img_content","ct_content","des_people"]
  }
</script>
<style scoped lang="less">
  @font-face {
    font-family: 'speciallyfont';
    src: url('../../../static/font/font_gjrbumtujbhb0529/iconfont.woff');
  }
  figure{
    width: 294px;
    height: 317px;
    float: left;
    position: relative;
    margin-left:8%;
    margin-bottom:4%;
    .img-desiger{
      width: 30px;
      height: 30px;
    }
    .yp-img{
      width: 100%;
      height: 217px;
    }
    &:hover .des_right span{
      opacity: 1;
    }
  }
  .img{
    width: 100%;
    height: 217px;
    position: relative;
    .img-content{
      position: absolute;
      bottom:0;
      width: 100%;
      background: rgba(0,0,0,0.2);
      padding:0.5rem 0;
      text-align: center;
      color: whitesmoke;
      font-weight: bold;
    }
  }
  .ct-content{
    text-align: left;
    font-size: 15px;
    padding:8px 5px;
    border:1px solid #ebebeb;
  }
  .desiger{
    width: 100%;
    height: 50px;
    margin-top:2px;
    .des_left{
      float: left;
      width: 50%;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      img{
        float: left;
      }
      span{
        float: left;
      }
    }
  }
  .des_right{
    font-family: "speciallyfont";
    span{
      display: inline-block;
      background: #ededed;
      width: 20px;
      height:20px;
      line-height: 20px;
      padding:5px;
      border-radius: 50%;
      color:gray;
      opacity: 0;
      &:hover{
        background-color: rgba(77,77,77,0.7);
        color: black;
        cursor: pointer;
      }
    }
  }
</style>
