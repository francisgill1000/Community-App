(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1019:function(t,e,r){"use strict";r(12),r(14),r(13),r(6),r(17),r(11),r(18);var n=r(3),o=(r(993),r(26));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},935:function(t,e,r){"use strict";var n=r(40),o=r(135),l=r(68),c=r(83),d=r(122);n&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=l(this),e=c(t);return 0==e?void 0:t[e-1]},set:function(t){var e=l(this),r=c(e);return e[0==r?0:r-1]=t}}),o("lastItem"))},968:function(t,e,r){"use strict";r.r(e);var n=r(329),o=r(133),l=r(516),c=r(876),d=r(1019),v=r(212),m=r(515),h=r(23),_=(r(88),r(33),r(266),r(58),r(935),r(519),r(35),{props:["visitor_type","UserID"],data:function(){return{loading:!1,dialog:!1,payload:{},searchCard:!0,infoCard:!1,item:{},response:null,firstItem:{},lastItem:{},errors:[]}},created:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.search();case 2:case"end":return e.stop()}}),e)})))()},methods:{caps:function(t){if(t)return t.replace(/\b\w/g,(function(t){return t.toUpperCase()}))},close:function(){this.searchCard=!0,this.infoCard=!1,this.dialog=!1},search:function(){var t=this;this.loading=!0,this.response=null,this.$axios.get("get_logs_by_tanent_id",{params:{per_page:100,company_id:this.$auth.user.company_id,id:this.UserID,UserID:this.UserID,user_type:this.visitor_type}}).then((function(e){var data=e.data;if(!data)return t.response="No record found",void(t.loading=!1);t.response=null,t.searchCard=!1,t.infoCard=!0,t.item=data,t.loading=!1;var r=data.attendance_logs;t.firstItem=r[0],t.lastItem=r[r.length-1]})).catch((function(e){var r=e.response;t.response=null,t.searchCard=!1,t.infoCard=!0,t.data=[],t.loading=!1,console.log("error:",r)}))},checkout:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={UserID:t.UserID,LogTime:t.getCurrentDateTime(),DeviceID:"Manual",company_id:t.$auth.user.company_id,log_type:"out",visitor_id:t.item.id},t.loading=!0,t.$axios.post("generate_log",r).then((function(e){var data=e.data;t.loading=!1,data.status?(t.$emit("success","Checkout has been recorded"),t.dialog=!1):t.errors=data.errors})).catch((function(e){e.message;t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},getCurrentDateTime:function(){var t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),o=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(n," ").concat(o,":").concat(l)}}}),f=r(116),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e(o.a,[e(c.a,[e(m.a,{attrs:{"no-gutters":""}},[e(l.a,{staticStyle:{"border-right":"1px solid #dddddd"},attrs:{cols:"4"}},[e(o.a,{attrs:{elevation:"0",outlined:""}},[e(c.a,[e("h3",[t._v(t._s(t.caps(t.item.member_type)))]),t._v(" "),e(m.a,[e(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[e(n.a,{staticStyle:{border:"1px solid #dddddd"},attrs:{size:"100"}},[t.item.profile_picture?e(v.a,{attrs:{src:t.item.profile_picture}}):e(v.a,{attrs:{src:"/no-profile-image.jpg"}})],1),t._v(" "),e("div",{staticClass:"mt-1",staticStyle:{"font-size":"14px",height:"10px"}},[t._v("\n                  "+t._s(t.item.member_type)+"\n                ")])],1),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e(m.a,{attrs:{"no-gutters":""}},[e(l.a,{attrs:{cols:"6"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("ID")])]),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("\n                      "+t._s(t.item.system_user_id)+"\n                    ")])]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("Full Name")])]),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("\n                      "+t._s(t.item.full_name)+"\n                    ")])]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("Phone Number")])]),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("\n                      "+t._s(t.item.phone_number)+"\n                    ")])]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("Age")])]),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("\n                      "+t._s(t.item.age)+" years old\n                    ")])]),t._v(" "),e(l.a,{attrs:{cols:"4"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("Nationality")])]),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"8"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("\n                      "+t._s(t.item.nationality)+"\n                    ")])]),t._v(" "),e(l.a,{attrs:{cols:"3"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("Gender")])]),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"9"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v(" "+t._s(t.item.gender)+" ")])]),t._v(" "),e(l.a,{attrs:{cols:"3"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("RFID")])]),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"9"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v(" "+t._s(t.item.rfid)+" ")])]),t._v(" "),e(l.a,{attrs:{cols:"3"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v("Pin")])]),t._v(" "),e(l.a,{staticClass:"text-right",attrs:{cols:"9"}},[e("small",{staticStyle:{"font-size":"11px"}},[t._v(" "+t._s(t.item.pin)+" ")])])],1)],1)],1)],1)],1)],1),t._v(" "),e(l.a,{attrs:{cols:"8"}},[e(d.a),t._v(" "),e(m.a,{staticClass:"px-3",attrs:{"no-gutters":""}},[e(l.a,{attrs:{cols:"12"}},[e("div",{staticClass:"mt-4"},[e("table",{staticStyle:{width:"100%"}},[e("tr",[e("td",{staticStyle:{"font-size":"12px"}},[e("small",[e("b",[t._v("#")])])]),t._v(" "),e("td",{staticStyle:{"font-size":"12px"}},[e("small",[e("b",[t._v("Date Time")])])]),t._v(" "),e("td",{staticStyle:{"font-size":"12px"}},[e("small",[e("b",[t._v("Device")])])]),t._v(" "),e("td",{staticStyle:{"font-size":"12px"}},[e("small",[e("b",[t._v("In/Out")])])])]),t._v(" "),t._l(t.item.attendance_logs,(function(r,n){var o,l;return e("tr",{key:n},[e("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[e("small",[t._v(t._s(n+1))])]),t._v(" "),e("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[e("small",[t._v(t._s(r.LogTime))])]),t._v(" "),e("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[e("small",[t._v(t._s(null!==(o=null==r||null===(l=r.device)||void 0===l?void 0:l.short_name)&&void 0!==o?o:"Manual"))])]),t._v(" "),e("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[e("small",[t._v(t._s(t.caps(null==r?void 0:r.log_type)))])])])}))],2)])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},993:function(t,e,r){var content=r(994);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("951d1426",content,!0,{sourceMap:!1})},994:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),n.locals={},t.exports=n}}]);