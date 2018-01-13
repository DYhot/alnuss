/**
 * Created by Mr.袁 on 2017/12/16.
 */
//创建人：张云峰
const dbpool = require('../config/dbconfig.js');
const loginModule = {
    userDao(arr){
        return new Promise((resolve,reject)=>{
            var sql = 'SELECT * FROM t_admin WHERE 1=1';
            if(arr.length>=1){
                sql += ' and a_tel=?'
            }
            if(arr.length==2){
                sql += ' and a_pwd=?'
            }
            dbpool.connect(sql,arr,(err,data)=>{
                resolve(data);
            })
        })
    },
    setUserInfoDao(arr){
        return new Promise((resolve,reject)=>{
            var sql = 'UPDATE t_admin SET a_pwd=? WHERE a_tel=?';
            dbpool.connect(sql,arr,(err,data)=>{
                resolve(data);
            })
        })
    },
    addUserDao(arr) {
        return new Promise((resolve,reject)=>{
            var sql = 'INSERT INTO t_admin VALUES (default,default,?,?,default,?,default,default)';
            dbpool.connect(sql,arr,(err,data)=>{
                /*resolve(data)*/
                if(err){
                    console.log(err)
                }else{
                    resolve(data)
                }
            })
        })
    }
};
module.exports=loginModule;
