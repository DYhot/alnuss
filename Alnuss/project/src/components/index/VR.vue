<template>
  <div>
    <h3>VR体验</h3>
    <div id="line"></div>
    <h5>VR experience</h5>
    <div class="bottom">
      <showlist  class="list" v-for="item in productarr" :key="item.id" :imgsrc="item.imgsrc" :img_content="item.img_content"
                :ct_content="item.ct_content" :des_people="item.des_people"></showlist>
    </div>
    <div class="bottom">
      <showlist  class="list" v-for="item in productarr2" :key="item.id" :imgsrc="item.imgsrc" :img_content="item.img_content"
                 :ct_content="item.ct_content" :des_people="item.des_people"></showlist>
    </div>
  </div>
</template>

<script>
  import showlist from "./showlist.vue";
    export default{
      data(){
        return {
          productarr:[
            {id:1,imgsrc:"3d-1.gif",des_img:"desiger.png",img_content:"中 式 颐 和 园",
              ct_content:"此项目位于高新区，成都市高新，为用户带来便利"},
            {id:2,imgsrc:"3d-1.gif",des_img:"desiger.png",img_content:"中 式 颐 和 园",
              ct_content:"此项目位于高新区，成都市高新，为用户带来便利"}
          ],
          productarr2:[
            {id:3,imgsrc:"3d-1.gif",des_img:"desiger.png",img_content:"中 式 颐 和 园",
              ct_content:"此项目位于高新区，成都市高新，为用户带来便利"},
            {id:4,imgsrc:"3d-1.gif",des_img:"desiger.png",img_content:"中 式 颐 和 园",
              ct_content:"此项目位于高新区，成都市高新，为用户带来便利"}
          ]
        }
      },
      components:{
        showlist:showlist
      },
    }
</script>

<style scoped lang="less">
  div{
    margin-top: 45px;
    font-family: 微软雅黑;
    overflow: hidden;
  }
  #line{
    width: 80px;
    border: 0.5px solid black;
    margin: 0 auto;
  }

  .bottom{
    float: left;
    margin-top:25px;
    margin-left: 146px;
    .list{
    float: left;
    margin-left: 23px;
      border:1px solid #c3c3c3;
    margin-top: 0px;
    width: 500px;
    height: 350px;
    }
  }
  .tomm{
    margin-top:-15px;
  }
</style>
