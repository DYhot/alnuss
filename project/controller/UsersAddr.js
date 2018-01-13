/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const UserAddrDao=require(path.join(__dirname,"../dao/UsersAddrDao.js"))
const Collect={
    //查询
    getUserAddr(req,res)
    {
        //查询sql语句
        //传递key为 userid 用户id
        //请求类型为post
        //请求地址为/getAppointment
        let sql;
        sql="SELECT * FROM t_addr WHERE u_id=? and state=1"
        let {userid=""}=req.body
        let param=[userid]


        UserAddrDao.getUserAddr(sql,param).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    //修改
    updateUserAddr(req,res){
        let {addr_linkman="",addr_tel="",addr_prop="",addr_city="",addr_dist="",addr_detail="",addr_code="",addr_id=""}=req.body;
        let param=[addr_linkman,addr_tel,addr_prop,addr_city,addr_dist,addr_detail,addr_code,addr_id]
        let sql="UPDATE t_addr SET addr_linkman=?,addr_tel=?,addr_prop=?," +
            "addr_city=?,add_dist=?,addr_detail=?,addr_code=? WHERE addr_id=?"
        UserAddrDao.updateUserAddr(sql,param).then((data)=>{
            res.send("修改成功")
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    //增加
    addUserAddr(req,res)
    {
        let {addr_linkman="",addr_tel="",addr_prop="",addr_city="",addr_dist="",addr_detail="",addr_code="",userid=1}=req.body;
        let param=[addr_linkman,addr_tel,addr_prop,addr_city,addr_dist,addr_detail,addr_code,userid,1]
        let sql="insert into t_addr values(null,?,?,?,?,?,?,?,?,?)";
        UserAddrDao.addUserAddr(sql,param).then((data)=>{
            res.send(data)
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    //删除
    deleteUserAddr(req,res)
    {
     let {addr_id}=req.body;

     let sql="update t_addr set state=0 where addr_id=?";
    UserAddrDao.deleteUserAddr(sql,[addr_id]).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err.message)
    })

    }

}
module.exports=Collect