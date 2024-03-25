(window.webpackJsonp=window.webpackJsonp||[]).push([[268,90],{1754:function(e,t,n){"use strict";n.r(t);var r=n(894),o=n(114),c=n(133),l=n(87),d=n(516),m=n(876),h=n(350),f=n(147),v=n(515),y=n(873),x=n(349),_=n(214),O=n(1795),k=(n(33),n(266),n(23)),w=n(3);n(88),n(80),n(13),n(6),n(37),n(41),n(61),n(12),n(14),n(17),n(11),n(18);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(w.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D={props:{editedItem:Object,isExisted:Boolean,dialog:Boolean,title:String,message:String},data:function(){return{response:"",snackbar:!1,loading:!0,dialogVisible:!1,selectedDepartments:[],departments:[],departmentEmployees:[],treeviewOpen:[],search:"",treeType:"leaf"}},computed:{filteredTree:function(){var e=this;if(!this.search)return this.treeType="leaf",this.departmentEmployees;this.treeType="independent";var t=this.departmentEmployees.map((function(t){var n=t.children.filter((function(t){var n=t.id;return t.name.toLowerCase().includes(e.search.toLowerCase())||e.editedItem.employees.includes(n)}));return I(I({},t),{},{children:n})}));return this.treeviewOpen=t.map((function(e){return e.id})),t.filter((function(e){return e.children.length>0}))}},created:function(){this.editedItem.company_id=this.$auth.user.company_id;var e={params:{per_page:1e3,company_id:this.editedItem.company_id}};this.getDepartments(e),this.getDepartmentEmployees(e)},methods:{getDepartments:function(e){var t=this;this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data}))},getDepartmentEmployees:function(e){var t=this;this.$axios.get("department-employee",e).then(function(){var e=Object(k.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,e.next=3,data.data.map((function(e){return{id:e.id,name:e.name,children:e.employees}}));case 3:t.departmentEmployees=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},submit:function(){var e=this,t="assigned-department-employee";this.isExisted?this.$axios.put(t+"/"+this.editedItem.id,this.editedItem).then((function(t){var data=t.data;return e.handleData(data)})).catch((function(e){return console.log(e)})):this.$axios.post(t,this.editedItem).then((function(t){var data=t.data;return e.handleData(data)})).catch((function(e){return console.log(e)}))},handleData:function(data){data.status?(this.$emit("submitted"),this.snackbar=!0,this.response=data.message,this.errors=[],this.search="",this.close()):this.errors=data.errors},close:function(){this.dialog=!1,this.$emit("close")}}},E=D,P=n(116),component=Object(P.a)(E,(function(){var e=this,t=e._self._c;return t(v.a,{attrs:{justify:"center"}},[t(y.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.response)+"\n  ")]),e._v(" "),t(h.a,{attrs:{persistent:"","max-width":"700px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(c.a,[t(l.c,{staticClass:"popup_background",attrs:{dark:"",dense:""}},[t("span",{staticClass:"text-h5"},[e._v("Department Mapping")]),e._v(" "),t(x.a),e._v(" "),t(f.a,{attrs:{outlined:"",dark:""},on:{click:e.close}},[e._v("\n          mdi-close-circle-outline\n        ")])],1),e._v(" "),t(l.b,{staticClass:"py-2"},[t(m.a,[t(v.a,[t(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(_.a,{attrs:{outlined:"",dense:"",label:"Title","hide-details":!0},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(r.a,{attrs:{"hide-details":!0,items:e.departments,"item-text":"name","item-value":"id",dense:"",outlined:"",label:"Departments",multiple:""},model:{value:e.editedItem.departments,callback:function(t){e.$set(e.editedItem,"departments",t)},expression:"editedItem.departments"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(_.a,{attrs:{label:"Search Employees",dense:"",outlined:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),t(c.a,{staticStyle:{"min-height":"300px","max-height":"300px","overflow-y":"auto"},attrs:{outlined:""}},[t(l.b,[e.loading?t("ComonPreloader",{attrs:{icon:"face-scan"}}):e.loading||e.departmentEmployees.length?t(O.a,{attrs:{dense:"",hoverable:"","selection-type":e.treeType,open:e.treeviewOpen,search:e.search,"selected-color":"background",selectable:"",items:e.filteredTree},model:{value:e.editedItem.employees,callback:function(t){e.$set(e.editedItem,"employees",t)},expression:"editedItem.employees"}}):t("div",[e._v("\n                    No record found\n                  ")])],1)],1)],1)],1)],1)],1),e._v(" "),t(l.a,[t(x.a),e._v(" "),t(o.a,{attrs:{small:"",color:"background",dark:""},on:{click:e.submit}},[e._v("\n          "+e._s(1==e.isExisted?"Update":"Save")+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ComonPreloader:n(895).default})},895:function(e,t,n){"use strict";n.r(t);var r=n(212),o={props:["icon"]},c=n(116),component=Object(c.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[e(r.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);