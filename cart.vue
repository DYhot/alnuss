<template >
    <div class="box " id="cartbox">
      <transition enterActiveClass="animated slideInDown" leaveActiveClass="animated bounceOut" mode="out-in" >
      <div class="promptInfo " v-show="promptShow==1">
          <img src="../../../static/images/i.png" alt="">
          您已经收藏了该商品！
          <img src="../../../static/images/cha.png" alt="">
      </div>
      </transition>
      <el-table
        ref="multipleTable"
        :data="cartlist"
        tooltip-effect="dark"
        style="width: 92%"
        @selection-change="handleSelectionChange">
        <el-table-column
          label="全选" width="50" align="center">
        </el-table-column>
        <el-table-column
          type="selection"
          width="65"
         align="center">
        </el-table-column>

        <el-table-column
          label="商品信息" width="100" align="center">
          <template slot-scope="scope">
            <div>
              <img :src="scope.row.g_img" alt="">
            </div>
            <div>{{scope.row.g_name}}</div>
          </template>
        </el-table-column>

        <el-table-column
          prop="sku_sell"
          label="单价"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          label="颜色"
          width="110"
          align="center">
          <template slot-scope="scope">
            <el-select v-model="sval[scope.row.c_id-1]" :placeholder="scope.row.selectedcolor" size="small"
                       value-key="scope.row.c_id" @focus="getAllColor(scope.row)" no-data-text="" @change="colorChange"
                       @visible-change="getskuid(scope.row.sku_id,scope.row.g_p_id2,scope.row.c_id,scope.row.g_id,scope.row.g_p_id)">
              <el-option
                v-for="(item,index) in colorArr"
                :key="item[index]"
                :label="item"
                :selected="index"
                :value="index" align="center"  >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="尺寸"
          width="110"
          align="center">
          <template slot-scope="scope">
            <el-select v-model="sval1[scope.row.c_id-1]" :placeholder="scope.row.selectedsize" size="small"
                       value-key="scope.row.c_id" @focus="getAllSize(scope.row)" no-data-text="" @change="sizeChange"  @visible-change="getskuid(scope.row.sku_id,scope.row.g_p_id2,scope.row.c_id,scope.row.g_id,scope.row.g_p_id)">
              <el-option
                v-for="(item,index) in sizeArr"
                :key="item[index]"
                :label="item"
                :selected="index"
                :value="index" align="center"  >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="数量"
          width="180" prop="goodsnumber"
          align="center">
          <template slot-scope="scope">
            <el-input-number ref="inputnumber" v-model="scope.row.goodsnumber" @change="handleChange(scope.row)" :min="1"  size="small" label="描述文字"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          prop="sku_sell"
          label="金额"
          width="100"
          align="center">
          <template slot-scope="scope" >
            <span>{{scope.row.goodsnumber*scope.row.sku_sell}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="250"
          align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit({index:scope.$index, rowdata:scope.row})">加入收藏</el-button>
            <el-button
              size="mini"
              type="info"
              @click="handleDelete({index:scope.$index, rowdata:scope.row})">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <template prop="total">
        <div class="block">
          <span class="demonstration"></span>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total.totalPage">
          </el-pagination>
        </div>
      </template>
      <div class="settlement" >
        <template >
          <div>
            <span @click="bottomDelete()">删除选中的商品</span>
            <span @click="bottomCollect()">移入收藏</span>
            <span>已选商品共计：{{total.totalNumber}}件</span>
            <span>合计（不含运费、税费）<span class="price">￥{{total.totalPrice}}.00</span></span>
          </div>
          <div class="discount">活动折扣：-￥0.00</div>
          <div class="shoppingbox">
            <img src="../../../static/images/goonbuy.gif" alt="" class="tiaozhuanimg">
            <router-link to="/shop" tag="span" class="shopping">继续购物</router-link>
            <router-link  :to="{path:'/pay',query: {selected: selected}}" tag="button" class="jiesuan" @click="settle">立即结算</router-link>
          </div>
        </template>
      </div>
      <template >
        <div class="guesslike">
            <div class="guesstittle">
              猜你喜欢
            </div>
          <div>
            <cartshutter v-bind:likelist="likelist" @add="addCart"></cartshutter>
          </div>
        </div>
      </template>
    </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import cartshutter from '../common/cartshutter.vue'
  import  '../../../static/css/animate.css'
  import '../../../static/css/ele.css'

  export default {
        name: 'cart',
      data() {
        return {
          selectedstr:"",
          promptShow:0,
          cartlist:[],
          likelist:[],
          colorArr:[],
          sizeArr:[],
          total:{totalNumber:0,totalPrice:0,totalPage:0},
          everyPageCount:5,
          currentPage:1,
          selected: [],
          skuid:"",
          sizeid:"",
          colorid:"",
          goodid:"",
          rowid:"",
          sval:[
          ],
          sval1:[
          ],
          currentPage1: 1,
        }
      },
    watch:{

    },
    computed:{

    },
    components:{
      cartshutter:cartshutter
    },
//    utils :{
//      setParam : function (name,value){
//        localStorage.setItem(name,value)
//      },
//      getParam : function(name){
//        return localStorage.getItem(name)
//      }
//    },
    methods: {
          updateselected(){
            this.selected=[]
            this.selected.push(this.multipleSelection)
          },
        setParam : function (name,value){
          localStorage.setItem(name,value)
        },
        getParam : function(name){
          return localStorage.getItem(name)
        },
      settle(){
        alert(this.total.totalPrice)
      },
      promptInfo() {
        var _this=this;
       this.promptShow=1;
       setTimeout(function () {
         _this.promptShow=0;
       },2000)
      },
      handleSizeChange(val) {
        this.everyPageCount=val
        console.log('每页:', this.everyPageCount);
        this.getdata()
      },
      handleCurrentChange(val) {
        var _this=this;
        this.currentPage=val;
        console.log('当前页:', this.currentPage);
        console.log('选择项:', this.multipleSelection);
        this.getdata()
        //          本地存储实现选择框记忆功能
        var everyPage="everyPage"+_this.everyPageCount+_this.currentPage
        var obj={}
        obj.item=_this.cartlist;
        obj=JSON.stringify(obj)
        _this.setParam(everyPage,obj);
        var selectedItem = localStorage.getItem(everyPage);//取回students变量
        selectedItem = JSON.parse(selectedItem);//把字符串转换成JSON对象
        console.log("我是每页存储",selectedItem)
      },
      toggleSelection(rows) {
        if (rows) {
          console.log("我是rows",rows)
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row,true);
            console.log(row)
          });
        }else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleChange(value) {
        var _this=this;
        this.$nextTick(()=>{
          if(this.multipleSelection!==undefined&&this.multipleSelection.length>0){
            _this.handleSelectionChange()
            _this.changegoodsnum(this.multipleSelection,value)
          }else {
            _this.changegoodsnum(1,value)
          }
        })
      },
      handleSelectionChange(val) {
        var _this=this;
        _this.total.totalPrice=0;
        _this.total.totalNumber=0;
        if(val){
          console.log("111111111val",val)
          console.log("2222222222val",this.multipleSelection)
          //          本地存储实现选择框记忆功能

          this.multipleSelection = val;
          this.multipleSelection.forEach((item,index)=>{
            _this.total.totalPrice+=item.goodsnumber*item.sku_sell;
            _this.total.totalNumber+=item.goodsnumber;
          })
          _this.updateselected()
          this.$store.dispatch("settle",_this.total.totalPrice)
        }else{
          this.multipleSelection.forEach((item,index)=>{
            _this.total.totalPrice+=item.goodsnumber*item.sku_sell;
            _this.total.totalNumber+=item.goodsnumber;
          })
//            _this.selected.push(this.multipleSelection)
          _this.updateselected()
          this.$store.dispatch("settle",_this.total.totalPrice)
        }
      },
      handleDelete(val){
        var _this=this;
        this.$axios.get('/api/deleteOne.do',{params:{u_id:5,c_id:val.rowdata.c_id}}).then(resp=>{
          if(resp.data==1){
            _this.getdata();
          }
        })
      },
      handleEdit(val){
        var _this=this;
        this.$axios.get('/api/getColletOne.do',{params:{u_id:5,g_id:val.rowdata.g_id}}).then(resp=>{
            if(resp.data==0){
              this.$axios.get('/api/colletionOne.do',{params:{u_id:5,g_id:val.rowdata.g_id,col_prop:1,c_id:val.rowdata.c_id}})
                .then(resp=>{
                  if(resp.data==1){
                    this.getdata();
                  }
              })
            }else{
              _this.promptInfo()
            }
        })
      },
      bottomDelete(){
        let idArr=[];
        for(var i=0;i<this.multipleSelection.length;i++){
          idArr.push(this.multipleSelection[i].c_id)
        }
        this.$axios.get('/api/deleteMultiple.do',{params:{u_id:5,idArr:idArr}})
        this.getdata();
      },
      bottomCollect(){
        let gidArr=[];
        let cidArr=[];
        for(var i=0;i<this.multipleSelection.length;i++){
          gidArr.push(this.multipleSelection[i].g_id)
          cidArr.push(this.multipleSelection[i].c_id)
        }
        this.$axios.get('/api/collectMultiple.do',{params:{u_id:5,gidArr:gidArr,cidArr:cidArr,col_prop:1}})
          .then(resp=>{
            this.getdata();
        })
      },
      changegoodsnum(val,value){
        console.log("我是修改number的value",value)
        var _this=this;
        var modifyid,number;
        if(val instanceof Array){
          val.forEach((item,index)=> {
            if(val[index].c_id==value.c_id){
              this.$axios.get('/api/modifyGoodsNumber.do',{params:{u_id:5,goodsnumber:val[index].goodsnumber,c_id:val[index].c_id}});
              console.log("c_id:",val[index].c_id)
              console.log("goodsnumber:",val[index].goodsnumber)
                  modifyid=val[index].c_id;
                  number=val[index].goodsnumber;;
            }
          })
          this.cartlist.forEach((item,index)=> {
            if(item.c_id==modifyid){
              _this.cartlist[index].goodsnumber=number;
            }
          })
        }else{
          this.cartlist.forEach((item,index)=>{
            if(item.c_id==value.c_id){
              this.cartlist[index].goodsnumber=value.goodsnumber;
              this.$axios.get('/api/modifyGoodsNumber.do',{params:{u_id:5,goodsnumber:value.goodsnumber,c_id:value.c_id}})
            }
          })
        }
      },
      getAllColor(val){
        var newArr=[];
        this.colorArr=[];
        this.$axios.get('/api/getAllcolor.do',{params:{"sku_id":val.sku_id,"c_id":val.c_id,u_id:5}})
          .then(resp => {
            resp.data.forEach((item,index)=>{
              newArr.push(item.g_p_id)
            })
            newArr.distinct()
            this.colorArr=[...newArr]
            this.colorArr.forEach((item,index)=>{
              if(item==1){
                this.colorArr[index]="红色";
              }
              if(item==2){
                this.colorArr[index]="橙色";
              }
            })
            console.log("我是colorArr:",this.colorArr)
          })
      },
      getAllSize(val){
        var newArr=[];
        this.sizeArr=[];
        this.$axios.get('/api/getAllcolor.do',{params:{"sku_id":val.sku_id,"c_id":val.c_id,u_id:5}})
          .then(resp => {
            resp.data.forEach((item,index)=>{
              newArr.push(item.g_p_id2)
            })
            newArr.distinct()
            this.sizeArr=[...newArr]
            this.sizeArr.forEach((item,index)=>{
              if(item==1){
                this.sizeArr[index]="M";
              }
              if(item==2){
                this.sizeArr[index]="L";
              }
            })
            console.log("我是sizeArr:",this.sizeArr)
          })
      },
      getskuid(a,b,c,d,e){
        this.skuid=a;
        this.sizeid=b;
        this.rowid=c;
        this.goodid=d;
        this.colorid=e;
      },
      colorChange(index){
        var _this=this;
        this.$axios.get('/api/modifyColor.do',{params:{u_id:5,"skuid":this.skuid,"sizeid":this.sizeid,"colorid":index+1,"rowid":this.rowid,"goodid":this.goodid}})
          .then(resp => {
            _this.getdata()
          })
      },
      sizeChange(index){
        var _this=this;
        this.$axios.get('/api/modifySize.do',{params:{u_id:5,"skuid":this.skuid,"colorid":this.colorid,"sizeid":index+1,"rowid":this.rowid,"goodid":this.goodid}})
          .then(resp => {
            _this.getdata()
          })
      },
      getdata(){
        var _this=this;
        this.$axios.get('/api/getAlldata.do',{params:{"u_id":5,"currentPage":this.currentPage,"everyPageCount":this.everyPageCount}})
          .then(resp => {
            this.cartlist = resp.data
            var selectedItem = localStorage.getItem("selected");//取回students变量
            selectedItem = JSON.parse(selectedItem);//把字符串转换成JSON对象
            _this.selectedstr=selectedItem
            console.log("我是 _this.selectedstr存储", _this.selectedstr)
            for(var i=0;i<_this.cartlist.length;i++){
                if(_this.selectedstr.indexOf(_this.cartlist[i].g_id)==-1){
                  _this.selectedstr+=_this.cartlist[i].g_id+","
                }
            }
            console.log(" _this.selectedstr:", _this.selectedstr)

            _this.setParam("selected",JSON.stringify( _this.selectedstr));
//             selectedItem = localStorage.getItem("selected");//取回students变量
//            selectedItem = JSON.parse(selectedItem);//把字符串转换成JSON对象
//            selectedItem = localStorage.getItem("selected");//取回students变量
//            selectedItem = JSON.parse(selectedItem);//把字符串转换成JSON对象
//            _this.selectedstr=selectedItem
//            console.log("selectedItem:",selectedItem)
            setTimeout(function(){
              _this.toggleSelection(_this.cartlist)
              _this.updateselected()
            },1);
            this.cartlist.forEach((item,index)=>{
              if(item.g_p_id==1){
                this.cartlist[index].selectedcolor="红色"
              }
              if(item.g_p_id==2){
                this.cartlist[index].selectedcolor="橙色"
              }
              if(item.g_p_id2==1){
                this.cartlist[index].selectedsize="M"
              }
              if(item.g_p_id2==2){
                this.cartlist[index].selectedsize="L"
              }
              this.cartlist[index].colorValue=this.cartlist[index].g_p_id;
              this.cartlist[index].sizeValue=this.cartlist[index].g_p_id2;
            })
          })
        for(let i=0;i< this.cartlist.length;i++) {
          this.sval.push({value: ''})
          this.sval1.push({value: ''})
        }
      },
      addCart(val){
        var _this=this;
        this.$axios.get('/api/getOne.do',{params:{"u_id":5,"sku_id":val}})
          .then(resp => {
             console.log("我是resp的数据",resp.data);
             if(resp.data[0]==0){
                this.$axios.get('/api/addCart.do',{params:{"u_id":5,"sku_id":val}})
                  .then(resp => {
                    console.log("添加数据成功")
                    _this.getdata()
                  })
             }else{
               this.$axios.get('/api/addNumber.do',{params:{"u_id":5,"sku_id":val}})
                 .then(resp => {
                   console.log("添加数据成功+1")
                   _this.getdata()
                 })
             }
          })
      }
    },
      created () {
          var _this=this;
        this.$axios.get('/api/getPageCount.do')
          .then(resp => {
            _this.total.totalPage=resp.data[0].count;
            for(let i=0;i<resp.data[0].count;i++) {
              _this.sval.push({value: ''})
              _this.sval1.push({value: ''})
            }
//            //要存储的JSON对象
//            selectedItem = JSON.stringify(selectedItem);//将JSON对象转化成字符串
//            localStorage.setItem("selectedItem",selectedItem);//用localStorage保存转化好的的字符串
//            //上面即可保存JSON对象，接下来我们在要使用的时候再将存储好的students变量取回
//            var selectedItem2 = localStorage.getItem("selectedItem");//取回students变量
//            selectedItem2 = JSON.parse(selectedItem2);//把字符串转换成JSON对象
//            console.log("我是selectedItem:",selectedItem2)
            if(_this.sval.length>0&&_this.sval1.length>0){
              this.$axios.get('/api/getAlldata.do',{params:{"u_id":5,"currentPage":this.currentPage,"everyPageCount":this.everyPageCount}})
                .then(resp => {
                  _this.cartlist = resp.data;
                  _this.cartlist.forEach((item,index)=>{
                    _this.selectedstr+=item.g_id+","
                  })
                  console.log("_this.selectedstr",_this.selectedstr)
//                  var obj={}
//                  obj.item=_this.cartlist;
//                  obj=JSON.stringify( _this.selectedstr)
                  _this.setParam("selected",JSON.stringify( _this.selectedstr));
                  var selectedItem = localStorage.getItem("selected");//取回students变量
                  selectedItem = JSON.parse(selectedItem);//把字符串转换成JSON对象
//                  console.log("我是每页存储",selectedItem)
//                  console.log("我是 _this.utils.getParam", _this.utils.setParam)
//                  console.log("我是totalPage",this.total.totalPage)
////          本地存储实现选择框记忆功能
//                    var everyPage="everyPage"+_this.everyPageCount+_this.currentPage
//                    var obj={}
//                    obj.item=_this.cartlist;
//                    obj=JSON.stringify(obj)
//                    _this.setParam(everyPage,obj);
//                    var selectedItem = localStorage.getItem(everyPage);//取回students变量
//                        selectedItem = JSON.parse(selectedItem);//把字符串转换成JSON对象
//                  console.log("我是每页存储",selectedItem)

//                  设置默认选中并打勾
                  setTimeout(function(){
                    _this.toggleSelection(_this.cartlist)
                    _this.updateselected()
                  },1);
                  _this.cartlist.forEach((item,index)=>{
                    if(item.g_p_id==1){
                      _this.cartlist[index].selectedcolor="红色"
                    }
                    if(item.g_p_id==2){
                      _this.cartlist[index].selectedcolor="橙色"
                    }
                    if(item.g_p_id2==1){
                      _this.cartlist[index].selectedsize="M"
                    }
                    if(item.g_p_id2==2){
                      _this.cartlist[index].selectedsize="L"
                    }
                    _this.cartlist[index].colorValue=_this.cartlist[index].g_p_id;
                    _this.cartlist[index].sizeValue=_this.cartlist[index].g_p_id2;
                  })
                })
            }
            this.$axios.get('/api/getLike.do')
              .then(resp => {
                _this.likelist=resp.data;
            })
          })
      },
    destroyed(){

    },
    mounted(){
          var _this=this;
      console.log("所有的数据",this.cartlist)
    }
  }
</script>
<style scoped lang="less">
  body{
    overflow: hidden;
  }
  button{
    cursor: pointer;
  }
  .block{
    margin: 30px 120px 30px 0;
    /*border: 1px solid red;*/
    background-color: #F2F2F2;
    float: right;
    width: 550px;
  }
  .box{
    overflow: hidden;
    /*border: 1px solid red;*/
    width: 88%;
    margin: 50px 0 50px 150px;
  }
  .settlement{
    width: 90%;
    height: 200px;
    background-color: #FCFCFC;
    line-height: 100px;
    font-size: 14px;
    color: #5A5E66;
    overflow: hidden;
    .price{
      color:#C43F40;
      font-weight: bold;
    }
  }
  .settlement span{
      cursor: pointer;
    position: absolute;

    }
  .settlement >div:nth-of-type(1){
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
    .settlement >div:nth-of-type(1)>span:nth-of-type(4){
      display: inline-block;
      width: 200px;
      /*border: 1px solid red;*/
      text-align: right;
      right: 220px;

  }
  .settlement >div:nth-of-type(1)>span:nth-of-type(3){
    /*margin-left: 450px;*/
    right: 400px;

  }
  .settlement >div:nth-of-type(1)>span:nth-of-type(2){
    /*margin-left: 20px;*/
    left: 320px;
  }
  .settlement >div:nth-of-type(1)>span:nth-of-type(1){
    /*margin-left: -30px;*/
    left: 210px;
  }
  .settlement button{
    width: 150px;
    height: 45px;
    background-color: #C43F40;
    color: white;
    margin-left: 20px;
    border: none;
  }
    .cartbox{
    width: 90%;
    height: 150px;
    border: 1px solid red;
  }
  .cartbox>div{
    float: left;
  }
  .productInfo{
    width: 100px;
    height: 150px;
    border: 1px solid red;
    float: left;
  }
 .productInfo>img{
   width: 100px;
   height: 115px;
   border: 1px solid red;
 }
img{
    width: 60px;
    height: 65px;
    /*border: 1px solid red;*/
  }
 .info{
   width:80%;
   line-height: 150px;
 }
 .info span{
   display: inline-block;
   width: 25%;
 }
  .operation {
    width: 10%;
    height: 100%;
    border: 1px solid red;
  }
    .discount{
      width: 30%;
      height: 30px;
      line-height: 30px;
      text-align: right;
      margin: -30px 0 30px 700px;
      /*border: 1px solid red;*/
      border-bottom: 1px solid gainsboro;

    }
  .shopping{
    display: inline-block;
    width: 150px;
    height: 45px;
    position: absolute;
    left: 60px;
    /*margin: 0 0 0 250px;*/
    line-height: 50px;
    border: 1px solid #bebebe;
  }
  .jiesuan{
    float: right;
    margin: 0 45px 0 0;

  }
  .guesslike{
    width: 90%;
    height: 500px;
    margin-top: 50px;
    border: 1px solid #e4e4e4;
    >.guesstittle{
      width: 95%;
      height: 60px;
      line-height: 60px;
      margin: 20px auto;
      text-align: left;
      border-bottom: 1px solid #d6d6d6;
    }
  }
  .promptInfo{
    width: 350px;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    background-color: #EDF2FC;
    color: #909399;
    font-size: 14px;
    text-align: left;
    position: absolute;
    top: 110px;
    left: 38%;
    z-index: 100;
  }
  .promptInfo img{
    width: 20px;
    height: 20px;
    margin-top: 15px;
  }
  .promptInfo img:nth-of-type(1){
    margin-left: 20px;
    margin-right: 10px;
  }
  .promptInfo img:nth-of-type(2){
    margin-left: 120px;
  }
  .shoppingbox{
    position: relative;
  }
  .tiaozhuanimg{
    width: 15px;
    height: 12px;
    position: absolute;
    top: 20px;
    left: 80px;
  }
  /*vue自带的过度效果*/
  /*.fade-enter-active, .fade-leave-active {*/
    /*transition: opacity .5s*/
  /*}*/
  /*.fade-enter, .fade-leave-to !* .fade-leave-active in below version 2.1.8 *! {*/
    /*opacity: 0*/
  /*}*/
</style>
