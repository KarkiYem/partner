(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{449:function(t,e,r){"use strict";e.a=[{img:"img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"img/theme/react.jpg",title:"React Material Dashboard",budget:"$4400 USD",status:"on schedule",statusType:"info",completion:90},{img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100}]},455:function(t,e,r){"use strict";e.a=[{id:1,name:"John Michael",image:"img/theme/team-1.jpg",createdAt:"10/09/2018",product:"Argon Dashboard PRO",active:!0},{id:2,name:"Alexandra Smith",image:"img/theme/team-2.jpg",createdAt:"08/09/2018",product:"Argon Design System",active:!1},{id:3,name:"Samantha Ivy",image:"img/theme/team-3.jpg",createdAt:"30/08/2018",product:"Black Dashboard",active:!1},{id:4,name:"John Michael",image:"img/theme/team-1.jpg",createdAt:"10/09/2018",product:"Argon Dashboard PRO",active:!0},{id:5,name:"Alexandra Smith",image:"img/theme/team-2.jpg",createdAt:"30/09/2018",product:"Vue Argon Dashboard",active:!0}]},619:function(t,e,r){"use strict";var l,o=r(9),n=(r(431),r(86),r(432)),c=r.n(n),d=(r(433),r(434)),m=r.n(d),v=(r(435),r(436)),h=r.n(v),_=(r(419),r(420)),f=r.n(_),w=(r(421),r(422)),C=r.n(w),j=(r(10),r(449)),y={name:"light-table",components:(l={},Object(o.a)(l,C.a.name,C.a),Object(o.a)(l,f.a.name,f.a),Object(o.a)(l,h.a.name,h.a),Object(o.a)(l,m.a.name,m.a),Object(o.a)(l,c.a.name,c.a),l),data:function(){return{projects:j.a,currentPage:1}}},x=r(7),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("el-table",{staticClass:"table-responsive table-flush",attrs:{"header-row-class-name":"thead-light",data:t.projects}},[e("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("div",{staticClass:"media align-items-center"},[e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:l.img}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(l.title))])])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("badge",{staticClass:"badge-dot mr-4",attrs:{type:""}},[e("i",{class:"bg-".concat(l.statusType)}),t._v(" "),e("span",{staticClass:"status"},[t._v(t._s(l.status))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[e("div",{staticClass:"avatar-group"},[e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-1.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-2.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-3.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-4.jpg"}})])])]),t._v(" "),e("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"completion mr-2"},[t._v(t._s(l.completion)+"%")]),t._v(" "),e("div",[e("base-progress",{attrs:{type:l.statusType,value:l.completion}})],1)])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(r){r.row;return[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[e("span",{staticClass:"btn btn-sm btn-icon-only text-light"},[e("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown"},slot:"dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1),t._v(" "),e("div",{staticClass:"card-footer py-4 d-flex justify-content-end"},[e("base-pagination",{attrs:{total:50},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"border-0 card-header"},[t("h3",{staticClass:"mb-0"},[this._v("Light table")])])}],!1,null,null,null);e.a=component.exports},620:function(t,e,r){"use strict";var l,o=r(9),n=(r(431),r(86),r(432)),c=r.n(n),d=(r(433),r(434)),m=r.n(d),v=(r(435),r(436)),h=r.n(v),_=(r(419),r(420)),f=r.n(_),w=(r(421),r(422)),C=r.n(w),j=(r(10),r(449)),y={name:"light-table",components:(l={},Object(o.a)(l,C.a.name,C.a),Object(o.a)(l,f.a.name,f.a),Object(o.a)(l,h.a.name,h.a),Object(o.a)(l,m.a.name,m.a),Object(o.a)(l,c.a.name,c.a),l),data:function(){return{projects:j.a,currentPage:1}}},x=r(7),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card bg-transparent"},[t._m(0),t._v(" "),e("el-table",{staticClass:"table-responsive",attrs:{"header-row-class-name":"thead-light",data:t.projects}},[e("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("div",{staticClass:"media align-items-center"},[e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:l.img}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(l.title))])])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("badge",{staticClass:"badge-dot mr-4",attrs:{type:""}},[e("i",{class:"bg-".concat(l.statusType)}),t._v(" "),e("span",{staticClass:"status"},[t._v(t._s(l.status))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[e("div",{staticClass:"avatar-group"},[e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-1.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-2.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-3.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-4.jpg"}})])])]),t._v(" "),e("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"completion mr-2"},[t._v(t._s(l.completion)+"%")]),t._v(" "),e("div",[e("base-progress",{attrs:{type:l.statusType,value:l.completion}})],1)])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(r){r.row;return[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[e("span",{staticClass:"btn btn-sm btn-icon-only text-light"},[e("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown"},slot:"dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"border-0 card-header bg-transparent"},[t("h3",{staticClass:"mb-0"},[this._v("Translucent table")])])}],!1,null,null,null);e.a=component.exports},621:function(t,e,r){"use strict";var l,o=r(9),n=(r(431),r(86),r(432)),c=r.n(n),d=(r(433),r(434)),m=r.n(d),v=(r(435),r(436)),h=r.n(v),_=(r(419),r(420)),f=r.n(_),w=(r(421),r(422)),C=r.n(w),j=(r(10),r(449)),y={name:"light-table",components:(l={},Object(o.a)(l,C.a.name,C.a),Object(o.a)(l,f.a.name,f.a),Object(o.a)(l,h.a.name,h.a),Object(o.a)(l,m.a.name,m.a),Object(o.a)(l,c.a.name,c.a),l),data:function(){return{projects:j.a,currentPage:1}}},x=r(7),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card bg-default shadow"},[t._m(0),t._v(" "),e("el-table",{staticClass:"table-responsive table-dark",attrs:{"header-row-class-name":"thead-dark",data:t.projects}},[e("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("div",{staticClass:"media align-items-center"},[e("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[e("img",{attrs:{alt:"Image placeholder",src:l.img}})]),t._v(" "),e("div",{staticClass:"media-body"},[e("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(l.title))])])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("badge",{staticClass:"badge-dot mr-4"},[e("i",{class:"bg-".concat(l.statusType)}),t._v(" "),e("span",{staticClass:"status"},[t._v(t._s(l.status))])])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[e("div",{staticClass:"avatar-group"},[e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-1.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-2.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-3.jpg"}})]),t._v(" "),e("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[e("img",{attrs:{alt:"Image placeholder",src:"img/theme/team-4.jpg"}})])])]),t._v(" "),e("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.row;return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"completion mr-2"},[t._v(t._s(l.completion)+"%")]),t._v(" "),e("div",[e("base-progress",{attrs:{type:l.statusType,value:l.completion}})],1)])]}}])}),t._v(" "),e("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(r){r.row;return[e("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[e("span",{staticClass:"btn btn-sm btn-icon-only text-light"},[e("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),e("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown"},slot:"dropdown"},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header bg-transparent border-0"},[t("h3",{staticClass:"mb-0 text-white"},[this._v("Dark table")])])}],!1,null,null,null);e.a=component.exports},759:function(t,e,r){"use strict";r.r(e);var l=r(116),o=r(449),n=r(455),c=r(619),d=r(620),m=r(621),v={layout:"DashboardLayout",components:{LightTable:c.a,TranslucentTable:d.a,DarkTable:m.a,RouteBreadCrumb:l.a},data:function(){return{projects:o.a,users:n.a}}},h=r(7),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("Sortable tables")]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-bread-crumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 col-5 text-right"},[e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),e("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("light-table")],1)]),t._v(" "),e("translucent-table"),t._v(" "),e("dark-table")],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);