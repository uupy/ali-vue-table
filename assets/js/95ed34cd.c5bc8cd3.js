(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[128],{30876:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(b,o(o({ref:n},p),{},{components:t})):a.createElement(b,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5829:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return p}});var a=t(7560),r=t(98283),l=(t(2784),t(30876)),o={id:"theming",title:"\u8868\u683c\u4e3b\u9898"},i={unversionedId:"table/theming",id:"table/theming",isDocsHomePage:!1,title:"\u8868\u683c\u4e3b\u9898",description:"CSS \u53d8\u91cf",source:"@site/docs/table/theming.mdx",sourceDirName:"table",slug:"/table/theming",permalink:"/docs/table/theming",editUrl:"https://github.com/alibaba/ali-react-table/edit/master/packages/website/docs/table/theming.mdx",version:"current",frontMatter:{id:"theming",title:"\u8868\u683c\u4e3b\u9898"},sidebar:"sidebar",previous:{title:"\u8fdb\u9636\u7528\u6cd5",permalink:"/docs/table/advanced-usage"},next:{title:"BaseTable API",permalink:"/docs/table/api"}},s=[{value:"CSS \u53d8\u91cf",id:"css-\u53d8\u91cf",children:[]},{value:"Ant Design \u98ce\u683c",id:"ant-design-\u98ce\u683c",children:[]},{value:"\u4e3b\u9898\u5207\u6362\u793a\u4f8b",id:"\u4e3b\u9898\u5207\u6362\u793a\u4f8b",children:[]},{value:"\u81ea\u5b9a\u4e49\u6eda\u52a8\u6761\u6837\u5f0f",id:"\u81ea\u5b9a\u4e49\u6eda\u52a8\u6761\u6837\u5f0f",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"css-\u53d8\u91cf"},"CSS \u53d8\u91cf"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<BaseTable />")," \u4e2d\u5927\u90e8\u5206\u6837\u5f0f\u90fd\u662f\u901a\u8fc7 CSS variables \u6765\u5b9a\u4e49\u7684\u3002 \u901a\u8fc7\u8986\u76d6 CSS variables \u7684\u503c\uff0c\u53ef\u4ee5\u5feb\u901f\u5b9a\u5236\u51fa\u4e00\u5957\u65b0\u7684\u8868\u683c\u4e3b\u9898\u3002"),(0,l.kt)("p",null,"BaseTable \u9ed8\u8ba4\u53ea\u63d0\u4f9b\u4e86\u4eae\u8272\u4e3b\u9898\uff0c\u4e0b\u9762\u7684 WebsiteBaseTable.tsx \u5c55\u793a\u4e86\u5728\u6587\u6863\u7f51\u7ad9\u4e2d\uff0c\u6211\u4eec\u662f\u5982\u4f55\u5b9e\u73b0\u6697\u8272\u4e3b\u9898\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="WebsiteBaseTable.tsx"',title:'"WebsiteBaseTable.tsx"'},"import useThemeContext from '@theme/hooks/useThemeContext'\nimport { BaseTable, BaseTableProps } from 'ali-react-table'\nimport cx from 'classnames'\nimport React from 'react'\nimport styled from 'styled-components'\n\nconst DarkSupportBaseTable: any = styled(BaseTable)`\n  &.dark {\n    --bgcolor: #333;\n    --header-bgcolor: #45494f;\n    --hover-bgcolor: #46484a;\n    --header-hover-bgcolor: #606164;\n    --highlight-bgcolor: #191a1b;\n    --header-highlight-bgcolor: #191a1b;\n    --color: #dadde1;\n    --header-color: #dadde1;\n    --lock-shadow: rgb(37 37 37 / 0.5) 0 0 6px 2px;\n    --border-color: #3c4045;\n  }\n`\n\nexport const WebsiteBaseTable = React.forwardRef<BaseTable, BaseTableProps>((props, ref) => {\n  const { isDarkTheme } = useThemeContext()\n\n  return <DarkSupportBaseTable ref={ref} className={cx({ dark: isDarkTheme }, props.className)} {...props} />\n})\n")),(0,l.kt)("h2",{id:"ant-design-\u98ce\u683c"},"Ant Design \u98ce\u683c"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u662f antd \u7528\u6237\uff0c\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/ali-react-table/blob/master/packages/website/src/assets/AntdBaseTable.tsx"},"\u8be5\u6587\u4ef6"),"\u6765\u5b9e\u73b0 antd \u6837\u5f0f\u7684\u8868\u683c\u7ec4\u4ef6\u3002\u8be5\u6587\u4ef6\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"AntdBaseTable")," \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"isLoading={true}")," Ant Design \u6570\u636e\u52a0\u8f7d\u6548\u679c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'className="bordered"')," \u5e26\u8fb9\u6846\u6837\u5f0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'className="compact"')," \u7d27\u51d1\u6837\u5f0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'className="dark"')," \u6697\u8272\u4e3b\u9898")),(0,l.kt)("h2",{id:"\u4e3b\u9898\u5207\u6362\u793a\u4f8b"},"\u4e3b\u9898\u5207\u6362\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function \u4e3b\u9898\u5207\u6362\u793a\u4f8b() {\n  const { dataSource1, operationCol } = assets.biz\n\n  const nameCol = { code: 'name', width: 200, name: '\u516c\u53f8\u540d\u79f0' }\n  const repeats = [\n    { code: 'amount', width: 160, align: 'right', name: '\u91d1\u989d' },\n    { code: 'dept', width: 160, name: '\u91d1\u878d\u673a\u6784' },\n    { code: 'applier', width: 120, name: '\u7533\u8bf7\u4eba' },\n  ]\n\n  function repeat(arr, n) {\n    let result = []\n    for (let i = 0; i < n; i++) {\n      result = result.concat(arr)\n    }\n    return result\n  }\n\n  const [theme, setTheme] = useState('default')\n\n  let Table = BaseTable\n  if (theme === 'antd') {\n    Table = assets.AntdBaseTable\n  } else if (theme === 'hippo') {\n    Table = assets.HippoBaseTable\n  }\n\n  const { isDarkTheme } = useThemeContext()\n\n  return (\n    <div>\n      <div>\n        <span style={{ marginRight: 24 }}>\u9009\u62e9\u4e3b\u9898\uff1a</span>\n        <assets.RadioButtonGroup\n          value={theme}\n          onChange={setTheme}\n          dataSource={['default', 'antd', 'hippo'].map((v) => ({ label: v, value: v }))}\n        />\n      </div>\n      <Table\n        style={{ marginTop: 12, maxWidth: 800, height: 400, overflow: 'auto' }}\n        className={isDarkTheme ? 'dark' : ''}\n        dataSource={repeat(dataSource1, 5)}\n        columns={[\n          {\n            name: '\u5e8f\u53f7',\n            width: 70,\n            align: 'right',\n            lock: true,\n            getValue(_, rowIndex) {\n              return String(rowIndex + 1)\n            },\n          },\n          nameCol,\n          ...repeat(repeats, 5),\n          operationCol,\n        ]}\n      />\n    </div>\n  )\n}\n")),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u6eda\u52a8\u6761\u6837\u5f0f"},"\u81ea\u5b9a\u4e49\u6eda\u52a8\u6761\u6837\u5f0f"),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u5c55\u793a\u4e86\u5982\u4f55\u5bf9\u8868\u683c\u5185\u7684\u6eda\u52a8\u6761\u6837\u5f0f\u8fdb\u884c\u5b9a\u5236\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7eb5\u5411\u6eda\u52a8\u6761\uff1a\u8868\u683c\u6700\u5916\u5c42\u7684 div \u4f1a\u5305\u542b\u8868\u683c\u7eb5\u5411\u7684\u6eda\u52a8\u6761\uff0c\u6ce8\u610f\u4e0b\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"&")," \u9009\u62e9\u5668\u53ef\u4ee5\u5339\u914d\u5230\u8be5 div\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6a2a\u5411\u6eda\u52a8\u6761\uff1a\u8868\u683c\u5185\u6a2a\u5411\u6eda\u52a8\u6761\u4f1a\u51fa\u73b0\u5728\u591a\u4e2a div \u4e2d\uff0c\u7ec4\u4ef6\u4e3a\u8fd9\u4e9b div \u5747\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},".art-horizontal-scroll-container")," CSS \u7c7b\u540d\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u6539\u53d8\u6a2a\u5411\u6eda\u52a8\u6761\u7684\u9ad8\u5ea6\u4e4b\u540e\uff0c\u9700\u8981\u76f8\u5e94\u5730\u4e3a\u8868\u683c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"props.stickyScrollHeight={newHeight}"))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const MyTable = styled(BaseTable)`\n  &,\n  .art-horizontal-scroll-container {\n    ::-webkit-scrollbar {\n      width: 10px;\n      height: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n      background: #ccc;\n      border: 1px solid #eaeaea;\n\n      &:hover {\n        background: #6e6e6e;\n      }\n    }\n\n    ::-webkit-scrollbar-track {\n      background: #eaeaea;\n    }\n  }\n`\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function \u81ea\u5b9a\u4e49\u6eda\u52a8\u6761\u6837\u5f0f() {\n  const { dataSource1 } = assets.biz\n\n  const repeats = [\n    { code: 'amount', width: 160, align: 'right', name: '\u91d1\u989d' },\n    { code: 'dept', width: 160, name: '\u91d1\u878d\u673a\u6784' },\n    { code: 'applier', width: 120, name: '\u7533\u8bf7\u4eba' },\n  ]\n\n  function repeat(arr, n) {\n    let result = []\n    for (let i = 0; i < n; i++) {\n      result = result.concat(arr)\n    }\n    return result\n  }\n\n  return (\n    <div>\n      <BaseTable\n        dataSource={repeat(dataSource1, 5)}\n        columns={[{ lock: true, code: 'name', width: 200, name: '\u516c\u53f8\u540d\u79f0' }, ...repeat(repeats, 5)]}\n        stickyScrollHeight={10}\n        // \u8fd9\u91cc\u7684 css \u662f\u4e3a\u4e86\u5728\u6587\u6863\u7f51\u7ad9\u4e2d\u6ce8\u5165\u6837\u5f0f\uff0c\u5b9e\u9645\u4f7f\u7528\u65f6\u8bf7\u6309\u7167 styled-components \u7684\u5e38\u89c4\u7528\u6cd5\u6765\u5b9e\u73b0\u6837\u5f0f\u8986\u76d6\n        css={`\n          height: 400px;\n          overflow: auto;\n\n          &,\n          .art-horizontal-scroll-container {\n            ::-webkit-scrollbar {\n              width: 10px;\n              height: 10px;\n            }\n\n            ::-webkit-scrollbar-thumb {\n              background: #ccc;\n              border: 1px solid #eaeaea;\n\n              &:hover {\n                background: #6e6e6e;\n              }\n            }\n\n            ::-webkit-scrollbar-track {\n              background: #eaeaea;\n            }\n          }\n        `}\n      />\n    </div>\n  )\n}\n")),(0,l.kt)("p",null,"ali-react-table \u4e5f\u901a\u8fc7 Classes \u5bf9\u8c61\u66b4\u9732\u4e86\u76f8\u5173 div \u7684\u7c7b\u540d\uff0c\u63a8\u8350\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u5f15\u7528\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Classes.artTableWrapper")," \u8868\u683c\u6700\u5916\u5c42 div \u7684 CSS \u7c7b\u540d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Classes.horizontalScrollContainer")," \u8868\u683c\u5185\u51fa\u73b0\u6a2a\u5411\u6eda\u52a8\u6761 div \u7684 CSS \u7c7b\u540d")))}p.isMDXComponent=!0}}]);