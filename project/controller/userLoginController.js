/**
 * Created by Mr.袁 on 2017/12/16.
 */
//创建人：张云峰
const userLoginDao = require('../dao/userLoginDao');
const crypto = require('crypto');

//===============短信================

var AV = require('leancloud-storage');
var APP_ID = 'lHRFBMoAeJY173fsydhWhsA9-gzGzoHsz';
var APP_KEY = 'KaLfFi6mldW1kh68TFsL9OSt';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


const userLoginController = {
    getUserTel(req,res){
        userLoginDao.userDao([req.body.tel]).then(data=>{
            if(data.length>0){
                res.send({flag:1,message:"成功"})
            }else{
                res.send({flag:-1,message:"失败"})
            }
        })
    },
    userLogin(req,res){
        var hasher=crypto.createHash("md5");
        hasher.update(req.body.password);
        var hashmsg=hasher.digest('hex');
        userLoginDao.userDao([req.body.phone,hashmsg]).then(data=>{
            if(data.length>0){
                res.send({flag:1,message:"成功",data})
            }else{
                res.send({flag:-1,message:"失败"})
            }
        })
    },
    setUserInfo(req,res){
        var hasher=crypto.createHash("md5");
        hasher.update(req.body.newPwd);
        var hashmsg=hasher.digest('hex');
        userLoginDao.setUserInfoDao([hashmsg,req.body.phone]).then(data=>{
            if(data.affectedRows==1){
                res.send({flag:1,message:"成功"})
            }else{
                res.send({flag:-1,message:"失败"})
            }
        })
    },
    getCode(req,res){
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: req.body.phone,
            name: '家具项目',
            op: '注册验证',
            ttl: 10                     // 验证码有效时间为 10 分钟
        }).then(function(){
            res.send({flag:1,message:"成功"})
        }, function(err){
            res.send({flag:-1,message:"失败"})
        });
    },
    register(req,res){
        AV.Cloud.verifySmsCode(req.body.code, req.body.phone).then(function(){
            res.send({flag:1,message:"成功"})
        }, function(err){
            res.send({flag:-1,message:"失败"})
        });
    },
    addUser(req,res){
        var phone = req.body.phone;
        var username = req.body.username;
        var hasher=crypto.createHash("md5");
        hasher.update(req.body.pwd);
        var hashmsg=hasher.digest('hex');
        var arr = [username,hashmsg,phone];
        userLoginDao.addUserDao(arr).then(data=>{
            res.send({flag:1,message:"成功"})
        })
    }

};

module.exports = userLoginController;
