const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let r=null,n=!1;t.addEventListener("click",(()=>{n||(n=!0,r=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),e.addEventListener("click",(()=>{clearInterval(r),n=!1}));
//# sourceMappingURL=01-color-switcher.f3ec3be5.js.map