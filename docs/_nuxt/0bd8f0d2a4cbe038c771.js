(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(t,e,o){t.exports=o.p+"img/8c16e18.png"},151:function(t,e,o){var content=o(160);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("0954c6dc",content,!0,{sourceMap:!1})},152:function(t,e,o){t.exports=o.p+"img/8a4d283.png"},153:function(t,e,o){t.exports=o.p+"img/13cf195.png"},154:function(t,e,o){t.exports=o.p+"img/b1960e1.png"},155:function(t,e,o){t.exports=o.p+"img/d914ed0.png"},156:function(t,e,o){t.exports=o.p+"img/c1062cb.png"},157:function(t,e,o){t.exports=o.p+"img/2883518.png"},158:function(t,e,o){t.exports=o.p+"img/cd4ef18.png"},159:function(t,e,o){"use strict";var r=o(151);o.n(r).a},160:function(t,e,o){(e=o(36)(!1)).push([t.i,".primary[data-v-251fc791]{fill:#f1f1f1}.secondary[data-v-251fc791]{fill:#888}*[data-v-251fc791]{box-sizing:border-box}body[data-v-251fc791],html[data-v-251fc791]{height:100%}body[data-v-251fc791]{display:grid;grid-template-rows:1fr;background-color:#01e37f}img[data-v-251fc791]{max-width:100%}.product[data-v-251fc791]{display:grid;grid-template-columns:.9fr 1fr;min-width:600px}.product__photo[data-v-251fc791]{position:relative}.photo-container[data-v-251fc791]{position:absolute;left:-2.5rem;display:grid;grid-template-rows:1fr;width:100%;height:100%;border-radius:6px}.photo-main[data-v-251fc791]{border-radius:6px 6px 0 0;background-color:#9be010;background:radial-gradient(#f6e05e,#ecc94b)}.photo-main .controls[data-v-251fc791]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;color:#fff;padding:.8rem;margin-top:-4rem;position:absolute}.photo-main .controls i[data-v-251fc791]{cursor:pointer}.photo-main img[data-v-251fc791]{position:absolute;left:-4.5rem;top:3rem;max-width:94%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.shadowed[data-v-251fc791]{-webkit-filter:drop-shadow(1px 20px 10px rgba(0,0,0,.4));filter:drop-shadow(1px 20px 10px rgba(0,0,0,.4));-ms-filter:\"progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')\";filter:\"progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')\"}.photo-album[data-v-251fc791]{padding:.7em 1rem;border-radius:0 0 6px 6px;background-color:#fff}.photo-album ul[data-v-251fc791]{display:-webkit-box;display:flex;justify-content:space-around}.photo-album li[data-v-251fc791]{float:left;padding:7px;border-radius:3px}.product__info[data-v-251fc791]{padding:.8em 0}.title h1[data-v-251fc791]{margin-bottom:.1rem;color:#4c4c4c;font-size:1.5rem;font-weight:900}.title span[data-v-251fc791]{font-size:.7rem;color:#a6a6a6}.variant[data-v-251fc791]{overflow:auto}.variant h3[data-v-251fc791]{margin-bottom:1.1rem}.variant li[data-v-251fc791]{float:left;width:48px;height:48px;padding:3px;border-radius:3px;cursor:pointer}.variant li[data-v-251fc791]:not(:first-child){margin-left:.1rem}.description[data-v-251fc791]{clear:left;margin:2em 0}.buy--btn[data-v-251fc791]{padding:1.5em 3.1rem;border:none;border-radius:7px;font-size:.8rem;font-weight:700;letter-spacing:1.3px;color:#fff;background-color:#ff3f40;box-shadow:2px 2px 25px -7px #4c4c4c;cursor:pointer}.buy--btn[data-v-251fc791]:active{-webkit-transform:scale(.97);transform:scale(.97)}footer[data-v-251fc791]{padding:1rem;text-align:center;color:#fff}footer a[data-v-251fc791]{color:#4c4c4c}footer a[data-v-251fc791]:hover{color:#ff3f40}",""]),t.exports=e},165:function(t,e,o){"use strict";var r={name:"Scard",props:{info:{type:Object,default:function(){return{title:"Retro Arcade Cabinets",choices:[o(153),o(154)],features:["Classic arcade controls","100's of classic games","Customizable art panels","Hand-crafted wooden cabinet"],link:"https://pooltablestore.com/games-arcade-machines/arcade-machines/",pages:[{ind:0,pid:"p0",active:!0,title:"pac-man",data:[o(150),o(155),o(156)]},{ind:1,pid:"p1",active:!1,title:"street fighter",data:[o(152),o(157),o(158)]}]}}}},data:function(){return{optionSet:0,selected:o(150)}},watch:{optionSet:function(){0===this.optionSet?this.selected=o(150):1===this.optionSet&&(this.selected=o(152));for(var t=this.info.pages,i=0;i<t.length;i++)i!==this.optionSet?t[i].active=!1:t[i].active=!0}},methods:{clickHandler:function(t){this.selected=t,console.log("worked (individual)!")},clickHandler2:function(t){this.optionSet=t,console.log("worked (game style)!")}}},c=(o(159),o(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"productRoot"},[o("section",{staticClass:"product max-w-lg bg-white rounded py-10"},[t._l(t.info.pages,(function(e,i){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"page.active"}],key:i,staticClass:"product__photo"},[o("div",{staticClass:"photo-container shadow-lg"},[o("div",{staticClass:"photo-main"},[o("div",{staticClass:"controls"},[o("svg",{staticClass:"w-8 mr-4 icon-mail",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{staticClass:"primary",attrs:{d:"M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"}}),o("path",{staticClass:"primary",attrs:{d:"M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"}})]),t._v(" "),o("svg",{staticClass:"w-8 icon-information",staticStyle:{"margin-left":"11rem"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{staticClass:"primary",attrs:{d:"M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"}}),o("path",{staticClass:"secondary",attrs:{d:"M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}})])]),t._v(" "),t._l(e.data,(function(e){return o("img",{directives:[{name:"show",rawName:"v-show",value:t.selected===e,expression:"selected === pic"}],staticClass:"w-auto ml-4 shadowed",staticStyle:{height:"23rem"},attrs:{src:e,alt:"green apple slice"}})})),t._v(" "),t._m(0,!0)],2),t._v(" "),o("div",{staticClass:"photo-album"},[o("ul",t._l(e.data,(function(img,e){return o("li",{key:e,staticClass:"w-auto border-2 hover:border-blue-600 transition-colors cursor-pointer",class:[img===t.selected?"border-gray-600":"w-auto"],attrs:{draggable:"false"},on:{click:function(e){return t.clickHandler(img)}}},[o("img",{staticClass:"-mt-1 h-12 w-auto",attrs:{src:img,alt:"green apple",draggable:"false"}})])})),0)])])])})),t._v(" "),o("div",{staticClass:"product__info"},[o("div",{staticClass:"title"},[o("h1",[t._v(t._s(t.info.title))]),t._v(" "),o("span",[t._v("SKU: 123235")])]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"variant"},[o("h3",{staticClass:"mb-4 font-semibold text-sm text-gray-800"},[t._v("\n          Select an option:\n        ")]),t._v(" "),o("ul",t._l(t.info.choices,(function(img,i){return o("li",{key:i,staticClass:"mx-1 border-2 shadow-md",class:[i===t.optionSet?"border-green-600":"w-auto"],attrs:{draggable:"false"},on:{click:function(e){return t.clickHandler2(i)}}},[o("img",{class:[2===i?"w-12 ml-0":"w-auto"],attrs:{src:img,alt:"red ghost",draggable:"false"}})])})),0)]),t._v(" "),o("div",{staticClass:"description"},[o("h3",{staticClass:"mb-4 font-semibold text-sm text-gray-800"},[t._v("\n          Features:\n        ")]),t._v(" "),t._l(t.info.features,(function(e,i){return o("ul",{key:i,staticClass:"list-reset text-black mb-2 px-2"},[o("li",{staticClass:"flex items-center mb-3 text-xs"},[o("svg",{staticClass:"flex-none w-6 mr-2 fill-current text-blue-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}})]),t._v("\n            "+t._s(e)+"\n          ")])])}))],2),t._v(" "),o("a",{staticClass:"px-20 text-xl font-bold py-3 rounded shadow bg-blue-700 text-white text-center",attrs:{href:t.info.link}},[t._v("\n        See More\n      ")])])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"absolute ml-40 mt-24 bg-white rounded-full text-gray-800 px-4 py-4 text-center border-4 border-gray-400 hover:border-yellow-600 cursor-pointer focus:outline-none shadow transition-colors"},[e("p",{staticClass:"text-3xl font-extrabold"},[this._v("100's")]),e("p",{staticClass:"text-lg font-semibold -mt-1 text-gray-700"},[this._v(" of titles!")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"my-0"},[o("div",{staticClass:"block mt-4 opacity-0"},[o("span",{staticClass:"text-6xl text-gray-300 -mt-6 ml-4 z-10"},[t._v("$")]),t._v(" "),o("span",{staticClass:"ml-10 z-20 fixed font-black text-gray-800 text-4xl"},[t._v("299.99")])]),t._v(" "),o("div",{staticClass:"absolute ml-16 -mt-8 hidden"},[o("span",{staticClass:"px-8 ml-1 font-semibold text-green-500 text-base"},[t._v("25% off!")])]),t._v(" "),o("div",{staticClass:"absolute -mt-32 text-right"},[o("span",{staticClass:"mt-10 mt-2 z-20 fixed font-bold text-gray-600 text-xl pr-0"},[t._v("$ 399.99")]),o("div",{staticClass:"absolute w-20 h-1 rounded bg-red-500 opacity-50",staticStyle:{"margin-top":"3.25rem"}})]),t._v(" "),o("div",{staticClass:"absolute -mt-20"},[o("span",{staticClass:"hidden absolute text-gray-700 -mt-6 z-10",staticStyle:{"font-size":"4rem","font-weight":"600"}},[t._v("$")]),t._v(" "),o("span",{staticClass:"ml-0 mt-3 z-20 fixed font-black text-gray-700 text-3xl"},[t._v("$ 299.99")])])])}],!1,null,"251fc791",null);e.a=component.exports},176:function(t,e,o){"use strict";o.r(e);var r={components:{Scard:o(165).a}},c=o(18),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-gray-400 h-screen flex justify-center items-center"},[e("Scard")],1)}),[],!1,null,null,null);e.default=component.exports}}]);