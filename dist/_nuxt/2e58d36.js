(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1068:function(e,t,n){var content=n(1163);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("432d2bc8",content,!0,{sourceMap:!1})},1162:function(e,t,n){"use strict";n(1068)},1163:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},1211:function(e,t,n){"use strict";n.r(t);var o=n(147),r=(n(80),n(37),n(117),n(12),n(6),n(11),n(89),n(351),{props:{data:{type:Array}},methods:{export_submit:function(){if(0==this.data.length)return this.snackbar=!0,void(this.response="No record to download");var e=this.json_to_csv(this.data),element=document.createElement("a");element.setAttribute("href","data:text/csv;charset=utf-8, "+encodeURIComponent(e)),element.setAttribute("download","download.csv"),document.body.appendChild(element),element.click(),document.body.removeChild(element)},json_to_csv:function(e){var data=e.map((function(e){return{first_name:e.first_name,last_name:e.last_name,branch_name:e.department.branch&&e.department.branch.branch_name,email:e.user.email,phone_number:e.phone_number,whatsapp_number:e.whatsapp_number,phone_relative_number:e.phone_relative_number,whatsapp_relative_number:e.whatsapp_relative_number,employee_id:e.employee_id,joining_date:e.show_joining_date,department_code:e.department_id,designation_code:e.designation_id,department:e.department.name,sub_department:e.sub_department.name,designation:e.designation.name}})),header=Object.keys(data[0]).join(",")+"\n",t="";return data.forEach((function(e){t+=Object.values(e).join(",").trim()+"\n"})),header+t}}}),d=(n(1162),n(116)),component=Object(d.a)(r,(function(){var e=this;return(0,e._self._c)(o.a,{attrs:{title:"Download",right:"",dark:"",color:"black",size:"x-large"},on:{click:e.export_submit}},[e._v("mdi-arrow-down-bold-circle")])}),[],!1,null,"e26ad9c4",null);t.default=component.exports}}]);