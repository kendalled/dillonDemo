(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,e,r){t.exports=r.p+"img/8c16e18.png"},151:function(t,e,r){t.exports=r.p+"img/d914ed0.png"},152:function(t,e,r){t.exports=r.p+"img/c1062cb.png"},153:function(t,e,r){var content=r(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("78f344b8",content,!0,{sourceMap:!1})},154:function(t,e,r){t.exports=r.p+"img/8a4d283.png"},155:function(t,e,r){t.exports=r.p+"img/13cf195.png"},156:function(t,e,r){t.exports=r.p+"img/b1960e1.png"},157:function(t,e,r){t.exports=r.p+"img/2883518.png"},158:function(t,e,r){t.exports=r.p+"img/cd4ef18.png"},159:function(t,e,r){"use strict";var o=r(153);r.n(o).a},160:function(t,e,r){(e=r(36)(!1)).push([t.i,".primary[data-v-302b69c1]{fill:#f1f1f1}.secondary[data-v-302b69c1]{fill:#888}*[data-v-302b69c1]{box-sizing:border-box}body[data-v-302b69c1],html[data-v-302b69c1]{height:100%}body[data-v-302b69c1]{display:grid;grid-template-rows:1fr;background-color:#01e37f}img[data-v-302b69c1]{max-width:100%}.product[data-v-302b69c1]{display:grid;grid-template-columns:.9fr 1fr;min-width:600px}.product__photo[data-v-302b69c1]{position:relative}.photo-container[data-v-302b69c1]{position:absolute;left:-2.5rem;display:grid;grid-template-rows:1fr;width:100%;height:100%;border-radius:6px}.photo-main[data-v-302b69c1]{border-radius:6px 6px 0 0;background-color:#9be010;background:radial-gradient(#f6e05e,#ecc94b)}.photo-main .controls[data-v-302b69c1]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;color:#fff;padding:.8rem;margin-top:-4rem;position:absolute}.photo-main .controls i[data-v-302b69c1]{cursor:pointer}.photo-main img[data-v-302b69c1]{position:absolute;left:-4.5rem;top:3rem;max-width:94%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.shadowed[data-v-302b69c1]{-webkit-filter:drop-shadow(1px 20px 10px rgba(0,0,0,.4));filter:drop-shadow(1px 20px 10px rgba(0,0,0,.4));-ms-filter:\"progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')\";filter:\"progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')\"}.photo-album[data-v-302b69c1]{padding:.7em 1rem;border-radius:0 0 6px 6px;background-color:#fff}.photo-album ul[data-v-302b69c1]{display:-webkit-box;display:flex;justify-content:space-around}.photo-album li[data-v-302b69c1]{float:left;padding:7px;border-radius:3px}.product__info[data-v-302b69c1]{padding:.8em 0}.title h1[data-v-302b69c1]{margin-bottom:.1rem;color:#4c4c4c;font-size:1.5rem;font-weight:900}.title span[data-v-302b69c1]{font-size:.7rem;color:#a6a6a6}.variant[data-v-302b69c1]{overflow:auto}.variant h3[data-v-302b69c1]{margin-bottom:1.1rem}.variant li[data-v-302b69c1]{float:left;width:48px;height:48px;padding:3px;border-radius:3px;cursor:pointer}.variant li[data-v-302b69c1]:not(:first-child){margin-left:.1rem}.description[data-v-302b69c1]{clear:left;margin:2em 0}.buy--btn[data-v-302b69c1]{padding:1.5em 3.1rem;border:none;border-radius:7px;font-size:.8rem;font-weight:700;letter-spacing:1.3px;color:#fff;background-color:#ff3f40;box-shadow:2px 2px 25px -7px #4c4c4c;cursor:pointer}.buy--btn[data-v-302b69c1]:active{-webkit-transform:scale(.97);transform:scale(.97)}footer[data-v-302b69c1]{padding:1rem;text-align:center;color:#fff}footer a[data-v-302b69c1]{color:#4c4c4c}footer a[data-v-302b69c1]:hover{color:#ff3f40}",""]),t.exports=e},161:function(t,e,r){var content=r(167);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("1667395f",content,!0,{sourceMap:!1})},162:function(t,e,r){var content=r(169);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("75e6d8b0",content,!0,{sourceMap:!1})},165:function(t,e,r){"use strict";var o={name:"Scard",props:{info:{type:Object,default:function(){return{title:"Retro Arcade Cabinets",choices:[],features:["Classic arcade controls","100's of classic games","Customizable art panels","Hand-crafted wooden cabinet"],link:"https://pooltablestore.com/games-arcade-machines/arcade-machines/"}},imgDetails:{type:Array,default:function(){return[[r(150),r(151),r(152)],[r(150),r(151),r(152)],[r(150),r(151),r(152)]]}}}},data:function(){return{optionSet:0,selected:r(150),imgList:[r(155),r(156)],imgDetails:[r(150),r(151),r(152)],pages:[{ind:0,pid:"p0",active:!0,title:"pac-man",data:[r(150),r(151),r(152)]},{ind:1,pid:"p1",active:!1,title:"street fighter",data:[r(154),r(157),r(158)]}]}},watch:{optionSet:function(){0===this.optionSet?this.selected=r(150):1===this.optionSet&&(this.selected=r(154));for(var t=this.pages,i=0;i<t.length;i++)i!==this.optionSet?t[i].active=!1:t[i].active=!0}},methods:{clickHandler:function(t){this.selected=t,console.log("worked (individual)!")},clickHandler2:function(t){this.optionSet=t,console.log("worked (game style)!")}}},n=(r(159),r(18)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"productRoot"},[r("section",{staticClass:"product max-w-lg bg-white rounded py-10"},[t._l(t.pages,(function(e,i){return r("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"page.active"}],key:i,staticClass:"product__photo"},[r("div",{staticClass:"photo-container shadow-lg"},[r("div",{staticClass:"photo-main"},[r("div",{staticClass:"controls"},[r("svg",{staticClass:"w-8 mr-4 icon-mail",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{staticClass:"primary",attrs:{d:"M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"}}),r("path",{staticClass:"primary",attrs:{d:"M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"}})]),t._v(" "),r("svg",{staticClass:"w-8 icon-information",staticStyle:{"margin-left":"11rem"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{staticClass:"primary",attrs:{d:"M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"}}),r("path",{staticClass:"secondary",attrs:{d:"M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}})])]),t._v(" "),t._l(e.data,(function(e){return r("img",{directives:[{name:"show",rawName:"v-show",value:t.selected===e,expression:"selected === pic"}],staticClass:"w-auto ml-4 shadowed",staticStyle:{height:"23rem"},attrs:{src:e,alt:"green apple slice"}})})),t._v(" "),t._m(0,!0)],2),t._v(" "),r("div",{staticClass:"photo-album"},[r("ul",t._l(e.data,(function(img,e){return r("li",{key:e,staticClass:"w-auto border-2 hover:border-blue-600 transition-colors cursor-pointer",class:[img===t.selected?"border-gray-600":"w-auto"],attrs:{draggable:"false"},on:{click:function(e){return t.clickHandler(img)}}},[r("img",{staticClass:"-mt-1 h-12 w-auto",attrs:{src:img,alt:"green apple",draggable:"false"}})])})),0)])])])})),t._v(" "),r("div",{staticClass:"product__info"},[r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.info.title))]),t._v(" "),r("span",[t._v("SKU: 123235")])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"variant"},[r("h3",{staticClass:"mb-4 font-semibold text-sm text-gray-800"},[t._v("\n          Select an option:\n        ")]),t._v(" "),r("ul",t._l(t.imgList,(function(img,i){return r("li",{key:i,staticClass:"mx-1 border-2 shadow-md",class:[i===t.optionSet?"border-green-600":"w-auto"],attrs:{draggable:"false"},on:{click:function(e){return t.clickHandler2(i)}}},[r("img",{class:[2===i?"w-12 ml-0":"w-auto"],attrs:{src:img,alt:"red ghost",draggable:"false"}})])})),0)]),t._v(" "),r("div",{staticClass:"description"},[r("h3",{staticClass:"mb-4 font-semibold text-sm text-gray-800"},[t._v("\n          Features:\n        ")]),t._v(" "),t._l(t.info.features,(function(e,i){return r("ul",{key:i,staticClass:"list-reset text-black mb-2 px-2"},[r("li",{staticClass:"flex items-center mb-3 text-xs"},[r("svg",{staticClass:"flex-none w-6 mr-2 fill-current text-blue-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]),t._v("\n            "+t._s(e)+"\n          ")])])}))],2),t._v(" "),r("a",{staticClass:"px-20 text-xl font-bold py-3 rounded shadow bg-blue-700 text-white text-center",attrs:{href:t.info.link}},[t._v("\n        See More\n      ")])])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"absolute ml-40 mt-24 bg-white rounded-full text-gray-800 px-4 py-4 text-center border-4 border-gray-400 hover:border-yellow-600 cursor-pointer focus:outline-none shadow transition-colors"},[e("p",{staticClass:"text-3xl font-extrabold"},[this._v("100's")]),e("p",{staticClass:"text-lg font-semibold -mt-1 text-gray-700"},[this._v(" of titles!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-0"},[r("div",{staticClass:"block mt-4 opacity-0"},[r("span",{staticClass:"text-6xl text-gray-300 -mt-6 ml-4 z-10"},[t._v("$")]),t._v(" "),r("span",{staticClass:"ml-10 z-20 fixed font-black text-gray-800 text-4xl"},[t._v("299.99")])]),t._v(" "),r("div",{staticClass:"absolute ml-16 -mt-8 hidden"},[r("span",{staticClass:"px-8 ml-1 font-semibold text-green-500 text-base"},[t._v("25% off!")])]),t._v(" "),r("div",{staticClass:"absolute -mt-32 text-right"},[r("span",{staticClass:"ml-12 mt-10 mt-2 z-20 fixed font-bold text-gray-600 text-xl pr-0"},[t._v("$ 399.99")]),r("div",{staticClass:"absolute w-20 h-1 rounded bg-red-500 opacity-50",staticStyle:{"margin-top":"3.25rem","margin-left":"3.1rem"}})]),t._v(" "),r("div",{staticClass:"absolute -mt-20"},[r("span",{staticClass:"absolute text-gray-700 -mt-6 z-10",staticStyle:{"font-size":"4rem","font-weight":"600"}},[t._v("$")]),t._v(" "),r("span",{staticClass:"ml-12 mt-3 z-20 fixed font-black text-gray-700 text-3xl"},[t._v("299.99")])])])}],!1,null,"302b69c1",null);e.a=component.exports},166:function(t,e,r){"use strict";var o=r(161);r.n(o).a},167:function(t,e,r){(e=r(36)(!1)).push([t.i,"*[data-v-16c82557]{box-sizing:border-box}.slider[data-v-16c82557]{width:100vw;height:100vh;overflow:hidden;background-color:transparent;border-radius:10px!important}.slides[data-v-16c82557]{display:-webkit-box;display:flex;border-radius:10px;overflow-x:auto;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}.slides[data-v-16c82557]::-webkit-scrollbar{width:10px;height:10px}.slides[data-v-16c82557]::-webkit-scrollbar-thumb{background:#1f1f1f;border-radius:10px}.slides[data-v-16c82557]::-webkit-scrollbar-track{background:transparent}.slides>div[data-v-16c82557]{scroll-snap-align:start;flex-shrink:0;width:100vw;height:100vh;margin-right:50px;padding-left:3rem;border-radius:10px;background:transparent;-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:flex}.slider>span>a[data-v-16c82557],.slides>div[data-v-16c82557]{position:relative;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.slider>span>a[data-v-16c82557]{display:-webkit-inline-box;display:inline-flex;width:1.5rem;height:1.5rem;background:#fff;text-decoration:none;border-radius:50%;margin:0 0 .5rem}.slider>a[data-v-16c82557]:active{top:1px}.slider>a[data-v-16c82557]:focus{background:#aaa}",""]),t.exports=e},168:function(t,e,r){"use strict";var o=r(162);r.n(o).a},169:function(t,e,r){(e=r(36)(!1)).push([t.i,".rooted[data-v-3d3d6cfc]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath fill='%231a422e' fill-opacity='.25' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'/%3E%3C/svg%3E\")}",""]),t.exports=e},174:function(t,e,r){"use strict";r.r(e);var o={name:"CarouselDemo",components:{Scard:r(165).a}},n=(r(166),r(18)),l={components:{CarouselDemo:Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"slider"},[this._m(0),this._v(" "),e("div",{staticClass:"slides"},this._l(5,(function(i){return e("div",{key:i,attrs:{id:"slide-"+i.toString()}},[e("Scard")],1)})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"hidden w-auto h-auto absolute z-50 ml-10 mt-2"},[r("a",{attrs:{href:"#slide-1"}},[t._v("1")]),t._v(" "),r("a",{attrs:{href:"#slide-2"}},[t._v("2")]),t._v(" "),r("a",{attrs:{href:"#slide-3"}},[t._v("3")]),t._v(" "),r("a",{attrs:{href:"#slide-4"}},[t._v("4")]),t._v(" "),r("a",{attrs:{href:"#slide-5"}},[t._v("5")])])}],!1,null,"16c82557",null).exports}},c=(r(168),Object(n.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rooted flex w-full h-screen bg-green-700 justify-center items-center"},[e("CarouselDemo",{staticStyle:{"border-radius":"10px",overflow:"hidden"}})],1)}),[],!1,null,"3d3d6cfc",null));e.default=c.exports}}]);