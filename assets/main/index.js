System.register("chunks:///_virtual/HelloWorld.ts",["./rollupPluginModLoBabelHelpers.js","cc","./web3.min.js","./web3.min.mjs_cjs=&original=.js"],(function(e){"use strict";var t,n,r,i,o,l,s,c,u,a,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized,o=e.asyncToGenerator},function(e){l=e.cclegacy,s=e._decorator,c=e.Button,u=e.Label,a=e.Component},function(e){p=e.default},null],execute:function(){var h,b,f,w,d,m,v;l._RF.push({},"71275DJi/VMEI9ZJn24f+xo","HelloWorld",void 0);var y=s.ccclass,g=s.property;window.ethereum=window.ethereum||{};e("HelloWorld",(h=y("HelloWorld"),b=g({type:c}),f=g({type:u}),h((m=t((d=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=e.call.apply(e,[this].concat(o))||this).web3=void 0,r(t,"btn",m,i(t)),r(t,"lbl",v,i(t)),t}n(t,e);var l=t.prototype;return l.start=function(){this.btn.node.on(c.EventType.CLICK,this.connect,this),this.lbl.string=""},l.connect=function(){var e=o(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.web3=new p,!window.ethereum){e.next=14;break}return e.prev=2,e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:t=e.sent,this.lbl.string=t[0],this.web3.setProvider(window.ethereum),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),this.lbl.string="",console.log(e.t0);case 14:case"end":return e.stop()}}),e,this,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),t}(a)).prototype,"btn",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=t(d.prototype,"lbl",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=d))||w));l._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./HelloWorld.ts","./RandomMovement.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/RandomMovement.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){"use strict";var t,n,e,r,c,i,s,a,l;return{setters:[function(o){t=o.inheritsLoose},function(o){n=o.cclegacy,e=o._decorator,r=o.Sprite,c=o.Color,i=o.Vec3,s=o.randomRange,a=o.random,l=o.Component}],execute:function(){var d;n._RF.push({},"55347iSzr9E0Y1OmKP6RD0m","RandomMovement",void 0);var m=e.ccclass;e.property,o("RandomMovement",m("RandomMovement")(d=function(o){function n(){for(var t,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(t=o.call.apply(o,[this].concat(e))||this).time=0,t.colorOne=void 0,t.colorSecond=void 0,t}t(n,o);var e=n.prototype;return e.start=function(){this.colorOne=this.getComponent(r).color.clone(),this.colorSecond=new c("#37E400")},e.update=function(o){this.time+=o,this.node.position=this.node.position.add(new i(s(-10,10)*o,s(-10,10)*o)),a()<.5?this.getComponent(r).color=this.colorSecond:this.getComponent(r).color=this.colorOne},n}(l))||d);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});