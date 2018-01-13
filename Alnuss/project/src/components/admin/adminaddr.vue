<template>
  <div class="admincontent">
    <h3>我的地址</h3>
    <div class="addrItem" v-for="item in addrData" :key="item.id">
      <div class="defalutAddr" @click="setDefAddr">设为默认地址</div>
      <div>
        <span>收件人：</span>
        {{item.linkman}}
      </div>
      <div>
        <span>联系电话：</span>
        {{item.tel}}
      </div>
      <div>
        <span>收货地址：</span>
        {{item.prov}}{{item.city}}{{item.dist}}{{item.detail}}
      </div>
      <div class="buts">
        <button @click="modAddr">修改地址</button>
        <button @click="delAddr">删除地址</button>
      </div>
    </div>
    <button @click="addAddr">添加地址</button>
  </div>
</template>

<script>
    export default {
        name: "adminaddr",
        data () {
          return {
            addrData : [
              {
                id:1,
                linkman:'admin',
                tel:'15982307113',
                prov:'四川省',
                city:'成都市',
                dist:'高新区',
                detail:'天府二街云华路1号'
              }
            ]
          }
        },
        methods : {
          //修改地址
          modAddr () {

          },
          //删除地址
          delAddr () {},
          //新增地址
          addAddr () {},
          //设为默认地址
          setDefAddr () {}
        }
    }
</script>

<style scoped lang="less">
  button{
    outline: none;
    background: #333;
    border: none;
    color: #fff;
    width: 100px;
    height: 30px;
  }
  .clear::after{
    content: '';
    height: 0;
    display:block;
    clear:both;
  }
  .admincontent{
    padding: 20px 100px;
    position: relative;
    box-sizing: border-box;
    text-align: right;
    >h3{
      text-align: left;
      color: rgba(0,0,0,.4);
      margin-bottom: 20px;
    }
    .addrItem{
      border: 1px rgba(0,0,0,.2) solid;
      padding: 20px;
      margin:20px auto;
      position: relative;
      .defalutAddr{
        position: absolute;
        font-size: 12px;
        right: 10px;
        top: 10px;
      }
      >div{
        margin: 10px 0;
        text-align: left;
        >span{
          width: 100px;
          display: inline-block;
          text-align: right;
        }
      }
      .buts{
        text-align: center;
        button{
          margin:0 10px;
        }
      }
    }
  }
</style>
