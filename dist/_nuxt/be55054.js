(window.webpackJsonp=window.webpackJsonp||[]).push([[301,193],{1633:function(e,t,r){"use strict";r.r(t);var n=r(114),o=r(133),l=r(518),c=r(875),d=r(1556),m=r(147),f=r(212),_=r(326),h=r(204),v=r(60),y=r(862),O=r(517),j=r(872),x=r(349),k=r(214),w=r(96),D=r(855),S=(r(37),r(12),r(14),r(13),r(17),r(11),r(18),r(107)),F=r(23),C=r(3),P=(r(521),r(6),r(72),r(33),r(58),r(35),r(55),r(88),["profile_picture","passport_doc","id_doc","contract_doc","ejari_doc","license_doc","others_doc","floor","room"]),I=["profile_picture"];function M(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function R(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A={data:function(){var e;return e={disabled:!1,step:1,members:[],payload:{full_name:"",phone_number:"",floor_id:"",room_id:"",start_date:"",end_date:""},imagePreview:"/no-profile-image.jpg",setImagePreview:null,imageMemberPreview:"/no-profile-image.jpg",tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1},Object(C.a)(e,"tab","0"),Object(C.a)(e,"attrs",[]),Object(C.a)(e,"dialog",!1),Object(C.a)(e,"editDialog",!1),Object(C.a)(e,"viewDialog",!1),Object(C.a)(e,"selectedFile",""),Object(C.a)(e,"DialogBox",!1),Object(C.a)(e,"memberDialogBox",!1),Object(C.a)(e,"viewMemberDialogBox",!1),Object(C.a)(e,"m",!1),Object(C.a)(e,"expand",!1),Object(C.a)(e,"expand2",!1),Object(C.a)(e,"boilerplate",!1),Object(C.a)(e,"tab",null),Object(C.a)(e,"selectedItem",1),Object(C.a)(e,"on",""),Object(C.a)(e,"files",""),Object(C.a)(e,"search",""),Object(C.a)(e,"loading",!1),Object(C.a)(e,"next_page_url",""),Object(C.a)(e,"prev_page_url",""),Object(C.a)(e,"current_page",1),Object(C.a)(e,"per_page",1e3),Object(C.a)(e,"ListName",""),Object(C.a)(e,"color","background"),Object(C.a)(e,"response",""),Object(C.a)(e,"snackbar",!1),Object(C.a)(e,"btnLoader",!1),Object(C.a)(e,"upload",{name:""}),Object(C.a)(e,"options",{}),Object(C.a)(e,"Model","Contractor"),Object(C.a)(e,"endpoint","visitor-list"),Object(C.a)(e,"search",""),Object(C.a)(e,"snackbar",!1),Object(C.a)(e,"ids",[]),Object(C.a)(e,"loading",!1),Object(C.a)(e,"data",[]),Object(C.a)(e,"errors",[]),Object(C.a)(e,"headers",[{text:"Full Name",align:"left",sortable:!0,key:"full_name",value:"full_name",filterable:!0,filterSpecial:!1},{text:"From",align:"left",sortable:!0,key:"from",value:"from",filterable:!0,filterSpecial:!1},{text:"To",align:"left",sortable:!0,key:"to",value:"to",filterable:!0,filterSpecial:!1},{text:"Purpose",align:"left",sortable:!0,key:"purpose.name",value:"purpose.name",filterable:!0,filterSpecial:!1},{text:"gender",align:"left",sortable:!0,key:"gender",value:"gender",filterable:!0,filterSpecial:!1},{text:"phone_number",align:"left",sortable:!0,key:"phone_number",value:"phone_number",filterable:!0,filterSpecial:!1},{text:"email",align:"left",sortable:!0,key:"email",value:"email",filterable:!0,filterSpecial:!1},{text:"id_number",align:"left",sortable:!0,key:"id_number",value:"id_number",filterable:!0,filterSpecial:!1},{text:"host_company_name",align:"left",sortable:!0,key:"host_company_name",value:"host_company_name",filterable:!0,filterSpecial:!1},{text:"status_id",align:"left",sortable:!0,key:"status_id",value:"status_id",filterable:!0,filterSpecial:!1},{text:"date",align:"left",sortable:!0,key:"date",value:"date",filterable:!0,filterSpecial:!1},{text:"Details",align:"left",sortable:!1,key:"options",value:"options"}]),Object(C.a)(e,"formAction","Create"),Object(C.a)(e,"date",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(C.a)(e,"menu",!1),Object(C.a)(e,"menu2",!1),Object(C.a)(e,"menu3",!1),Object(C.a)(e,"floors",[]),Object(C.a)(e,"member_types",[]),Object(C.a)(e,"rooms",[]),Object(C.a)(e,"member",{full_name:null,phone_number:null,age:null,member_type:null,nationality:null,tanent_id:0}),e},created:function(){var e=this;return Object(F.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!1,e.boilerplate=!0,e.getDataFromApi();case 3:case"end":return t.stop()}}),t)})))()},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},can:function(e){return this.$pagePermission.can(e,this)},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loadinglinear=!0;var t=this.options,r=t.sortBy,n=t.sortDesc,o=t.page,l=t.itemsPerPage,c={params:R({page:o,sortBy:r?r[0]:"",sortDesc:n?n[0]:"",per_page:l,company_id:this.$auth.user.company_id},this.filters)};this.$axios.get(this.endpoint,c).then((function(t){var data=t.data;e.data=data.data,e.totalRowsCount=data.total,0==e.data.length?e.displayErrormsg=!0:e.displayErrormsg=!1,e.loadinglinear=!1}))},addItem:function(){this.disabled=!1,this.formAction="Create",this.DialogBox=!0,this.payload={},this.setImagePreview="/no-profile-image.jpg"},addMember:function(e){this.disabled=!1,this.formAction="Create",this.memberDialogBox=!0,this.payload=e,this.member.tanent_id=e.id,this.member.system_user_id=parseInt(e.system_user_id)+parseInt(e.members.length)+1,this.member.company_id=this.$auth.user.company_id,this.getExistingMembers(e.id)},viewMember:function(e){this.disabled=!0,this.formAction="View",this.viewMemberDialogBox=!0,this.payload=e,this.getExistingMembers(e.id)},editItem:function(e){var t=e.profile_picture,r=(e.passport_doc,e.id_doc,e.contract_doc,e.ejari_doc,e.license_doc,e.others_doc,e.floor,e.room,Object(S.a)(e,P));this.formAction="Edit",this.disabled=!1,this.DialogBox=!0,this.setImagePreview=t,this.payload=r,this.getRoomsByFloorId(r.floor_id)},viewItem:function(e){var t=e.profile_picture,r=Object(S.a)(e,I);this.formAction="View",this.disabled=!0,this.DialogBox=!0,this.imagePreview=t,this.payload=r},getExistingMembers:function(e){var t=this;this.$axios.get("/members/".concat(e)).then((function(r){var data=r.data;t.members=data,data.length||t.members.push({full_name:null,phone_number:null,age:null,member_type:null,nationality:null,tanent_id:e})}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("".concat(this.endpoint,"/").concat(e.id)).then((function(e){e.data;t.getDataFromApi(),t.snackbar=!0,t.response="Record deleted successfully"})).catch((function(e){return console.log(e)}))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},previewImage:function(e){var t=this,r=this.payload.profile_picture;if(r){var n=new FileReader;n.onload=function(e){t.imagePreview=e.target.result},n.readAsDataURL(r)}else this.imagePreview=null},previewMemberImage:function(e){var t=this,r=this.member.profile_picture;if(r){var n=new FileReader;n.onload=function(e){t.imageMemberPreview=e.target.result},n.readAsDataURL(r)}else this.imageMemberPreview=null},others_doc:function(e){var t=this;this.upload.name=e.target.files[0]||"";var r=this.$refs.otherDoc_input.files;if(r[0].size>1048576)return e.preventDefault(),void(this.errors.profile_picture=["File too big (> 1MB). Upload less than 1MB"]);if(r&&r[0]){var n=new FileReader;n.onload=function(e){t.selectedFile=event.target.result,t.$refs.cropper.replace(t.selectedFile)},n.readAsDataURL(r[0]),this.$emit("input",r[0]),this.dialogCropping=!0}},mapper:function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);return this.payload.profile_picture&&t.append("profile_picture",this.upload.name),this.payload.passport_doc&&t.append("passport_doc",this.payload.passport_doc.name),t.append("company_id",this.$auth.user.company_id),t},handleSuccessResponse:function(e){this.snackbar=!0,this.response=e,this.dialog=!0,this.getDataFromApi()}}},B=r(116),component=Object(B.a)(A,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(j.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.loading?t("Preloader"):t("div",[t(j.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(r){var o=r.attrs;return[t(n.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",o,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n      "+e._s(e.snackText)+"\n\n      ")]),e._v(" "),t(o.a,{attrs:{elevation:"0"}},[t(w.a,{staticClass:"mb-2",attrs:{dense:"",flat:""}},[t(D.b,[t("span",[e._v(e._s(e.Model)+"s ")])]),e._v(" "),t("span",[t(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(m.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:e.clearFilters}},[e._v("mdi mdi-reload")])],1)],1),e._v(" "),t(x.a),e._v(" "),t("CommunityContractorCreate",{on:{success:e.handleSuccessResponse}})],1),e._v(" "),t(d.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.data,"model-value":"data.id",loading:e.loadinglinear,options:e.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.category",fn:function(t){var r,n,o=t.item;return[e._v("\n          "+e._s(null==o||null===(r=o.room)||void 0===r||null===(n=r.room_category)||void 0===n?void 0:n.name)+"\n        ")]}},{key:"header",fn:function(r){var n=r.props.headers;return[e.isFilter?t("tr",e._l(n,(function(header){return t("td",{key:header.text},[t(c.a,[header.filterable&&!header.filterSpecial?t(k.a,{attrs:{clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{"click:clear":function(t){e.filters[header.value]="",e.applyFilters()},input:function(t){return e.applyFilters(header.key,t)}},model:{value:e.filters[header.value],callback:function(t){e.$set(e.filters,header.value,t)},expression:"filters[header.value]"}}):e._e()],1)],1)})),0):e._e()]}},{key:"item.full_name",fn:function(r){var n=r.item;r.index;return[t(O.a,{attrs:{"no-gutters":""}},[t(l.a,{staticStyle:{padding:"5px","padding-left":"0px",width:"50px","max-width":"50px"}},[t(f.a,{staticStyle:{"border-radius":"50%",height:"50px",width:"50px","max-width":"50px"},attrs:{src:n.profile_picture?n.profile_picture:"/no-profile-image.jpg"}})],1),e._v(" "),t(l.a,{staticStyle:{padding:"10px"}},[t("strong",[e._v(" "+e._s(n.full_name))]),e._v(" "),t("p",[e._v("\n                "+e._s(n.phone_number)),n.phone_number?t("br"):e._e(),e._v(e._s(n.nationality)+"\n              ")])])],1)]}},{key:"item.from",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(r.visit_from)+" "+e._s(r.time_in)+"\n        ")]}},{key:"item.to",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(r.visit_to)+" "+e._s(r.time_out)+"\n        ")]}},{key:"item.options",fn:function(r){var o=r.item;return[t(y.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[t(n.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),o),[t(m.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),t(_.a,{attrs:{width:"150",dense:""}},[t(h.a,[t(v.c,{staticStyle:{cursor:"pointer"}},[t("CommunityContractorSingle",{key:e.generateRandomId(),attrs:{item:o}})],1)],1)],1)],1)]}}],null,!1,3234926012)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Preloader:r(897).default})},855:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var n=r(96),o=r(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");n.a},897:function(e,t,r){"use strict";r.r(t);var n=r(212),o=r(116),component=Object(o.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(n.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);