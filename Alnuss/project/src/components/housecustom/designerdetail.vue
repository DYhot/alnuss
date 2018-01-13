<template>
  <div>
    <div class="banner">
      <div class="banner-left">
        <img :src="designerdata[0].img" alt="" id="designerimg">
        <button @click="dialogFormVisible = true">立即预约</button>
      </div>
      <div class="banner-right">
        <div>
          <h2>{{designerdata[0].name}}</h2>
          <button @click="care">+&nbsp;关注</button>
          <h4>{{designerdata[0].describe}}</h4>
          <p>{{designerdata[0].introduce}}</p>
        </div>
      </div>
    </div>

    <div>
      <el-dialog :visible.sync="dialogFormVisible" width="35%" >
        <el-form :model="form">
          <el-form-item label="设计师" :label-width="formLabelWidth" align="left">
          <el-select v-model="form.region" placeholder="请选择设计师" >
            <el-option   v-for="item in alldesigner" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="预约时间" :label-width="formLabelWidth" align="left">
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="联系电话" :label-width="formLabelWidth">
            <el-input v-model="form.name" auto-complete="off" width="100px"></el-input>
          </el-form-item>
          <el-form-item label="联系地址" :label-width="formLabelWidth">
            <el-input v-model="form.adress" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer" align="center">
          <button class="close" @click="dialogFormVisible = false">取 消</button>
          <button class="sure" type="primary" @click="dialogFormVisible = false">确 定</button>
        </div>
      </el-dialog>
    </div>

    <div class="goldcase">
      <div class="title">
        <h2>金牌案例</h2>
        <h4>Gold Case</h4>
      </div>
      <div  v-for="(item ,index) in casedata" :key="item.id">
        <div v-if="index==0" class="goldcaseone">
          <div >
            <product_specially :imgsrc="item.img" whclass="e"></product_specially>
            <!--<img :src="item.img" alt="">-->
          </div>
          <div>
            <h2>{{item.title}}</h2>
            <p>{{item.smalltitle}}</p>
            <p><span>户型：</span>{{item.huxing}}</p>
            <p><span>宣言：</span> {{item.xuanyan}}</p>
            <p><span>介绍：</span>{{item.introduce}}</p>
          </div>
        </div>
        <div v-else-if="index==1" class="goldcasetwo">
          <div >
            <h2>{{item.title}}</h2>
            <p>{{item.smalltitle}}</p>
            <p><span>户型：</span>{{item.huxing}}</p>
            <p><span>宣言：</span> {{item.xuanyan}}</p>
            <p><span>介绍：</span>{{item.introduce}}</p>
          </div>
          <div >
            <product_specially :imgsrc="item.img" whclass="e"></product_specially>
          </div>
        </div>
      </div>
      <div class="goldcasenav">
          <div id="div1"><div>2015</div></div>
          <div id="div2"><div>6sun</div></div>
          <div id="div3"> <div>2017</div></div>
        <div id="div4"> <div>26sun</div></div>
      </div>
    </div>
    <div class="morecase">
      <h3>知道更多关于我的案例</h3>
      <div v-for="item in casedata">
        <designer_speciallytwo :imgsrc="item.img" :productTitle="item.title"></designer_speciallytwo>
        <!--<img :imgsrc="picture1919.jpg" alt="">-->
        <!--<h4>粉白弹奏</h4>-->
      </div>
      <!--<div><img src="../../../static/images/picture1919.jpg" alt=""><h4>春之佳色</h4></div>-->
      <!--<div><img src="../../../static/images/picture1919.jpg" alt=""><h4>落叶缤纷</h4></div>-->
    </div>
  </div>
</template>
<script>
  import product_specially from "../common/product_specially.vue";
  import designer_speciallytwo from "../common/designer_speciallytwo.vue";
    export default {
        name: 'designerdetail',
        data: function () {
            return {
              designerdata:[
              ],
              alldesigner:[],
              casedata:[],
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
      components:{
        product_specially:product_specially,
        designer_speciallytwo:designer_speciallytwo
      },
      methods:{
        care(){
          console.log("关注成功")
        },
        appointment(){
          console.log("跳转到预约")
        }
      },
      created(){
          var data=[
            {id: 1, name: '胥淼', img: '../../../static/images/m-jiang.png', describe: '擅 长 风 格: 欧式、中式家居',
              introduce: '出生于1894年，毕业于英国剑桥大学，攻读家居设计专业，曾在某某地方工作几年，这些年我逐渐体会到，' +
              '没有好客户，就不会有好广告；没有好广告，就也留 不住好客户。还有，没有任何一个客户，会买他自己都没兴趣，' +
              '或是看不懂的广告。'}
          ]
        this.casedata=[
          {id: 1, title: '粉白弹奏', img: 'case1.jpg', smalltitle: '荣获国际美丽家居银牌',
            huxing: ' 二室 一厅 一卫 | 房屋面积：63m² | 风格： 现代',
            xuanyan: '一个愉悦的家居、一种尊贵的生活、一方独享的天 地，都在这里寻求最合适的表达。',
            introduce: '现代家具主要分板式家具和实木家具。 板式家具简洁明快、新潮，布置灵活、价格容' +
            '易选择， 板式家具是家具市场的主流。 实木家具是指所有面板材料 都是未经再次加工的天然材料，' +
            '不使用任何人造板（部分内板可能使用人造板 ）制成的家具。具市场的主流。 实木家具是指所有面板材' +
            '料都是未经再次加 工的天然材料，不使用任何人造板（部分内板可能使用人造板）制成的家具。'},
          {id: 1, title: '粉白弹奏', img: 'case2.jpg', smalltitle: '荣获国际美丽家居银牌',
            huxing: ' 二室 一厅 一卫 | 房屋面积：63m² | 风格： 现代',
            xuanyan: '一个愉悦的家居、一种尊贵的生活、一方独享的天 地，都在这里寻求最合适的表达。',
            introduce: '现代家具主要分板式家具和实木家具。 板式家具简洁明快、新潮，布置灵活、价格容' +
            '易选择， 板式家具是家具市场的主流。 实木家具是指所有面板材料 都是未经再次加工的天然材料，' +
            '不使用任何人造板（部分内板可能使用人造板 ）制成的家具。具市场的主流。 实木家具是指所有面板材' +
            '料都是未经再次加 工的天然材料，不使用任何人造板（部分内板可能使用人造板）制成的家具。'},
          {id: 2, title: '粉白弹奏', img: 'case2.jpg', smalltitle: '荣获国际美丽家居银牌',
            huxing: ' 二室 一厅 一卫 | 房屋面积：63m² | 风格： 现代',
            xuanyan: '一个愉悦的家居、一种尊贵的生活、一方独享的天 地，都在这里寻求最合适的表达。',
            introduce: '现代家具主要分板式家具和实木家具。 板式家具简洁明快、新潮，布置灵活、价格容' +
            '易选择， 板式家具是家具市场的主流。 实木家具是指所有面板材料 都是未经再次加工的天然材料，' +
            '不使用任何人造板（部分内板可能使用人造板 ）制成的家具。具市场的主流。 实木家具是指所有面板材' +
            '料都是未经再次加 工的天然材料，不使用任何人造板（部分内板可能使用人造板）制成的家具。'}
        ]
        this.alldesigner=[
          {id: 1, name: '胥淼'},
          {id: 2, name: '张云峰'},
          {id: 3, name: '雷锋'},
        ]
        this.designerdata=data;
    }
    }
</script>
<style scoped lang="less">
  @textcolor:black;
  @backgroundcolor:gray;
  @titlecolor:gray;
  .close,.sure{
    width: 100px;
    height: 35px;
    background-color: #898989;
    color: whitesmoke;
    border: none;
    cursor: pointer;
  }
  .sure{
    margin-left: 30px;
  }
 .mybutton{
    width: 80px;
   height: 30px;
   border: none;
   background-color: @backgroundcolor;
   color: whitesmoke;
   cursor: pointer;
  }
  .textbox{
    width: 30%;
    height: 80%;
    /*border: 1px solid red;*/
  }

  .banner{
    width: 100%;
    height: 350px;
    background: url("../../../static/images/designerbannertwo.jpg");
    /*border: 1px solid red;*/
    >div{
      text-align: center;
      float: left;
    }
    >.banner-left{
      width: 20%;
      height: 100%;
      margin-left: 0px;
      >#designerimg{
        margin-top: 60px;
        margin-bottom: 20px;
      }
      >button{
        .mybutton;
        display: block;
        margin-left: 35%;
      }
    };
    >.banner-right{
      width: 70%;
      height: 100%;
      text-align: left;
      color: @textcolor;
      >div{
        >h2{
          display: inline-block;
          margin-top: 100px;
        }
        >h4{
          margin: 30px 0;
        }
        >button{
          .mybutton;
          margin: 0 0 0 10px;
        }
      }

    }
  }
  .goldcase{
    width: 80%;
    height: 1000px;
    margin: 0 auto;
    font-size: 15px;
    margin-top:80px;
    /*border: 1px solid red;*/
    >div{
      border: 1px solid transparent;
      >.goldcaseone,.goldcasetwo{
        border: 1px solid transparent;
        >div{
          float: left;
        }
      }
      >.goldcaseone{
        overflow: hidden;

        >div:nth-of-type(1){
          width: 40%;
          margin-top:80px;
          /*border: 1px solid red;*/
          >img{
            width: 100%;
            margin-top: 80px;
          }
        }
        >div:nth-of-type(2){
          width: 35%;
          height: 65%;
          text-align: left;
          margin-top: 80px;
          margin-left: 220px;
          /*border: 1px solid red;*/
          >p{
            margin: 10px 0;
            line-height: 25px;
            >span{
              font-weight: bold;
            }
          }
        }
      }
      >.goldcasetwo{
        overflow: hidden;
        >div:nth-of-type(2){
          width: 40%;
          margin-top: 80px;
          /*border: 1px solid red;*/
          >img{
            width: 100%;
            margin-top: 80px;
          }
        }
        >div:nth-of-type(1){
          width: 35%;
          height: 65%;
          text-align: left;
          margin: 100px 220px 0 30px;
          /*float: left;*/
          /*border: 1px solid red;*/
          >p{
            margin: 10px 0;
            line-height: 25px;
            >span{
              font-weight: bold;
            }
          }
        }
      }
      >div:nth-of-type(2),div:nth-of-type(3){
        width: 100%;
        height: 45%;
        /*border: 1px solid red;*/
      }
      >.title{
        >h2{
          margin-top: 40px;
        }
        >h4{
          color: @titlecolor;
          margin: 10px 0;
        }
      }
    }

  }
  .goldcasenav{
    width: 3px;
    height: 700px;
    position: absolute;
    top: 740px;
    left:50%;
    background-color: #8cc079 ;
    >div,#div3{
      >div{
        cursor: pointer;
        width: 50px;
        height: 50px;
        background-color: #8cc079;
        border-radius: 25px;
        line-height: 50px;
        color: whitesmoke;
      }
    }
    >#div2,#div4{
      margin: 168px 0 0 -30px;
      width: 60px;
      height: 60px;
      border: 1px solid transparent;
      /*margin-left: -35px;*/
      /*margin-top: -62px;*/
      border-radius: 30px;
      background-color: transparent;
      >div{
        margin-left: 5px;
        margin-top: 5px;
      }
      &:hover{
        transform: scale(1.05);
        background-color: whitesmoke;
        border: 1px solid #8cc079;
        transition: transfrom ease 0.3s,border ease 0.3s,background-color ease 0.3s;
        >div {
          transform: scale(0.99);
          transition: transfrom ease 0.3s;
        }}
    }
    >#div1,#div3{
      width: 70px;
      height: 70px;
      border: 1px solid transparent;
      margin-left: -35px;
      margin-top: -62px;
      border-radius: 35px;
      background-color: transparent;
      &:hover{
        transform: scale(1.05);
        background-color: whitesmoke;
        border: 1px solid #8cc079;
        transition: transfrom ease 0.3s,border ease 0.3s,background-color ease 0.3s;
        >div{
          transform: scale(0.99);
          transition: transfrom ease 0.3s;
        }
      }
      >div{
        width: 60px;
        height: 60px;
        border-radius: 30px;
        line-height: 60px;
        margin: 5px 0 0 5px;
      }
    }
    >#div3{
      margin-top: 200px;
    }
  }

  .morecase{
  width: 80%;
  margin: 0 auto;
  height: 500px;
  /*border: 1px solid red;*/
  text-align: center;
  >h3{
    margin: 50px 0;
    color: @titlecolor;
  }
  >div{
    width: 33%;
    height: 70%;
    float: left;
    text-align: center;
    /*border: 1px solid red;*/
    >img{
      width: 90%;
      height: 75%;
      margin-bottom: 30px;
    }
  }
}

</style>
