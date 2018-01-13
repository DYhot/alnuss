<template>
  <figure>
    <div class="img">
     <router-link to="/3dvr" tag="a">
      <img class="yp-img" :src="'../../../static/images/'+imgsrc">
      <div class="img-content">
         {{img_content}}
      </div>
     </router-link>
    </div>
    <div class="ct-content">
      {{ct_content}}
    </div>
  </figure>
</template>
<script>
  export default{
      name:"showlist",
      props:["imgsrc","des_img","img_content","ct_content","des_people"]
  }
</script>
<style scoped lang="less">
  @font-face {
    font-family: 'speciallyfont';
    src: url('../../../static/font/font_gjrbumtujbhb0529/iconfont.woff');
  }
  figure{
    width: 490px;
    height: 352px;
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
      /*height: 217px;*/
    }
    &:hover .des_right span{
      opacity: 1;
    }
  }
  .img{
    width: 100%;
    /*height: 217px;*/
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
