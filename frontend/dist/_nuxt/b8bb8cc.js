(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{1645:function(t,e,r){"use strict";r.r(e);var n=r(114),o=r(133),l=r(87),c=r(516),d=r(1571),m=r(1572),f=r(350),_=r(147),v=r(212),h=r(863),O=r(515),x=r(349),j=r(214),w=r(96),y=r(856),k=r(3),D=(r(35),{data:function(){var t;return t={previewImage:!1,previewImageSrc:"",cumulativeIndex:1,perPage:10,currentPage:1,totalRowsCount:0,purposeList:[],branchesList:[],id:"",from_menu_filter:"",from_date_filter:"",showFilters:!1,filters:{},isFilter:!1,generateLogsDialog:!1},Object(k.a)(t,"totalRowsCount",0),Object(k.a)(t,"datatable_search_textbox",""),Object(k.a)(t,"datatable_searchById",""),Object(k.a)(t,"filter_employeeid",""),Object(k.a)(t,"snack",!1),Object(k.a)(t,"snackColor",""),Object(k.a)(t,"snackText",""),Object(k.a)(t,"departments",[]),Object(k.a)(t,"Model","Log"),Object(k.a)(t,"endpoint","visitor_logs"),Object(k.a)(t,"from_date",null),Object(k.a)(t,"from_menu",!1),Object(k.a)(t,"to_date",null),Object(k.a)(t,"to_menu",!1),Object(k.a)(t,"payload",{}),Object(k.a)(t,"loading",!0),Object(k.a)(t,"date",null),Object(k.a)(t,"menu",!1),Object(k.a)(t,"loading",!1),Object(k.a)(t,"time_menu",!1),Object(k.a)(t,"log_payload",{user_id:41,device_id:"",date:null,time:null}),Object(k.a)(t,"ids",[]),Object(k.a)(t,"data",[]),Object(k.a)(t,"devices",[]),Object(k.a)(t,"total",0),Object(k.a)(t,"pagination",{current:1,total:0,itemsPerPage:1e3}),Object(k.a)(t,"payloadOptions",{}),Object(k.a)(t,"options",{current:1,total:0,itemsPerPage:10}),Object(k.a)(t,"errors",[]),Object(k.a)(t,"response",""),Object(k.a)(t,"snackbar",!1),Object(k.a)(t,"headers",[{text:"#",align:"left",sortable:!1,key:"UserID",value:"sno",filterable:!0,filterSpecial:!1},{text:"Picture",align:"left",sortable:!1,key:"picture",value:"picture",filterable:!0,filterSpecial:!1},{text:"Device Name",align:"left",sortable:!1,key:"device",value:"device",filterable:!0,filterSpecial:!1},{text:"Time",align:"left",sortable:!1,key:"time",value:"time",filterable:!0,filterSpecial:!1},{text:"Preview",align:"left",sortable:!1,key:"preview",value:"preview",filterable:!0,filterSpecial:!1}]),Object(k.a)(t,"from_date",""),Object(k.a)(t,"to_date",""),t},created:function(){var dt=new Date,t=dt.getFullYear(),e=dt.getMonth()+1;new Date(dt.getFullYear(),e,0);e=e<10?"0"+e:e,this.from_date="".concat(t,"-").concat(e,"-").concat(dt.getDate()),this.to_date="".concat(t,"-").concat(e,"-").concat(dt.getDate()),this.getDataFromApi()},methods:{filterAttr:function(data){this.from_date=data.from,this.to_date=data.to,this.getDataFromApi()},popupImage:function(t){this.previewImage=!0,this.previewImageSrc=t.url},getDataFromApi:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]||this.endpoint,arguments.length>1&&void 0!==arguments[1]?arguments[1]:""),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";var n=this.options,o=n.sortBy,l=n.sortDesc,c=n.page,d=n.itemsPerPage,m=o?o[0]:"",f=l?l[0]:"";this.payloadOptions={params:{page:c,sortBy:m,sortDesc:f,per_page:d,company_id:this.$auth.user.company_id,from_date:this.from_date}},""!=e&&(this.payloadOptions.params[e]=r),this.loading=!0,this.$axios.get("".concat("get-unknown-visitors-list","?page=").concat(this.options.page),this.payloadOptions).then((function(e){var data=e.data;t.data=data,t.loading=!1}))}}}),I=D,S=r(116),component=Object(S.a)(I,(function(){var t=this,e=t._self._c;return e("div",[e(O.a,{attrs:{justify:"center"}},[e(f.a,{attrs:{persistent:"","max-width":"500px"},model:{value:t.previewImage,callback:function(e){t.previewImage=e},expression:"previewImage"}},[e(o.a,[e(l.c,{staticClass:"popup_background"},[e("span",{staticClass:"headline",attrs:{dense:""}},[t._v("Preview Image ")]),t._v(" "),e(x.a),t._v(" "),e(_.a,{attrs:{dark:"",outlined:""},on:{click:function(e){t.previewImage=!1}}},[t._v("\n            mdi mdi-close-circle\n          ")])],1),t._v(" "),e(l.b,[e("p",{staticClass:"text-center"},[e(v.a,{staticStyle:{height:"auto","text-align":"center",width:"auto"},attrs:{src:t.previewImageSrc}})],1)])],1)],1)],1),t._v(" "),e(O.a,[e(c.a,[e(o.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[e(w.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[e(y.b,[e("span",[t._v(" Un-Known Visitor - Logs")])]),t._v(" "),e(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"},on:{click:function(e){return t.getDataFromApi()}}},[e(_.a,{staticClass:"ml-2",attrs:{dark:""}},[t._v("mdi mdi-reload")])],1),t._v(" "),e("span",{staticClass:"mt-8 ml-5"},[e(h.a,{ref:"from_menu_filter",attrs:{width:"80px!important","close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(j.a,t._g(t._b({attrs:{width:"80px!important","hide-details":!t.from_date,outlined:"",dense:"",readonly:"",placeholder:"Select Date"},model:{value:t.from_date,callback:function(e){t.from_date=e},expression:"from_date"}},"v-text-field",o,!1),n))]}}]),model:{value:t.from_menu_filter,callback:function(e){t.from_menu_filter=e},expression:"from_menu_filter"}},[t._v(" "),e(m.a,{staticStyle:{height:"350px"},attrs:{"no-title":"",scrollable:""},on:{input:function(e){t.from_menu_filter=!1,t.getDataFromApi()}},model:{value:t.from_date,callback:function(e){t.from_date=e},expression:"from_date"}},[e(x.a),t._v(" "),e(n.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.from_menu_filter=!1,t.getDataFromApi()}}},[t._v("\n                  Clear\n                ")])],1)],1)],1),t._v(" "),e(x.a)],1),t._v(" "),e(d.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.data,"model-value":"data.id",loading:t.loading},scopedSlots:t._u([{key:"item.sno",fn:function(e){var r=e.item;e.index;return[t._v("\n            "+t._s(t.currentPage?(t.currentPage-1)*t.perPage+(t.cumulativeIndex+t.data.indexOf(r)):"-")+"\n          ")]}},{key:"item.UserID",fn:function(r){var n=r.item;return[e("strong",[t._v(" "+t._s(n.UserID?n.UserID:"---"))])]}},{key:"item.picture",fn:function(r){var n=r.item;r.index;return[e(O.a,{attrs:{"no-gutters":""}},[e(c.a,{staticStyle:{padding:"5px","padding-left":"0px",width:"100px","max-width":"100px"}},[e(v.a,{staticStyle:{"border-radius":"10%",height:"auto",width:"100px","max-width":"100px"},attrs:{src:n.url}})],1),t._v(" "),e(c.a,{staticStyle:{padding:"10px"}})],1)]}},{key:"item.device",fn:function(e){var r=e.item;return[t._v("\n            "+t._s(r.device_name)+"\n          ")]}},{key:"item.file",fn:function(e){e.time;return[t._v("\n            "+t._s(t.item.time)+"\n          ")]}},{key:"item.preview",fn:function(r){var o=r.item;return[e(n.a,{staticClass:"primary",on:{click:function(e){return t.popupImage(o)}}},[t._v(" Preview ")])]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},856:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l}));var n=r(96),o=r(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");n.a}}]);