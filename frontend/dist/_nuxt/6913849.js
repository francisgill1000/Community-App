(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1028:function(t,e,r){var content=r(1079);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("79017e3e",content,!0,{sourceMap:!1})},1078:function(t,e,r){"use strict";r(1028)},1079:function(t,e,r){var o=r(21)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-d75e8b1c]{align-items:center;display:flex;height:31vh;justify-content:center}@media (max-width:500px){.bordertop[data-v-d75e8b1c]{border-left:0;border-top:1px solid #ddd;padding-bottom:5px}}@media (max-width:1500px){.laptop-padding[data-v-d75e8b1c]{padding-left:30px}}",""]),o.locals={},t.exports=o},1103:function(t,e,r){"use strict";r.r(e);var o=r(329),n=r(518),l=r(147),d=r(517),c=r(23),m=(r(88),{props:["branch_id","user_type"],data:function(){return{options:{},loading:!1,dataLength:0,data:{date:" ",EmployeeCount:0,VisitorCount:0,TenantCount:0,DeniedCount:0,DeliverysCount:0,ContractorsCount:0}}},watch:{branch_id:function(){this.$store.commit("dashboard/previous_week_attendance_count",null),this.getDataFromApi()}},mounted:function(){this.getDataFromApi()},created:function(){var t=new Date;this.date_to=t.toISOString().split("T")[0],this.date_from=t.toISOString().split("T")[0],this.getDataFromApi()},methods:{goToReports:function(){this.$router.push("/attendance_report")},viewLogs:function(){this.$router.push("/attendance_report")},getDataFromApi:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("CommDashboard/setDates",{date_from:t.date_from,date_to:t.date_to,branch_id:null,system_user_id:null,device_id:null,user_type:t.user_type}),e.next=3,t.$store.dispatch("CommDashboard/today_statistics");case 3:t.data=e.sent;case 4:case"end":return e.stop()}}),e)})))()}}}),_=(r(1078),r(116)),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bordertop"},[e(d.a,[e(n.a,{attrs:{md:"10",sm:"10",xs:"10"}},[e("h4",[t._v("Today Statistics")])]),t._v(" "),e(n.a,{staticClass:"text-end",attrs:{md:"2",sm:"2",xs:"2"}})],1),t._v(" "),e(d.a,{staticClass:"mt-2",attrs:{"align-self":"center"}},[e(n.a,{staticClass:"pt-0",attrs:{lg:"2",md:"2",sm:"2",xs:"2","align-self":"center"}},[e(o.a,{attrs:{color:"#14B012",size:"40"}},[e(l.a,{attrs:{color:"#FFF"}},[t._v("mdi mdi-home-silo-outline")])],1)],1),t._v(" "),e(n.a,{staticClass:"text-red bold text-h3 red--text text-center laptop-padding pt-0",staticStyle:{"font-size":"40px",color:"#14b012 !important"},attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.TenantCount))]),t._v(" "),e(n.a,{staticClass:"pt-0",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Tenants")])],1),t._v(" "),e(d.a,{staticClass:"mt-2"},[e(n.a,{staticClass:"pt-0",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#2196F3",size:"40"}},[e(l.a,{attrs:{color:"#FFF"}},[t._v("mdi mdi-account-tie")])],1)],1),t._v(" "),e(n.a,{staticClass:"text-red bold text-h3 orange--text text-center laptop-padding pt-0",staticStyle:{"font-size":"40px",color:"#2196f3 !important"},attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.EmployeeCount))]),t._v(" "),e(n.a,{staticClass:"pt-0",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Employees")])],1),t._v(" "),e(d.a,{staticClass:"mt-2"},[e(n.a,{staticClass:"pt-0",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#FFB600",size:"40"}},[e(l.a,{attrs:{color:"#FFF"}},[t._v("mdi mdi-account-details")])],1)],1),t._v(" "),e(n.a,{staticClass:"text-red bold text-h3 blue--text text-center laptop-padding pt-0",staticStyle:{"font-size":"40px",color:"#ffb600 !important"},attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.VisitorCount))]),t._v(" "),e(n.a,{staticClass:"pt-0",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Visitors")])],1),t._v(" "),e(d.a,{staticClass:"mt-2"},[e(n.a,{staticClass:"pt-0",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#C8B053",size:"40"}},[e(l.a,{attrs:{color:"#FFF"}},[t._v("mdi mdi-moped")])],1)],1),t._v(" "),e(n.a,{staticClass:"text-red bold text-h3 orange--text text-center laptop-padding pt-0",staticStyle:{"font-size":"40px",color:"#c8b053 !important"},attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.DeliverysCount))]),t._v(" "),e(n.a,{staticClass:"pt-0",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Delivery Man")])],1),t._v(" "),e(d.a,{staticClass:"mt-2"},[e(n.a,{staticClass:"pt-0",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#F1C40F",size:"40"}},[e(l.a,{attrs:{color:"#FFF"}},[t._v("mdi mdi-handshake-outline")])],1)],1),t._v(" "),e(n.a,{staticClass:"text-red bold text-h3 orange--text text-center laptop-padding pt-0",staticStyle:{"font-size":"40px",color:"#f1c40f !important"},attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.ContractorsCount))]),t._v(" "),e(n.a,{staticClass:"pt-0",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Contractors")])],1),t._v(" "),e(d.a,{staticClass:"mt-2"},[e(n.a,{staticClass:"pt-0",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#FF0000",size:"40"}},[e(l.a,{attrs:{color:"#FFF"}},[t._v("mdi mdi-account-remove")])],1)],1),t._v(" "),e(n.a,{staticClass:"text-red bold text-h3 orange--text text-center laptop-padding pt-0",staticStyle:{"font-size":"40px",color:"#ff0000 !important"},attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center; "}},[t._v(t._s(t.data&&t.data.DeniedCount))]),t._v(" "),e(n.a,{staticClass:"pt-0",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Access Denied")])],1)],1)}),[],!1,null,"d75e8b1c",null);e.default=component.exports}}]);