(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{1353:function(t,e,n){"use strict";n.r(e);var r=n(117),o=n(138),l=n(79),c=n(539),d=n(903),m=n(1583),f=n(361),h=n(116),_=n(336),v=n(211),k=n(10),y=n(888),x=n(538),F=n(900),D=n(360),O=n(221),w=n(99),I=n(886),C=(n(33),n(12),n(14),n(11),n(18),n(9),n(19),n(2));n(31),n(273),n(6),n(80),n(58),n(37),n(70),n(222),n(57),n(223);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={data:function(){return{totalRowsCount:0,showFilters:!1,filters:{},isFilter:!1,datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",dialogForm:!1,pagination:{current:1,total:0,per_page:10},Model:"Designation",options:{},endpoint:"designation",search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,headers:[{text:"Designation",align:"left",sortable:!1,value:"name"},{text:"Department",align:"left",sortable:!1,value:"department.name"},{text:"Actions",align:"center",value:"action",sortable:!1}],headers_table:[{text:"#",align:"left",sortable:!0,value:"sno"},{text:"Designation",align:"left",sortable:!0,value:"name",filterable:!0,key:"designation_name"},{text:"Department Name ",align:"left",sortable:!0,value:"department.name",filterable:!0,key:"department_name"},{text:"Actions",align:"center",value:"action",sortable:!1}],editedIndex:-1,editedItem:{name:"",department_id:""},defaultItem:{name:"",department_id:""},response:"",data:[],departments:[],errors:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(t){t||this.close(),this.errors=[],this.search=""}},created:function(){this.getDepartments(),this.getDataFromApi()},methods:{datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},newItem:function(){this.dialogForm=!0},onPageChange:function(){this.getDataFromApi()},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},getDepartments:function(){var t=this,e={params:{per_page:100,company_id:this.$auth.user.company_id}};this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data}))},can:function(t){return this.$pagePermission.can(t,this)},applyFilters:function(){this.getDataFromApi(),this.from_menu_filter=!1,this.to_menu_filter=!1},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t,e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==n&&(n=this.endpoint),this.loading=!0;var l=this.options,c=l.sortBy,d=l.sortDesc,m=l.page,f=l.itemsPerPage,h=c?c[0]:"",_=d?d[0]:"";this.payloadOptions={params:A(A((t={page:m,sortBy:h,sortDesc:_,per_page:f},Object(C.a)(t,"sortBy",h),Object(C.a)(t,"sortDesc",_),Object(C.a)(t,"per_page",f),t),this.filters),{},{company_id:this.$auth.user.company_id})},""!=r&&(this.payloadOptions.params[r]=o),this.$axios.get("".concat(n,"?page=").concat(m),this.payloadOptions).then((function(t){var data=t.data;if(""!=r&&0==data.data.length)return e.snack=!0,e.snackColor="error",e.snackText="No Results Found",e.loading=!1,!1;e.totalRowsCount=data.total,e.data=data.data,e.pagination.current=data.current_page,e.pagination.total=data.last_page,e.loading=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))},editItem:function(t){this.editedIndex=this.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0,this.dialogForm=!0},delteteSelectedRecords:function(){var t=this,e=this.ids.map((function(t){return t.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:e}).then((function(e){e.data.status?(t.getDataFromApi(),t.snackbar=e.data.status,t.ids=[],t.response="Selected records has been deleted"):t.errors=e.data.errors})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(n){var data=n.data,r=e.data.indexOf(t);e.data.splice(r,1),e.snackbar=data.status,e.response=data.message})).catch((function(t){return console.log(t)}))},close:function(){var t=this;this.dialog=!1,this.dialogForm=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this,e={name:this.editedItem.name,department_id:this.editedItem.department_id,company_id:this.$auth.user.company_id};this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,e).then((function(e){var data=e.data;if(data.status){t.data.findIndex((function(e){return e.id==t.editedItem.id}));t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.dialogForm=!1,t.close()}else t.errors=data.errors})).catch((function(t){return console.log(t)})):this.$axios.post(this.endpoint,e).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.dialogForm=!1,t.close(),t.errors=[],t.search=""):t.errors=data.errors})).catch((function(t){return console.log(t)}))}}},P=S,$=n(60),component=Object($.a)(P,(function(){var t=this,e=t._self._c;return t.can("designation_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(F.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(x.a,[e(f.a,{attrs:{persistent:"",fullscreen:!1,width:"500px"},model:{value:t.dialogForm,callback:function(e){t.dialogForm=e},expression:"dialogForm"}},[e(o.a,[e(l.d,{staticClass:"popup_background",attrs:{dense:""}},[e("span",[t._v(t._s(t.formTitle)+" "+t._s(t.Model))]),t._v(" "),e(D.a),t._v(" "),e(h.a,{attrs:{outlined:"",dark:""},on:{click:function(e){t.dialogForm=!1}}},[t._v("\n            mdi mdi-close-circle\n          ")])],1),t._v(" "),e(l.c,[e(d.a,[e(x.a,{staticClass:"mt-2"},[e(c.a,{attrs:{cols:"12"}},[e(O.a,{attrs:{placeholder:"Designation",outlined:"",dense:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),t._v(" "),t.errors&&t.errors.name?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.name[0]))]):t._e()],1),t._v(" "),e(c.a,{staticClass:"text-right",staticStyle:{padding:"0px"},attrs:{md:"12",lg:"12"}},[e(r.a,{staticClass:"primary",on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)],1)],1),t._v(" "),e(c.a,{attrs:{md:"12"}},[e(o.a,{staticClass:"mb-5 mt-2",attrs:{elevation:"0"}},[e(w.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[e(I.b,[e("span",[t._v(" "+t._s(t.Model)+"s List")])]),t._v(" "),e("span",[e(r.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[e(h.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(e){return t.clearFilters()}}},[t._v("mdi mdi-reload")])],1)],1),t._v(" "),e("span",[e(r.a,{attrs:{"x-small":"",ripple:!1,text:"",title:"Filter"},on:{click:function(e){return t.toggleFilter()}}},[e(h.a,{attrs:{dark:"",white:""}},[t._v("mdi-filter")])],1)],1),t._v(" "),e(D.a),t._v(" "),t.can("designation_create")?e(r.a,{staticClass:"primary",attrs:{small:""},on:{click:t.newItem}},[t._v("\n            Designation +\n          ")]):t._e()],1),t._v(" "),e(F.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e(r.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),e(m.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},options:t.options,"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"header",fn:function(n){var r=n.props.headers;return[t.isFilter?e("tr",t._l(r,(function(header){return e("td",{key:header.text},[header.filterable&&!header.filterSpecial?e(O.a,{attrs:{clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{input:function(e){return t.applyFilters(header.key,e)}},model:{value:t.filters[header.key],callback:function(e){t.$set(t.filters,header.key,e)},expression:"filters[header.key]"}}):t._e()],1)})),0):t._e()]}},{key:"item.sno",fn:function(e){e.item;var n=e.index;return[t._v("\n            "+t._s(++n)+"\n          ")]}},{key:"item.name",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(t.caps(n.name))+"\n          ")]}},{key:"item.department.name",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(t.caps(n.department&&n.department.name))+"\n          ")]}},{key:"item.action",fn:function(n){var o=n.item;return[e(y.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),o),[e(h.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(_.a,{attrs:{width:"120",dense:""}},[t.can("designation_edit")?e(v.a,{on:{click:function(e){return t.editItem(o)}}},[e(k.c,{staticStyle:{cursor:"pointer"}},[e(h.a,{attrs:{color:"secondary",small:""}},[t._v(" mdi-pencil ")]),t._v("\n                    Edit\n                  ")],1)],1):t._e(),t._v(" "),t.can("designation_delete")?e(v.a,{on:{click:function(e){return t.deleteItem(o)}}},[e(k.c,{staticStyle:{cursor:"pointer"}},[e(h.a,{attrs:{color:"error",small:""}},[t._v(" mdi-delete ")]),t._v("\n                    Delete\n                  ")],1)],1):t._e()],1)],1)]}}],null,!1,4178013880)})],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(909).default})},1807:function(t,e,n){"use strict";n.r(e);var r=n(883),o=n(885),l=n(884),c=n(60),component=Object(c.a)({},(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{color:"deep-purple accent-4",right:""}},[e(r.a,[t._v("Designation")]),t._v(" "),e(r.a,[t._v("Department")]),t._v(" "),e(o.a,[e("SetupDesignation")],1),t._v(" "),e(o.a,[e("SetupDepartment")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SetupDesignation:n(1353).default,SetupDepartment:n(1572).default})}}]);