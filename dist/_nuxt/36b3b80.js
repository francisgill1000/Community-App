(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1719:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(116),c=(n(120),n(70),n(6),n(9),n(92),n(363),{props:["data","headers"],methods:{json_to_csv:function(t){var header=this.headers.map((function(t){return t.text})).join(",")+"\n",e="";return t.forEach((function(t){e+=Object.values(t).join(",").trim()+"\n"})),header+e},export_csv:function(){if(0==this.data.length)return this.snackbar=!0,void(this.response="No record to download");var t=this.json_to_csv(this.data),e=document.createElement("a");e.setAttribute("href","data:text/csv;charset=utf-8, "+encodeURIComponent(t)),e.setAttribute("download","download.csv"),document.body.appendChild(e),e.click(),document.body.removeChild(e)}}}),d=n(60),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"primary darken-2",attrs:{small:""},on:{click:t.export_csv}},[e(r.a,{staticClass:"mr-1",attrs:{small:""}},[t._v("mdi-file")]),t._v("\n  CSV\n")],1)}),[],!1,null,null,null);e.default=component.exports}}]);