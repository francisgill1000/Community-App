(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1009:function(e,t,n){"use strict";n.r(t);var l=n(221),r={props:["header","column"],date:function(){return{text:""}},methods:{handleChange:function(){this.$emit("entered-value",this.header)}}},d=n(60),component=Object(d.a)(r,(function(){var e=this,t=e._self._c;return e.header.key==e.column||"text"==e.header.type?t(l.a,{attrs:{placeholder:e.header.text,clearable:"","hide-details":!0,outlined:"",dense:"",autocomplete:"off"},on:{input:e.handleChange},model:{value:e.header.search_value,callback:function(t){e.$set(e.header,"search_value",t)},expression:"header.search_value"}}):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);