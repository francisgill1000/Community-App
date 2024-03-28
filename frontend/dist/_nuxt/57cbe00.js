(window.webpackJsonp=window.webpackJsonp||[]).push([[363,182,191,253],{1684:function(t,e,n){"use strict";n.r(e);var o=n(133),c=n(516),r=n(147),l=n(212),_=n(204),m=n(328),d=n(60),v=n(515),y=(n(37),n(12),n(14),n(13),n(6),n(17),n(11),n(18),n(31)),h=n(3),f=n(23);n(35),n(216),n(88);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={data:function(){return{loading:!0,company_payload:{name:"",logo:"",location:"",member_from:"",expiry:"",max_employee:"",max_devices:""},contact_payload:{contact_name:"",contact_no:"",contact_position:"",contact_whatsapp:""},login_payload:{user_name:"",email:"",password:"",password_confirmation:""},errors:[],data:[],devices:[]}},created:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.getDataFromApi(),t.getCompanyDetails(),t.getDevicesByCompanyId();case 3:case"end":return e.stop()}}),e)})))()},methods:{can:function(t){return this.$pagePermission.can(t,this)},getDataFromApi:function(){var t=this;this.$axios.get("company/".concat(this.$route.params.id,"/branches")).then((function(e){var data=e.data;t.data=data.data}))},getDevicesByCompanyId:function(){var t=this;this.$axios.get("company/".concat(this.$route.params.id,"/devices")).then((function(e){var data=e.data;t.devices=data.data}))},getCompanyDetails:function(){var t=this;this.$axios.get("company/".concat(this.$route.params.id)).then((function(e){var data=e.data,n=data.record,o=n.contact,c=(n.user,n.member_from),r=n.expiry;t.contact_payload={contact_name:o.name,contact_no:o.number,contact_position:o.position,contact_whatsapp:o.whatsapp},t.login_payload={user_name:data.record.name,email:data.record.email},t.company_payload=C(C({},data.record),{},{member_from:t.formatted_date(c),expiry:t.formatted_date(r)}),t.loading=!1}))},formatted_date:function(t){var e=t.split("/"),n=Object(y.a)(e,3),o=n[0],c=n[1],r=n[2];return"".concat(o,"-").concat(c,"-").concat(r)},goDetails:function(t){this.$router.push("/branch/details/".concat(t))},attachment:function(t){this.company_payload.logo=t.target.files[0]||""},editItem:function(t){this.$router.push(t)},deleteItem:function(t){var e=this;confirm("Are you sure you want to delete this item?")&&this.$axios.delete("branch/"+t.id).then((function(n){var o=e.data.indexOf(t);e.data.splice(o,1)}))}}},O=n(116),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return t.can("company_details_access")?e("div",[t.loading?e("Preloader"):e("div",[e(v.a,{staticClass:"mt-10 mb-10"},[e(c.a,{attrs:{cols:"10"}},[e("h3",[t._v("Company")]),t._v(" "),e("div",[t._v("Dashboard / Company / Details")])])],1),t._v(" "),e(o.a,{attrs:{elevation:"2"}},[e(v.a,[e(c.a,{staticStyle:{"border-right":"1px dashed #808080"},attrs:{cols:"6"}},[e(_.a,[e(m.a,{attrs:{tile:"",size:"120"}},[e(l.a,{attrs:{src:t.company_payload.logo||"/no-image.PNG"}})],1),t._v(" "),e(d.a,[e("div",{staticClass:"text-overline mb-1"},[t._v("\n                Company Code : "+t._s(t.company_payload.company_code)+"\n              ")]),t._v(" "),e(d.c,{staticClass:"text-h5 mb-1"},[t._v("\n                "+t._s(t.company_payload.name)+"\n              ")]),t._v(" "),e(d.b,[t._v(t._s(t.login_payload.email))])],1)],1),t._v(" "),e(_.a,[e(d.a,[e(v.a,{staticClass:"mt-2"},[e(c.a,{attrs:{cols:"3"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                    Company Email\n                  ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n                  "+t._s(t.login_payload.email)+"\n                ")]),t._v(" "),e(c.a,{attrs:{cols:"3"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                    Member From\n                  ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n                  "+t._s(t.company_payload.show_member_from)+"\n                ")]),t._v(" "),e(c.a,{attrs:{cols:"3"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                    Expiry Date\n                  ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n                  "+t._s(t.company_payload.show_expiry)+"\n                ")]),t._v(" "),t.company_payload.max_branches>0?e(c.a,{attrs:{cols:"3"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                    Max Branches\n                  ")])],1):t._e(),t._v(" "),t.company_payload.max_branches>0?e(c.a,{attrs:{cols:"8"}},[t._v("\n                  "+t._s(t.company_payload.max_branches)+"\n                ")]):t._e(),t._v(" "),e(c.a,{attrs:{cols:"3"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                    Max Employees\n                  ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n                  "+t._s(t.company_payload.max_employee)+"\n                ")]),t._v(" "),e(c.a,{attrs:{cols:"3"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                    Max Devices\n                  ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n                  "+t._s(t.company_payload.max_devices)+"\n                ")])],1)],1)],1)],1),t._v(" "),e(c.a,{attrs:{cols:"6"}},[e(v.a,[e(c.a,{attrs:{cols:"4"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                Contact Name\n              ")])],1),t._v(" "),e(c.a,{attrs:{cols:"4"}},[t._v("\n              "+t._s(t.contact_payload.contact_name)+"\n            ")]),t._v(" "),e(c.a,{staticClass:"text-right",staticStyle:{margin:"-8px"},attrs:{cols:"4"}},[e(r.a,{staticClass:"grey",staticStyle:{"border-radius":"50%",padding:"5px"},attrs:{small:"",color:"secondary"},on:{click:function(e){return t.editItem("/companies/".concat(t.$auth.user.company.id))}}},[t._v("mdi-pencil")])],1),t._v(" "),e(c.a,{attrs:{cols:"4"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                Contact Number\n              ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n              "+t._s(t.contact_payload.contact_no)+"\n            ")]),t._v(" "),e(c.a,{attrs:{cols:"4"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                Contact Position\n              ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n              "+t._s(t.contact_payload.contact_position)+"\n            ")]),t._v(" "),e(c.a,{attrs:{cols:"4"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                Contact Whatsapp\n              ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n              "+t._s(t.contact_payload.contact_whatsapp)+"\n            ")]),t._v(" "),e(c.a,{attrs:{cols:"4"}},[e(d.c,{staticClass:"text-h7 mb-1"},[t._v("\n                Company Created At\n              ")])],1),t._v(" "),e(c.a,{attrs:{cols:"8"}},[t._v("\n              "+t._s(t.company_payload.created_at)+"\n            ")])],1)],1)],1)],1),t._v(" "),t._e()],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Preloader:n(896).default,NoAccess:n(881).default})},881:function(t,e,n){"use strict";n.r(e);var o=n(116),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},896:function(t,e,n){"use strict";n.r(e);var o=n(212),c=n(116),component=Object(c.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(o.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);