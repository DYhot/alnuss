
import Admin from '@/components/admin/a_admin'
import Admininfo from '@/components/admin/admininfo'
import Adminorder from '@/components/admin/adminorder'
import Adminaddr from '@/components/admin/adminaddr'
import Admincollect from '@/components/admin/admincollect'
import Adminconvention from '@/components/admin/adminconvention'
import Admindesign from '@/components/admin/admindesign'
export default [


  {
    path:'/admin',
    name:'Admin',
    component:Admin,
    meta:{
      isShow:true
    },
    children:[
      {
        path:'admininfo',
        name:'Admininfo',
        component:Admininfo,
        meta:{
          isShow:true
        },
      },
      {
        path:'adminorder',
        name:'Adminorder',
        component:Adminorder,
        meta:{
          isShow:true
        },
      },
      {
        path:'adminaddr',
        name:'Adminaddr',
        component:Adminaddr,
        meta:{
          isShow:true
        },
      },
      {
        path:'admincollect',
        name:'Admincollect',
        component:Admincollect,
        meta:{
          isShow:true
        },
      },
      {
        path:'adminconvention',
        name:'Adminconvention',
        component:Adminconvention,
        meta:{
          isShow:true
        },
      },
      {
        path:'admindesign',
        name:'Admindesign',
        component:Admindesign,
        meta:{
          isShow:true
        },
      },
    ]
  }
]
