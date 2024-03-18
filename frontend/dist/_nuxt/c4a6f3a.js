(window.webpackJsonp=window.webpackJsonp||[]).push([[273,204,231,232,240],{1002:function(e,t,n){"use strict";n(976)},1003:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,"input[type=number][data-v-1be929ca]::-webkit-inner-spin-button,input[type=number][data-v-1be929ca]::-webkit-outer-spin-button{font-size:20px!important;padding:5px!important}",""]),r.locals={},e.exports=r},1004:function(e,t,n){"use strict";n.r(t);var r=n(326),l=n(204),o=n(862),d=n(214),m=(n(35),n(521),{props:["label","default_value"],auth:!1,layout:"login",data:function(){return{hour:"00",minute:"00",menu2:!1,time:"00:00"}},created:function(){this.time=this.default_value,this.$emit("getTime",this.default_value)},methods:{updateTime:function(){this.hour<0&&(this.hour=0),this.hour>23&&(this.hour=23),this.minute<0&&(this.minute=0),this.minute>59&&(this.minute=59),this.time="".concat(String(this.hour).padStart(2,"0"),":").concat(String(this.minute).padStart(2,"0")),this.$emit("getTime",this.time)},incrementHour:function(){this.hour=(this.hour+1)%24,this.updateTime()},decrementHour:function(){this.hour=(this.hour-1+24)%24,this.updateTime()},incrementMinute:function(){this.minute=(this.minute+1)%60,this.updateTime()},decrementMinute:function(){this.minute=(this.minute-1+60)%60,this.updateTime()}}}),_=(n(1002),n(116)),component=Object(_.a)(m,(function(){var e=this,t=e._self._c;return t(o.a,{ref:"menu",attrs:{dense:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"150px"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t(d.a,e._g(e._b({attrs:{label:e.label,outlined:"",dense:"","append-icon":"mdi-clock-time-four-outline","hide-details":!0},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateTime.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"tab",9,t.key,"Tab")?null:e.updateTime.apply(null,arguments)}]},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}},"v-text-field",l,!1),r))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),t(r.a,{staticStyle:{height:"55px"}},[t(l.a,{staticClass:"pb-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hour,expression:"hour"}],staticStyle:{border:"1px solid grey","border-radius":"5px"},attrs:{outlined:"",dense:"",placeholder:"HH",type:"number",min:"0",max:"23"},domProps:{value:e.hour},on:{input:[function(t){t.target.composing||(e.hour=t.target.value)},e.updateTime],click:e.updateTime,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.incrementHour.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.decrementHour.apply(null,arguments))},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault(),e.menu2=!1}]}}),e._v("\n       \n      "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.minute,expression:"minute"}],staticStyle:{border:"1px solid grey","border-radius":"5px"},attrs:{outlined:"",dense:"",placeholder:"MM",type:"number",min:"0",max:"59"},domProps:{value:e.minute},on:{input:[function(t){t.target.composing||(e.minute=t.target.value)},e.updateTime],click:e.updateTime,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.incrementMinute.apply(null,arguments))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.decrementMinute.apply(null,arguments))},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault(),e.menu2=!1}]}})])],1)],1)}),[],!1,null,"1be929ca",null);t.default=component.exports},1045:function(e,t,n){"use strict";n.r(t);var r=n(520),l={props:["label","default_value"],auth:!1,layout:"login",data:function(){return{selectedDays:["Mon"],week_days:[{label:"Mon",value:"Mon"},{label:"Tue",value:"Tue"},{label:"Wed",value:"Wed"},{label:"Thu",value:"Thu"},{label:"Fri",value:"Fri"},{label:"Sat",value:"Sat"},{label:"Sun",value:"Sun"}]}},created:function(){this.selectedDays=this.default_value},methods:{setWeekdays:function(){this.$emit("selectedDays",this.selectedDays)}}},o=n(116),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("div",[e._v(e._s(e.label))]),e._v(" "),e._l(e.week_days,(function(n,l){return t(r.a,{key:l,staticClass:"mr-5",staticStyle:{float:"left"},attrs:{dense:"",label:n.label,value:n.value,"hide-details":""},on:{click:e.setWeekdays},model:{value:e.selectedDays,callback:function(t){e.selectedDays=t},expression:"selectedDays"}})}))],2)}),[],!1,null,null,null);t.default=component.exports},1046:function(e,t,n){"use strict";n.r(t);var r=n(892),l={props:["label","default_value"],auth:!1,layout:"login",data:function(){return{weekend:"Not Applicable",items:[{id:"Not Applicable",name:"Not Applicable"},{id:"Flexi",name:"Flexible"},{id:"Monday",name:"Monday"},{id:"Tuesday",name:"Tuesday"},{id:"Wednesday",name:"Wednesday"},{id:"Thursday",name:"Thursday"},{id:"Friday",name:"Friday"},{id:"Saturday",name:"Saturday"},{id:"Sunday",name:"Sunday"}]}},created:function(){this.weekend=this.default_value,this.$emit("selectedWeekend",this.default_value)},watch:{weekend:function(e){this.weekend=e}},methods:{setWeekend:function(){this.$emit("selectedWeekend",this.weekend)}}},o=n(116),component=Object(o.a)(l,(function(){var e=this;return(0,e._self._c)(r.a,{attrs:{label:e.label,items:e.items,"item-value":"id","item-text":"name",dense:"",outlined:"","hide-details":!0},on:{change:e.setWeekend},model:{value:e.weekend,callback:function(t){e.weekend=t},expression:"weekend"}})}),[],!1,null,null,null);t.default=component.exports},1047:function(e,t,n){"use strict";n.r(t);var r=n(892),l={props:["label","default_value"],auth:!1,layout:"login",data:function(){return{weekend:0,items:[{id:0,name:"Not Applicable"},{id:1,name:"1 Day"},{id:2,name:"2 Days"},{id:3,name:"3 days"},{id:4,name:"4 days"},{id:5,name:"5 days"},{id:6,name:"6 days"},{id:7,name:"7 days"},{id:8,name:"8 days"},{id:9,name:"9 days"},{id:10,name:"10 days"}]}},created:function(){this.weekend=parseInt(this.default_value)},methods:{setMonthlyHolidays:function(){this.$emit("selectedMonthlyHolidays",this.weekend)}}},o=n(116),component=Object(o.a)(l,(function(){var e=this;return(0,e._self._c)(r.a,{attrs:{label:e.label,items:e.items,"item-value":"id","item-text":"name",dense:"",outlined:"","hide-details":!0},on:{change:e.setMonthlyHolidays},model:{value:e.weekend,callback:function(t){e.weekend=t},expression:"weekend"}})}),[],!1,null,null,null);t.default=component.exports},1743:function(e,t,n){"use strict";n.r(t);var r=n(518),l=n(517),o=n(892),d=n(1004),m=n(1045),_=n(1046),c=n(1047),y={props:["payload","errors"],components:{TimePickerCommon:d.default,DaysPickerCommon:m.default,WeekendPickerCommon:_.default,MonthlyFlexiHolidays:c.default}},f=n(116),component=Object(f.a)(y,(function(){var e=this,t=e._self._c;return t(l.a,[t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"On Duty Time",default_value:e.payload.on_duty_time},on:{getTime:function(t){return e.payload.on_duty_time=t}}}),e._v(" "),e.errors&&e.errors.off_duty_time?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.off_duty_time[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Off Duty Time",default_value:e.payload.off_duty_time},on:{getTime:function(t){return e.payload.off_duty_time=t}}}),e._v(" "),e.errors&&e.errors.off_duty_time?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.off_duty_time[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Min working hrs",default_value:e.payload.working_hours},on:{getTime:function(t){return e.payload.working_hours=t}}}),e._v(" "),e.errors&&e.errors.working_hours?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.working_hours[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"OT start after duty hrs",default_value:e.payload.overtime_interval},on:{getTime:function(t){return e.payload.overtime_interval=t}}}),e._v(" "),e.errors&&e.errors.overtime_interval?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.overtime_interval[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Beginning In",default_value:e.payload.beginning_in},on:{getTime:function(t){return e.payload.beginning_in=t}}}),e._v(" "),e.errors&&e.errors.beginning_in?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.beginning_in[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Beginning Out",default_value:e.payload.beginning_out},on:{getTime:function(t){return e.payload.beginning_out=t}}}),e._v(" "),e.errors&&e.errors.beginning_out?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.beginning_out[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Ending In",default_value:e.payload.ending_in},on:{getTime:function(t){return e.payload.ending_in=t}}}),e._v(" "),e.errors&&e.errors.ending_in?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.ending_in[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Ending Out",default_value:e.payload.ending_out},on:{getTime:function(t){return e.payload.ending_out=t}}}),e._v(" "),e.errors&&e.errors.ending_out?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.ending_out[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Late",default_value:e.payload.late_time},on:{getTime:function(t){return e.payload.late_time=t}}}),e._v(" "),e.errors&&e.errors.late_time?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.late_time[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Early",default_value:e.payload.early_time},on:{getTime:function(t){return e.payload.early_time=t}}}),e._v(" "),e.errors&&e.errors.early_time?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.early_time[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Absent For In",default_value:e.payload.absent_min_in},on:{getTime:function(t){return e.payload.absent_min_in=t}}}),e._v(" "),e.errors&&e.errors.absent_min_in?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.absent_min_in[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"3"}},[t("TimePickerCommon",{attrs:{label:"Absent For Out",default_value:e.payload.absent_min_out},on:{getTime:function(t){return e.payload.absent_min_out=t}}}),e._v(" "),e.errors&&e.errors.absent_min_out?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.absent_min_out[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"12"}},[t("DaysPickerCommon",{attrs:{label:"Working Days",default_value:e.payload.days},on:{selectedDays:function(t){return e.payload.days=t}}}),e._v(" "),e.errors&&e.errors.days?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.days[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{label:"Half Day",items:[{id:"Not Applicable",name:"Not Applicable"},{id:"Monday",name:"Monday"},{id:"Tuesday",name:"Tuesday"},{id:"Wednesday",name:"Wednesday"},{id:"Thursday",name:"Thursday"},{id:"Friday",name:"Friday"},{id:"Saturday",name:"Saturday"},{id:"Sunday",name:"Sunday"}],"item-value":"id","item-text":"name",dense:"",outlined:"","hide-details":!0},model:{value:e.payload.halfday,callback:function(t){e.$set(e.payload,"halfday",t)},expression:"payload.halfday"}}),e._v(" "),e.errors&&e.errors.halfday?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.halfday[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"4"}},[t("TimePickerCommon",{attrs:{label:"Number of working hours",default_value:e.payload.halfday_working_hours},on:{getTime:function(t){e.payload.halfday_working_hours=t}}}),e._v(" "),e.errors&&e.errors.off_duty_time?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.off_duty_time[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"4"}}),e._v(" "),t(r.a,{attrs:{cols:"12",md:"4"}},[t("WeekendPickerCommon",{attrs:{label:"Weekend 1",default_value:e.payload.weekend1},on:{selectedWeekend:function(t){return e.payload.weekend1=t}}}),e._v(" "),e.errors&&e.errors.weekend1?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.weekend1[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"4"}},[t("WeekendPickerCommon",{attrs:{label:"Weekend 2",default_value:e.payload.weekend2},on:{selectedWeekend:function(t){return e.payload.weekend2=t}}}),e._v(" "),e.errors&&e.errors.weekend2?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.weekend2[0]))]):e._e()],1),e._v(" "),t(r.a,{attrs:{cols:"12",md:"4"}},[t("MonthlyFlexiHolidays",{attrs:{label:"Monthly Flexible Holidays",default_value:e.payload.monthly_flexi_holidays},on:{selectedMonthlyHolidays:function(t){return e.payload.monthly_flexi_holidays=t}}}),e._v(" "),e.errors&&e.errors.monthly_flexi_holidays?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.monthly_flexi_holidays[0]))]):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports},976:function(e,t,n){var content=n(1003);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("4d0b8504",content,!0,{sourceMap:!1})}}]);