(window.webpackJsonp=window.webpackJsonp||[]).push([[259,191],{1196:function(t,e,n){"use strict";n.r(e);var r=n(329),o=n(114),l=n(133),c=n(516),d=n(1571),m=n(147),f=n(212),v=n(326),_=n(204),h=n(60),y=n(863),O=n(515),k=n(873),x=n(349),w=n(96),j=n(856),D=(n(12),n(14),n(13),n(17),n(11),n(18),n(23)),F=n(3);n(519),n(6),n(72),n(55),n(88);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(F.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R={data:function(){var t;return t={disabled:!1,tab:null,totalRowsCount:0,sortBy:"id",sortDesc:!1,loadinglinear:!0,displayErrormsg:!1,loading:!1,color:"background",response:"",options:{},Model:"Tenants",endpoint:"tanent-timezone-mapping",search:"",snackbar:!1,ids:[]},Object(F.a)(t,"loading",!1),Object(F.a)(t,"data",[]),Object(F.a)(t,"headers",[{text:"Full Name",align:"left",sortable:!1,key:"full_name",value:"full_name",filterable:!0,type:"text",width:"200px"},{text:"Member Type",align:"left",sortable:!1,key:"member_type",value:"member_type",filterable:!1,type:"text"},{text:"Floor No",align:"left",sortable:!0,key:"floor_number",value:"floor.floor_number",filterable:!0,type:"text"},{text:"Room No",align:"left",sortable:!0,key:"room_number",value:"room.room_number",filterable:!0,type:"text"},{text:"Category",align:"left",sortable:!0,key:"category",value:"room.room_category.name",filterable:!0,type:"text"},{text:"Details",align:"left",sortable:!1,key:"options",value:"options"}]),t},created:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.boilerplate=!0,t.getDataFromApi();case 3:case"end":return e.stop()}}),e)})))()},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")},can:function(t){return this.$pagePermission.can(t,this)},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t=this;this.loadinglinear=!0;var e=this.options,n=e.sortBy,r=e.sortDesc,o=e.page,l=e.itemsPerPage,c={params:C({page:o,sortBy:n?n[0]:"",sortDesc:r?r[0]:"",per_page:l,company_id:this.$auth.user.company_id},this.filters)};this.$axios.get(this.endpoint,c).then((function(e){var data=e.data;t.data=data.data,t.totalRowsCount=data.total,0==t.data.length?t.displayErrormsg=!0:t.displayErrormsg=!1,t.loadinglinear=!1}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},handleSuccessResponse:function(t){this.snackbar=!0,this.response=t,this.getDataFromApi()}}},S=n(116),component=Object(S.a)(R,(function(){var t=this,e=t._self._c;return t.can("tanent_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(k.a,{attrs:{small:"",top:"top",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),!t.loading&&t.can("tanent_view")?e("div",[e(w.a,{attrs:{dense:"",flat:""}},[e(j.b,[e("span",[t._v(t._s(t.Model))])]),t._v(" "),e("span",[e(o.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[e(m.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:t.clearFilters}},[t._v("mdi mdi-reload")])],1)],1),t._v(" "),e(x.a),t._v(" "),e("span",[e(m.a,{attrs:{right:"",color:"black"},on:{click:function(){return t.$router.push("/community/access_control/tenant-mapping/new")}}},[t._v("mdi-timetable")])],1)],1),t._v(" "),e(l.a,{attrs:{elevation:"1"}},[e(d.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.data,"model-value":"data.id",loading:t.loadinglinear,options:t.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.full_name",fn:function(n){var o,l=n.item;n.index;return[e(O.a,{attrs:{"no-gutters":""}},[e(c.a,{staticClass:"ma-2",attrs:{cols:"3"}},[e(r.a,[e(f.a,{attrs:{src:null!==(o=l.profile_picture)&&void 0!==o?o:"/no-profile-image.jpg"}})],1)],1),t._v(" "),e(c.a,{staticClass:"pt-2"},[e("strong",[t._v(" "+t._s(l.full_name))]),t._v(" "),e("p",[t._v("\n                "+t._s(l.phone_number)),l.phone_number?e("br"):t._e(),t._v(t._s(l.nationality)+"\n              ")])])],1)]}},{key:"item.options",fn:function(n){var r=n.item;return[e(y.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),r),[e(m.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(v.a,{attrs:{width:"150",dense:""}},[t.can("tanent_edit")?e(_.a,[e(h.c,{staticStyle:{cursor:"pointer"}},[e("TimezoneTanentDeleteMapping",{attrs:{item:r},on:{success:t.handleSuccessResponse}})],1)],1):t._e()],1)],1)]}}],null,!1,852166309)})],1)],1):e("Preloader")],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TimezoneTanentDeleteMapping:n(1268).default,Preloader:n(896).default})},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(96),o=n(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a},896:function(t,e,n){"use strict";n.r(e);var r=n(212),o=n(116),component=Object(o.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);