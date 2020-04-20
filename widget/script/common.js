//常用自定义变量
var AppDefine={
  debug:true,//调式开关,开发环境true,线上环境false,
  tabFooterUrlList:['home','find','showroom','broker','my'],//底部tab链接
  httpServe:'http://appapi.iyimaiche.com',//API地址域名
}
//常用公共方法
var AppFun={
  tabFooterNavChange:function(index){
    api.openFrame({
        name:AppDefine.tabFooterUrlList[index],
        url: AppDefine.tabFooterUrlList[index]+'.html',
        bounces:false,
    });
  }
}
//api调用接口url统一管理
var ApiUrl={
  GetClueOrder:AppDefine.httpServe+'/api/General/GetClueOrder',//线索排名
}
