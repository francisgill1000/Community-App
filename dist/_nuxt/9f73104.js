(window.webpackJsonp=window.webpackJsonp||[]).push([[234,233,235],{1012:function(e,t,n){"use strict";n.r(t);var l=n(875),r=n(1557),d=n(862),o=n(214),c=(n(13),n(6),n(41),n(61),{props:["headers","fields"],data:function(){return{customHeaders:[]}},methods:{handleFilter:function(e){this.$emit("filtered",e)},handleDatesFilter:function(e){e.date_menu=!1,this.$emit("filtered",e)}},created:function(){var e=this;this.customHeaders=this.headers.filter((function(header){return e.fields.includes(header.key)}))}}),h=n(116),component=Object(h.a)(c,(function(){var e=this,t=e._self._c;return t("tr",e._l(e.customHeaders,(function(header,n){return t("td",{key:n},[1==header.filterable?t(l.a,[1==header.filterable&&"text"==header.type?t("SnippetsFiltersTextField",{attrs:{header:header,column:header.value},on:{"entered-value":e.handleFilter}}):e._e(),e._v(" "),1==header.filterable&&"dropdown"==header.type?t("SnippetsFiltersDropDown",{attrs:{header:header,column:header.value,items:header.items},on:{"entered-value":e.handleFilter}}):e._e(),e._v(" "),t("div",{staticClass:"mt-3"},[1==header.filterable&&"date_range"==header.type?t(d.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,r=n.attrs;return[t(o.a,e._g(e._b({attrs:{"append-icon":"mdi-calendar",outlined:"",dense:"",readonly:""},model:{value:header.search_value,callback:function(t){e.$set(header,"search_value",t)},expression:"header.search_value"}},"v-text-field",r,!1),l))]}}],null,!0),model:{value:header.date_menu,callback:function(t){e.$set(header,"date_menu",t)},expression:"header.date_menu"}},[e._v(" "),t(r.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){return e.handleDatesFilter(header)}},model:{value:header.search_value,callback:function(t){e.$set(header,"search_value",t)},expression:"header.search_value"}})],1):e._e()],1)],1):e._e()],1)})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnippetsFiltersTextField:n(989).default,SnippetsFiltersDropDown:n(990).default})},989:function(e,t,n){"use strict";n.r(t);var l=n(214),r={props:["header","column"],date:function(){return{text:""}},methods:{handleChange:function(){this.$emit("entered-value",this.header)}}},d=n(116),component=Object(d.a)(r,(function(){var e=this,t=e._self._c;return e.header.key==e.column||"text"==e.header.type?t(l.a,{attrs:{placeholder:e.header.text,clearable:"","hide-details":!0,outlined:"",dense:"",autocomplete:"off"},on:{input:e.handleChange},model:{value:e.header.search_value,callback:function(t){e.$set(e.header,"search_value",t)},expression:"header.search_value"}}):e._e()}),[],!1,null,null,null);t.default=component.exports},990:function(e,t,n){"use strict";n.r(t);var l=n(892),r=n(81),d=(n(35),{props:["header","column","items","disabled"],methods:{handleChange:function(){this.$emit("entered-value",this.header)}}}),o=n(116),component=Object(o.a)(d,(function(){var e=this,t=e._self._c;return t("div",[e.header.key==e.column||"dropdown"==e.header.type?t(l.a,{attrs:{placeholder:e.header.text,"hide-details":!0,outlined:"",dense:"","item-text":"name","item-value":"id",items:[{id:"",name:"All"}].concat(Object(r.a)(e.items)),solo:"",flat:"",disabled:e.disabled},on:{change:e.handleChange},model:{value:e.header.search_value,callback:function(t){e.$set(e.header,"search_value",t)},expression:"header.search_value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);