let e=require('events');class twApi extends e{constructor(a,b){super();let c='https://gift.truemoney.com/campaign/';let d=a.replace(c+'?v=',"");require('request').post({url:c+'vouchers/'+d+'/redeem',json:true,body:({"mobile":b})},(e,r,d)=>{this.emit('msg',d)})}}module.exports=twApi
