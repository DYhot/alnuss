//路由
const express = require("express");
const router = express.Router();
const path=require("path")
const AppointmentController=require(path.join(__dirname,"../controller/AppointmentController.js"))
const Collectcontroller=require(path.join(__dirname,"../controller/Collectcontroller.js"))
const AddrControoler=require(path.join(__dirname,"../controller/UsersAddr.js"))
const OderControoler=require(path.join(__dirname,"../controller/OderControoler.js"))
const userLoginController=require(path.join(__dirname,"../controller/userLoginController.js"))

const cartController=require(path.join(__dirname,"../controller/cartController.js"));

router.post("/login",(req,res)=>{
    user={name:"abc",id:1,pws:"123"}
    let username=req.body.username
    let pwd=req.body.pwd


    if(username==user.name&&pwd==user.pws)
    {
        res.cookie("user",user,{maxAge:1000*60*60*24*60})
        res.render("index")
    }
})
//用户预约
router.post("/getAppointment",AppointmentController.getUserAppoint)
router.post("/updateAppointment",AppointmentController.updateAppointCancel)
//用户收藏
router.post("/getUserConlect",Collectcontroller.getUserCollect)
router.post("/updateUserCollect",Collectcontroller.updateUserCollect)
//用户地址
//得到用户地址信息
router.post("/getUserAddr",AddrControoler.getUserAddr)
//更新用户地址
router.post("/updateUserAddr",AddrControoler.updateUserAddr)
//增加用户地址
router.post("/addUserAddr",AddrControoler.addUserAddr)
//删除用户地址
router.post("/deleteUserAddr",AddrControoler.deleteUserAddr)
//订单
router.post("/getOder",OderControoler.getOderdetail)
router.post("/updateoderstate",OderControoler.updateoderstate)
router.post("/updatevevalstate",OderControoler.updatevevalstate)


//登录相关接口
//登录
router.post('/getUserTel.do',userLoginController.getUserTel);
router.post('/userLogin.do',userLoginController.userLogin);
//忘记密码
router.post('/setUserInfo.do',userLoginController.setUserInfo);
//注册
router.post('/getCode.do',userLoginController.getCode);
router.post('/register.do',userLoginController.register);
router.post('/addUser.do',userLoginController.addUser);



router.get("/model.do",(req,res)=>{
   var arr=[
       {id:1,imgsrc:"keting_o_o_0.jpg",html:"keting_o.html",des_img:"desiger.png",img_content:"中 式 颐 和 园",
           ct_content:"此项目位于高新区，成都市高新，为用户带来便利",des_people:"设计师1"},
       {id:2,imgsrc:"ktx_o_800_o_0.jpg",html:"ktx_o_800.html",des_img:"desiger.png",img_content:"中 式 颐 和 园",
           ct_content:"此项目位于高新区，成都市高新，为用户带来便利",des_people:"设计师2"},
       {id:3,imgsrc:"ktx_o_200_oft.jpg",html:"ktx_o_200.html",des_img:"desiger.png",img_content:"中 式 颐 和 园",
           ct_content:"此项目位于高新区，成都市高新，为用户带来便利",des_people:"设计师3"},
       {id:4,imgsrc:"kt_o_400_o_0.jpg",html:"ktx_o_400.html",des_img:"desiger.png",img_content:"中 式 颐 和 园",
           ct_content:"此项目位于高新区，成都市高新，为用户带来便利",des_people:"设计师4"},
       {id:5,imgsrc:"ktx_o_600_o_0.jpg",html:"ktx_o_600.html",des_img:"desiger.png",img_content:"中 式 颐 和 园",
           ct_content:"此项目位于高新区，成都市高新，为用户带来便利",des_people:"设计师5"},
       {id:6,imgsrc:"3d-1.gif",des_img:"desiger.png",img_content:"中 式 颐 和 园",
           ct_content:"此项目位于高新区，成都市高新，为用户带来便利",des_people:"设计师6"},
       {id:7,imgsrc:"3d-1.gif",des_img:"desiger.png",img_content:"中 式 颐 和 园",
           ct_content:"此项目位于高新区，成都市高新，为用户带来便利",des_people:"设计师7"},
       {id:8,imgsrc:"3d-1.gif",des_img:"desiger.png",img_content:"中 式 颐 和 园",
           ct_content:"此项目位于高新区，成都市高新，为用户带来便利",des_people:"设计师8"},
   ]
    res.send(arr);
});

// 购物车部分
router.get("/getAlldata.do",cartController.getAllData)
router.get("/modifyGoodsNumber.do",cartController.modifyNumber)
router.get("/getAllcolor.do",cartController.getAllcolor)
router.get("/modifyColor.do",cartController.modifyColor)
router.get("/modifySize.do",cartController.modifySize)
router.get("/getLike.do",cartController.getLike)
router.get("/getOne.do",cartController.getOne)
router.get("/addCart.do",cartController.addCart)
router.get("/addNumber.do",cartController.addNumber)
router.get("/getPageCount.do",cartController.getPageCount)
router.get("/deleteOne.do",cartController.deleteOne)
router.get("/deleteMultiple.do",cartController.deleteMultiple)
router.get("/getColletOne.do",cartController.getColletOne)
router.get("/colletionOne.do",cartController.colletionOne)
router.get("/collectMultiple.do",cartController.collectMultiple)
router.get("/addOrderAdress.do",cartController.addOrderAdress)
router.get("/getAlladress.do",cartController.getAlladress)

router.get('/dingzhi.do',(req,res)=>{
    let arr = [
        {imgsrc:'banner.jpg'},
        {imgsrc:'风格1.jpg'},
        {imgsrc:'风格2.jpg'},
        {imgsrc:'fengge3.jpg'},
        {imgsrc:'fengge4.jpg'},
        {imgsrc:'户型图1.jpg'},
        {imgsrc:'load1.jpg'},
        {imgsrc:'load2.jpg'},
        {imgsrc:'load3.jpg'},
        {imgsrc:'detail1.jpg'},
        {imgsrc:'detail2.jpg'},
        {imgsrc:'detail3.jpg'}
    ]
    res.send(arr);
});

//导出路由
module.exports = router;
