(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{1133:function(t,e,r){var content=r(1216);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("755cfd46",content,!0,{sourceMap:!1})},1215:function(t,e,r){"use strict";r(1133)},1216:function(t,e,r){var n=r(21)((function(i){return i[1]}));n.push([t.i,".center-both[data-v-604d252c]{align-items:center;display:flex;height:31vh;justify-content:center}@media (max-width:500px){.bordertop[data-v-604d252c]{border-left:0;border-top:1px solid #ddd;padding-bottom:5px}}@media (max-width:1500px){.laptop-padding[data-v-604d252c]{padding-left:30px}}",""]),n.locals={},t.exports=n},1334:function(t,e,r){"use strict";r.r(e);var n=r(329),o=r(518),l=r(147),d=r(517),m=r(23),c=(r(88),{props:["branch_id"],data:function(){return{options:{},loading:!1,dataLength:0,data:{male:0,female:0,kids:0}}},watch:{branch_id:function(){this.$store.commit("CommDashboard/community_male_female",null),this.getDataFromApi()}},mounted:function(){this.$store.commit("CommDashboard/community_male_female",null),this.getDataFromApi()},created:function(){var t=new Date;this.date_to=t.toISOString().split("T")[0],this.date_from=t.toISOString().split("T")[0]},methods:{goToReports:function(){this.$router.push("/attendance_report")},viewLogs:function(){this.$router.push("/attendance_report")},getDataFromApi:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.state.community_male_female?t.data=t.$store.state.community_male_female:t.$axios.get("community_dashboard_get_male_female_count",{params:{company_id:t.$auth.user.company_id,branch_id:t.branch_id>0?t.branch_id:null}}).then((function(e){var data=e.data;t.data=data,t.$store.commit("CommDashboard/community_male_female",data)}));case 1:case"end":return e.stop()}}),e)})))()}}}),_=(r(1215),r(116)),component=Object(_.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bordertop pa-2"},[e(d.a,[e(o.a,{attrs:{md:"10",sm:"10",xs:"10"}},[e("h4",[t._v("Total Community Memebrs")])]),t._v(" "),e(o.a,{staticClass:"text-end",attrs:{md:"2",sm:"2",xs:"2"}})],1),t._v(" "),e(d.a,{attrs:{"align-self":"center"}},[e(o.a,{attrs:{lg:"2",md:"2",sm:"2",xs:"2","align-self":"center"}},[e(n.a,{attrs:{color:"blue"}},[e(l.a,{attrs:{color:"#FFF",size:"40"}},[t._v("mdi mdi-human-male")])],1)],1),t._v(" "),e(o.a,{staticClass:"text-red bold text-h3 blue--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.male))]),t._v(" "),e(o.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Male")])],1),t._v(" "),e(d.a,[e(o.a,{staticClass:"pt-md-5",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(n.a,{attrs:{color:"pink"}},[e(l.a,{attrs:{color:"#FFF",size:"40"}},[t._v("mdi mdi-human-female")])],1)],1),t._v(" "),e(o.a,{staticClass:"text-red bold text-h3 pink--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.female))]),t._v(" "),e(o.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Female")])],1),t._v(" "),e(d.a,[e(o.a,{staticClass:"pt-md-5",attrs:{lg:"2",md:"2",sm:"2",xs:"2"}},[e(n.a,{attrs:{color:"yellow"}},[e(l.a,{attrs:{color:"#FFF",size:"40"}},[t._v("mdi mdi-teddy-bear")])],1)],1),t._v(" "),e(o.a,{staticClass:"text-red bold text-h3 yellow--text text-center laptop-padding",attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data&&t.data.kids))]),t._v(" "),e(o.a,{staticClass:"",attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Kids")])],1)],1)}),[],!1,null,"604d252c",null);e.default=component.exports}}]);