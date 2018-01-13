<template>
  <div class="sectionones">
    <div class="sectionone">
      <div class="sectiononeleft">
        <h4>家居不仅仅是一门艺术</h4>
        <p>&nbsp;&nbsp;室内环境营造的目标之一，就是根据人们对于居住、工作、学习、休闲、娱乐等行为和生活方式的要求，不仅在物质层面上满足对
          其实用及舒适程度的要求，同时还要求最大程度地与视觉审美方面的要求相结合，这就是室内设计的艺术审美要求。</p>
        <p>这一天是这样做的，你在你回家的路上，你最喜欢的电台只需五首歌就可以把你带到一棵树上，无边无边的天空，
          舒适的家和你所爱的人。你觉得你的生活是平衡的，一切都是一样的。</p>
      </div>
      <div class="sectiononeright">
        <h4>客户真实项目</h4>
        <img :src="'../../../static/images/'+img1" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dignzhiproject",
        props:['img1']
    }
</script>

<style scoped>
  .sectionones{
    width: 100%;
    /*outline: 1px solid teal;*/
    background-color: ghostwhite;
  }
  .sectionone{
    width: 70%;
    margin: 40px auto;
    /*outline:1px solid blue;*/
    display: inline-block;
  }
  .sectiononeleft{
    width: 40%;
    float: left;
  }
  .sectiononeright{
    width: 60%;
    float: left;
  }
  .sectiononeright>img{
    max-width: 450px;
  }
</style>

