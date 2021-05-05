(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1777],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36178:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(7560),o=t(98283),i=(t(2784),t(30876)),a={id:"column-hover",title:"\u5217\u9ad8\u4eae"},l={unversionedId:"pipeline/features/column-hover",id:"pipeline/features/column-hover",isDocsHomePage:!1,title:"\u5217\u9ad8\u4eae",description:"\u9f20\u6807\u60ac\u505c\u5728\u8868\u683c\u4e0a\u65f6\uff0c\u9ad8\u4eae\u5355\u5143\u683c\u6240\u5728\u7684\u5217\u3002",source:"@site/docs/pipeline/features/column-hover.mdx",sourceDirName:"pipeline/features",slug:"/pipeline/features/column-hover",permalink:"/docs/pipeline/features/column-hover",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/pipeline/features/column-hover.mdx",version:"current",frontMatter:{id:"column-hover",title:"\u5217\u9ad8\u4eae"},sidebar:"sidebar",previous:{title:"\u6811\u5f62\u9009\u62e9",permalink:"/docs/pipeline/features/tree-select"},next:{title:"\u5217\u8303\u56f4\u9ad8\u4eae",permalink:"/docs/pipeline/features/column-range-hover"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[]}],u={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u9f20\u6807\u60ac\u505c\u5728\u8868\u683c\u4e0a\u65f6\uff0c\u9ad8\u4eae\u5355\u5143\u683c\u6240\u5728\u7684\u5217\u3002"),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function \u5217\u9ad8\u4eae() {\n  const dataSource = assets.biz.dataSource6\n  const columns = assets.biz.columns6\n  const pipeline = useTablePipeline({ components: fusion }).input({ dataSource, columns }).use(features.columnHover())\n\n  return <BaseTable {...pipeline.getProps()} />\n}\n")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"pipeline.use(features.columnHover(options))\n")),(0,i.kt)("p",null,"options \u7ed3\u6784\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ColumnHoverFeatureOptions {\n  /** \u9f20\u6807\u60ac\u505c\u7684\u989c\u8272\uff0c\u9ed8\u8ba4\u4e3a 'var(--hover-bgcolor)' */\n  hoverColor?: string\n\n  /** \u975e\u53d7\u63a7\u7528\u6cd5\uff1a\u9ed8\u8ba4\u7684 colIndex */\n  defaultHoverColIndex?: number\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1a\u5f53\u524d\u9f20\u6807\u60ac\u505c\u5217\u7684\u4e0b\u6807\uff08colIndex) */\n  hoverColIndex?: number\n\n  /** \u53d7\u63a7\u7528\u6cd5\uff1acolIndex \u6539\u53d8\u7684\u56de\u8c03 */\n  onChangeHoverColIndex?(nextColIndex: number): void\n}\n")))}p.isMDXComponent=!0}}]);