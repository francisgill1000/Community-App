(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1008:function(e,t,n){var content=n(1009);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("265ccd52",content,!0,{sourceMap:!1})},1009:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:4px;contain:layout style;display:inline-flex;flex-direction:column;font-size:1rem;position:relative;vertical-align:top}.v-picker--full-width{display:flex;width:100%}.v-picker--full-width>.v-picker__body{margin:initial}.v-picker__title{border-top-left-radius:4px;border-top-right-radius:4px;color:#fff;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){cursor:pointer;opacity:.6}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{align-items:center;display:flex;flex:1 0 auto;flex-direction:column;height:auto;margin:0 auto;overflow:hidden;position:relative;z-index:0}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-bottom-right-radius:0;border-top-right-radius:0;height:100%;position:absolute;top:0;width:170px;z-index:1}.v-application--is-ltr .v-picker--landscape .v-picker__title{left:0}.v-application--is-rtl .v-picker--landscape .v-picker__title{right:0}.v-application--is-ltr .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-ltr .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:170px;margin-right:0}.v-application--is-rtl .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-rtl .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:0;margin-right:170px}.v-picker--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}",""]),r.locals={},e.exports=r},1703:function(e,t,n){"use strict";n.r(t);var r=n(114),o=n(516),l=n(863),_=n(515),c=n(873),d=n(349),m=n(214),v=n(997),f=(n(37),n(23)),y=(n(88),n(55),{props:["shift_type_id","shift_id"],data:function(){return{date:null,menu:!1,week_days:[{label:"Sun",value:"Sun"},{label:"Mon",value:"Mon"},{label:"Tue",value:"Tue"},{label:"Wed",value:"Wed"},{label:"Thu",value:"Thu"},{label:"Fri",value:"Fri"},{label:"Sat",value:"Sat"}],loading:!1,working_hours_menu:!1,overtime_interval_menu:!1,time_in_menu:!1,time_out_menu:!1,grace_time_in_menu:!1,grace_time_out_menu:!1,late_time_menu:!1,early_time_menu:!1,beginning_in_menu:!1,ending_in_menu:!1,absent_min_in_menu:!1,absent_min_out_menu:!1,beginning_out_menu:!1,ending_out_menu:!1,payload:{on_duty_time:"09:00",beginning_in:"06:00",ending_in:"13:00",late_time:"09:15",off_duty_time:"18:00",beginning_out:"17:00",ending_out:"23:59",early_time:"17:30",absent_min_in:"01:00",absent_min_out:"01:00",working_hours:"09:00",overtime_interval:"09:00",days:["Sun"]},errors:[],shifts:[],data:[],response:"",snackbar:!1}},created:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$axios.get("/shift/".concat(e.shift_id)).then((function(t){var data=t.data;e.loading=!1,e.payload={name:data.name,on_duty_time:data.on_duty_time,beginning_in:data.beginning_in,ending_in:data.ending_in,late_time:data.late_time,off_duty_time:data.off_duty_time,beginning_out:data.beginning_out,ending_out:data.ending_out,early_time:data.early_time,absent_min_in:data.absent_min_in,absent_min_out:data.absent_min_out,working_hours:data.working_hours,overtime_interval:data.overtime_interval,company_id:e.$auth.user.company_id,shift_type_id:data.shift_type_id}})).catch((function(t){var n=t.message;e.snackbar=!0,e.response=n}));case 1:case"end":return t.stop()}}),t)})))()},watch:{},computed:{},methods:{can:function(e){return this.$pagePermission.can(e,this)},store_shift:function(){var e=this;this.loading=!0,this.$axios.put("/shift/".concat(this.shift_id),this.payload).then((function(t){var data=t.data;e.loading=!1,data.status?(e.snackbar=!0,e.response="Shift update successfully",setTimeout((function(){e.$router.push("/shift")}),1e3)):e.errors=data.errors})).catch((function(t){var n=t.message;e.snackbar=!0,e.response=n}))}}}),h=n(116),component=Object(h.a)(y,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(c.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(_.a,[t(o.a,{attrs:{cols:"12",md:"12"}},[e._v("\n      Shift Name "),t("span",{staticClass:"error--text"},[e._v("*")]),e._v(" "),t(m.a,{staticClass:"mt-1",attrs:{"hide-details":!e.errors.name,"error-messages":e.errors.name&&e.errors.name[0],outlined:"",dense:""},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"time_in_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.on_duty_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"on_duty_time",t)},"update:return-value":function(t){return e.$set(e.payload,"on_duty_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          On Duty Time\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",class:1!==e.payload.shift_type_id?"":"red lighten-1",attrs:{"append-icon":"mdi-clock-outline","hide-details":!e.errors.on_duty_time,readonly:"",dense:"",outlined:""},model:{value:e.payload.on_duty_time,callback:function(t){e.$set(e.payload,"on_duty_time",t)},expression:"payload.on_duty_time"}},"v-text-field",o,!1),r))]}}]),model:{value:e.time_in_menu,callback:function(t){e.time_in_menu=t},expression:"time_in_menu"}},[e._v(" "),e.time_in_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.on_duty_time,callback:function(t){e.$set(e.payload,"on_duty_time",t)},expression:"payload.on_duty_time"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.time_in_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.time_in_menu_ref.save(e.payload.on_duty_time)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.on_duty_time?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.on_duty_time[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"beginning_in_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.beginning_in,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"beginning_in",t)},"update:return-value":function(t){return e.$set(e.payload,"beginning_in",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Beginning In\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!e.errors.beginning_in,dense:"",outlined:""},model:{value:e.payload.beginning_in,callback:function(t){e.$set(e.payload,"beginning_in",t)},expression:"payload.beginning_in"}},"v-text-field",o,!1),r))]}}]),model:{value:e.beginning_in_menu,callback:function(t){e.beginning_in_menu=t},expression:"beginning_in_menu"}},[e._v(" "),e.beginning_in_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.beginning_in,callback:function(t){e.$set(e.payload,"beginning_in",t)},expression:"payload.beginning_in"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.beginning_in_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.beginning_in_menu_ref.save(e.payload.beginning_in)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.beginning_in?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.beginning_in[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"ending_in_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.ending_in,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"ending_in",t)},"update:return-value":function(t){return e.$set(e.payload,"ending_in",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Ending In\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!e.errors.ending_in,dense:"",outlined:""},model:{value:e.payload.ending_in,callback:function(t){e.$set(e.payload,"ending_in",t)},expression:"payload.ending_in"}},"v-text-field",o,!1),r))]}}]),model:{value:e.ending_in_menu,callback:function(t){e.ending_in_menu=t},expression:"ending_in_menu"}},[e._v(" "),e.ending_in_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.ending_in,callback:function(t){e.$set(e.payload,"ending_in",t)},expression:"payload.ending_in"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.ending_in_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.ending_in_menu_ref.save(e.payload.ending_in)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.ending_in?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.ending_in[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"late_time_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.late_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"late_time",t)},"update:return-value":function(t){return e.$set(e.payload,"late_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Late Time\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline","hide-details":!e.errors.late_time,readonly:"",dense:"",outlined:""},model:{value:e.payload.late_time,callback:function(t){e.$set(e.payload,"late_time",t)},expression:"payload.late_time"}},"v-text-field",o,!1),r))]}}]),model:{value:e.late_time_menu,callback:function(t){e.late_time_menu=t},expression:"late_time_menu"}},[e._v(" "),e.late_time_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.late_time,callback:function(t){e.$set(e.payload,"late_time",t)},expression:"payload.late_time"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.late_time_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.late_time_menu_ref.save(e.payload.late_time)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.late_time?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.late_time[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"time_out_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.off_duty_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"off_duty_time",t)},"update:return-value":function(t){return e.$set(e.payload,"off_duty_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Off Duty Time\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!e.errors.off_duty_time,dense:"",outlined:""},model:{value:e.payload.off_duty_time,callback:function(t){e.$set(e.payload,"off_duty_time",t)},expression:"payload.off_duty_time"}},"v-text-field",o,!1),r))]}}]),model:{value:e.time_out_menu,callback:function(t){e.time_out_menu=t},expression:"time_out_menu"}},[e._v(" "),e.time_out_menu?t(v.a,{attrs:{format:"24hr",min:e.payload.on_duty_time,max:"23:59","full-width":""},model:{value:e.payload.off_duty_time,callback:function(t){e.$set(e.payload,"off_duty_time",t)},expression:"payload.off_duty_time"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.time_out_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.time_out_menu_ref.save(e.payload.off_duty_time)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.off_duty_time?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.off_duty_time[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"beginning_out_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.beginning_out,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"beginning_out",t)},"update:return-value":function(t){return e.$set(e.payload,"beginning_out",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Beginning Out\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!e.errors.beginning_out,dense:"",outlined:""},model:{value:e.payload.beginning_out,callback:function(t){e.$set(e.payload,"beginning_out",t)},expression:"payload.beginning_out"}},"v-text-field",o,!1),r))]}}]),model:{value:e.beginning_out_menu,callback:function(t){e.beginning_out_menu=t},expression:"beginning_out_menu"}},[e._v(" "),e.beginning_out_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.beginning_out,callback:function(t){e.$set(e.payload,"beginning_out",t)},expression:"payload.beginning_out"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.beginning_out_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.beginning_out_menu_ref.save(e.payload.beginning_out)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.beginning_out?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.beginning_out[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"ending_out_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.ending_out,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"ending_out",t)},"update:return-value":function(t){return e.$set(e.payload,"ending_out",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Ending Out\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline","hide-details":!e.errors.ending_out,readonly:"",dense:"",outlined:""},model:{value:e.payload.ending_out,callback:function(t){e.$set(e.payload,"ending_out",t)},expression:"payload.ending_out"}},"v-text-field",o,!1),r))]}}]),model:{value:e.ending_out_menu,callback:function(t){e.ending_out_menu=t},expression:"ending_out_menu"}},[e._v(" "),e.ending_out_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.ending_out,callback:function(t){e.$set(e.payload,"ending_out",t)},expression:"payload.ending_out"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.ending_out_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.ending_out_menu_ref.save(e.payload.ending_out)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.ending_out?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.ending_out[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"early_time_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.early_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"early_time",t)},"update:return-value":function(t){return e.$set(e.payload,"early_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Early Time\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline","hide-details":!e.errors.early_time,readonly:"",dense:"",outlined:""},model:{value:e.payload.early_time,callback:function(t){e.$set(e.payload,"early_time",t)},expression:"payload.early_time"}},"v-text-field",o,!1),r))]}}]),model:{value:e.early_time_menu,callback:function(t){e.early_time_menu=t},expression:"early_time_menu"}},[e._v(" "),e.early_time_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.early_time,callback:function(t){e.$set(e.payload,"early_time",t)},expression:"payload.early_time"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.early_time_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.early_time_menu_ref.save(e.payload.early_time)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.early_time?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.early_time[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"absent_min_in_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.absent_min_in,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"absent_min_in",t)},"update:return-value":function(t){return e.$set(e.payload,"absent_min_in",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Absent In\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline","hide-details":!e.errors.absent_min_in,readonly:"",dense:"",outlined:""},model:{value:e.payload.absent_min_in,callback:function(t){e.$set(e.payload,"absent_min_in",t)},expression:"payload.absent_min_in"}},"v-text-field",o,!1),r))]}}]),model:{value:e.absent_min_in_menu,callback:function(t){e.absent_min_in_menu=t},expression:"absent_min_in_menu"}},[e._v(" "),e.absent_min_in_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.absent_min_in,callback:function(t){e.$set(e.payload,"absent_min_in",t)},expression:"payload.absent_min_in"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.absent_min_in_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.absent_min_in_menu_ref.save(e.payload.absent_min_in)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.absent_min_in?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.absent_min_in[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(l.a,{ref:"absent_min_out_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.absent_min_out,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"absent_min_out",t)},"update:return-value":function(t){return e.$set(e.payload,"absent_min_out",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e._v("\n          Absent Out\n          "),t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline","hide-details":!e.errors.absent_min_out,readonly:"",dense:"",outlined:""},model:{value:e.payload.absent_min_out,callback:function(t){e.$set(e.payload,"absent_min_out",t)},expression:"payload.absent_min_out"}},"v-text-field",o,!1),r))]}}]),model:{value:e.absent_min_out_menu,callback:function(t){e.absent_min_out_menu=t},expression:"absent_min_out_menu"}},[e._v(" "),e.absent_min_out_menu?t(v.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.payload.absent_min_out,callback:function(t){e.$set(e.payload,"absent_min_out",t)},expression:"payload.absent_min_out"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.absent_min_out_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.absent_min_out_menu_ref.save(e.payload.absent_min_out)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.absent_min_out?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.absent_min_out[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[e._v("\n      Minimum Working Hours "),t("span",{staticClass:"error--text"},[e._v("*")]),e._v(" "),t(l.a,{ref:"working_hours_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.working_hours,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"working_hours",t)},"update:return-value":function(t){return e.$set(e.payload,"working_hours",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!e.errors.working_hours,dense:"",outlined:""},model:{value:e.payload.working_hours,callback:function(t){e.$set(e.payload,"working_hours",t)},expression:"payload.working_hours"}},"v-text-field",o,!1),r))]}}]),model:{value:e.working_hours_menu,callback:function(t){e.working_hours_menu=t},expression:"working_hours_menu"}},[e._v(" "),e.working_hours_menu?t(v.a,{attrs:{format:"24hr","full-width":""},model:{value:e.payload.working_hours,callback:function(t){e.$set(e.payload,"working_hours",t)},expression:"payload.working_hours"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.working_hours_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.working_hours_menu_ref.save(e.payload.working_hours)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.working_hours?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.working_hours[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[e._v("\n      Overtime start after duty hours "),t("span",{staticClass:"error--text"},[e._v("*")]),e._v(" "),t(l.a,{ref:"overtime_interval_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.payload.overtime_interval,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.payload,"overtime_interval",t)},"update:return-value":function(t){return e.$set(e.payload,"overtime_interval",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(m.a,e._g(e._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!e.errors.working_hours,dense:"",outlined:""},model:{value:e.payload.overtime_interval,callback:function(t){e.$set(e.payload,"overtime_interval",t)},expression:"payload.overtime_interval"}},"v-text-field",o,!1),r))]}}]),model:{value:e.overtime_interval_menu,callback:function(t){e.overtime_interval_menu=t},expression:"overtime_interval_menu"}},[e._v(" "),e.overtime_interval_menu?t(v.a,{attrs:{format:"24hr","full-width":""},model:{value:e.payload.overtime_interval,callback:function(t){e.$set(e.payload,"overtime_interval",t)},expression:"payload.overtime_interval"}},[t(d.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.overtime_interval_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.overtime_interval_menu_ref.save(e.payload.overtime_interval)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.overtime_interval?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.overtime_interval[0]))]):e._e()],1)],1),e._v(" "),t(_.a,[t(o.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-left"},[e.can("shift_create")?t(r.a,{attrs:{small:"",color:"primary"},on:{click:e.store_shift}},[e._v("\n          Submit\n        ")]):e._e()],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports},941:function(e,t,n){"use strict";n(89);var r=n(29),o=n(8),l=n(0);t.a=Object(o.a)(r.a).extend({methods:{genPickerButton:function(e,t,content){var n=this,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",_=this[e]===t;return this.$createElement("div",{staticClass:"v-picker__title__btn ".concat(o).trim(),class:{"v-picker__title__btn--active":_,"v-picker__title__btn--readonly":r},on:_||r?void 0:{click:function(r){r.stopPropagation(),n.$emit("update:".concat(Object(l.y)(e)),t)}}},Array.isArray(content)?content:[content])}}})},975:function(e,t,n){"use strict";n(221),n(56);t.a=function(e){var t,n,r;return t=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r="0",n>>=0,t=String(t),r=String(r),t.length>n?String(t):((n-=t.length)>r.length&&(r+=r.repeat(n/r.length)),r.slice(0,n)+String(t))}},976:function(e,t,n){"use strict";n(28),n(217),n(218),n(12),n(14),n(13),n(6),n(17),n(11),n(18);var r=n(3),o=(n(1008),n(527),n(29)),l=n(220),_=n(26),c=n(0),d=n(8);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=Object(d.a)(o.a,l.a,_.a).extend({name:"v-picker",props:{flat:Boolean,fullWidth:Boolean,landscape:Boolean,noTitle:Boolean,transition:{type:String,default:"fade-transition"},width:{type:[Number,String],default:290}},computed:{computedTitleColor:function(){var e=!this.isDark&&(this.color||"primary");return this.color||e}},methods:{genTitle:function(){return this.$createElement("div",this.setBackgroundColor(this.computedTitleColor,{staticClass:"v-picker__title",class:{"v-picker__title--landscape":this.landscape}}),this.$slots.title)},genBodyTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},this.$slots.default)},genBody:function(){return this.$createElement("div",{staticClass:"v-picker__body",class:v({"v-picker__body--no-title":this.noTitle},this.themeClasses),style:this.fullWidth?void 0:{width:Object(c.i)(this.width)}},[this.genBodyTransition()])},genActions:function(){return this.$createElement("div",{staticClass:"v-picker__actions v-card__actions",class:{"v-picker__actions--no-title":this.noTitle}},this.$slots.actions)}},render:function(e){return e("div",{staticClass:"v-picker v-card",class:v(v({"v-picker--flat":this.flat,"v-picker--landscape":this.landscape,"v-picker--full-width":this.fullWidth},this.themeClasses),this.elevationClasses)},[this.$slots.title?this.genTitle():null,this.genBody(),this.$slots.actions?this.genActions():null])}});t.a=Object(d.a)(o.a,l.a,_.a).extend({name:"picker",props:{flat:Boolean,fullWidth:Boolean,headerColor:String,landscape:Boolean,noTitle:Boolean,width:{type:[Number,String],default:290}},methods:{genPickerTitle:function(){return null},genPickerBody:function(){return null},genPickerActionsSlot:function(){return this.$scopedSlots.default?this.$scopedSlots.default({save:this.save,cancel:this.cancel}):this.$slots.default},genPicker:function(e){var t=[];if(!this.noTitle){var title=this.genPickerTitle();title&&t.push(title)}var body=this.genPickerBody();return body&&t.push(body),t.push(this.$createElement("template",{slot:"actions"},[this.genPickerActionsSlot()])),this.$createElement(f,{staticClass:e,props:{color:this.headerColor||this.color,dark:this.dark,elevation:this.elevation,flat:this.flat,fullWidth:this.fullWidth,landscape:this.landscape,light:this.light,width:this.width,noTitle:this.noTitle}},t)}}})}}]);