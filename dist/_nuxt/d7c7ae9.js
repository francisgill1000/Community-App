(window.webpackJsonp=window.webpackJsonp||[]).push([[8,185,193],{1259:function(e,t,r){"use strict";r.r(t);var o=r(114),n=r(133),l=r(1556),c=r(147),d=r(326),m=r(204),_=r(60),f=r(862),v=r(872),y=r(349),x=r(96),h=r(855),k=(r(12),r(14),r(13),r(6),r(17),r(11),r(18),r(23)),C=r(3);r(35),r(88);function D(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={props:["label","type"],data:function(){var e;return e={loading:!0,totalRowsCount:0,color:"background",response:"",snackbar:!1,options:{},endpoint:"card"},Object(C.a)(e,"response",""),Object(C.a)(e,"data",[]),Object(C.a)(e,"headers",[{text:"Card Name",align:"left",sortable:!0,key:"name",value:"name",filterable:!0,filterSpecial:!1},{text:"Card Number",align:"left",sortable:!0,key:"number",value:"number",filterable:!0,filterSpecial:!1},{text:"Card System Number",align:"left",sortable:!0,key:"system_number",value:"system_number",filterable:!0,filterSpecial:!1},{text:"Issue Date",align:"left",sortable:!0,key:"issue_date",value:"issue_date",filterable:!0,filterSpecial:!1},{text:"Expire Date",align:"left",sortable:!0,key:"expire_date",value:"expire_date",filterable:!0,filterSpecial:!1},{text:"Details",align:"left",sortable:!1,key:"options",value:"options"}]),e},created:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!1,e.getDataFromApi();case 2:case"end":return t.stop()}}),t)})))()},mounted:function(){},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{handleSuccessResponse:function(e){this.snackbar=!0,this.response=e,this.getDataFromApi()},can:function(e){return this.$pagePermission.can(e,this)},getDataFromApi:function(){var e=this,t=this.options,r=t.sortBy,o=t.sortDesc,n=t.page,l=t.itemsPerPage,c={params:w(w({page:n,sortBy:r?r[0]:"",sortDesc:o?o[0]:"",per_page:l,company_id:this.$auth.user.company_id},this.filters),{},{type:this.type})};this.$axios.get(this.endpoint,c).then((function(t){var data=t.data;e.data=data.data,e.totalRowsCount=data.total,e.loading=!1}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("".concat(this.endpoint,"/").concat(e.id)).then((function(e){e.data;t.getDataFromApi(),t.snackbar=!0,t.response="Record deleted successfully"})).catch((function(e){return console.log(e)}))}}},S=r(116),component=Object(S.a)(O,(function(){var e=this,t=e._self._c;return e.can("employee_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(v.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.loading?t("Preloader"):t("div",[e.can("employee_view")?t("div",[t(n.a,{attrs:{elevation:"0"}},[t(x.a,{staticClass:"mb-2",attrs:{dense:"",flat:""}},[t(h.b,[t("span",[e._v(e._s(e.label)+"s")])]),e._v(" "),t("span",[t(o.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(c.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:e.getDataFromApi}},[e._v("mdi mdi-reload")])],1)],1),e._v(" "),t(y.a),e._v(" "),t("CommunityCardCreate",{attrs:{label:e.label,type:e.type,buttonVisible:!0},on:{success:e.handleSuccessResponse}})],1),e._v(" "),t(l.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.data,"model-value":"data.id",loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.options",fn:function(r){var n=r.item;return[t(f.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,l=r.attrs;return[t(o.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),n),[t(c.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),t(d.a,{attrs:{width:"120",dense:""}},[t(m.a,[t(_.c,{staticStyle:{cursor:"pointer"}},[t("CommunityCardEdit",{attrs:{label:e.label,item:n},on:{success:e.handleSuccessResponse}})],1)],1),e._v(" "),t(m.a,{on:{click:function(t){return e.deleteItem(n)}}},[t(_.c,{staticStyle:{cursor:"pointer"}},[t(c.a,{attrs:{color:"error",small:""}},[e._v(" mdi-delete ")]),e._v("\n                    Delete\n                  ")],1)],1)],1)],1)]}}],null,!1,1871939721)})],1)],1):e._e()])],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CommunityCardCreate:r(1367).default,CommunityCardEdit:r(1368).default,Preloader:r(897).default,NoAccess:r(880).default})},1367:function(e,t,r){"use strict";r.r(t);var o=r(114),n=r(133),l=r(87),c=r(518),d=r(875),m=r(1557),_=r(350),f=r(1019),v=r(147),y=r(862),x=r(517),h=r(349),k=r(214),C=r(96),D=(r(37),r(6),r(72),r(28),{props:["label","buttonVisible","type"],data:function(){return{endpoint:"card",payload:{},errors:[],loading:!1,response:null,DialogBox:!1,issue_date:!1,expire_date:!1}},mounted:function(){this.payload.type=this.type},methods:{submit:function(){var e=this;this.payload.number=Number(this.payload.number).toString(),this.payload.system_number=this.payload.number,this.payload.company_id=this.$auth.user.company_id,this.$axios.post(this.endpoint,this.payload).then((function(t){t.data;e.errors=[],e.$emit("success",e.label+" inserted successfully"),e.DialogBox=!1})).catch((function(t){var r=t.response;if(!r)return!1;var o=r.status,data=r.data,n=r.statusText;o&&422==o?e.errors=data.errors:e.response=n}))}}}),w=r(116),component=Object(w.a)(D,(function(){var e=this,t=e._self._c;return t(_.a,{attrs:{persistent:"",width:"700"},scopedSlots:e._u([e.buttonVisible?{key:"activator",fn:function(r){var n=r.on,l=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",l,!1),n),[t(o.a,{staticClass:"primary",attrs:{dense:"",small:"",text:"",title:"Create Tanent"}},[e._v("\n        Create "+e._s(e.label)+"\n        "),t(v.a,{attrs:{right:"",dark:""}},[e._v("mdi-plus-circle-outline")])],1)],1)]}}:null],null,!0),model:{value:e.DialogBox,callback:function(t){e.DialogBox=t},expression:"DialogBox"}},[e._v(" "),t(n.a,[t(C.a,{staticClass:"popup_background",attrs:{flat:"",dense:""}},[e._v("\n      Create "+e._s(e.label)+"\n      "),t(h.a),e._v(" "),t("span",[t(v.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n          mdi-close-circle-outline")])],1)],1),e._v(" "),t(d.a,[t(x.a,[t(c.a,{attrs:{cols:"6"}},[t(k.a,{staticClass:"text-center",attrs:{label:"Card Name",dense:"",outlined:"","hide-details":!e.errors.name,error:e.errors.name,"error-messages":e.errors&&e.errors.name?e.errors.name[0]:""},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(k.a,{staticClass:"text-center",attrs:{"append-icon":"mdi-credit-card-scan-outline",label:"Card Number",dense:"",outlined:"","hide-details":!e.errors.number,error:e.errors.number,"error-messages":e.errors&&e.errors.number?e.errors.number[0]:""},model:{value:e.payload.number,callback:function(t){e.$set(e.payload,"number",t)},expression:"payload.number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(y.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t(k.a,e._g(e._b({attrs:{label:"Issue Date","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.issue_date,"error-messages":e.errors&&e.errors.issue_date?e.errors.issue_date[0]:""},model:{value:e.payload.issue_date,callback:function(t){e.$set(e.payload,"issue_date",t)},expression:"payload.issue_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.issue_date,callback:function(t){e.issue_date=t},expression:"issue_date"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.issue_date=!1}},model:{value:e.payload.issue_date,callback:function(t){e.$set(e.payload,"issue_date",t)},expression:"payload.issue_date"}})],1)],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(y.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t(k.a,e._g(e._b({attrs:{label:"Expire Date","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.expire_date,"error-messages":e.errors&&e.errors.expire_date?e.errors.expire_date[0]:""},model:{value:e.payload.expire_date,callback:function(t){e.$set(e.payload,"expire_date",t)},expression:"payload.expire_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.expire_date,callback:function(t){e.expire_date=t},expression:"expire_date"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.expire_date=!1}},model:{value:e.payload.expire_date,callback:function(t){e.$set(e.payload,"expire_date",t)},expression:"payload.expire_date"}})],1)],1)],1)],1),e._v(" "),t(f.a),e._v(" "),t(l.a,[t(h.a),e._v(" "),t("div",{staticClass:"text-right"},[t(o.a,{attrs:{small:"",color:"grey white--text"},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n          Close\n        ")]),e._v(" "),t(o.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},1368:function(e,t,r){"use strict";r.r(t);var o=r(114),n=r(133),l=r(87),c=r(518),d=r(875),m=r(1557),_=r(350),f=r(1019),v=r(147),y=r(862),x=r(517),h=r(349),k=r(214),C=r(96),D=(r(37),r(6),r(72),r(28),{props:["label","item"],data:function(){return{payload:{},endpoint:"card",DialogBox:!1,loading:!1,errors:[]}},created:function(){this.payload=this.item},methods:{submit:function(){var e=this;this.payload.number=Number(this.payload.number).toString(),this.payload.system_number=this.payload.number,this.$axios.put(this.endpoint+"/"+this.payload.id,this.payload).then((function(t){t.data;e.errors=[],e.$emit("success","Visitor Card updated successfully"),e.DialogBox=!1})).catch((function(t){var r=t.response;if(!r)return!1;var o=r.status,data=r.data,n=r.statusText;o&&422==o?e.errors=data.errors:e.response=n}))}}}),w=r(116),component=Object(w.a)(D,(function(){var e=this,t=e._self._c;return t(_.a,{attrs:{persistent:"",width:"800"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",n,!1),o),[t(v.a,{attrs:{color:"black",small:""}},[e._v("mdi-pencil")]),e._v("\n      Edit\n    ")],1)]}}]),model:{value:e.DialogBox,callback:function(t){e.DialogBox=t},expression:"DialogBox"}},[e._v(" "),t(n.a,[t(C.a,{staticClass:"popup_background",attrs:{flat:"",dense:""}},[e._v("\n      Edit Card Number\n\n      "),t(h.a),e._v(" "),t("span",[t(v.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n          mdi mdi-close-circle-outline")])],1)],1),e._v(" "),t(d.a,[t(x.a,[t(c.a,{attrs:{cols:"6"}},[t(k.a,{staticClass:"text-center",attrs:{label:"Card Name",dense:"",outlined:"","hide-details":!e.errors.name,error:e.errors.name,"error-messages":e.errors&&e.errors.name?e.errors.name[0]:""},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(k.a,{staticClass:"text-center",attrs:{"append-icon":"mdi-credit-card-scan-outline",label:"Card Number",dense:"",outlined:"","hide-details":!e.errors.number,error:e.errors.number,"error-messages":e.errors&&e.errors.number?e.errors.number[0]:""},model:{value:e.payload.number,callback:function(t){e.$set(e.payload,"number",t)},expression:"payload.number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(y.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t(k.a,e._g(e._b({attrs:{label:"Issue Date","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.issue_date,"error-messages":e.errors&&e.errors.issue_date?e.errors.issue_date[0]:""},model:{value:e.payload.issue_date,callback:function(t){e.$set(e.payload,"issue_date",t)},expression:"payload.issue_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.issue_date,callback:function(t){e.issue_date=t},expression:"issue_date"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.issue_date=!1}},model:{value:e.payload.issue_date,callback:function(t){e.$set(e.payload,"issue_date",t)},expression:"payload.issue_date"}})],1)],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(y.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t(k.a,e._g(e._b({attrs:{label:"Expire Date","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.expire_date,"error-messages":e.errors&&e.errors.expire_date?e.errors.expire_date[0]:""},model:{value:e.payload.expire_date,callback:function(t){e.$set(e.payload,"expire_date",t)},expression:"payload.expire_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.expire_date,callback:function(t){e.expire_date=t},expression:"expire_date"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.expire_date=!1}},model:{value:e.payload.expire_date,callback:function(t){e.$set(e.payload,"expire_date",t)},expression:"payload.expire_date"}})],1)],1)],1),e._v(" "),t("br"),t("br")],1),e._v(" "),t(f.a),e._v(" "),t(l.a,[t(h.a),e._v(" "),t("div",{staticClass:"text-right"},[t(o.a,{attrs:{small:"",color:"grey white--text"},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n          Close\n        ")]),e._v(" "),t(o.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},855:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var o=r(96),n=r(1),l=Object(n.k)("v-toolbar__title"),c=Object(n.k)("v-toolbar__items");o.a},880:function(e,t,r){"use strict";r.r(t);var o=r(116),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},897:function(e,t,r){"use strict";r.r(t);var o=r(212),n=r(116),component=Object(n.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(o.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);