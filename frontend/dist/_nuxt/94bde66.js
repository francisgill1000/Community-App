(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1322:function(t,e,r){"use strict";r.r(e);var o=r(114),n=r(518),c=r(875),l=r(517),d=r(872),_=r(214),v=(r(12),r(14),r(13),r(6),r(17),r(11),r(18),r(3));r(35),r(55);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={props:["employeeId","hideEditBtn"],data:function(){return{endpoint:"bankinfo",add_other_bank_info:!1,popup:!1,snackbar:!1,response:"",errors:[],data:{bank_name:"",account_no:"",account_title:"",address:"",other_text:"",other_value:"",iban:""}}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this;this.$axios.get("".concat(this.endpoint,"/").concat(this.employeeId)).then((function(e){var data=e.data;t.data={bank_name:data.bank_name,address:data.address,account_no:data.account_no,account_title:data.account_title,iban:data.iban,other_text:data.other_text,other_value:data.other_value}})).catch((function(t){console.log(t)}))},can:function(t){return!0},save_bank_info:function(){var t,e,r,o=this,n=f(f({},this.data),{},{company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(r=e.company)||void 0===r?void 0:r.id,employee_id:this.employeeId});this.$axios.post("bankinfo",n).then((function(t){var data=t.data;o.loading=!1,data.status?(o.$emit("eventFromchild"),o.$emit("close-popup"),o.errors=[],o.snackbar=!0,o.response=data.message,o.getInfo(),o.close_bank_info()):o.errors=data.errors})).catch((function(t){return console.log(t)}))},close_bank_info:function(){this.popup=!1,this.errors=[],setTimeout((function(){}),300)}}},x=r(116),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-8"},[e("div",{staticClass:"text-center ma-2"},[e(d.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(c.a,[e(l.a,[e(n.a,{attrs:{cols:"6"}},[e(l.a,[e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Bank Name",dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.bank_name,callback:function(e){t.$set(t.data,"bank_name",e)},expression:"data.bank_name"}}),t._v(" "),t.errors&&t.errors.bank_name?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.bank_name[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Bank Address",dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.address,callback:function(e){t.$set(t.data,"address",e)},expression:"data.address"}}),t._v(" "),t.errors&&t.errors.address?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.address[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Account Number",dense:"",small:"",outlined:""},model:{value:t.data.account_no,callback:function(e){t.$set(t.data,"account_no",e)},expression:"data.account_no"}}),t._v(" "),t.errors&&t.errors.account_no?e("span",{staticClass:"text-danger mt-2",attrs:{type:"text"}},[t._v(t._s(t.errors.account_no[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Account Name",dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.account_title,callback:function(e){t.$set(t.data,"account_title",e)},expression:"data.account_title"}}),t._v(" "),t.errors&&t.errors.account_title?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.account_title[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"IBAN",dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.iban,callback:function(e){t.$set(t.data,"iban",e)},expression:"data.iban"}}),t._v(" "),t.errors&&t.errors.iban?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.iban[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}}),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Extra Text",dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.other_text,callback:function(e){t.$set(t.data,"other_text",e)},expression:"data.other_text"}}),t._v(" "),t.errors&&t.errors.other_text?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.other_text[0]))]):t._e()],1)]),t._v(" "),e(n.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Extra Value",dense:"",small:"",outlined:"",type:"text"},model:{value:t.data.other_value,callback:function(e){t.$set(t.data,"other_value",e)},expression:"data.other_value"}}),t._v(" "),t.errors&&t.errors.other_value?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.other_value[0]))]):t._e()],1)]),t._v(" "),t.errors&&t.errors.length?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors))]):t._e()],1),t._v(" "),e(l.a,[e(n.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save_bank_info}},[t._v("Save")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);