const e=JSON.parse('{"key":"v-9180eb2a","path":"/posts/vue/vite-quasar-theme.html","title":"Quasar 主题色改变（vite-plugin）","lang":"en-US","frontmatter":{"category":["vue"],"tag":["frontend","quasar","css"],"isOriginal":true,"date":"2023-09-16T00:00:00.000Z","description":"Quasar 主题色改变（vite-plugin） 有些时候，我们希望能够让用户自定义网页的主题色，对于 Quasar 来说，特别是 primary。更进一步，我们希望主题色分为多阶（好比提供的 red-1，red-2 系列），均能同步改变。 Quasar 提供了 getCssVar 和 setCssVar 两个设置 CSS 变量的函数，其效果是在 DOM 根结点的 style 加上对应的变量声明。 例如 setCssVar(\\"primary\\", \\"red\\")，那么它会设置 --q-primary: red，加上一个 --q- 前缀。这样所有的 primary color 都会变成设定的颜色。","head":[["meta",{"property":"og:url","content":"https://QuadnucYard.github.io/posts/vue/vite-quasar-theme.html"}],["meta",{"property":"og:title","content":"Quasar 主题色改变（vite-plugin）"}],["meta",{"property":"og:description","content":"Quasar 主题色改变（vite-plugin） 有些时候，我们希望能够让用户自定义网页的主题色，对于 Quasar 来说，特别是 primary。更进一步，我们希望主题色分为多阶（好比提供的 red-1，red-2 系列），均能同步改变。 Quasar 提供了 getCssVar 和 setCssVar 两个设置 CSS 变量的函数，其效果是在 DOM 根结点的 style 加上对应的变量声明。 例如 setCssVar(\\"primary\\", \\"red\\")，那么它会设置 --q-primary: red，加上一个 --q- 前缀。这样所有的 primary color 都会变成设定的颜色。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-07T14:23:37.000Z"}],["meta",{"property":"article:author","content":"Stankle of QuadnucYard"}],["meta",{"property":"article:tag","content":"frontend"}],["meta",{"property":"article:tag","content":"quasar"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:published_time","content":"2023-09-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T14:23:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Quasar 主题色改变（vite-plugin）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-07T14:23:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Stankle of QuadnucYard\\",\\"url\\":\\"https://github.com/QuadnucYard\\"}]}"]]},"headers":[],"git":{"createdTime":1704637417000,"updatedTime":1704637417000,"contributors":[{"name":"QuadnucYard","email":"2380433991@qq.com","commits":1}]},"readingTime":{"minutes":1.35,"words":406},"filePathRelative":"posts/vue/vite-quasar-theme.md","localizedDate":"September 16, 2023","excerpt":"<h1> Quasar 主题色改变（vite-plugin）</h1>\\n<p>有些时候，我们希望能够让用户自定义网页的主题色，对于 Quasar 来说，特别是 <code>primary</code>。更进一步，我们希望主题色分为多阶（好比提供的 <code>red-1</code>，<code>red-2</code> 系列），均能同步改变。</p>\\n<p>Quasar 提供了 <code>getCssVar</code> 和 <code>setCssVar</code> 两个设置 CSS 变量的函数，其效果是在 DOM 根结点的 style 加上对应的变量声明。</p>\\n<p>例如 <code>setCssVar(\\"primary\\", \\"red\\")</code>，那么它会设置 <code>--q-primary: red</code>，加上一个 <code>--q-</code> 前缀。这样所有的 primary color 都会变成设定的颜色。</p>","autoDesc":true}');export{e as data};