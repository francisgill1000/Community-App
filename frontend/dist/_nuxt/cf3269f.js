(window.webpackJsonp=window.webpackJsonp||[]).push([[229,218],{1072:function(t,e,n){var content=n(1183);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("832e425a",content,!0,{sourceMap:!1})},1182:function(t,e,n){"use strict";n(1072)},1183:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"table[data-v-0aac933a]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-0aac933a],th[data-v-0aac933a]{padding:8px;text-align:left}tr[data-v-0aac933a]:nth-child(2n){background-color:#fbfdff}",""]),r.locals={},t.exports=r},1221:function(t,e,n){"use strict";n.r(e);var r=n(147),d={props:["data","hideEditBtn"],methods:{can:function(t){return!0},openEdit:function(){this.$emit("open-edit")}}},o=(n(1182),n(116)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("table",[e("tr",[e("th"),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t.can("employee_personal_edit_access")&&!0!==t.hideEditBtn?e(r.a,{staticClass:"grey",staticStyle:{"border-radius":"50%",padding:"5px"},attrs:{small:"",color:"secondary"},on:{click:t.openEdit}},[t._v("mdi-pencil")]):t._e()],1)]),t._v(" "),t._l(t.data,(function(n,r){return e("tr",{key:r},[e("th",[t._v(t._s(r))]),t._v(" "),e("td",[t._v("\n      "+t._s(t.data[r])+"\n    ")])])}))],2)}),[],!1,null,"0aac933a",null);e.default=component.exports},1333:function(t,e,n){var content=n(1559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2f480e5b",content,!0,{sourceMap:!1})},1558:function(t,e,n){"use strict";n(1333)},1559:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".padding5[data-v-a4226712]{font-size:11px;padding:1px 1px 1px 13px}table[data-v-a4226712]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-a4226712],th[data-v-a4226712]{padding:8px;text-align:left}tr[data-v-a4226712]:nth-child(2n){background-color:#fbfdff}.nopadding[data-v-a4226712]{margin-top:0!important}.alternatebackground[data-v-a4226712]{background:#9acdc5;color:#fff}",""]),r.locals={},t.exports=r},1773:function(t,e,n){"use strict";n.r(e);var r=n(147),d=n(873),o=n(23),l=(n(88),n(37),n(6),n(72),n(33),n(58),{components:{KeyValueTable:n(1221).default},props:["employeeId"],data:function(){return{response:"",snackbar:!1,work:{},table_data:{},table_data2:{}}},created:function(){this.getInfo()},methods:{getInfo:function(){var t=this;this.$axios.get("employee/".concat(this.employeeId)).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,t.table_data2=data,e.next=4,data.role.name;case 4:return e.t0=e.sent,e.t1=data.employee_id,e.t2=data.display_name,e.next=9,data.department.name;case 9:return e.t3=e.sent,e.next=12,data.sub_department;case 12:if(!e.sent){e.next=16;break}e.t4=data.sub_department.name,e.next=17;break;case 16:e.t4="---";case 17:return e.t5=e.t4,e.next=20,data.sub_department;case 20:if(!e.sent){e.next=24;break}e.t6=data.sub_department.name,e.next=25;break;case 24:e.t6="---";case 25:return e.t7=e.t6,e.next=28,data.user.email;case 28:e.t8=e.sent,e.t9=data.whatsapp_number,e.t10=data.whatsapp_number,e.t11=data.joining_date,e.t12=data.joining_date,t.table_data={Role:e.t0,EID:e.t1,Name:e.t2,Department:e.t3,"Sub Department":e.t5,SubDepartment:e.t7,Email:e.t8,"Whatsapp Number":e.t9,Whatsapp_Number:e.t10,"Joining Date":e.t11,Joining_Date:e.t12},t.work=data;case 35:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},editItem:function(){this.$router.push("/employees/".concat(this.employeeId))},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},update_setting:function(){var t,e,n,r=this,d={company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id,employee_id:this.setting.employee_id,status:this.setting.status,overtime:this.setting.overtime,mobile_application:this.setting.mobile_application};this.$axios.post("employee/update/setting",d).then((function(t){var data=t.data;r.loading=!1,data.status?(r.errors=[],r.snackbar=!0,r.response="Setting has been successfully updated",r.$emit("close-popup")):r.errors=data.errors})).catch((function(t){return console.log(t)}))}}}),c=l,v=(n(1558),n(116)),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-15 nopadding"},[e("div",{staticClass:"text-center ma-2"},[e(d.a,{attrs:{small:"",top:"top",color:"background"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e("div",{staticClass:"pr-5",staticStyle:{"text-align":"right"}},[e(r.a,{staticClass:"red",staticStyle:{"border-radius":"50%",padding:"5px"},attrs:{small:"",color:"secondary"},on:{click:t.editItem}},[t._v("mdi-pencil")])],1),t._v(" "),e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-body",staticStyle:{padding:"9px"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 padding5"},[t._v("Role")]),t._v(" "),e("div",{staticClass:"col-sm-9 padding5"},[t._v("\n          "+t._s(t.table_data.Role)+"\n        ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row alternatebackground"},[e("div",{staticClass:"col-sm-3 padding5"},[t._v("EID")]),t._v(" "),e("div",{staticClass:"col-sm-9 padding5"},[t._v("\n          "+t._s(t.table_data.EID)+"\n        ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 padding5"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"col-sm-9 padding5"},[t._v("\n          "+t._s(t.table_data.Name)+"\n        ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row alternatebackground"},[e("div",{staticClass:"col-sm-3 padding5"},[t._v("Department")]),t._v(" "),e("div",{staticClass:"col-sm-9 padding5"},[t._v("\n          "+t._s(t.table_data.Department)+"\n        ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 padding5"},[t._v("Sub Department")]),t._v(" "),e("div",{staticClass:"col-sm-9 padding5"},[t._v("\n          "+t._s(t.table_data.SubDepartment)+"\n        ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row alternatebackground"},[e("div",{staticClass:"col-sm-3 padding5"},[t._v("Email")]),t._v(" "),e("div",{staticClass:"col-sm-9 padding5"},[t._v("\n          "+t._s(t.table_data.Email)+"\n        ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-3 padding5"},[t._v("Whatsapp Number")]),t._v(" "),e("div",{staticClass:"col-sm-9 padding5"},[t._v("\n          "+t._s(t.table_data.Whatsapp_Number)+"\n        ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"row alternatebackground"},[e("div",{staticClass:"col-sm-3 padding5"},[t._v("Joining Date")]),t._v(" "),e("div",{staticClass:"col-sm-9 padding5"},[t._v("\n          "+t._s(t.table_data.Joining_Date)+"\n        ")])]),t._v(" "),e("hr")])])])}),[],!1,null,"a4226712",null);e.default=component.exports}}]);