(window.webpackJsonp=window.webpackJsonp||[]).push([[414,186,194],{1326:function(e,t,n){var content=n(1516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("09194565",content,!0,{sourceMap:!1})},1327:function(e,t,n){var content=n(1518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("2cdac934",content,!0,{sourceMap:!1})},1515:function(e,t,n){"use strict";n(1326)},1516:function(e,t,n){var l=n(20)((function(i){return i[1]}));l.push([e.i,"div.v-date-picker-header[data-v-32d13cb4]{display:none!important}table[data-v-32d13cb4]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-32d13cb4],th[data-v-32d13cb4]{border:1px solid #ddd;padding:8px;text-align:left}tr[data-v-32d13cb4]:nth-child(2n){background-color:#ddd}",""]),l.locals={},e.exports=l},1517:function(e,t,n){"use strict";n(1327)},1518:function(e,t,n){var l=n(20)((function(i){return i[1]}));l.push([e.i,".tiptap-vuetify-editor__content[data-v-32d13cb4]{min-height:400px!important}.ProseMirror .ProseMirror-focused[data-v-32d13cb4]{height:400px!important}.tiptap-icon .v-btn--icon[data-v-32d13cb4],.tiptap-icon .v-icon[data-v-32d13cb4]{color:#fff!important}",""]),l.locals={},e.exports=l},1710:function(e,t,n){"use strict";n.r(t);var l=n(921),o=n(117),r=n(138),c=n(79),d=n(541),h=n(1200),m=n(539),f=n(903),v=n(1584),y=n(889),_=n(116),x=n(888),k=n(538),I=n(920),S=n(900),C=n(360),$=n(221),D=n(1804),j=n(276),O=n(2),w=(n(222),n(373)),M={components:{TiptapVuetify:w.p},data:function(){var e;return e={time:null,menu:!1,menu2:!1,days:[{id:1,name:"Monday"},{id:2,name:"Tuesday"},{id:3,name:"Wednesday"},{id:4,name:"Thursday"},{id:5,name:"Friday"},{id:6,name:"Saturday"},{id:0,name:"Sunday"}],extensions:[w.g,w.a,w.i,w.r,w.o,w.j,w.l,w.c,w.m,[w.f,{options:{levels:[1,2,3]}}],w.b,w.n],content:"\n      <h1>Yay Headlines!</h1>\n      <p>All these <strong>cool tags</strong> are working now.</p>\n        ",color:"primary",e1:1},Object(O.a)(e,"menu2",!1),Object(O.a)(e,"preloader",!1),Object(O.a)(e,"loading",!1),Object(O.a)(e,"response",!1),Object(O.a)(e,"id",""),Object(O.a)(e,"snackbar",!1),Object(O.a)(e,"to",""),Object(O.a)(e,"cc",""),Object(O.a)(e,"bcc",""),Object(O.a)(e,"payload",{day:1,reports:[],mediums:[],frequency:"Daily",time:null,tos:[],ccs:[],bccs:[],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}),Object(O.a)(e,"route_id",0),Object(O.a)(e,"errors",[]),Object(O.a)(e,"branchesList",[]),Object(O.a)(e,"branch_id",""),e},mounted:function(){},created:function(){var e,t,n,l=this;this.preloader=!1,this.id=null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t||null===(n=t.company)||void 0===n?void 0:n.id,this.$axios.get("branches_list",{params:{per_page:1e3,company_id:this.$auth.user.company_id}}).then((function(e){var data=e.data;l.branchesList=data,l.branch_id=l.$auth.user.branch_id||""})),this.getRecord()},methods:{processDay:function(){var e=this.payload,t=e.frequency,n=e.date;this.payload.day="Monthly"==t?new Date(n).getDate():null},setDefaultDate:function(){return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},set_date_save:function(e,t){e.save(t)},getRecord:function(){var e=this;this.$axios.get("/report_notification/"+this.$route.params.id).then((function(t){var data=t.data;e.payload=data,e.payload.day=parseInt(data.day)}))},onScroll:function(){this.scrollInvoked++},can:function(e){return this.$pagePermission.can(e,this)},add_to:function(){this.payload.tos||(this.payload.tos=[]),this.payload.tos.push(this.to),this.to=""},add_cc:function(){this.payload.ccs||(this.payload.ccs=[]),this.payload.ccs.push(this.cc),this.cc=""},add_bcc:function(){this.payload.bccs||(this.payload.bccs=[]),this.payload.bccs.push(this.bcc),this.bcc=""},deleteTO:function(i){this.payload.tos.splice(i,1)},deleteCC:function(i){this.payload.ccs.splice(i,1)},deleteBCC:function(i){this.payload.bccs.splice(i,1)},store:function(){var e=this;this.errors=[],this.$axios.put("/report_notification/"+this.$route.params.id,this.payload).then((function(t){var data=t.data;e.loading=!1,data.status?(e.snackbar=data.status,e.response=data.message):e.errors=data.errors})).catch((function(e){return console.log(e)}))}}},P=(n(1515),n(1517),n(60)),component=Object(P.a)(M,(function(){var e=this,t=e._self._c;return e.can("setting_company_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(S.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.preloader?t("Preloader"):t("div",[t(k.a,{staticClass:""},[t(m.a,{attrs:{cols:"10"}},[t("h4",[e._v("Report Notification")])])],1),e._v(" "),t(r.a,{staticClass:"pa-3",attrs:{elevation:"0"}},[t(c.d,[t("label",{staticClass:"col-form-label"},[t("b",[e._v("Update Report Notification ")])]),e._v(" "),t(C.a),e._v(" "),t(o.a,{attrs:{small:"",fab:"",color:"background",dark:"",to:"/report_notifications"}},[t(_.a,[e._v("mdi-arrow-left")])],1)],1),e._v(" "),t(f.a,[t(k.a,[t(m.a,{attrs:{cols:"6"}},[t(I.a,{attrs:{items:e.branchesList,dense:"",placeholder:"Select Branch",outlined:"","item-value":"id","item-text":"branch_name"},model:{value:e.payload.branch_id,callback:function(t){e.$set(e.payload,"branch_id",t)},expression:"payload.branch_id"}})],1),e._v(" "),t(m.a,{attrs:{cols:"6"}},[t($.a,{attrs:{"hide-details":!e.payload.subject,placeholder:"Title/Subject",outlined:"",dense:""},model:{value:e.payload.subject,callback:function(t){e.$set(e.payload,"subject",t)},expression:"payload.subject"}}),e._v(" "),e.errors&&e.errors.subject?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.subject[0]))]):e._e(),e._v(" "),e.errors&&e.errors.subject?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.subject[0]))]):e._e()],1),e._v(" "),t(m.a,{attrs:{cols:"3"}},[t(l.a,{attrs:{"hide-details":!e.payload.frequency,outlined:"",dense:"",placeholder:"Frequency",items:["Daily","Weekly","Monthly"]},on:{change:e.processDay},model:{value:e.payload.frequency,callback:function(t){e.$set(e.payload,"frequency",t)},expression:"payload.frequency"}}),e._v(" "),e.errors&&e.errors.frequency?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.frequency[0]))]):e._e()],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},["Daily"==e.payload.frequency||"Weekly"==e.payload.frequency?t(l.a,{attrs:{"hide-details":!e.payload.day,outlined:"",dense:"",placeholder:"Days",items:"Weekly"==e.payload.frequency?e.days:[],"item-text":"name","item-value":"id"},model:{value:e.payload.day,callback:function(t){e.$set(e.payload,"day",t)},expression:"payload.day"}}):e._e(),e._v(" "),"Monthly"==e.payload.frequency?t(x.a,{ref:"menu",staticClass:"mt-2",attrs:{"close-on-content-click":!1,"return-value":e.payload.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.payload,"date",t)},"update:return-value":function(t){return e.$set(e.payload,"date",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t($.a,e._g(e._b({attrs:{"hide-details":e.payload.date,outlined:"",dense:"",readonly:""},model:{value:e.payload.date,callback:function(t){e.$set(e.payload,"date",t)},expression:"payload.date"}},"v-text-field",o,!1),l))]}}],null,!1,3033548321),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(v.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.payload.date,callback:function(t){e.$set(e.payload,"date",t)},expression:"payload.date"}},[t(C.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.set_date_save(e.$refs.menu,e.payload.date)}}},[e._v("\n                  OK\n                ")])],1)],1):e._e(),e._v(" "),e.errors&&e.errors.day?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.day[0]))]):e._e(),e._v(" "),e.errors&&e.errors.date?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.date[0]))]):e._e()],1),e._v(" "),t(m.a,{attrs:{cols:"4"}},[t(x.a,{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.time=t},"update:return-value":function(t){e.time=t}},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t($.a,e._g(e._b({attrs:{"hide-details":!e.payload.time,outlined:"",dense:"",placeholder:"Time",readonly:""},model:{value:e.payload.time,callback:function(t){e.$set(e.payload,"time",t)},expression:"payload.time"}},"v-text-field",o,!1),l))]}}],null,!1,1791695008),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),e.menu2?t(D.a,{attrs:{"full-width":""},on:{"click:minute":function(t){return e.$refs.menu2.save(e.time)}},model:{value:e.payload.time,callback:function(t){e.$set(e.payload,"time",t)},expression:"payload.time"}}):e._e()],1),e._v(" "),e.errors&&e.errors.time?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.time[0]))]):e._e()],1)],1),e._v(" "),t(y.a),e._v(" "),t(k.a,{attrs:{dense:""}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("Reports")])]),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[t(d.a,{attrs:{dense:"",label:"Daily Summary",value:"daily_summary.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Daily Present",value:"daily_present.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Daily Absent",value:"daily_absent.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Daily Missing",value:"daily_missing.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Daily Manual Entry",value:"daily_manual.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),e.errors&&e.errors.reports?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.reports[0]))]):e._e()],1),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[t(d.a,{attrs:{dense:"",label:"Weekly Summary",value:"weekly_summary.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Weekly Present",value:"weekly_present.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Weekly Absent",value:"weekly_absent.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Weekly Missing",value:"weekly_missing.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Weekly Manual Entry",value:"weekly_manual.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}})],1),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"2"}},[t(d.a,{attrs:{dense:"",label:"Monthly Summary",value:"monthly_summary.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Monthly Present",value:"monthly_present.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Monthly Absent",value:"monthly_absent.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Monthly Missing",value:"monthly_missing.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}}),e._v(" "),t(d.a,{attrs:{dense:"",label:"Monthly Manual Entry",value:"monthly_manual.pdf"},model:{value:e.payload.reports,callback:function(t){e.$set(e.payload,"reports",t)},expression:"payload.reports"}})],1)],1),e._v(" "),t(y.a),e._v(" "),t(k.a,{attrs:{dense:""}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("Medium ")])]),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"1"}},[t(d.a,{attrs:{dense:"",label:"Email",value:"Email"},model:{value:e.payload.mediums,callback:function(t){e.$set(e.payload,"mediums",t)},expression:"payload.mediums"}})],1),e._v(" "),t(m.a,{staticClass:"pa-0 mr-7",attrs:{cols:"2"}},[t(d.a,{attrs:{dense:"",label:"Whatsapp",value:"Whatsapp"},model:{value:e.payload.mediums,callback:function(t){e.$set(e.payload,"mediums",t)},expression:"payload.mediums"}})],1),e._v(" "),t(m.a,{staticClass:"pa-0 ma-0",attrs:{cols:"12"}},[e.errors&&e.errors.mediums?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.mediums[0]))]):e._e()])],1),e._v(" "),t(y.a),e._v(" "),t(k.a,[t(m.a,{attrs:{cols:"12"}},[t("label",{staticClass:"col-form-label"},[t("h4",[e._v("Mail Settings")])]),t("br")])],1),e._v(" "),t(k.a,{staticStyle:{"margin-top":"-30px"}},[t(m.a,{attrs:{cols:"4"}},[t("label",{staticClass:"col-form-label"},[t("b",[e._v("Subject ")])]),e._v(" "),t($.a,{attrs:{"hide-details":!e.payload.subject,placeholder:"Subject",outlined:"",dense:""},model:{value:e.payload.subject,callback:function(t){e.$set(e.payload,"subject",t)},expression:"payload.subject"}}),e._v(" "),e.errors&&e.errors.subject?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.subject[0]))]):e._e(),e._v(" "),e.errors&&e.errors.subject?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.subject[0]))]):e._e()],1)],1),e._v(" "),t(k.a,[t(m.a,{attrs:{cols:"3"}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("To ")]),e._v("(Press enter to add email address/es)")]),e._v(" "),t($.a,{attrs:{"hide-details":!e.to,placeholder:"Email",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_to.apply(null,arguments)}},model:{value:e.to,callback:function(t){e.to=t},expression:"to"}}),e._v(" "),e._l(e.payload.tos,(function(n,l){return t(h.a,{key:l,staticClass:"ma-1",attrs:{color:"primary"}},[t("span",{staticClass:"mx-1"},[e._v(e._s(n))]),e._v(" "),t(_.a,{attrs:{small:""},on:{click:function(t){return e.deleteTO(l)}}},[e._v("mdi-close-circle-outline")])],1)})),e._v(" "),e.errors&&e.errors.tos?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors.tos[0]))]):e._e()],2),e._v(" "),t(m.a,{attrs:{cols:"3"}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("Cc ")]),e._v("(Press enter to add email address/es)")]),e._v(" "),t($.a,{attrs:{placeholder:"Email",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_cc.apply(null,arguments)}},model:{value:e.cc,callback:function(t){e.cc=t},expression:"cc"}}),e._v(" "),e._l(e.payload.ccs,(function(n,l){return t(h.a,{key:l,staticClass:"ma-1",attrs:{color:"primary"}},[t("span",{staticClass:"mx-1"},[e._v(e._s(n))]),e._v(" "),t(_.a,{attrs:{small:""},on:{click:function(t){return e.deleteCC(l)}}},[e._v("mdi-close-circle-outline")])],1)}))],2),e._v(" "),t(m.a,{attrs:{cols:"3"}},[t("label",{staticClass:"col-form-label pt-5"},[t("b",[e._v("Bcc ")]),e._v("(Press enter to add email address/es)")]),e._v(" "),t($.a,{attrs:{placeholder:"Email",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add_bcc.apply(null,arguments)}},model:{value:e.bcc,callback:function(t){e.bcc=t},expression:"bcc"}}),e._v(" "),e._l(e.payload.bccs,(function(n,l){return t(h.a,{key:l,staticClass:"ma-1",attrs:{color:"primary"}},[t("span",{staticClass:"mx-1"},[e._v(e._s(n))]),e._v(" "),t(_.a,{attrs:{small:""},on:{click:function(t){return e.deleteBCC(l)}}},[e._v("mdi-close-circle-outline")])],1)}))],2)],1),e._v(" "),t(k.a,[t(m.a,{attrs:{cols:"12"}},[t("ClientOnly",{scopedSlots:e._u([{key:"placeholder",fn:function(){return[e._v(" Loading... ")]},proxy:!0}],null,!1,669632662)},[t("tiptap-vuetify",{directives:[{def:j.b,name:"scroll",rawName:"v-scroll.self",value:e.onScroll,expression:"onScroll",modifiers:{self:!0}}],staticClass:"tiptap-icon",attrs:{extensions:e.extensions,"max-height":"400","toolbar-attributes":{color:"background red--text"}},model:{value:e.payload.body,callback:function(t){e.$set(e.payload,"body",t)},expression:"payload.body"}})],1)],1),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t(o.a,{attrs:{small:"",color:"primary"},on:{click:e.store}},[e._v(" Submit ")])],1)],1)],1)],1)],1)],1):t("NoAccess")}),[],!1,null,"32d13cb4",null);t.default=component.exports;installComponents(component,{Preloader:n(924).default,NoAccess:n(909).default})},909:function(e,t,n){"use strict";n.r(t);var l=n(60),component=Object(l.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},912:function(e,t,n){var content=n(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("1377ef10",content,!0,{sourceMap:!1})},913:function(e,t,n){var l=n(20)((function(i){return i[1]}));l.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),l.locals={},e.exports=l},921:function(e,t,n){"use strict";n(12),n(14),n(18),n(9),n(19);var l=n(2),o=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(912),n(920)),r=n(221),c=n(71),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var l=t[this.$refs.menu.listIndex];l?this.setMenuIndex(e.findIndex((function(i){return i===l}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var l=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[l]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=l}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var l=this.selectedItems[this.selectedIndex],o=this.getText(l);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},924:function(e,t,n){"use strict";n.r(t);var l=n(219),o=n(60),component=Object(o.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(l.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);