(window.webpackJsonp=window.webpackJsonp||[]).push([[425,186],{1301:function(t,e,n){var content=n(1467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("66d0ab2d",content,!0,{sourceMap:!1})},1466:function(t,e,n){"use strict";n(1301)},1467:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,"table[data-v-6a717038]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-6a717038],th[data-v-6a717038]{padding:5px;text-align:left}tr[data-v-6a717038]:nth-child(2n){background-color:#e9e9e9}.toolbar-button-design[data-v-6a717038]{border-radius:5px;height:38px!important;margin:auto}",""]),r.locals={},t.exports=r},1621:function(t,e,n){"use strict";n.r(e);var r=n(921),o=n(117),d=n(138),l=n(79),c=n(539),m=n(903),h=n(1583),_=n(361),v=n(889),f=n(1201),x=n(116),k=n(336),y=n(211),I=n(10),C=n(888),D=n(1465),S=n(538),F=n(900),w=n(360),A=n(221),$=n(99),M=n(886),O=(n(33),n(31),n(273),n(6),n(80),n(58),n(37),n(70),n(222),n(57),n(223),{data:function(){return{datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",dialogForm:!1,requestDepartmentid:"",pagination:{current:1,total:0,per_page:10},Model:"Sub Departments",options:{},endpoint:"sub-departments",search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,headers:[{text:"Sub Departments",align:"left",sortable:!1,value:"name"},{text:"Departments",align:"left",sortable:!1,value:"department.name"},{text:"Actions",align:"center",value:"action",sortable:!1}],headers_table:[{text:"#",align:"left",sortable:!0,value:"sno"},{text:"Sub Department Name",align:"left",sortable:!0,value:"name"},{text:"Department Name ",align:"left",sortable:!1,value:"department.name"},{text:"Actions",align:"center",value:"action",sortable:!1}],editedIndex:-1,editedItem:{name:"",department_id:""},defaultItem:{name:"",department_id:""},response:"",data:[],departments:[],errors:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{dialog:function(t){t||this.close(),this.errors=[],this.search=""}},created:function(){this.getDepartments(),this.getDataFromApi(),this.editedItem.department_id=parseInt(this.$route.query.id)},methods:{datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},newItem:function(){this.dialogForm=!0},onPageChange:function(){this.getDataFromApi()},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},getDepartments:function(){var t=this,e={params:{per_page:100,company_id:this.$auth.user.company_id,department_id:this.$route.query.id}};this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data,t.editedItem.department_id=parseInt(t.$route.query.id)}))},can:function(t){return this.$pagePermission.can(t,this)},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==e&&(e=this.endpoint),this.loading=!0;var o=this.pagination.current,d={params:{per_page:this.pagination.per_page,company_id:this.$auth.user.company_id,department_id:this.$route.query.id}};""!=n&&(d.params[n]=r),this.$axios.get("".concat(e,"?page=").concat(o),d).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;t.data=data.data,t.pagination.current=data.current_page,t.pagination.total=data.last_page,t.loading=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))},editItem:function(t){this.editedIndex=this.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.dialogForm=!0},delteteSelectedRecords:function(){var t=this,e=this.ids.map((function(t){return t.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:e}).then((function(e){e.data.status?(t.getDataFromApi(),t.snackbar=e.data.status,t.ids=[],t.response="Selected records has been deleted"):t.errors=e.data.errors})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(n){var data=n.data,r=e.data.indexOf(t);e.data.splice(r,1),e.snackbar=data.status,e.response=data.message})).catch((function(t){return console.log(t)}))},close:function(){var t=this;this.dialog=!1,this.dialogForm=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this,e={name:this.editedItem.name.toLowerCase(),department_id:this.editedItem.department_id,company_id:this.$auth.user.company_id};this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,e).then((function(e){var data=e.data;if(data.status){t.data.findIndex((function(e){return e.id==t.editedItem.id}));t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.dialogForm=!1}else t.errors=data.errors})).catch((function(t){return console.log(t)})):this.$axios.post(this.endpoint,e).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.errors=[],t.search="",t.dialogForm=!1):t.errors=data.errors})).catch((function(t){return console.log(t)}))}}}),N=O,T=(n(1466),n(60)),component=Object(T.a)(N,(function(){var t=this,e=t._self._c;return t.can("sub_department_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(F.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(S.a,{staticClass:""},[e(c.a,{attrs:{cols:"6"}},[e("h3",[t._v(t._s(t.Model))]),t._v(" "),e("div",[t._v("Dashboard / "+t._s(t.Model))])]),t._v(" "),e(c.a,[e("div",{staticClass:"display-1 pa-2 text-right"},[e(o.a,{staticClass:"primary",attrs:{small:"",to:"/department"}},[e(x.a,{attrs:{small:""}},[t._v("mdi-arrow-left")]),t._v(" Back\n        ")],1)],1)])],1),t._v(" "),e(S.a,[e(_.a,{attrs:{persistent:"",fullscreen:!1,width:"500px"},model:{value:t.dialogForm,callback:function(e){t.dialogForm=e},expression:"dialogForm"}},[e(d.a,{attrs:{elevation:"0"}},[e($.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[e("span",[t._v(t._s(t.formTitle)+" "+t._s(t.Model))])]),t._v(" "),e(v.a,{staticClass:"py-0 my-0"}),t._v(" "),e(l.c,[e(m.a,[e(S.a,{staticClass:"mt-2"},[e(c.a,{attrs:{cols:"12"}},[e(A.a,{attrs:{placeholder:"Sub Department",outlined:"",dense:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),t._v(" "),t.errors&&t.errors.name?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.name[0]))]):t._e()],1),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{items:t.departments,"item-text":"name","item-value":"id",placeholder:"Select Departments",outlined:"",dense:""},model:{value:t.editedItem.department_id,callback:function(e){t.$set(t.editedItem,"department_id",e)},expression:"editedItem.department_id"}}),t._v(" "),t.errors&&t.errors.department_id?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.department_id[0]))]):t._e()],1),t._v(" "),e(l.a,[e(c.a,{staticStyle:{padding:"0px"},attrs:{md:"6",lg:"6"}},[e(o.a,{staticClass:"error",on:{click:t.close}},[t._v(" Cancel ")])],1),t._v(" "),e(c.a,{staticClass:"text-right",staticStyle:{padding:"0px"},attrs:{md:"6",lg:"6"}},[e(o.a,{staticClass:"primary",on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),e(c.a,{attrs:{md:"12",lg:"12"}},[e(d.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"0"}},[e($.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(M.b,[e("span",[t._v(" "+t._s(t.Model)+" List")])]),t._v(" "),e(w.a),t._v(" "),e(M.a,[e(c.a,[e(o.a,{staticClass:"primary mr-2 mb-2 toolbar-button-design1",attrs:{small:"",color:"primary"},on:{click:t.newItem}},[t._v("Add "+t._s(t.Model)+" +\n              ")])],1)],1)],1),t._v(" "),e(F.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var r=n.attrs;return[e(o.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),e(h.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},scopedSlots:t._u([{key:"item.sno",fn:function(e){e.item;var n=e.index;return[t._v("\n            "+t._s(++n)+"\n          ")]}},{key:"item.name",fn:function(n){var r=n.item;return[e(f.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{save:function(e){return t.getDataFromApi()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(A.a,{attrs:{label:"Search Sub Department name"},on:{input:function(e){return t.getDataFromApi("","serach_sub_department_name",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(t.caps(r.name))+"\n              ")])]}},{key:"item.action",fn:function(n){var r=n.item;return[e(C.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,d=n.attrs;return[e(o.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",d,!1),r),[e(x.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(k.a,{attrs:{width:"120",dense:""}},[e(y.a,{on:{click:function(e){return t.editItem(r)}}},[e(I.c,{staticStyle:{cursor:"pointer"}},[e(x.a,{attrs:{color:"secondary",small:""}},[t._v(" mdi-pencil ")]),t._v("\n                    Edit\n                  ")],1)],1),t._v(" "),e(y.a,{on:{click:function(e){return t.deleteItem(r)}}},[e(I.c,{staticStyle:{cursor:"pointer"}},[e(x.a,{attrs:{color:"error",small:""}},[t._v(" mdi-delete ")]),t._v("\n                    Delete\n                  ")],1)],1)],1)],1)]}}],null,!1,616082426)})],1)],1)],1),t._v(" "),e("div",[e(S.a,[e(c.a,{staticClass:"float-right",attrs:{md:"12"}},[e("div",{staticClass:"float-right"},[e(D.a,{attrs:{length:t.pagination.total,"total-visible":12},on:{input:t.onPageChange},model:{value:t.pagination.current,callback:function(e){t.$set(t.pagination,"current",e)},expression:"pagination.current"}})],1)])],1)],1)],1):e("NoAccess")}),[],!1,null,"6a717038",null);e.default=component.exports;installComponents(component,{NoAccess:n(909).default})},909:function(t,e,n){"use strict";n.r(e);var r=n(60),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);