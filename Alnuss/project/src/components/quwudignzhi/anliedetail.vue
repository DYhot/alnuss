<template>
  <div class="detaildiv">
    <div class="detailimg">
      <img src="../../../static/images/bannere.jpg" alt="">
    </div>
    <div class="captionone">
      <h3>户型图</h3>
      <hr>
      <h5>好的户型设计决定品味生活</h5>
    </div>
    <anlieproject v-for="item in projectdata" :key="item.id" :huxin="item.huxin"
                  :mianji="item.mianji" :styles="item.style" :leixin="item.leixin" :address="item.address"
                  :content="item.content" :name="item.name" :myyear="item.myyear">
    </anlieproject>

    <anliezucheng v-for="item in zuchengdata" :key="item.id" :name="item.name"
                  :script="item.script"></anliezucheng>
    <!--第二部分图片-->
    <div class="captionthree">
      <h3>餐厅</h3>
      <hr>
      <h5>味蕾的冲击感，一眼爱上吃饭</h5>
    </div>

    <div class="dinning">
      <div class="dinningv">
        <div class="dinningone">
          <img src="../../../static/images/dining1.jpg" alt="">
          <div class="blankdinning" title="桌子">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
        <div class="dinningone">
          <img src="../../../static/images/dining2.jpg" alt="">
          <div class="blankdinning" title="椅子">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--第三部分图片-->
    <div class="captionfour">
      <h3>厨房丨卫生间</h3>
      <hr>
      <h5>解决生活烦恼，美好一天</h5>
      <h3></h3>
    </div>

    <div class="pictures">
      <div class="picturesv">
        <div class="picturesone">
          <img src="../../../static/images/kitchen1.jpg" alt="">
          <div class="blankleft" title="冰箱">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
        <div class="picturesone">
          <img src="../../../static/images/kitchen2.jpg" alt="">
          <div class="blankleft" title="碗橱柜">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
        <div class="picturesone">
          <img src="../../../static/images/kitchen3.jpg" alt="">
          <div class="blankleft" title="碗橱柜">
            <button>
              <span>查看详情</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--第四部分图片-->
    <div class="captionfive">
      <hr>
      <h5>知道更多的案例</h5>
    </div>
    <anliebox></anliebox>

  </div>
</template>

<script>
  import anlieproject from './anlieproject.vue'
  import anliezucheng from './anliezucheng.vue'
  import anliebox from './anliebox.vue'
  export default {
    name: "anliedetail",
    data:function() {
      return {
        projectdata:[
          {id: 1, huxin: '二室 一厅 一卫',mianji:'63.0㎡',style:'现代',leixin:'住宅空间',
            address:'北京北京市朝阳区 罗马花园',content:'业主为一家五口,喜欢简约风格，又稍微带点和式的原木风。',
            name:"胥淼",myyear:"从业年限：6年"}
        ],
        zuchengdata:[
          {id: 1, name: '卧室丨客厅',script:'舒适的环境给予无尽的想象'},
        ],
//          boxdata:[
//            {id: 1, name: '错落有致'},
//            {id: 2, name: '风情万种'},
//            {id: 3, name: '粉白弹奏'},
//          ]
      }
    },
    components:{
      anlieproject:anlieproject,
      anliezucheng:anliezucheng,
      anliebox:anliebox,
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  /*<!--banner-->*/
  .detaildiv{
    width: 100%;
  }
  .detailimg{
    width: 100%;
  }
  .detailimg>img{
    max-width: 1346px;
  }
  .captionone{
    margin-top: 20px;
    margin-bottom: 7px;
    width: 100%;
  }
  /*.captiontwo{*/
  /*margin-bottom: 7px;*/
  /*width: 100%;*/
  /*}*/
  .captionthree{
    margin-bottom: 7px;
    width: 100%;
  }
  .captionfour{
    margin-bottom: 7px;
    width: 100%;
  }
  hr{
    width: 100px;
    margin: 10px auto;
    background-color: rgba(0,0,0,0.9);
  }
  /*图片部分*/
  .pictures{
    width: 100%;
  }
  .picturesv{
    width: 70%;
    margin: 0 auto;
    display: inline-block;
  }
  .pictures img{
    max-width: 300px;
    margin: 4px 4px;
    float: left;
  }
  .picturesone{
    position: relative;
    display: inline-block;
    /*outline:1px solid blue;*/
  }
  .picturesone>p{
    margin: 195px 0 20px 0;
    /*outline:1px solid red;*/
  }
  .blankleft{
    width: 300px;
    height: 213px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s linear 0s;
    position: absolute;
    top:4px;
    left:4px;
    z-index: 999;
  }
  .blankleft:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .picturesone > .blankleft::after {
    bottom: 60px;
    content: attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    right: 16px;
    transition: all 0.3s linear 0s;
    width: 80px;
    z-index: 4;
  }
  .picturesone:hover .blankleft::after {
    opacity: 1;
  }
  .picturesone > .blankleft::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    bottom: -10px;
    content: "";
    height: 120px;
    opacity: 0;
    position: absolute;
    right: -10px;
    transition: all 0.3s linear 0s;
    width: 120px;
    z-index: 4;
  }
  .picturesone:hover .blankleft::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }

  .blankleft>button{
    width: 70px;
    height: 22px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s linear 0s;
    position: absolute;
    bottom:20px;
    right: 20px;
    opacity: 0;
  }
  .blankleft>button>span{
    font-size: 9px;
    color: white;
  }
  .picturesone:hover .blankleft>button {
    opacity: 1;
  }


  .dinning{
    width: 100%;
  }
  .dinningv{
    width: 70%;
    margin: 0 auto;
    display: inline-block;
  }
  .dinning img{
    max-width: 455px;
    margin: 4px 4px;
    float: left;
  }
  .dinningone{
    position: relative;
    display: inline-block;
    /*outline:1px solid blue;*/
  }
  .dinningone>p{
    margin: 195px 0 20px 0;
    /*outline:1px solid red;*/
  }
  .blankdinning{
    width: 455px;
    height: 320px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    transition: all 0.3s linear 0s;
    position: absolute;
    top:4px;
    left:4px;
    z-index: 999;
  }
  .blankdinning:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .dinningone > .blankdinning::after {
    bottom: 60px;
    content: attr(title);
    color: white;
    opacity: 0;
    position: absolute;
    right: 16px;
    transition: all 0.3s linear 0s;
    width: 80px;
    z-index: 4;
  }
  .dinningone:hover .blankdinning::after {
    opacity: 1;
  }
  .dinningone > .blankdinning::before {
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid white;
    border-radius: 50%;
    bottom: -10px;
    content: "";
    height: 120px;
    opacity: 0;
    position: absolute;
    right: -10px;
    transition: all 0.3s linear 0s;
    width: 120px;
    z-index: 4;
  }
  .dinningone:hover .blankdinning::before {
    opacity: 1;
    transform:scale(1.2,1.2);
  }
  .blankdinning>button{
    width: 70px;
    height: 22px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s linear 0s;
    position: absolute;
    bottom:20px;
    right: 20px;
    opacity: 0;
  }
  .blankdinning>button>span{
    font-size: 9px;
    color: white;
  }
  .dinningone:hover .blankdinning>button {
    opacity: 1;
  }
</style>

