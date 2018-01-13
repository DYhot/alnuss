<template>
  <div>
    <!--tag标签-->
    <div class="tag">
      <el-steps :active="active" finish-status="success" simple>
        <el-step title="确认信息" icon="el-icon-edit"></el-step>
        <el-step title="重置密码" icon="el-icon-setting"></el-step>
      </el-steps>
    </div>
    <!--填写信息内容-->
    <div class="content" v-if="ok">
       <form>
         <div>
           <label>手机号：</label><input type="text" placeholder="请输入手机号"/>
         </div>
         <div class="yanzheng">
           <label>验证码：</label><input type="text" placeholder="请输入验证码"><button>获取验证码</button>
         </div>
         <div>
           <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
         </div>
       </form>
    </div>
    <div class="content" v-else>
      <form>
        <div>
          <label>旧密码：</label><input type="password" placeholder="请输入旧密码"/>
        </div>
        <div>
          <label>新密码：</label><input type="password" placeholder="请输入新密码">
        </div>
        <div>
          <label>确认密码：</label><input type="password" placeholder="确认密码">
        </div>
        <div>
          <router-link tag="el-button" to="/login">提交</router-link>
          <!--<el-button style="margin-top: 12px;" @click="submit">提交</el-button>-->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default{
      name:"forgot",
      data(){
         return {
             active:0,
           ok:true
         };
      },
     methods:{
          next(){
              if(this.active++>1){
                this.active=0;
              }else{
                  this.ok=false;
              }
          },
         submit(){
              alert("提交")
         }
     }
  }
</script>
<style scoped lang="less">
  .tag{
    width: 30%;
  }
  .content{
    width: 100%;
    height: 300px;
    margin-top:5rem;
    div{
      margin-bottom:2rem;
    }
    input{
      border-top:0;
      border-right:0;
      border-left:0;
      border-bottom: 1px solid grey;
      outline: none;
    }
  }
  .yanzheng{
    margin-left:7%;
    button{
      margin-left:2%;
      background: #169bd5;
      color:white;
      border-radius: 5px;
      border:none;
      padding:3px;
      outline: none;
    }
  }
</style>
