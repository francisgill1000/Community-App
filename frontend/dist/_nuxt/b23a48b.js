(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1019:function(t,e,r){"use strict";r(12),r(14),r(13),r(6),r(17),r(11),r(18);var o=r(3),l=(r(993),r(26));function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=l.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},935:function(t,e,r){"use strict";var o=r(40),l=r(135),n=r(68),d=r(83),c=r(122);o&&(c(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=n(this),e=d(t);return 0==e?void 0:t[e-1]},set:function(t){var e=n(this),r=d(e);return e[0==r?0:r-1]=t}}),l("lastItem"))},940:function(t,e,r){"use strict";r.r(e);var o=r(329),l=r(133),n=r(516),d=r(876),c=r(1019),v=r(515),_=(r(37),r(23)),m=(r(88),r(33),r(266),r(58),r(935),r(519),r(35),{props:["UserID","visitor_type"],data:function(){return{loading:!1,dialog:!1,payload:{},searchCard:!0,infoCard:!1,item:{},response:null,firstItem:{},lastItem:{},errors:[]}},created:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.search();case 2:case"end":return e.stop()}}),e)})))()},methods:{caps:function(t){if(t)return t.replace(/\b\w/g,(function(t){return t.toUpperCase()}))},close:function(){this.searchCard=!0,this.infoCard=!1,this.dialog=!1},search:function(){var t=this;console.log(this.UserID),this.loading=!0,this.response=null,this.$axios.get("get_logs_by_visitor_id",{params:{per_page:100,company_id:this.$auth.user.company_id,UserID:this.UserID,id:this.UserID,user_type:this.visitor_type}}).then((function(e){var data=e.data;if(!data)return t.response="No record found",void(t.loading=!1);t.response=null,t.searchCard=!1,t.infoCard=!0,t.item=data,t.loading=!1;var r=data.attendance_logs;t.firstItem=r[0],t.lastItem=r[r.length-1]})).catch((function(e){var r=e.response;t.response=null,t.searchCard=!1,t.infoCard=!0,t.data=[],t.loading=!1,console.log("error:",r)}))},checkout:function(){var t=this;return Object(_.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={UserID:t.UserID,LogTime:t.getCurrentDateTime(),DeviceID:"Manual",company_id:t.$auth.user.company_id,log_type:"out",visitor_id:t.item.id},t.loading=!0,t.$axios.post("generate_log",r).then((function(e){var data=e.data;t.loading=!1,data.status?(t.$emit("success","Checkout has been recorded"),t.dialog=!1):t.errors=data.errors})).catch((function(e){e.message;t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},getCurrentDateTime:function(){var t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(o," ").concat(l,":").concat(n)}}}),h=r(116),component=Object(h.a)(m,(function(){var t,e,r,_=this,m=_._self._c;return m(l.a,[m(d.a,[m(v.a,{attrs:{"no-gutters":""}},[m(n.a,{staticStyle:{"border-right":"1px solid #dddddd"},attrs:{cols:"4"}},[m("h3",[_._v(_._s(_.caps(null===(t=_.item)||void 0===t?void 0:t.visitor_type)))]),_._v(" "),m(v.a,{staticClass:"pa-0 ma-0"},[m(n.a,{attrs:{cols:"12"}},[m(v.a,{attrs:{"no-gutters":""}},[m(n.a,{staticClass:"text-center",attrs:{cols:"12"}},[m(o.a,{attrs:{size:"100"}},[m("img",{staticStyle:{width:"100%"},attrs:{src:"/no-profile-image.jpg",alt:"Avatar"}})])],1),_._v(" "),m(n.a,{staticClass:"text-center",attrs:{cols:"12"}},[m("div",{staticClass:"mt-1",staticStyle:{height:"15px","font-size":"12px"}},[_._v("\n                  "+_._s(_.item.full_name)+"\n                  ")]),_._v(" "),m("div",{staticStyle:{"font-size":"12px"}},[m("small",[_._v("\n                    "+_._s(_.item.phone_number)+"\n                    ")])])])],1)],1),_._v(" "),m(n.a,{attrs:{cols:"12"}},[m(c.a),_._v(" "),m(v.a,{staticStyle:{"font-size":"15px"},attrs:{"no-gutters":""}},[m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" First Name ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.first_name)+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Last Name ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.last_name)+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Emirates Id ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.id_number)+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Visitor Card Id ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.system_user_id)+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Email ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.email)+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Phone Number ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.phone_number)+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Purpose ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s((null===(e=_.item)||void 0===e||null===(r=e.purpose)||void 0===r?void 0:r.name)||"---")+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Gender ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.gender)+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Visit From ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.visit_from)+" "+_._s(_.item.time_in)+" ")])]),_._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[_._v(" Visit To ")])]),_._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[_._v(" "+_._s(_.item.visit_to)+" "+_._s(_.item.time_out)+" ")])])],1)],1)],1)],1),_._v(" "),m(n.a,{attrs:{cols:"8"}},[m(c.a),_._v(" "),m(v.a,{staticClass:"px-3",attrs:{"no-gutters":""}},[m(n.a,{attrs:{cols:"12"}},[m("div",{staticClass:"mt-4"},[m("table",{staticStyle:{width:"100%"}},[m("tr",[m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[_._v("#")])])]),_._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[_._v("Date Time")])])]),_._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[_._v("Tenant")])])]),_._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[_._v("Flat")])])]),_._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[_._v("Device")])])]),_._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[_._v("In/Out")])])])]),_._v(" "),_._l(_.item.attendance_logs,(function(t,e){var r,o,l,n,d,c,v,h,f,x,y;return m("tr",{key:e},[m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(e+1))])]),_._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(t.LogTime))])]),_._v(" "),t.visitor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(null===(r=t.visitor.tanent)||void 0===r?void 0:r.full_name))]),m("br"),_._v(" "),m("small",[_._v(_._s(null===(o=t.visitor.tanent)||void 0===o?void 0:o.phone_number))])]):_._e(),_._v(" "),t.contractor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(null===(l=t.contractor.tanent)||void 0===l?void 0:l.full_name))]),m("br"),_._v(" "),m("small",[_._v(_._s(null===(n=t.contractor.tanent)||void 0===n?void 0:n.phone_number))])]):_._e(),_._v(" "),t.delivery?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(null===(d=t.delivery.tanent)||void 0===d?void 0:d.full_name))]),m("br"),_._v(" "),m("small",[_._v(_._s(null===(c=t.delivery.tanent)||void 0===c?void 0:c.phone_number))])]):_._e(),_._v(" "),t.visitor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(null===(v=t.visitor.tanent)||void 0===v?void 0:v.room.room_number))]),m("br")]):t.contractor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(null===(h=t.contractor.tanent)||void 0===h?void 0:h.room.room_number))]),m("br")]):t.delivery?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(null===(f=t.delivery.tanent)||void 0===f?void 0:f.room.room_number))]),m("br")]):_._e(),_._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(null!==(x=null==t||null===(y=t.device)||void 0===y?void 0:y.short_name)&&void 0!==x?x:"Manual"))])]),_._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[_._v(_._s(_.caps(null==t?void 0:t.log_type)))])])])}))],2)])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},993:function(t,e,r){var content=r(994);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("951d1426",content,!0,{sourceMap:!1})},994:function(t,e,r){var o=r(21)((function(i){return i[1]}));o.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin:0 -1px;max-height:100%;max-width:0;min-height:100%;vertical-align:text-bottom;width:0}.v-divider--vertical.v-divider--inset{margin-top:8px;max-height:calc(100% - 16px);min-height:0}",""]),o.locals={},t.exports=o}}]);