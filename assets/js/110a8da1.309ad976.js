(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8409],{30876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2866:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=n(7560),i=n(98283),o=(n(2784),n(30876)),a={id:"tips",title:"\u63d0\u793a\u4fe1\u606f"},p={unversionedId:"pipeline/features/tips",id:"pipeline/features/tips",isDocsHomePage:!1,title:"\u63d0\u793a\u4fe1\u606f",description:"\u5728\u5217\u6807\u9898\u65c1\u8fb9\u5c55\u793a\u4e00\u4e2a \u2139 \u7b26\u53f7\uff0c\u9f20\u6807\u60ac\u505c\u65f6\u5c55\u793a\u63d0\u793a\u6c14\u6ce1\uff0c\u6c14\u6ce1\u5185\u5bb9\u7531 column.features.tips \u63d0\u4f9b\u3002",source:"@site/docs/pipeline/features/tips.mdx",sourceDirName:"pipeline/features",slug:"/pipeline/features/tips",permalink:"/docs/pipeline/features/tips",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/tips.mdx",version:"current",frontMatter:{id:"tips",title:"\u63d0\u793a\u4fe1\u606f"},sidebar:"sidebar",previous:{title:"\u81ea\u52a8\u5408\u5e76\u591a\u884c",permalink:"/docs/pipeline/features/auto-row-span"},next:{title:"\u62d6\u62fd\u8c03\u6574\u5217\u5bbd",permalink:"/docs/pipeline/features/column-resize"}},s=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5217\u6807\u9898\u65c1\u8fb9\u5c55\u793a\u4e00\u4e2a \u2139 \u7b26\u53f7\uff0c\u9f20\u6807\u60ac\u505c\u65f6\u5c55\u793a\u63d0\u793a\u6c14\u6ce1\uff0c\u6c14\u6ce1\u5185\u5bb9\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"column.features.tips")," \u63d0\u4f9b\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"pipeline.use(features.tips())\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"tips \u4f9d\u8d56 fusion Balloon \u6216 antd Tooltip \u7ec4\u4ef6\uff0c\u4f7f\u7528 tips \u4e4b\u524d\u9700\u8981\u901a\u8fc7 pipeline context \u8bbe\u7f6e components.Ballon \u6216 components.Tooltip\u3002")),(0,o.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function \u63d0\u793a\u4fe1\u606f() {\n  const columns = [\n    { code: 'title', name: '\u6807\u9898', width: 200, features: { tips: '\u6211\u662f\u6307\u6807\u7684\u8be6\u7ec6\u4fe1\u606f~~' } },\n    { code: 'dept', name: '\u90e8\u95e8\u540d\u79f0', width: 180, features: { tips: '\u90e8\u95e8\u540d\u79f0\u90e8\u95e8\u540d\u79f0\u90e8\u95e8\u540d\u79f0' } },\n    { code: 'dest', name: '\u56e2\u5efa\u76ee\u7684\u5730', width: 160, features: { tips: '\u56e2\u5efa\u76ee\u7684\u5730\u56e2\u5efa\u76ee\u7684\u5730' } },\n    { code: 'guide', name: '\u5f53\u5730\u5bfc\u6e38', width: 160 },\n  ]\n  const dataSource = assets.biz.dataSource4\n\n  const pipeline = useTablePipeline({ components: fusion })\n    .input({ dataSource, columns })\n    .primaryKey('id')\n    .use(features.tips())\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")))}c.isMDXComponent=!0}}]);