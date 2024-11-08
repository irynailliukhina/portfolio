import{_ as m,o as s,c,b as e,t as u,a as _,d as f,r as l,F as g,e as v,f as j}from"./main-MzrqSgLG.js";import{M as y}from"./MenuAside-kDlpkv8I.js";const b={props:{card:Object}},w={class:"card"},x=["src"];function S(n,t,o,h,i,d){return s(),c("div",w,[e("img",{src:o.card.icon,alt:"Icon",width:"40",height:"40"},null,8,x),e("p",null,u(o.card.name),1)])}const C=m(b,[["render",S],["__scopeId","data-v-67f97ac7"]]),L={props:{project:Object},methods:{addLoadedClass(n){n.target.classList.add("loaded")}}},T={class:"card"},$={class:"card__img-wrap"},I=["src"],M={class:"card__name"},V={class:"card__desc"},R={class:"card__links"},B=["href"],E=["href"];function J(n,t,o,h,i,d){const r=l("font-awesome-icon");return s(),c("div",T,[e("div",$,[e("img",{src:o.project.picture,onLoad:t[0]||(t[0]=p=>d.addLoadedClass(p))},null,40,I)]),e("h5",M,u(o.project.name),1),e("p",V,u(o.project.desc),1),e("div",R,[o.project.linkLive?(s(),c("a",{key:0,href:o.project.linkLive,target:"_blank"},[_(r,{icon:["fas","globe"],class:"live tooltip"}),t[1]||(t[1]=e("span",{class:"tooltip-text tooltip-text__live"},"Live website",-1))],8,B)):f("",!0),o.project.linkSourse?(s(),c("a",{key:1,href:o.project.linkSourse,target:"_blank"},[_(r,{icon:["fas","code"],class:"source tooltip"}),t[2]||(t[2]=e("span",{class:"tooltip-text tooltip-text__source"},"Source code",-1))],8,E)):f("",!0)])])}const A=m(L,[["render",J],["__scopeId","data-v-6fdc364d"]]),N={data(){return{technologies:[{name:"Vue.js",icon:"/portfolio/icons/vue.svg"},{name:"JavaScript",icon:"/portfolio/icons/javascript.svg"},{name:"Magento",icon:"/portfolio/icons/magento.svg"},{name:"HTML",icon:"/portfolio/icons/html.svg"},{name:"CSS",icon:"/portfolio/icons/css.svg"},{name:"Jquery",icon:"/portfolio/icons/jquery.svg"},{name:"React.js",icon:"/portfolio/icons/react.svg"}],projects:[{picture:"/portfolio/projects/ttt.png",name:"Tic-tac-toe game",desc:"This project was part of my React.js studies, where I explored foundational concepts such as components and state management through building this project.",linkLive:"https://irynailliukhina.github.io/tic-tac-toe/",linkSourse:"https://github.com/irynailliukhina/tic-tac-toe"},{picture:"/portfolio/projects/coaches.png",name:"Coaches portal",desc:"This project was part of my Vue.js studies, where I explored routing, VUEX, authentication concepts.",linkLive:"https://coaches-8a223.web.app/",linkSourse:"https://github.com/irynailliukhina/coaches"},{picture:"/portfolio/projects/excel.png",name:"Excel JavaScript",desc:"This project is a pure JavaScript implementation that mimics the core functionalities of Microsoft Excel, allowing users to create, edit, and manage spreadsheet-like data.",linkSourse:"https://github.com/irynailliukhina/excel/"},{picture:"/portfolio/projects/i-calc.png",name:"Investment calculator",desc:"I developed an investment calculator to solidify my understanding of React fundamentals and create a practical tool for personal use. This project allowed me to apply core React concepts, such as component structure, state management, and props, resulting in a functional, user-friendly application for calculating investment growth over time.",linkLive:"https://irynailliukhina.github.io/investment-calculator/",linkSourse:"https://github.com/irynailliukhina/investment-calculator"}]}},components:{MenuAside:y,TechCard:C,ProjectCard:A}},P={class:"wrapper"},q={class:"tech cards"},D={class:"project cards"};function F(n,t,o,h,i,d){const r=l("MenuAside"),p=l("TechCard"),k=l("ProjectCard");return s(),c("div",P,[_(r),t[0]||(t[0]=e("h3",{class:"cards__desc"},"My Development Stack:",-1)),e("div",q,[(s(!0),c(g,null,v(i.technologies,a=>(s(),j(p,{key:a,card:a},null,8,["card"]))),128))]),t[1]||(t[1]=e("h3",{class:"cards__desc"},"Recent projects:",-1)),e("div",D,[(s(!0),c(g,null,v(i.projects,a=>(s(),j(k,{key:a,project:a},null,8,["project"]))),128))])])}const U=m(N,[["render",F],["__scopeId","data-v-f25ee345"]]);export{U as default};
