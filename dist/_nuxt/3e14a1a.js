(window.webpackJsonp=window.webpackJsonp||[]).push([[105,91],{1308:function(t,e,n){var content=n(1510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("55d382ac",content,!0,{sourceMap:!1})},1509:function(t,e,n){"use strict";n(1308)},1510:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-60bbfb24]{align-items:center;display:flex;height:31vh;justify-content:center}.breakthewords[data-v-60bbfb24]{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;font-size:12px;overflow:hidden;text-overflow:ellipsis}",""]),o.locals={},t.exports=o},1718:function(t,e,n){"use strict";n.r(e);var o=n(114),r=n(133),c=n(87),l=n(518),d=n(875),m=n(350),v=n(147),_=n(212),f=n(326),h=n(204),y=n(60),w=n(862),x=n(517),k=n(349),D=(n(14),n(67),n(33),n(58),n(37),n(55),{props:["branch_id"],data:function(){return{announcementDialog:!1,announcementViewObj:{},options:{},Model:"Announcement",endpoint:"announcement_list",loading:!1,headers:[{text:"Title",align:"left",sortable:!0,key:"title",value:"title"},{text:"Start Date",align:"left",sortable:!0,value:"start_date",key:"start_date"},{text:"End Date",align:"left",sortable:!0,value:"end_date",key:"end_date"}],data:[]}},watch:{branch_id:function(){this.$store.commit("dashboard/announcements",null),this.getDataFromApi()}},created:function(){this.getDataFromApi()},methods:{viewDetails:function(t){this.announcementViewObj=t,this.announcementDialog=!0},getUserPic:function(t){return null==t.user?"/no-profile-image.jpg":t.user&&"company"==t.user.user_type?t.user.company.logo:t.user&&"employee"==t.user.user_type?t.user.employee.profile_picture:void 0},getPriorityColor:function(t){return null==t?"":"Urgent"==t.name?"color:#F44336":"Informational"==t.name?"color:#3F51B5":"Meeting"==t.name?"color:#FF5722":"Priority"==t.name?"color:#4CAF50":"Low Priority"==t.name?"color:#000000":void 0},viewLogs:function(){this.$router.push("/announcement")},getDataFromApi:function(){var t=this,e=this.$store.state.dashboard.announcements;e?this.data=e:setTimeout((function(){t.loading=!0;var e=t.options,n=e.sortBy,o=e.sortDesc,r={params:{page:e.page,sortBy:n?n[0]:"",sortDesc:o?o[0]:"",per_page:5,company_id:t.$auth.user.company_id,branch_id:t.branch_id>0?t.branch_id:null}};t.$axios.get(t.endpoint,r).then((function(e){var data=e.data;t.loading=!1,t.data=data.data,t.$store.commit("dashboard/announcements",data.data),data.total||t.headers}))}),5e3)}}}),C=(n(1509),n(116)),component=Object(C.a)(D,(function(){var t=this,e=t._self._c;return e("div",[e(m.a,{attrs:{persistent:"","max-width":"60%"},model:{value:t.announcementDialog,callback:function(e){t.announcementDialog=e},expression:"announcementDialog"}},[e(r.a,[e(c.d,{staticClass:"popup_background",attrs:{dense:""}},[t._v("\n        Announcement\n        "),e(k.a),t._v(" "),e(v.a,{attrs:{outlined:"",dark:""},on:{click:function(e){t.announcementDialog=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(c.c,[e(d.a,[e("h3",[t._v(t._s(t.announcementViewObj.title))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.announcementViewObj.description)}})])],1)],1)],1),t._v(" "),e(x.a,[e(l.a,{attrs:{md:"10"}},[e("h4",{staticClass:"pl-2"},[t._v("Announcements")])]),t._v(" "),e(l.a,{staticClass:"menu-icon-right",attrs:{md:"2"}},[e(w.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",c,!1),r),[e(v.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(f.a,{attrs:{width:"120",dense:""}},[e(h.a,{on:{click:function(e){return t.viewLogs()}}},[e(y.c,{staticStyle:{cursor:"pointer"}},[t._v("\n              View All\n            ")])],1)],1)],1)],1)],1),t._v(" "),t.loading?e(x.a,[e("ComonPreloader",{attrs:{icon:"face-scan"}})],1):t._l(t.data,(function(n,i){return e(x.a,{key:i,on:{click:function(e){return t.viewDetails(n)}}},[e(l.a,{staticClass:"text-right",staticStyle:{"text-align":"right",float:"right"},attrs:{md:"2",sm:"2",xs:"2"}},[e(_.a,{staticStyle:{"border-radius":"50%",height:"auto",width:"40px","max-width":"40px",float:"right"},attrs:{src:t.getUserPic(n)}})],1),t._v(" "),e(l.a,{attrs:{md:"10",sm:"10",xs:"10"}},[e("div",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"breakthewords",domProps:{innerHTML:t._s(n.description.replace(/<[^>]*>/g,""))}}),t._v(" "),e(x.a,[e(l.a,{attrs:{md:"6",sm:"6",xs:"6"}},[e("div",{staticStyle:{color:"grey","font-size":"12px"}},[t._v("\n            "+t._s(n.dateTime)+"\n          ")])]),t._v(" "),e(l.a,{staticClass:"text-center",staticStyle:{"font-size":"12px"},attrs:{md:"6",sm:"6",xs:"6"}},[e("span",{style:t.getPriorityColor(n.category)},[t._v(t._s(n.category&&n.category.name))])])],1)],1)],1)})),t._v(" "),0==t.data.length?e(l.a,{attrs:{md:"12"}},[e("center",[t._v("0 Announcements")])],1):t._e()],2)}),[],!1,null,"60bbfb24",null);e.default=component.exports;installComponents(component,{ComonPreloader:n(896).default})},896:function(t,e,n){"use strict";n.r(e);var o=n(212),r={props:["icon"]},c=n(116),component=Object(c.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(o.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);