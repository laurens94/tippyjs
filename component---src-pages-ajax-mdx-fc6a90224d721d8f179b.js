(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{211:function(e,a,n){"use strict";n.r(a),n.d(a,"default",function(){return E}),n.d(a,"_frontmatter",function(){return T});n(52);var t=n(24),o=n.n(t),p=n(7),s=n.n(p),m=n(0),c=n.n(m),r=n(9),l=n(225),N=n(3),i=n(104),u=n(106),g=n(1),d={},E=function(e){function a(a){var n;return(n=e.call(this,a)||this).layout=l.a,n}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,n=o()(e,["components"]);return c.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},d,n),components:a},c.a.createElement(r.MDXTag,{name:"p",components:a},"Initiating AJAX requests is facilitated by lifecycle functions:"),c.a.createElement(r.MDXTag,{name:"ul",components:a},c.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"li",props:{className:"language-text"}},"onShow()")),c.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"li",props:{className:"language-text"}},"onMount()")),c.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"li",props:{className:"language-text"}},"onShown()")),c.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"li",props:{className:"language-text"}},"onHide()")),c.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"li",props:{className:"language-text"}},"onHidden()"))),c.a.createElement(r.MDXTag,{name:"p",components:a},"This allows you to do very powerful things. For example, let's say you wanted to\nshow a new image inside a tooltip each time it gets shown:"),c.a.createElement(g.c,null,c.a.createElement(i.a,null,"Hover for a new image")),c.a.createElement(r.MDXTag,{name:"p",components:a},"Let's walk through a little tutorial to learn how to do this."),c.a.createElement(r.MDXTag,{name:"p",components:a},"First, let's setup our HTML:"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"html"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-html"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-html"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token tag"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token tag"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"<"),"button")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-name"}},"id"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-value"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"="),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},'"'),"ajax-tippy",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},'"')),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},">")),"Hover for a new image",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token tag"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token tag"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"</"),"button"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},">"))))),c.a.createElement(r.MDXTag,{name:"p",components:a},"Now, let's add some JavaScript:"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"tippy"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'#ajax-tippy'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  content",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'Loading...'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  animateFill",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  animation",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'fade'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// This option is recommended if your tooltip changes size while showing"),"\n  flipOnUpdate",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"true"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")))),c.a.createElement(r.MDXTag,{name:"p",components:a},"Here's the result so far:"),c.a.createElement(g.c,null,c.a.createElement(N.b,{content:"Loading...",animation:"fade",animateFill:!1},c.a.createElement(g.a,null,"Hover for a new image"))),c.a.createElement(r.MDXTag,{name:"p",components:a},"To initiate the AJAX request every time the tippy shows, use the ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"onShow"),"\nlifecycle:"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"tippy"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'#ajax-tippy'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  content",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'Loading...'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  animateFill",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  animation",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'fade'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  flipOnUpdate",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"true"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"onShow"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Code here is executed every time the tippy shows"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")))),c.a.createElement(r.MDXTag,{name:"p",components:a},"Modern browsers support the ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"fetch")," API, so we'll use it for this example\nbecause it's cleaner than ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"XMLHttpRequest"),". We are using an Unsplash API to\nfetch a random 200x200 image:"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"tippy"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'#ajax-tippy'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// ..."),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"onShow"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"fetch"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'https://unsplash.it/200/?random'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"then"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"response ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," response",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"blob"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"then"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"blob ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Convert the blob into a URL"),"\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," url ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token constant"}},"URL"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"createObjectURL"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"blob",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Create an image"),"\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," image ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"new")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"Image"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n        image",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"width ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token number"}},"200"),"\n        image",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"height ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token number"}},"200"),"\n        image",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"style",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"display ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'block'"),"\n        image",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"src ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," url\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Update the tippy content with the image"),"\n        instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"setContent"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"image",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")))),c.a.createElement(g.c,null,c.a.createElement(N.b,{content:"Loading...",animation:"fade",animateFill:!1,onShow:function(e){fetch("https://unsplash.it/200/?random").then(function(e){return e.blob()}).then(function(a){var n=URL.createObjectURL(a),t=new Image;t.width=200,t.height=200,t.style.display="block",t.src=n,e.setContent(t)}).catch(function(a){e.setContent("Request failed. "+a)})}},c.a.createElement(g.a,null,"Hover for a new image"))),c.a.createElement(r.MDXTag,{name:"p",components:a},"There are currently two problems with this:"),c.a.createElement(r.MDXTag,{name:"ul",components:a},c.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"When the tippy is hidden, it doesn't reset back to ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"li",props:{className:"language-text"}},"Loading...")),c.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"If you quickly hover in and out of the tippy, it initiates many different\nrequests and each image rapidly replaces the old one as each request finishes.")),c.a.createElement(r.MDXTag,{name:"p",components:a},"The first one can be solved by using the ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"onHidden")," lifecycle, which is executed\nonce the tippy fully transitions out and is unmounted from the DOM:"),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"tippy"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'#ajax-tippy'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// ..."),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"onHidden"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"setContent"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'Loading...'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")))),c.a.createElement(r.MDXTag,{name:"p",components:a},"The second one is trickier and requires using state. This will let us know the\ncurrent condition the tooltip is in."),c.a.createElement(r.MDXTag,{name:"div",components:a,props:{className:"gatsby-highlight","data-language":"js"}},c.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"div",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js"}},c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"tippy"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'#ajax-tippy'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// ..."),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"onShow"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// We can monkey-patch the instance's state object with our own state"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"if")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ajax ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"===")," undefined",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n      instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ajax ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        isFetching",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n        canFetch",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"true"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Now we will avoid initiating a new request unless the old one"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// finished (`isFetching`)."),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// We also only want to initiate a request if the tooltip has been"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// reset back to Loading... (`canFetch`)."),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"if")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ajax",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"isFetching ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"||")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"!"),"instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ajax",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"canFetch",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"return"),"\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n\n    ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"fetch"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'https://unsplash.it/200/?random'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"then"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"response ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," response",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"blob"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"then"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"blob ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// ..."),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"catch"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"error ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// ..."),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"finally"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Make sure to set it back to false so new requests can be"),"\n        ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// initiated"),"\n        instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ajax",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"isFetching ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"false"),"\n      ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"onHidden"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n    instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"setContent"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'Loading...'"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),"\n    instance",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"ajax",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"canFetch ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token boolean"}},"true"),"\n  ",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n",c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),c.a.createElement(r.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")))),c.a.createElement(r.MDXTag,{name:"p",components:a},"We use state to keep track of the request's status. Without the state booleans,\nunexpected effects may occur, such as initiating too many requests before\nwaiting for the previous one to finish, or showing new images before the tooltip\nhides and resets back to ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"Loading..."),', both of which appear "buggy".'),c.a.createElement(r.MDXTag,{name:"p",components:a},"Currently, the image instantly replaces the ",c.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"p",props:{className:"language-text"}},"Loading...")," text without any smooth\ntransition. How do we make it so the tooltip smoothly transitions in height?"),c.a.createElement(g.c,null,c.a.createElement(u.a,null)),c.a.createElement(r.MDXTag,{name:"p",components:a},"To look at example code solving this dynamically (i.e. not knowing the height of\nthe image or initial size of the tooltip) view the\n",c.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://codepen.io/atomiks/pen/LgjMbW"}},"CodePen demo"),"."))},a}(c.a.Component);E.isMDXComponent=!0;var T={}}}]);
//# sourceMappingURL=component---src-pages-ajax-mdx-fc6a90224d721d8f179b.js.map