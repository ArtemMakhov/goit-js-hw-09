!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null,c=!1;t.addEventListener("click",(function(){c||(c=!0,o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),e.addEventListener("click",(function(){clearInterval(o),c=!1}))}();
//# sourceMappingURL=01-color-switcher.3544d3eb.js.map
