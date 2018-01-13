/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const oderDao=require(path.join(__dirname,"../dao/oderDao.js"))
const Controoler={
    getOderdetail(req,res)
    {
        let {id}=req.body;
        let shuju={}
        oderDao.getOderdetail(id).then((data)=>{
            shuju.orderdata=data;
            let vevaluate={}//存储评论
            oderDao.getOvevaluate(id).then((data)=>{
                for(var i=0;i<data.length;i++)
                { if( vevaluate[""+data[i].o_id+data[i].g_id]==undefined)
               {
                   vevaluate[""+data[i].o_id+data[i].g_id]=[];//订单商品的评论没有则创建数组
               }
                    vevaluate[""+data[i].o_id+data[i].g_id].push(data[i])
                    if(i==data.length-1)

                    {
                        shuju.vevaluate=vevaluate;
                        res.send(shuju)
                    }

                }



                }


            )

        })
    },
    updateoderstate(req,res)
    {
        let {id}=req.body;
        oderDao.updateoderstate(id).then((data)=>{
            res.send(data)
        })
    },
    updatevevalstate(req,res)
    { let {id}=req.body;

        oderDao.updatevevalstate(id).then((data)=>{
            res.send(data)
        })
    }

}
module.exports=Controoler