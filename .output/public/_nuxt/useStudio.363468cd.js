import{a as Y,b as W,e as Z,r as x,f as ee,_ as te,h as ne,o as b,i as q,j as oe,F as ie,k as w,l as M,m as J,w as B,T as D,t as se,p as z,q as K,s as ae,v as re,x as de,y as ce,z as H,A as le,B as E,C as G,D as V,E as pe,G as ue,H as F}from"./entry.41597f29.js";import{r as ve}from"./asyncData.4f4c7ffb.js";const A=i=>(ae("data-v-31451853"),i=i(),re(),i),fe=A(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),we=A(()=>w("span",null,"Preview mode enabled",-1)),_e={key:0},he=A(()=>w("div",{id:"__preview_background"},null,-1)),me=A(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),ye=A(()=>w("p",null,"Initializing the preview...",-1)),ge={key:0},ke=A(()=>w("div",{id:"__preview_background"},null,-1)),Ce={id:"__preview_loader"},Ie=Y({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const s=i,d=["__nuxt_preview","__preview_enabled"],u=W(),g=Z(),f=x(!0),p=x(!1),n=x(!1),l=x("");let a;const _=()=>{z("previewToken").value="",K().query.preview="",window.sessionStorage.removeItem("previewToken"),window.location.reload()},R=async I=>{const m=await s.syncPreview(I);if(n.value!==!0){if(!m){setTimeout(()=>R(I),1e3);return}z("previewToken").value&&(n.value=!0,await g.replace({query:{}}),u.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&a.disconnect())}};return ee(async()=>{a=(await te(()=>import("./index.9fea434a.js"),[],import.meta.url)).connect(`${s.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:s.previewToken}});let m;a.on("connect",()=>{m=setTimeout(()=>{n.value||(m=setTimeout(()=>{l.value="Preview sync timed out",n.value=!1},3e4),a.emit("draft:requestSync"))},3e4)});const k=()=>{m&&(clearTimeout(m),m=null)};a.on("draft:sync",async P=>{if(k(),!P){try{a.once("draft:ready",()=>{a.emit("draft:requestSync")}),await s.requestPreviewSyncAPI()}catch($){switch(k(),$.response.status){case 404:l.value="Preview draft not found",n.value=!1;break;default:l.value="An error occurred while syncing preview",n.value=!1}}return}R(P)}),a.on("draft:unauthorized",()=>{k(),l.value="Unauthorized preview token",n.value=!1}),a.on("disconnect",()=>{k()}),document.body.classList.add(...d),a.on("draft:update",P=>{p.value=!0,s.syncPreview(P),p.value=!1})}),ne(()=>{document.body.classList.remove(...d)}),(I,m)=>(b(),q("div",null,[f.value?(b(),q("div",{key:0,id:"__nuxt_preview",class:oe({__preview_ready:n.value,__preview_refreshing:p.value})},[n.value?(b(),q(ie,{key:0},[fe,we,w("button",{onClick:_}," Close ")],64)):M("",!0)],2)):M("",!0),J(D,{name:"preview-loading"},{default:B(()=>[f.value&&!n.value&&!l.value?(b(),q("div",_e,[he,w("div",{id:"__preview_loader"},[me,ye,w("button",{onClick:_}," Cancel ")])])):M("",!0)]),_:1}),J(D,{name:"preview-loading"},{default:B(()=>[l.value?(b(),q("div",ge,[ke,w("div",Ce,[w("p",null,se(l.value),1),w("button",{onClick:_}," Exit preview ")])])):M("",!0)]),_:1})]))}});const Pe=de(Ie,[["__scopeId","data-v-31451853"]]),Se=(i=[],s,d)=>{const u=[...s||[]],g=[...d||[]],f=JSON.parse(JSON.stringify(i));for(const n of u)if(n.oldPath)if(g.splice(g.findIndex(a=>a.path===n.oldPath),1),u.find(a=>a.path===n.oldPath))f.push({path:n.path,parsed:n.parsed});else{const a=f.find(_=>_.path===n.oldPath);a&&(a.path=n.path,n.parsed?a.parsed=n.parsed:n.pathMeta&&["_file","_path","_id","_locale"].forEach(_=>{a.parsed[_]=n.pathMeta[_]}))}else if(n.new)f.push({path:n.path,parsed:n.parsed});else{const l=f.find(a=>a.path===n.path);l&&Object.assign(l,{path:n.path,parsed:n.parsed})}for(const n of g)f.splice(f.findIndex(l=>l.path===n.path),1);const p=new Intl.Collator(void 0,{numeric:!0});return f.sort((n,l)=>p.compare(n.path,l.path)),f},O=".studio",T={appConfig:`${O}/app.config.json`,tokensConfig:`${O}/tokens.config.json`},Te=i=>{let s;return(...d)=>(s||(s=i()),s)};function j(i,s){for(const d in i){const u=s[d];d in s||delete i[d],u!==null&&typeof u=="object"&&j(i[d],s[d])}}function Q(i,s){for(const d in s){const u=s[d];u!==null&&typeof u=="object"?(i[d]=i[d]||{},Q(i[d],u)):i[d]=u}}const xe=Te(()=>JSON.parse(JSON.stringify(G()))),$e=()=>{const i=W(),{studio:s,content:d}=ce().public,u=K(),g=xe();let f;const p=H("studio-client-db",()=>null),n=H("studio-preview-db-files",()=>[]);p.value||(i.hook("content:storage",e=>{p.value=e}),le("/non-existing-path").findOne());const l=async(e,t,c=!0)=>{const v=window.sessionStorage.getItem("previewToken"),o=await e.getKeys(`${v}:`);await Promise.all(o.map(h=>e.removeItem(h)));const r=new Set(t.map(h=>h.parsed._id.split(":").shift()));await e.setItem(`${v}$`,JSON.stringify({ignoreSources:Array.from(r)})),await Promise.all(t.map(h=>e.setItem(`${v}:${h.parsed._id}`,JSON.stringify(h.parsed))))},a=e=>{const t=E(i,G);Q(t,V(e,g)),e||j(t,g)},_=e=>{var c,v,o,r;const t=(r=(o=(v=(c=i==null?void 0:i.vueApp)==null?void 0:c._context)==null?void 0:v.config)==null?void 0:o.globalProperties)==null?void 0:r.$pinceauTheme;!t||!(t!=null&&t.updateTheme)||(f||(f=JSON.parse(JSON.stringify((t==null?void 0:t.theme.value)||{}))),E(i,t.updateTheme,[V(e,f)]))},R=async e=>{if(n.value=e.files=e.files||n.value||[],!p.value)return!1;const t=Se(e.files,e.additions,e.deletions),c=t.filter(r=>!r.path.startsWith(O));await l(p.value,c,(e.files||[]).length!==0);const v=t.find(r=>r.path===T.appConfig);a(v==null?void 0:v.parsed);const o=t.find(r=>r.path===T.tokensConfig);return _(o==null?void 0:o.parsed),U(),!0},I=async()=>{const e=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:s==null?void 0:s.apiURL,method:"POST",params:{token:e}})},m=()=>{const e=window.sessionStorage.getItem("previewToken"),t=document.createElement("div");t.id="__nuxt_preview_wrapper",document.body.appendChild(t),pe(Pe,{previewToken:e,apiURL:s==null?void 0:s.apiURL,syncPreview:R,requestPreviewSyncAPI:I}).mount(t)},k=async e=>{var v,o,r;const t=window.sessionStorage.getItem("previewToken");if(!e)return null;e=e.replace(/\/$/,"");let c=await((v=p.value)==null?void 0:v.getItem(`${t}:${e}`));return c||(c=await((o=p.value)==null?void 0:o.getItem(`cached:${e}`))),c||(c=c=await((r=p.value)==null?void 0:r.getItem(e))),c},P=e=>{var c;const t=window.sessionStorage.getItem("previewToken");p.value&&p.value.setItem(`${t}:${(c=e.parsed)==null?void 0:c._id}`,JSON.stringify(e.parsed))},$=async e=>{var c;const t=window.sessionStorage.getItem("previewToken");await((c=p.value)==null?void 0:c.removeItem(`${t}:${e}`))},U=async()=>{if(d!=null&&d.documentDriven){const{pages:e}=E(i,ue);for(const t in e.value)e.value[t]&&(e.value[t]=await k(e.value[t]._id))}E(i,ve)};return{apiURL:s==null?void 0:s.apiURL,contentStorage:p,syncPreviewFiles:l,syncPreviewAppConfig:a,syncPreviewTokensConfig:_,requestPreviewSynchronization:I,findContentWithId:k,updateContent:P,removeContentWithId:$,requestRerender:U,mountPreviewUI:m,initiateIframeCommunication:X};function X(){if(!window.parent||window.self===window.parent)return;const e=Z(),t=x("");x(!0);const c=o=>({path:o.path,query:F(o.query),params:F(o.params),fullPath:o.fullPath,meta:F(o.meta)});window.addEventListener("keydown",o=>{(o.metaKey||o.ctrlKey||o.altKey||o.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:o.key,metaKey:o.metaKey,ctrlKey:o.ctrlKey,shiftKey:o.shiftKey,altKey:o.altKey}},"*")}),window.addEventListener("message",async o=>{const{type:r,payload:h={}}=o.data||{};switch(r){case"nuxt-studio:editor:file-selected":{const y=await k(h.path);y&&(y._partial||y._path!==K().path&&(t.value=y._path,e.push(y._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:y=[],deletions:L=[]}=h;for(const C of y)await P(C);for(const C of L)await $(C.path);U();break}case"nuxt-studio:preview:sync":{R(h);break}case"nuxt-studio:config:file-changed":{const{additions:y=[],deletions:L=[]}=h,C=y.find(S=>S.path===T.appConfig);C&&a(C==null?void 0:C.parsed),L.find(S=>S.path===T.appConfig)&&a(void 0);const N=y.find(S=>S.path===T.tokensConfig);N&&_(N==null?void 0:N.parsed),L.find(S=>S.path===T.tokensConfig)&&_(void 0);break}}}),i.hook("page:finish",()=>{v()}),i.hook("content:document-driven:finish",({route:o,page:r})=>{o.meta.studio_page_contentId=r==null?void 0:r._id}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:c(K())},"*"),setTimeout(()=>{v()},100)});function v(){const o=Array.from(window.document.querySelectorAll("[data-content-id]")).map(h=>h.getAttribute("data-content-id")),r=Array.from(new Set([u.meta.studio_page_contentId,...o])).filter(Boolean);if(t.value===r[0]){t.value="";return}window.openContentInStudioEditor(r,{navigate:!0,pageContentId:u.meta.studio_page_contentId})}window.openContentInStudioEditor=(o,r={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...c(u),contentIds:o,...r}},"*")}}};export{$e as useStudio};
