(window.webpackJsonp=window.webpackJsonp||[]).push([[338,102,182,253],{1612:function(t,e,n){"use strict";n.r(e);var o=n(894),r=n(114),l=n(133),c=n(87),d=n(516),h=n(1571),m=n(212),f=n(515),_=n(893),v=n(873),y=n(349),x=n(96),D=n(856),I=n(81),S=(n(35),n(23)),O=n(3),w=(n(88),n(13),n(6),n(41),n(61),n(37),n(519),n(72),n(33),n(58),n(117),n(80),n(12),{props:[],data:function(){var t;return t={tableHeight:750,status:"",department_ids:"",daily_date:"",to_date:"",isFilter:!1,totalRowsCount:0,snack:!1,snackColor:"",snackText:"",date:null,menu:!1,options:{}},Object(O.a)(t,"date",null),Object(O.a)(t,"menu",!1),Object(O.a)(t,"loading",!1),Object(O.a)(t,"time_menu",!1),Object(O.a)(t,"Model","Attendance Reports"),Object(O.a)(t,"endpoint","community_report"),Object(O.a)(t,"search",""),Object(O.a)(t,"snackbar",!1),Object(O.a)(t,"add_manual_log",!1),Object(O.a)(t,"dialog",!1),Object(O.a)(t,"generateLogsDialog",!1),Object(O.a)(t,"reportSync",!1),Object(O.a)(t,"from_menu",!1),Object(O.a)(t,"to_menu",!1),Object(O.a)(t,"ids",[]),Object(O.a)(t,"departments",[]),Object(O.a)(t,"employees",[]),Object(O.a)(t,"DateRange",!0),Object(O.a)(t,"devices",[]),Object(O.a)(t,"loading",!1),Object(O.a)(t,"total",0),Object(O.a)(t,"payload",{report_type:"Date Wise Report",from_date:null,to_date:null,daily_date:null,UserID:"",department_ids:[],status:"-1",DeviceID:"",branch_id:"",include_device_types:["all","Access Control"]}),Object(O.a)(t,"response",""),Object(O.a)(t,"data",[]),Object(O.a)(t,"errors",[]),Object(O.a)(t,"report_template","Template1"),Object(O.a)(t,"headers",[{text:"S.NO",align:"left",sortable:!0,key:"id",value:"id",width:"50px"},{text:"Name",align:"left",sortable:!0,key:"user",value:"user",width:"300px"},{text:"Phone",align:"left",sortable:!0,key:"phone_number",value:"phone_number",width:"300px"},{text:"Door",align:"left",sortable:!0,key:"device",value:"door"},{text:"DateTime",align:"left",sortable:!1,key:"dateTime",value:"dateTime",fieldType:"date_range_picker"},{text:"In",align:"left",sortable:!1,key:"in",value:"in"},{text:"Out",align:"left",sortable:!1,key:"out",value:"out"},{text:"Mode",align:"left",sortable:!1,key:"mode",value:"mode"},{text:"Status",align:"left",sortable:!1,key:"status",value:"status"},{text:"User Type",align:"left",sortable:!1,key:"user_type",value:"user_type"}]),Object(O.a)(t,"max_date",null),Object(O.a)(t,"isCompany",!0),Object(O.a)(t,"branches",[]),t},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){var t=this;this.tableHeight=window.innerHeight-370,window.addEventListener("resize",(function(){t.tableHeight=window.innerHeight-370}))},created:function(){this.setFromDate(),this.getBranches(),this.getScheduledEmployees(),this.getDeviceList()},methods:{filterAttr:function(data){this.payload.from_date=data.from,this.payload.to_date=data.to,this.getDataFromApi()},getBranches:function(){var t=this;if(this.$auth.user.branch_id)return this.payload.branch_id=this.$auth.user.branch_id,void(this.isCompany=!1);this.$axios.get("branch",{params:{per_page:1e3,company_id:this.$auth.user.company_id}}).then((function(e){var data=e.data;t.branches=data.data}))},getScheduledEmployees:function(){var t=this,e={params:{per_page:1e3,company_id:this.$auth.user.company_id,shift_type_id:this.shift_type_id}};this.$axios.get("/scheduled_employees_with_type",e).then((function(e){var data=e.data;t.employees=data}))},getDeviceList:function(){var t=this;this.$axios.get("/device_list",{params:{per_page:1e3,company_id:this.$auth.user.company_id}}).then((function(e){var data=e.data;t.devices=data.filter((function(t){return!t.name.includes("Mobile")}))}))},setFromDate:function(){if(null==this.payload.from_date){var dt=new Date,t=dt.getFullYear(),e=dt.getMonth()+1,n=e<10?"0"+e:e;this.payload.from_date="".concat(t,"-").concat(n,"-01")}},setThirtyDays:function(t){var e=new Date(t);e.setDate(e.getDate()+29);var n=new Date(e),o=n.getDate();o=o<"10"?"0"+o:o;var r=n.getMonth()+1;r=r<10?"0"+r:r;var l=n.getFullYear();this.max_date="".concat(l,"-").concat(r,"-").concat(o),this.payload.to_date="".concat(l,"-").concat(r,"-").concat(o)},getFirstAndLastDay:function(){var t=new Date,e=(t.getDate(),(t.getMonth()+1).toString().padStart(2,"0")),n=t.getFullYear(),o=new Date(n,e,0).getDate().toString().padStart(2,"0"),r="".concat(n,"-").concat(e,"-0",1),l=o>9?"".concat(o):"0".concat(o);return[r,"".concat(n,"-").concat(e,"-").concat(l)]},caps:function(t){return t.replace(/_/g," ").replace(/\b\w/g,(function(t){return t.toUpperCase()}))},can:function(t){return this.$pagePermission.can(t,this)},getDataFromApi:function(){var t=this;return Object(S.a)(regeneratorRuntime.mark((function e(){var n,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.payload.from_date){e.next=2;break}return e.abrupt("return",!1);case 2:return t.payload.from_date&&(t.payload.from_date=t.payload.from_date),t.payload.to_date&&(t.payload.to_date=t.payload.to_date),t.loading=!0,e.next=7,t.$store.dispatch("fetchData",{key:"access_control_report",options:t.options,refresh:!0,endpoint:t.endpoint,filters:t.payload});case 7:n=e.sent,data=n.data,o=n.total,t.data=data,t.totalRowsCount=o,t.loading=!1;case 13:case"end":return e.stop()}}),e)})))()},pdfDownload:function(){var t=document.createElement("a");t.setAttribute("href","http://192.168.88.30/api/pdf"),t.setAttribute("target","_blank"),t.click()},process_file:function(t){var e=this;return Object(S.a)(regeneratorRuntime.mark((function n(){var o,r,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.data&&e.data.length){n.next=4;break}return alert("No data found"),n.abrupt("return");case 4:"http://192.168.88.30/api",o={company_id:e.$auth.user.company_id,branch_id:e.payload.branch_id,UserID:e.payload.UserID,DeviceID:e.payload.DeviceID,from_date:e.payload.from_date,to_date:e.payload.to_date,report_type:e.payload.report_type,user_type:e.payload.user_type},e.payload.from_date&&(o.from_date=e.payload.from_date),e.payload.to_date&&(o.to_date=e.payload.to_date),r=Object.keys(o).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(o[t]))})).join("&"),l="".concat("http://192.168.88.30/api","/community_report_").concat(t.toLowerCase(),"?").concat(r,"&include_device_types[]=all&include_device_types[]=Access Control"),(c=document.createElement("a")).setAttribute("href",l),c.setAttribute("target","_blank"),c.click(),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.error("Error processing file:",n.t0.message);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))()}}}),k=w,C=n(116),component=Object(C.a)(k,(function(){var t=this,e=t._self._c;return t.can("attendance_report_view")?e("div",[e(l.a,{staticClass:"mt-2",attrs:{elevation:"0"}},[e(x.a,{attrs:{dense:"",flat:""}},[e("span",{staticClass:"headline black--text"},[t._v(" Community Report ")])]),t._v(" "),e(c.b,{staticClass:"py-3"},[e(f.a,[e(d.a,{attrs:{md:"2",sm:"2"}},[t._v("\n          Report Type\n          "),e(_.a,{staticClass:"mt-2",attrs:{placeholder:"Report Type",outlined:"",dense:"","x-small":"",items:[{id:"",name:"Select All"},{id:"Date Wise Access Control Report",name:"Date Wise Access Control Report"},{id:"Door Wise Access Control Report",name:"Door Wise Access Control Report"},{id:"Allowed",name:"Access Granted Access Control Report"},{id:"Access Denied",name:"Access Denied Access Control Report"}],"item-value":"id","item-text":"name","hide-details":!0},model:{value:t.payload.report_type,callback:function(e){t.$set(t.payload,"report_type",e)},expression:"payload.report_type"}})],1),t._v(" "),e(d.a,{attrs:{md:"2",sm:"4"}},[t._v("\n          Door\n          "),e(_.a,{staticClass:"mt-2",attrs:{outlined:"",dense:"","x-small":"",items:[{device_id:"",name:"Select All"}].concat(Object(I.a)(t.devices)),"item-value":"device_id","item-text":"name","hide-details":!0},model:{value:t.payload.DeviceID,callback:function(e){t.$set(t.payload,"DeviceID",e)},expression:"payload.DeviceID"}})],1),t._v(" "),e(d.a,{attrs:{md:"2",sm:"2"}},[t._v("\n          User Type\n          "),e(_.a,{staticClass:"mt-2",attrs:{placeholder:"User Type",outlined:"",dense:"","x-small":"",items:[{id:"Employee",name:"Employee"},{id:"Visitor",name:"Visitor"}],"item-value":"id","item-text":"name","hide-details":!0},model:{value:t.payload.user_type,callback:function(e){t.$set(t.payload,"user_type",e)},expression:"payload.user_type"}})],1),t._v(" "),e(d.a,{attrs:{md:"2",sm:"4"}},[t._v("\n          User ID\n          "),e(o.a,{staticClass:"mt-2",attrs:{density:"comfortable",outlined:"",dense:"","x-small":"",items:[{system_user_id:"",name_with_user_id:"Select All"}].concat(Object(I.a)(t.employees)),"item-value":"system_user_id","item-text":"name_with_user_id","hide-details":!0},model:{value:t.payload.UserID,callback:function(e){t.$set(t.payload,"UserID",e)},expression:"payload.UserID"}})],1),t._v(" "),e(d.a,{attrs:{md:"2",sm:"5"}},[e("div",{staticClass:"mb-2"},[t._v("Date")]),t._v(" "),e("CustomFilter",{attrs:{defaultFilterType:1,height:"45px "},on:{"filter-attr":t.filterAttr}})],1),t._v(" "),e(d.a,{attrs:{md:"2",sm:"2"}},[e("div",{staticClass:"mb-2"},[t._v(" ")]),t._v(" "),e(r.a,{attrs:{color:"primary",primary:"",fill:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("Generate\n          ")])],1)],1)],1)],1),t._v(" "),e(l.a,{staticClass:"mb-5 mt-5",attrs:{elevation:"0"}},[t.can("attendance_report_access")?e("div",[e("div",{staticClass:"text-center"},[e(v.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.response)+"\n        ")]),t._v(" "),e(v.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e(r.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")])],1),t._v(" "),e(l.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[e(x.a,{staticClass:"backgrounds",attrs:{dense:"",flat:""}},[e(D.b),t._v(" "),e(y.a),t._v(" "),e("span",{staticStyle:{"padding-left":"15px"}},[e("img",{staticClass:"iconsize",staticStyle:{cursor:"pointer"},attrs:{title:"Print",src:"/icons/icon_print.png"},on:{click:function(e){return t.process_file("print_pdf")}}})]),t._v(" "),e("span",{staticStyle:{"padding-left":"15px"}},[e("img",{staticClass:"iconsize",staticStyle:{cursor:"pointer"},attrs:{title:"Download Pdf",src:"/icons/icon_pdf.png"},on:{click:function(e){return t.process_file("download_pdf")}}})])],1),t._v(" "),e(h.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.data,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"model-value":"data.id","server-items-length":t.totalRowsCount,"fixed-header":"",height:t.tableHeight},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.id",fn:function(e){e.item;var n=e.index;return[t._v("\n            "+t._s(n+1)+"\n          ")]}},{key:"item.dateTime",fn:function(e){var n=e.item;e.index;return[t._v("\n            "+t._s(n.date)+" "+t._s(n.time)+"\n          ")]}},{key:"item.in",fn:function(e){var n=e.item;e.index;return[t._v("\n            "+t._s("out"!==n.device.function||"Out"!==n.device.function?"In":"---")+"\n          ")]}},{key:"item.out",fn:function(e){var n=e.item;e.index;return[t._v("\n            "+t._s("out"==n.device.function||"Out"==n.device.function?"Out":"---")+"\n          ")]}},{key:"item.user_type",fn:function(e){var n=e.item;e.index;return[t._v("\n            "+t._s(n.tanent?"Tanent":"Memeber")+"\n          ")]}},{key:"item.status",fn:function(n){var o,r=n.item;n.index;return[t._v("\n            "+t._s(r.status)+"\n            "),e("br"),t._v(" "),e("small",[t._v(t._s(null!==(o=r.reason)&&void 0!==o?o:""))])]}},{key:"item.door",fn:function(e){var n=e.item;e.index;return[t._v("\n            "+t._s(n.device.short_name)+"\n          ")]}},{key:"item.user",fn:function(n){var o=n.item;return[e(f.a,{attrs:{"no-gutters":""}},[e(d.a,{staticStyle:{padding:"3px","padding-left":"0px",width:"45px","max-width":"45px"},attrs:{md:"2"}},[o.tanent?e(m.a,{staticStyle:{"border-radius":"50%",height:"45px",width:"45px","max-width":"45px"},attrs:{src:o.tanent&&o.tanent.profile_picture?o.tanent.profile_picture:"/no-profile-image.jpg"}}):t._e(),t._v(" "),o.member?e(m.a,{staticStyle:{"border-radius":"50%",height:"45px",width:"45px","max-width":"45px"},attrs:{src:o.member&&o.member.profile_picture?o.member.profile_picture:"/no-profile-image.jpg"}}):t._e()],1),t._v(" "),e(d.a,{staticStyle:{padding:"3px"},attrs:{md:"8"}},[o.tanent?e("strong",[t._v("\n                  "+t._s(o.tanent.full_name||"---")+"\n                ")]):t._e(),t._v(" "),o.member?e("strong",[t._v("\n                  "+t._s(o.member.full_name||"---")+"\n                ")]):t._e(),t._v(" "),e("div",{staticClass:"secondary-value"},[t._v("\n                  "+t._s(o.UserID)+"\n                ")])])],1)]}}],null,!1,2212025977)})],1)],1):t._e()])],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomFilter:n(952).default,NoAccess:n(881).default})},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(96),r=n(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");o.a},881:function(t,e,n){"use strict";n.r(e);var o=n(116),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},884:function(t,e,n){var content=n(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},885:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),o.locals={},t.exports=o},894:function(t,e,n){"use strict";n(12),n(14),n(17),n(11),n(18);var o=n(3),r=(n(80),n(6),n(13),n(89),n(99),n(215),n(41),n(61),n(884),n(893)),l=n(214),c=n(65),d=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var o=e[this.$refs.menu.listIndex];o?this.setMenuIndex(t.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",r),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}})},952:function(t,e,n){"use strict";n.r(e);n(56),n(33),n(266);var o=n(951),r=(n(950),{components:{DatePicker:o.a},props:["defaultFilterType","height","width","default_date_from","default_date_to"],data:function(){return{time3:null,from_date:"",from_menu:!1,to_date:"",to_menu:!1,loading:!1,showTimePanel:!1,filterType:1,search:""}},watch:{filterType:function(){this.showTimePanel=!0,this.FilterData()}},mounted:function(){5==this.filterType&&document.querySelector(".mx-input").focus();var t=document.getElementsByClassName("mx-input");this.height&&""!=this.height&&(t[0].style.height=this.height),this.width&&""!=this.width&&(t[0].style.width=this.width),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date]},created:function(){this.defaultFilterType&&(this.filterType=this.defaultFilterType);var t=new Date;this.default_date_from||(this.from_date=t.toISOString().slice(0,10)),this.default_date_to||(this.to_date=t.toISOString().slice(0,10)),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date];var data={from:this.from_date,to:this.to_date,type:1,search:"this.search"};this.$emit("filter-attr",data)},methods:{commonMethod:function(){this.from_date&&this.to_date},CustomFilter:function(){if(this.from_date=this.time3[0],this.to_date=this.time3[1],this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},FilterData:function(){this.from_date=this.time3[0],this.to_date=this.time3[1];var t=new Date;if(1==this.filterType)this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10);else if(2==this.filterType){var e=new Date;e.setDate(t.getDate()-1),this.from_date=e.toISOString().slice(0,10),this.to_date=e.toISOString().slice(0,10)}else if(3==this.filterType){var n=new Date(t);n.setDate(t.getDate()-t.getDay());var o=new Date(t);o.setDate(t.getDate()-t.getDay()+6),this.from_date=n.toISOString().slice(0,10),this.to_date=o.toISOString().slice(0,10)}else if(4==this.filterType)this.from_date=this.formatDate(new Date(t.getFullYear(),t.getMonth(),1)),this.to_date=this.formatDate(new Date(t.getFullYear(),t.getMonth()+1,0));else if(5==this.filterType)return void(this.time3=[]);if(this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},formatDate:function(t){var e=t.getDate(),n=t.getMonth()+1;return t.getFullYear()+"-"+(n<10?"0":"")+n+"-"+(e<10?"0":"")+e}}}),l=n(116),component=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)("date-picker",{attrs:{label:"Date","value-type":"format",format:"YYYY-MM-DD",type:"date",range:""},on:{change:function(e){return t.CustomFilter()}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}})}),[],!1,null,null,null);e.default=component.exports}}]);