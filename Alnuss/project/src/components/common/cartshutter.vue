<template>
  <div class="cartshufferbox" >
    <div class="pre"><img src="../../../static/images/pre.png" alt=""></div>
    <div class="next"><img src="../../../static/images/next.png" alt=""></div>
    <ul class="longbox">
      <li v-for="(item,index) in likelist">
        <img :src="item.g_img" alt="">
        <span>{{item.g_name}}</span>
        <span>￥{{item.sku_sell}}.00</span>
        <button @click="addcart(item.sku_id)">添加到购物车</button>
      </li>
    </ul>
  </div>
</template>
<script>
  import cartshutter from './cartshutter.vue'
  export default {
    name:"cartshutter",
    created(){
    },
    components:{
      cartshutter:cartshutter
    },
    data:function () {
      return {
      }
    },
    props:{
      likelist:{
        type:Array,
        required:true
      }
    },
    methods:{
      addcart(val){
        this.$emit('add', val)
      }
    }
  }
</script>
<style scoped >
  .cartshufferbox>.longbox>li>span{
    display: block;
    font-size: 14px;
  }
  .cartshufferbox>.longbox>li>span:nth-of-type(1){
    margin-top: 30px;
  }
  .cartshufferbox>.longbox>li>span:nth-of-type(2){
    margin-top: 10px;
  }
</style>
