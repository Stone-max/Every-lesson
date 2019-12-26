import axios from "axios";
export default function (methods,url,data,token){
    //使用一个promise 把接口数据返回
    new Promise(function(s,e){
        if(token){
            axios[methods](url,data,{header:{Authorization: "Bearer " + token}}).then((res)=>{
                s(res)
            }).then((res)=>{
                e(res)
            })
        }
    })
}