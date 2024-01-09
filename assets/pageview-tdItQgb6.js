import{_ as t}from"./app-gR0I4E4L.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://quadnucyard-blog.vercel.app"};const o=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-gR0I4E4L.js").then(r=>r.M),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
