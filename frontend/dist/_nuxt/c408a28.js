(window.webpackJsonp=window.webpackJsonp||[]).push([[270,90],{1061:function(t,e,n){var content=n(1143);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("07aef0d5",content,!0,{sourceMap:!1})},1142:function(t,e,n){"use strict";n(1061)},1143:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".center-both[data-v-682bc78b]{align-items:center;display:flex;height:31vh;justify-content:center}",""]),r.locals={},t.exports=r},1195:function(t,e,n){"use strict";n.r(e);var r=n(114),o=n(133),c=n(147),l=n(349),d=n(96),h=n(856),v=n(852),f=n(23),m=(n(88),{data:function(){return{Model:"Device Status",dataLength:0,data:[],chartOptions:{title:{align:"center",margin:0},colors:["#23bdb8","#f48665"],series:[],chart:{toolbar:{show:!1},width:300,type:"pie"},labels:[],dataLabels:{enabled:!0,style:{fontSize:"10px"}},legend:{show:!0,fontSize:"10px"},responsive:[{breakpoint:480,options:{chart:{toolbar:{show:!1},width:250},legend:{position:"bottom"}}}]},loading:!0}},mounted:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this;this.loading=!0,this.$axios.get("devcieCountByStatus/".concat(this.$auth.user.company_id)).then(function(){var e=Object(f.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,t.loading=!1,e.next=4,data.total;case 4:return t.dataLength=e.sent,e.next=7,data.labels;case 7:return t.chartOptions.labels=e.sent,e.next=10,data.series;case 10:return t.chartOptions.series=e.sent,e.prev=11,e.next=14,new ApexCharts(document.querySelector("#DeviceStatusPieId"),t.chartOptions).render();case 14:e.next=18;break;case 16:e.prev=16,e.t0=e.catch(11);case 18:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t){return e.apply(this,arguments)}}())}}}),_=m,x=(n(1142),n(116)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"1"}},[e(d.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(h.b,[e("span",[t._v(" "+t._s(t.Model)+" ")])]),t._v(" "),e(l.a),t._v(" "),e(v.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/device",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),o),[e(c.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Reports")])])],1),t._v(" "),e("div",{staticClass:"center-both",staticStyle:{"min-height":"300px"}},[t.loading?e("ComonPreloader",{attrs:{icon:"pie-chart"}}):t.loading||t.dataLength?e("div",{attrs:{id:"DeviceStatusPieId"}}):e("div",[t._v("No record found")])],1)],1)}),[],!1,null,"682bc78b",null);e.default=component.exports;installComponents(component,{ComonPreloader:n(895).default})},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var r=n(96),o=n(1),c=Object(o.k)("v-toolbar__title"),l=Object(o.k)("v-toolbar__items");r.a},895:function(t,e,n){"use strict";n.r(e);var r=n(212),o={props:["icon"]},c=n(116),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);