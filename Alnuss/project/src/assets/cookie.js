/**
 * Created by Mr.袁 on 2017/12/14.
 */
/*设置cookie*/
export function setCookie(c_name,value,time) {
   var date=new Date();
   date.setSeconds(date.getSeconds()+time);
   document.cookie=c_name+"="+escape(value)+";times="+date.toUTCString();
}
/*获取cookie*/
export function getCookie(c_name) {
   if(document.cookie.length>0){
     let c_start=document.cookie.indexOf(c_name+"=");
     if(c_start!=-1){
       c_start=c_start+c_name.length+1;
       let c_end=document.cookie.indexOf(";",c_start);
       if(c_end==-1){
         c_end=document.cookie.length;
         return unescape(document.cookie.substring(c_start,c_end))
       }
     }
   }
}
/*删除cookie*/
export function delCookie(c_name) {
  setCookie(c_name,"",-1)
}
