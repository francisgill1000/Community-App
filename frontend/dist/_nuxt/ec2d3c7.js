(window.webpackJsonp=window.webpackJsonp||[]).push([[209,35,199],{1048:function(e,t,n){"use strict";n.r(t);var r=n(329),o=n(114),l=n(23),c=(n(6),n(11),n(88),{auth:!1,layout:"login",data:function(){return{isClicked:!1,isCamera:!1,videoStream:null}},mounted:function(){this.setupCamera()},methods:{setupCamera:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,video;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:n=t.sent,(video=e.$refs.video).srcObject=n,e.videoStream=n,video.play(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error accessing the camera: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},takeSnapshot:function(){this.isClicked=!0,this.isCamera=!this.isCamera;var video=this.$refs.video,canvas=this.$refs.canvas,e=canvas.getContext("2d");canvas.width=video.videoWidth,canvas.height=video.videoHeight,e.drawImage(video,0,0,canvas.width,canvas.height),this.$emit("imageSrc",canvas.toDataURL("image/png")),this.isCamera?video.play():this.isCamera||video.pause()},beforeDestroy:function(){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()}))}}}),d=n(116),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t(r.a,{staticStyle:{border:"1px solid purple"},attrs:{size:"300"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:!e.isClicked,expression:"!isClicked"}],ref:"img",attrs:{src:"/no-profile-image.jpg",alt:""}}),e._v(" "),t("video",{directives:[{name:"show",rawName:"v-show",value:e.isClicked,expression:"isClicked"}],ref:"video",attrs:{width:"100%",autoplay:"",playsinline:""}}),e._v(" "),t("canvas",{ref:"canvas",staticStyle:{display:"none"}})]),e._v(" "),t("div",{staticClass:"mb-1"},[t(o.a,{staticClass:"primary mt-1",on:{click:e.takeSnapshot}},[e._v(e._s(e.isCamera?"Take Picture":"Open Camera"))])],1)],1)}),[],!1,null,null,null);t.default=component.exports},1207:function(e,t,n){"use strict";n.r(t);var r=n(329),o=n(114),l=n(23),c=(n(6),n(11),n(88),{auth:!1,layout:"login",data:function(){return{isClicked:!1,isCamera:!1,videoStream:null}},mounted:function(){this.setupCamera()},methods:{setupCamera:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,video;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:n=t.sent,(video=e.$refs.video).srcObject=n,e.videoStream=n,video.play(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error accessing the camera: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},takeSnapshot:function(){this.isClicked=!0,this.isCamera=!this.isCamera;var video=this.$refs.video,canvas=this.$refs.canvas,e=canvas.getContext("2d");canvas.width=video.videoWidth,canvas.height=video.videoHeight,e.drawImage(video,0,0,canvas.width,canvas.height),this.$emit("imageSrc",canvas.toDataURL("image/png")),this.isCamera?video.play():this.isCamera||video.pause()},beforeDestroy:function(){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()}))}}}),d=n(116),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t(r.a,{staticStyle:{border:"1px solid #6946dd"},attrs:{size:"175"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:!e.isClicked,expression:"!isClicked"}],ref:"img",attrs:{src:"/no-profile-image.jpg",alt:""}}),e._v(" "),t("video",{directives:[{name:"show",rawName:"v-show",value:e.isClicked,expression:"isClicked"}],ref:"video",attrs:{width:"100%",autoplay:"",playsinline:""}}),e._v(" "),t("canvas",{ref:"canvas",staticStyle:{display:"none"}})]),e._v(" "),t("div",{staticClass:"mb-1"},[t(o.a,{staticClass:"primary mt-1",attrs:{small:"",outlined:"",dark:""},on:{click:e.takeSnapshot}},[e._v(e._s(e.isCamera?"Take Picture":"Open Camera"))])],1)],1)}),[],!1,null,null,null);t.default=component.exports},1734:function(e,t,n){"use strict";n.r(t);var r=n(893),o=n(114),l=n(133),c=n(87),d=n(518),m=n(1549),h=n(350),f=n(1019),v=n(147),_=n(212),y=n(862),x=n(517),C=n(892),I=n(872),S=n(349),w=n(214),k=(n(37),n(23)),D=(n(88),n(33),n(58),n(6),n(909)),$=n.n(D),j=n(1048),O={components:{VueCropper:$.a,Camera:j.default},data:function(){return{Model:"Employee",titleItems:["Mr","Mrs","Miss","Ms","Dr"],departments:[],joiningDateMenuOpen:!1,previewImage:null,loading:!1,openDialog:!1,upload:{name:""},dialogCropping:!1,selectedFile:"",errors:[],imageData:null,employee:{title:"Mr",email:"",display_name:"test",employee_id:Math.floor(9e3*Math.random())+1e3,system_user_id:Math.floor(9e3*Math.random())+1e3,department_id:2,joining_date:"2023-08-11",first_name:"fsdsfdf",last_name:"dfsdfds",company_id:"1"},blob:!1,response:{status:!1,message:""},branchesList:[]}},created:function(){this.previewImage=null,this.getDepartments(),this.getbranchesList()},methods:{getbranchesList:function(){var e=this;this.payloadOptions={params:{company_id:this.$auth.user.company_id}},this.$axios.get("branches_list",this.payloadOptions).then((function(t){var data=t.data;e.branchesList=data,e.$auth.user.branch_id?e.branch_id=e.$auth.user.branch_id:e.branch_id=""}))},handleImage:function(){},saveCroppedImageStep2:function(){this.cropedImage=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.image_name=this.cropedImage,this.previewImage=this.cropedImage,this.dialogCropping=!1},closeCropperPopup:function(){this.$refs.attachment_input.value=null,this.dialogCropping=!1},closeDialog:function(){this.$emit("closeDialog",!1)},getDepartments:function(){var e=this,t={params:{per_page:1e3,company_id:this.$auth.user.company_id}};this.$axios.get("departments",t).then((function(t){var data=t.data;e.departments=data.data}))},onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var t=this,n=this.$refs.attachment_input.files[0];if(n)if(this.upload.name=n.name||"",n.size>1048576)this.errors.profile_picture=["File too big (> 1MB). Upload less than 1MB"];else{var r=new FileReader;r.onload=function(e){t.selectedFile=e.target.result,t.$refs.cropper.replace(t.selectedFile)},r.readAsDataURL(n),console.log(r),this.$emit("input",n),this.dialogCropping=!0}},store_data:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("title",e.employee.title),n.append("email",e.employee.email),n.append("display_name",e.employee.display_name),n.append("employee_id",e.employee.employee_id),n.append("system_user_id",e.employee.system_user_id),n.append("department_id",e.employee.department_id),n.append("joining_date",e.employee.joining_date),n.append("first_name",e.employee.first_name),n.append("last_name",e.employee.last_name),n.append("company_id",e.employee.company_id),n.append("department_id",e.employee.department_id),r=new Promise((function(t){e.$refs.cropper.getCroppedCanvas().toBlob((function(e){t(e)}))})),t.t0=n,t.next=16,r;case 16:t.t1=t.sent,t.t0.append.call(t.t0,"profile_picture",t.t1,"cropped_image.jpg"),e.$axios.post("/employee-store",n).then((function(t){var data=t.data;data.status?(e.errors=[],e.$emit("handleResult","Employee has been created")):e.errors=data.errors})).catch((function(e){return console.log(e)}));case 19:case"end":return t.stop()}}),t)})))()}}},M=n(116),component=Object(M.a)(O,(function(){var e=this,t=e._self._c;return t("div",[t(I.a,{attrs:{small:"",top:"top",color:"background"},model:{value:e.response.status,callback:function(t){e.$set(e.response,"status",t)},expression:"response.status"}},[e._v("\n    "+e._s(e.response.message)+"\n  ")]),e._v(" "),t(h.a,{attrs:{persistent:"",width:"500"},model:{value:e.dialogCropping,callback:function(t){e.dialogCropping=t},expression:"dialogCropping"}},[t(l.a,{staticStyle:{"padding-top":"20px"}},[t(c.b,[t("VueCropper",{directives:[{name:"show",rawName:"v-show",value:e.selectedFile,expression:"selectedFile"}],ref:"cropper",attrs:{src:e.selectedFile,alt:"Source Image",aspectRatio:1,autoCropArea:.9,viewMode:3}})],1),e._v(" "),t(c.a,[t("div",{staticClass:"col-sm-12 col-md-6 col-12 pull-left",attrs:{col:"6",md:"6"}},[t(o.a,{staticClass:"danger btn btn-danger text-left",staticStyle:{float:"left"},attrs:{dark:"",text:""},on:{click:function(t){return e.closeCropperPopup()}}},[e._v("Cancel")])],1),e._v(" "),t("div",{staticClass:"col-sm-12 col-md-6 col-12 text-right",attrs:{col:"6",md:"6"}},[t(o.a,{staticClass:"primary btn btn-danger text-right",on:{click:function(t){e.saveCroppedImageStep2(),e.dialog=!1}}},[e._v("Crop")])],1)])],1)],1),e._v(" "),t(l.a,[t(c.c,{staticClass:"primary white--text background",attrs:{dark:""}},[e._v("\n      Create "+e._s(e.Model)+"\n      "),t(S.a),e._v(" "),t(v.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(t){e.employeeDialog=!1}}},[e._v("\n        mdi mdi-close-circle\n      ")])],1),e._v(" "),t(c.b,[t(x.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t(x.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Title "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(C.a,{attrs:{items:e.titleItems,"hide-details":!e.errors.title,error:e.errors.title,"error-messages":e.errors&&e.errors.title?e.errors.title[0]:"",dense:"",outlined:""},model:{value:e.employee.title,callback:function(t){e.$set(e.employee,"title",t)},expression:"employee.title"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Joining Date "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t("div",[t(y.a,{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(w.a,e._g(e._b({attrs:{"hide-details":!e.errors.joining_date,"error-messages":e.errors&&e.errors.joining_date?e.errors.joining_date[0]:"","persistent-hint":"","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.employee.joining_date,callback:function(t){e.$set(e.employee,"joining_date",t)},expression:"employee.joining_date"}},"v-text-field",o,!1),r))]}}]),model:{value:e.joiningDateMenuOpen,callback:function(t){e.joiningDateMenuOpen=t},expression:"joiningDateMenuOpen"}},[e._v(" "),t(m.a,{staticStyle:{"min-height":"320px"},attrs:{"no-title":""},on:{input:function(t){e.joiningDateMenuOpen=!1}},model:{value:e.employee.joining_date,callback:function(t){e.$set(e.employee,"joining_date",t)},expression:"employee.joining_date"}})],1)],1)]),e._v(" "),t(d.a,{attrs:{md:"12",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Display Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(w.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.display_name,type:"text",error:e.errors.display_name,"error-messages":e.errors&&e.errors.display_name?e.errors.display_name[0]:""},model:{value:e.employee.display_name,callback:function(t){e.$set(e.employee,"display_name",t)},expression:"employee.display_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("First Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(w.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.first_name,type:"text",error:e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.employee.first_name,callback:function(t){e.$set(e.employee,"first_name",t)},expression:"employee.first_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Last Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(w.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.last_name,type:"text",error:e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.employee.last_name,callback:function(t){e.$set(e.employee,"last_name",t)},expression:"employee.last_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"6",sm:"6",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Employee ID "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(w.a,{attrs:{dense:"",outlined:"",type:"text","hide-details":!e.errors.employee_id,error:e.errors.employee_id,"error-messages":e.errors&&e.errors.employee_id?e.errors.employee_id[0]:""},model:{value:e.employee.employee_id,callback:function(t){e.$set(e.employee,"employee_id",t)},expression:"employee.employee_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"6",sm:"6",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Employee Device Id"),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(w.a,{attrs:{dense:"",outlined:"",type:"text","hide-details":!e.errors.system_user_id,error:e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.employee.system_user_id,callback:function(t){e.$set(e.employee,"system_user_id",t)},expression:"employee.system_user_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Branch ")]),e._v(" "),t(C.a,{attrs:{label:"Branch ",items:e.branchesList,dense:"",placeholder:"Branch",outlined:"","item-value":"id","item-text":"branch_name",error:e.errors.branch_id,"error-messages":e.errors&&e.errors.branch_id?e.errors.branch_id[0]:""},model:{value:e.employee.branch_id,callback:function(t){e.$set(e.employee,"branch_id",t)},expression:"employee.branch_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Department ")]),e._v(" "),t(r.a,{attrs:{items:e.departments,"item-text":"name","item-value":"id",placeholder:"Select","hide-details":!e.errors.department_id,error:e.errors.department_id,"error-messages":e.errors&&e.errors.department_id?e.errors.department_id[0]:"",dense:"",outlined:""},model:{value:e.employee.department_id,callback:function(t){e.$set(e.employee,"department_id",t)},expression:"employee.department_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"12",cols:"12",sm:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Email (optional)")]),e._v(" "),t(w.a,{attrs:{dense:"",outlined:"",type:"text","hide-details":!e.errors.email,error:e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:""},model:{value:e.employee.email,callback:function(t){e.$set(e.employee,"email",t)},expression:"employee.email"}})],1)],1)],1),e._v(" "),t(d.a,{staticClass:"col-sm-6"},[t("div",{staticClass:"form-group pt-15",staticStyle:{margin:"0 auto",width:"200px"}},[t(_.a,{staticStyle:{width:"100%",height:"200px",border:"1px solid #5fafa3","border-radius":"50%",margin:"0 auto"},attrs:{src:e.previewImage||"/no-profile-image.jpg"}}),e._v(" "),t("br"),e._v(" "),t(o.a,{staticClass:"form-control primary",attrs:{small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n              Profile Image\n              "),t(v.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}}),e._v(" "),t("Camera",{on:{"captured-image":e.handleImage}}),e._v(" "),e.errors&&e.errors.profile_picture?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.profile_picture[0]))]):e._e()],1)])],1)],1),e._v(" "),t(f.a),e._v(" "),t(c.a,[t(S.a),e._v(" "),t(o.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.store_data}},[e._v("\n        Submit\n      ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Camera:n(1207).default})},883:function(e,t,n){var content=n(884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("1377ef10",content,!0,{sourceMap:!1})},884:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},893:function(e,t,n){"use strict";n(12),n(14),n(17),n(11),n(18);var r=n(3),o=(n(80),n(6),n(13),n(89),n(99),n(216),n(41),n(61),n(883),n(892)),l=n(214),c=n(65),d=n(0);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),h(h({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})}}]);