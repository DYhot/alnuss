import dingzhi from '../../src/components/quwudignzhi/dingzhi.vue'
import anliedetail from '../../src/components/quwudignzhi/anliedetail.vue'


export default [
  {
    path: '/dingzhi',
    name: 'dingzhi',
    component: dingzhi,
    meta:{
      isShow:true
    }
  },
  {
    path: '/anliedetail',
    name: 'anliedetail',
    component: anliedetail,
    meta:{
      isShow:true
    }
  }
]
