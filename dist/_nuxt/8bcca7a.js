(window.webpackJsonp=window.webpackJsonp||[]).push([[164,91],{1152:function(e,t,n){var content=n(1237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("60b87d10",content,!0,{sourceMap:!1})},1236:function(e,t,n){"use strict";n(1152)},1237:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,".v-application--is-ltr .v-data-footer__pagination{margin:0}",""]),o.locals={},e.exports=o},1362:function(e,t,n){"use strict";n.r(t);var o=n(114),r=n(518),l=n(1556),c=n(147),d=n(212),m=n(326),f=n(204),_=n(60),v=n(862),h=n(517),y=(n(37),n(55),n(80),n(6),n(72),n(33),n(58),{props:["branch_id"],data:function(){return{loading:!1,items:[],emptyLogmessage:"",number_of_records:5,logs:[],url:"ws://192.168.20.100:8080/WebSocket",socket:null,totalRowsCount:0,total:0,options:{},headers:[{text:"Pic",align:"left",sortable:!0,filterable:!0,value:"employee.pic"},{text:"Employee Name",align:"left",sortable:!0,filterable:!0,value:"employee.first_name"},{text:"Time",align:"left",sortable:!0,filterable:!0,value:"LogTime"}]}},watch:{branch_id:function(){var e=this;this.loading=!0,setTimeout((function(){e.$store.commit("dashboard/web_logins",null),e.getRecords(),e.loading=!1}),5e3)}},created:function(){this.getRecords()},computed:{employees:function(){return this.$store.state.employeeList.map((function(e){return{system_user_id:e.system_user_id,first_name:e.first_name,last_name:e.last_name,display_name:e.display_name}}))},devices:function(){if(this.$store.state.devices)return this.$store.state.devices.map((function(e){return e.device_id}))}},methods:{viewLogs:function(){this.$router.push("/web_login_logs")},caps:function(e){return""==e||null==e?"":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},getRecords:function(){var e=this;this.$store.state.dashboard.web_logins?this.logs=this.$store.state.dashboard.web_logins:(this.loading=!0,this.$axios.get("activity",{params:{per_page:5,company_id:this.$auth.user.company_id,user_id:this.$auth.user.id}}).then((function(t){var data=t.data;e.logs=data,e.$store.commit("dashboard/web_logins",data),e.loading=!1})))}}}),w=(n(1236),n(116)),component=Object(w.a)(y,(function(){var e=this,t=e._self._c;return t("div",[t(h.a,[t(r.a,{attrs:{md:"10"}},[t("h4",{staticClass:"pl-2"},[e._v("Web Login Activities")])]),e._v(" "),t(r.a,{staticClass:"text-end",attrs:{md:"2"}},[t(v.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),r),[t(c.a,[e._v("mdi-dots-vertical")])],1)]}}])},[e._v(" "),t(m.a,{attrs:{width:"120",dense:""}},[t(f.a,{on:{click:function(t){return e.viewLogs()}}},[t(_.c,{staticStyle:{cursor:"pointer"}},[e._v("\n              View Logs\n            ")])],1)],1)],1)],1)],1),e._v(" "),e.loading?t("ComonPreloader",{attrs:{icon:"face-scan"}}):e._e(),e._v(" "),t(l.a,{attrs:{dense:"",headers:e.headers,items:e.logs.data,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[5,50]},"server-items-length":e.logs.total,"hide-default-header":""},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.employee.pic",fn:function(e){var n=e.item;e.index;return[t(h.a,{attrs:{"no-gutters":""}},[t(r.a,{staticStyle:{padding:"5px","padding-left":"0px",width:"30px","max-width":"30px"}},[t(d.a,{staticStyle:{"border-radius":"50%",height:"auto",width:"30px","max-width":"30px"},attrs:{src:n.user.employee?n.user.employee.profile_picture:"/no-profile-image.jpg"}})],1)],1)]}},{key:"item.employee.first_name",fn:function(n){var o=n.item;n.index;return[e._v("\n      "+e._s(o.user.employee?o.user.employee.first_name:"Admin")+"\n      "+e._s(o.user.employee?o.user.employee.last_name:" ")+"\n\n      "),t("div",{staticClass:"secondary-value"},[e._v("\n        "+e._s(o.user.employee&&o.user.employee.department?e.caps(o.user.employee.department.name):"---")+"\n      ")])]}},{key:"item.UserID",fn:function(t){var n=t.item;return[e._v(" #"+e._s(n.UserID)+" ")]}},{key:"item.employee.employee_id",fn:function(t){var n=t.item;return[e._v("\n      "+e._s(n.employee&&n.employee.employee_id)+"\n    ")]}},{key:"item.LogTime",fn:function(n){var o=n.item;return[t(c.a,{attrs:{color:"green",fill:""}},[e._v("mdi-clock-outline")]),e._v("\n      "+e._s(o.date_time)+"\n    ")]}},{key:"item.online",fn:function(n){return[n.item.device.location?t(c.a,{attrs:{color:"green",fill:""}},[e._v("mdi-map-marker-radius")]):t(c.a,{attrs:{color:"red",fill:""}},[e._v("mdi-map-marker-radius")])]}},{key:"item.device.device_name",fn:function(n){var o=n.item;return[t("div",{style:o.device.location?"color:green":"color: red;"},[e._v("\n        "+e._s(o.device?e.caps(o.device.name):"---")+" "),t("br"),e._v("\n\n        "+e._s(o.device.location?o.device.location:"---")+"\n      ")])]}}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ComonPreloader:n(896).default})},896:function(e,t,n){"use strict";n.r(t);var o=n(212),r={props:["icon"]},l=n(116),component=Object(l.a)(r,(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[e(o.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);