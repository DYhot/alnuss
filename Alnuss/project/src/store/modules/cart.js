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
  totalMoney:0
}
const getters = {
  //对视图返回的数据 - 对视图提供的获取数据的方法
  //让视图拿到一个过滤数据 - computed方式缓存数据
  totalPrice:state=>state.totalMoney
}
const actions = {
  settle(ctx,value){
    ctx.commit("settle",value)
  }
}
const mutations = {
  settle(state,value){
    state.totalMoney=value;
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
