"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5553],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7784:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"installation",title:"Installation and setup",sidebar_label:"Installation and setup"},u=void 0,c={unversionedId:"installation",id:"installation",title:"Installation and setup",description:"Make sure you have npm, and node installed on your system",source:"@site/docs/Installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/ThePebblesFr/cozie-website/tree/master/my-website/docs/Installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation and setup",sidebar_label:"Installation and setup"},sidebar:"tutorialSidebar",previous:{title:"Creating your own Cozie App",permalink:"/docs/app-creation-setup"},next:{title:"Fitbit SDK",permalink:"/docs/intro-fitbit-sdk"}},p={},s=[],d={toc:s};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("iframe",{width:"100%",height:"400",src:"https://www.youtube.com/watch?v=oLrP8FDAQd8&list=PLkQs5WJXVHbiBDjmv-1tBYNUQOkmNCctA&index=2&t=0s",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"Make sure you have npm, and node installed on your system"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Node: https://nodejs.org/en/download/\nnpm: https://www.npmjs.com/get-npm\nfitbit cli: https://dev.fitbit.com/build/guides/command-line-interface/\nFitbit OS Simulator: https://dev.fitbit.com/getting-started/\n")),(0,o.kt)("p",null,"Once that is setup, clone and install the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git init\ngit clone git@github.com:cozie-app/cozie.git\ncd cozie\nnpm install\n")),(0,o.kt)("p",null,"You can then open the Fitbit OS Simulator.\nIn order to run the project, you'll have to build and install first.\nOpen a fitbit shell."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx fitbit\n")),(0,o.kt)("p",null,"From there, build the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fitbit$ build\n")),(0,o.kt)("p",null,"And then run install, which will open the browser and log you into your fitbit developer account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"fitbit$ install\n")),(0,o.kt)("p",null,"The simulator should pick up on this and a new app should be listed on the right. Once you power up the simulator, the app will be running on it."))}m.isMDXComponent=!0}}]);