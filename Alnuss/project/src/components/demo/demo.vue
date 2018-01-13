<template>
<div id="info">
  <div class="bottom">
    <el-tooltip class="item" :popper-class="toolTipClass" effect="dark" content="Bottom Center 提示文字" placement="bottom">
      <el-button>下边</el-button>
    </el-tooltip>
  </div>
</div>
</template>
<script>
//  import '../../../static/css/tooltip.css'
  import '../../../static/css/ele.css'
  export default {
    name: 'demo',
    data: function () {
      return {
        toolTipClass: 'page-login-toolTipClass'
      }
    },

    components:{

    },
    methods: {

    }
  }
</script>
<style lang="scss">
  .page-login-toolTipClass{
    /*background-color: red !important*/
  }


</style>
