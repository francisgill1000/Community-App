(window.webpackJsonp=window.webpackJsonp||[]).push([[154,90],{1020:function(t,e,r){"use strict";r(12),r(14),r(13),r(6),r(17),r(11),r(18);var n=r(3),o=(r(993),r(26));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},895:function(t,e,r){"use strict";r.r(e);var n=r(212),o={props:["icon"]},l=r(116),component=Object(l.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(n.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports},970:function(t,e,r){"use strict";r.r(e);var n=r(329),o=r(516),l=r(1020),d=r(515),c=(r(37),r(56),r(31)),m=r(23),v=(r(33),r(58),r(519),r(6),r(72),r(35),r(80),r(28),r(88),{props:["item"],data:function(){return{logs_data:null,loading:!1,log_endpoint:"attendance_logs",log_headers:[{text:"#",align:"left",sortable:!1,key:"id",value:"id",width:"10px"},{text:"DateTime",align:"left",sortable:!1,key:"date_range",value:"LogTime",fieldType:"date_range_picker"},{text:"Device",align:"left",sortable:!0,key:"device",value:"device",filterable:!0,filterSpecial:!0}],dialog:!1,UserID:null,profile_pictrue:"no-profile-image.jpg",company_id:0,employee_stats:[],todayAttendance:null,remainingTime:"00:00"}},created:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.company_id=t.$auth.user.company_id,e.next=3,t.getEmployeeStats();case 3:return e.next=5,t.getTodayAttendance();case 5:return e.next=7,t.getLogs();case 7:case"end":return e.stop()}}),e)})))()},methods:{caps:function(t){if(t)return t.replace(/\b\w/g,(function(t){return t.toUpperCase()}))},getDate:function(){var t=new Date,e=t.getFullYear(),r=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(n)},getLogs:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get(t.log_endpoint,{params:{per_page:10,company_id:t.company_id,UserID:t.item.employee.system_user_id,from_date:t.getDate(),to_date:t.getDate()}}).then((function(e){var data=e.data;t.logs_data=data.data}));case 1:case"end":return e.stop()}}),e)})))()},getTodayAttendance:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,t.$axios.get("report",{params:{company_id:t.company_id,employee_id:t.item.employee.system_user_id,from_date:t.getFormattedDate(),to_date:t.getFormattedDate()}}).then((function(e){var data=e.data;if(t.loading=!1,!data.data.length)return t.getRemainingTime("00:00","00:00"),void(t.todayAttendance={total_hrs:"00:00",ot:"00:00"});var r=data.data[0],n=r.total_hrs,o=r.ot,l=r.shift;if(!l)return t.getRemainingTime("00:00","00:00"),void(t.todayAttendance={total_hrs:"00:00",ot:"00:00"});t.todayAttendance={total_hrs:t.timeHandler(n),ot:t.timeHandler(o)},t.getRemainingTime(t.timeHandler(n),t.timeHandler(l.working_hours))}));case 2:case"end":return e.stop()}}),e)})))()},timeHandler:function(t){return"---"===t?"00:00":t},getEmployeeStats:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get("employee-statistics",{params:{company_id:t.company_id,employee_id:t.item.employee.system_user_id}}).then((function(e){var data=e.data;t.employee_stats=data}));case 1:case"end":return e.stop()}}),e)})))()},getFormattedDate:function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat(String(t.getMonth()+1).padStart(2,"0"),"-").concat(String(t.getDate()).padStart(2,"0"))},getRemainingTime:function(t,e){var r=t.split(":").map(Number),n=Object(c.a)(r,2),o=n[0],l=n[1],d=e.split(":").map(Number),m=Object(c.a)(d,2),v=60*o+l-(60*m[0]+m[1]);if(v<0){var _=Math.abs(Math.ceil(v/60)),f=Math.abs(v%60);this.remainingTime="".concat(String(_).padStart(2,"0"),":").concat(String(f).padStart(2,"0"))}}}}),_=r(116),component=Object(_.a)(v,(function(){var t,e,r,c,m,v,_,f=this,h=f._self._c;return f.item&&f.item.id?h(d.a,{attrs:{"no-gutters":""}},[h(o.a,{staticStyle:{"border-right":"1px solid #dddddd"},attrs:{cols:"4"}},[h(l.a),f._v(" "),h(d.a,{staticClass:"pa-0 ma-0"},[h(o.a,{attrs:{cols:"12"}},[h("h3",[f._v("Employee")]),f._v(" "),h(d.a,{attrs:{"no-gutters":""}},[h(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[f._v("\n            "+f._s(f.item.employee.profile_pictrue)+"\n            "),h(n.a,{attrs:{size:"100"}},[h("img",{staticStyle:{width:"100%"},attrs:{src:f.item.employee&&f.item.employee.profile_picture?f.item.employee.profile_picture:"/no-profile-image.jpg",alt:"Avatar"}})])],1),f._v(" "),h(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[h("div",{staticClass:"mt-1",staticStyle:{height:"15px","font-size":"12px"}},[f._v("\n              "+f._s(null!==(t=f.item.employee.first_name)&&void 0!==t?t:"---")+"\n              "+f._s(null!==(e=f.item.employee.last_name)&&void 0!==e?e:"---")+"\n            ")]),f._v(" "),h("div",{staticStyle:{height:"15px","font-size":"12px"}},[h("small",[f._v("\n                "+f._s(null!==(r=null===(c=f.item)||void 0===c||null===(m=c.employee)||void 0===m||null===(v=m.designation)||void 0===v?void 0:v.name)&&void 0!==r?r:"---")+"\n              ")])]),f._v(" "),h("div",{staticStyle:{"font-size":"12px"}},[h("small",[f._v("\n                "+f._s(null!==(_=f.item.employee.phone_number)&&void 0!==_?_:"---")+"\n              ")])])])],1)],1),f._v(" "),h(o.a,{attrs:{cols:"12"}},[h(l.a),f._v(" "),f._l(f.employee_stats.slice(0,6),(function(t,e){return h(d.a,{key:e,staticStyle:{"font-size":"15px",height:"20px"},attrs:{"no-gutters":""}},[h(o.a,{attrs:{cols:"6"}},[h("small",[f._v(" "+f._s(t.title))])]),f._v(" "),h(o.a,{staticClass:"text-right",attrs:{cols:"6"}},[h("small",[f._v(" "+f._s(t.value))])])],1)}))],2)],1)],1),f._v(" "),h(o.a,{attrs:{cols:"8"}},[h(l.a),f._v(" "),h(d.a,{staticClass:"px-3",attrs:{"no-gutters":""}},[h(o.a,{attrs:{cols:"12"}},[f.loading?h("ComonPreloader",{attrs:{icon:"face-scan"}}):h("table",{staticClass:"mt-4",staticStyle:{width:"100%"}},[h("tr",[h("td",{staticStyle:{"font-size":"12px"}},[h("small",{},[h("b",[f._v("#")])])]),f._v(" "),h("td",{staticStyle:{"font-size":"12px"}},[h("small",{},[h("b",[f._v("Date Time")])])]),f._v(" "),h("td",{staticStyle:{"font-size":"12px"}},[h("small",[h("b",[f._v("Device")])])]),f._v(" "),h("td",{staticStyle:{"font-size":"12px"}},[h("small",[h("b",[f._v("In/Out")])])])]),f._v(" "),f._l(f.logs_data,(function(t,e){var r;return h("tr",{key:t.id},[h("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[h("small",[f._v(f._s(e+1))])]),f._v(" "),h("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[h("small",[f._v(f._s(t.date)+" "+f._s(t.time))])]),f._v(" "),h("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[h("small",[f._v(f._s(t.device?t.device.name:"---"))])]),f._v(" "),h("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[h("small",[f._v(f._s(f.caps(null===(r=f.log)||void 0===r?void 0:r.log_type)))])])])}))],2)],1)],1)],1)],1):f._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ComonPreloader:r(895).default})},993:function(t,e,r){var content=r(994);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("951d1426",content,!0,{sourceMap:!1})},994:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n}}]);