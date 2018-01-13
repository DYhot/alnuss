/**
 * Created by Administrator on 11/17/2017.
 */
/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const db=require(path.join(__dirname,"../config/dbconfig.js"))
const cartModel={
    getcartData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })},
    modifyData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove("修改成功")
                }
            })
        })},
    getAllcolorData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })},
    modifyColorData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })},
    modifySizeData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })},
    getLikeData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })},
    getOneData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    if(data.length==0){
                        resove(flag=0)
                    }else{
                        resove(flag=1)
                    }
                }
            })
        })},
    addCartData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    if(data.length==0){
                        resove(flag=0)
                    }else{
                        resove(flag=1)
                    }
                }
            })
        })},
    addNumberData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    console.log("增加数量成功")
                    if(data.length==0){
                        resove(flag=0)
                    }else{
                        resove(flag=1)
                    }
                }
            })
        })},
    getPageCountData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })},
    deleteOneData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(flag=1)
                }
            })
        })},
    deleteMultipleData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })},
    getColletOneData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    if(data.length==0){
                        resove(flag=0)
                    }else{
                        resove(flag=1)
                    }
                }
            })
        })},
    colletionOneData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    let flag=1;
                    resove(flag)
                }
            })
        })},
    collectMultipleData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    let flag=1;
                    resove(flag)
                }
            })
        })},
    addOrderAdressData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    if(data.length==0){
                        resove(flag=0)
                    }else{
                        resove(flag=1)
                    }
                }
            })
        })},
    getAlladressData(sql,param){
        return new Promise((resove,reject)=>{
            db.connect(sql,param,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resove(data)
                }
            })
        })}
}
module.exports=cartModel