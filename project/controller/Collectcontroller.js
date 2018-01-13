/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const CollectDao=require(path.join(__dirname,"../dao/CollectDao"))
const Collect={
    getUserCollect(req,res)
    {
        //查询sql语句
        //传递key为 userid 用户id
        //请求类型为post
        //请求地址为/getAppointment
        let sql;
        let {userid="",prop=""}=req.body
        let param=[userid,prop]
        if(parseInt(prop)==1)
        {
            //收藏表和商品表
            sql="SELECT * FROM t_u_collection c,t_goods g WHERE g.g_id=c.u_col_id AND c.u_id=? AND col_prop=? and c.state=1"
        }else if(parseInt(prop)==2)
        {
            //收藏表和案列表
            sql="SELECT * FROM t_u_collection c,t_d_case d WHERE d.c_id=c.u_col_id AND c.u_id=? AND col_prop=? and c.state=1"
        }


        CollectDao.getUserCollect(sql,param).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    //取消收藏
    updateUserCollect(req,res){
        let {userid,col_id}=req.body;
        let param=[userid,col_id]
        let sql="UPDATE t_u_collection SET state=0 WHERE u_id=? AND col_id=?"
        CollectDao.updateUserCollect(sql,param).then((data)=>{
            res.send("修改成功")
        }).catch((err)=>{
            console.log(err.message)
        })
    }

}
module.exports=Collect