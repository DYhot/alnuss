/**
 * Created by Mr.袁 on 2017/12/12.
 */
import login from '@/components/login/a_login';
import forgot from '@/components/login/forgot_pwd';
import regist from '@/components/login/a_regist';
export default [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta:{
      isShow:false
    }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: forgot,
    meta:{
      isShow:true
    }
  },
  {
    path: '/regist',
    name: 'regist',
    component: regist,
    meta:{
      isShow:false
    }
  }
]
