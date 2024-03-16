(window.webpackJsonp=window.webpackJsonp||[]).push([[223,186],{1075:function(t,e,n){var content=n(1076);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("e67f577c",content,!0,{sourceMap:!1})},1076:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,".theme--light.v-small-dialog__actions,.theme--light.v-small-dialog__menu-content{background:#fff}.theme--dark.v-small-dialog__actions,.theme--dark.v-small-dialog__menu-content{background:#1e1e1e}.v-small-dialog{display:block}.v-small-dialog__activator{cursor:pointer}.v-small-dialog__activator__content{display:inline-block}.v-small-dialog__content{padding:0 16px}.v-small-dialog__actions{padding:8px;text-align:right;white-space:pre}",""]),o.locals={},t.exports=o},1201:function(t,e,n){"use strict";n(57),n(1075);var o=n(229),r=n(26),l=n(1),c=n(154),d=n(272),_=n(8);e.a=Object(_.a)(o.a,r.a).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data:function(){return{isActive:!1}},watch:{isActive:function(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel:function(){this.isActive=!1,this.$emit("cancel")},focus:function(){var input=this.$refs.content.querySelector("input");input&&input.focus()},genButton:function(t,text){return this.$createElement(c.a,{props:{text:!0,color:"primary",light:!0},on:{click:t}},text)},genActions:function(){var t=this;return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton((function(){t.save(t.returnValue),t.$emit("save")}),this.saveText)])},genContent:function(){var t=this;return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:function(e){e.keyCode===l.z.esc&&t.cancel(),e.keyCode===l.z.enter&&(t.save(t.returnValue),t.$emit("save"))}},ref:"content"},[this.$slots.input])}},render:function(t){var e=this;return t(d.a,{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:function(t){return e.isActive=t}},scopedSlots:{activator:function(n){var o=n.on;return t("div",{staticClass:"v-small-dialog__activator",on:o},[t("span",{staticClass:"v-small-dialog__activator__content"},e.$slots.default)])}}},[this.genContent(),this.large?this.genActions():null])}})},1791:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(539),c=n(1583),d=n(1584),_=n(1201),v=n(116),m=n(888),f=n(538),h=n(900),x=n(360),y=n(221),k=n(99),O=n(886),D=n(882),C=(n(33),n(2));n(543),n(6),n(80),n(37),n(12),n(14),n(11),n(18),n(9),n(19);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={data:function(){var t;return t={datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",Model:"Log",endpoint:"attendance_logs",from_date:null,from_menu:!1,to_date:null,to_menu:!1,payload:{},loading:!0,date:null,menu:!1},Object(C.a)(t,"loading",!1),Object(C.a)(t,"time_menu",!1),Object(C.a)(t,"log_payload",{user_id:41,device_id:"",date:null,time:null}),Object(C.a)(t,"headers",[{text:"UserID",align:"center",sortable:!1,value:"UserID"},{text:"DeviceID",align:"center",sortable:!1,value:"DeviceID"},{text:"Device Name",align:"center",sortable:!1,value:"device.name"},{text:"LogTime",align:"center",sortable:!1,value:"LogTime"}]),Object(C.a)(t,"ids",[]),Object(C.a)(t,"data",[]),Object(C.a)(t,"devices",[]),Object(C.a)(t,"total",0),Object(C.a)(t,"options",{}),Object(C.a)(t,"payloadOptions",{}),Object(C.a)(t,"errors",[]),Object(C.a)(t,"response",""),Object(C.a)(t,"snackbar",!1),Object(C.a)(t,"headers_table",[{text:"Employee Device Id/User ID",align:"left",sortable:!0,key:"UserID",value:"UserID"},{text:"Log Time",align:"left",sortable:!0,key:"time",value:"time"},Object(C.a)({text:"Device Name",align:"left",sortable:!0,value:"devicename"},"value","device.device_name"),{text:"Device ID",align:"left",sortable:!0,key:"deviceid",value:"device.device_id"}]),t},created:function(){this.firstLoad()},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{firstLoad:function(){this.payload.from_date=this.getDate(),this.payload.to_date=this.getDate(),this.payload.from_date_txt=this.getDate(),this.payload.to_date_txt=this.getDate(),this.payload.UserID=this.$auth.user.employee.system_user_id,this.getDataFromApi()},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},getDate:function(){var t=new Date,e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(o)},can:function(t){return this.$pagePermission.can(t,this)},getRecords:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""!=e&&e.length<=2)return this.snack=!0,this.snackColor="error",this.snackText="Minimum 3 Characters to filter ",this.loading=!1,!1;this.getDataFromApi(this.endpoint,t,e)},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.payloadOptions={params:S({per_page:this.options.itemsPerPage,company_id:this.$auth.user.company_id},this.payload)},""!=n&&(this.payloadOptions.params[n]=o),this.loading=!0,this.$axios.get("".concat(e,"?page=").concat(this.options.page),this.payloadOptions).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;t.data=data.data,t.total=data.total,t.loading=!1}))},searchIt:function(){return this.payload.from_date_txt=this.payload.from_date,this.payload.to_date_txt=this.payload.to_date,this.getDataFromApi(),this.from_menu=!1,this.to_menu=!1,!1}}},I=w,R=n(60),component=Object(R.a)(I,(function(){var t=this,e=t._self._c;return t.can("logs_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(h.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(f.a,{staticClass:"pt-2 mt-5"},[e(l.a,{attrs:{cols:"12",sm:"8",md:"2"}},[e(m.a,{ref:"from_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("div",{staticClass:"mb-1"},[t._v("From Date")]),t._v(" "),e(y.a,t._g(t._b({attrs:{"hide-details":!t.payload.from_date,outlined:"",dense:"",readonly:"",placeholder:"Date"},model:{value:t.payload.from_date_txt,callback:function(e){t.$set(t.payload,"from_date_txt",e)},expression:"payload.from_date_txt"}},"v-text-field",r,!1),o))]}}],null,!1,1187126813),model:{value:t.from_menu,callback:function(e){t.from_menu=e},expression:"from_menu"}},[t._v(" "),e(d.a,{attrs:{"no-title":"",scrollable:""},on:{change:t.searchIt},model:{value:t.payload.from_date,callback:function(e){t.$set(t.payload,"from_date",e)},expression:"payload.from_date"}},[e(x.a),t._v(" "),e(o.a,{staticClass:"blue-grey",attrs:{small:"",dark:""},on:{click:function(e){t.from_menu=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e(o.a,{staticClass:"blue-grey darken-3",attrs:{small:"",dark:""},on:{click:t.searchIt}},[t._v("\n            OK\n          ")])],1)],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"8",md:"2"}},[e("div",{staticClass:"mb-1"},[t._v("To Date")]),t._v(" "),e(m.a,{ref:"to_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(y.a,t._g(t._b({attrs:{"hide-details":!t.payload.to_date,outlined:"",dense:"",readonly:"",placeholder:"Date"},model:{value:t.payload.to_date_txt,callback:function(e){t.$set(t.payload,"to_date_txt",e)},expression:"payload.to_date_txt"}},"v-text-field",r,!1),o))]}}],null,!1,3679276102),model:{value:t.to_menu,callback:function(e){t.to_menu=e},expression:"to_menu"}},[t._v(" "),e(d.a,{attrs:{"no-title":"",scrollable:""},on:{change:t.searchIt},model:{value:t.payload.to_date,callback:function(e){t.$set(t.payload,"to_date",e)},expression:"payload.to_date"}},[e(x.a),t._v(" "),e(o.a,{staticClass:"blue-grey",attrs:{small:"",dark:""},on:{click:function(e){t.to_menu=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e(o.a,{staticClass:"blue-grey darken-3",attrs:{small:"",dark:""},on:{click:t.searchIt}},[t._v("\n            OK\n          ")])],1)],1)],1)],1),t._v(" "),e(f.a,[e(l.a,[e(r.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[e(k.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(O.b,[e("span",[t._v(" Attendances Logs")])]),t._v(" "),e(D.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(v.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.firstLoad()}}},[t._v("mdi mdi-reload")])],1)]}}],null,!1,1608989521)},[t._v(" "),e("span",[t._v("Reload")])])],1),t._v(" "),e(h.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var r=n.attrs;return[e(o.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),e(c.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.UserID",fn:function(n){var o=n.item;return[e(_.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{cancel:function(e){return t.getRecords()},save:function(e){return t.getRecords()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(y.a,{attrs:{label:"Search System User Id"},on:{input:function(e){return t.getRecords("search_system_user_id",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(o.UserID)+"\n              ")])]}},{key:"item.time",fn:function(n){var o=n.item;return[e(_.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{cancel:function(e){return t.getRecords()},save:function(e){return t.getRecords()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(y.a,{attrs:{label:"Search Date and Time"},on:{input:function(e){return t.getRecords("search_time",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(o.LogTime)+"\n              ")])]}},{key:"item.device.device_name",fn:function(n){var o=n.item;return[e(_.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{cancel:function(e){return t.getRecords()},save:function(e){return t.getRecords()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(y.a,{attrs:{label:"Search Device Name"},on:{input:function(e){return t.getRecords("search_device_name",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(o.device?o.device.name:"---")+"\n              ")])]}},{key:"item.device.device_id",fn:function(n){var o=n.item;return[e(_.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{cancel:function(e){return t.getRecords()},save:function(e){return t.getRecords()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(y.a,{attrs:{label:"Search Device ID"},on:{input:function(e){return t.getRecords("search_device_id",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(o.device?o.device.device_id:"---")+"\n              ")])]}}],null,!1,1546580085)})],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(909).default})},886:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(99),r=n(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");o.a},909:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);