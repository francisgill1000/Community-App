(window.webpackJsonp=window.webpackJsonp||[]).push([[68,84],{1020:function(t,e,r){"use strict";r(12),r(14),r(13),r(6),r(17),r(11),r(18);var o=r(3),n=(r(993),r(26));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},935:function(t,e,r){"use strict";var o=r(40),n=r(135),l=r(68),c=r(83),d=r(122);o&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=l(this),e=c(t);return 0==e?void 0:t[e-1]},set:function(t){var e=l(this),r=c(e);return e[0==r?0:r-1]=t}}),n("lastItem"))},955:function(t,e,r){"use strict";r.r(e);var o=r(329),n=r(133),l=r(516),c=r(876),d=r(1020),v=r(515),m=(r(37),r(23)),_=(r(88),r(33),r(266),r(58),r(935),r(519),r(35),{props:["UserID","visitor_type"],data:function(){return{loading:!1,dialog:!1,payload:{},searchCard:!0,infoCard:!1,item:{},response:null,firstItem:{},lastItem:{},errors:[]}},created:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.search();case 2:case"end":return e.stop()}}),e)})))()},methods:{caps:function(t){if(t)return t.replace(/\b\w/g,(function(t){return t.toUpperCase()}))},close:function(){this.searchCard=!0,this.infoCard=!1,this.dialog=!1},search:function(){var t=this;console.log(this.UserID),this.loading=!0,this.response=null,this.$axios.get("get_logs_by_visitor_id",{params:{per_page:100,company_id:this.$auth.user.company_id,UserID:this.UserID,id:this.UserID,user_type:this.visitor_type}}).then((function(e){var data=e.data;if(!data)return t.response="No record found",void(t.loading=!1);t.response=null,t.searchCard=!1,t.infoCard=!0,t.item=data,t.loading=!1;var r=data.attendance_logs;t.firstItem=r[0],t.lastItem=r[r.length-1]})).catch((function(e){var r=e.response;t.response=null,t.searchCard=!1,t.infoCard=!0,t.data=[],t.loading=!1,console.log("error:",r)}))},checkout:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={UserID:t.UserID,LogTime:t.getCurrentDateTime(),DeviceID:"Manual",company_id:t.$auth.user.company_id,log_type:"out",visitor_id:t.item.id},t.loading=!0,t.$axios.post("generate_log",r).then((function(e){var data=e.data;t.loading=!1,data.status?(t.$emit("success","Checkout has been recorded"),t.dialog=!1):t.errors=data.errors})).catch((function(e){e.message;t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},getCurrentDateTime:function(){var t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),n=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(o," ").concat(n,":").concat(l)}}}),h=r(116),component=Object(h.a)(_,(function(){var t,e,r,m=this,_=m._self._c;return _(n.a,[_(c.a,[_(v.a,{attrs:{"no-gutters":""}},[_(l.a,{staticStyle:{"border-right":"1px solid #dddddd"},attrs:{cols:"4"}},[_("h3",[m._v(m._s(m.caps(null===(t=m.item)||void 0===t?void 0:t.visitor_type)))]),m._v(" "),_(v.a,{staticClass:"pa-0 ma-0"},[_(l.a,{attrs:{cols:"12"}},[_(v.a,{attrs:{"no-gutters":""}},[_(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[_(o.a,{attrs:{size:"100"}},[_("img",{staticStyle:{width:"100%"},attrs:{src:"/no-profile-image.jpg",alt:"Avatar"}})])],1),m._v(" "),_(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[_("div",{staticClass:"mt-1",staticStyle:{height:"15px","font-size":"12px"}},[m._v("\n                  "+m._s(m.item.full_name)+"\n                  ")]),m._v(" "),_("div",{staticStyle:{"font-size":"12px"}},[_("small",[m._v("\n                    "+m._s(m.item.phone_number)+"\n                    ")])])])],1)],1),m._v(" "),_(l.a,{attrs:{cols:"12"}},[_(d.a),m._v(" "),_(v.a,{staticStyle:{"font-size":"15px"},attrs:{"no-gutters":""}},[_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" First Name ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.first_name)+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Last Name ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.last_name)+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Emirates Id ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.id_number)+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Visitor Card Id ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.system_user_id)+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Email ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.email)+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Phone Number ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.phone_number)+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Purpose ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s((null===(e=m.item)||void 0===e||null===(r=e.purpose)||void 0===r?void 0:r.name)||"---")+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Gender ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.gender)+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Visit From ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.visit_from)+" "+m._s(m.item.time_in)+" ")])]),m._v(" "),_(l.a,{attrs:{cols:"6"}},[_("small",[m._v(" Visit To ")])]),m._v(" "),_(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[_("small",[m._v(" "+m._s(m.item.visit_to)+" "+m._s(m.item.time_out)+" ")])])],1)],1)],1)],1),m._v(" "),_(l.a,{attrs:{cols:"8"}},[_(d.a),m._v(" "),_(v.a,{staticClass:"px-3",attrs:{"no-gutters":""}},[_(l.a,{attrs:{cols:"12"}},[_("div",{staticClass:"mt-4"},[_("table",{staticStyle:{width:"100%"}},[_("tr",[_("td",{staticStyle:{"font-size":"12px"}},[_("small",[_("b",[m._v("#")])])]),m._v(" "),_("td",{staticStyle:{"font-size":"12px"}},[_("small",[_("b",[m._v("Date Time")])])]),m._v(" "),_("td",{staticStyle:{"font-size":"12px"}},[_("small",[_("b",[m._v("Tenant")])])]),m._v(" "),_("td",{staticStyle:{"font-size":"12px"}},[_("small",[_("b",[m._v("Flat")])])]),m._v(" "),_("td",{staticStyle:{"font-size":"12px"}},[_("small",[_("b",[m._v("Device")])])]),m._v(" "),_("td",{staticStyle:{"font-size":"12px"}},[_("small",[_("b",[m._v("In/Out")])])])]),m._v(" "),m._l(m.item.attendance_logs,(function(t,e){var r,o,n,l,c,d,v,h,f,x,y;return _("tr",{key:e},[_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(e+1))])]),m._v(" "),_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(t.LogTime))])]),m._v(" "),t.visitor?_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(null===(r=t.visitor.tanent)||void 0===r?void 0:r.full_name))]),_("br"),m._v(" "),_("small",[m._v(m._s(null===(o=t.visitor.tanent)||void 0===o?void 0:o.phone_number))])]):m._e(),m._v(" "),t.contractor?_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(null===(n=t.contractor.tanent)||void 0===n?void 0:n.full_name))]),_("br"),m._v(" "),_("small",[m._v(m._s(null===(l=t.contractor.tanent)||void 0===l?void 0:l.phone_number))])]):m._e(),m._v(" "),t.delivery?_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(null===(c=t.delivery.tanent)||void 0===c?void 0:c.full_name))]),_("br"),m._v(" "),_("small",[m._v(m._s(null===(d=t.delivery.tanent)||void 0===d?void 0:d.phone_number))])]):m._e(),m._v(" "),t.visitor?_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(null===(v=t.visitor.tanent)||void 0===v?void 0:v.room.room_number))]),_("br")]):t.contractor?_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(null===(h=t.contractor.tanent)||void 0===h?void 0:h.room.room_number))]),_("br")]):t.delivery?_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(null===(f=t.delivery.tanent)||void 0===f?void 0:f.room.room_number))]),_("br")]):m._e(),m._v(" "),_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(null!==(x=null==t||null===(y=t.device)||void 0===y?void 0:y.short_name)&&void 0!==x?x:"Manual"))])]),m._v(" "),_("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[_("small",[m._v(m._s(m.caps(null==t?void 0:t.log_type)))])])])}))],2)])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},981:function(t,e,r){"use strict";r.r(e);var o=r(114),n=r(133),l=r(516),c=r(876),d=r(350),v=r(147),m=r(515),_=r(214),h=(r(33),r(266),r(23)),f=(r(935),r(519),r(35),r(88),{props:["visitor_type"],components:{VisitorAttendanceLogsPopup:r(955).default},data:function(){return{loading:!1,dialog:!1,payload:{},UserID:null,searchCard:!0,infoCard:!1,item:{},response:null,firstItem:{},lastItem:{},errors:[]}},created:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1;case 1:case"end":return e.stop()}}),e)})))()},methods:{close:function(){this.searchCard=!0,this.infoCard=!1,this.dialog=!1},search:function(){var t=this;this.loading=!0,this.response=null,this.$axios.get("search_visitor_by_user_id",{params:{UserID:this.UserID}}).then((function(e){var data=e.data;if(!data)return t.response="No record found",void(t.loading=!1);t.response=null,t.searchCard=!1,t.infoCard=!0,t.item=data,t.loading=!1;var r=data.attendance_logs;t.firstItem=r[0],t.lastItem=r[r.length-1]})).catch((function(e){var r=e.response;t.response=null,t.searchCard=!1,t.infoCard=!0,t.data=[],t.loading=!1,console.log("error:",r)}))},checkout:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={UserID:t.UserID,LogTime:t.getCurrentDateTime(),DeviceID:"Manual",company_id:t.$auth.user.company_id,log_type:"out",mode:"Manual",visitor_id:t.item.id},t.loading=!0,t.$axios.post("generate_log",r).then(function(){var e=Object(h.a)(regeneratorRuntime.mark((function e(r){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(data=r.data,t.loading=!1,data.status){e.next=5;break}return t.errors=data.errors,e.abrupt("return");case 5:return e.next=7,t.render_report();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var r=e.message;console.log(r),t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},render_report:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={LogTime:t.getCurrentDateTime(),company_id:t.$auth.user.company_id,id:t.item.id,UserIds:[t.UserID]},t.loading=!0,t.$axios.post("/community_visitor_report",r).then((function(e){var data=e.data,r=e.status;if(t.loading=!1,200==r)return t.$emit("success","Checkout has been recorded"),void(t.dialog=!1);t.errors=data.errors})).catch((function(e){var r=e.message;console.log(r),t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},getCurrentDateTime:function(){var t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),n=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(o," ").concat(n,":").concat(l)}}}),x=f,y=r(116),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{persistent:"",width:"750"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[e("span",t._g(t._b({staticStyle:{cursor:"pointer"}},"span",n,!1),o),[e(v.a,{attrs:{color:"black"}},[t._v("mdi-magnify")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),t.searchCard?e(n.a,[e(c.a,[e(m.a,{attrs:{"no-gutters":""}},[e(l.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(v.a,{attrs:{color:"primary"},on:{click:t.close}},[t._v(" mdi-close ")])],1),t._v(" "),e(l.a,{staticClass:"my-1",attrs:{cols:"12"}},[e(_.a,{attrs:{label:"Search","hide-details":"",dense:"",outlined:""},model:{value:t.UserID,callback:function(e){t.UserID=e},expression:"UserID"}})],1),t._v(" "),t.response?e(l.a,{staticClass:"red--text",attrs:{cols:"12"}},[e("div",{staticClass:"my-1"},[t._v("\n            "+t._s(t.response)+"\n          ")])]):t._e(),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e(o.a,{staticClass:"mt-2",attrs:{loading:t.loading,color:"primary",block:""},on:{click:t.search}},[t._v("Search")])],1)],1)],1)],1):t._e(),t._v(" "),t.infoCard&&t.item&&t.item.id?e(n.a,[e(c.a,[e(m.a,{attrs:{"no-gutters":""}},[e(l.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(v.a,{attrs:{color:"primary"},on:{click:t.close}},[t._v(" mdi-close ")])],1),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e("VisitorAttendanceLogsPopup",{attrs:{UserID:t.item.id,visitor_type:t.visitor_type}}),t._v(" "),e(o.a,{staticClass:"mt-2",attrs:{loading:t.loading,color:"primary",block:""},on:{click:t.checkout}},[t._v("Checkout")])],1)],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},993:function(t,e,r){var content=r(994);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("951d1426",content,!0,{sourceMap:!1})},994:function(t,e,r){var o=r(21)((function(i){return i[1]}));o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),o.locals={},t.exports=o}}]);