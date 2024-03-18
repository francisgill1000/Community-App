(window.webpackJsonp=window.webpackJsonp||[]).push([[382,180],{1568:function(e,t,n){"use strict";n.r(t);var r=n(114),o=n(133),l=n(87),c=n(518),d=n(1549),_=n(862),m=n(517),v=n(872),f=n(349),y=n(214),h=n(996),k=n(96),x=n(23),$=(n(88),{data:function(){return{Model:"Generate Log",date:null,menu:!1,loading:!1,time_menu:!1,payload:{user_id:null,device_id:null,date:null,time:null},errors:[],data:[],response:"",snackbar:!1}},created:function(){return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{can:function(e){return this.$pagePermission.can(e,this)},store_schedule:function(){var e=this,t=this.payload,n={UserID:t.user_id,LogTime:t.date+" "+t.time,DeviceID:t.device_id,company_id:this.$auth.user.company_id};this.loading=!0,this.$axios.post("/generate_log",n).then((function(t){var data=t.data;e.loading=!1,data.status?(e.snackbar=!0,e.response="Log generate successfully"):e.errors=data.errors})).catch((function(t){var n=t.message;e.snackbar=!0,e.response=n}))}}}),w=n(116),component=Object(w.a)($,(function(){var e=this,t=e._self._c;return e.can("user_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(v.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(m.a,{staticClass:"mt-5 mb-10"},[t(c.a,{attrs:{cols:"10"}},[t("h3",[e._v(e._s(e.Model))]),e._v(" "),t("div",[e._v("Dashboard / "+e._s(e.Model))])])],1),e._v(" "),t(o.a,[t(k.a,{staticClass:"primary",attrs:{dark:"",flat:""}},[t("h3",[e._v(e._s(e.Model))])]),e._v(" "),t(o.a,{attrs:{flat:""}},[t(l.b,[t(m.a,[t(c.a,{attrs:{md:"6"}},[t(y.a,{attrs:{label:"User Id"},model:{value:e.payload.user_id,callback:function(t){e.$set(e.payload,"user_id",t)},expression:"payload.user_id"}}),e._v(" "),e.errors&&e.errors.user_id?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.user_id[0]))]):e._e()],1),e._v(" "),t(c.a,{attrs:{md:"6"}},[t(y.a,{attrs:{label:"Device Id"},model:{value:e.payload.device_id,callback:function(t){e.$set(e.payload,"device_id",t)},expression:"payload.device_id"}}),e._v(" "),e.errors&&e.errors.device_id?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.device_id[0]))]):e._e()],1),e._v(" "),t(c.a,{attrs:{md:"6"}},[t(_.a,{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(y.a,e._g(e._b({attrs:{label:"Date",readonly:""},model:{value:e.payload.date,callback:function(t){e.$set(e.payload,"date",t)},expression:"payload.date"}},"v-text-field",o,!1),r))]}}],null,!1,2610490421),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(d.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.payload.date,callback:function(t){e.$set(e.payload,"date",t)},expression:"payload.date"}},[t(f.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.payload.date)}}},[e._v("\n                  OK\n                ")])],1)],1)],1),e._v(" "),t(c.a,{attrs:{md:"6"}},[t(_.a,{ref:"time_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"time",t)},"update:return-value":function(t){return e.$set(e.payload,"time",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(y.a,e._g(e._b({attrs:{label:"Time In",readonly:""},model:{value:e.payload.time,callback:function(t){e.$set(e.payload,"time",t)},expression:"payload.time"}},"v-text-field",o,!1),r))]}}],null,!1,3535954066),model:{value:e.time_menu,callback:function(t){e.time_menu=t},expression:"time_menu"}},[e._v(" "),e.time_menu?t(h.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.time,callback:function(t){e.$set(e.payload,"time",t)},expression:"payload.time"}},[t(f.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.time_menu=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.time_menu_ref.save(e.payload.time)}}},[e._v("\n                  OK\n                ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.time?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.time[0]))]):e._e()],1)],1),e._v(" "),t(m.a,[t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-right"},[e.can("user_create")?t(r.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.store_schedule}},[e._v("\n                Submit\n              ")]):e._e()],1)])],1)],1)],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:n(880).default})},880:function(e,t,n){"use strict";n.r(t);var r=n(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports}}]);