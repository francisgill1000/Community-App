(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1304:function(t,e,n){var content=n(1509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("cbd45584",content,!0,{sourceMap:!1})},1508:function(t,e,n){"use strict";n(1304)},1509:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-1e2b0376]{align-items:center;display:flex;height:31vh;justify-content:center}@media (max-width:500px){.bordertop[data-v-1e2b0376]{border-left:0;border-top:1px solid #ddd;padding-bottom:5px}}@media (max-width:1500px){.laptop-padding[data-v-1e2b0376]{padding-left:30px}}",""]),o.locals={},t.exports=o},1700:function(t,e,n){"use strict";n.r(e);var o=n(329),r=n(114),d=n(518),c=n(147),l=n(326),m=n(204),v=n(60),_=n(862),f=n(517),x=(n(55),{data:function(){return{options:{},loading:!1,dataLength:0,data:{absentCount:0,leaveCount:0,missingCount:0}}},mounted:function(){var t=this;setTimeout((function(){t.getDataFromApi()}),6e3)},created:function(){},methods:{goToReports:function(){this.$router.push("/attendance_report")},viewLogs:function(){this.$router.push("/attendance_report")},getDataFromApi:function(){var t=this,e={params:{company_id:this.$auth.user.company_id}};this.$axios.get("dashboard_get_count_previous_month",e).then((function(e){var data=e.data;t.data=data[0]}))}}}),h=(n(1508),n(116)),component=Object(h.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bordertop"},[e(f.a,[e(d.a,{attrs:{md:"10",sm:"10",xs:"10"}},[e("h4",[t._v("Previous Week Attendance")])]),t._v(" "),e(d.a,{staticClass:"text-end",attrs:{md:"2",sm:"2",xs:"2"}},[e(_.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,d=n.attrs;return[e(r.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",d,!1),o),[e(c.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(l.a,{attrs:{width:"120",dense:""}},[e(m.a,{on:{click:function(e){return t.viewLogs()}}},[e(v.c,{staticStyle:{cursor:"pointer"}},[t._v("\n              View Logs\n            ")])],1)],1)],1)],1)],1),t._v(" "),e(f.a,{attrs:{"align-self":"center"}},[e(d.a,{attrs:{lg:"2",md:"2",sm:"2",xs:"2","align-self":"center"}},[e(o.a,{attrs:{color:"#FFCDD2"}},[e(c.a,[t._v("mdi-account")])],1)],1),t._v(" "),e(d.a,{staticClass:"text-red bold text-h3 red--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data.absentCount))]),t._v(" "),e(d.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Absents")])],1),t._v(" "),e(f.a,[e(d.a,{staticClass:"pt-md-5",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#BBDEFB"}},[e(c.a,[t._v("mdi-account")])],1)],1),t._v(" "),e(d.a,{staticClass:"text-red bold text-h3 blue--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data.leaveCount))]),t._v(" "),e(d.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Leaves")])],1),t._v(" "),e(f.a,[e(d.a,{staticClass:"pt-md-5",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#FFE0B2"}},[e(c.a,[t._v("mdi-account-minus")])],1)],1),t._v(" "),e(d.a,{staticClass:"text-red bold text-h3 orange--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data.missingCount))]),t._v(" "),e(d.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Missing")])],1),t._v(" "),e(f.a,[e(d.a,{attrs:{md:"12"}},[e(r.a,{staticClass:"btn btn-block fa-lg mt-1 mb-3",staticStyle:{"background-color":"#6946dd",color:"#fff"},attrs:{size:"small"},on:{click:function(e){return t.goToReports()}}},[t._v("\n        View All reports\n      ")])],1)],1)],1)}),[],!1,null,"1e2b0376",null);e.default=component.exports}}]);