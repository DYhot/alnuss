/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const AppointDao=require(path.join(__dirname,"../dao/AppointDao"))
const appoint={
    getUserAppoint(req,res)
    {
        //查询sql语句
        //传递key为 userid 用户id
        //请求类型为post
        //请求地址为/getAppointment
        let sql="SELECT *,(SELECT CONCAT(addr_prop,addr_city,add_dist,addr_detail) FROM t_addr a WHERE a.addr_id=t.addr_id) AS addr,"
        +"(SELECT d_name FROM t_designer WHERE d_id=t.d_id) AS d_name,CONCAT(temp_prop,temp_city,temp_dist,temp_detail) AS tempaddr FROM t_appointment t where state=1"
        let {userid=""}=req.body
        let param=[]
        if(userid!="")
        {
            sql+=" and  u_id=?"
            param.push(userid)
        }
        AppointDao.getAppoint(sql,param).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    updateAppointCancel(req,res){
        let {userid,appid}=req.body;
        let param=[userid,appid]
        let sql="UPDATE t_appointment SET app_status=2 WHERE u_id=? AND app_id=?"
        AppointDao.updatetoCancel(sql,param).then((data)=>{
            res.send("修改成功")
        }).catch((err)=>{
            console.log(err.message)
        })
    }




}
module.exports=appoint