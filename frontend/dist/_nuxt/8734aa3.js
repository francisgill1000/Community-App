(window.webpackJsonp=window.webpackJsonp||[]).push([[58,90],{1341:function(t,n,e){"use strict";e.r(n);var o=e(329),c=e(114),r=e(133),l=e(516),d=e(147),_=e(212),h=e(326),v=e(204),f=e(60),m=e(863),k=e(515),C=(e(529),{props:["branch_id"],data:function(){return{offlineDevices:0,leaveRequests:0,data:{employeeCount:0,totalIn:0,totalOut:0,presentCount:0,absentCount:0,missingCount:0,offCount:0,holidayCount:0,leaveCount:0,vaccationCount:0,flats_count:0,occupied_count:0,car_parking_count:0,allocated_count:0,offline_devices:0,contract_expiring_count:0},loading:!1,cardsJson:[]}},watch:{branch_id:function(){this.loading=!0,this.$store.commit("dashboard/right_statistics",null),this.getDataFromApi(),this.loading=!1}},created:function(){this.getDataFromApi()},methods:{viewLeaves:function(){this.$router.push("/leaves")},viewLogs:function(){var link=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";this.$router.push(link)},viewDevices:function(){this.$router.push("/device")},getDataFromApi:function(){var t=this;this.$store.state.right_statistics?this.data=this.$store.state.right_statistics:this.$axios.get("community_dashboard_get_assets_statistics",{params:{company_id:this.$auth.user.company_id,branch_id:this.branch_id>0?this.branch_id:null}}).then((function(n){var data=n.data;t.data=data,t.cardsJson=[{size:"30",src:"/home-green-2.png",link:"/",count:data.flats_count,label:"Flats/Houses",color:"green"},{size:"30",src:"/home-red-2.png",link:"",count:data.occupied_count,label:"Occupied",color:"red"},{src:"/parking-2.png",link:"",count:data.car_parking_count,label:"Car Parking",color:"green"},{src:"/allocated-parking-2.png",link:"",count:data.allocated_count,label:"Allocated",color:"red"},{src:"/device-teal-1.png",link:"",count:data.offline_devices,label:"Offline Devices",color:"black"},{size:"40",src:"/expired-2.png",link:"",count:data.contract_expiring_count,label:"Contract Expiring",color:"black"}]}))},getDeviceStatus:function(){var t=this;this.$axios.get("/devcie_count_Status/".concat(this.$auth.user.company_id),{params:{company_id:this.$auth.user.company_id,branch_id:this.branch_id>0?this.branch_id:null}}).then((function(n){var data=n.data;t.offlineDevices=data.series?data.series[1]:0,t.$store.commit("dashboard/off_devices_count",t.offlineDevices)}))},getPendingLeavesCount:function(){var t=this,n={params:{company_id:this.$auth.user.company_id||0,branch_id:this.branch_id>0?this.branch_id:null}};this.$axios.get("employee_leaves_new",n).then((function(n){var data=n.data;t.leaveRequests=data.total_pending_count,t.$store.commit("dashboard/leaves_request_count",data.total_pending_count)}))}}}),y=C,x=e(116),component=Object(x.a)(y,(function(){var t=this,n=t._self._c;return n("div",[t.loading?t._e():n("div",[n(k.a,t._l(t.cardsJson,(function(e,C){return n(l.a,{key:C,attrs:{md:"6",xs:"12",sm:"12",cols:"12"}},[n(r.a,{staticClass:"py-2"},[n(k.a,{staticClass:"pa-2"},[n(k.a,{staticClass:"pa-0 ma-0",staticStyle:{width:"100%"}},[n(l.a,{attrs:{md:"6"}},[n(o.a,{attrs:{size:e.size}},[n(_.a,{attrs:{src:e.src}})],1)],1),t._v(" "),n(l.a,{staticClass:"menu-icon-right",attrs:{md:"6"}},[n(m.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n(c.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",r,!1),o),[n(d.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),n(h.a,{attrs:{width:"120",dense:""}},[n(v.a,{on:{click:function(n){return t.viewLogs(e.link)}}},[n(f.c,{staticStyle:{cursor:"pointer"}},[t._v("\n                        View Logs\n                      ")])],1)],1)],1)],1)],1),t._v(" "),n(k.a,[n(l.a,{staticStyle:{"text-align":"center","padding-top":"0px"},attrs:{md:"12"}},[n("div",{staticClass:"bold text-h3",class:"".concat(e.color,"--text")},[t._v("\n                  "+t._s(e.count)+"\n                ")]),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.label))])])],1)],1)],1)],1)})),1)],1),t._v(" "),t.loading?n("ComonPreloader",{attrs:{icon:"face-scan"}}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ComonPreloader:e(895).default})},895:function(t,n,e){"use strict";e.r(n);var o=e(212),c={props:["icon"]},r=e(116),component=Object(r.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(o.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);