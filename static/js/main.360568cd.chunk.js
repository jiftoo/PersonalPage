(this.webpackJsonpforum=this.webpackJsonpforum||[]).push([[0],{28:function(e,t,a){e.exports=a(42)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(24),s=a.n(r),c=a(6),l=a(7),o=a(10),u=a(9),m=a(8),d=a(27),h=a(21),v=a(12),b=a(3),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"fade-in"},"about")}}]),a}(n.PureComponent),E=(a(33),a(18)),f=a(14),g=a(25),N=a.n(g),k=(a(34),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a),(e=t.call(this)).state={email:"",question:"",selected:-1,emailError:"",questionError:"",showErrors:!1,submitted:!1};return e.validationInfo=Object(E.a)(Object(E.a)({},function(e,t,a){if(!new RegExp(t).test(a))throw new Error("Bro your exaple doesnt match the pattern wtf?");return Object(f.a)({},e,{pattern:new RegExp(t),error:"".concat(e[0].toUpperCase()+e.slice(1)," must look like ").concat(a)})}("email",/\S+@\S+\.\S+/,"'email@example.com'")),function(e,t){var a="[a-zA-Z ]{".concat(t+1,",}");return Object(f.a)({},e,{pattern:new RegExp(a),error:"".concat(e[0].toUpperCase()+e.slice(1)," must be at least ").concat(t," alphabetic characters")})}("question",5)),e.validate=e.validate.bind(Object(o.a)(e)),e.submit=e.submit.bind(Object(o.a)(e)),e}return Object(l.a)(a,[{key:"validate",value:function(e){e&&e.preventDefault();var t=[this.validationInfo.email,this.validationInfo.question],a=t[0],n=t[1],i=this.state,r=i.email,s=i.question,c="",l="";a.pattern.test(r)||(c=a.error),n.pattern.test(s)||(l=n.error),this.setState({emailError:c,questionError:l})}},{key:"submit",value:function(e){var t=this;e.preventDefault(),this.setState({showErrors:!0}),0===this.state.emailError.length&&0===this.state.questionError.length&&setTimeout((function(){return t.setState({submitted:!0})}),300)}},{key:"componentDidMount",value:function(){this.validate()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"fade-in contact-container "},i.a.createElement("div",{className:"info"},i.a.createElement("h1",{className:"header"},"Contact"),i.a.createElement("div",{className:"paragraph muted break-word"},"Please fill out the form to send me an contact e-mail. I will reach out to you as soon as possible!")),i.a.createElement("form",{noValidate:!0,onSubmit:this.submit,className:"form"},i.a.createElement("div",{className:"email-info "+(this.state.submitted?"blur":"")},i.a.createElement("input",{value:this.state.email,onChange:function(t){t.persist(),e.setState({email:t.target.value},(function(){return e.validate(t)}))},type:"email",className:"email",placeholder:"Your e-mail address"}),this.state.showErrors&&this.state.emailError&&i.a.createElement("div",{className:"field-error fade-in"},this.state.emailError)),i.a.createElement("div",{className:"question-info "+(this.state.submitted?"blur":"")},i.a.createElement("textarea",{value:this.state.question,onChange:function(t){t.persist(),e.setState({question:t.target.value},(function(){return e.validate(t)})),N()(t.target)},type:"text",className:"question",placeholder:"Your question"}),this.state.showErrors&&this.state.questionError&&i.a.createElement("div",{className:"field-error fade-in"},this.state.questionError)),i.a.createElement("div",{className:"footer "+(this.state.submitted?"blur":"")},i.a.createElement("button",{className:"submit-button",type:"submit"},"Submit!")),this.state.submitted&&i.a.createElement("div",{className:"submit-success"},i.a.createElement("div",null,"Submitted!"))))}}]),a}(n.Component)),y=(a(35),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"fade-in home-container"},i.a.createElement("div",{className:"info"},i.a.createElement("h1",{className:"header"},"Lorem Ipsum"),i.a.createElement("h1",{className:"paragraph muted"},"10 dolor sit amet, consectetur adipiscing elit. Curabitur nec blandit leo. Praesent malesuada neque fringilla lacus varius, at dignissim mauris efficitur. Etiam et eros quis nisl finibus pellentesque. Proin a magna sollicitudin, consequat sem id, maximus ante. Suspendisse ultrices massa in finibus viverra. Fusce sit amet congue turpis.")),i.a.createElement(v.b,{to:"/about",style:{display:"block"}},i.a.createElement("div",{className:"learn-more"},i.a.createElement("div",{className:"play-o"},i.a.createElement("div",{className:"play-i"},i.a.createElement("img",{className:"play-svg",src:"play.svg",alt:"learn more"}))),i.a.createElement("div",{className:"label"},"Learn more!"))))}}]),a}(n.PureComponent));a(41);var w=function(e){return n.createElement("svg",Object.assign({stroke:"currentColor",fill:"currentColor",viewBox:"0 0 548.358 548.358"},{width:e.size,height:e.size}),n.createElement("path",{d:"M545.451 400.298c-.664-1.431-1.283-2.618-1.858-3.569-9.514-17.135-27.695-38.167-54.532-63.102l-.567-.571-.284-.28-.287-.287h-.288c-12.18-11.611-19.893-19.418-23.123-23.415-5.91-7.614-7.234-15.321-4.004-23.13 2.282-5.9 10.854-18.36 25.696-37.397 7.807-10.089 13.99-18.175 18.556-24.267 32.931-43.78 47.208-71.756 42.828-83.939l-1.701-2.847c-1.143-1.714-4.093-3.282-8.846-4.712-4.764-1.427-10.853-1.663-18.278-.712l-82.224.568c-1.332-.472-3.234-.428-5.712.144l-3.713.859-1.431.715-1.136.859c-.952.568-1.999 1.567-3.142 2.995-1.137 1.423-2.088 3.093-2.848 4.996-8.952 23.031-19.13 44.444-30.553 64.238-7.043 11.803-13.511 22.032-19.418 30.693-5.899 8.658-10.848 15.037-14.842 19.126-4 4.093-7.61 7.372-10.852 9.849-3.237 2.478-5.708 3.525-7.419 3.142-1.715-.383-3.33-.763-4.859-1.143-2.663-1.714-4.805-4.045-6.42-6.995-1.622-2.95-2.714-6.663-3.285-11.136-.568-4.476-.904-8.326-1-11.563-.089-3.233-.048-7.806.145-13.706.198-5.903.287-9.897.287-11.991 0-7.234.141-15.085.424-23.555.288-8.47.521-15.181.716-20.125.194-4.949.284-10.185.284-15.705s-.336-9.849-1-12.991a44.442 44.442 0 00-2.99-9.137c-1.335-2.95-3.289-5.232-5.853-6.852-2.569-1.618-5.763-2.902-9.564-3.856-10.089-2.283-22.936-3.518-38.547-3.71-35.401-.38-58.148 1.906-68.236 6.855-3.997 2.091-7.614 4.948-10.848 8.562-3.427 4.189-3.905 6.475-1.431 6.851 11.422 1.711 19.508 5.804 24.267 12.275l1.715 3.429c1.334 2.474 2.666 6.854 3.999 13.134 1.331 6.28 2.19 13.227 2.568 20.837.95 13.897.95 25.793 0 35.689-.953 9.9-1.853 17.607-2.712 23.127-.859 5.52-2.143 9.993-3.855 13.418-1.715 3.426-2.856 5.52-3.428 6.28-.571.76-1.047 1.239-1.425 1.427a21.387 21.387 0 01-7.71 1.431c-2.667 0-5.901-1.334-9.707-4-3.805-2.666-7.754-6.328-11.847-10.992-4.093-4.665-8.709-11.184-13.85-19.558-5.137-8.374-10.467-18.271-15.987-29.691l-4.567-8.282c-2.855-5.328-6.755-13.086-11.704-23.267-4.952-10.185-9.329-20.037-13.134-29.554-1.521-3.997-3.806-7.04-6.851-9.134l-1.429-.859c-.95-.76-2.475-1.567-4.567-2.427a30.301 30.301 0 00-6.567-1.854l-78.229.568c-7.994 0-13.418 1.811-16.274 5.428l-1.143 1.711c-.571.953-.859 2.475-.859 4.57 0 2.094.571 4.664 1.714 7.707 11.42 26.84 23.839 52.725 37.257 77.659 13.418 24.934 25.078 45.019 34.973 60.237 9.897 15.229 19.985 29.602 30.264 43.112 10.279 13.515 17.083 22.176 20.412 25.981 3.333 3.812 5.951 6.662 7.854 8.565l7.139 6.851c4.568 4.569 11.276 10.041 20.127 16.416 8.853 6.379 18.654 12.659 29.408 18.85 10.756 6.181 23.269 11.225 37.546 15.126 14.275 3.905 28.169 5.472 41.684 4.716h32.834c6.659-.575 11.704-2.669 15.133-6.283l1.136-1.431c.764-1.136 1.479-2.901 2.139-5.276.668-2.379 1-5 1-7.851-.195-8.183.428-15.558 1.852-22.124 1.423-6.564 3.045-11.513 4.859-14.846 1.813-3.33 3.859-6.14 6.136-8.418 2.282-2.283 3.908-3.666 4.862-4.142.948-.479 1.705-.804 2.276-.999 4.568-1.522 9.944-.048 16.136 4.429 6.187 4.473 11.99 9.996 17.418 16.56 5.425 6.57 11.943 13.941 19.555 22.124 7.617 8.186 14.277 14.271 19.985 18.274l5.708 3.426c3.812 2.286 8.761 4.38 14.853 6.283 6.081 1.902 11.409 2.378 \r\n15.984 1.427l73.087-1.14c7.229 0 12.854-1.197 16.844-3.572 3.998-2.379 6.373-5 7.139-7.851.764-2.854.805-6.092.145-9.712-.677-3.611-1.344-6.136-2.008-7.563z"}))},x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).iconSize="27px",e.shareIcons=[{el:d.a,link:"https://github.com/0x666c/"},{el:h.b,link:"https://github.com/0x666c/"},{el:w,link:"https://github.com/0x666c/"},{el:h.a,link:"https://github.com/0x666c/"}],e.animationTimeout=-1,e.state={white:!1,pageIndex:0,links:e.shareIcons.map((function(t,a){return i.a.createElement("a",{onClick:function(t){e.setWhiteActive(t.target,!0),e.animationTimeout=setTimeout((function(){return e.setWhiteActive(null,!1)}),4e3)},href:t.link,key:a},i.a.createElement(t.el,{size:e.iconSize}))}))},e.unloadHandler=e.unloadHandler.bind(Object(o.a)(e)),e}return Object(l.a)(a,[{key:"unloadHandler",value:function(e){clearTimeout(this.animationTimeout),this.setWhiteActive(null,!1)}},{key:"componentDidMount",value:function(){window.addEventListener("unload",this.unloadHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unload",this.unloadHandler)}},{key:"setWhiteActive",value:function(e,t){t?(e.classList.add("share-container-expand"),document.getElementById("not-buttons").classList.add("fade-out")):document.querySelectorAll(".fade-out, .share-container-expand").forEach((function(e){return e.classList.remove("fade-out","share-container-expand")}))}},{key:"setLocation",value:function(e){this.setState({pageIndex:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(v.a,null,i.a.createElement("div",{id:"not-buttons"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:"favicon.png",alt:"nothin"})),i.a.createElement("div",{className:"navbar-links"},i.a.createElement("div",{className:0===this.state.pageIndex?"current-section":void 0},i.a.createElement(v.b,{onClick:function(){return e.setLocation(0)},to:"/home"},"Home")),i.a.createElement("div",{className:0===this.state.pageIndex?"current-section":void 0},i.a.createElement(v.b,{onClick:function(){return e.setLocation(1)},to:"/about"},"About")),i.a.createElement("div",{className:0===this.state.pageIndex?"current-section":void 0},i.a.createElement(v.b,{onClick:function(){return e.setLocation(2)},to:"/contact"},"Contact")))),i.a.createElement("div",{className:"page-container"},i.a.createElement(b.d,null,i.a.createElement(b.b,{exact:!0,path:"/home"},i.a.createElement(y,null)),i.a.createElement(b.b,{exact:!0,path:"/about"},i.a.createElement(p,null)),i.a.createElement(b.b,{exact:!0,path:"/contact"},i.a.createElement(k,null)),i.a.createElement(b.b,null,i.a.createElement(b.a,{to:"/home"}))))),i.a.createElement("div",{className:"share"},i.a.createElement("div",{className:"share-container"},this.state.links)))}}]),a}(n.PureComponent);window.location.pathname.endsWith("/PersonalPage/")||(console.log(window.location.pathname),window.history.replaceState(null,"","/PersonalPage/")),s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.360568cd.chunk.js.map