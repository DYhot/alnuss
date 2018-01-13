/**
 * Created by Administrator on 2017/12/13.
 */
//state,mutations,actions,getters
//数组去重方法
Array.prototype.distinct = function (){
  var arr = this,
    i,
    j,
    len = arr.length;
  for(i = 0; i < len; i++){
    for(j = i + 1; j < len; j++){
      if(arr[i] == arr[j]){
        arr.splice(j,1);
        len--;
        j--;
      }
    }
  }
  return arr;
};

const state = {
  //商品数据
  //购物车数据
  colorArr:[],
  sizeArr:[],
  vueobj:{},
  data:[],

  selected:[]
}
const getters = {
  //对视图返回的数据 - 对视图提供的获取数据的方法
  //让视图拿到一个过滤数据 - computed方式缓存数据
  cartlist: state => state.data,
  colorlist: state => state.colorArr,
  sizelist: state => state.sizeArr,
  // shoplist: state => state.shop_list,
  selectedProducts: state => state.selected,
  totalPrice:(state,getters)=>{
    //ES6 遍历方式 map() forEach()
    let totalprice = 0;
    getters.selectedProducts.forEach(item =>{
      totalprice += item.sku_sell * item.goodsnumber
    })
    return totalprice
  },
  totalNum:(state,getters)=>{
    let totalnum = 0;
    getters.selectedProducts.forEach(item=>{
      totalnum += item.goodsnumber
    })
    return totalnum
  }
}
const actions = {
  //异步操作
  //添加到购物车 删除指定商品 清空购物车
  getData(ctx,obj){
    ctx.commit("searchdata",obj)
  },
  getAllColor(ctx,val){
    ctx.commit("getColor",val)
  },
  modifyColor(ctx,val){
    ctx.commit("modifyOneColor",val)
  },
  getAllSize(ctx,val){
    ctx.commit("getSize",val)
  },
  addToCart(ctx,product){
    // console.log(product);
    ctx.commit("add",product)
  },
  clearAllCart(ctx){
    ctx.commit("clearAll")
  },
  handleDelete(ctx,productdata){
    ctx.commit('del',productdata)
  },
  handleEdit(ctx,productdata){
    ctx.commit('collet',productdata)
  },
  selectproduct(ctx,val){
    ctx.commit('addtoArr',val)
  },
  bottomDelete(ctx){
    ctx.commit('delselected')
  },
  bottomCollect(ctx){
    ctx.commit('collectselected')
  },
  changeNumber(ctx,value){
    // console.log("woshi接受的参数",value);

    ctx.commit('changegoodsnum',value)
  }
}
const mutations = {
  //添加：购物车数据添加一条数据 - 修改state.购物车数据 push
  //删除指定商品: state.购物车数据.splice()
  //清空购物车: state.购物车数据 = []
  //拿到数据库数据
  searchdata(state,obj){
    state.vueobj=obj;
    obj.$axios.get('/api/getAlldata.do',{params:{"u_id":5}})
      .then(resp => {
        state.data = resp.data
        state.data.forEach((item,index)=>{
          // console.log("我是检查的数据id",item.g_p_id)
          if(item.g_p_id==1){
            // state.data[index].g_p_id="红色";
            state.data[index].selectedcolor="红色"
          }
          if(item.g_p_id==2){
            // state.data[index].g_p_id="橙色";
            state.data[index].selectedcolor="橙色"
          }
          if(item.g_p_id2==1){
            // state.data[index].g_p_id2="M";
            state.data[index].selectedsize="M"
          }
          if(item.g_p_id2==2){
            // state.data[index].g_p_id2="L";
            state.data[index].selectedsize="L"
          }
          state.data[index].colorValue=state.data[index].g_p_id;
          state.data[index].sizeValue=state.data[index].g_p_id2
          // console.log("value",state.data[index].colorValue)
          // console.log("我是检查的数据id",state.data[index].g_p_id)
          // console.log("我是检查的数据id",state.colorArr)

        })
      })
  },
  getColor(state,val){
    // console.log("我是接受的商品id",val)
    // state.vueobj=obj;
       var newArr=[];
        state.colorArr=[];
    state.vueobj.$axios.get('/api/getAllcolor.do',{params:{"sku_id":val,u_id:5}})
      .then(resp => {
        // console.log(resp.data)
        resp.data.forEach((item,index)=>{
          // console.log(item.g_p_id)
          newArr.push(item.g_p_id)
        })
        newArr.distinct()
        state.colorArr=[...newArr]
        // console.log("我是colorArr:",state.colorArr)
        state.colorArr.forEach((item,index)=>{
          // console.log("我是循环的item",item)
          if(item==1){
            state.colorArr[index]="红色";
          }
          if(item==2){
            state.colorArr[index]="橙色";
          }
        })
        // console.log("我是colorArr2:",state.colorArr)
      })
  },
  getSize(state,val){
    // console.log("我是接受的商品id",val)
    var newArr=[];
    state.sizeArr=[];
    state.vueobj.$axios.get('/api/getAllcolor.do',{params:{"sku_id":val,u_id:5}})
      .then(resp => {
        // console.log("我是数据库返回的data",resp.data)

        resp.data.forEach((item,index)=>{
          newArr.push(item.g_p_id2)
        })
        newArr.distinct()
        state.sizeArr=[...newArr]
        // console.log("我是sizeArr:",state.sizeArr)
        state.sizeArr.forEach((item,index)=>{
          // console.log("我是循环的item",item)
          if(item==1){
            state.sizeArr[index]="M";
          }
          if(item==2){
            state.sizeArr[index]="L";
          }
        })
        // console.log("我是colorArr2:",state.sizeArr)
      })
  },
  modifyOneColor(state,val){
    console.log("我是后台接收的val2222",val)
    state.vueobj.$axios.get('/api/modifyColor.do',{params:{u_id:5,"skuid":val.skuid,"colorindex":val.color,"sizeid":val.sizeid,"rowid":val.rowid,"goodid":val.goodid}})
      .then(resp => {

      })
  },
  clearAll(state){
    state.added = []
  },
  del(state,productdata){
    //map方法ES6 $.each
    state.data.map((item,index)=>{
      if(item === productdata.rowdata){
        state.data.splice(index,1)
      }
    })
  },
  collet(state,productdata){
    //map方法ES6 $.each
    state.data.map((item,index)=>{
      if(item === productdata.rowdata){
        state.data.splice(index,1)
      }
    })
  },
  addtoArr(state,val){
    state.selected=[];
    state.selected.push(...val)
  },
  changegoodsnum(state,value){
    if(value instanceof Array){
      state.data.forEach((item,index)=>{
        if(item.c_id==value[0].c_id){
          state.data[index].goodsnumber=value[0].goodsnumber
          state.vueobj.$axios.get('/api/modifyGoodsNumber.do',{params:{u_id:5,goodsnumber:value[0].goodsnumber,c_id:value[0].c_id}})

        }
      })
    }else{
      state.data.forEach((item,index)=>{
        if(item.c_id==value.c_id){
          state.data[index].goodsnumber=value.goodsnumber;
          state.vueobj.$axios.get('/api/modifyGoodsNumber.do',{params:{u_id:5,goodsnumber:value.goodsnumber,c_id:value.c_id}})

        }
      })
    }
  },
  delselected(state){
    for(var i=0;i<state.selected.length;i++){
      for(var j=0;j<state.data.length;j++){
        if(state.data[j]==state.selected[i]){
          state.data.splice(j,1);
          j--;
        }
      }
    }
  },
  collectselected(state){
    for(var i=0;i<state.selected.length;i++){
      for(var j=0;j<state.data.length;j++){
        if(state.data[j]==state.selected[i]){
          state.data.splice(j,1);
          j--;
        }
      }
    }
  }
}


export default {
  state,
  mutations,
  actions,
  getters
}
