(window.webpackJsonp=window.webpackJsonp||[]).push([[52,92],{1110:function(t,e,n){"use strict";n.r(e);var r=n(329),o=n(114),c=n(516),l=n(147),d=n(326),_=n(204),m=n(60),v=n(863),h=n(515),f=(n(55),{props:["branch_id"],data:function(){return{departments:[],loading:!1}},watch:{branch_id:function(){var t=this;this.loading=!0,setTimeout((function(){t.$store.commit("dashboard/attendance_count_by_department",null),t.getDataFromApi(),t.loading=!1}),3e3)}},created:function(){this.getDataFromApi()},methods:{viewLogs:function(){this.$router.push("/attendance_report")},getDataFromApi:function(){var t=this;this.$store.state.dashboard.attendance_count_by_department?this.departments=this.$store.state.dashboard.attendance_count_by_department:(this.loading=!0,this.$axios.get("dashboard_get_count_department",{params:{company_id:this.$auth.user.company_id,branch_id:this.branch_id>0?this.branch_id:null}}).then((function(e){var data=e.data;t.departments=data,t.loading=!1,t.$store.commit("dashboard/attendance_count_by_department",data)})))}}}),y=n(116),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-2 pl-2"},[e(h.a,[e(c.a,{staticStyle:{flex:"auto"},attrs:{cols:"10",md:"10",sm:"10",xs:"10"}},[e("h4",[t._v("Today Presents By Department wise")])]),t._v(" "),e(c.a,{staticClass:"text-end",attrs:{md:"2",sm:"2",xs:"2"}},[e(v.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",c,!1),r),[e(l.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(d.a,{attrs:{width:"120",dense:""}},[e(_.a,{on:{click:function(e){return t.viewLogs()}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[t._v("\n              View Logs\n            ")])],1)],1)],1)],1)],1),t._v(" "),t.loading?e("ComonPreloader",{attrs:{icon:"face-scan"}}):e(h.a,{staticStyle:{margin:"0px"}},[e(c.a,{staticClass:"text-center",attrs:{md:"2"}},[t._v("# ")]),t._v(" "),e(c.a,{attrs:{md:"5"}},[t._v("  ")]),t._v(" "),e(c.a,{staticStyle:{"text-align":"center"},attrs:{md:"1",title:"Present Count"}},[t._v("P")]),t._v(" "),e(c.a,{staticStyle:{"text-align":"center"},attrs:{md:"1",title:"Absent Count"}},[t._v("A ")]),t._v(" "),e(c.a,{staticStyle:{"text-align":"center"},attrs:{md:"1",title:"Missing Count"}},[t._v("M ")]),t._v(" "),e(c.a,{staticStyle:{"text-align":"center"},attrs:{md:"1",title:"Missing Count"}},[t._v("L ")])],1),t._v(" "),e("div",{staticStyle:{height:"250px",overflow:"scroll","padding-bottom":"36px"}},t._l(t.departments,(function(n,o,i){return e(h.a,{key:"department"+i,staticStyle:{"font-size":"10px"}},[e(c.a,{staticClass:"text-center",attrs:{md:"2"}},[e(r.a,{staticStyle:{color:"#fff"},attrs:{size:"30",color:(i+1)%2==0?"green":"red"}},[e(l.a,{staticStyle:{color:"#fff"},attrs:{size:"20"}},[t._v("mdi-laptop")])],1)],1),t._v(" "),e(c.a,{staticClass:"mt-2",staticStyle:{overflow:"hidden"},attrs:{md:"5"}},[t._v(t._s(o)+" ")]),t._v(" "),e(c.a,{staticStyle:{color:"green","text-align":"center"},attrs:{md:"1",title:"Presents"}},[t._v("\n        "+t._s(n.presentCount)+"\n      ")]),t._v(" "),e(c.a,{staticStyle:{color:"red","text-align":"center"},attrs:{md:"1",title:"Absents"}},[t._v(t._s(n.absentCount))]),t._v(" "),e(c.a,{staticStyle:{color:"orange","text-align":"center"},attrs:{md:"1",title:"Missing"}},[t._v(t._s(n.missingCount)+"\n      ")]),t._v(" "),e(c.a,{staticStyle:{"text-align":"center"},attrs:{md:"1",title:"Leave"}},[t._v(t._s(n.leaveCount)+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ComonPreloader:n(895).default})},895:function(t,e,n){"use strict";n.r(e);var r=n(212),o={props:["icon"]},c=n(116),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);