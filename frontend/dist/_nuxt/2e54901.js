(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1134:function(t,e,n){var content=n(1218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2a134baa",content,!0,{sourceMap:!1})},1217:function(t,e,n){"use strict";n(1134)},1218:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"table[data-v-28bdaf96]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-28bdaf96],th[data-v-28bdaf96]{border:1px solid #ddd;padding:8px;text-align:left}",""]),r.locals={},t.exports=r},1338:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(3),c=(n(99),n(6),n(88),{props:["id"],data:function(){var t;return t={parent_ids:[],snack:!1,snackColor:"",snackText:"",dialog:!1,current_page:1,color:"background",response:"",snackbar:!1,btnLoader:!1,max_employee:0,upload:{name:""}},Object(o.a)(t,"snackbar",!1),Object(o.a)(t,"ids",[]),Object(o.a)(t,"loading",!1),Object(o.a)(t,"response",""),Object(o.a)(t,"errors",[]),Object(o.a)(t,"formAction","Create"),Object(o.a)(t,"tanents",[]),t},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!1,e.next=3,t.$axios.get("tanent-list",{params:{company_id:t.$auth.user.company_id}});case 3:return n=e.sent,r=n.data,t.tanents=r,e.next=8,t.$axios.get("get-associated-tanent-ids/".concat(t.id));case 8:o=e.sent,c=o.data,t.parent_ids=c;case 11:case"end":return e.stop()}}),e)})))()},methods:{getTanent:function(t){var e=this.tanents.find((function(e){return e.id===t}));return e||!1},submit:function(){var t=this;this.$axios.post("/assign-tanents/"+this.id,{parent_ids:this.parent_ids}).then((function(e){e.data;t.handleSuccessResponse("Maid has been assigned")})).catch((function(e){var n=e.response;t.handleErrorResponse(n)}))},handleSuccessResponse:function(t){this.errors=[],this.dialog=!1,this.$emit("response",t)},handleErrorResponse:function(t){if(!t)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var e=t.status,data=t.data,n=t.statusText;e&&422==e?this.errors=data.errors:(this.snackbar=!0,this.response=n)}}}),d=(n(1217),n(116)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("table",[t._m(0),t._v(" "),t._l(t.parent_ids,(function(n,r){return e("tr",{key:r},[e("td",[t._v(t._s(t.getTanent(n).full_name))]),t._v(" "),e("td",[t._v(t._s(t.getTanent(n).phone_number))]),t._v(" "),e("td",[t._v(t._s(t.getTanent(n).email))]),t._v(" "),e("td",[t._v(t._s(t.getTanent(n).room.room_number))]),t._v(" "),e("td",[t._v(t._s(t.getTanent(n).floor.floor_number))])])}))],2)}),[function(){var t=this,e=t._self._c;return e("tr",[e("td",[t._v("Full Name")]),t._v(" "),e("td",[t._v("Phone Number")]),t._v(" "),e("td",[t._v("Email")]),t._v(" "),e("td",[t._v("Room Number")]),t._v(" "),e("td",[t._v("Floor Number")])])}],!1,null,"28bdaf96",null);e.default=component.exports}}]);