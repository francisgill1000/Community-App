(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1034:function(t,e,r){var content=r(1095);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("b65ab4da",content,!0,{sourceMap:!1})},1094:function(t,e,r){"use strict";r(1034)},1095:function(t,e,r){var o=r(21)((function(i){return i[1]}));o.push([t.i,"table[data-v-6598ce69]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-6598ce69],th[data-v-6598ce69]{padding:8px;text-align:left}tr[data-v-6598ce69]:nth-child(2n){background-color:#fbfdff}",""]),o.locals={},t.exports=o},1116:function(t,e,r){"use strict";r.r(e);var o=r(114),l=r(516),n=r(515),c=r(873),_=r(214),d=(r(12),r(14),r(13),r(17),r(11),r(18),r(3));r(6),r(72),r(33),r(58),r(55);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={props:["employeeId"],data:function(){return{passport_info:!1,errors:[],snackbar:!1,response:"",passport_list:{}}},created:function(){this.getInfo(this.employeeId)},methods:{getInfo:function(t){var e=this;this.$axios.get("passport/".concat(t)).then((function(r){var data=r.data;e.passport_list=v(v({},data),{},{employee_id:t})}))},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},can:function(t){return!0},close_passport_info:function(){var t=this;this.passport_info=!1,this.errors=[],setTimeout((function(){t.$emit("close-popup")}),1e3)},save_passport_info:function(){var t,e,r,o=this,l=v(v({},this.passport_list),{},{company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(r=e.company)||void 0===r?void 0:r.id,employee_id:this.passport_list.employee_id});this.$axios.post("passport",l).then((function(t){var data=t.data;o.loading=!1,data.status?(o.$emit("eventFromchild"),o.errors=[],o.snackbar=!0,o.response=data.message,o.close_passport_info()):o.errors=data.errors})).catch((function(t){return console.log(t)}))}}},y=(r(1094),r(116)),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-center ma-2"},[e(c.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(n.a,[e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("passport no")))]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.passport_list.passport_no,callback:function(e){t.$set(t.passport_list,"passport_no",e)},expression:"passport_list.passport_no"}}),t._v(" "),t.errors&&t.errors.passport_no?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.passport_no[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("note")))]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.passport_list.note,callback:function(e){t.$set(t.passport_list,"note",e)},expression:"passport_list.note"}}),t._v(" "),t.errors&&t.errors.note?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.note[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("place of issues")))]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.passport_list.place_of_issues,callback:function(e){t.$set(t.passport_list,"place_of_issues",e)},expression:"passport_list.place_of_issues"}}),t._v(" "),t.errors&&t.errors.place_of_issues?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.place_of_issues[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("country")))]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.passport_list.country,callback:function(e){t.$set(t.passport_list,"country",e)},expression:"passport_list.country"}}),t._v(" "),t.errors&&t.errors.country?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.country[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("issue date")))]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"date"},model:{value:t.passport_list.issue_date,callback:function(e){t.$set(t.passport_list,"issue_date",e)},expression:"passport_list.issue_date"}}),t._v(" "),t.errors&&t.errors.issue_date?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.issue_date[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("expiry date")))]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"date"},model:{value:t.passport_list.expiry_date,callback:function(e){t.$set(t.passport_list,"expiry_date",e)},expression:"passport_list.expiry_date"}}),t._v(" "),t.errors&&t.errors.expiry_date?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.expiry_date[0]))]):t._e()],1)]),t._v(" "),t.errors&&t.errors.length?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors))]):t._e()],1),t._v(" "),e(n.a,[e(l.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save_passport_info}},[t._v("Save")])],1)],1)],1)}),[],!1,null,"6598ce69",null);e.default=component.exports}}]);