<template>
  <div class="admincontent">
    <h3>我的订单</h3>
    <template>
      <el-table
        ref=""
        :data="orderData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55" align="center">
        </el-table-column>
        <el-table-column
          label="订单商品"
          width="120" align="center">
          <template slot-scope="scope"><img :src="'../../../static/images/'+scope.row.orderShopImg" alt=""></template>
        </el-table-column>
        <el-table-column
          prop="orderNum"
          label="订单编号"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="orderBirth"
          label="下单日期"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="orderPrice"
          label="订单价格"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          prop="orderState"
          label="订单状态"
          width="120" align="center">
        </el-table-column>
        <el-table-column
          label="操作"
          width="120" align="center">
          <template slot-scope="scope"><el-button>删除</el-button></template>
        </el-table-column>
      </el-table>
    </template>
    <!--<table class="adminorder" cellspacing="0">-->
      <!--<thead>-->
        <!--<td  class="check">-->
          <!--<input type="checkbox">-->
        <!--</td>-->
        <!--<td>订单商品</td>-->
        <!--<td>订单编号</td>-->
        <!--<td>下单日期</td>-->
        <!--<td>订单价格</td>-->
        <!--<td>订单状态</td>-->
        <!--<td>操作</td>-->
      <!--</thead>-->
      <!--<tbody>-->
        <!--<tr v-for="(item,index) in orderData" :key="index">-->
          <!--<td class="check">-->
            <!--<input type="checkbox">-->
          <!--</td>-->
          <!--<td>-->
            <!--<img :src="'../../../static/images/'+item.orderShopImg" alt="">-->
          <!--</td>-->
          <!--<td>{{item.orderNum}}</td>-->
          <!--<td>{{item.orderBirth}}</td>-->
          <!--<td>￥{{item.orderPrice}}</td>-->
          <!--<td v-if="item.orderState === 1">未付款</td>-->
          <!--<td v-else-if="item.orderState === 3">配送中</td>-->
          <!--<td v-else-if="item.orderState === 5">未评价</td>-->
          <!--<td v-if="item.orderState === 1">-->
            <!--<button>立即付款</button>-->
            <!--<button>取消订单</button>-->
          <!--</td>-->
          <!--<td v-else-if="item.orderState === 3">-->
            <!--<button>查看物流</button>-->
          <!--</td>-->
          <!--<td v-else-if="item.orderState === 5">-->
            <!--<button>立即评价</button>-->
          <!--</td>-->
        <!--</tr>-->
      <!--</tbody>-->
    <!--</table>-->
  </div>


</template>

<script>

  // 1-未付款，2-已付款，3-配送中，4-已签收，5-未评价，6-已完成，0-已取消
    export default {

        name: "adminorder",
        data () {
          return {
            multipleSelection: [],
            orderData:[
              {
                orderShopImg:'Details1.jpg',
                orderNum:'Y156161',
                orderBirth:'2017-01-01',
                orderPrice:'1900',
                orderState:5,
              },
              {
                orderShopImg:'Details1.jpg',
                orderNum:'Y156161',
                orderBirth:'2017-01-01',
                orderPrice:'1800',
                orderState:1
              },
              {
                orderShopImg:'Details1.jpg',
                orderNum:'Y156161',
                orderBirth:'2017-01-01',
                orderPrice:'1700',
                orderState:3
              }
            ]
          }
        },
      methods: {
        handleSelectionChange(val) {
          this.multipleSelection = val;
        }
      },



        name: "adminorder",
        data () {
          return {
            orderData:[
              {
                orderShopImg:'Details1.jpg',
                orderNum:'Y156161',
                orderBirth:'2017-01-01',
                orderPrice:'1900',
                orderState:5,
              },
              {
                orderShopImg:'Details1.jpg',
                orderNum:'Y156161',
                orderBirth:'2017-01-01',
                orderPrice:'1800',
                orderState:1
              },
              {
                orderShopImg:'Details1.jpg',
                orderNum:'Y156161',
                orderBirth:'2017-01-01',
                orderPrice:'1700',
                orderState:3
              }
            ]
          }
        }

    }
</script>

<style scoped lang="less">
  /*.clear::after{*/
    /*content: '';*/
    /*height: 0;*/
    /*display:block;*/
    /*clear:both;*/
  /*}*/
  .admincontent{
    padding: 20px 45px;
    /*position: relative;*/
    /*box-sizing: border-box;*/
    >h3{
      text-align: left;
      color: rgba(0,0,0,.4);
      margin-bottom: 20px;
    }
    img{
      width: 130px;
    }
  }

  /*.adminorder{*/
    /*border-collapse: collapse ;*/
    /*font-size: 12px;*/
    /*thead{*/
      /*background: rgba(0,0,0,.4);*/
      /*color: #FFFFFF;*/
    /*}*/
    /*img{*/
      /*width: 130px;*/
    /*}*/
    /*td{*/
      /*padding: 10px 25px;*/
    /*}*/
    /*tr{*/
      /*border-bottom: 1px rgba(0,0,0,.1) solid;*/
    /*}*/
    /*button{*/
      /*outline: none;*/
      /*background: #333;*/
      /*border: none;*/
      /*color: #fff;*/
      /*width: 80px;*/
      /*height: 25px;*/
      /*line-height: 25px;*/
      /*margin: 5px 0;*/
      /*display: block;*/
    /*}*/
  /*}*/


  /*.adminorder{*/
    /*border-collapse: collapse ;*/
    /*font-size: 12px;*/
    /*thead{*/
      /*background: rgba(0,0,0,.4);*/
      /*color: #FFFFFF;*/
    /*}*/
    /*img{*/
      /*width: 130px;*/
    /*}*/
    /*td{*/
      /*padding: 10px 25px;*/
    /*}*/
    /*tr{*/
      /*border-bottom: 1px rgba(0,0,0,.1) solid;*/
    /*}*/
    /*button{*/
      /*outline: none;*/
      /*background: #333;*/
      /*border: none;*/
      /*color: #fff;*/
      /*width: 80px;*/
      /*height: 25px;*/
      /*line-height: 25px;*/
      /*margin: 5px 0;*/
      /*display: block;*/
    /*}*/
  /*}*/

</style>
