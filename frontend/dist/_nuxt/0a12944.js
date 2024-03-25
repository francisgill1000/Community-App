(window.webpackJsonp=window.webpackJsonp||[]).push([[328,180,189],{1642:function(e,t,n){"use strict";n.r(t);var r=n(894),l=n(114),o=n(133),c=n(516),d=n(876),h=n(1563),m=n(147),f=n(515),v=n(873),_=n(349),y=n(214),x=n(96),O=n(856),I=n(852),j=n(81),k=(n(35),n(12),n(14),n(17),n(11),n(18),n(31)),S=n(23),C=n(3);n(117),n(80),n(13),n(6),n(526),n(99),n(88);function D(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var F={props:["id"],data:function(){var e;return e={disabled:!1,openTimePicker:!1,closeTimePicker:!1,menu:!1,tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,tabMenu:[]},Object(C.a)(e,"tab","0"),Object(C.a)(e,"employeeId",0),Object(C.a)(e,"employeeObject",{}),Object(C.a)(e,"attrs",[]),Object(C.a)(e,"dialog",!1),Object(C.a)(e,"editDialog",!1),Object(C.a)(e,"viewDialog",!1),Object(C.a)(e,"selectedFile",""),Object(C.a)(e,"DialogBox",!1),Object(C.a)(e,"m",!1),Object(C.a)(e,"expand",!1),Object(C.a)(e,"expand2",!1),Object(C.a)(e,"right",!0),Object(C.a)(e,"rightDrawer",!1),Object(C.a)(e,"drawer",!0),Object(C.a)(e,"tab",null),Object(C.a)(e,"selectedItem",1),Object(C.a)(e,"on",""),Object(C.a)(e,"files",""),Object(C.a)(e,"search",""),Object(C.a)(e,"loading",!1),Object(C.a)(e,"next_page_url",""),Object(C.a)(e,"prev_page_url",""),Object(C.a)(e,"current_page",1),Object(C.a)(e,"per_page",1e3),Object(C.a)(e,"ListName",""),Object(C.a)(e,"color","background"),Object(C.a)(e,"response",""),Object(C.a)(e,"snackbar",!1),Object(C.a)(e,"btnLoader",!1),Object(C.a)(e,"max_employee",0),Object(C.a)(e,"employee",{title:"Mr",display_name:"",employee_id:"",system_user_id:""}),Object(C.a)(e,"upload",{name:""}),Object(C.a)(e,"previewImage",null),Object(C.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(C.a)(e,"options",{}),Object(C.a)(e,"Model","Parking Report"),Object(C.a)(e,"endpoint","parking-allocation"),Object(C.a)(e,"search",""),Object(C.a)(e,"snackbar",!1),Object(C.a)(e,"ids",[]),Object(C.a)(e,"loading",!1),Object(C.a)(e,"editedIndex",-1),Object(C.a)(e,"response",""),Object(C.a)(e,"data",[]),Object(C.a)(e,"errors",[]),Object(C.a)(e,"headers",[{text:"#",align:"left",sortable:!1,key:"id",value:"id",filterable:!1,width:"10px"},{text:"Category",align:"left",sortable:!0,key:"category",value:"category",filterable:!0,type:"dropdown",render_childens:!0,items:[{id:"Commercial",name:"Commercial"},{id:"Residence",name:"Residence"},{id:"VIP",name:"VIP"},{id:"Guest",name:"Guest"},{id:"Green",name:"Green"},{id:"Special Needs",name:"Special Needs"}]},{text:"Floor",align:"left",sortable:!0,key:"floor_id",value:"floor.floor_number",filterable:!0,type:"dropdown",items:[{id:"",name:""}]},{text:"Flat/Room",align:"left",sortable:!0,key:"room_number",value:"vehicle.tanent.room.room_number",filterable:!0,type:"text"},{text:"Parking Number",align:"left",sortable:!0,key:"parking_number",value:"parking_number",filterable:!0,type:"text"},{text:"Car Number",align:"left",sortable:!0,key:"car_number",value:"vehicle.car_number",filterable:!0,type:"text"},{text:"Car Brand",align:"left",sortable:!0,key:"car_brand",value:"vehicle.car_brand",filterable:!0,type:"text"},{text:"Tanent",align:"left",sortable:!0,key:"full_name",value:"vehicle.tanent.full_name",filterable:!0,type:"text"},{text:"Phone Number",align:"left",sortable:!0,key:"phone_number",value:"vehicle.tanent.phone_number",filterable:!0,type:"text"},{text:"Email",align:"left",sortable:!0,key:"email",value:"vehicle.tanent.email",filterable:!0,type:"text"}]),Object(C.a)(e,"tanents",[]),Object(C.a)(e,"floors",[]),e},created:function(){var e=this;return Object(S.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,e.getDataFromApi(),t.next=4,e.getTanents();case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{handleFilter:function(e){var t=e.key,n=e.search_value,r=e.render_childens,l=void 0!==r&&r;this.filters[t]=n,l&&this.getFloorByCategory(n),this.getDataFromApi(this.endpoint)},filterAttr:function(data){this.filters.from_date=data.from,this.filters.to_date=data.to,this.filters.filterType="Monthly"},process_file:function(e){if(this.data&&0!==this.data.length){var t=w({company_id:this.$auth.user.company_id},this.filters),n=Object.entries(t).filter((function(e){var t=Object(k.a)(e,2),n=(t[0],t[1]);return null!=n&&""!==n})).map((function(e){var t=Object(k.a)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(encodeURIComponent(r))})).join("&"),r="".concat("http://192.168.88.30:8000/api","/").concat(e,"?").concat(n),l=document.createElement("a");l.setAttribute("href",r),l.setAttribute("target","_blank"),l.click(),this.getDataFromApi()}else alert("No data found")},handleDatesFilter:function(e){e.length>1&&this.getDataFromApi(this.endpoint,"dates",e)},getFloorByCategory:function(e){var t=this;return Object(S.a)(regeneratorRuntime.mark((function n(){var r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("parking-floor-by-category/".concat(e));case 2:r=n.sent,data=r.data,t.floors=data,t.headers.find((function(e){return"floor_id"==e.key})).items=data.map((function(e){return{id:e.id,name:e.floor_number}}));case 7:case"end":return n.stop()}}),n)})))()},getTanents:function(){var e=this;return Object(S.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("tanent-list",{params:{company_id:e.$auth.user.company_id}});case 2:n=t.sent,r=n.data,e.tanents=r;case 5:case"end":return t.stop()}}),t)})))()},can:function(e){return this.$pagePermission.can(e,this)},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loadinglinear=!0;var t=this.options,n=t.sortBy,r=t.sortDesc,l=t.page,o=t.itemsPerPage,c={params:w({page:l,sortBy:n?n[0]:"",sortDesc:r?r[0]:"",per_page:o,company_id:this.$auth.user.company_id},this.filters)};this.$axios.get(this.endpoint,c).then((function(t){var data=t.data;e.data=data.data,e.pagination.current=data.current_page,e.pagination.total=data.last_page,e.totalRowsCount=data.total,0==e.data.length?e.displayErrormsg=!0:e.displayErrormsg=!1,e.loadinglinear=!1}))}}},P=n(116),component=Object(P.a)(F,(function(){var e=this,t=e._self._c;return e.can("employee_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(v.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.loading?t("Preloader"):t("div",[t(v.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(n){var r=n.attrs;return[t(l.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",r,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n      "+e._s(e.snackText)+"\n\n      ")]),e._v(" "),e.can("employee_view")?t("div",[t(o.a,{staticClass:"mb-5",attrs:{flat:"",dense:""}},[t(d.a,{attrs:{fluid:""}},[t(f.a,[t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"headline mb-1"},[e._v("Filters")]),e._v(" "),t(f.a,{attrs:{"no-gutters":""}},[t(c.a,{staticClass:"mr-1",attrs:{cols:"1"}},[t(r.a,{attrs:{label:"Category",outlined:"",disabled:e.disabled,items:["Commercial","Residence","VIP","Guest","Green","Special Needs"],dense:"","hide-details":!0},on:{change:function(t){return e.getFloorByCategory(e.filters.category)}},model:{value:e.filters.category,callback:function(t){e.$set(e.filters,"category",t)},expression:"filters.category"}})],1),e._v(" "),t(c.a,{staticClass:"mr-1",attrs:{cols:"1"}},[t(r.a,{attrs:{label:"Floor Number",outlined:"",readonly:e.disabled,items:e.floors,dense:"","item-text":"floor_number","item-value":"id","hide-details":!0},model:{value:e.filters.floor_id,callback:function(t){e.$set(e.filters,"floor_id",t)},expression:"filters.floor_id"}})],1),e._v(" "),t(c.a,{staticClass:"mr-1",attrs:{cols:"1"}},[t(y.a,{attrs:{outlined:"",dense:"",label:"Parking #"},model:{value:e.filters.parking_number,callback:function(t){e.$set(e.filters,"parking_number",t)},expression:"filters.parking_number"}})],1),e._v(" "),t(c.a,{staticClass:"mr-1",attrs:{cols:"1"}},[t(y.a,{attrs:{outlined:"",dense:"",label:"Room/Flat"},model:{value:e.filters.room_number,callback:function(t){e.$set(e.filters,"room_number",t)},expression:"filters.room_number"}})],1),e._v(" "),t(c.a,{staticClass:"mr-1",attrs:{cols:"1"}},[t(r.a,{attrs:{label:"Tanent",outlined:"",readonly:e.disabled,items:[{id:"",full_name:"Select Tanent"}].concat(Object(j.a)(e.tanents)),dense:"","item-text":"full_name","item-value":"id","hide-details":!0},model:{value:e.filters.tanent_id,callback:function(t){e.$set(e.filters,"tanent_id",t)},expression:"filters.tanent_id"}})],1),e._v(" "),t(c.a,{staticClass:"mr-1",attrs:{cols:"1"}},[t(y.a,{attrs:{outlined:"",dense:"",label:"Car #"},model:{value:e.filters.car_number,callback:function(t){e.$set(e.filters,"car_number",t)},expression:"filters.car_number"}})],1),e._v(" "),t(c.a,{staticClass:"mr-1",attrs:{cols:"1"}},[t(y.a,{attrs:{outlined:"",dense:"",label:"Phone Number"},model:{value:e.filters.phone_number,callback:function(t){e.$set(e.filters,"phone_number",t)},expression:"filters.phone_number"}})],1),e._v(" "),t(c.a,{staticClass:"mr-1",attrs:{cols:"1"}},[t(y.a,{attrs:{outlined:"",dense:"",label:"Email"},model:{value:e.filters.email,callback:function(t){e.$set(e.filters,"email",t)},expression:"filters.email"}})],1),e._v(" "),t(c.a,{staticClass:"ml-5",attrs:{cols:"1"}},[t(l.a,{staticClass:"primary",attrs:{title:"Generate"},on:{click:e.getDataFromApi}},[e._v("\n                    Generate\n                  ")])],1)],1)],1)],1)],1)],1),e._v(" "),t(o.a,{attrs:{elevation:"0"}},[t(x.a,{staticClass:"mb-2",attrs:{dense:"",flat:""}},[t(O.b,[t("span",[e._v(e._s(e.Model)+" ")])]),e._v(" "),t("span",[t(l.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(m.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:e.clearFilters}},[e._v("mdi-reload")])],1)],1),e._v(" "),t(_.a),e._v(" "),t(I.a,{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(l.a,e._g(e._b({staticClass:"ma-0",attrs:{"x-small":"",ripple:!1,text:""},on:{click:function(t){return e.process_file("parkingReportPrint")}}},"v-btn",o,!1),r),[t("img",{staticClass:"iconsize",attrs:{src:"/icons/icon_print.png"}})])]}}],null,!1,2382838122)},[e._v(" "),t("span",[e._v("PRINT")])]),e._v(" "),t(I.a,{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(l.a,e._g(e._b({attrs:{"x-small":"",ripple:!1,text:""},on:{click:function(t){return e.process_file("parkingReportDownload")}}},"v-btn",o,!1),r),[t("img",{staticClass:"iconsize",attrs:{src:"/icons/icon_pdf.png"}})])]}}],null,!1,1059797661)},[e._v(" "),t("span",[e._v("DOWNLOAD")])])],1),e._v(" "),t(h.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.data,"model-value":"data.id",loading:e.loadinglinear,options:e.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}}})],1)],1):e._e()],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Preloader:n(898).default,NoAccess:n(881).default})},856:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(96),l=n(0),o=Object(l.k)("v-toolbar__title"),c=Object(l.k)("v-toolbar__items");r.a},881:function(e,t,n){"use strict";n.r(t);var r=n(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},884:function(e,t,n){var content=n(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},885:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},894:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),l=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(884),n(893)),o=n(214),c=n(65),d=n(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},l.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=l.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:l.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},l.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=l.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=l.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,l.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=l.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?l.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||l.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){l.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){l.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){l.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],l=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",l),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",l),e.preventDefault()}}}})},898:function(e,t,n){"use strict";n.r(t);var r=n(212),l=n(116),component=Object(l.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);