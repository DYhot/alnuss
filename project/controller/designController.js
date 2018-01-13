/**
 * Created by jcdn on 2017/11/20.
 */
'use strict'
const path=require("path");
const designModel=require(path.join(__dirname,"../dao/designDao.js"));
const designController= {
    //设计师查询
    queryDesign(res,resp){
        //let designid = res.body.designid;
        //console.log(designid);
        designModel.designDao("select * from t_designer",
            []).then(data=> {
                resp.send(data);
                console.log(data);
            }).catch((reason)=> {
                console.log(reason);
            })
    },
    //设计师案列查询
    queryDesigncase(res,resp){
        //let caseid = res.body.caseid;
        designModel.designcaseDao("select *,(select d_name from t_designer where t_designer.d_id=t_d_case.d_id) as d_name from t_d_case where 1=1",
            []).then(data=> {
                resp.send(data);
                console.log(data);
            }).catch((reason)=> {
                console.log(reason)
            })
    }
    };
module .exports=designController;