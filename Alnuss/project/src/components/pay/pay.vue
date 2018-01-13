<template >
  <div>
    <div class="paymentnav">
      <ul class="headernav">
        <li><span>1</span><span>我的购物袋</span><img src="../../../static/images/step_def_g.png" alt=""></li>
        <li><span>2</span><span>填写核对清单</span><img src="../../../static/images/step_def_g.png" alt=""></li>
        <li><span>3</span><span>订单提交成功</span></li>
      </ul>
    </div>
    <div class="box">
      <div class="adressinfo">
        <ul>
          <li>收货人信息</li>
          <li @click="dialogFormVisible = true"><span>添加收货地址</span></li>
        </ul>
        <ul v-if="selectedadress.length!=0">
          <li><button @click="adresschange(0)">{{selectedadress[0].addr_linkman}}</button>
            <img src="../../../static/images/selected.png" alt="" class="selected"></li>
          <li>
            <span>{{selectedadress[0].addr_prop}}</span>
            <span>{{selectedadress[0].addr_city}}</span>
            <span>{{selectedadress[0].add_dist}}</span>
            <span>{{selectedadress[0].addr_detail}}</span>
          </li>
          <li>{{selectedadress[0].addr_tel}}<span class="editadress">编辑地址</span></li>
        </ul>
        <button class="moreadress" @click="getAlladress">更换收货地址</button>
        <div class="myadress" props="Alladress">
          <ul v-for="(item, index) in Alladress">
            <li><button @click="changeselect(item)">{{item.addr_linkman}}</button>
              <img src="../../../static/images/selected.png" alt="" class="selected" v-show="adressmark==0"></li>
            <li>
              <span>{{item.addr_prop}}</span>
              <span>{{item.addr_city}}</span>
              <span>{{item.add_dist}}</span>
              <span>{{item.addr_detail}}</span>
            </li>
            <li>{{item.addr_tel}}<span class="editadress">编辑地址</span> <span class="editadress">设为默认地址</span></li>
          </ul>
        </div>


      </div>
      <div class="paymentmethod">
        <ul>
          <li>支付方式</li>
        </ul>
        <ul>
          <li>
            <button @click="payment(0)">微信支付</button>
            <img src="../../../static/images/selected.png" alt="" class="selected" v-show="showpaymark==0">
            <button @click="payment(1)">支付宝支付</button>
            <img src="../../../static/images/selected.png" alt="" class="selected" v-show="showpaymark==1">
            <button @click="payment(2)">银联支付</button>
            <img src="../../../static/images/selected.png" alt="" class="selected" v-show="showpaymark==2">
          </li>
          <li>支持多家银行借记卡、信用卡支付。支付宝支付，微信等多种支付平台；支持Alnuss礼品卡支付。</li>
          <li><span>*如有疑问请致电4000-250-630</span><span>公司地址：上海市杨宅路258号A201</span></li>
        </ul>
      </div>
      <div class="sendinfo">
        <ul>
          <li>配送信息</li>
        </ul>
        <ul>
          <li>
            <button @click="senddate(0)">所有日期均可收货</button>
            <img src="../../../static/images/selected.png" alt="" class="selected" v-show="senddatemark==0">
            <button @click="senddate(1)">仅工作日收货</button>
            <img src="../../../static/images/selected.png" alt="" class="selected" v-show="senddatemark==1">
            <button @click="senddate(2)">仅双休日，节假日收货</button>
            <img src="../../../static/images/selected.png" alt="" class="selected" v-show="senddatemark==2">
          </li>
          <li>温馨提示：我们会努力按照您指定的时间配送，但因天气、交通等各类因素影响，您的订单有可能会有延误现象。</li>
        </ul>

      </div>
      <div class="specialinfo">
        <ul>
          <li><span>特殊要求:</span>
          </li>
          <li>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              size="mini"
              v-model="textarea">
            </el-input>
          </li>
        </ul>
      </div>
      <div>
      <el-dialog :visible.sync="dialogFormVisible" width="55%" title="添加收货信息"
       align="left" top="130px">
      <el-form ref="form" :model="form" :inline="true">
      <el-form-item  label="*收货人:" :label-width="formLabelWidth">
      <el-input v-model="adressinfo.name" auto-complete="off" width="100px"></el-input>
      </el-form-item>
      <el-form-item  label="*手机号码:" :label-width="formLabelWidth">
      <el-input v-model="adressinfo.tele" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item  label="所在地区：" :label-width="formLabelWidth2">
      <el-cascader
      :options="CityInfo"
      v-model="form.selectedOptions"
      :change-on-select="true"
      :clearable="true"
      :filterable="true"
      @change="handleChange">
      </el-cascader>
      <!--<span class="selectedregion">所选地区：{{form.city | myAddressCity}}{{form.erae | myAddressErae}}{{form.minerae | myAddressMinerae}}</span>-->
      </el-form-item>
      <el-form-item label="*详细地址:" :label-width="formLabelWidth">
      <el-input v-model="adressinfo.detailadress" auto-complete="off" width="500"></el-input>
      </el-form-item>
      <el-form-item label="身份证号码:" :label-width="formLabelWidth">
      <el-input v-model="adressinfo.sfz" auto-complete="off" width="100px"></el-input>
      </el-form-item>
      <el-form-item label="邮编:" :label-width="formLabelWidth">
      <el-input v-model="adressinfo.youbian" auto-complete="off"></el-input>
      </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" align="right">
      <el-button class="close" @click="dialogFormVisible = false">取 消</el-button>
      <el-button class="sure" type="primary" @click="submitadress">确 定</el-button>
      </div>
      </el-dialog>
      </div>
      <div class="spdetail">商品清单</div>
      <el-table
        :data="orderData"
        style="width: 100%">
        <el-table-column type="expand" >
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称:">
                <span>{{ props.row.g_name }}</span>
              </el-form-item>
              <el-form-item label="所选颜色:">
                <span>{{ props.row.selectedcolor }}</span>
              </el-form-item>
              <el-form-item label="所选尺寸:">
                <span>{{ props.row.selectedsize }}</span>
              </el-form-item>
              <el-form-item label="商品分类:">
                <span>{{ props.row.sku_disc }}</span>
              </el-form-item>
              <el-form-item label="库存量:">
                <span>{{ props.row.sku_stock }}</span>
              </el-form-item>
              <el-form-item label="商品描述:">
                <span>{{ props.row.g_detail }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="商品名称"
          align="center">
          <template slot-scope="scope">
            <div>
              <img :src="scope.row.g_img" alt="">
            </div>
            <div>{{scope.row.g_name}}</div>
          </template>
        </el-table-column>
        <el-table-column
          label="单价"
          prop="sku_sell" align="center">
        </el-table-column>
        <el-table-column
          label="商品数量"
          prop="goodsnumber" align="center">
        </el-table-column>
        <el-table-column
          label="商品小计"
          align="center">
          <template slot-scope="scope">
            {{scope.row.goodsnumber*scope.row.sku_sell}}
          </template>
        </el-table-column>
        <el-table-column
          label="商品描述"
          prop="g_detail" align="center">
        </el-table-column>
      </el-table>
      <div class="submitorder">
        <ul class="moneydetail">
          <li ><span>合　　计:</span><span>￥{{totalPrice}}.00</span></li>
          <li><span>运　　费:</span><span> &nbsp;￥0.00</span></li>
          <li><span>包　　装：</span><span> &nbsp;￥0.00</span></li>
          <li ><span>优惠券:</span><span>-￥0.00</span></li>
          <li><span>活动折扣：</span><span>-￥0.00</span></li>
          <li><span>会员折扣：</span><span>-￥0.00</span></li>
          <li><span>返现账户支付：</span><span>-￥0.00</span></li>
        </ul>
        <ul class="total">
          <li><span>总　　计：</span><span>￥{{totalPrice}}.00</span></li>
        </ul>
        <router-link  :to="{path:'/paymoney',query: {paymethod: payparams}}" tag="button" class="tijiaoorder" >提交订单</router-link>
      </div>
    </div>
  </div>

</template>
<script>
  import vue from 'vue'
  import {mapGetters,mapActions} from 'vuex'
  export default {
        name: 'pay',
      data() {
        return {
          selectedadress:[{
            add_dist:"武侯区",
            addr_city:"成都市",
            addr_detail:"紫薇东路10号",
            addr_linkman: "邓杨",
            addr_tel: "18628119371",
            addr_prop: "四川",
          }],
          Alladress:[],
          adressinfo:{name:"",tele:"",detailadress:"",sfz:"",youbian:""},
          CityInfo:[],
          form: {
            city : '',
            erae : '',
            minerae : '',
            selectedOptions: [],//地区筛选数组
          },
          showpaymark:-1,
          senddatemark:-1,
          adressmark:-1,
          payparams:{},
          textarea: '',
          orderData:[],
          dialogFormVisible : false,
          form: {
            name: '',
            adress:'',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '100px',
          formLabelWidth2: '90px',
          pickerOptions1: {
            shortcuts: [{
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
        }
      },

    created(){
          var selected=this.$route.query.selected
          this.orderData=selected[0];
          this.CityInfo=this.$citydata
            console.log("我是this.CityInfo", this.CityInfo)
    },
    methods:{
      changeselect(value){
        this.selectedadress=[];
        this.selectedadress.push(value)
      },
      getAlladress(){
        var _this=this;
        this.$axios.get('/api/getAlladress.do',{params:{u_id:5}}).then(resp=>{
          this.Alladress=resp.data
          console.log("我是全部地址1",this.Alladress)
          for(var j=0;j< _this.Alladress.length;j++){
            for(var y in _this.CityInfo){
              if(_this.CityInfo[y].value ==  _this.Alladress[j].addr_prop){
                _this.Alladress[j].addr_prop = _this.CityInfo[y].label
              }
            }
            for(var y in _this.CityInfo){
              for(var z in _this.CityInfo[y].children){
                if(_this.CityInfo[y].children[z].value == _this.Alladress[j].addr_city){
                  _this.Alladress[j].addr_city = _this.CityInfo[y].children[z].label;
                }
              }
            }
            for(var y in _this.CityInfo){
              for(var z in _this.CityInfo[y].children){
                for(var i in _this.CityInfo[y].children[z].children){
                  if(_this.CityInfo[y].children[z].children[i].value == _this.Alladress[j].add_dist){
                    _this.Alladress[j].add_dist = _this.CityInfo[y].children[z].children[i].label
                  }
                }
              }
            }
          }
        })
      },
      submitadress(){
        var _this=this;
        this.dialogFormVisible = false;
        this.$axios.get('/api/addOrderAdress.do',{params:{u_id:5,name:this.adressinfo.name,tele:this.adressinfo.tele,
          detailadress:this.adressinfo.detailadress,sfz:this.adressinfo.sfz,
          youbian:this.adressinfo.youbian,city:this.form.city,erae:this.form.erae,minerae:this.form.minerae}}).then(resp=>{
            if(resp.data[0]==1){
              _this.getAlladress()
              console.log("我是添加成功后的回调",resp.data)
          }
        })
      },
      handleChange(value) {
        this.form.city = this.form.selectedOptions[0];
        this.form.erae = this.form.selectedOptions[1]
        this.form.minerae = this.form.selectedOptions[2]
        console.log(this.form)
      },
      payment(val){
        this.showpaymark=val;
        this.payparams.paymentmethod=val;
      },
      senddate(val){
        this.senddatemark=val;
        this.payparams.senddate=val;
        console.log(this.payparams)
      },
      adresschange(val){
        this.adressmark=val;
        this.payparams.adress=val;
        console.log(this.payparams)
      }
    },
    /*地址过滤器*/
    filters:{
      myAddressCity:function(value){
//        console.log("wwwwwwwww",$citydata)
//        if(this.CityInfo!=undefined){
//          for(y in this.CityInfo){
//            if(this.CityInfo[y].value == value){
//              return value = this.CityInfo[y].label
//            }
//          }
//        }

      },
      myAddressErae:function(value){
//        for(y in this.CityInfo){
//          for(z in this.CityInfo[y].children){
//            if(this.CityInfo[y].children[z].value == value && value!=undefined){
//              return value = this.CityInfo[y].children[z].label;
//            }
//          }
//        }
      },
      myAddressMinerae:function(value){
//        for(y in this.CityInfo){
//          for(z in this.CityInfo[y].children){
//            for(i in this.CityInfo[y].children[z].children){
//              if(this.CityInfo[y].children[z].children[i].value == value && value!=undefined){
//                return value = this.CityInfo[y].children[z].children[i].label
//              }
//            }
//          }
//        }
      }
    },
    computed:{
      ...mapGetters(['totalPrice'])
    },
  }
</script>
<style scoped >
  button{
    cursor: pointer;
  }
  /*收货人信息*/
  .adressinfo,.paymentmethod,.sendinfo,.specialinfo{
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    /*border-bottom: 1px solid #E4E4E4;*/
  }
  .myadress{
    width: 100%;
    /*border: 1px solid red;*/
    margin-top: 50px;
  }
  .adressinfo{
    border-bottom: 1px solid #d2d5db;
  }
  .adressinfo button{
    width: 120px;
    height: 35px;
    background-color: white;
    border: 1px solid #909399;
  }
  .adressinfo .moreadress{
    position: absolute;
    left: 50px;
    color: #2e6da4;
    border: none;
  }
  .adressinfo>ul:nth-of-type(1){
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin-bottom: 30px;
  }
  .selected{
    width: 25px;
    height: 20px;
    position: absolute;
    left: 94px;
    bottom: 4px;
  }
  .adressinfo>ul:nth-of-type(1)>li{
    float: left;
    width: 50%;
  }
  .adressinfo>ul:nth-of-type(1)>li:nth-of-type(1){
    text-align: left;
    color: #333333;
  }
  .adressinfo>ul:nth-of-type(1)>li:nth-of-type(2){
    text-align: right;
    color: #669ACA;
  }
  .adressinfo>ul:nth-of-type(1)>li:nth-of-type(2)>span{
    cursor: pointer;
  }
  .adressinfo>ul:nth-of-type(2),
  .myadress>ul{
    width: 95%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 5%;
    padding-bottom: 20px;
  }
  .adressinfo>ul:nth-of-type(2)>li,
  .myadress>ul>li{
    float: left;
    width: 33.3%;
    text-align: left;
  }
  .adressinfo>ul:nth-of-type(2)>li:nth-of-type(1),
  .myadress>ul>li:nth-of-type(1){
    position: relative;
  }
  .editadress{
    display: inline-block;
    width: 90px;
    height: 35px;
    cursor: pointer;
    margin-left: 10px;
    color: #2e6da4;
    text-align: center;
  }
/*支付方式*/
  .paymentmethod button{
    width: 120px;
    height: 35px;
    background-color: white;
    border: 1px solid #909399;
    margin-right: 10px;
  }
  .paymentmethod>ul:nth-of-type(1){
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin-bottom: 30px;
    text-align: left;
  }
  .paymentmethod>ul:nth-of-type(2){
    width: 95%;
    height: 130px;
    line-height: 40px;
    font-size: 14px;
    margin-bottom: 30px;
    text-align: left;
    padding-left: 5%;
    border-bottom: 1px solid #E4E4E4;

  }
  .paymentmethod>ul:nth-of-type(2)>li{
    position: relative;
  }
  .paymentmethod img{
    position: absolute;
  }
  .paymentmethod img:nth-of-type(1){
    left: 94px;
  }
  .paymentmethod img:nth-of-type(2){
    left: 228px;
  }
  .paymentmethod img:nth-of-type(3){
    left: 362px;
  }
  .paymentmethod>ul:nth-of-type(2)>li:nth-of-type(2){
    margin-top: 20px;
  }
  .paymentmethod>ul:nth-of-type(2)>li:nth-of-type(3){
    margin-top: -15px;
  }
  .paymentmethod>ul:nth-of-type(2)>li:nth-of-type(3)>span:nth-of-type(2){
    display: inline-block;
    margin-left: 50px;
  }
  /*配送信息*/
  .sendinfo>ul>li> button{
    width: 150px;
    height: 40px;
    background-color: white;
    border: 1px solid #909399;
    margin-right: 10px;
  }
  .sendinfo>ul:nth-of-type(1){
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin-bottom: 30px;
    text-align: left;
  }
  .sendinfo>ul:nth-of-type(2){
     width: 95%;
     height: 100px;
     line-height: 40px;
     font-size: 14px;
     margin-bottom: 30px;
     text-align: left;
     padding-left: 5%;
    border-bottom: 1px solid #E4E4E4;

  }
  .sendinfo>ul:nth-of-type(2)>li:nth-of-type(2){
    margin-top: 20px;
  }
  .sendinfo>ul:nth-of-type(2)>li{
    position: relative;
  }
  .sendinfo img{
    position: absolute;
    bottom: 2px;
  }
  .sendinfo img:nth-of-type(1){
    left: 124px;
  }
  .sendinfo img:nth-of-type(2){
    left: 288px;
  }
  .sendinfo img:nth-of-type(3){
    left: 452px;
  }
  /*特殊要求*/
  .specialinfo>ul{
    width: 100%;
    height: 80px;
    line-height: 40px;
    font-size: 14px;
    margin-bottom: 30px;
    border-bottom: 1px solid #E4E4E4;
    position: relative;
  }
  .specialinfo>ul>li{
    text-align: left;
  }
  .specialinfo>ul>li:nth-of-type(1){
    width: 20%;
    height: 30px;
    margin-bottom: 20px;
  }
  .specialinfo>ul>li:nth-of-type(2)>{
    width: 80%;
    position: absolute;
    top: 0;
  }
  .box{
    width: 80%;
    color: #1F1F1F;
    margin: 30px auto;
    border: 1px solid #E4E4E4;
    padding: 30px 20px;
  }
  .paymentnav{
    width: 83%;
    height: 30px;
    margin: 0 auto;
    margin-top: 50px;
    /*margin-left: 10px;*/
  }
  .paymentnav img{
    height: 30px;
    width: 13px;
  }
  .paymentnav>.headernav{
    width: 100%;
    height: 100%;
    color: white;
    position: relative;
  }
  .headernav>li{
    width: 33.3%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    font-size: 14px;
  }
  .headernav>li:nth-of-type(1){
    background-color: #0085D0;
  }
  .headernav>li:nth-of-type(3),
  .headernav>li:nth-of-type(2){
    background-color: #E4E4E4;
  }
  .headernav img{
    position: absolute;
  }
  .headernav>li:nth-of-type(1) img{
    left: 360px;
  }
  .headernav>li:nth-of-type(2) img{
    left: 750px;
  }

  .headernav>li>span:nth-of-type(1){
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 10px;
    display: inline-block;
    background-color: #0085D0;
    border: 1px solid white;
    margin-right: 10px;
    font-size: 12px;
  }
  .headernav>li:nth-of-type(2),
  .headernav>li:nth-of-type(3){
    color: #626262;
  }
  .headernav>li:nth-of-type(2)>span:nth-of-type(1),
  .headernav>li:nth-of-type(3)>span:nth-of-type(1){
    background-color: white;
  }
 /**/
  /*.headernav{*/
    /*width: 83%;*/
    /*height: 50px;*/
    /*position: absolute;*/
    /*top:150px;*/
    /*left: 8.5%;*/
    /*border: 1px solid #E4E4E4;*/
    /*overflow: hidden;*/
  /*}*/
  /*.headernav>li{*/
    /*width: 33.24%;*/
    /*height: 50px;*/
    /*line-height: 50px;*/
    /*text-align: center;*/
    /*float: left;*/
    /*border-right: 1px solid #E4E4E4;*/
  /*}*/
  /*.headernav>li>span:nth-of-type(1){*/
    /*width: 25px;*/
    /*height: 25px;*/
    /*line-height: 25px;*/
    /*text-align: center;*/
    /*border-radius: 15px;*/
    /*display: inline-block;*/
    /*background-color: #666666;*/
    /*color: white;*/
    /*border-right: 1px solid #E4E4E4;*/
    /*margin-right: 10px;*/
    /*font-size: 12px;*/
  /*}*/
  /*.headernav>li>span:nth-of-type(2){*/
    /*color: #999999;*/
  /*}*/
  /*.headernav>li:nth-of-type(3)>span:nth-of-type(1){*/
    /*background-color: white;*/
    /*color: #1F1F1F;*/
    /*border: 1px solid #666666;*/
  /*}*/
  .spdetail{
    width: 80%;
    margin: 30px 0;
    color: #6f7278;
    font-size: 14px;
    text-align: left;
  }
  img{
    width: 60px;
    height: 65px;
    /*border: 1px solid red;*/
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .submitorder{
    width: 100%;
    height: 440px;
    font-size: 14px;
    color: #6f7278;
    position: relative;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    /*background-color: #f1f1f1;*/
    margin: 50px auto;
  }
  .moneydetail{
    width: 360px;
    height:320px;
    float: right;
    margin-right: -80px;
    overflow: hidden;
    /*border-bottom: 1px solid red;*/

  }
  .moneydetail >li{
    margin-top: 20px;
  }
  .moneydetail >li>span{
    display: inline-block;
    width: 150px;
    text-align: left;
    /*border: 1px solid red;*/
  }
  .total{
    width: 220px;
    height:50px;
    line-height: 50px;
    float: right;
    margin-right: -80px;
    overflow: hidden;
    position: absolute;
    bottom: 90px;
    right: 110px;
    border-top: 1px solid #dfdfdf;

  }
  .total >li>span{
    display: inline-block;
    width: 100px;
    text-align: left;
    /*border: 2px solid red;*/
  }
  .total >li>span:nth-of-type(2){
    text-align: center;
  }
  .tijiaoorder{
    width: 150px;
    height: 45px;
    background-color: #C43F40;
    color: white;
    margin-left: 20px;
    border: none;
    position: absolute;
    bottom: 30px;
    right: 60px;
  }
  .selectedregion{
    display: inline-block;
    margin-left: 20px;
  }
</style>
