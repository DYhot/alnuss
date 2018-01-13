/**
 * Created by Administrator on 11/17/2017.
 */
/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const db=require(path.join(__dirname,"../config/dbconfig.js"))
const dao={
    getUserCollect(sql,param)
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
    updateUserCollect(sql,param)
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
    }
}
module.exports=dao