<template>
  <div class="allbox">

    <shopevery price="1200" shopname="沙发" curent="0" class="everyshop" :imglist="imglist[0]"></shopevery>
    <shopevery price="1200" shopname="沙发" curent="1" class="everyshop" :imglist="imglist[1]"></shopevery>
    <shopevery price="1200" shopname="沙发" curent="2" class="everyshop" :imglist="imglist[2]"></shopevery>
    <shopevery price="1200" shopname="沙发" curent="3" class="everyshop" :imglist="imglist[3]"></shopevery>
    <shopevery price="1200" shopname="沙发" curent="4" class="everyshop" :imglist="imglist[4]"></shopevery>
    <shopevery price="1200" shopname="沙发" curent="5" class="everyshop" :imglist="imglist[5]"></shopevery>
  </div>
</template>
<script>
  import shopevery from './shopevery.vue'
  export default {
    name:"shop",
    data:function () {
     return {
       imglist:[
         ['../src/assets/images/u2715.jpg','../src/assets/images/u2729.png','../src/assets/images/u2785.jpg','../src/assets/images/u2799.png','../src/assets/images/u2810.jpg'],
         ['../src/assets/images/gy_pro2.png','../src/assets/images/gy_pro4.png','../src/assets/images/gy_pro10.png','../src/assets/images/gy_pro6.png','../src/assets/images/gy_pro12.jpg'],
         ['../src/assets/images/u2715.jpg','../src/assets/images/u2729.png','../src/assets/images/u2785.jpg','../src/assets/images/u2799.png','../src/assets/images/u2810.jpg'],
         ['../src/assets/images/gy_pro2.png','../src/assets/images/gy_pro4.png','../src/assets/images/gy_pro10.png','../src/assets/images/gy_pro6.png','../src/assets/images/gy_pro12.jpg'],
         ['../src/assets/images/u2715.jpg','../src/assets/images/u2729.png','../src/assets/images/u2785.jpg','../src/assets/images/u2799.png','../src/assets/images/u2810.jpg'],
         ['../src/assets/images/gy_pro2.png','../src/assets/images/gy_pro4.png','../src/assets/images/gy_pro10.png','../src/assets/images/gy_pro6.png','../src/assets/images/gy_pro12.jpg']
       ]
     }
    },
    components:{
      shopevery:shopevery
    },
    created:function () {
      console.log('数据',this.imglist)
    }
  }
</script>
<style scoped>
 .everyshop{
   float:left;
   margin-left:83px;
 }

</style>
