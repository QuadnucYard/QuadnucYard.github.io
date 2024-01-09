import{_ as t}from"./app-iu28kjPy.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://fdjeeu6j.api.lncldglobal.com"};const i=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-iu28kjPy.js").then(r=>r.M),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
