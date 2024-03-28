(window.webpackJsonp=window.webpackJsonp||[]).push([[9,92,102],{1264:function(t,e,n){"use strict";n.r(e);var r=n(894),o=n(516),l=n(515),c=n(81),h=(n(35),n(37),n(23)),d=(n(6),n(11),n(88),{props:["name","height","branch_id"],data:function(){return{filterDeviceId:null,devices:[],loading:!1,display_title:"Recent 7 days Attendance",date_from:"",date_to:"",series:[{name:"Tenants",data:[]},{name:"Employees",data:[]},{name:"Visitors",data:[]},{name:"Delivery",data:[]},{name:"Contractors",data:[]},{name:"Denied",data:[]}],chartOptions1:{series:[{name:"Tenants",data:[]},{name:"Employees",data:[]},{name:"Visitors",data:[]},{name:"Delivery",data:[]},{name:"Contractors",data:[]},{name:"Denied",data:[]}],colors:["#14B012","#2196f3","#FFB600","#C8B053","#F1C40F","#FF0000"],chart:{toolbar:{show:!1},type:"bar",width:"98%"},plotOptions:{bar:{horizontal:!1,columnWidth:"25%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},yaxis:{title:{text:" "}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}}},chartOptions2:{series:[{name:"Tenants",data:[]},{name:"Employees",data:[]},{name:"Visitors",data:[]},{name:"Delivery",data:[]},{name:"Contractors",data:[]},{name:"Denied",data:[]}],colors:["#14B012","#2196f3","#FFB600","#C8B053","#F1C40F","#FF0000"],chart:{type:"bar",width:"98%",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},yaxis:{title:{text:" "}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}}}}},watch:{display_title:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDataFromApi();case 2:case"end":return e.stop()}}),e)})))()},branch_id:function(t){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("CommDashboard/setDashboardData",null),t.next=3,e.getDataFromApi();case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.chartOptions1.chart.height=310,this.chartOptions1.series=this.series},created:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Date,(r=new Date(n)).setDate(n.getDate()-0),t.date_to=n.toISOString().split("T")[0],t.date_from=r.toISOString().split("T")[0],e.next=7,t.getDataFromApi();case 7:t.getDeviceList();case 8:case"end":return e.stop()}}),e)})))()},methods:{getDeviceList:function(){var t=this,e={params:{company_id:this.$auth.user.company_id}};this.$axios.get("/device_list",e).then((function(e){var data=e.data;t.devices=data}))},filterDevice:function(){this.$store.commit("CommDashboard/setDashboardData",null),this.$store.commit("CommDashboard/every_hour_count",null),this.getDataFromApi()},filterAttr:function(data){this.date_from=data.from,this.date_to=data.to,this.filterType="Monthly",this.date_from!=this.date_to?this.display_title="Access  : "+this.date_from+" to "+this.date_to:this.display_title="Access  : "+this.date_from,this.$store.commit("CommDashboard/setDashboardData",null),this.$store.commit("CommDashboard/every_hour_count",null),this.getDataFromApi()},getDataFromApi:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.$store.dispatch("CommDashboard/setDates",{date_from:t.date_from,date_to:t.date_to,branch_id:t.branch_id,system_user_id:null,device_id:t.filterDeviceId}),t.date_from!=t.date_to){e.next=10;break}return e.t0=t,e.next=6,t.$store.dispatch("CommDashboard/every_hour_count");case 6:e.t1=e.sent,e.t0.renderChart1.call(e.t0,e.t1),e.next=15;break;case 10:return e.t2=t,e.next=13,t.$store.dispatch("CommDashboard/states_for_7_days");case 13:e.t3=e.sent,e.t2.renderChart2.call(e.t2,e.t3);case 15:case"end":return e.stop()}}),e)})))()},renderChart1:function(data){var t=this,e=0;data.forEach((function(n){t.chartOptions1.series[0].data[e]=parseInt(n.TenantCount),t.chartOptions1.series[1].data[e]=parseInt(n.EmployeeCount),t.chartOptions1.series[2].data[e]=parseInt(n.VisitorCount),t.chartOptions1.series[3].data[e]=parseInt(n.DeliveryCount),t.chartOptions1.series[4].data[e]=parseInt(n.VisitorCount),t.chartOptions1.series[5].data[e]=parseInt(n.ContractorsCount),t.chartOptions1.xaxis.categories[e]=n.hour,e++}));try{new ApexCharts(document.querySelector("#"+this.name),this.chartOptions1).render(),this.loading=!1}catch(t){}},renderChart2:function(data){var t=this;try{this.chartOptions2.chart.height=this.height,this.chartOptions2.series=this.series;var e=0;this.chartOptions2.series=[{name:"Tenants",data:[]},{name:"Employees",data:[]},{name:"Visitors",data:[]},{name:"Delivery",data:[]},{name:"Contractors",data:[]},{name:"Denied",data:[]}],this.chartOptions2.xaxis={categories:[]},data.forEach((function(n){t.chartOptions2.series[0].data[e]=parseInt(n.TenantCount),t.chartOptions2.series[1].data[e]=parseInt(n.EmployeeCount),t.chartOptions2.series[2].data[e]=parseInt(n.VisitorCount),t.chartOptions2.series[3].data[e]=parseInt(n.DeliveryCount),t.chartOptions2.series[4].data[e]=parseInt(n.ContractorsCount),t.chartOptions2.series[5].data[e]=parseInt(n.DeniedCount),t.chartOptions2.xaxis.categories[e]=t.$dateFormat.format2(n.date),e++})),this.loading=!1,new ApexCharts(document.querySelector("#"+this.name),this.chartOptions2).render()}catch(t){}}}}),m=n(116),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%",height:"500px"}},[e(l.a,[e(o.a,{attrs:{md:"5"}},[e("h4",[t._v(t._s(t.display_title))])]),t._v(" "),e(o.a,{attrs:{md:"4"}},[e("CustomFilter",{staticStyle:{float:"right","padding-top":"5px"},attrs:{default_date_from:t.date_from,default_date_to:t.date_to,defaultFilterType:1,height:"40px"},on:{"filter-attr":t.filterAttr}})],1),t._v(" "),e(o.a,{attrs:{md:"3"}},[e(r.a,{attrs:{dense:"",outlined:"",label:"Door",items:[{name:"All Doors",device_id:null}].concat(Object(c.a)(t.devices)),"item-value":"device_id","item-text":"name"},on:{change:t.filterDevice},model:{value:t.filterDeviceId,callback:function(e){t.filterDeviceId=e},expression:"filterDeviceId"}})],1)],1),t._v(" "),t.loading?e("ComonPreloader",{attrs:{icon:"face-scan"}}):t._e(),t._v(" "),e("div",{key:t.display_title,staticStyle:{width:"100%"},attrs:{id:t.name}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomFilter:n(952).default,ComonPreloader:n(895).default})},884:function(t,e,n){var content=n(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},885:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},t.exports=r},894:function(t,e,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(215),n(41),n(61),n(884),n(893)),l=n(214),c=n(65),h=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(h.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===h.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===h.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==h.z.backspace&&t!==h.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(h.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[h.z.home,h.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},895:function(t,e,n){"use strict";n.r(e);var r=n(212),o={props:["icon"]},l=n(116),component=Object(l.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports},952:function(t,e,n){"use strict";n.r(e);n(56),n(33),n(266);var r=n(951),o=(n(950),{components:{DatePicker:r.a},props:["defaultFilterType","height","width","default_date_from","default_date_to"],data:function(){return{time3:null,from_date:"",from_menu:!1,to_date:"",to_menu:!1,loading:!1,showTimePanel:!1,filterType:1,search:""}},watch:{filterType:function(){this.showTimePanel=!0,this.FilterData()}},mounted:function(){5==this.filterType&&document.querySelector(".mx-input").focus();var t=document.getElementsByClassName("mx-input");this.height&&""!=this.height&&(t[0].style.height=this.height),this.width&&""!=this.width&&(t[0].style.width=this.width),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date]},created:function(){this.defaultFilterType&&(this.filterType=this.defaultFilterType);var t=new Date;this.default_date_from||(this.from_date=t.toISOString().slice(0,10)),this.default_date_to||(this.to_date=t.toISOString().slice(0,10)),this.default_date_from&&this.default_date_to&&(this.from_date=this.default_date_from,this.to_date=this.default_date_to),this.time3=[this.from_date,this.to_date];var data={from:this.from_date,to:this.to_date,type:1,search:"this.search"};this.$emit("filter-attr",data)},methods:{commonMethod:function(){this.from_date&&this.to_date},CustomFilter:function(){if(this.from_date=this.time3[0],this.to_date=this.time3[1],this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},FilterData:function(){this.from_date=this.time3[0],this.to_date=this.time3[1];var t=new Date;if(1==this.filterType)this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10);else if(2==this.filterType){var e=new Date;e.setDate(t.getDate()-1),this.from_date=e.toISOString().slice(0,10),this.to_date=e.toISOString().slice(0,10)}else if(3==this.filterType){var n=new Date(t);n.setDate(t.getDate()-t.getDay());var r=new Date(t);r.setDate(t.getDate()-t.getDay()+6),this.from_date=n.toISOString().slice(0,10),this.to_date=r.toISOString().slice(0,10)}else if(4==this.filterType)this.from_date=this.formatDate(new Date(t.getFullYear(),t.getMonth(),1)),this.to_date=this.formatDate(new Date(t.getFullYear(),t.getMonth()+1,0));else if(5==this.filterType)return void(this.time3=[]);if(this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},formatDate:function(t){var e=t.getDate(),n=t.getMonth()+1;return t.getFullYear()+"-"+(n<10?"0":"")+n+"-"+(e<10?"0":"")+e}}}),l=n(116),component=Object(l.a)(o,(function(){var t=this;return(0,t._self._c)("date-picker",{attrs:{label:"Date","value-type":"format",format:"YYYY-MM-DD",type:"date",range:""},on:{change:function(e){return t.CustomFilter()}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}})}),[],!1,null,null,null);e.default=component.exports}}]);