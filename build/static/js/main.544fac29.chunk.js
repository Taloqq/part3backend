(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{16:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(15),u=t.n(o),c=(t(6),t(2)),l=t(4),i=t(3),s=t.n(i),m="/api/persons",f=function(){return s.a.get(m).then((function(e){return e.data}))},d=function(e){return s.a.post(m,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(m,"/").concat(e))},p=function(e){e.errorStyle;var n=e.setErrorStyle,t=e.setErrorMessage,r=e.persons,o=e.setPersons,u=e.newName,c=e.setNewName,i=e.newNumber,s=e.setNewNumber,m=e.handleNameChange,f=e.handleNumberChange,b=function(e,a){var u=e.id;if(window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))){console.log("OK!");var c=Object(l.a)(Object(l.a)({},e),{},{number:a});h(u,c).then((function(e){o(r.map((function(n){return n.id!==u?n:e})))})).catch((function(r){n({color:"red"}),t("Info of ".concat(e.name," has already been removed for the server")),setTimeout((function(){t(null)}),3e3)}))}};return a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={name:u,number:i};if(r.some((function(e){return e.name.toLowerCase()===u.toLowerCase()}))){var l=r.find((function(e){return e.name===a.name}));b(l,a.number)}else d(a).then((function(e){o(r.concat(e)),n({color:"green"}),t("Added ".concat(a.name))})).then(n({color:"green"})).catch((function(e){n({color:"red"}),t(e.response.data.error)})),setTimeout((function(){t(null)}),3e3);c(""),s("")}},a.a.createElement("div",null," name: ",a.a.createElement("input",{value:u,onChange:m})),a.a.createElement("div",null," number: ",a.a.createElement("input",{value:i,onChange:f})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.person,t=e.persons,r=e.setPersons;return a.a.createElement("li",null,n.name," ",n.number,a.a.createElement("button",{type:"button",onClick:function(){return e=n.id,void(window.confirm("are u sure ?")&&(console.log("deleting person id ".concat(e)),b(e).then(r(t.filter((function(n){return n.id!==e}))))));var e}},"delete"))},v=function(e){var n=e.filter,t=e.handleFilter;return a.a.createElement("div",null,"filters shown with ",a.a.createElement("input",{value:n,onChange:t}))},g=function(e){var n=e.message,t=e.errorStyle;return null===n?null:a.a.createElement("div",{className:"error",style:t},n)},w=function(){var e=Object(r.useState)([]),n=Object(c.a)(e,2),t=n[0],o=n[1],u=Object(r.useState)(""),l=Object(c.a)(u,2),i=l[0],s=l[1],m=Object(r.useState)(""),d=Object(c.a)(m,2),h=d[0],b=d[1],w=Object(r.useState)(""),N=Object(c.a)(w,2),O=N[0],j=N[1],S=Object(r.useState)(null),y=Object(c.a)(S,2),C=y[0],k=y[1],P=Object(r.useState)(),M=Object(c.a)(P,2),L=M[0],A=M[1];Object(r.useEffect)((function(){f().then((function(e){o(e)}))}),[]);var F=O?t.filter((function(e){return e.name.toLowerCase().includes(O)})):t;return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(g,{message:C,errorStyle:L}),a.a.createElement(v,{filter:O,handleFilter:function(e){j(e.target.value)}}),a.a.createElement("h2",null,"Add a new contact"),a.a.createElement(p,{errorStyle:L,setErrorStyle:A,errorMessage:C,setErrorMessage:k,persons:t,setPersons:o,newName:i,setNewName:s,newNumber:h,setNewNumber:b,handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){b(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement("ul",null,F.map((function(e){return a.a.createElement(E,{key:e.id,person:e,persons:t,setPersons:o})}))))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root"))},6:function(e,n,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.544fac29.chunk.js.map