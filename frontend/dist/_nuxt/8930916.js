(window.webpackJsonp=window.webpackJsonp||[]).push([[284,180,199],{1263:function(t,e,n){var content=n(1413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6505a3bf",content,!0,{sourceMap:!1})},1412:function(t,e,n){"use strict";n(1263)},1413:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,'table[data-v-59cdf18d]{font-family:arial,sans-serif}tr[data-v-59cdf18d]:nth-child(2n){background-color:#e9e9e9}td[data-v-59cdf18d],th[data-v-59cdf18d]{border:1px solid #ddd;padding:5px}.chk-align[data-v-59cdf18d]{margin-left:98px!important;margin-top:8px!important;text-align:center!important}*[data-v-59cdf18d]{box-sizing:border-box}body>div[data-v-59cdf18d]{display:flex;font-family:"Roboto",sans-serif;min-height:100vh}.table_responsive[data-v-59cdf18d]{background-color:hsla(0,0%,94%,.2);border:1px solid #00bcd4;border-radius:4px;margin:auto;max-width:900px;overflow:auto;padding:15px}table[data-v-59cdf18d]{border-collapse:collapse;color:#444;font-size:13px;white-space:nowrap;width:100%}table>thead[data-v-59cdf18d]{background-color:#00bcd4;color:#fff}table>thead th[data-v-59cdf18d]{padding:15px}table td[data-v-59cdf18d],table th[data-v-59cdf18d]{border:1px solid rgba(0,0,0,.09);padding:10px 15px}table>tbody>tr>td>img[data-v-59cdf18d]{border:4px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.2);display:inline-block;height:60px;-o-object-fit:cover;object-fit:cover;width:60px}.action_btn[data-v-59cdf18d]{display:flex;gap:10px;justify-content:center}.action_btn>a[data-v-59cdf18d]{background:#fff;border:1px solid;border-radius:3px;color:#444;display:inline-block;font-weight:700;padding:7px 20px;-webkit-text-decoration:none;text-decoration:none;transition:.3s ease-in-out}.action_btn>a[data-v-59cdf18d]:first-child{border-color:#26a69a}.action_btn>a[data-v-59cdf18d]:nth-child(2){border-color:orange}.action_btn>a[data-v-59cdf18d]:hover{box-shadow:0 3px 8px rgba(0,0,0,.2)}table>tbody>tr[data-v-59cdf18d]{background-color:#fff;transition:.3s ease-in-out}table>tbody>tr[data-v-59cdf18d]:nth-child(2n){background-color:#eee}table>tbody>tr[data-v-59cdf18d]:hover{filter:drop-shadow(0 2px 6px rgba(0,0,0,.13333))}',""]),o.locals={},t.exports=o},1568:function(t,e,n){"use strict";n.r(e);var o=n(114),r=n(133),c=n(87),d=n(518),l=n(516),f=n(147),h=n(515),v=n(873),m=n(349),_=n(96),x=n(856),y=n(852),k=(n(37),n(33),n(266),n(58),n(35),n(55),n(80),{components:{Back:n(967).default},data:function(){return{panel:[0,1,2],readonly:!1,Module:"Assign Permission",options:{},endpoint:"assign-permission",search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,headers:[],editedIndex:-1,editedItem:{name:""},defaultItem:{name:""},response:"",data:[],errors:[],permission_ids:[],permissions:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New ".concat(this.Module):"Edit ".concat(this.Module)}},watch:{dialog:function(t){t||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi(),this.getHeaders()},deep:!0}},created:function(){var t=this;this.loading=!0,this.getDataFromApi(),this.getHeaders(),this.$axios.get("dropDownList").then((function(e){var data=e.data;t.permissions=data.data})).catch((function(t){return console.log(t)}))},methods:{can:function(t){return this.$pagePermission.can(t,this)},capsTitle:function(t){return t.replace(/[^a-z]/g," ").replace(/\b\w/g,(function(t){return t.toUpperCase()}))},getHeaders:function(){this.headers=[{text:"Role",align:"left",sortable:!1,value:"role.name"},{text:"Permissions",align:"left",sortable:!1,value:"permission_names"},{text:"Actions",align:"center",value:"action",sortable:!1}]},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.options,o=(n.page,{params:{per_page:n.itemsPerPage,company_id:this.$auth.user.company_id}});this.$axios.get("".concat(e),o).then((function(e){var data=e.data;t.data=data,t.loading=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))},save:function(t){var e=this,n={role_id:t.role_id,permission_ids:t.permission_ids};this.$axios.put("assign-permission/"+t.id,n).then((function(t){t.data;e.response="Permissions has been assigned",e.snackbar=!0,setTimeout((function(){return e.$router.push("/assign_permission")}),2e3)}))},editItem:function(t){this.$router.push("assign_permission/".concat(t.id))},delteteSelectedRecords:function(){var t=this,e=this.ids.map((function(t){return t.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:e}).then((function(e){e.data.status?(t.getDataFromApi(),t.snackbar=e.data.status,t.ids=[],t.response="Selected records has been deleted"):t.errors=e.data.errors})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(t){var data=t.data;e.getDataFromApi(),e.snackbar=data.status,e.response=data.message})).catch((function(t){return console.log(t)}))}}}),w=k,A=(n(1412),n(116)),component=Object(A.a)(w,(function(){var t=this,e=t._self._c;return t.can("assign_permission_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(v.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(h.a,[e(l.a,{attrs:{md:"12"}},[e("Back",{attrs:{color:"primary"}}),t._v(" "),t.data.length?t._e():e(o.a,{staticClass:"primary",attrs:{to:"/assign_permission/create"}},[t._v("\n        Assign Permission(s)\n      ")]),t._v(" "),t._l(t.data,(function(n,l){return e(r.a,{key:l,staticClass:"mb-5 mt-2",attrs:{elevation:"0"}},[e(_.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(x.b,[e("span",[t._v("\n              "+t._s(n.role&&t.capsTitle(n.role.name)))])]),t._v(" "),e(m.a),t._v(" "),e(y.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({attrs:{"x-small":"",ripple:!1,text:"",to:"/assign_permission/create"}},"v-btn",c,!1),r),[e(f.a,{attrs:{dark:"",white:""},on:{click:function(e){return t.clearFilters()}}},[t._v("mdi-plus-circle")])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v(t._s(t.Module)+" ")])])],1),t._v(" "),e("table",{staticClass:"mb-15"},[e("tr",{staticStyle:{"text-align":"center"}},[e("th",{staticStyle:{width:"600px","text-align":"center",padding:"5px 0 !important"}},[t._v("\n              Module\n            ")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Access")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("View")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Create")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Edit")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Delete")])]),t._v(" "),t._l(t.permissions,(function(o,r){return e("tr",{key:r},[e("th",{staticClass:"ps-3"},[t._v(t._s(t.capsTitle(r)))]),t._v(" "),t._l(o,(function(o,r){return e("th",{key:r,staticStyle:{"text-align":"center !important"}},[e(d.a,{staticClass:"pt-0 py-1 chk-align",attrs:{value:o.id,"hide-details":!0},model:{value:n.permission_ids,callback:function(e){t.$set(n,"permission_ids",e)},expression:"item.permission_ids"}})],1)}))],2)}))],2),t._v(" "),e(c.a,[t.can("assign_permission_delete")?e(o.a,{staticClass:"mx-1 my-4",attrs:{dark:"",small:"",color:"error"},on:{click:function(e){return t.deleteItem(n)}}},[t._v("\n            Delete\n          ")]):t._e(),t._v(" "),e(m.a),t._v(" "),t.can("assign_permission_edit")?e(o.a,{staticClass:"mx-1 my-4",attrs:{dark:"",small:"",color:"primary"},on:{click:function(e){return t.save(n)}}},[t._v("\n            Submit\n          ")]):t._e()],1)],1)}))],2)],1)],1):e("NoAccess")}),[],!1,null,"59cdf18d",null);e.default=component.exports;installComponents(component,{NoAccess:n(881).default})},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return c}));var o=n(96),r=n(0),c=Object(r.k)("v-toolbar__title"),d=Object(r.k)("v-toolbar__items");o.a},881:function(t,e,n){"use strict";n.r(e);var o=n(116),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},967:function(t,e,n){"use strict";n.r(e);var o={props:["color"],methods:{goBack:function(){window.history.back()}}},r=n(116),component=Object(r.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports}}]);