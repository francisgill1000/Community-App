(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1323:function(t,e,n){var content=n(1537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("5fbdc55e",content,!0,{sourceMap:!1})},1536:function(t,e,n){"use strict";n(1323)},1537:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-4bf7bc40]{align-items:center;display:flex;height:31vh;justify-content:center}@media (max-width:500px){.bordertop[data-v-4bf7bc40]{border-left:0;border-top:1px solid #ddd;padding-bottom:5px}}@media (max-width:1500px){.laptop-padding[data-v-4bf7bc40]{padding-left:30px}}",""]),o.locals={},t.exports=o},1738:function(t,e,n){"use strict";n.r(e);var o=n(329),r=n(114),c=n(516),d=n(147),l=n(326),_=n(204),m=n(60),v=n(863),f=n(515),h={props:["branch_id"],data:function(){return{options:{},loading:!1,dataLength:0,data:null}},watch:{branch_id:function(){this.$store.commit("dashboard/previous_week_attendance_count",null),this.getDataFromApi()}},created:function(){this.getDataFromApi()},methods:{goToReports:function(){this.$router.push("/attendance_report")},viewLogs:function(){this.$router.push("/attendance_report")},getDataFromApi:function(){var t=this;if(this.$store.state.dashboard.previous_week_attendance_count)this.data=this.$store.state.dashboard.previous_week_attendance_count;else{var e={params:{branch_id:this.branch_id>0?this.branch_id:null}};this.$axios.get("previous_week_attendance_count/".concat(this.$auth.user.company_id),e).then((function(e){var data=e.data;t.data=data,t.$store.commit("dashboard/previous_week_attendance_count",data)})).catch((function(t){var e=t.message;return console.log(e)}))}}}},x=(n(1536),n(116)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bordertop"},[e(f.a,[e(c.a,{attrs:{md:"10",sm:"10",xs:"10"}},[e("h4",[t._v("Previous Week Attendance")])]),t._v(" "),e(c.a,{staticClass:"text-end",attrs:{md:"2",sm:"2",xs:"2"}},[e(v.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[e(r.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",c,!1),o),[e(d.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(l.a,{attrs:{width:"120",dense:""}},[e(_.a,{on:{click:function(e){return t.viewLogs()}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[t._v("\n              View Logs\n            ")])],1)],1)],1)],1)],1),t._v(" "),e(f.a,{attrs:{"align-self":"center"}},[e(c.a,{attrs:{lg:"2",md:"2",sm:"2",xs:"2","align-self":"center"}},[e(o.a,{attrs:{color:"#FFCDD2"}},[e(d.a,[t._v("mdi-account")])],1)],1),t._v(" "),e(c.a,{staticClass:"text-red bold text-h3 red--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.absentCount))]),t._v(" "),e(c.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Absents")])],1),t._v(" "),e(f.a,[e(c.a,{staticClass:"pt-md-5",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#BBDEFB"}},[e(d.a,[t._v("mdi-account")])],1)],1),t._v(" "),e(c.a,{staticClass:"text-red bold text-h3 blue--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.leaveCount))]),t._v(" "),e(c.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Leaves")])],1),t._v(" "),e(f.a,[e(c.a,{staticClass:"pt-md-5",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(o.a,{attrs:{color:"#FFE0B2"}},[e(d.a,[t._v("mdi-account-minus")])],1)],1),t._v(" "),e(c.a,{staticClass:"text-red bold text-h3 orange--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.missingCount))]),t._v(" "),e(c.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Missing")])],1),t._v(" "),e(f.a,[e(c.a,{attrs:{md:"12"}},[e(r.a,{staticClass:"btn btn-block fa-lg mt-1 mb-3",staticStyle:{"background-color":"#6946dd",color:"#fff"},attrs:{size:"small"},on:{click:function(e){return t.goToReports()}}},[t._v("\n        View All reports\n      ")])],1)],1)],1)}),[],!1,null,"4bf7bc40",null);e.default=component.exports}}]);