(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{1311:function(t,e,o){var content=o(1524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("680c10d6",content,!0,{sourceMap:!1})},1523:function(t,e,o){"use strict";o(1311)},1524:function(t,e,o){var n=o(21)((function(i){return i[1]}));n.push([t.i,".container select[data-v-5ec209a8]{height:200px;width:100%}.container .middle[data-v-5ec209a8]{text-align:center}.container button[data-v-5ec209a8]{margin-bottom:5px;width:80%}",""]),n.locals={},t.exports=n},1718:function(t,e,o){"use strict";o.r(e);var n=o(518),l=o(517),r=o(96),c=(o(80),o(13),o(6),o(35),o(354),o(216),o(99),o(215),{data:function(){return{endpointEmployee:"employee",endpointDevise:"device",leftSelectedUsers:[],leftEmployees:[],rightSelectedUsers:[],rightEmployees:[]}},created:function(){this.getEmployeesDataFromApi()},methods:{onSubmit:function(){this.rightEmployees},getEmployeesDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpointEmployee,o={params:{per_page:1e3,company_id:this.$auth.user.company_id}};this.$axios.get("".concat(e,"?page=").concat(1),o).then((function(e){var data=e.data;t.leftEmployees=data.data}))},sortObject:function(t){return t.sort((function(a,b){var t=a.first_name.toUpperCase(),e=b.first_name.toUpperCase();return t<e?-1:t>e?1:0}))},allmoveLeft:function(){this.leftEmployees=this.leftEmployees.concat(this.rightEmployees),this.rightEmployees=[],this.leftEmployees=this.sortObject(this.leftEmployees)},allmoveRight:function(){this.rightEmployees=this.rightEmployees.concat(this.leftEmployees),this.leftEmployees=[],this.rightEmployees=this.sortObject(this.rightEmployees)},moveLeft:function(){var t=this;if(this.rightSelectedUsers.length){for(var e=this.rightSelectedUsers.length,o=function(i){if(t.rightSelectedUsers){var e=t.rightEmployees.findIndex((function(e){return e.id==t.rightSelectedUsers[i]})),o=t.rightEmployees.find((function(e){return e.id==t.rightSelectedUsers[i]}));t.leftEmployees.push(o),t.rightEmployees.splice(e,1)}},i=0;i<e;i++)o(i);this.leftEmployees=this.sortObject(this.leftEmployees)}},moveRight:function(){var t=this;if(this.leftSelectedUsers.length){for(var e=this.leftSelectedUsers.length,o=function(i){if(t.leftSelectedUsers){var e=t.leftEmployees.findIndex((function(e){return e.id==t.leftSelectedUsers[i]})),o=t.leftEmployees.find((function(e){return e.id==t.leftSelectedUsers[i]}));t.rightEmployees.push(o),t.leftEmployees.splice(e,1)}},i=0;i<e;i++)o(i);this.rightEmployees=this.sortObject(this.rightEmployees)}}}}),d=c,h=(o(1523),o(116)),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100% !important"}},[e(l.a,[e(n.a,{attrs:{cols:"12"}},[e(l.a,{staticClass:"mt-5 mb-5"},[e(n.a,{attrs:{cols:"4"}},[e("h3",[t._v("Employees Devices")]),t._v(" "),e("div",[t._v("Dashboard")])])],1)],1)],1),t._v(" "),e(l.a,[e(n.a,{attrs:{cols:"5"}},[e(r.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[e("span",[t._v("All Employees List")])]),t._v(" "),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.leftSelectedUsers,expression:"leftSelectedUsers"}],staticClass:"form-control",attrs:{multiple:"",size:"13"},on:{dblclick:t.moveRight,change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.leftSelectedUsers=e.target.multiple?o:o[0]}}},t._l(t.leftEmployees,(function(o,n){return e("option",{key:n,domProps:{value:o.id}},[t._v("\n            "+t._s(o.first_name)+"\n          ")])})),0)])],1),t._v(" "),e(n.a,{attrs:{cols:"2"}},[e("div",{staticStyle:{"text-align":"-webkit-center"}},[e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button",id:"undo_redo_undo"}},[t._v("\n          Options\n        ")]),t._v(" "),e("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightSelected"},on:{click:t.moveRight}},[e("i",{staticClass:"v-icon notranslate mdi mdi-chevron-right theme--red",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightAll"},on:{click:t.allmoveRight}},[e("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-right theme--red",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftSelected"},on:{click:t.moveLeft}},[e("i",{staticClass:"v-icon notranslate mdi mdi-chevron-left theme--red",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftAll"},on:{click:t.allmoveLeft}},[e("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-left theme--red",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),e(n.a,{attrs:{cols:"5"}},[e(r.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[e("span",[t._v("Selected Employees List")])]),t._v(" "),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.rightSelectedUsers,expression:"rightSelectedUsers"}],staticClass:"form-control",attrs:{multiple:"",size:"13"},on:{dblclick:t.moveLeft,change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.rightSelectedUsers=e.target.multiple?o:o[0]}}},t._l(t.rightEmployees,(function(o,n){return e("option",{key:n,domProps:{value:o.id}},[t._v("\n            "+t._s(o.first_name)+"\n          ")])})),0)])],1)],1)],1)}),[],!1,null,"5ec209a8",null);e.default=component.exports}}]);