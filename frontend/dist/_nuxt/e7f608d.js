(window.webpackJsonp=window.webpackJsonp||[]).push([[392,180,188,198],{1571:function(e,t,n){"use strict";n.r(t);var r=n(114),l=n(133),o=n(87),d=n(1176),c=n(875),v=n(1548),f=n(350),x=n(147),_=n(326),h=n(204),m=n(60),y=n(862),k=n(892),w=n(872),O=n(349),C=n(214),j=n(953),P=n(96),S=n(855),F=n(81),D=(n(35),n(3)),$=n(23);n(88),n(215),n(12),n(14),n(13),n(6),n(17),n(11),n(18);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(D.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var H={components:{Back:n(970).default},data:function(){return{showFilters:!1,filters:{},isFilter:!1,totalRowsCount:0,datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",dialog:!1,color:"primary",endpoint:"report_notification",e1:1,menu2:!1,preloader:!1,loading:!1,response:!1,id:"",snackbar:!1,to:"",cc:"",bcc:"",number:"",message:"",payload:{report_types:[],mediums:[],frequency:null,time:null,tos:[],ccs:[],bccs:[]},data:[],options:{},errors:[],headers:[{text:"Subject",align:"left",sortable:!0,key:"title",value:"subject",filterable:!0,filterSpecial:!1},{text:"Frequency",align:"left",sortable:!0,key:"frequency",value:"frequency",filterable:!0,filterSpecial:!1},{text:"Time",align:"left",sortable:!0,key:"time",value:"time",filterable:!0,filterSpecial:!1},{text:"Action",align:"left",sortable:!1,key:"actions",value:"actions",filterable:!1,filterSpecial:!1}],branchesList:[],branch_id:"",isCompany:!0}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){var e=this;return Object($.a)(regeneratorRuntime.mark((function t(){var n,r,l,o,d,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preloader=!1,!e.$auth.user.branch_id){t.next=5;break}return e.branch_id=e.$auth.user.branch_id,e.isCompany=!1,t.abrupt("return");case 5:return d=[{text:"Branch",align:"left",sortable:!0,key:"branch_id",value:"branch.branch_name",width:"300px",filterable:!0,filterSpecial:!0}],(n=e.headers).splice.apply(n,[0,0].concat(d)),t.prev=7,t.next=10,e.$axios.get("branches_list",{params:{per_page:100,company_id:e.$auth.user.company_id}});case 10:c=t.sent,data=c.data,e.branchesList=data,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(7),console.error("Error fetching branch list",t.t0);case 18:e.id=null===(r=e.$auth)||void 0===r||null===(l=r.user)||void 0===l||null===(o=l.company)||void 0===o?void 0:o.id,e.getDataFromApi();case 20:case"end":return t.stop()}}),t,null,[[7,15]])})))()},methods:{datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},send:function(){this.$axios.get("https://ezwhat.com/api/send.php?number=".concat(this.number,"&type=text&message=").concat(this.message,"&instance_id=64466B01B7926&access_token=a27e1f9ca2347bb766f332b8863ebe9f")).then((function(e){var data=e.data;return console.log(data)}))},can:function(e){return this.$pagePermission.can(e,this)},editItem:function(e){this.$router.push("/report_notifications/"+e.id)},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+e.id).then((function(e){var data=e.data;data.status?(t.snackbar=data.status,t.response=data.message,t.getDataFromApi()):t.errors=data.errors})).catch((function(e){return console.log(e)}))},add_to:function(){this.payload.tos.push(this.to),this.to=""},add_cc:function(){this.payload.ccs.push(this.cc),this.cc=""},add_bcc:function(){this.payload.bccs.push(this.bcc),this.bcc=""},deleteTO:function(i){this.payload.tos.splice(i,1)},deleteCC:function(i){this.payload.ccs.splice(i,1)},deleteBCC:function(i){this.payload.bccs.splice(i,1)},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(("serach_medium"==n||"serach_email_recipients"==n)&&""!=r&&r.length<=5)return this.snack=!0,this.snackColor="error",this.snackText="Minimum 5 Characters to filter ",this.loading=!1,!1;this.loading=!0,""==t&&(t=this.endpoint);var l=this.options,o=l.sortBy,d=l.sortDesc,c=l.page,v=l.itemsPerPage,f={params:A({page:c,sortBy:o?o[0]:"",sortDesc:d?d[0]:"",per_page:v,company_id:this.$auth.user.company_id,branch_id:this.branch_id,role_type:"employee"},this.filters)};""!=n&&(f.params[n]=r),this.$axios.get(t,f).then((function(t){var data=t.data;if(""!=n&&0==data.data.length)return e.snack=!0,e.snackColor="error",e.snackText="No Results Found",e.loading=!1,!1;e.data=data.data,e.totalRowsCount=data.total,e.total=data.total,e.loading=!1}))}}},B=H,N=n(116),component=Object(N.a)(B,(function(){var e=this,t=e._self._c;return e.can("setting_company_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(w.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.preloader?t("Preloader"):t("div",[t("div",{staticClass:"text-center"},[t(f.a,{attrs:{persistent:"",width:"500"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.a,[t(o.c,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n            Send Test message to Whatsapp\n            "),t(O.a),e._v(" "),t(x.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n              mdi mdi-close-circle\n            ")])],1),e._v(" "),t(o.b,{staticClass:"mt-4"},[t(C.a,{attrs:{dense:"",outlined:"",placeholder:"number"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),e._v(" "),t(j.a,{attrs:{dense:"",outlined:"",placeholder:"message"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[e._v("\n              Hello\n            ")])],1),e._v(" "),t(o.a,[t(O.a),e._v(" "),t(r.a,{staticClass:"primary",attrs:{small:"",dense:""},on:{click:e.send}},[e._v(" Send ")])],1)],1)],1)],1),e._v(" "),t(l.a,{staticClass:"mb-5 mt-2",attrs:{elevation:"0"}},[t(P.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[t(S.b,[t("span",[e._v(" Notifications List")])]),e._v(" "),t(r.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(x.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){return e.getDataFromApi()}}},[e._v("mdi mdi-reload")])],1),e._v(" "),e.isCompany?t("div",{staticStyle:{width:"250px"}},[t(k.a,{staticClass:"pt-10 px-2",attrs:{items:[{id:"",branch_name:"Select All"}].concat(Object(F.a)(e.branchesList)),dense:"",placeholder:"Select Branch",outlined:"","item-value":"id","item-text":"branch_name"},on:{change:function(t){return e.getDataFromApi()}},model:{value:e.branch_id,callback:function(t){e.branch_id=t},expression:"branch_id"}})],1):e._e(),e._v(" "),t(O.a),e._v(" "),t(r.a,{attrs:{"x-small":"",ripple:!1,text:"",title:"Add   Notification",to:"/report_notifications/create"}},[t(x.a,{attrs:{dark:""}},[e._v("mdi-plus-circle-outline")])],1)],1),e._v(" "),t(w.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(n){var l=n.attrs;return[t(r.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",l,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n        "+e._s(e.snackText)+"\n\n        ")]),e._v(" "),t(v.a,{staticClass:"elevation-1",attrs:{flat:"",dense:"",headers:e.headers,items:e.data,"model-value":"data.id",loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"hide-default-footer":"","server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"header",fn:function(n){var r=n.props.headers;return[e.isFilter?t("tr",e._l(r,(function(header){return t("td",{key:header.text},[t(c.a,[header.filterable&&!header.filterSpecial?t(C.a,{attrs:{clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{input:function(t){return e.applyFilters(header.key,t)}},model:{value:e.filters[header.value],callback:function(t){e.$set(e.filters,header.value,t)},expression:"filters[header.value]"}}):e._e()],1)],1)})),0):e._e()]}},{key:"item.medium",fn:function(n){var r=n.item;return e._l(r.mediums,(function(n,i){return t(d.a,{key:i,staticClass:"ma-1",attrs:{small:"",color:"primary"}},[e._v(e._s(n))])}))}},{key:"item.reports",fn:function(n){var r=n.item;return e._l(r.reports,(function(n,i){return t(d.a,{key:i,staticClass:"ma-1",attrs:{small:"",color:"primary"}},[e._v(e._s(n))])}))}},{key:"item.recipients",fn:function(n){var r=n.item;return[e._l(r.tos,(function(n,i){return t(d.a,{key:i,staticClass:"ma-1",attrs:{small:"",color:"primary",id:r.id}},[e._v(e._s(n))])})),e._v(" "),e._l(r.ccs,(function(n,i){return t(d.a,{key:i,staticClass:"ma-1",attrs:{small:"",color:"primary",id:r.id}},[e._v(e._s(n)+" (Cc)")])})),e._v(" "),e._l(r.bccs,(function(n,i){return t(d.a,{key:i,staticClass:"ma-1",attrs:{small:"",color:"primary",id:r.id}},[e._v(e._s(n)+" (Bcc)")])}))]}},{key:"item.actions",fn:function(n){var l=n.item;return[t(y.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t("div",{staticClass:"text-center"},[t(r.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",o,!1),l),[t(x.a,[e._v("mdi-dots-vertical")])],1)],1)]}}],null,!0)},[e._v(" "),t(_.a,{attrs:{width:"120",dense:""}},[t(h.a,{on:{click:function(t){return e.editItem(l)}}},[t(m.c,{staticStyle:{cursor:"pointer"}},[t(x.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-pencil ")]),e._v("\n                  Edit\n                ")],1)],1),e._v(" "),t(h.a,{on:{click:function(t){return e.deleteItem(l)}}},[t(m.c,{staticStyle:{cursor:"pointer"}},[t(x.a,{attrs:{color:"error",small:""}},[e._v(" mdi-delete ")]),e._v("\n                  Delete\n                ")],1)],1)],1)],1)]}}],null,!1,1904816203)})],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Preloader:n(897).default,NoAccess:n(880).default})},855:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return o}));var r=n(96),l=n(0),o=Object(l.k)("v-toolbar__title"),d=Object(l.k)("v-toolbar__items");r.a},880:function(e,t,n){"use strict";n.r(t);var r=n(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},897:function(e,t,n){"use strict";n.r(t);var r=n(212),l=n(116),component=Object(l.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports},902:function(e,t,n){var content=n(903);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("c54b7bb4",content,!0,{sourceMap:!1})},903:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),r.locals={},e.exports=r},953:function(e,t,n){"use strict";n(12),n(14),n(13),n(6),n(17),n(11),n(18);var r=n(3),l=(n(28),n(55),n(902),n(214)),o=n(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c=Object(o.a)(l.a);t.a=c.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},l.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null===(n=t.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){l.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},970:function(e,t,n){"use strict";n.r(t);var r={props:["color"],methods:{goBack:function(){window.history.back()}}},l=n(116),component=Object(l.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=component.exports}}]);