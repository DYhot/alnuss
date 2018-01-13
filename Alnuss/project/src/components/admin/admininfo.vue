<template>
  <div class="admincontent">
    <h3>个人信息</h3>
    <div class="admintext clear">
      <div class="contenleft">
        <img :src="'../../../static/images/'+userData.headImg" alt="用户头像">
        <el-button @click="upload = true">更换头像</el-button>
        <el-dialog title="更换头像" :visible.sync="upload">

          <div class="form-group">
            <label>背景图</label>
            <input type="file" class="form-control" @change="onFileChange">
          </div>
          <div class="form-group" v-if="image">
            <label>背景图预览</label>
            <img style="width: 200px" :src="image">
          </div>


          <div slot="footer" class="dialog-footer">
            <el-button @click="upload = false">取 消</el-button>
            <el-button type="primary" @click="upload = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>

      <div class="contentright">
        <div>
          <span>用户名：</span>
          <el-input v-model="username" v-if="isTrue" class="myInput"></el-input>
          <label v-else>{{userData.name}}</label>
        </div>
        <div>
          <span>手机号：</span>
          <el-input v-model="phone" v-if="isTrue" class="myInput"></el-input>
          <label v-else>{{userData.phone}}</label>
        </div>
        <div>
          <span>性别：</span>
          <div class="sex" v-if="isTrue">
            <el-radio v-model="radio" label="0">男</el-radio>
            <el-radio v-model="radio" label="1">女</el-radio>
          </div>
          <label v-else v-show="userData.sex === '0'">男</label>
          <label v-else v-show="userData.sex === '1'">女</label>
        </div>
      </div>
    </div>
    <div>
      <el-button v-if="isTrue" @click="escAdmin">取消</el-button>
      <el-button v-if="(isTrue === false)" @click="getAdmin">修改</el-button>
      <el-button v-if="isTrue" @click="setAdmin">保存</el-button>
    </div>
    <!--<div class="uploadFile" v-show="isHead">-->
      <!--<div class="uploadFileTitle clear">-->
        <!--<div>上传头像</div>-->
        <!--<i class="el-icon-close" @click="escUploadFile"></i>-->
      <!--</div>-->
      <!--<div class="fileContent">-->
        <!--<div class="clear fileBox">-->
          <!--<button>本地上传</button>-->
          <!--<input type="file" id="myfile">-->
          <!--<img src="" alt="" id="myimg">-->
        <!--</div>-->
        <!--<div id="imgbox">-->
          <!--<canvas width="350" height="350" id="mycanvas"></canvas>-->
          <!--<canvas id="newcanvas"></canvas>-->
          <!--<div id="cutbox"></div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="fileFoot clear">-->
        <!--<div>-->
          <!--<button id="uploadImg">确定</button>-->
          <!--<button @click="escUploadFile">取消</button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import image_html5_upload from '../common/EXIF'
    export default {
        name: "admininfo",
        data () {
          return {
            image:'',
            dialogImageUrl: '',
            dialogVisible:false,

            isTrue:false,
            userData:{
              name:'admin',
              phone:'15982307113',
              sex:'0',
              headImg:'my.gif'
            },
            username:'',
            phone:'',
            radio:'',
            upload: false,
          }
        },
        methods:{
          getAdmin () {
            this.username = this.userData.name ;
            this.phone = this.userData.phone ;
            this.radio = this.userData.sex ;
            this.isTrue = true ;
          },
          escAdmin () {
            this.isTrue = false ;
          },
          setAdmin () {
            alert('修改成功')
          },
          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
          handleRemove(file, fileList) {
            console.log(file, fileList);
          },
          onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
              return;
            this.createImage(files[0]);
          },
          createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
            reader.onload = (e) => {
              vm.image = e.target.result;
              console.log(e.target.result);
            };
            reader.readAsDataURL(file);
          },
        },
      components:{
        image_html5_upload:image_html5_upload
      }
    }
</script>



<style scoped lang="less">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .clear::after{
    content: '';
    height: 0;
    display:block;
    clear:both;
  }
  button{
    background-color: #444444;
    color: #ffffff;
    outline: none;
    border: none;
    border-radius: 0;
  }
  button:hover{
    background-color: #444444;
    color: #ffffff;
    outline: none;
    border: none;
    border-radius: 0;
  }
  .admincontent{
    padding: 20px 45px;
    position: relative;
    box-sizing: border-box;
    background: url("../../../static/images/adminimg1.png") no-repeat right 20px;
    >h3{
      text-align: left;
      color: rgba(0,0,0,.4);
    }
    .admintext{
      margin: 50px 0;
      .contenleft{
        float: left;
        >img{
          width: 80px;
          border-radius: 80px;
          box-shadow: 0 5px 5px 0 rgba(0,0,0,.3);
        }
        >button{
          display: block;
          margin-top: 10px;
          padding: 6px 10px;
        }
      }
      .contentright{
        margin-left: 50px;
        float: left;
        color: rgba(0,0,0,.5);
        line-height: 2;
        .el-input[data-v-24a10870]{
          width: 200px;
          margin-top:5%;
          &:nth-of-type(0){
            margin-top:0;
          }
        }
        >div{
          text-align: left;
          >span{
            width: 100px;
            display: inline-block;
            text-align: right;
          }
          >div:last-child{
            display: inline-block;
          }
        }
      }
    }
    >img{
      position: absolute;
      top: 50px;
      right:50px;
    }
    /*.uploadFile{*/
      /*position: absolute;*/
      /*width: 380px;*/
      /*background-color: #FFFFFF;*/
      /*box-shadow: 0 0 5px 0 rgba(0,0,0,.3);*/
      /*left: 200px;*/
      /*top: 50px;*/
      /*.fileContent{*/
        /*.fileBox{*/
          /*padding: 5px 30px;*/
          /*position: relative;*/
          /*>input{*/
            /*opacity: 0;*/
            /*width: 80px;*/
            /*height: 25px;*/
            /*position: absolute;*/
            /*left: 30px;*/
            /*top: 5px;*/
          /*}*/
          /*>button{*/
            /*float: left;*/
            /*width: 80px;*/
            /*height: 25px;*/
            /*outline: none;*/
            /*border: none;*/
            /*background-color: rgba(0,0,0,.7);*/
            /*color: #FFFFFF;*/
          /*}*/
          /*>img{*/
            /*display: none;*/
          /*}*/
        /*}*/
        /*#imgbox{*/
          /*position: relative;*/
          /*width: 380px;*/
          /*height: 380px;*/
          /*#cutbox{*/
            /*width: 200px;*/
            /*height: 200px;*/
            /*border-radius: 200px;*/
            /*border: 1px red solid;*/
            /*position: absolute;*/
            /*top: 0;*/
            /*left: 15px;*/
          /*}*/
          /*#newcanvas{*/
            /*display: none;*/
          /*}*/
        /*}*/
      /*}*/
    /*}*/
  }

</style>
