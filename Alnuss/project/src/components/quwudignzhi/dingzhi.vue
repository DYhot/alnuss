<template>
<div class="dingone">

  <div class="dingimg">
    <img :src="$path+imgData[0].imgsrc" alt="">
    <!--<img :src="'aaa/img/'+imgData[0].imgsrc" alt="">-->
  </div>

  <div class="fontone">
    <h3>精选定制</h3>
    <hr>
    <!--<div class="line"></div>-->
    <h5>多种风格任你选择</h5>
  </div>
  <!--风格-->
  <dingzhistyle :img1="imgData[1].imgsrc" :img2="imgData[2].imgsrc" :img3="imgData[3].imgsrc" :img4="imgData[4].imgsrc"></dingzhistyle>
  <!--项目-->
  <dignzhiproject :img1="imgData[5].imgsrc"></dignzhiproject>
  <!--加载更多-->
  <dingzhiloading :img1="imgData[6].imgsrc" :img2="imgData[7].imgsrc" :img3="imgData[8].imgsrc"></dingzhiloading>

  <div class="fonttwo">
    <h3>定制你喜欢</h3>
    <hr>
    <h5>知道更多关于我们的案例</h5>
  </div>
  <!--案例-->
  <dingzhidetail :img1="imgData[9].imgsrc" :img2="imgData[10].imgsrc" :img3="imgData[11].imgsrc"></dingzhidetail>

</div>
</template>

<script>
  import dingzhidetail from './dingzhidetail.vue'
  import dingzhiloading from './dingzhiloading.vue'
  import dingzhistyle from './dingzhistyle.vue'
  import dignzhiproject from './dignzhiproject.vue'
    export default {
        name: "dingzhi",
      data:function() {
          return{
            imgData:[]
          }
      },
      components:{
        dingzhidetail:dingzhidetail,
        dingzhiloading:dingzhiloading,
        dingzhistyle:dingzhistyle,
        dignzhiproject:dignzhiproject,
      },
      created () {
          this.$axios.get('/api/dingzhi.do')
            .then(data=>{
              this.imgData = data.data ;
            })

      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  h4{
    margin: 10px auto;
    /*display: inline-block;*/
  }
  .dingone{
    width: 100%;
    height: auto;
  }
  .dingimg{
    width: 100%;
    /*height:auto;*/
  }
  .dingimg>img{
    max-width: 1346px;
  }
  .fontone{
    margin-bottom: 7px;
    width: 100%;
  }
  .fonttwo{
    margin-bottom: 7px;
    width: 100%;
  }
  hr{
    width: 100px;
    margin: 10px auto;
    background-color: rgba(0,0,0,0.9);
  }
</style>

