import{Ao as e,ya as t}from"./DORYzCLA.js";import{$t as n,Ba as r,Do as i,_a as a,ra as o,wa as s,zt as c}from"./BXC6-M4f.js";import{Ia as l,_a as u,yo as d}from"./krJXwabo.js";import{M as f,_ as p,g as m,y as h}from"#entry";async function g(e){let t=e.querySelectorAll(`img[src$=".svg"]`);for(let e of t){let t=e.src;try{let n=await fetch(t);if(!n.ok){console.warn(`Não foi possível carregar a imagem SVG: ${t}`);continue}let r=document.createElement(`div`);r.innerHTML=await n.text();let i=r.querySelector(`svg`);if(!i)continue;v(i,e),e.replaceWith(i)}catch(e){console.error(`Erro ao carregar SVG: ${t}`,e)}}}var _=[`class`,`style`,`width`,`height`];function v(e,t){y(e,t),x(e,t)}function y(e,t){if(e.hasAttribute(`viewBox`)){b(t)&&(e.removeAttribute(`width`),e.removeAttribute(`height`));for(let n of _){let r=t.getAttribute(n);r!==null&&e.setAttribute(n,r)}}}function b(e){return e.hasAttribute(`width`)||e.hasAttribute(`height`)||e.style.width!==``||e.style.height!==``}function x(e,t){let n=t.getAttribute(`aria-labelledby`),r=t.getAttribute(`aria-label`),i=n||r||t.getAttribute(`alt`);i===``?(e.setAttribute(`aria-hidden`,`true`),e.setAttribute(`focusable`,`false`)):(e.setAttribute(`role`,`img`),e.hasAttribute(`aria-label`)||e.hasAttribute(`aria-labelledby`)||(n?e.setAttribute(`aria-labelledby`,n):i&&e.setAttribute(`aria-label`,i)))}var S=`
  window.addEventListener('afterprint', function () { window.close() })
  function imprimir() {
    window.print()
  }
  function aoCarregar() {
    var fontes = document.fonts ? document.fonts.ready : Promise.resolve()
    Promise.resolve(fontes).then(imprimir, imprimir)
  }
  if (document.readyState === 'complete') {
    aoCarregar()
  } else {
    window.addEventListener('load', aoCarregar, { once: true })
  }
`,C=`<!DOCTYPE html>
<html lang="pt-BR">
  <head><meta charset="UTF-8" /><title>Gerando demonstrativo…</title></head>
  <body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#555;">
    Gerando o demonstrativo para impressão…
  </body>
</html>`;function w(){let e=n(),t=o();function r(){return Array.from(document.styleSheets,e=>{try{if(e.cssRules)return Array.from(e.cssRules,e=>e.cssText).join(`
`)}catch{console.warn(`Não foi possível acessar o conteúdo de uma folha de estilos:`,e.href)}return``}).filter(Boolean).join(`
`)}function i(e){let t=[e,...e.querySelectorAll(`*`)];for(let e of t){let t=[...e.classList].filter(e=>e===`q-dark`||e===`body--dark`||e.endsWith(`--dark`));for(let n of t)e.classList.remove(n)}}function a(e,t,n,r){return`
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${n}</title>
        <style>
          @page {
            size: a4 ${r?`landscape`:`portrait`};
          }
        </style>
        <style>${t}</style>
      </head>
      <body>
        ${e}
        <script>${S}<\/script>
      </body>
    </html>
    `}function s(){let e=window.open(``,`_blank`);return e&&(e.document.write(C),e.document.close()),e}async function c(n,o,s=!0,c){if(c){if(!n)c.close();else try{let e=n.cloneNode(!0);e.style.removeProperty(`zoom`),e.classList.remove(`q-ma-md`),i(e),await g(e);let t=r(),l=a(e.outerHTML,t,o,s),u=new Blob([l],{type:`text/html`});c.location.href=URL.createObjectURL(u)}catch(n){t.erro(n),c.close(),e.aviso(`Falha ao gerar o demonstrativo`,`Não foi possível preparar o demonstrativo para impressão. Tente novamente.`)}}}return{abrirJanela:s,imprimirHtml:c}}var T=500,E=25;async function D(e){let t=Date.now()+T;for(;Date.now()<t;){if(e.querySelector(`[data-fc-qr-resolvido="1"]`))return;await new Promise(e=>setTimeout(e,E))}}async function O(e,t,n,r=!0,i){if(!t){i?.close();return}let a=e.obterSnapshot();e.permalink.value=a?await e.criar(a):null,e.permalink.value&&(await l(),await D(t));try{await e.imprimirHtml(t,n,r,i)}finally{e.permalink.value=null}}var k=e=>JSON.parse(e,c);function A(){let n=i().app.baseURL??`/`,a=i(),{permalinks:o}=m(),{imprimirHtml:s}=w(),c=d(null);function l(e){if(typeof window>`u`)return e;let t=String(n).replace(/\/$/,``);return`${window.location.origin}${t}/permalink/${e}`}async function u(n){if(a.public.modoEstatico)return null;try{let r=await o.criar({corpo:t({...n,arquivo:e(n.arquivo)})});return{id:r.result.id,token:r.result.token,url:l(r.result.token),criadoEm:r.result.criadoEm,expiraEm:r.result.expiraEm}}catch{return null}}async function g(e){return(await r(f(n,p(h.abrir.caminhoApp??``,{token:e})),{parseResponse:k})).result}async function _(e){let t=await u(e);return t?{url:t.url,app:e.app,versao:e.versao,criadoEm:t.criadoEm}:null}return{permalink:c,criarPermalinkParaImpressao:u,recuperarPorPermalink:g,montarUrlPermalink:l,imprimir:(e,t,n,r=!0,i)=>O({permalink:c,criar:_,obterSnapshot:n.obterSnapshot,imprimirHtml:s},e,t,r,i)}}function j(){let e=a(),t=u(()=>e.idApp?s(e.idApp)?.capacidades:void 0),n=u(()=>t.value?.permalink===!0),r=u(()=>t.value?.linksPublicos===!0);return{permitePermalink:n,permiteLinkPublico:r,aberturaCompartilhamentoDisponivel:u(()=>n.value||r.value)}}export{A as n,w as r,j as t};