(window.webpackJsonp=window.webpackJsonp||[]).push([[17,180],{1534:function(t,e,n){"use strict";n.r(e);var r=n(893),o=n(114),l=n(133),c=n(87),d=n(518),h=n(875),m=n(1545),f=n(350),v=n(147),_=n(326),x=n(204),y=n(60),I=n(862),S=n(517),D=n(872),w=n(349),k=n(214),O=n(96),F=n(855),C=(n(37),n(56),n(12),n(14),n(13),n(17),n(11),n(18),n(3));n(33),n(266),n(6),n(72),n(58),n(35),n(80),n(215),n(55),n(216);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var N={data:function(){var t;return t={show1:!1,dialogFormDesignation:!1,showFilters:!1,options:{},filters:{},isFilter:!1,generateLogsDialog:!1,totalRowsCount:0,new_Designation_name:"",new_designation_department_id:"",departments:[],New_sub_DepartmentName:"",Newdepartment_id:"",dialogFormSubdepartment:!1,datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",dialogForm:!1,pagination:{current:1,total:0,per_page:10},Model:"Departments"},Object(C.a)(t,"options",{}),Object(C.a)(t,"endpoint","departments"),Object(C.a)(t,"search",""),Object(C.a)(t,"snackbar",!1),Object(C.a)(t,"dialog",!1),Object(C.a)(t,"ids",[]),Object(C.a)(t,"loading",!1),Object(C.a)(t,"total",0),Object(C.a)(t,"editedIndex",-1),Object(C.a)(t,"editedItem",{name:"",email:"",password:"",password_confirmation:""}),Object(C.a)(t,"defaultItem",{name:"",email:"",password:"",password_confirmation:""}),Object(C.a)(t,"response",""),Object(C.a)(t,"data",[]),Object(C.a)(t,"errors",[]),Object(C.a)(t,"headers_table",[{text:"Department Code",align:"left",sortable:!0,value:"id",key:"id",filterable:!0},{key:"name",text:"Department",align:"left",sortable:!0,value:"name",filterable:!0},{text:"Designations",align:"left",sortable:!1,value:"designations"},{text:"Options",align:"left",sortable:!1,value:"options"}]),Object(C.a)(t,"branchesList",[]),t},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(t){t||this.close(),this.errors=[],this.search=""}},created:function(){this.loading=!0,this.getDataFromApi(),this.getbranchesList()},methods:{datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},can:function(t){return this.$pagePermission.can(t,this)},newItem:function(){this.dialogForm=!0},newSubDepartment:function(){this.dialogFormSubdepartment=!0},newDesignation:function(){this.dialogFormDesignation=!0},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},onPageChange:function(){this.getDataFromApi()},applyFilters:function(){this.getDataFromApi(),this.from_menu_filter=!1,this.to_menu_filter=!1},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getbranchesList:function(){var t=this;this.payloadOptions={params:{company_id:this.$auth.user.company_id}},this.$axios.get("branches_list",this.payloadOptions).then((function(e){var data=e.data;t.branchesList=data,t.$auth.user.branch_id?t.branch_id=t.$auth.user.branch_id:t.branch_id=""}))},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==e&&(e=this.endpoint),this.loading=!0,this.loading=!0;var o=this.options,l=o.sortBy,c=o.sortDesc,d=o.page,h=o.itemsPerPage,m=l?l[0]:"",f=c?c[0]:"";this.payloadOptions={params:$({page:d,sortBy:m,sortDesc:f,per_page:h,company_id:this.$auth.user.company_id},this.filters)},""!=n&&(this.payloadOptions.params[n]=r),this.$axios.get("".concat(e,"?page=").concat(d),this.payloadOptions).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;t.data=data.data,t.departments=data.data,t.pagination.current=data.current_page,t.pagination.total=data.last_page,t.loading=!1,t.totalRowsCount=data.total}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))},editItem:function(t){this.editedIndex=this.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialogForm=!0},gotoSubdepartments:function(t){this.$router.push("/sub-department?id=".concat(t.id))},delteteSelectedRecords:function(){var t=this,e=this.ids.map((function(t){return t.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:e}).then((function(e){e.data.status?(t.getDataFromApi(),t.snackbar=e.data.status,t.ids=[],t.response="Selected records has been deleted"):t.errors=e.data.errors})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(n){var data=n.data,r=e.data.indexOf(t);e.data.splice(r,1),e.snackbar=data.status,e.response=data.message})).catch((function(t){return console.log(t)}))},close:function(){var t=this;this.dialogForm=!1,this.dialogFormSubdepartment=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},savenewDesignation:function(){var t=this,e={name:this.new_Designation_name,department_id:this.new_designation_department_id,company_id:this.$auth.user.company_id};this.$axios.post("designation",e).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.dialogForm=!1,t.dialogFormDesignation=!1,t.close(),t.errors=[],t.search="",t.new_Designation_name="",t.new_designation_department_id=""):t.errors=data.errors})).catch((function(t){return console.log(t)}))},saveSubDepartment:function(){var t=this,e={name:this.New_sub_DepartmentName,department_id:this.Newdepartment_id,company_id:this.$auth.user.company_id};this.$axios.post("sub-departments",e).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.errors=[],t.search="",t.New_sub_DepartmentName="",t.Newdepartment_id="",his.dialogFormSubdepartment=!1):t.errors=data.errors})).catch((function(t){return console.log(t)}))},save:function(){var t=this,e={name:this.editedItem.name,company_id:this.$auth.user.company_id,branch_id:0};this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,e).then((function(e){var data=e.data;if(data.status){t.data.findIndex((function(e){return e.id==t.editedItem.id}));t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.dialogForm=!1}else t.errors=data.errors})).catch((function(t){return console.log(t)})):this.$axios.post(this.endpoint,e).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.errors=[],t.search="",t.dialogForm=!1):t.errors=data.errors})).catch((function(t){return console.log(t)}))}}},P=N,A=n(116),component=Object(A.a)(P,(function(){var t=this,e=t._self._c;return t.can("department_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(D.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e("div",[e(S.a,[e(f.a,{attrs:{persistent:"",fullscreen:!1,width:"500px"},model:{value:t.dialogFormDesignation,callback:function(e){t.dialogFormDesignation=e},expression:"dialogFormDesignation"}},[e(l.a,[e(c.c,{staticClass:"popup_background",attrs:{dense:""}},[e("span",[t._v("New Designation")]),t._v(" "),e(w.a),t._v(" "),e(v.a,{attrs:{outlined:""},on:{click:function(e){t.dialogFormDesignation=!1}}},[t._v("\n              mdi mdi-close-circle\n            ")])],1),t._v(" "),e(c.b,[e(h.a,[e(S.a,{staticClass:"mt-2"},[e(d.a,{attrs:{cols:"12"}},[e(k.a,{attrs:{placeholder:"Designation",outlined:"",dense:""},model:{value:t.new_Designation_name,callback:function(e){t.new_Designation_name=e},expression:"new_Designation_name"}}),t._v(" "),t.errors&&t.errors.name?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.name[0]))]):t._e()],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{items:t.departments,"item-text":"name","item-value":"id",placeholder:"Select Departments",outlined:"",dense:""},model:{value:t.new_designation_department_id,callback:function(e){t.new_designation_department_id=e},expression:"new_designation_department_id"}}),t._v(" "),t.errors&&t.errors.department_id?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.department_id[0]))]):t._e()],1),t._v(" "),e(c.a,[e(d.a,{staticStyle:{padding:"0px"},attrs:{md:"6",lg:"6"}}),t._v(" "),e(d.a,{staticClass:"text-right",staticStyle:{padding:"0px"},attrs:{md:"6",lg:"6"}},[e(o.a,{staticClass:"primary",on:{click:t.savenewDesignation}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),e(f.a,{attrs:{persistent:"",fullscreen:!1,width:"500px"},model:{value:t.dialogFormSubdepartment,callback:function(e){t.dialogFormSubdepartment=e},expression:"dialogFormSubdepartment"}},[e(l.a,[e(c.c,{staticClass:"popup_background",attrs:{dense:""}},[e("span",[t._v("New Sub Department")]),t._v(" "),e(w.a),t._v(" "),e(v.a,{attrs:{outlined:""},on:{click:function(e){t.dialogFormSubdepartment=!1}}},[t._v("\n              mdi mdi-close-circle\n            ")])],1),t._v(" "),e(c.b,[e(h.a,[e(S.a,{staticClass:"mt-2"},[e(d.a,{attrs:{cols:"12"}},[e(k.a,{attrs:{placeholder:"Sub Department",outlined:"",dense:""},model:{value:t.New_sub_DepartmentName,callback:function(e){t.New_sub_DepartmentName=e},expression:"New_sub_DepartmentName"}}),t._v(" "),t.errors&&t.errors.name?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.name[0]))]):t._e()],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{items:t.departments,"item-text":"name","item-value":"id",placeholder:"Select Departments",outlined:"",dense:""},model:{value:t.Newdepartment_id,callback:function(e){t.Newdepartment_id=e},expression:"Newdepartment_id"}}),t._v(" "),t.errors&&t.errors.department_id?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.department_id[0]))]):t._e()],1),t._v(" "),e(c.a,[e(d.a,{staticStyle:{padding:"0px"},attrs:{md:"6",lg:"6"}}),t._v(" "),e(d.a,{staticClass:"text-right",staticStyle:{padding:"0px"},attrs:{md:"6",lg:"6"}},[e(o.a,{staticClass:"primary",on:{click:t.saveSubDepartment}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),e(f.a,{attrs:{persistent:"",fullscreen:!1,width:"350px"},model:{value:t.dialogForm,callback:function(e){t.dialogForm=e},expression:"dialogForm"}},[e(l.a,[e(c.c,{staticClass:"popup_background",attrs:{dense:""}},[e("span",[t._v(t._s(t.formTitle)+" "+t._s(t.Model))]),t._v(" "),e(w.a),t._v(" "),e(v.a,{attrs:{outlined:""},on:{click:function(e){t.dialogForm=!1}}},[t._v("\n              mdi mdi-close-circle\n            ")])],1),t._v(" "),e(c.b,[e(h.a,[e(S.a,{},[e(d.a,{staticClass:"pt-0",attrs:{md:"12",sm:"12",cols:"12",small:"",dense:""}},[e(k.a,{attrs:{label:"Department Name",dense:"",outlined:"","hide-details":!t.errors.name,type:"text",error:t.errors.name,"error-messages":t.errors&&t.errors.name?t.errors.name[0]:"",placeholder:"Department Name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),e(c.a,[e(w.a),t._v(" "),e(d.a,{staticClass:"pa-0 text-right",attrs:{md:"12",sm:"12",cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),e(d.a,{attrs:{md:"12",lg:"12"}},[e(l.a,{staticClass:"mb-5 mt-2 rounded-md",attrs:{elevation:"0"}},[e(O.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[e(F.b,[e("span",[t._v(" "+t._s(t.Model)+" List")])]),t._v(" "),e(o.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"},on:{click:function(e){return t.clearFilters()}}},[e(v.a,{staticClass:"ml-2",attrs:{dark:""}},[t._v("mdi mdi-reload")])],1),t._v(" "),e(o.a,{attrs:{"x-small":"",ripple:!1,text:"",title:"Filter"},on:{click:t.toggleFilter}},[e(v.a,{attrs:{dark:"",white:""}},[t._v("mdi-filter")])],1),t._v(" "),e(w.a),t._v(" "),t.can("department_create")?e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.newItem}},[t._v("\n              "+t._s(t.Model)+" +\n            ")]):t._e()],1),t._v(" "),e(D.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var r=n.attrs;return[e(o.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",r,!1),[t._v("\n                Close\n              ")])]}}],null,!1,3572811048),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n            "+t._s(t.snackText)+"\n\n            ")]),t._v(" "),e(m.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"header",fn:function(n){var r=n.props.headers;return[t.isFilter?e("tr",t._l(r,(function(header){return e("td",{key:header.text},[e(h.a,[header.filterable&&!header.filterSpecial?e(k.a,{attrs:{clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{input:function(e){return t.applyFilters(header.key,e)}},model:{value:t.filters[header.key],callback:function(e){t.$set(t.filters,header.key,e)},expression:"filters[header.key]"}}):t._e()],1)],1)})),0):t._e()]}},{key:"item.id",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(t.caps(n.id))+"\n            ")]}},{key:"item.name",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(t.caps(n.name))+"\n            ")]}},{key:"item.branch_name",fn:function(e){var n=e.item;return[t._v("\n              "+t._s(n.branch&&n.branch.branch_name||"---")+"\n            ")]}},{key:"item.sub_dep.name",fn:function(n){var r=n.item;return[t._l(r.children.slice(0,3),(function(n,r){return e("span",{key:r},[e("div",{staticClass:"ma-1",attrs:{small:""}},[t._v("\n                  "+t._s(t.caps(n.name))+"\n                ")]),t._v(" "),e("br")])})),t._v(" "),r.children.length>3?e("div",{staticClass:"ma-1",staticStyle:{color:"black"},attrs:{small:""},on:{click:function(e){return t.gotoSubdepartments(r)}}},[t._v("\n                View all..\n              ")]):t._e()]}},{key:"item.designations",fn:function(n){var r=n.item;return t._l(r.designations.slice(0,3),(function(n,r){return e("span",{key:r},[e("div",{staticClass:"ma-1"},[t._v("\n                  "+t._s(t.caps(n.name))+"\n                ")]),t._v(" "),e("br")])}))}},{key:"item.options",fn:function(n){var r=n.item;return[e(I.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),r),[e(v.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(_.a,{attrs:{width:"120",dense:""}},[t.can("department_view")?e(x.a,{on:{click:function(e){return t.gotoSubdepartments(r)}}},[e(y.c,{staticStyle:{cursor:"pointer"}},[e(v.a,{attrs:{color:"primary",small:""}},[t._v(" mdi-view-list ")]),t._v("\n                      View\n                    ")],1)],1):t._e(),t._v(" "),t.can("department_edit")?e(x.a,{on:{click:function(e){return t.editItem(r)}}},[e(y.c,{staticStyle:{cursor:"pointer"}},[e(v.a,{attrs:{color:"secondary",small:""}},[t._v(" mdi-pencil ")]),t._v("\n                      Edit\n                    ")],1)],1):t._e(),t._v(" "),t.can("department_delete")?e(x.a,{on:{click:function(e){return t.deleteItem(r)}}},[e(y.c,{staticStyle:{cursor:"pointer"}},[e(v.a,{attrs:{color:"error",small:""}},[t._v(" mdi-delete ")]),t._v("\n                      Delete\n                    ")],1)],1):t._e()],1)],1)]}}],null,!1,2382564732)})],1)],1)],1)],1)]):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(879).default})},855:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(96),o=n(0),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a},879:function(t,e,n){"use strict";n.r(e);var r=n(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},883:function(t,e,n){var content=n(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},t.exports=r},893:function(t,e,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(883),n(892)),l=n(214),c=n(65),d=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})}}]);