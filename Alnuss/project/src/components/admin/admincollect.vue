<template>
  <div class="admincontent">
    <h3>我的收藏</h3>
    <div>
      <select name="collectionTypes" id="collectionTypes" @change="collectionTypesChange" v-model="selVal">
        <option value="1">商品收藏</option>
        <option value="2">案例收藏</option>
      </select>
    </div>
    <table class="adminorder" cellspacing="0">
      <thead>
      <td  class="check">
        <input type="checkbox">
      </td>
      <td v-if="(selVal === '1')">收藏商品</td>
      <td v-else>收藏案例</td>
      <td v-if="(selVal === '1')">商品单价</td>
      <td v-else>商品总价</td>
      <td>操作</td>
      </thead>
      <tbody>
      <tr v-for="(item,index) in collectData" :key="index">
        <td class="check">
          <input type="checkbox">
        </td>
        <td>
          <img :src="'../../../static/images/'+item.collectImg" alt="">
        </td>
        <td>￥{{item.collectPrice}}</td>
        <td>
          <button>删除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "admincollect",
        data () {
          return {
            selVal:"1",
            collectData : [],
            collectData1 : [
              {
                collectImg:'Details1.jpg',
                collectPrice:'1900'
              },
              {
                collectImg:'Details1.jpg',
                collectPrice:'1800'
              },
              {
                collectImg:'Details1.jpg',
                collectPrice:'1700'
              }
            ],
            collectData2 : [
              {
                collectImg:'Details1.jpg',
                collectPrice:'1111'
              },
              {
                collectImg:'Details1.jpg',
                collectPrice:'2222'
              },
              {
                collectImg:'Details1.jpg',
                collectPrice:'3333'
              }
            ]
          }
        },
        methods:{
          collectionTypesChange () {
            if ( this.selVal === "1" ) {
              this.collectData = this.collectData1 ;
            } else if ( this.selVal === "2" )  {
              this.collectData = this.collectData2 ;
            }
          }
        },
        created () {
          this.collectData = this.collectData1 ;
        }
    }
</script>

<style scoped lang="less">
  .clear::after{
    content: '';
    height: 0;
    display:block;
    clear:both;
  }
  .admincontent{
    padding: 20px 45px;
    position: relative;
    box-sizing: border-box;
    >h3{
      text-align: left;
      color: rgba(0,0,0,.4);
      margin-bottom: 20px;
    }
    >div{
      text-align: left;
      #collectionTypes{
        margin: 10px 0;
      }
    }
  }
  .adminorder{
    border-collapse: collapse ;
    font-size: 12px;
    thead{
      background: rgba(0,0,0,.4);
      color: #FFFFFF;
    }
    img{
      width: 130px;
    }
    td{
      padding: 10px 70px;
    }
    tr{
      border-bottom: 1px rgba(0,0,0,.1) solid;
    }
    button{
      outline: none;
      background: #333;
      border: none;
      color: #fff;
      width: 80px;
      height: 25px;
      line-height: 25px;
      margin: 5px 0;
      display: block;
    }
  }
</style>
