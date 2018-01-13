/**
 * Created by Administrator on 11/17/2017.
 */
/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const db=require(path.join(__dirname,"../config/dbconfig.js"))
const dao={
getOderdetail(id)
{
    console.log("id为     "+id)
    return new Promise((resolve,reject)=>{
        db.connect("SELECT * FROM t_order o,t_o_goods og,t_addr a,t_g_sku s WHERE o.u_id=? AND o.o_id=og.o_id AND a.addr_id=o.addr_id AND og.sku_id=s.sku_id ORDER BY og.o_id,og.g_id",[id],(err,data)=>{
            if(err)
            {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })

},
getOvevaluate(id)
{
    return new Promise((resove,reject)=>{
        db.connect("select * from t_o_evaluate where u_id=1 ORDER BY o_id,g_id",[id],(err,data)=>{
            if(err)
            {
                reject(err)
            }else{
                resove(data)
            }
        })
    })

},
updateoderstate(id)
{
    return new Promise((resove,reject)=>{
        db.connect("update t_order set state=0 where o_id=?",[id],(err,data)=>{
            if(err)
            {
                reject(err)
            }else{
                resove(data)
            }
        })
    })
},
 updatevevalstate(id)
    {
        return new Promise((resove,reject)=>{
            db.connect("update t_o_evaluate set state=0 where o_g_id=?",[id],(err,data)=>{
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