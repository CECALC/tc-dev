import{$s as e,At as t,Cl as n,Fc as r,Gs as i,al as a,mt as o,nu as s,ti as c,wt as l}from"./Dj9oS4rS.js";import{d as u,i as d,n as f,t as p}from"./C-kyHrzB.js";import{t as m}from"./B7rxXQpD.js";var h=`
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
`,g=`<!DOCTYPE html>
<html lang="pt-BR">
  <head><meta charset="UTF-8" /><title>Gerando demonstrativo…</title></head>
  <body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#555;">
    Gerando o demonstrativo para impressão…
  </body>
</html>`;function _(){let e=l(),n=t();function r(){return Array.from(document.styleSheets,e=>{try{if(e.cssRules)return Array.from(e.cssRules,e=>e.cssText).join(`
`)}catch{console.warn(`Não foi possível acessar o conteúdo de uma folha de estilos:`,e.href)}return``}).filter(Boolean).join(`
`)}function i(e){let t=[e,...e.querySelectorAll(`*`)];for(let e of t)for(let t of[...e.classList])(t===`q-dark`||t===`body--dark`||t.endsWith(`--dark`))&&e.classList.remove(t)}async function a(e){let t=e.querySelectorAll(`img[src$=".svg"]`);for(let e of t){let t=e.src;try{let n=await fetch(t);if(n.ok){let t=await n.text(),r=document.createElement(`div`);r.innerHTML=t;let i=r.querySelector(`svg`);i&&(i.setAttribute(`alt`,e.alt||``),e.replaceWith(i))}else console.warn(`Não foi possível carregar a imagem SVG: ${t}`)}catch(e){console.error(`Erro ao carregar SVG: ${t}`,e)}}}function o(e,t,n,r){return`
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
        <script>${h}<\/script>
      </body>
    </html>
    `}function s(){let e=window.open(``,`_blank`);return e&&(e.document.write(g),e.document.close()),e}async function c(t,s,c=!0,l){if(l){if(!t){l.close();return}try{let e=t.cloneNode(!0);i(e),await a(e);let n=r(),u=o(e.outerHTML,n,s,c),d=new Blob([u],{type:`text/html`});l.location.href=URL.createObjectURL(d)}catch(t){n.erro(t),l.close(),e.aviso(`Falha ao gerar o demonstrativo`,`Não foi possível preparar o demonstrativo para impressão. Tente novamente.`)}}}return{abrirJanela:s,imprimirHtml:c}}var v=500,y=25;async function b(e){let t=Date.now()+v;for(;Date.now()<t;){if(e.querySelector(`[data-fc-qr-resolvido="1"]`))return;await new Promise(e=>setTimeout(e,y))}}async function x(e,t,r,i=!0,a){if(!t){a?.close();return}let o=e.obterSnapshot();e.permalink.value=o?await e.criar(o):null,e.permalink.value&&(await n(),await b(t));try{await e.imprimirHtml(t,r,i,a)}finally{e.permalink.value=null}}var S=e=>JSON.parse(e,o);function C(){let t=r().app.baseURL??`/`,n=r(),{permalinks:i}=p(),{imprimirHtml:a}=_(),o=s(null);function c(e){if(typeof window>`u`)return e;let n=String(t).replace(/\/$/,``);return`${window.location.origin}${n}/permalink/${e}`}async function l(e){if(n.public.modoEstatico)return null;try{let t=await i.criar({corpo:{...e,arquivo:m(e.arquivo)}});return{id:t.result.id,token:t.result.token,url:c(t.result.token),criadoEm:t.result.criadoEm,expiraEm:t.result.expiraEm}}catch{return null}}async function h(n){return(await e(u(t,f(d.abrir.caminhoApp??``,{token:n})),{parseResponse:S})).result}async function g(e){let t=await l(e);return t?{url:t.url,app:e.app,versao:e.versao,criadoEm:t.criadoEm}:null}return{permalink:o,criarPermalinkParaImpressao:l,recuperarPorPermalink:h,montarUrlPermalink:c,imprimir:(e,t,n,r=!0,i)=>x({permalink:o,criar:g,obterSnapshot:n.obterSnapshot,imprimirHtml:a},e,t,r,i)}}function w(){let e=c(),t=a(()=>e.idApp?i(e.idApp)?.capacidades:void 0),n=a(()=>t.value?.permalink===!0),r=a(()=>t.value?.linksPublicos===!0);return{permitePermalink:n,permiteLinkPublico:r,aberturaCompartilhamentoDisponivel:a(()=>n.value||r.value)}}export{C as n,_ as r,w as t};