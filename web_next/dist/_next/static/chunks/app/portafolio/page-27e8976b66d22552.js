(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7814],{6542:function(e,t,s){Promise.resolve().then(s.bind(s,2353)),Promise.resolve().then(s.bind(s,4303))},2353:function(e,t,s){"use strict";s.r(t),s.d(t,{RedirigirProyectos:function(){return c}});var r=s(7437),n=s(1396),a=s.n(n),o=s(2265),i=s(6468),l=s(704);let c=e=>{let{categoria:t}=e,[s,n]=(0,o.useState)(!1);return(0,r.jsx)(a(),{href:"/portafolio/".concat(t.url),className:"w-full bg-transparent mx-10 rounded-lg  py-4 px-3 transition-all  border-2 border-white  flex justify-center box_child_content2 h-[45px] relative overflow-hidden cursor-pointer",onMouseEnter:()=>{n(!0)},onMouseLeave:()=>{n(!1)},children:(0,r.jsxs)("div",{className:"flex gap-3 items-center w-full transition-all",children:[(0,r.jsx)(l.Z,{in:s,timeout:800,classNames:"alert2",unmountOnExit:!0,children:(0,r.jsx)("span",{className:"text-white text-3xl ".concat(s?"":"hidden"),children:"Los proyectos"})}),(0,r.jsx)(l.Z,{in:!s,timeout:500,classNames:"alert2",unmountOnExit:!0,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.ewB,{className:"text-white text-5xl"}),(0,r.jsx)("p",{className:"text-white text-3xl corregir_pad",children:"Vistar"})]})})]})})}},4303:function(e,t,s){"use strict";s.r(t),s.d(t,{SwiperContenido:function(){return i}});var r=s(7437),n=s(8278);s(3034);var a=s(1533),o=s(2050);let i=e=>{let{categoria:t}=e,s=e=>{let t=e.substr(e.lastIndexOf(".")).toLowerCase();return[".mp4",".avi",".mov"].includes(t)};return(0,r.jsx)(n.tq,{slidesPerView:1,modules:[a.pt],autoplay:{delay:2e3,disableOnInteraction:!1},className:"h-full w-full",children:JSON.parse(t.array).map(e=>(0,r.jsx)(n.o5,{className:"w-full h-full overflow-hidden",children:s(e.imagen1.archivoName)?(0,r.jsx)("video",{src:"".concat(o.x.urlImages,"/categoriasportafolio/").concat(e.imagen1.archivoName),muted:!0,autoPlay:!0,loop:!0,className:"rounded-lg w-full h-full object-cover rounded-b-none group-hover:scale-125 group-hover:blur-[2px] transition-transform overflow-hidden"}):(0,r.jsx)("img",{src:"".concat(o.x.urlImages,"/categoriasportafolio/").concat(e.imagen1.archivoName),alt:"",className:"rounded-lg w-full h-full object-cover rounded-b-none group-hover:scale-125 group-hover:blur-[2px] transition-transform overflow-hidden"})},e.id))})}},2050:function(e,t,s){"use strict";s.d(t,{x:function(){return r}});let r={url:"https://api.logosperu.com.pe/public/api",urlImages:"https://api.logosperu.com.pe/public"}},1396:function(e,t,s){e.exports=s(4724)},1172:function(e,t,s){"use strict";s.d(t,{w_:function(){return l}});var r=s(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(n),o=function(){return(o=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var n in t=arguments[s])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(s[r[n]]=e[r[n]]);return s};function l(e){return function(t){return r.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,s){return r.createElement(t.tag,o({key:s},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var s,n=e.attr,a=e.size,l=e.title,c=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(s=t.className),e.className&&(s=(s?s+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:s,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(n)}},704:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var r=s(3428),n=s(791),a=s(3142);function o(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var i=s(2265),l=s(93),c=s(7295),u=function(e,t){return e&&t&&t.split(" ").forEach(function(t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=o(e.className,t):e.setAttribute("class",o(e.className&&e.className.baseVal||"",t))})},p=function(e){function t(){for(var t,s=arguments.length,r=Array(s),n=0;n<s;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,s){var r=t.resolveArguments(e,s),n=r[0],a=r[1];t.removeClasses(n,"exit"),t.addClass(n,a?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,s)},t.onEntering=function(e,s){var r=t.resolveArguments(e,s),n=r[0],a=r[1];t.addClass(n,a?"appear":"enter","active"),t.props.onEntering&&t.props.onEntering(e,s)},t.onEntered=function(e,s){var r=t.resolveArguments(e,s),n=r[0],a=r[1]?"appear":"enter";t.removeClasses(n,a),t.addClass(n,a,"done"),t.props.onEntered&&t.props.onEntered(e,s)},t.onExit=function(e){var s=t.resolveArguments(e)[0];t.removeClasses(s,"appear"),t.removeClasses(s,"enter"),t.addClass(s,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var s=t.resolveArguments(e)[0];t.addClass(s,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var s=t.resolveArguments(e)[0];t.removeClasses(s,"exit"),t.addClass(s,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,s){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,s]},t.getClassNames=function(e){var s=t.props.classNames,r="string"==typeof s,n=r?(r&&s?s+"-":"")+e:s[e],a=r?n+"-active":s[e+"Active"],o=r?n+"-done":s[e+"Done"];return{baseClassName:n,activeClassName:a,doneClassName:o}},t}(0,a.Z)(t,e);var s=t.prototype;return s.addClass=function(e,t,s){var r,n=this.getClassNames(t)[s+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===s&&a&&(n+=" "+a),"active"===s&&e&&(0,c.Q)(e),n&&(this.appliedClasses[t][s]=n,r=n,e&&r&&r.split(" ").forEach(function(t){var s,r;return s=e,r=t,void(s.classList?s.classList.add(r):(s.classList?r&&s.classList.contains(r):-1!==(" "+(s.className.baseVal||s.className)+" ").indexOf(" "+r+" "))||("string"==typeof s.className?s.className=s.className+" "+r:s.setAttribute("class",(s.className&&s.className.baseVal||"")+" "+r)))}))},s.removeClasses=function(e,t){var s=this.appliedClasses[t],r=s.base,n=s.active,a=s.done;this.appliedClasses[t]={},r&&u(e,r),n&&u(e,n),a&&u(e,a)},s.render=function(){var e=this.props,t=(e.classNames,(0,n.Z)(e,["classNames"]));return i.createElement(l.ZP,(0,r.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.Component);p.defaultProps={classNames:""},p.propTypes={};var d=p}},function(e){e.O(0,[3190,4724,6280,204,2971,7864,1744],function(){return e(e.s=6542)}),_N_E=e.O()}]);