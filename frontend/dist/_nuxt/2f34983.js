(window.webpackJsonp=window.webpackJsonp||[]).push([[396,180,188,198],{1268:function(t,e,n){var content=n(1431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("90429c18",content,!0,{sourceMap:!1})},1430:function(t,e,n){"use strict";n(1268)},1431:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"td[data-v-a588a484],th[data-v-a588a484]{border:1px solid #ddd;padding-left:5px}*[data-v-a588a484]{box-sizing:border-box}table[data-v-a588a484]{border-collapse:collapse;color:#444;font-size:13px;white-space:nowrap;width:100%}table>thead[data-v-a588a484]{background-color:#00bcd4;color:#fff}table>thead th[data-v-a588a484]{padding:15px}table td[data-v-a588a484],table th[data-v-a588a484]{border:1px solid rgba(0,0,0,.09);padding:10px 15px}table>tbody>tr>td>img[data-v-a588a484]{border:4px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.2);display:inline-block;height:60px;-o-object-fit:cover;object-fit:cover;width:60px}table>tbody>tr[data-v-a588a484]{background-color:#fff;transition:.3s ease-in-out}table>tbody>tr[data-v-a588a484]:nth-child(2n){background-color:#eee}table>tbody>tr[data-v-a588a484]:hover{filter:drop-shadow(0 2px 6px rgba(0,0,0,.13333))}",""]),r.locals={},t.exports=r},1575:function(t,e,n){"use strict";n.r(e);var r=n(114),o=n(133),l=n(87),c=n(1176),d=n(518),h=n(875),f=n(1548),m=n(350),_=n(147),v=n(326),x=n(204),y=n(60),k=n(862),S=n(517),w=n(892),C=n(872),j=n(349),O=n(214),D=n(96),N=n(855),T=n(851),I=(n(37),n(3)),$=(n(99),n(6),n(41),n(61),n(35),{components:{Back:n(970).default},data:function(){var t;return t={datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",color:"primary",e1:1,menu2:!1,dialog:!1,editDialog:!1,preloader:!1,loading:!1,response:!1,id:"",snackbar:!1,data:[],options:{},errors:[],isEdit:!1,editedItemId:"",Model:"ModelRoster",endpoint:"roster",search:""},Object(I.a)(t,"snackbar",!1),Object(I.a)(t,"ids",[]),Object(I.a)(t,"loading",!1),Object(I.a)(t,"total",0),Object(I.a)(t,"headers",[{text:"Day"},{text:"Shift Type"},{text:"From"},{text:"To"}]),Object(I.a)(t,"days",[]),Object(I.a)(t,"date",[]),Object(I.a)(t,"data",[]),Object(I.a)(t,"shifts",[]),Object(I.a)(t,"editShifts",[]),Object(I.a)(t,"editName",""),Object(I.a)(t,"shift",[]),Object(I.a)(t,"editJson",[]),Object(I.a)(t,"shift_ids",[]),Object(I.a)(t,"shiftNames",[]),Object(I.a)(t,"times",[]),Object(I.a)(t,"scheduleData",[]),Object(I.a)(t,"name",""),Object(I.a)(t,"errors",[]),Object(I.a)(t,"selectedDays",[]),Object(I.a)(t,"edit_arr",[]),Object(I.a)(t,"headers_table",[{text:"#",align:"left",sortable:!0,value:"sno"},{text:"Name",align:"left",sortable:!0,key:"name",value:"name"},{text:"Description",align:"left",sortable:!0,key:"name",value:"description"},{text:"Options",align:"left",sortable:!1,key:"name",value:"options"}]),t},watch:{dialog:function(){this.shift={},this.errors=[],!this.isEdit&&(this.name="")}},computed:{formTitle:function(){return this.isEdit?"Edit":"New"}},created:function(){var t,e,n;this.preloader=!1,this.id=null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id,this.get_days(),this.get_shifts(),this.get_schedule()},methods:{datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},getUpdateData:function(t,e,n){},can:function(t){return this.$pagePermission.can(t,this)},editItem:function(t){this.editJson=t.json,this.editShifts=t.json,this.editName=t.name,this.isEdit=!0,this.errors=[],this.editedItemId=t.id,this.editDialog=!0},close:function(){this.editDialog=!1,this.dialog=!1,this.isEdit=!1},update_schedule:function(){var t,e,n,r=this,o={json:this.editShifts,company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id,name:this.editName};this.$axios.put("/roster/"+this.editedItemId,o).then((function(t){var data=t.data;data.status?(r.get_schedule(),r.isEdit=!1,r.editDialog=!1,r.snackbar=data.status,r.response=data.message):r.errors=data.errors})).catch((function(t){return console.log(t)}))},getShiftType:function(t){return-1==t?"(H)":-2==t?"(A)":33==t?"(FL)":void 0},save:function(){var t,e,n,r=this;this.shiftNames=[];var o=function(t){var e=r.shifts.find((function(e){return e.id==r.shift[t]})).name||"---";r.shiftNames.push(e)};for(var l in this.shift)o(l);var c={days:this.days,shift_ids:this.shift,shift_names:this.shiftNames,company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(n=e.company)||void 0===n?void 0:n.id,name:this.name};this.isEdit?this.$axios.put("/roster/"+this.editedItemId,c).then((function(t){var data=t.data;data.status?(r.get_schedule(),r.isEdit=!1,r.dialog=!1,r.snackbar=data.status,r.response=data.message):r.errors=data.errors})).catch((function(t){return console.log(t)})):this.$axios.post("/roster",c).then((function(t){var data=t.data;r.loading=!1,data.status?(r.get_schedule(),r.isEdit=!1,r.dialog=!1,r.snackbar=data.status,r.response=data.message):r.errors=data.errors})).catch((function(t){return console.log(t)}))},getTimeRange:function(t){var e=this.shifts.find((function(e){return e.id==t})),n=e.on_duty_time,r=e.off_duty_time,o=-1==t||-2==t?"---":n+"-"+r;this.times.includes(o)||this.times.push(o)},getFrom:function(t){var e=this.shifts.find((function(e){return e.id==t}));return e&&e.on_duty_time||"---"},getTo:function(t){var e=this.shifts.find((function(e){return e.id==t}));return e&&e.off_duty_time||"---"},get_days:function(){var t=new Date,e=t.getDay(),n=new Date(t),r=t.getDate()-e+(0===e?-6:1);n.setDate(r);for(var o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=0;i<7;i++){var l=new Date(n);l.setDate(n.getDate()+i),this.days.push(o[l.getDay()]),this.date.push(l.toISOString().split("T")[0])}},get_shifts:function(){var t=this,e={per_page:1e3,company_id:this.$auth.user.company_id};this.$axios.get("shift",{params:e}).then((function(e){var data=e.data;t.shifts=data.data.concat([{id:-1,name:"Off"},{id:-2,name:"AutoShift"}])}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("roster/"+t.id).then((function(t){var data=t.data;e.snackbar=data.status,e.get_schedule(),e.response=data.message})).catch((function(t){return console.log(t)}))},get_schedule:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.loading=!0;var r={per_page:20,company_id:this.$auth.user.company_id};""!=n&&(r[e]=n),this.$axios.get("roster",{params:r}).then((function(n){var data=n.data;if(""!=e&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;t.scheduleData=data.data,t.loading=!1}))}}}),E=$,z=(n(1430),n(116)),component=Object(z.a)(E,(function(){var t=this,e=t._self._c;return t.can("schedule_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(C.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(m.a,{attrs:{persistent:"","max-width":"35%"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[e(o.a,[e(l.c,{staticClass:"primary white--text background",attrs:{dense:""}},[t._v("\n        Edit Schedule\n        "),e(j.a),t._v(" "),e(_.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(e){t.editDialog=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(l.b,[e(S.a,[e(d.a,{staticClass:"mt-2",attrs:{md:"6","mt-2":""}},[e(O.a,{class:t.errors&&t.errors.name?"mb-0":"mb-2",attrs:{"hide-details":!0,placeholder:"Name",outlined:"",dense:""},model:{value:t.editName,callback:function(e){t.editName=e},expression:"editName"}}),t._v(" "),t.errors&&t.errors.name?e("small",{staticClass:"error--text ma-0 pa-0",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.errors.name[0]))]):t._e()],1)],1),t._v(" "),e("table",{staticStyle:{width:"100%"}},[e("tr",{staticStyle:{"font-size":"15px"}},[e("td",{staticStyle:{width:"130px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("Day")])])]),t._v(" "),e("td",{staticStyle:{"max-width":"150px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("Shifts")])])]),t._v(" "),e("td",{staticStyle:{"text-align":"center",width:"120px"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("From")])])]),t._v(" "),e("td",{staticStyle:{"text-align":"center",width:"120px"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("To")])])])]),t._v(" "),t._l(t.editShifts,(function(n,r){return e("tr",{key:r,staticStyle:{"text-align":"center","font-size":"15px"}},[e("td",{staticStyle:{width:"80px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v(t._s(n.day))])])]),t._v(" "),e("td",{staticStyle:{width:"400px","text-align":"left",padding:"8px 0px 0px 0px"}},[e(w.a,{staticClass:"mx-5 py-0",attrs:{items:t.shifts,dense:"",outlined:"","item-text":"name","item-value":"id",placeholder:"Select","hide-details":!0},model:{value:n.shift_id,callback:function(e){t.$set(n,"shift_id",e)},expression:"item.shift_id"}}),t._v(" "),!t.shift[r]&&t.errors&&t.errors.shift_ids?e("small",{staticClass:"error--text text-left py-0 my-0",staticStyle:{"margin-left":"20px","font-size":"12px"}},[t._v("\n                "+t._s(t.errors.shift_ids[0])+"\n              ")]):t._e()],1),t._v(" "),e("td",{staticStyle:{"max-width":"150px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[t._v("\n                "+t._s(t.getFrom(n.shift_id))+"\n              ")])]),t._v(" "),e("td",{staticStyle:{"max-width":"150px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.getTo(n.shift_id)))])])])}))],2),t._v(" "),e(l.a,{staticClass:"mr-1"},[e(j.a),t._v(" "),e(r.a,{staticClass:"primary",attrs:{small:""},on:{click:t.update_schedule}},[t._v("Update")])],1)],1)],1)],1),t._v(" "),e(m.a,{attrs:{persistent:"","max-width":"35%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(o.a,[e(l.c,{staticClass:"primary white--text background",attrs:{dense:""}},[t._v("\n        "+t._s(t.formTitle)+" Schedule\n        "),e(j.a),t._v(" "),e(_.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(e){t.dialog=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(l.b,[e(h.a,[e(l.c,[e(S.a,[e(d.a,{attrs:{md:"6"}},[e(O.a,{class:t.errors&&t.errors.name?"mb-0":"mb-2",attrs:{"hide-details":!0,placeholder:"Name",outlined:"",dense:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),t.errors&&t.errors.name?e("small",{staticClass:"error--text ma-0 pa-0",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.errors.name[0]))]):t._e()],1)],1),t._v(" "),e("table",{staticStyle:{width:"100%"}},[e("tr",{staticStyle:{"font-size":"15px"}},[e("td",{staticStyle:{width:"130px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("Day")])])]),t._v(" "),e("td",{staticStyle:{"max-width":"150px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("Shifts")])])]),t._v(" "),e("td",{staticStyle:{"text-align":"center",width:"120px"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("From")])])]),t._v(" "),e("td",{staticStyle:{"text-align":"center",width:"120px"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("To")])])])]),t._v(" "),t._l(t.days,(function(n,r){return e("tr",{key:r,staticStyle:{"text-align":"center","font-size":"15px"}},[e("td",{staticStyle:{width:"80px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v(t._s(n))])])]),t._v(" "),e("td",{staticStyle:{width:"400px","text-align":"left",padding:"8px 0px 0px 0px"}},[e(w.a,{staticClass:"mx-5 py-0",attrs:{items:t.shifts,dense:"",outlined:"","item-text":"name","item-value":"id",placeholder:"Select","hide-details":!0},on:{change:function(e){return t.getTimeRange(t.shift[r])}},model:{value:t.shift[r],callback:function(e){t.$set(t.shift,r,e)},expression:"shift[index]"}}),t._v(" "),!t.shift[r]&&t.errors&&t.errors.shift_ids?e("small",{staticClass:"error--text text-left py-0 my-0",staticStyle:{"margin-left":"20px","font-size":"12px"}},[t._v("\n                    "+t._s(t.errors.shift_ids[0])+"\n                  ")]):t._e()],1),t._v(" "),e("td",{staticStyle:{"max-width":"150px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[t._v("\n                    "+t._s(t.getFrom(t.shift[r]))+"\n                  ")])]),t._v(" "),e("td",{staticStyle:{"max-width":"150px","text-align":"center"}},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.getTo(t.shift[r])))])])])}))],2)],1),t._v(" "),e(l.a,{staticClass:"mr-1"},[e(j.a),t._v(" "),e(r.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)],1),t._v(" "),t.preloader?e("Preloader"):e("div",[e("Back",{staticClass:"primary white--text"}),t._v(" "),t.can("shift_view")?e(o.a,{staticClass:"mt-2",attrs:{elevation:"0"}},[e(D.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(N.b,[e("span",[t._v(" Schedule List")])]),t._v(" "),e(T.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),o),[e(_.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:t.get_schedule}},[t._v("mdi mdi-reload")])],1)]}}],null,!1,764346567)},[t._v(" "),e("span",[t._v("Reload")])]),t._v(" "),e(j.a),t._v(" "),e(T.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),o),[e(_.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){t.dialog=!0}}},[t._v("mdi mdi-plus-circle")])],1)]}}],null,!1,2410431889)},[t._v(" "),e("span",[t._v("Add New Schedule")])])],1),t._v(" "),e(C.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e(r.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n        "+t._s(t.snackText)+"\n\n        ")]),t._v(" "),e(f.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.scheduleData,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.sno",fn:function(n){n.item;var r=n.index;return[e("b",[t._v(t._s(++r))])]}},{key:"item.name",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.name)+"\n        ")]}},{key:"item.description",fn:function(n){var r=n.item;return t._l(r.json,(function(n,s){return e(c.a,{key:s,staticClass:"primary ma-1",attrs:{small:""}},[t._v("\n            "+t._s(n.day)+" "+t._s(n.time)+" "+t._s(t.getShiftType(n.shift_id))+"\n          ")])}))}},{key:"item.options",fn:function(n){var o=n.item;return[e(k.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e("div",{staticClass:"text-center"},[e(r.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),o),[e(_.a,[t._v("mdi-dots-vertical")])],1)],1)]}}],null,!0)},[t._v(" "),e(v.a,{attrs:{width:"120",dense:""}},[e(x.a,{on:{click:function(e){return t.editItem(o)}}},[e(y.c,{staticStyle:{cursor:"pointer"}},[e(_.a,{attrs:{color:"secondary",small:""}},[t._v(" mdi-pencil ")]),t._v("\n                  Edit\n                ")],1)],1),t._v(" "),e(x.a,{on:{click:function(e){return t.deleteItem(o)}}},[e(y.c,{staticStyle:{cursor:"pointer"}},[e(_.a,{attrs:{color:"error",small:""}},[t._v(" mdi-delete ")]),t._v("\n                  Delete\n                ")],1)],1)],1)],1)]}}],null,!1,4202587807)})],1):t._e()],1)],1):e("NoAccess")}),[],!1,null,"a588a484",null);e.default=component.exports;installComponents(component,{Preloader:n(897).default,NoAccess:n(880).default})},855:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(96),o=n(0),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a},880:function(t,e,n){"use strict";n.r(e);var r=n(116),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},897:function(t,e,n){"use strict";n.r(e);var r=n(212),o=n(116),component=Object(o.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);e.default=component.exports},970:function(t,e,n){"use strict";n.r(e);var r={props:["color"],methods:{goBack:function(){window.history.back()}}},o=n(116),component=Object(o.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=component.exports}}]);