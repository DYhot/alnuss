/**
 * Created by Administrator on 11/17/2017.
 */
const path=require("path")
const cartModel=require(path.join(__dirname,"../dao/cartDao.js"))
const cartController={
    getAllData(req,resp){
        let everyPageCount=Number(req.query.everyPageCount)
        let currentPage=Number(req.query.currentPage)
        let begin=(currentPage-1)*everyPageCount
        console.log("每页数量",req.query.everyPageCount)
        console.log("当前页",req.query.currentPage)
        console.log(typeof everyPageCount)
        cartModel.getcartData("select * from t_cart as a left join " +
            "t_g_sku as b on a.sku_id=b.sku_id  left join t_goods as c " +
            "on b.g_id=c.g_id where u_id= ? and a.state=1 order by a.createtime desc limit ?,?",
            [req.query.u_id,begin,everyPageCount]).then(data=> {
                console.log("我是加载的数据",data)
            resp.send(data);
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    modifyNumber(req,resp){
        cartModel.modifyData("update t_cart  set goodsnumber=? where u_id= ? and c_id=? and state=1",
            [req.query.goodsnumber,req.query.u_id,req.query.c_id]).then(data=> {
            resp.send(data);
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    getAllcolor(req,resp){
        cartModel.getAllcolorData("select * from  t_g_prop  where g_id =(select b.g_id from t_cart as a left join " +
            "t_g_sku as b on a.sku_id=b.sku_id  where u_id= ? and b.sku_id=? and a.c_id=? and a.state=1)",
            [req.query.u_id,req.query.sku_id,req.query.c_id]).then(data=> {
                console.log("我是颜色data",data)
            resp.send(data);
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    modifyColor(req,resp){
        cartModel.modifyColorData("update t_cart set sku_id=(select sku_id from t_g_sku where g_p_id=? and g_p_id2=? and g_id=? )" +
            " where u_id=? and c_id=? and state=1" ,
            [req.query.colorid,req.query.sizeid,req.query.goodid,req.query.u_id,req.query.rowid]).then(data=> {
            resp.send(data);
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    modifySize(req,resp){
        cartModel.modifySizeData("update t_cart set sku_id=(select sku_id from t_g_sku where g_p_id=? and g_p_id2=? and g_id=? )" +
            " where u_id=? and c_id=? and state=1" ,
            [req.query.colorid,req.query.sizeid,req.query.goodid,req.query.u_id,req.query.rowid]).then(data=> {
            resp.send(data);
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    getLike(req,resp){
        cartModel.getLikeData("select *from t_goods as a left join t_g_sku as b on a.g_id=b.g_id where a.g_id>6 group by a.g_id" ,
            []).then(data=> {
            resp.send(data);
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    getOne(req,resp){
        cartModel.getOneData("select * from t_cart where sku_id=? and u_id=? and state=1" ,
            [req.query.sku_id,req.query.u_id]).then(data=> {
                let flagdata=[];
                flagdata.push(data)
            console.log("我是flagdata",flagdata)
                resp.send(flagdata)
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    addCart(req,resp){
        console.log("我是接受的商品id",req.query.sku_id)
        let date=new Date();
        let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        let time=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+hour+":"+minute+":"+second;
        cartModel.addCartData("insert into t_cart (c_id,u_id,sku_id,c_qua,createtime,state,goodsnumber) " +
            "values (?,?,?,?,?,?,?)" ,
            [null,req.query.u_id,req.query.sku_id,2,time,1,1]).then(data=> {
            let flagdata=[];
            flagdata.push(data)
            resp.send(flagdata)
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    addNumber(req,resp){
        console.log("我是接受的商品id",req.query.sku_id)
        let date=new Date();
        let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        let time=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+hour+":"+minute+":"+second;
        cartModel.addNumberData("update t_cart set goodsnumber= goodsnumber+1 , createtime=? where u_id=? and sku_id=? and state=1" ,
            [time,req.query.u_id,req.query.sku_id]).then(data=> {
            let flagdata=[];
            flagdata.push(data)
            resp.send(flagdata)
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    getPageCount(req,resp){
        cartModel.getPageCountData("select count(*) as count from t_cart where state=1" ,
            []).then(data=> {
            resp.send(data)
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    deleteOne(req,resp){
        cartModel.deleteOneData("update t_cart set state=0 where c_id=? and u_id=?" ,
            [req.query.c_id,req.query.u_id]).then(data=> {
            let flagdata=[];
            flagdata.push(data)
            resp.send(flagdata)
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    deleteMultiple(req,resp){
        for(var i=0;i<req.query.idArr.length;i++){
            cartModel.deleteMultipleData("update t_cart set state=0 where c_id=? and u_id=?" ,
                [req.query.idArr[i],req.query.u_id]).then(data=> {
                // resp.send(data)
            }).catch((reason)=> {
                console.log(reason);
            })
        }
    },
    getColletOne(req,resp){
        cartModel.getColletOneData("select * from t_u_collection  where u_col_id=? and u_id=?" ,
            [req.query.g_id,req.query.u_id]).then(data=> {
                let flagdata=[];
                flagdata.push(data)
                resp.send(flagdata)
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    colletionOne(req,resp){
        let date=new Date();
        let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        let time=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+hour+":"+minute+":"+second;
        cartModel.colletionOneData("insert into t_u_collection (col_id,u_id,col_prop,u_col_id,createtime) values (?,?,?,?,?)" ,
            [null,req.query.u_id,req.query.col_prop,req.query.g_id,time]).then(data=> {
            if(data==1){
                cartModel.deleteOneData("update t_cart set state=0 where c_id=? and u_id=?" ,
                    [req.query.c_id,req.query.u_id]).then(data=> {
                    let flagdata=[];
                    flagdata.push(data)
                    resp.send(flagdata)
                }).catch((reason)=> {
                    console.log(reason);
                })
            }
        }).catch((reason)=> {
            console.log(reason);
        })

    },
    collectMultiple(req,resp){
        // console.log("我是后台接受的数据gidArr",req.query.gidArr)
        // console.log("我是后台接受的数据cidArr",req.query.cidArr)
        let j=0,mark=0;
        let _this=this;
        let gidArr=req.query.gidArr;
        let cidArr=req.query.cidArr;
        let date=new Date();
        let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        let time=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+hour+":"+minute+":"+second;
        for(var i=0;i<gidArr.length;i++) {
            _this.j=i;
            cartModel.getColletOneData("select * from t_u_collection  where u_col_id=? and u_id=?" ,
                [gidArr[i],req.query.u_id]).then(data=> {
                console.log("我是收藏后返回的gidArr", gidArr[_this.j])
                console.log("我是收藏后返回的i", _this.j)
                    if(data==0){
                        cartModel.colletionOneData("insert into t_u_collection (col_id,u_id,col_prop,u_col_id,createtime) values (?,?,?,?,?)",
                            [null, req.query.u_id, req.query.col_prop, gidArr[_this.j],time]).then(data => {
                            console.log("我是收藏后返回的flag", data)
                            if (data == 1) {
                                cartModel.deleteOneData("update t_cart set state=0 where c_id=? and u_id=?",
                                    [cidArr[_this.j], req.query.u_id]).then(data => {
                                    let flagdata=[];
                                    flagdata.push(data)
                                    resp.send(flagdata)
                                }).catch((reason) => {
                                    console.log(reason);
                                })
                            }
                        }).catch((reason) => {
                            console.log(reason);
                        })
                    }
            }).catch((reason)=> {
                console.log(reason);
            })
        }
    },
    addOrderAdress(req,resp){
        console.log("我是最新的请求",req.query)
       let name=req.query.name;
       let tele=req.query.tele;
       let prop=req.query.city;
       let city=req.query.erae;
       let dist=req.query.minerae;
       let detail=req.query.detailadress;
       let code=req.query.youbian;
       let uid=req.query.u_id;
       console.log(name)
        cartModel.addOrderAdressData("insert into t_addr (addr_id,addr_linkman,addr_tel,addr_prop,addr_city,add_dist,addr_detail,addr_code,u_id,state) " +
            "values (?,?,?,?,?,?,?,?,?,?)" ,
            [null,name,tele,prop,city,dist,detail,code,uid,1]).then(data=> {
            let flagdata=[];
            flagdata.push(data)
            console.log("地址添加成功",flagdata)
            resp.send(flagdata)
        }).catch((reason)=> {
            console.log(reason);
        })
    },
    getAlladress(req,resp){
        cartModel.getAlladressData("select * from  t_addr where u_id=?" ,
            [req.query.u_id]).then(data=> {
                console.log(data)
            resp.send(data)
        }).catch((reason)=> {
            console.log(reason);
        })
    }


}
module.exports=cartController