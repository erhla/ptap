(this.webpackJsonpptap_site=this.webpackJsonpptap_site||[]).push([[0],{190:function(e,t,a){e.exports=a(344)},192:function(e,t,a){},344:function(e,t,a){"use strict";a.r(t);a(191),a(192);var n=a(0),r=a.n(n),l=a(36),o=a.n(l),c=a(345),u=a(44),i=a(34),s=a(78),m=c.a.Header,p=function(){return r.a.createElement(m,null,r.a.createElement(s.a,{theme:"dark",mode:"horizontal"},r.a.createElement(s.a.Item,{key:"1"},r.a.createElement("a",{href:"/"},"Property Tax Appeal Project: Automated Appeal System"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(352),f=a(61),E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Welcome to the Property Tax Appeal Project's automated appeal system."),r.a.createElement("h2",null,"The Tax Foreclosure Crisis"),r.a.createElement("p",null,"Information on the crisis."),r.a.createElement("h2",null,"Why should you appeal?"),r.a.createElement("p",null,"Answer the question."),r.a.createElement(d.b,null,r.a.createElement(f.a,null,r.a.createElement(u.b,{to:"/getstarted"},"Get Started with Your Appeal!"))))},b=a(29),y=a(40),h=a.n(y),g=a(55),v=a(64),w=a(100),k=a.n(w),I=a(165),j=function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.post("/api_v1/submit",t);case 3:return a=e.sent,console.log(a),e.abrupt("return",a.data.response);case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(g.a)(h.a.mark((function e(t,a,n,r){var l,o,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=Object(v.a)({target_pin:t,comparables:a,uuid:r},n),console.log(l),o=!0,e.next=6,k.a.post("/api_v1/submit2",l,{responseType:o?"blob":"json"});case 6:c=e.sent,o?Object(I.saveAs)(c.data,"".concat(n.name.split(" ").join("-").toLowerCase(),"-appeal.docx")):console.log(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,n,r){return e.apply(this,arguments)}}(),O=a(91),P=a(56),C=a(348),S=a(350),A=a(121),X={labelCol:{span:24},wrapperCol:{xs:{span:24},sm:{span:20},md:{span:18},lg:{span:14}}},F={wrapperCol:{xs:{span:24,offset:0},sm:{span:24,offset:0}}},_=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement(P.a,{xs:{span:24,offset:0},sm:{span:24,offset:0}},r.a.createElement("h1",null,"Homeowner Information"),r.a.createElement("p",null,"How should we contact you?"),r.a.createElement("br",null))),r.a.createElement(C.a.Item,{name:"name",label:"Full Name",rules:[{required:!0,message:"Please input your full name!",whitespace:!0}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your Email!",whitespace:!0,type:"email"}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!",whitespace:!0}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{name:"address",label:"Street Address",rules:[{required:!0,message:"Please input your street address!",whitespace:!0}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{name:"city",label:"City",rules:[{required:!0,message:"Please input your city!",whitespace:!0}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{name:"state",label:"State",rules:[{required:!0,message:"Please input your State!",whitespace:!0}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{name:"zip",label:"Zip Code",rules:[{required:!0,message:"Please input your zip code!",whitespace:!0}]},r.a.createElement(S.a,null)),r.a.createElement(C.a.Item,{name:"preferred",label:"Preferred Contact Method:",rules:[{required:!0,message:"Please mark your preferred method!",whitespace:!0}]},r.a.createElement(A.a.Group,null,r.a.createElement(A.a,{value:"Phone"},"Phone"),r.a.createElement(A.a,{value:"Email"},"Email"))))},Y=function(e){var t=C.a.useForm(),a=Object(b.a)(t,1)[0],n=e.submitForm,l=e.city,o=e.pin,c=e.eligibility,u=e.uuid;return r.a.createElement(C.a,Object.assign({form:a,name:"Housing Information",onFinish:function(e){var t;"detroit"===l?t="detroit_single_family":"chicago"===l&&(t="cook_county_single_family");var a=Object(v.a)(Object(v.a)({},e),{},{pin:o,appeal_type:t,eligibility:c,uuid:u});console.log("Received values of form: ",a),n(a)},labelAlign:"left",scrollToFirstError:!0,autoComplete:"off"},X),r.a.createElement(O.a,null,r.a.createElement(P.a,{xs:{span:24,offset:0},sm:{span:24,offset:0}},r.a.createElement("h1",null,"Your Information "),r.a.createElement("p",null,"In order to properly file your appeal, we need your contact information and for you to verify information on your property."),r.a.createElement("br",null))),r.a.createElement(C.a.Item,{noStyle:!0},r.a.createElement(_,null)),r.a.createElement(C.a.Item,F,r.a.createElement(d.b,null,r.a.createElement(f.a,{type:"danger",onClick:e.back},"Back"),r.a.createElement(f.a,{type:"primary",htmlType:"submit"},"Submit"))))},q=a(347),N=a(349),T=a(346),L=q.a.Column,z=/(\b[a-z](?!\s))/g,M=function(e){return e.replace("_"," ").replace(z,(function(e){return e.toUpperCase()}))},W=function(e){var t=e.comparables,a=e.headers,l=e.submitAppeal,o=e.removeComparable,c=e.back,u=t,i=Object(n.useState)(!1),s=Object(b.a)(i,2),m=s[0],p=s[1],E=a.map((function(e){return r.a.createElement(L,{title:M(e),dataIndex:e,key:e})})).sort(),y=u.map((function(e,t){return Object(v.a)({property:"Comparable ".concat(t)},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement(P.a,{xs:{span:24,offset:0},sm:{span:24,offset:0}},r.a.createElement("h1",null,"Select relevant comparables"),r.a.createElement("p",null,"Delete comparables you do not wish to include in your appeal."),r.a.createElement("br",null))),r.a.createElement(q.a,{dataSource:y,loading:m,scroll:{x:!0}},r.a.createElement(L,{title:"Property",dataIndex:"property",key:"property"}),E,r.a.createElement(L,{title:"Action",key:"action",render:function(e,t){return"Your Property"===t.property?null:r.a.createElement(f.a,{danger:!0,onClick:function(){p(!0),o(Number.parseInt(t.property.split(" ")[1],10)).then((function(){p(!1)}))}},"Delete")}})),r.a.createElement(d.b,null,r.a.createElement(f.a,{type:"danger",onClick:c},"Back"),r.a.createElement(f.a,{type:"primary",onClick:l},"Review Information")))},B=function(e){var t=e.targetProperty,a=e.propInfo,n=e.cols,l={width:"".concat(Math.round(100/n),"%"),textAlign:"center"},o=Object.entries(t).filter((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return""!==a&&""!==n}));return o.sort((function(e,t){var a=Object(b.a)(e,1)[0],n=Object(b.a)(t,1)[0],r=a.toLowerCase(),l=n.toLowerCase();return r>l?1:r<l?-1:0})),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement(P.a,{xs:{span:24,offset:0},sm:{span:24,offset:0}},r.a.createElement("h1",null,"Your Property"),r.a.createElement("p",null,"Below is the data that we have on file for your property."),r.a.createElement("p",null,a),r.a.createElement("br",null))),o.map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement(N.a.Grid,{hoverable:!1,style:l},r.a.createElement(O.a,null,r.a.createElement("b",null,M(a))),r.a.createElement(O.a,null,r.a.createElement("p",null,n)))})))},D=function(e){var t=e.comparables,a=e.headers,n=e.targetProperty,l=e.propInfo,o=e.submitAppeal,c=e.removeComparable,u=e.back;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{targetProperty:n,cols:5,propInfo:l}),r.a.createElement(T.a,null),r.a.createElement(W,{comparables:t,headers:a,removeComparable:c,submitAppeal:o,back:u}))},G=a(351),U=!1,H=function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,k.a.post("/api_v1/pin-lookup",t);case 4:return e.abrupt("return",e.sent.data.response);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),R=function(e){var t,a=C.a.useForm(),l=Object(b.a)(a,1)[0],o=Object(n.useState)([]),c=Object(b.a)(o,2),u=c[0],i=c[1],s=e.logPin,m=e.city,p=e.logUuid,d=e.logEligibility,E=function(e){U=!0;try{i(e.candidates),p(e.uuid)}catch(t){i([])}};"detroit"===m?t="detroit_single_family":"chicago"===m&&(t="cook_county_single_family");var y=[{title:"Address",dataIndex:"Address",key:"Address"},{title:"Pin",dataIndex:"PIN",key:"pin"},{title:"Action",key:"action",render:function(e,t){return r.a.createElement(f.a,{onClick:function(){!function(e){var t=!0;"Yes"!==l.getFieldValue("residence")?(alert("You may not be eligible to receive our services. Please contact our hotline at XXX-XXX-XXXX. Code: Residency"),t=!1):"Yes"!==l.getFieldValue("owner")?(alert("You may not be eligible to receive our services. Please contact our hotline at XXX-XXX-XXXX. Code: Ownership"),t=!1):!1===e.eligibility&&(alert("You may not be eligible to receive our services. Please contact our hotline at XXX-XXX-XXXX. Code: Assessed Value"),t=!1),s(e.PIN),d(t)}(t)}},"Select")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Eligibility Requirements"),r.a.createElement("p",null,"Let's begin by determining if you are eligibile for our services."),r.a.createElement(C.a,{form:l,name:"Pin Lookup",layout:"vertical",onFinish:function(){var e=Object(g.a)(h.a.mark((function e(a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,H(Object(v.a)({appeal_type:t},a));case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),labelAlign:"left",scrollToFirstError:!0,autoComplete:"off"},r.a.createElement(C.a.Item,{name:"residence",rules:[{required:!0,message:"Your response is required."}],label:"First, is this home your primary residence, meaning the place you live most of the year?"},r.a.createElement(A.a.Group,null,r.a.createElement(A.a,{value:"Yes"},"Yes"),r.a.createElement(A.a,{value:"No"},"No"))),r.a.createElement(C.a.Item,{name:"owner",rules:[{required:!0,message:"Your response is required."}],label:"Second, did you inherit or buy this home?"},r.a.createElement(A.a.Group,null,r.a.createElement(A.a,{value:"Yes"},"Yes"),r.a.createElement(A.a,{value:"No"},"No"))),r.a.createElement("p",{style:{width:"350px"}}),r.a.createElement(C.a.Item,{name:"owner_year",rules:[{required:!0,message:"Your response is required."}],label:"Third, what year did you buy or inherit the home? (If you are not sure, it is okay to guess)"},r.a.createElement(G.a,{min:1925,max:2021})),r.a.createElement("p",{style:{width:"350px"}},"Finally, enter your street number and street name and select your property from the table."),r.a.createElement(S.a.Group,{compact:!0},r.a.createElement(C.a.Item,{style:{width:"100px"},name:"st_num",rules:[{required:!0,message:"Street name is required."}]},r.a.createElement(S.a,{type:"number",placeholder:"number"})),r.a.createElement(C.a.Item,{style:{width:"300px"},name:"st_name",rules:[{required:!0,message:"Street name is required."}]},r.a.createElement(S.a,{placeholder:"street"}))),r.a.createElement(f.a,{type:"primary",htmlType:"submit"},"Lookup Pin")),0!==u.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(q.a,{columns:y,dataSource:u})):U?"Your property could not be found. Please try searching again.":null)},V=/(\b[a-z](?!\s))/g,J=[{title:"Name",dataIndex:"name",key:"name"},{title:"Mailing Address",dataIndex:"address",key:"address"},{title:"City",dataIndex:"city",key:"city"},{title:"Zip Code",dataIndex:"zip",key:"zip"},{title:"Preferred Contact Method",dataIndex:"preferred",key:"preferred"},{title:"Phone",dataIndex:"phone",key:"phone"},{title:"Email",dataIndex:"email",key:"email"}],Z=[{title:"Address",dataIndex:"Address",key:"Address"},{title:"Pin",dataIndex:"PIN",key:"PIN"},{title:"Assessed Value",dataIndex:"assessed_value",key:"assessed_value"},{title:"Sale Price (if available)",dataIndex:"Sale Price",key:"Sale Price"},{title:"Sale Date",dataIndex:"Sale Date",key:"Sale Date"}],$=function(e){var t=e.confirmInfo,a=e.cols,n=e.propInfo,l=e.userInfo,o=e.comparables,c=e.targetProperty,i=e.back,s={width:"".concat(Math.round(100/a),"%"),textAlign:"center"},m=Object.entries(c).filter((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return""!==a&&""!==n}));return m.sort((function(e,t){var a=Object(b.a)(e,1)[0],n=Object(b.a)(t,1)[0],r=a.toLowerCase(),l=n.toLowerCase();return r>l?1:r<l?-1:0})),r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,r.a.createElement(P.a,{xs:{span:24,offset:0},sm:{span:24,offset:0}},r.a.createElement("h1",null,"Your Appeal"),r.a.createElement("p",null,"Below is the data that we will use to construct your appeal."),r.a.createElement(d.b,null),r.a.createElement("h3",null,"Your Property Information"))),m.map((function(e){var t=Object(b.a)(e,2),a=t[0],n=t[1];return r.a.createElement(N.a.Grid,{hoverable:!1,style:s},r.a.createElement(O.a,null,r.a.createElement("b",null,function(e){return e.replace("_"," ").replace(V,(function(e){return e.toUpperCase()}))}(a))),r.a.createElement(O.a,null,r.a.createElement("p",null,n)))})),r.a.createElement(T.a,null),r.a.createElement("h3",null,"Your Information"),r.a.createElement(q.a,{dataSource:[l],columns:J}),r.a.createElement(T.a,null),r.a.createElement("h3",null,"Your Comparables"),r.a.createElement(q.a,{dataSource:o,columns:Z}),r.a.createElement("p",null,n),r.a.createElement(f.a,{type:"danger",onClick:i},"Back"),r.a.createElement(f.a,{type:"primary",onClick:t},r.a.createElement(u.b,{to:"/completedappeal"},"Finalize Appeal")))},K=function(e){var t=e.targetProperty,a=e.propInfo,n=e.userInfo,l=e.comparables,o=e.confirmInfo,c=e.back;return console.log(l),r.a.createElement(r.a.Fragment,null,r.a.createElement($,{targetProperty:t,cols:5,propInfo:a,userInfo:n,comparables:l,confirmInfo:o,back:c}))},Q=function(){var e=Object(g.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.filter((function(e,t){return t!==a})));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ee=function(e){var t=e.city,a=Object(n.useState)([]),l=Object(b.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)([]),i=Object(b.a)(u,2),s=i[0],m=i[1],p=Object(n.useState)(null),d=Object(b.a)(p,2),f=d[0],E=d[1],y=Object(n.useState)({}),v=Object(b.a)(y,2),w=v[0],k=v[1],I=Object(n.useState)(null),O=Object(b.a)(I,2),P=O[0],C=O[1],S=Object(n.useState)([]),A=Object(b.a)(S,2),X=A[0],F=A[1],_=Object(n.useState)([]),q=Object(b.a)(_,2),N=q[0],T=q[1],L=Object(n.useState)([]),z=Object(b.a)(L,2),M=z[0],W=z[1],B=Object(n.useState)(null),G=Object(b.a)(B,2),U=G[0],H=G[1],V=r.a.createElement(R,{logPin:function(e){C(e)},city:t,logUuid:function(e){T(e)},logEligibility:function(e){W(e)}});return null!=P&&(V=r.a.createElement(Y,{city:t,pin:P,uuid:N,eligibility:M,submitForm:function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:null!=(a=e.sent)&&(k(t),c(a.comparables),m(a.labeled_headers),E(a.target_pin[0]),F(a.prop_info));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),back:function(){k({}),C(null),c([]),m([]),E(null),F([])}})),null!=f&&(V=r.a.createElement(D,{comparables:o,headers:s,targetProperty:f,propInfo:X,submitAppeal:Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:H(!0);case 1:case"end":return e.stop()}}),e)}))),removeComparable:function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,Q(o,t);case 3:e.t1=e.sent,(0,e.t0)(e.t1),console.log("removed ".concat(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),back:function(){k({}),c([]),m([]),E(null)}})),null!=U&&(V=r.a.createElement(K,{targetProperty:f,propInfo:X,userInfo:w,comparables:o,confirmInfo:function(){x(f,o,w,N)},back:function(){H(null)}})),V},te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Who we Are"),r.a.createElement("p",null,"Who are we? What does this app do?"),r.a.createElement("p",null,"Click the \u201cAgree\u201d button below if you want to appeal your property tax assessment with support from a UMLS homeowner advocate."),r.a.createElement(d.b,null,r.a.createElement(f.a,null,r.a.createElement(u.b,{to:"/selectregion"},"Agree"))))},ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"We currently have automated appeal systems for Detroit, Michigan and Cook County, Illinois."),r.a.createElement("p",null,"Click one of the buttons to get started with your appeal."),r.a.createElement(d.b,null,r.a.createElement(f.a,null,r.a.createElement(u.b,{to:"/detroit"},"Detroit")),r.a.createElement(f.a,null,r.a.createElement(u.b,{to:"/cook"},"Cook County"))))},ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Your information has now been submitted"),r.a.createElement("p",null,"Information will download on your appeal."),r.a.createElement(d.b,null,r.a.createElement(f.a,null,r.a.createElement(u.b,{to:"/illegalforeclosures"},"See more information on our website"))))},re=c.a.Content,le=c.a.Footer,oe=function(){return r.a.createElement(u.a,null,r.a.createElement(c.a,{className:"layout"},r.a.createElement(p,null),r.a.createElement(re,{style:{padding:"0 3vw"}},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/detroit",render:function(){return r.a.createElement(ee,{city:"detroit"})}}),r.a.createElement(i.a,{path:"/cook",render:function(){return r.a.createElement(ee,{city:"chicago"})}}),r.a.createElement(i.a,{path:"/getstarted",render:function(){return r.a.createElement(te,null)}}),r.a.createElement(i.a,{path:"/selectregion",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(i.a,{path:"/completedappeal",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(i.a,{path:"/illegalforeclosures",component:function(){return window.location.href="https://illegalforeclosures.org/",null}}),r.a.createElement(i.a,{path:"/",render:function(){return r.a.createElement(E,null)}})))),r.a.createElement(le,{style:{textAlign:"center"}},"Property Tax Appeal Project")))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.435a77c5.chunk.js.map