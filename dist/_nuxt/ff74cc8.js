(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1207:function(e,r,t){"use strict";t.r(r);var o=t(117),n=t(539),c=t(903),l=t(538),m=t(900),d=t(221),_=t(2);t(37),t(6),t(80),t(31),t(58),t(57),t(12),t(14),t(11),t(18),t(9),t(19);function h(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(r){Object(_.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var y={props:["employeeId"],data:function(){return{other_info:!1,contact_info:!1,response:"",snackbar:!1,errors:[],contactItem:{}}},created:function(){this.getInfo()},methods:{getInfo:function(){var e=this;this.$axios.get("employee/".concat(this.employeeId,"?company_id=").concat(this.$auth.user.company_id)).then((function(r){var data=r.data;e.contactItem=data}))},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},close_contact_info:function(){var e=this;this.contact_info=!1,this.errors=[],setTimeout((function(){e.$emit("close-popup")}),1e3)},can:function(e){return!0},save_contact_info:function(){var e,r,t,o=this,n=v(v({},this.contactItem),{},{company_id:null===(e=this.$auth)||void 0===e||null===(r=e.user)||void 0===r||null===(t=r.company)||void 0===t?void 0:t.id,employee_id:this.employeeId});this.$axios.post("employee/update/contact",n).then((function(e){var data=e.data;o.loading=!1,o.$emit("eventFromchild"),data.status?(o.errors=[],o.snackbar=!0,o.response=data.message,o.getInfo(),o.close_contact_info()):o.errors=data.errors})).catch((function(e){return console.log(e)}))}}},f=t(60),component=Object(f.a)(y,(function(){var e=this,r=e._self._c;return r("div",[r("div",{staticClass:"text-center ma-2"},[r(m.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(r){e.snackbar=r},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),r(c.a,[r(l.a,[r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r("h4",[e._v("Contact Details")]),e._v(" "),r("br"),e._v(" "),r(l.a,[r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Phone Number",dense:"",outlined:"","hide-details":!e.errors.phone_number,type:"text",error:e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.contactItem.phone_number,callback:function(r){e.$set(e.contactItem,"phone_number",r)},expression:"contactItem.phone_number"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Whatsapp Number ( ex: 971XXXX)",dense:"",outlined:"","hide-details":!e.errors.whatsapp_number,type:"text",error:e.errors.whatsapp_number,"error-messages":e.errors&&e.errors.whatsapp_number?e.errors.whatsapp_number[0]:""},model:{value:e.contactItem.whatsapp_number,callback:function(r){e.$set(e.contactItem,"whatsapp_number",r)},expression:"contactItem.whatsapp_number"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Alternate Email",dense:"",outlined:"","hide-details":!e.errors.local_email,type:"text",error:e.errors.local_email,"error-messages":e.errors&&e.errors.local_email?e.errors.local_email[0]:""},model:{value:e.contactItem.local_email,callback:function(r){e.$set(e.contactItem,"local_email",r)},expression:"contactItem.local_email"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Phone Relative Number",dense:"",outlined:"","hide-details":!e.errors.phone_relative_number,type:"text",error:e.errors.phone_relative_number,"error-messages":e.errors&&e.errors.phone_relative_number?e.errors.phone_relative_number[0]:""},model:{value:e.contactItem.phone_relative_number,callback:function(r){e.$set(e.contactItem,"phone_relative_number",r)},expression:"contactItem.phone_relative_number"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Relation",dense:"",outlined:"","hide-details":!e.errors.relation,type:"text",error:e.errors.relation,"error-messages":e.errors&&e.errors.relation?e.errors.relation[0]:""},model:{value:e.contactItem.relation,callback:function(r){e.$set(e.contactItem,"relation",r)},expression:"contactItem.relation"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Local Address",dense:"",outlined:"","hide-details":!e.errors.local_address,type:"text",error:e.errors.local_address,"error-messages":e.errors&&e.errors.local_address?e.errors.local_address[0]:""},model:{value:e.contactItem.local_address,callback:function(r){e.$set(e.contactItem,"local_address",r)},expression:"contactItem.local_address"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Local City",dense:"",outlined:"","hide-details":!e.errors.local_city,type:"text",error:e.errors.local_city,"error-messages":e.errors&&e.errors.local_city?e.errors.local_city[0]:""},model:{value:e.contactItem.local_city,callback:function(r){e.$set(e.contactItem,"local_city",r)},expression:"contactItem.local_city"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Local Country",dense:"",outlined:"","hide-details":!e.errors.local_country,type:"text",error:e.errors.local_country,"error-messages":e.errors&&e.errors.local_country?e.errors.local_country[0]:""},model:{value:e.contactItem.local_country,callback:function(r){e.$set(e.contactItem,"local_country",r)},expression:"contactItem.local_country"}})],1)],1)],1),e._v(" "),r(n.a,{staticStyle:{"border-left":"1px solid #ddd"},attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r("h4",[e._v("Home Country Details")]),e._v(" "),r("br"),e._v(" "),r(l.a,[r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Address",dense:"",outlined:"","hide-details":!e.errors.home_address,type:"text",error:e.errors.home_address,"error-messages":e.errors&&e.errors.home_address?e.errors.home_address[0]:""},model:{value:e.contactItem.home_address,callback:function(r){e.$set(e.contactItem,"home_address",r)},expression:"contactItem.home_address"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Tel",dense:"",outlined:"","hide-details":!e.errors.home_tel,type:"text",error:e.errors.home_tel,"error-messages":e.errors&&e.errors.home_tel?e.errors.home_tel[0]:""},model:{value:e.contactItem.home_tel,callback:function(r){e.$set(e.contactItem,"home_tel",r)},expression:"contactItem.home_tel"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Mobile",dense:"",outlined:"","hide-details":!e.errors.home_mobile,type:"text",error:e.errors.home_mobile,"error-messages":e.errors&&e.errors.home_mobile?e.errors.home_mobile[0]:""},model:{value:e.contactItem.home_mobile,callback:function(r){e.$set(e.contactItem,"home_mobile",r)},expression:"contactItem.home_mobile"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Fax",dense:"",outlined:"","hide-details":!e.errors.home_fax,type:"text",error:e.errors.home_fax,"error-messages":e.errors&&e.errors.home_fax?e.errors.home_fax[0]:""},model:{value:e.contactItem.home_fax,callback:function(r){e.$set(e.contactItem,"home_fax",r)},expression:"contactItem.home_fax"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"City",dense:"",outlined:"","hide-details":!e.errors.home_city,type:"text",error:e.errors.home_city,"error-messages":e.errors&&e.errors.home_city?e.errors.home_city[0]:""},model:{value:e.contactItem.home_city,callback:function(r){e.$set(e.contactItem,"home_city",r)},expression:"contactItem.home_city"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"State",dense:"",outlined:"","hide-details":!e.errors.home_state,type:"text",error:e.errors.home_state,"error-messages":e.errors&&e.errors.home_state?e.errors.home_state[0]:""},model:{value:e.contactItem.home_state,callback:function(r){e.$set(e.contactItem,"home_state",r)},expression:"contactItem.home_state"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Country",dense:"",outlined:"","hide-details":!e.errors.home_country,type:"text",error:e.errors.home_country,"error-messages":e.errors&&e.errors.home_country?e.errors.home_country[0]:""},model:{value:e.contactItem.home_country,callback:function(r){e.$set(e.contactItem,"home_country",r)},expression:"contactItem.home_country"}})],1),e._v(" "),r(n.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[r(d.a,{attrs:{label:"Personal Email",dense:"",outlined:"","hide-details":!e.errors.home_email,type:"text",error:e.errors.home_email,"error-messages":e.errors&&e.errors.home_email?e.errors.home_email[0]:""},model:{value:e.contactItem.home_email,callback:function(r){e.$set(e.contactItem,"home_email",r)},expression:"contactItem.home_email"}})],1),e._v(" "),e.errors&&e.errors.length?r("span",{staticClass:"error--text"},[e._v(e._s(e.errors))]):e._e()],1),e._v(" "),r(l.a,[r(n.a,{staticClass:"text-right",attrs:{cols:"12"}},[r(o.a,{staticClass:"primary",attrs:{small:""},on:{click:e.save_contact_info}},[e._v("Save")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports}}]);