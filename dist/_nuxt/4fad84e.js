(window.webpackJsonp=window.webpackJsonp||[]).push([[410,185,193],{1286:function(e,t,n){var content=n(1463);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("8adeb3cc",content,!0,{sourceMap:!1})},1462:function(e,t,n){"use strict";n(1286)},1463:function(e,t,n){var l=n(21)((function(i){return i[1]}));l.push([e.i,".tiptap-vuetify-editor__content{min-height:400px!important}.ProseMirror .ProseMirror-focused{height:400px!important}.tiptap-icon .v-btn--icon,.tiptap-icon .v-icon{color:#fff!important}",""]),l.locals={},e.exports=l},1627:function(e,t,n){"use strict";n.r(t);var l=n(893),o=n(114),r=n(133),c=n(87),d=n(520),h=n(1179),m=n(518),y=n(875),f=n(1557),v=n(1019),_=n(147),x=n(862),k=n(517),I=n(892),S=n(872),C=n(349),$=n(214),w=n(994),D=n(362),O=n(23),j=(n(215),n(55),n(88),n(361)),M={components:{TiptapVuetify:j.p},data:function(){return{menu:!1,days:[{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"},{id:0,name:"Sunday"}],extensions:[j.g,j.a,j.r,j.o,j.j,j.l,j.c,j.m,[j.f,{options:{levels:[1,2,3]}}],j.b,j.n],content:"\n      <h1>Yay Headlines!</h1>\n      <p>All these <strong>cool tags</strong> are working now.</p>\n        ",color:"primary",e1:1,menu2:!1,preloader:!1,loading:!1,response:!1,id:"",snackbar:!1,to:"",number:"",cc:"",bcc:"",payload:{day:1,reports:[],mediums:[],frequency:"Daily",time:null,tos:[],ccs:[],bccs:[],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),company_id:0},errors:[],branchesList:[],branch_id:"",isCompany:!0}},created:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var n,l,o,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preloader=!1,e.payload.company_id=null===(n=e.$auth)||void 0===n||null===(l=n.user)||void 0===l||null===(o=l.company)||void 0===o?void 0:o.id,!e.$auth.user.branch_id){t.next=6;break}return e.payload.branch_id=e.$auth.user.branch_id,e.isCompany=!1,t.abrupt("return");case 6:return t.prev=6,t.next=9,e.$axios.get("branches_list",{params:{per_page:100,company_id:e.$auth.user.company_id}});case 9:r=t.sent,data=r.data,e.branchesList=data,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),console.error("Error fetching branch list",t.t0);case 17:case"end":return t.stop()}}),t,null,[[6,14]])})))()},methods:{setDay:function(){var e=this.payload,t=e.frequency,n=e.day,l=e.date;"Monthly"==t&&(n=new Date(l).getDate()),this.payload.day=n},onScroll:function(){this.scrollInvoked++},can:function(e){return this.$pagePermission.can(e,this)},add_number:function(){this.number&&this.number.length>10&&(this.payload.numbers.push(this.number),this.number="")},add_to:function(){this.payload.tos.push(this.to),this.to=""},add_cc:function(){this.payload.ccs.push(this.cc),this.cc=""},add_bcc:function(){this.payload.bccs.push(this.bcc),this.bcc=""},deleteTO:function(i){this.payload.tos.splice(i,1)},deleteNumber:function(i){this.payload.numbers.splice(i,1)},deleteCC:function(i){this.payload.ccs.splice(i,1)},deleteBCC:function(i){this.payload.bccs.splice(i,1)},store:function(){var e=this;this.$axios.post("/report_notification",this.payload).then((function(t){var data=t.data;e.loading=!1,data.status?(e.snackbar=data.status,e.response=data.message,setTimeout((function(){e.$router.push("/report_notifications")}),1e3)):e.errors=data.errors})).catch((function(e){return console.log(e)}))},test_endpoint:function(){this.$axios.get("/test/whatsapp").then((function(e){}))},test:function(){n(182)({method:"post",url:"https://graph.facebook.com/v14.0/102482416002121/messages",headers:{"Content-Type":"application/json",Authorization:"Bearer EAAP9IfKKSo0BAGDS96w2XuYjjpXIqxZBAOcwzlFWecCxODjNO3ruEcbnZCkmHSWNAGNf1Q9wC2uwe5XnyxteTOYAO3l9wgy4iu9L6wwYgtZBZAygXV3Tc4euoYANOZCFlvMAsnNz7vNQEYUYdL56l9poliM3eS6ZCZBV4dMzJhKEQKDbUTZB2ZBvEVl2mlHvSj8dCWgITF8e9GFkTXO8isMsx"},data:JSON.stringify({messaging_product:"whatsapp",to:"923108559858",type:"template",template:{name:"automated_reports",language:{code:"en"}}})}).then((function(e){})).catch((function(e){console.log(e)}))}}},T=(n(1462),n(116)),component=Object(T.a)(M,(function(){var e=this,t=e._self._c;return e.can("setting_company_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(S.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.preloader?t("Preloader"):t("div",[t(r.a,{staticClass:"mt-2 pa-3",attrs:{elevation:"0"}},[t(c.d,{staticStyle:{"border-bottom":"1px solid #ddd"}},[t("span",{staticClass:"popup_title"},[e._v(" Create Report Notification ")])]),e._v(" "),t(y.a,[t(k.a,[e.isCompany?t(m.a,{attrs:{cols:"6"}},[t(I.a,{attrs:{items:e.branchesList,dense:"",placeholder:"Select Branch",outlined:"","item-value":"id","item-text":"branch_name"},model:{value:e.payload.branch_id,callback:function(t){e.$set(e.payload,"branch_id",t)},expression:"payload.branch_id"}})],1):e._e(),e._v(" "),t(m.a,{attrs:{cols:"6"}},[t($.a,{attrs:{"hide-details":!e.payload.subject,placeholder:"Title/Subject",outlined:"",dense:""},model:{value:e.payload.subject,callback:function(t){e.$set(e.payload,"subject",t)},expression:"payload.subject"}}),e._v(" "),e.errors&&e.errors.subject?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.subject[0]))]):e._e(),e._v(" "),e.errors&&e.errors.subject?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.subject[0]))]):e._e()],1)],1),e._v(" "),t(k.a,[t(m.a,{attrs:{cols:"4"}},[t(l.a,{attrs:{"hide-details":!e.payload.frequency,outlined:"",dense:"",placeholder:"Frequency",items:["Daily","Weekly","Monthly"]},on:{change:e.setDay},model:{value:e.payload.frequency,callback:function(t){e.$set(e.payload,"frequency",t)},expression:"payload.frequency"}}),e._v(" "),e.errors&&e.errors.frequency?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.frequency[0]))]):e._e()],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},["Daily"==e.payload.frequency||"Weekly"==e.payload.frequency?t(l.a,{attrs:{"hide-details":!e.payload.day,outlined:"",dense:"",placeholder:"Days",items:"Weekly"==e.payload.frequency?e.days:[],"item-text":"name","item-value":"id"},model:{value:e.payload.day,callback:function(t){e.$set(e.payload,"day",t)},expression:"payload.day"}}):e._e(),e._v(" "),"Monthly"==e.payload.frequency?t(x.a,{ref:"menu",staticClass:"mt-2",attrs:{"close-on-content-click":!1,"return-value":e.payload.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.payload,"date",t)},"update:return-value":function(t){return e.$set(e.payload,"date",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t($.a,e._g(e._b({attrs:{"hide-details":e.payload.date,outlined:"",dense:"",readonly:""},model:{value:e.payload.date,callback:function(t){e.$set(e.payload,"date",t)},expression:"payload.date"}},"v-text-field",o,!1),l))]}}],null,!1,3033548321),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(f.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.payload.date,callback:function(t){e.$set(e.payload,"date",t)},expression:"payload.date"}},[t(C.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.set_date_save(e.$refs.menu,e.payload.date)}}},[e._v("\n                  OK\n                ")])],1)],1):e._e(),e._v(" "),e.errors&&e.errors.day?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.day[0]))]):e._e(),e._v(" "),e.errors&&e.errors.date?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.date[0]))]):e._e()],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},[t(x.a,{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"time",t)},"update:return-value":function(t){return e.$set(e.payload,"time",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t($.a,e._g(e._b({attrs:{"hide-details":!e.payload.time,outlined:"",dense:"",placeholder:"Time",readonly:""},model:{value:e.payload.time,callback:function(t){e.$set(e.payload,"time",t)},expression:"payload.time"}},"v-text-field",o,!1),l))]}}],null,!1,1791695008),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),e.menu2?t(w.a,{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.menu.save(e.payload.time)}},model:{value:e.payload.time,callback:function(t){e.$set(e.payload,"time",t)},expression:"payload.time"}}):e._e()],1),e._v(" "),e.errors&&e.errors.time?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.time[0]))]):e._e()],1)],1),e._v(" "),t(v.a),e._v(" "),t(k.a,{attrs:{dense:""}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("Reports")])]),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[t(d.a,{attrs:{dense:"",label:"Daily Summary",value:"daily_summary.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Daily Present",value:"daily_present.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Daily Absent",value:"daily_absent.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Daily Missing",value:"daily_missing.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Daily Manual Entry",value:"daily_manual.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),e.errors&&e.errors.reports?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.reports[0]))]):e._e()],1),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[t(d.a,{attrs:{dense:"",label:"Weekly Summary",value:"weekly_summary.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Weekly Present",value:"weekly_present.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Weekly Absent",value:"weekly_absent.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Weekly Missing",value:"weekly_missing.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Weekly Manual Entry",value:"weekly_manual.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}})],1),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[t(d.a,{attrs:{dense:"",label:"Monthly Summary",value:"monthly_summary.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Monthly Present",value:"monthly_present.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Monthly Absent",value:"monthly_absent.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Monthly Missing",value:"monthly_missing.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Monthly Manual Entry",value:"monthly_manual.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}})],1)],1),e._v(" "),t(v.a),e._v(" "),t(k.a,{attrs:{dense:""}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("Medium ")])]),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"1"}},[t(d.a,{attrs:{dense:"",label:"Email",value:"Email"},model:{value:e.payload.mediums,callback:function(t){e.$set(e.payload,"mediums",t)},expression:"payload.mediums"}})],1),e._v(" "),t(m.a,{staticClass:"pa-0 mr-7",attrs:{cols:"2"}},[t(d.a,{attrs:{dense:"",label:"Whatsapp",value:"Whatsapp"},model:{value:e.payload.mediums,callback:function(t){e.$set(e.payload,"mediums",t)},expression:"payload.mediums"}})],1),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"12"}},[e.errors&&e.errors.mediums?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.mediums[0]))]):e._e()])],1),e._v(" "),t(v.a),e._v(" "),t(k.a,[t(m.a,{attrs:{cols:"12"}},[t("label",{staticClass:"col-form-label"},[t("h4",[e._v("Mail Settings")])]),t("br")])],1),e._v(" "),t(k.a,{staticStyle:{"margin-top":"-30px"}},[t(m.a,{attrs:{cols:"3"}},[t("label",{staticClass:"col-form-label"},[t("b",[e._v("Subject ")])]),e._v(" "),t($.a,{attrs:{"hide-details":!e.payload.subject,placeholder:"Subject",outlined:"",dense:""},model:{value:e.payload.subject,callback:function(t){e.$set(e.payload,"subject",t)},expression:"payload.subject"}}),e._v(" "),e.errors&&e.errors.subject?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.subject[0]))]):e._e(),e._v(" "),e.errors&&e.errors.subject?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.subject[0]))]):e._e()],1)],1),e._v(" "),t(k.a,[t(m.a,{attrs:{cols:"3"}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("To ")]),e._v("(Press enter to add email address/es)")]),e._v(" "),t($.a,{attrs:{"hide-details":!e.to,placeholder:"Email",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_to.apply(null,arguments)}},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}}),e._v(" "),e._l(e.payload.tos,(function(n,l){return t(h.a,{key:l,staticClass:"ma-1",attrs:{color:"primary"}},[t("span",{staticClass:"mx-1"},[e._v(e._s(n))]),e._v(" "),t(_.a,{attrs:{small:""},on:{click:function(t){return e.deleteTO(l)}}},[e._v("mdi-close-circle-outline")])],1)})),e._v(" "),e.errors&&e.errors.tos?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.tos[0]))]):e._e()],2),e._v(" "),t(m.a,{attrs:{cols:"3"}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("Cc ")]),e._v("(Press enter to add email address/es)")]),e._v(" "),t($.a,{attrs:{placeholder:"Email",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_cc.apply(null,arguments)}},model:{value:e.cc,callback:function(t){e.cc=t},expression:"cc"}}),e._v(" "),e._l(e.payload.ccs,(function(n,l){return t(h.a,{key:l,staticClass:"ma-1",attrs:{color:"primary"}},[t("span",{staticClass:"mx-1"},[e._v(e._s(n))]),e._v(" "),t(_.a,{attrs:{small:""},on:{click:function(t){return e.deleteCC(l)}}},[e._v("mdi-close-circle-outline")])],1)}))],2),e._v(" "),t(m.a,{attrs:{cols:"3"}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("Bcc ")]),e._v("(Press enter to add email address/es)")]),e._v(" "),t($.a,{attrs:{placeholder:"Email",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_bcc.apply(null,arguments)}},model:{value:e.bcc,callback:function(t){e.bcc=t},expression:"bcc"}}),e._v(" "),e._l(e.payload.bccs,(function(n,l){return t(h.a,{key:l,staticClass:"ma-1",attrs:{color:"primary"}},[t("span",{staticClass:"mx-1"},[e._v(e._s(n))]),e._v(" "),t(_.a,{attrs:{small:""},on:{click:function(t){return e.deleteBCC(l)}}},[e._v("mdi-close-circle-outline")])],1)}))],2)],1),e._v(" "),t(k.a,[t(m.a,{attrs:{cols:"12"}},[t("ClientOnly",{scopedSlots:e._u([{key:"placeholder",fn:function(){return[e._v(" Loading... ")]},proxy:!0}],null,!1,669632662)},[t("tiptap-vuetify",{directives:[{def:D.b,name:"scroll",rawName:"v-scroll.self",value:e.onScroll,expression:"onScroll",modifiers:{self:!0}}],staticClass:"tiptap-icon",attrs:{extensions:e.extensions,"max-height":"400","toolbar-attributes":{color:"background red--text"}},model:{value:e.payload.body,callback:function(t){e.$set(e.payload,"body",t)},expression:"payload.body"}})],1)],1),e._v(" "),t(C.a),e._v(" "),t(m.a,{staticClass:"text-end",attrs:{col:"2"}},[t(o.a,{attrs:{small:"",color:"primary"},on:{click:e.store}},[e._v(" Submit ")])],1)],1)],1)],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Preloader:n(897).default,NoAccess:n(880).default})},880:function(e,t,n){"use strict";n.r(t);var l=n(116),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},883:function(e,t,n){var content=n(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(e,t,n){var l=n(21)((function(i){return i[1]}));l.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),l.locals={},e.exports=l},893:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var l=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(883),n(892)),r=n(214),c=n(65),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return y}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},y),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var l=t[this.$refs.menu.listIndex];l?this.setMenuIndex(e.findIndex((function(i){return i===l}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var l=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[l]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=l}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var l=this.selectedItems[this.selectedIndex],o=this.getText(l);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},897:function(e,t,n){"use strict";n.r(t);var l=n(212),o=n(116),component=Object(o.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(l.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);