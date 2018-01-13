var timer;
var clicktime=0;
window.onload=function(){
  timer=setInterval(function () {
    $(".cartshufferbox>.longbox").css({"margin-left":"-250px","transition":"margin-left linear 1s"})
    setTimeout(function () {
      $(".cartshufferbox>.longbox>li").eq(0).appendTo(".cartshufferbox>.longbox")
      $(".cartshufferbox>.longbox").css({"margin-left":"0px","transition":"margin-left ease 0s"})
    },1500)
  },3000)
}
$(document).on("click",".pre",function () {
  var date1=new Date();
  var pretime=date1.getTime();
  var time=pretime-clicktime;
  if(time>=1000){
    clicktime=pretime;
    clearInterval(timer)
    $(".cartshufferbox>.longbox").css({"margin-left":"-250px","transition":"margin-left linear 1s"})
    setTimeout(function () {
      $(".cartshufferbox>.longbox>li").eq(0).appendTo(".cartshufferbox>.longbox")
      $(".cartshufferbox>.longbox").css({"margin-left":"0px","transition":"margin-left ease 0s"})
    },1000)
  }
})
$(document).on("click",".next",function () {
  var date2=new Date();
  var pretime=date2.getTime();
  var time=pretime-clicktime;
  if(time>=1000){
    clicktime=pretime;
    clearInterval(timer)
    $(".cartshufferbox>.longbox>li").last().prependTo(".cartshufferbox>.longbox")
    $(".cartshufferbox>.longbox").css({"margin-left":"-250px","transition":"margin-left linear 0s"})
    setTimeout(function () {
      $(".cartshufferbox>.longbox").css({"margin-left":"0px","transition":"margin-left ease 1s"})
    },0)
  }
})

