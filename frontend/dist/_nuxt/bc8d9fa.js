(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1035:function(e,t,r){var content=r(1097);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("2b932e5c",content,!0,{sourceMap:!1})},1096:function(e,t,r){"use strict";r(1035)},1097:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,"table[data-v-1482edec]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-1482edec],th[data-v-1482edec]{padding:8px;text-align:left}tr[data-v-1482edec]:nth-child(2n){background-color:#fbfdff}",""]),n.locals={},e.exports=n},1117:function(e,t,r){"use strict";r.r(t);var n=r(114),o=r(516),l=r(876),c=r(1572),m=r(863),d=r(515),f=r(873),_=r(214),v=(r(12),r(14),r(13),r(17),r(11),r(18),r(3));r(6),r(72),r(33),r(58),r(55);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(v.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={props:["employeeId"],data:function(){return{issueDateMenuOpen:!1,expiryDateMenuOpen:!1,dobDateMenuOpen:!1,emirate_info:!1,errors:[],snackbar:!1,response:"",emirateItems:{}}},created:function(){this.getInfo(this.employeeId)},methods:{getInfo:function(e){var t=this;this.$axios.get("emirate/".concat(e)).then((function(r){var data=r.data;t.emirateItems=y(y({},data),{},{employee_id:e})}))},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},can:function(e){return!0},close_emirate_info:function(){var e=this;this.emirate_info=!1,this.errors=[],setTimeout((function(){e.$emit("close-popup")}),1e3)},save_emirate_info:function(){var e,t,r,n=this,o=y(y({},this.emirateItems),{},{company_id:null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t||null===(r=t.company)||void 0===r?void 0:r.id,employee_id:this.emirateItems.employee_id});this.$axios.post("emirate",o).then((function(e){var data=e.data;n.loading=!1,data.status?(n.errors=[],n.snackbar=!0,n.response="Emirates Info has been added",n.$emit("eventFromchild"),n.close_emirate_info()):n.errors=data.errors})).catch((function(e){return console.log(e)}))}}},I=(r(1096),r(116)),component=Object(I.a)(x,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(f.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(l.a,[t(d.a,[t(o.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("emirate id")))]),e._v(" "),t(_.a,{attrs:{"hide-details":!e.emirateItems.emirate_id,"error-messages":e.errors.emirate_id&&e.errors.emirate_id[0],dense:"",outlined:""},model:{value:e.emirateItems.emirate_id,callback:function(t){e.$set(e.emirateItems,"emirate_id",t)},expression:"emirateItems.emirate_id"}})],1)]),e._v(" "),t(o.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("nationality")))]),e._v(" "),t(_.a,{attrs:{"hide-details":!e.emirateItems.nationality,"error-messages":e.errors.nationality&&e.errors.nationality[0],dense:"",outlined:""},model:{value:e.emirateItems.nationality,callback:function(t){e.$set(e.emirateItems,"nationality",t)},expression:"emirateItems.nationality"}})],1)]),e._v(" "),t(o.a,{attrs:{cols:"4"}},[t("label",{staticClass:"col-form-label"},[e._v("Issue Date "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t("div",[t(m.a,{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(_.a,e._g(e._b({attrs:{"hide-details":!e.emirateItems.issue,"error-messages":e.errors.issue&&e.errors.issue[0],"persistent-hint":"","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.emirateItems.issue,callback:function(t){e.$set(e.emirateItems,"issue",t)},expression:"emirateItems.issue"}},"v-text-field",o,!1),n))]}}]),model:{value:e.issueDateMenuOpen,callback:function(t){e.issueDateMenuOpen=t},expression:"issueDateMenuOpen"}},[e._v(" "),t(c.a,{staticStyle:{"min-height":"320px"},attrs:{"no-title":""},on:{input:function(t){e.issueDateMenuOpen=!1}},model:{value:e.emirateItems.issue,callback:function(t){e.$set(e.emirateItems,"issue",t)},expression:"emirateItems.issue"}})],1)],1)]),e._v(" "),t(o.a,{attrs:{cols:"4"}},[t("label",{staticClass:"col-form-label"},[e._v("Expiry Date "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t("div",[t(m.a,{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(_.a,e._g(e._b({attrs:{"hide-details":!e.emirateItems.expiry,"error-messages":e.errors.expiry&&e.errors.expiry[0],"persistent-hint":"","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.emirateItems.expiry,callback:function(t){e.$set(e.emirateItems,"expiry",t)},expression:"emirateItems.expiry"}},"v-text-field",o,!1),n))]}}]),model:{value:e.expiryDateMenuOpen,callback:function(t){e.expiryDateMenuOpen=t},expression:"expiryDateMenuOpen"}},[e._v(" "),t(c.a,{staticStyle:{"min-height":"320px"},attrs:{"no-title":""},on:{input:function(t){e.expiryDateMenuOpen=!1}},model:{value:e.emirateItems.expiry,callback:function(t){e.$set(e.emirateItems,"expiry",t)},expression:"emirateItems.expiry"}})],1)],1)]),e._v(" "),t(o.a,{attrs:{cols:"4"}},[t("label",{staticClass:"col-form-label"},[e._v("Date of Birth "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t("div",[t(m.a,{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(_.a,e._g(e._b({attrs:{"hide-details":!e.emirateItems.date_of_birth,"error-messages":e.errors.date_of_birth&&e.errors.date_of_birth[0],"persistent-hint":"","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.emirateItems.date_of_birth,callback:function(t){e.$set(e.emirateItems,"date_of_birth",t)},expression:"emirateItems.date_of_birth"}},"v-text-field",o,!1),n))]}}]),model:{value:e.dobDateMenuOpen,callback:function(t){e.dobDateMenuOpen=t},expression:"dobDateMenuOpen"}},[e._v(" "),t(c.a,{staticStyle:{"min-height":"320px"},attrs:{"no-title":""},on:{input:function(t){e.dobDateMenuOpen=!1}},model:{value:e.emirateItems.date_of_birth,callback:function(t){e.$set(e.emirateItems,"date_of_birth",t)},expression:"emirateItems.date_of_birth"}})],1)],1)]),e._v(" "),t(o.a,{attrs:{cols:"12"}},[e.errors&&e.errors.length?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors))]):e._e()])],1),e._v(" "),t(d.a,[t(o.a,{staticClass:"text-right",attrs:{cols:"12"}},[t(n.a,{staticClass:"primary",attrs:{small:""},on:{click:e.save_emirate_info}},[e._v("Save")])],1)],1)],1)],1)}),[],!1,null,"1482edec",null);t.default=component.exports}}]);