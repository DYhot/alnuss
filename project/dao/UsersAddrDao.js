/**
 * Created by Administrator on 11/17/2017.
 */
/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const db=require(path.join(__dirname,"../config/dbconfig.js"))
const dao={
    getUserAddr(sql,param)
    {
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err)
                {
                    reject(err)
                }else{
                    resove(data)
                }
            })

        })},
    updateUserAddr(sql,param)
    {
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err)
                {
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })
    },
    addUserAddr(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err)
                {
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })
    },
    deleteUserAddr(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err)
                {
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })
    }

}
module.exports=dao