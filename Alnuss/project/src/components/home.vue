<template>
<div>
  <one></one>
  <room></room>
  <product></product>
  <VR></VR>
  <mymap></mymap>
</div>
</template>

<script>
  /*====地图=====*/
  import mymap from "./index/mymap.vue"
  /*====轮播=====*/
  import one from "./common/one.vue"
  /*====全屋定制=====*/
  import room from "./index/room.vue"
  /*====主推产品=====*/
  import product from "./index/product.vue"
  /*====VR=====*/
  import VR from "./index/VR.vue"
    export default{
      data () {
         return {}
      },
      components: {
        mymap: mymap,
        one:one,
        room:room,
        product:product,
        VR:VR
      }
    }


</script>

<style scoped>
</style>
