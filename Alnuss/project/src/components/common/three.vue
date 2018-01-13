<template>
  <div class="shutter">
    <div class="shutter-img">
      <a href="#"><img src="../../../static/images/shutter_1.jpg" alt="#"></a>
      <a href="#"><img src="../../../static/images/shutter_2.jpg" alt="#"></a>
      <a href="#"><img src="../../../static/images/shutter_3.jpg" alt="#"></a>
      <a href="#"><img src="../../../static/images/shutter_4.jpg" alt="#"></a>
    </div>
    <ul class="shutter-btn">
      <li class="prev"></li>
      <li class="next"></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:"three",
    created()
    {
      setTimeout(function () {
        console.log( $('.shutter'));
        $('.shutter').shutter({
          shutterW: 1000, // 容器宽度
          shutterH: 358, // 容器高度
          isAutoPlay: true, // 是否自动播放
          playInterval: 3000, // 自动播放时间
          curDisplay: 3, // 当前显示页
          fullPage: false // 是否全屏展示
        });
      },0)
    }
  }
</script>
