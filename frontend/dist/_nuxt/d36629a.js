(window.webpackJsonp=window.webpackJsonp||[]).push([[188,186],{1728:function(t,e,n){"use strict";n.r(e);var o=n(1583),c=n(900),l=(n(37),{data:function(){return{options:{},Model:"Log",endpoint:"attendance_logs",search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,headers:[{text:"UserID",align:"left",sortable:!1,value:"UserID"},{text:"LogTime",align:"left",sortable:!1,value:"LogTime"},{text:"DeviceID",align:"left",sortable:!1,value:"DeviceID"}],editedIndex:-1,editedItem:{name:""},defaultItem:{name:""},response:"",data:[],errors:[]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0},methods:{can:function(t){return this.$pagePermission.can(t,this)},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.options,o=n.page,c={params:{per_page:n.itemsPerPage,company_id:this.$auth.user.company_id}};this.$axios.get("".concat(e,"?page=").concat(o),c).then((function(e){var data=e.data;t.data=data.data,t.total=data.total,t.loading=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))}}}),r=l,d=n(60),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return t.can("log_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(c.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),t.can("log_view")?e(o.a,{staticClass:"elevation-1",attrs:{"show-select":"","item-key":"id",headers:t.headers,items:t.data,"server-items-length":t.total,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(e){t.options=e}},model:{value:t.ids,callback:function(e){t.ids=e},expression:"ids"}}):e("NoAccess")],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(909).default})},909:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);