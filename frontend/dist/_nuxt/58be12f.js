(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{1376:function(t,e,o){"use strict";o.r(e);var n=o(133),r=o(516),c=o(515),d={props:["page"],data:function(){return{editDialog:!1,cardData:[]}},mounted:function(){this.getRecord()},methods:{getRecord:function(){var t=this,e={page:this.page,type:"card",company_id:this.$auth.user.company_id};this.$axios.get("theme",{params:e}).then((function(e){var data=e.data;t.cardData=data})).catch((function(t){return console.log(t)}))},goToThemeEditor:function(){this.$router.push("theme/".concat(this.page))}}},l=o(116),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,t._l(t.cardData,(function(o,c){return e(r.a,{key:c,attrs:{cols:o.cols,sm:o.sm,md:o.md}},[e(n.a,{staticStyle:{"border-radius":"15px !important"},attrs:{color:o.color,dark:"",dense:""}},[e("div",{staticClass:"text-center pt-5 pb-1"},[e("h5",[t._v(t._s(o.calculated_value))]),t._v(" "),e("p",[t._v(t._s(o.title))])])])],1)})),1)}),[],!1,null,null,null);e.default=component.exports}}]);