(window.webpackJsonp=window.webpackJsonp||[]).push([[371,182,191,253],{1276:function(t,e,o){var content=o(1430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("23fc60e0",content,!0,{sourceMap:!1})},1277:function(t,e,o){var content=o(1432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("68159522",content,!0,{sourceMap:!1})},1429:function(t,e,o){"use strict";o(1276)},1430:function(t,e,o){var n=o(21)((function(i){return i[1]}));n.push([t.i,"td[data-v-4db9962f],th[data-v-4db9962f]{border:1px solid #ddd;padding-left:5px}",""]),n.locals={},t.exports=n},1431:function(t,e,o){"use strict";o(1277)},1432:function(t,e,o){var n=o(21)((function(i){return i[1]}));n.push([t.i,'*[data-v-4db9962f]{box-sizing:border-box}body>div[data-v-4db9962f]{display:flex;font-family:"Roboto",sans-serif;min-height:100vh}.table_responsive[data-v-4db9962f]{background-color:hsla(0,0%,94%,.2);border:1px solid #00bcd4;border-radius:4px;margin:auto;max-width:900px;overflow:auto;padding:15px}table[data-v-4db9962f]{border-collapse:collapse;color:#444;font-size:13px;white-space:nowrap;width:100%}table>thead[data-v-4db9962f]{background-color:#00bcd4;color:#fff}table>thead th[data-v-4db9962f]{padding:15px}table td[data-v-4db9962f],table th[data-v-4db9962f]{border:1px solid rgba(0,0,0,.09);padding:10px 15px}table>tbody>tr>td>img[data-v-4db9962f]{border:4px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.2);display:inline-block;height:60px;-o-object-fit:cover;object-fit:cover;width:60px}.action_btn[data-v-4db9962f]{display:flex;gap:10px;justify-content:center}.action_btn>a[data-v-4db9962f]{background:#fff;border:1px solid;border-radius:3px;color:#444;display:inline-block;font-weight:700;padding:7px 20px;-webkit-text-decoration:none;text-decoration:none;transition:.3s ease-in-out}.action_btn>a[data-v-4db9962f]:first-child{border-color:#26a69a}.action_btn>a[data-v-4db9962f]:nth-child(2){border-color:orange}.action_btn>a[data-v-4db9962f]:hover{box-shadow:0 3px 8px rgba(0,0,0,.2)}table>tbody>tr[data-v-4db9962f]{background-color:#fff;transition:.3s ease-in-out}table>tbody>tr[data-v-4db9962f]:nth-child(2n){background-color:#eee}table>tbody>tr[data-v-4db9962f]:hover{filter:drop-shadow(0 2px 6px rgba(0,0,0,.13333))}',""]),n.locals={},t.exports=n},1584:function(t,e,o){"use strict";o.r(e);var n=o(114),r=o(133),c=o(87),d=o(516),l=o(147),f=o(326),v=o(204),h=o(60),_=o(863),m=o(515),x=o(873),y=o(349),k=(o(216),o(35),{data:function(){return{model:"Upload Users",color:"primary",endpoint:"report_notification",e1:1,menu2:!1,preloader:!1,loading:!1,response:!1,id:"",snackbar:!1,to:"",cc:"",bcc:"",payload:{report_types:[],mediums:[],frequency:null,time:null,tos:[],ccs:[],bccs:[]},data:[],options:{},errors:[]}},created:function(){var t,e,o;this.preloader=!1,this.id=null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(o=e.company)||void 0===o?void 0:o.id,this.getDataFromApi()},methods:{can:function(t){return this.$pagePermission.can(t,this)},editItem:function(t){this.$router.push("/report_notifications/"+t.id)},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(t){var data=t.data;data.status?(e.snackbar=data.status,e.response=data.message,e.getDataFromApi()):e.errors=data.errors})).catch((function(t){return console.log(t)}))},add_to:function(){this.payload.tos.push(this.to),this.to=""},add_cc:function(){this.payload.ccs.push(this.cc),this.cc=""},add_bcc:function(){this.payload.bccs.push(this.bcc),this.bcc=""},deleteTO:function(i){this.payload.tos.splice(i,1)},deleteCC:function(i){this.payload.ccs.splice(i,1)},deleteBCC:function(i){this.payload.bccs.splice(i,1)},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var o=this.options,n=o.page,r={params:{per_page:o.itemsPerPage,company_id:this.$auth.user.company_id,role_type:"employee"}};this.$axios.get("".concat(e,"?page=").concat(n),r).then((function(e){var data=e.data;t.data=data.data,console.log("🚀 ~ file: index.vue ~ line 180 ~ this.$axios.get ~ this.data",t.data),t.total=data.total,t.loading=!1}))}}}),w=k,C=(o(1429),o(1431),o(116)),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;return t.can("setting_company_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(x.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),t.preloader?e("Preloader"):e("div",[e(m.a,{staticClass:"mt-5"},[e(d.a,{attrs:{cols:"3"}},[e("h3",[t._v(t._s(t.model))]),t._v(" "),e("div",[t._v("Dashboard / "+t._s(t.model))])]),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(r.a,{staticClass:"px-5 pb-5",attrs:{elevation:"0"}},[e(c.c,[e("label",{staticClass:"col-form-label"},[e("b",[t._v(t._s(t.model)+" List ")])]),t._v(" "),e(y.a),t._v(" "),e(n.a,{attrs:{color:"background",dark:"",to:"/device_management/create"}},[e(l.a,[t._v("mdi-plus")]),t._v(" Add "+t._s(t.model)+"\n            ")],1)],1),t._v(" "),e(c.c,[e("table",{staticStyle:{width:"100%"}},[e("tr",[e("td",[e("label",{staticClass:"col-form-label"},[e("b",[t._v("Device")])])]),t._v(" "),e("td",{staticClass:"text-right"},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("Action")])])])]),t._v(" "),t._l(t.data,(function(o,r){return e("tr",{key:r},[e("td",{staticClass:"col-form-label"},[t._v("Device")]),t._v(" "),e("td",[e(_.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[e("div",{staticClass:"text-right"},[e(n.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",c,!1),r),[e(l.a,[t._v("mdi-dots-vertical")])],1)],1)]}}],null,!0)},[t._v(" "),e(f.a,{attrs:{width:"120",dense:""}},[e(v.a,{on:{click:function(e){return t.editItem(o)}}},[e(h.c,{staticStyle:{cursor:"pointer"}},[e(l.a,{attrs:{color:"secondary",small:""}},[t._v("\n                            mdi-pencil\n                          ")]),t._v("\n                          Edit\n                        ")],1)],1),t._v(" "),e(v.a,{on:{click:function(e){return t.deleteItem(o)}}},[e(h.c,{staticStyle:{cursor:"pointer"}},[e(l.a,{attrs:{color:"error",small:""}},[t._v(" mdi-delete ")]),t._v("\n                          Delete\n                        ")],1)],1)],1)],1)],1)])}))],2)])],1)],1)],1)],1)],1):e("NoAccess")}),[],!1,null,"4db9962f",null);e.default=component.exports;installComponents(component,{Preloader:o(896).default,NoAccess:o(881).default})},881:function(t,e,o){"use strict";o.r(e);var n=o(116),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},896:function(t,e,o){"use strict";o.r(e);var n=o(212),r=o(116),component=Object(r.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(n.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);