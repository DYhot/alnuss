<template>
  <div class="ict-item-questionnaire" :disable="disable" :class="{'ict-item-disabled':
           disable, 'ict-item-active': btnActive}">
    {{title}}
  </div>
</template>
<script>
    export default {
      name:'myButton',
      props:{
        disable:Boolean,
        order:String,
        option:String,
        btnActive:Boolean
      },
      methods:{

      },
      data(){
        return {
          title:"点击我"
        }
      }
    }
</script>
<style scoped>
  .ict-item-questionnaire{
    color: #666;
    height: .8rem;
    border:1px solid #000;
    padding: .3rem .3rem;
    margin-right: .5rem;
    display: inline-block;
    line-height: .8rem;
  }
</style>
