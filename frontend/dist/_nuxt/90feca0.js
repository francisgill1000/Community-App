(window.webpackJsonp=window.webpackJsonp||[]).push([[150,145],{1009:function(e,t,r){var content=r(1031);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("9306e562",content,!0,{sourceMap:!1})},1011:function(e,t,r){"use strict";r(995)},1012:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,"table[data-v-9fe8fc54]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-9fe8fc54],th[data-v-9fe8fc54]{padding:8px;text-align:left}tr[data-v-9fe8fc54]:nth-child(2n){background-color:#fbfdff}",""]),o.locals={},e.exports=o},1016:function(e,t,r){"use strict";r.r(t);var o=r(147),n={props:["data","hideEditBtn"],methods:{can:function(e){return!0},openEdit:function(){this.$emit("open-edit")}}},l=(r(1011),r(116)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("table",[t("tr",[t("th"),e._v(" "),t("td",{staticStyle:{"text-align":"right"}},[e.can("employee_personal_edit_access")&&!0!==e.hideEditBtn?t(o.a,{staticClass:"grey",staticStyle:{"border-radius":"50%",padding:"5px"},attrs:{small:"",color:"secondary"},on:{click:e.openEdit}},[e._v("mdi-pencil")]):e._e()],1)]),e._v(" "),e._l(e.data,(function(r,o){return t("tr",{key:o},[t("th",[e._v(e._s(o))]),e._v(" "),t("td",[e._v("\n      "+e._s(e.data[o])+"\n    ")])])}))],2)}),[],!1,null,"9fe8fc54",null);t.default=component.exports},1030:function(e,t,r){"use strict";r(1009)},1031:function(e,t,r){var o=r(21)((function(i){return i[1]}));o.push([e.i,"table[data-v-d87f3b50]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-d87f3b50],th[data-v-d87f3b50]{padding:8px;text-align:left}tr[data-v-d87f3b50]:nth-child(2n){background-color:#fbfdff}",""]),o.locals={},e.exports=o},1041:function(e,t,r){"use strict";r.r(t);var o=r(114),n=r(516),l=r(876),c=r(515),_=r(873),m=(r(80),r(13),r(6),r(3)),v=r(23);r(88),r(35),r(72),r(33),r(58),r(55),r(12),r(14),r(17),r(11),r(18);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{KeyValueTable:r(1016).default},props:["employeeId"],data:function(){return{endpoint:"personalinfo",personal_info:!1,add_other_personal_info:!1,snackbar:!1,response:"",errors:[],personalItem:{},table_data:{}}},created:function(){this.getInfo()},methods:{getInfo:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){var r,o,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.employeeId,o=e.endpoint,t.next=5,e.$axios.get("".concat(o,"/").concat(r));case 5:n=t.sent,data=n.data,e.table_data={Nationality:data.nationality,Religion:data.religion,"Marital Status":1==data.marital_status?"Married":"Single","Date of Birth":data.date_of_birth,"No. of Children":data.no_of_children,Father:data.father_name,Mother:data.mother_name,Gender:1==data.gender?"Male":"Female","Employment of Spouse":data.no_of_spouse},data.other_text&&data.other_value&&(e.table_data[caps(data.other_text)]=caps(data.other_value)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error retrieving personal information:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},can:function(e){return!0},close_personal_info:function(){var e=this;this.personal_info=!1,this.errors=[],setTimeout((function(){e.$emit("close-popup")}),1e3)},save_personal_info:function(){var e,t,r,o=this,n=f(f({},this.personalItem),{},{company_id:null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t||null===(r=t.company)||void 0===r?void 0:r.id,employee_id:this.employeeId});this.$axios.post("personalinfo",n).then((function(e){var data=e.data;o.loading=!1,data.status?(o.errors=[],o.snackbar=!0,o.response=data.message,o.close_personal_info()):o.errors=data.errors})).catch((function(e){return console.log(e)}))}}},x=(r(1030),r(116)),component=Object(x.a)(h,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(_.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(l.a,[t(c.a,[t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("nationality")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.nationality,expression:"personalItem.nationality"}],staticClass:"form-control",attrs:{type:""},domProps:{value:e.personalItem.nationality},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"nationality",t.target.value)}}}),e._v(" "),e.errors&&e.errors.nationality?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.nationality[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("Date of birth")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.date_of_birth,expression:"personalItem.date_of_birth"}],staticClass:"form-control",attrs:{min:"0",type:"date"},domProps:{value:e.personalItem.date_of_birth},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"date_of_birth",t.target.value)}}}),e._v(" "),e.errors&&e.errors.date_of_birth?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.date_of_birth[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("religion")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.religion,expression:"personalItem.religion"}],staticClass:"form-control",attrs:{type:""},domProps:{value:e.personalItem.religion},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"religion",t.target.value)}}}),e._v(" "),e.errors&&e.errors.religion?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.religion[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("marital status")))]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.marital_status,expression:"personalItem.marital_status"}],staticClass:"form-control",attrs:{"aria-label":"Default select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.personalItem,"marital_status",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:""}},[e._v("select...")]),e._v(" "),t("option",{attrs:{value:"1"}},[e._v("Married")]),e._v(" "),t("option",{attrs:{value:"2"}},[e._v("Single")])]),e._v(" "),e.errors&&e.errors.marital_status?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.marital_status[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("Employment of Spouse")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.no_of_spouse,expression:"personalItem.no_of_spouse"}],staticClass:"form-control",attrs:{min:"0",type:"text"},domProps:{value:e.personalItem.no_of_spouse},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"no_of_spouse",t.target.value)}}}),e._v(" "),e.errors&&e.errors.no_of_spouse?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.no_of_spouse[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("no of children")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.no_of_children,expression:"personalItem.no_of_children"}],staticClass:"form-control",attrs:{min:"0",type:"number"},domProps:{value:e.personalItem.no_of_children},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"no_of_children",t.target.value)}}}),e._v(" "),e.errors&&e.errors.no_of_children?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.no_of_children[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("father name")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.father_name,expression:"personalItem.father_name"}],staticClass:"form-control",attrs:{min:"0",type:"text"},domProps:{value:e.personalItem.father_name},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"father_name",t.target.value)}}}),e._v(" "),e.errors&&e.errors.father_name?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.father_name[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("mother name")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.mother_name,expression:"personalItem.mother_name"}],staticClass:"form-control",attrs:{min:"0",type:"text"},domProps:{value:e.personalItem.mother_name},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"mother_name",t.target.value)}}}),e._v(" "),e.errors&&e.errors.mother_name?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.mother_name[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("gender")))]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.gender,expression:"personalItem.gender"}],staticClass:"form-select",attrs:{"aria-label":"Default select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.personalItem,"gender",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:""}},[e._v("Select...")]),e._v(" "),t("option",{attrs:{value:"1"}},[e._v("Male")]),e._v(" "),t("option",{attrs:{value:"2"}},[e._v("Female")])]),e._v(" "),e.errors&&e.errors.gender?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.gender[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"12"}},[t("a",{attrs:{href:"javascrip:void(0)"},on:{click:function(t){e.add_other_personal_info=!e.add_other_personal_info}}},[e._v(e._s(e.caps("".concat(e.add_other_personal_info?"hide":"show"," other field"))))])]),e._v(" "),e.add_other_personal_info?t(c.a,[t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("other text")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.other_text,expression:"personalItem.other_text"}],staticClass:"form-control",domProps:{value:e.personalItem.other_text},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"other_text",t.target.value)}}}),e._v(" "),e.errors&&e.errors.other_text?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.other_text[0]))]):e._e()])]),e._v(" "),t(n.a,{attrs:{cols:"6"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v(e._s(e.caps("other value")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.personalItem.other_value,expression:"personalItem.other_value"}],staticClass:"form-control",domProps:{value:e.personalItem.other_value},on:{input:function(t){t.target.composing||e.$set(e.personalItem,"other_value",t.target.value)}}}),e._v(" "),e.errors&&e.errors.other_value?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.other_value[0]))]):e._e()])])],1):e._e(),e._v(" "),e.errors&&e.errors.length?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors))]):e._e()],1),e._v(" "),t(c.a,[t(n.a,{attrs:{cols:"12"}},[t(o.a,{staticClass:"error",attrs:{small:""},on:{click:e.close_personal_info}},[e._v("\n          Cancel\n        ")]),e._v(" "),t(o.a,{staticClass:"primary",attrs:{small:""},on:{click:e.save_personal_info}},[e._v("Save")])],1)],1)],1)],1)}),[],!1,null,"d87f3b50",null);t.default=component.exports},995:function(e,t,r){var content=r(1012);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("f7f27ab4",content,!0,{sourceMap:!1})}}]);