(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{1037:function(t,e,o){var content=o(1097);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("8b126f42",content,!0,{sourceMap:!1})},1096:function(t,e,o){"use strict";o(1037)},1097:function(t,e,o){var r=o(21)((function(i){return i[1]}));r.push([t.i,"table[data-v-1ac9a4b4]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-1ac9a4b4],th[data-v-1ac9a4b4]{padding:8px;text-align:left}tr[data-v-1ac9a4b4]:nth-child(2n){background-color:#fbfdff}",""]),r.locals={},t.exports=r},1115:function(t,e,o){"use strict";o.r(e);var r=o(114),n=o(516),l=o(876),c=o(515),d=o(873),_=o(214),v=(o(12),o(14),o(13),o(6),o(17),o(11),o(18),o(3));o(35),o(55);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={props:["employeeId","hideEditBtn"],data:function(){return{endpoint:"bankinfo",add_other_bank_info:!1,popup:!1,snackbar:!1,response:"",errors:[],data:{bank_name:"",account_no:"",account_title:"",address:"",other_text:"",other_value:"",iban:""}}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this;this.$axios.get("".concat(this.endpoint,"/").concat(this.employeeId)).then((function(e){var data=e.data;t.data={bank_name:data.bank_name,address:data.address,account_no:data.account_no,account_title:data.account_title,iban:data.iban,other_text:data.other_text,other_value:data.other_value}})).catch((function(t){console.log(t)}))},can:function(t){return!0},save_bank_info:function(){var t,e,o,r=this,n=m(m({},this.data),{},{company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(o=e.company)||void 0===o?void 0:o.id,employee_id:this.employeeId});this.$axios.post("bankinfo",n).then((function(t){var data=t.data;r.loading=!1,data.status?(r.$emit("eventFromchild"),r.$emit("close-popup"),r.errors=[],r.snackbar=!0,r.response=data.message,r.getInfo(),r.close_bank_info()):r.errors=data.errors})).catch((function(t){return console.log(t)}))},close_bank_info:function(){this.popup=!1,this.errors=[],setTimeout((function(){}),300)}}},x=(o(1096),o(116)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-8"},[e("div",{staticClass:"text-center ma-2"},[e(d.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(l.a,[e(c.a,[e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v("Bank Name")]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.bank_name,callback:function(e){t.$set(t.data,"bank_name",e)},expression:"data.bank_name"}}),t._v(" "),t.errors&&t.errors.bank_name?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.bank_name[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v("Bank Address")]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.address,callback:function(e){t.$set(t.data,"address",e)},expression:"data.address"}}),t._v(" "),t.errors&&t.errors.address?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.address[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v("Account No")]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:""},model:{value:t.data.account_no,callback:function(e){t.$set(t.data,"account_no",e)},expression:"data.account_no"}}),t._v(" "),t.errors&&t.errors.account_no?e("span",{staticClass:"text-danger mt-2",attrs:{type:"text"}},[t._v(t._s(t.errors.account_no[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v("Account Name")]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.account_title,callback:function(e){t.$set(t.data,"account_title",e)},expression:"data.account_title"}}),t._v(" "),t.errors&&t.errors.account_title?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.account_title[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",[t._v(" IBAN")]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.iban,callback:function(e){t.$set(t.data,"iban",e)},expression:"data.iban"}}),t._v(" "),t.errors&&t.errors.iban?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.iban[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"12"}},[e("a",{attrs:{href:"#"},on:{click:function(e){t.add_other_bank_info=!t.add_other_bank_info}}},[t._v(t._s("".concat(t.add_other_bank_info?"hide":"show"," Other Field")))])]),t._v(" "),t.add_other_bank_info?e(c.a,[e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v("Other Text")]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.other_text,callback:function(e){t.$set(t.data,"other_text",e)},expression:"data.other_text"}}),t._v(" "),t.errors&&t.errors.other_text?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.other_text[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v("Other Value")]),t._v(" "),e(_.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.other_value,callback:function(e){t.$set(t.data,"other_value",e)},expression:"data.other_value"}}),t._v(" "),t.errors&&t.errors.other_value?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.other_value[0]))]):t._e()],1)])],1):t._e(),t._v(" "),t.errors&&t.errors.length?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors))]):t._e()],1),t._v(" "),e(c.a,[e(n.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(r.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save_bank_info}},[t._v("Save")])],1)],1)],1)],1)}),[],!1,null,"1ac9a4b4",null);e.default=component.exports}}]);