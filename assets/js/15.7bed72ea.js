(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{375:function(t,s,e){"use strict";e.r(s);var a=e(42),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cannot-connect-to-the-admin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cannot-connect-to-the-admin"}},[t._v("#")]),t._v(" Cannot connect to the admin")]),t._v(" "),e("h2",{attrs:{id:"symptom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#symptom"}},[t._v("#")]),t._v(" Symptom")]),t._v(" "),e("ul",[e("li",[t._v("error_forbidden_access_to_bo : Your account is not allowed to connect to the backoffice. Please contact an admin")])]),t._v(" "),e("h2",{attrs:{id:"why"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" why")]),t._v(" "),e("p",[t._v("This happens because while the user is authenticated, he doesn't have any of the roles that would allow him to access the admin panel.\nThis can be fixed :")]),t._v(" "),e("ul",[e("li",[t._v("by adding the missing rights to the user. The list of rights needed for admin access can be found in "),e("code",[t._v("src/config/plugins.js")]),t._v(" => "),e("code",[t._v("admin.config.rolesWithAccessToBackoffice")]),t._v(".")]),t._v(" "),e("li",[t._v("by changing the rights needed to access the BO. The list of rights can be set up in "),e("code",[t._v("src/config/plugins.js")]),t._v(" => "),e("code",[t._v("admin.config.rolesWithAccessToBackoffice")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" examples")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("  admin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enabled"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this config if available publicly in the admin. Do no add any secrets here..")]),t._v("\n      userModelName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'user'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The name to use to access the users model")]),t._v("\n      useNestedModels"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// show nested models in admin")]),t._v("\n      useApiEndpoints"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use api endpoints defined by the user in admin")]),t._v("\n      rolesWithAccessToBackoffice"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("'ADMINPANEL'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'ADMIN'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'SUPERADMIN'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      location"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '' "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// absolute path of the admin panel. Useful when you eject the backoffice.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);