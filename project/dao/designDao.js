/**
 * Created by jcdn on 2017/11/20.
 */
const path=require("path");
const dbpool=require(path.join(__dirname,"../config/dbconfig.js"));

const designModel= {
    //设计师查询
    designDao(sql, params){
        return new Promise((resolve, reject)=> {
            dbpool.connect(sql, params, (err, data)=> {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    },
    //设计师案列查询
    designcaseDao(sql, params){
        return new Promise((resolve, reject)=> {
            dbpool.connect(sql, params, (err, data)=> {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    },

}
module .exports=designModel;