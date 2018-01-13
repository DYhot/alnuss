<template>
<div class="contentbox">
  <div class="imgdetailbox">
    <div class="imgbox">
      <img  v-for='item in imglist' :src="item"/>
    </div>
    <div class="detail">
      <div class="des">
        {{shopname}}
      </div>
      <div class="rato">
        <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" disabled="true">
        </el-rate>
      </div>
    </div>
  </div>

  <div class="price">
    <span class="pricespan">￥{{price}}</span>
  </div>
</div>
</template>
<script>
  import product_specially from './common/product_specially.vue'
export default {
  name:'shop',
  props:['price','shopname','curent','imglist'],
  data:function () {
    return{
      value2:3
    }
  },
  created:function () {
    console.log(this.imglist)
    var _this=this;
    setTimeout(function () {
      var curent=parseInt(_this.curent);

     $($(".imgbox")[curent]) .css("marginLeft",-249+"px")
      var length= $($(".imgbox")[curent]).find("img").length;
      $($(".imgbox")[curent]).find("img").click(function () {
        var index=$(this).index();
        if(index>0&&index<4)
        {
          $($(".imgbox")[curent]) .css("marginLeft",-((index-1)*$(this).innerWidth()+$(this).innerWidth()/2)+"px")
        }else if(index==0){
          $($(".imgbox")[curent]).find("img").eq(0).before( $($(".imgbox")[curent]).find("img").eq(length-1))
          $($(".imgbox")[curent]) .css("marginLeft",-(249)+"px")
          $($(".imgbox")[curent]) .css("transition","all 0s")
          var _this=this;
          setTimeout(function () {
            $($(".imgbox")[curent]) .css("marginLeft",-((1-1)*$(_this).innerWidth()+$(_this).innerWidth()/2)+"px")
            $($(".imgbox")[curent]) .css("transition","all 0.5s")
          },0)
        }else{
          $($(".imgbox")[curent]).find("img").eq(4).after( $($(".imgbox")[curent]).find("img").eq(0))
          $($(".imgbox")[curent]) .css("marginLeft",-(((length-3)-1)*$(this).innerWidth()+$(this).innerWidth()/2)+"px")

          $($(".imgbox")[curent]) .css("transition","all 0s")
          var _this=this;
          setTimeout(function () {
             $($(".imgbox")[curent]) .css("marginLeft",-(((length-2)-1)*$(_this).innerWidth()+$(_this).innerWidth()/2)+"px")
            $($(".imgbox")[curent]) .css("transition","all 0.5s")
          },0)
        }

      })
      $(".imgbox").mouseleave(function () {
        $($(".imgbox")[curent]) .css("marginLeft",-249+"px")
      })
    },0)


  },
  components:{
    product_specially:product_specially
  }

}
</script>
<style scoped lang="less">
.contentbox{
  width:25%;
  height:300px;
  overflow:hidden;
  img:nth-child(3){
    opacity:1;
  }
  :hover img{
  opacity: 1;
  }
  .des{
    float:left;
    margin-bottom:-20px;
    font-size:14px;
}
  .rato{
    float:left;
    margin-left:32px;

  }
  img{
    float:left;
    width:166px;
    height:100%;
    transition: all 0.5s;
    opacity:0;
  }
  .imgdetailbox{
    height:70%;
    position: relative;
    padding-bottom:40px;
    overflow: hidden;
    /*width:830px;*/
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .imgbox{
    width:830px;
    height:100%;
    transition:all 0.5s;
    position: relative;
    overflow:hidden;
  }
.detail{
  width:50%;
  position: absolute;
  left:25%;
  bottom:10px ;
}
  .pricespan{
    position: absolute;
    right:0;
    top:23px;
  }
  .price{
    position: relative;


  }

}

</style>
