<template>
  <div class="model">
    <div class="header">
      <img src="../../../static/images/123.gif">
      <div class="hd-content">
         <p>
           <span>360度全景</span>
           <span>———　</span>
           <span>全新的交互浏览体验、真实的实际景观，身临其境的感受，准确筛选</span>
         </p>
         <p>
           <span>来确定你的选择</span>
         </p>
      </div>
      <img src="../../../static/images/xian.png">
    </div>
    <div class="jx-content">
       <h1>样板精选</h1>
       <div class="db-xian"></div>
       <div class="tab-lb">
         <span><a href="">简约</a></span>
         <span><a href="">中式</a></span>
         <span><a href="">欧式</a></span>
         <span><a href="">混搭</a></span>
         <span><a href="">更多</a></span>
       </div>
    </div>
    <!--精选详细信息列表-->
    <div class="liebiao">
    <showlist v-for="item in arr" :html="item.html" :key="item.id" :imgsrc="item.imgsrc" :img_content="item.img_content"
     :ct_content="item.ct_content" :des_img="item.des_img" :des_people="item.des_people"></showlist>
      <div class="clear"></div>
    </div>
    <div v-loading="isloading" element-loading-text="加载中" class="loading">
    </div>
    <!--加载更多-->
    <button type="button" @click="loadMore" v-if="btn_length">加载更多...</button>
  </div>
</template>
<script>
  import showlist from "./showlist.vue";
  import {setCookie,getCookie} from "../../assets/cookie";
  export default{
      name:"model",
      data(){
        return {
            page:0,
          arr:[],//加载更多
          isloading:true,//加载
          btn_length:true,//数据是否加载完
          pagesize:3,
          productarr:[],
        }
      },
    mounted(){
      let u_name=getCookie("username");
      if(u_name==undefined||u_name==""){
        this.$router.push({path: '/login', query: {url: "3dvr"}})
      }
    },
    components:{
      showlist:showlist
    },
      created(){
          this.getInfo(this.page)
      },
      methods:{
          getInfo(page){
              this.$axios.get('/api/model.do')
                .then(res=>{
                  var a=page,data=res.data;
                  a++;
                  var newarr=data.slice(page*this.pagesize,a*this.pagesize);
                  this.arr=this.arr.concat(newarr);
                  this.isloading=false;
                  if(this.arr.length==data.length){
                    this.btn_length=false;
                  }
                })
          },
          loadMore(){
              this.isloading=true;
            setTimeout(()=>{
              this.page++;
              this.getInfo(this.page)
              },1000)
          }
      },
  }
</script>
<style scoped lang="less">
  .model{
    height: 100%;
  }
  .header{
    width:100%;
    position: relative;
    img:nth-of-type(1){
      width: 100%;
      height: 633px;
    }
    img:nth-of-type(2){
      width: 100%;
    }
  }
  .hd-content{
    position: absolute;
    top:45%;
    left:25%;
    width: 736px;
    word-wrap: break-word;
    span:first-child{
      color: white;
      font-weight:700;
      font-size:23px;
    };
    span:nth-of-type(2){
      font-weight: 700;
      color: #ff9900;
      margin-left:2%;
    }
    span:nth-of-type(3){
      font-weight: 700;
      color: #d7d7d7;
      font-size:15px;
    }
    p:nth-of-type(2) span{
      font-size: 15px;
      color: #d7d7d7;
      margin-left:-20%;
    }
  }
  /*样板精选*/
  .jx-content{
    width: 80%;
    margin:2rem auto 3rem;
    padding-bottom:0;
    position: relative;
    .db-xian{
      width: 70px;
      position: absolute;
      left:47%;
      top:46px;
      border:1px solid gray;
    }
  }
  .tab-lb{
    margin-top:1rem;
    margin-bottom:2rem;
    span{
      margin-left:3%;
      &:first-child{
        margin-left:0;
      }
      a{
        color: black;
        text-decoration: none;
      }
    }
  }
  .liebiao{
    overflow: hidden;
  }
  .clear{
    clear:both
  }
  button{
    background: none;
    width: 210px;
    height: 45px;
    border:2px solid #282828;
    outline: none;
    cursor: pointer;
    margin-bottom:4%;
    font-weight: bolder;
    margin-top:5%;
  }
  .loading{
    width: 100%;
    height: 20px;
   margin-top:-3%;

  }
</style>
