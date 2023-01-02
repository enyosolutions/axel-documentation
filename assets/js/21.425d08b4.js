(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{372:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"axel-schemas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axel-schemas"}},[t._v("#")]),t._v(" Axel schemas")]),t._v(" "),a("p",[t._v("===========")]),t._v(" "),a("h3",{attrs:{id:"property-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#property-definition"}},[t._v("#")]),t._v(" Property definition")]),t._v(" "),a("ul",[a("li")]),t._v(" "),a("h3",{attrs:{id:"column-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#column-definition"}},[t._v("#")]),t._v(" Column definition")]),t._v(" "),a("ul",[a("li")]),t._v(" "),a("h3",{attrs:{id:"field-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#field-definition"}},[t._v("#")]),t._v(" Field definition")]),t._v(" "),a("ul",[a("li")]),t._v(" "),a("h3",{attrs:{id:"relations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relations"}},[t._v("#")]),t._v(" Relations")]),t._v(" "),a("p",[t._v("Relations are the way you can link schemas between each other. They allow managing one to one, one to many, and many to many relationships between objects.")]),t._v(" "),a("h2",{attrs:{id:"defining-a-relation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-relation"}},[t._v("#")]),t._v(" Defining a relation")]),t._v(" "),a("p",[t._v("To define a relation you need to define property under schema field.\n.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("userId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'integer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The owner of the car'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  relationKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  relationLabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'firstName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  relationUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/user'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Where")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("relationKey")]),t._v(" is the primary key of the target model")]),t._v(" "),a("li",[a("code",[t._v("relationLabel")]),t._v(" is the field used to display the target label. Relation label can be either a field of the model, or templated string "),a("code",[t._v("\\{\\{ firstName }} \\{\\{ lastName.toUpperCase() }}")])]),t._v(" "),a("li",[a("code",[t._v("relationUrl")]),t._v(" is the api url base used to get the data")])]),t._v(" "),a("p",[t._v("To simplify this linking you can define the relation simply with the identity of the targeted model.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("userId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'integer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'The owner of the car'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  relation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("Doing so the frontend framework will get the details directly on the target model definition")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("relationKey")]),t._v(" => "),a("code",[t._v("targetModel.primaryKeyField || defaultPrimaryKeyField")])]),t._v(" "),a("li",[a("code",[t._v("relationLabel")]),t._v(" => "),a("code",[t._v("targetModel.displayField")])]),t._v(" "),a("li",[a("code",[t._v("relationUrl")]),t._v(" => "),a("code",[t._v("targetModel.apiUrl")])])]),t._v(" "),a("p",[t._v("The definition at the property level always take precedence.")]),t._v(" "),a("h2",{attrs:{id:"displaying-a-relation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#displaying-a-relation"}},[t._v("#")]),t._v(" displaying a relation")])])}),[],!1,null,null,null);e.default=n.exports}}]);