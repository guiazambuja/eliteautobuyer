// ==UserScript==
// @name        Elite AutoBuyer
// @version     1.0.4
// @author      RobbenZ
// @description Elite AutoBuyer
// @match       https://www.ea.com/pt-br/fifa/ultimate-team/web-app/
// @match       https://www.ea.com/*/fifa/ultimate-team/web-app/*
// @match       https://www.ea.com/fifa/ultimate-team/web-app/*
// @namespace   http://tampermonkey.net/
// @connect     ea.com
// @connect     ea2.com
// @updateURL   https://github.com/guiazambuja/eliteautosbc/releases/download/1.0.6/Elite.AutoSBC.user.js
// @downloadURL https://github.com/guiazambuja/eliteautosbc/releases/download/1.0.6/Elite.AutoSBC.user.js
// @require     https://raw.githubusercontent.com/discordjs/discord.js/webpack/discord.11.6.4.min.js
// @require     https://github.com/guiazambuja/eliteautosbc/releases/download/1.0.6/Elite.AutoSBC.user.js
// ==/UserScript==

(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n) &&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{idAbActiveTransfers:()=>me,idAbAddBuyDelay:()=>R,idAbAddFilterGK:()=>L,idAbAvailableItems:()=>pe,idAbBidExact:()=>A,idAbBuyPrice:()=>b,idAbCardCount:()=>h,idAbCloseTabToggle:()=>U,idAbCoins:()=>le,idAbCycleAmount:()=>_,idAbDelayToAdd:()=>F,idAbItemExpiring:()=>v,idAbMaxBid:()=>y,idAbMaxPurchases:()=>x,idAbMaxRating:()=>M,idAbMessageNotificationToggle:()=>O,idAbMinDeleteCount:()=>T,idAbMinRating:()=>B,idAbNumberFilterSearch:()=>fe,idAbPauseFor:()=>I,idAbRandMinBidInput:()=>k,idAbRandMinBidToggle:()=>N,idAbRandMinBuyInput:()=>D,idAbRandMinBuyToggle:()=>E,idAbRequestCount:()=>se,idAbSearchProgress:()=>ae,idAbSellPrice:()=>w,idAbSellToggle:()=>S,idAbSoldItems:()=>de,idAbSolveCaptcha:()=>ne,idAbSoundToggle:()=>W,idAbStatisticsProgress:()=>re,idAbStatus:()=>ce,idAbStopAfter:()=>P,idAbStopErrorCode:()=>ge,idAbStopErrorCodeCount:()=>be,idAbUnsoldItems:()=>ue,idAbWaitTime:()=>C,idAntiCaptchKey:()=>Se,idAutoBuyerFoundLog:()=>K,idAutoClearLog:()=>Ce,idCalcBinPrice:()=>Z,idCapatchaMp3:()=>ve,idClearLogButton:()=>Q,idDeleteFilter:()=>ie,idDiscordChannelId:()=>G,idDiscordToken:()=>j,idFilterDropdown:()=>f,idInfoWrapper:()=>Y,idNotificationType:()=>z,idPreserveChanges:()=>X,idProgressAutobuyer:()=>q,idProxyAddress:()=>Ae,idProxyLogin:()=>Te,idProxyPassword:()=>$e,idProxyPort:()=>we,idSearchCancelButton:()=>J,idSearchWrapper:()=>he,idSelectFilterCount:()=>te,idSelectedFilter:()=>g,idSellAfterTax:()=>oe,idSellFutBinPercent:()=>Ie,idSellFutBinPrice:()=>_e,idSellRatingThreshold:()=>xe,idTelegramBotToken:()=>V,idTelegramChatId:()=>H,idTestNotification:()=>ee,idWinMp3:()=>ye});const i=new Map,n=(e,t)=>{i.set(e,t)},o=e=>{const t=i.get(e);return t&&t.expiryTimeStamp&&t.expiryTimeStamp<Date.now()?(i.delete(e),null):t},a=e=>{let t=o(e)||0;return t++,n(e,t),t},r=e=>{let t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=i.length;for(var o=0;o<e;o++)t+=i.charAt(Math.floor(Math.random()*n));return t},s=async(e=1)=>{const t=Math.floor(Math.random());await new Promise((i=>setTimeout(i,1e3*(t+e))))},l=e=>{if(e){let t=e[e.length-1].toUpperCase(),i=parseInt(e.substring(0,e.length-1)),n="M"===t?60:"H"===t?3600:1;return i&&(i*=n),i}return 0},c=(e,t)=>Math.round(Math.random()*(t-e)+e),d=e=>{if(e){const[t,i]=e.split("-").map((e=>parseInt(e)));return 1e3*Math.round(Math.random()*(i-t)+t)}return 0},u=(e,t)=>(e.length<=t&&(e+=" ".repeat(t-e.length)),e),p=(e,t,i)=>new Promise(((n,o)=>e().then(n).catch((a=>i>0?s(t).then(p.bind(null,e,t,i-1)).then(n).catch(o):o(a))))),m=function(e){if(o("BuyerSettings").idAbSoundToggle){let t=document.getElementById(ye);"capatcha"==e&&(t=document.getElementById(ve)),t.currentTime=0,t.play()}},f="elem_"+r(15),g="elem_"+r(15),b="elem_"+r(15),h="elem_"+r(15),y="elem_"+r(15),v="elem_"+r(15),A="elem_"+r(15),w="elem_"+r(15),T="elem_"+r(15),S="elem_"+r(15),C="elem_"+r(15),x="elem_"+r(15),_="elem_"+r(15),I="elem_"+r(15),P="elem_"+r(15),B="elem_"+r(15),M="elem_"+r(15),k="elem_"+r(15),D="elem_"+r(15),E="elem_"+r(15),N="elem_"+r(15),R="elem_"+r(15),F="elem_"+r(15),L="elem_"+r(15),U="elem_"+r(15),O="elem_"+r(15),W="elem_"+r(15),V="elem_"+r(15),H="elem_"+r(15),z="elem_"+r(15),j="elem_"+r(15),G="elem_"+r(15),q="elem_"+r(15),K="elem_"+r(15),J="elem_"+r(15),Y="elem_"+r(15),X="elem_"+r(15),Q="elem_"+r(15),Z="elem_"+r(15),ee="elem_"+r(15),te="elem_"+r(15),ie="elem_"+r(15),ne="elem_"+r(15),oe="elem_"+r(15),ae="elem_"+r(15),re="elem_"+r(15),se="elem_"+r(15),le="elem_"+r(15),ce="elem_"+r(15),de="elem_"+r(15),ue="elem_"+r(15),pe="elem_"+r(15),me="elem_"+r(15),fe="elem_"+r(15),ge="elem_"+r(15),be="elem_"+r(15),he="elem_"+r(15),ye="elem_"+r(15),ve="elem_"+r(15),Ae="elem_"+r(15),we="elem_"+r(15),Te="elem_"+r(15),Se="elem_"+r(15),$e="elem_"+r(15),Ce="elem_"+r(15),xe="elem_"+r(15),_e="elem_"+r(15),Ie="elem_"+r(15),Pe=(e,t,i=null)=>fetch(e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:i?"Bearer "+i:null},method:"POST",body:JSON.stringify(t)}),Be=async e=>{let t=o("authToken");if(!t){t={token:await(await(()=>{const e=o("useremail"),{id:t}=services.User.getUser();return Pe(atob("aHR0cHM6Ly8zcHFtaHc3NmE0LmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2Rldi90b2tlbg=="),{email:e,userId:t})})()).json(),expiryTimeStamp:new Date(Date.now()+33e5)},n("authToken",t)}return Pe(atob("aHR0cHM6Ly93bG0wc2pzbHVlLmV4ZWN1dGUtYXBpLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2Rldi9hdWN0aW9u"),{playerPrices:e},t.token)},Me=()=>{const e=$("#"+q);let t="Elite AB Pronto\n"+("["+(new Date).toLocaleTimeString()+"] ")+" Index  | Nome do Item       | preço  | op  | resultado  | comentários\n";e.val(t)};let ke=null;const De=function(e,t){t=t||UINotificationType.POSITIVE,services.Notification.queue([e,t])},Ee=e=>{services.PIN.sendData(PINEventType.PAGE_VIEW,{type:PIN_PAGEVIEW_EVT_TYPE,pgid:e})},Ne=(e,t)=>{const i=o("BuyerSettings");(i.idAbMessageNotificationToggle||t)&&(Re(i,e),t&&De("Notificação de Teste Enviada"))},Re=(e,t)=>{let i=e.idTelegramBotToken,n=e.idTelegramChatId,o=e.idDiscordChannelId;Fe(i,n,t),Le(o,t)},Fe=(e,t,i)=>{if(e&&t){let o=`https://api.telegram.org/bot${e}/sendMessage?chat_id=${t}&parse_mode=Markdown&text=${i}`;var n=new XMLHttpRequest;n.open("GET",o,!0),n.send()}},Le=(e,t)=>{e&&(ke?ke.channels.get(e).send(t):ke=Ue((()=>{setTimeout((()=>{ke&&ke.channels.get(e).send(t)}),200)})))},Ue=e=>{const t=o("BuyerSettings"),i=new Discord.Client;let n=t.idDiscordToken;return n?(i.login(n),i.on("pronto",(function(){e&&e()})),i.on("message",(function(e){e.author.id!=i.user.id&&(/start/i.test(e.content)?(window.activateAutoBuyer(!0),e.channel.sendMessage("Elite AB foi iniciado com sucesso")):/stop/i.test(e.content)&&(window.deactivateAutoBuyer(!0),e.channel.sendMessage("Elite AB parou com sucesso")))})),i):null},Oe=(e,t,i,n,o,a)=>{Ve(e+" | "+t+" | "+i+" | "+n+" | "+o+" | "+a,q)},We=function(e){Ne("Captcha, por favor resolva o problema para que o bot possa funcionar novamente."),e?window.location.href="about:blank":Ve("[!!!] Bot de parada automática ativado desde que o Captcha foi acionado",q)},Ve=function(e,t){var i=$("#"+t);e="["+(new Date).toLocaleTimeString()+"] "+e+"\n",i.val(i.val()+e),i[0]&&i.scrollTop(i[0].scrollHeight)},He=()=>{$("#"+K).val(""),$("#"+q).val(""),Me()};setInterval((()=>{const e=o("BuyerSettings");e&&e.idAutoClearLog&&He()}),12e4);const ze=(e,t,i,a=!1)=>{const r=o("BuyerSettings")||{};"number"===i&&(t=parseInt(t)),r[e]=t,r[e+"isDefaultValue"]=a,n("BuyerSettings",r)},je=(e,t,i,n,o="number",a="buyer-settings-field",r=null)=>{const s=Object.keys(i)[0];return t&&ze(s,t,o,!0),$(document).on("input",`#${i[s]}`,(({target:{value:e}})=>{r&&r(e),ze(s,e||t,o,!e)})),`<div class="price-filter ${a}">\n       <div class="info">\n           <span class="secondary label">${e} :<br/><small>${n}</small></span>\n       </div>\n       <div class="buttonInfo">\n           <div class="inputBox">\n               <input type="${o}" class="numericInput" id='${i[s]}' placeholder=${t}>\n           </div>\n       </div>\n    </div>`};let Ge=new Set;const qe=(e,t,i,a="buyer-settings-field")=>{const r=Object.keys(t)[0];return Ge.has(r)||($(document).on("click touchend",`#${t[r]}`,(e=>{((e,t)=>{const i=o("BuyerSettings")||{};i[e]?(i[e]=!1,$(t.currentTarget).removeClass("toggled")):(i[e]=!0,$(t.currentTarget).addClass("toggled")),n("BuyerSettings",i)})(r,e)})),Ge.add(r)),`\n    <div class="price-filter  ${a}">\n        <div class="ut-toggle-cell-view">\n           <span class="ut-toggle-cell-view--label">${e} <br/><small>${i}</small></span>\n             <div id='${t[r]}' class="ut-toggle-control">\n               <div class="ut-toggle-control--track">\n              </div>\n              <div class= "ut-toggle-control--grip" >\n          </div> \n           </div> \n       </div>\n    </div> `},Ke=function(){return`<div class='buyer-settings-wrapper buy-settings-view'>\n      ${je("Preço de Compra","",{idAbBuyPrice:b},"<br/>")}\n      ${je("No. de cartas para Comprar",10,{idAbCardCount:h},"(Funciona apenas com Preço de Compra)")}\n      ${je("Preço de Lance","",{idAbMaxBid:y},"<br/>")}\n      ${je("Itens de Lance Expiram em","1H",{idAbItemExpiring:v},"(S para segundos, M para minutos, H para horas)","text")} \n      ${qe("Preço de Lance Exato",{idAbBidExact:A},"")}\n     </div>\n    `};$(document).on("keyup","#"+w,(function({target:{value:e}}){Je(e)}));const Je=e=>{const t=parseInt(e);if(isNaN(t))return void $("#"+oe).html(0);const i=(e-e/100*5).toLocaleString();$("#"+oe).html(i)},Ye=function(){return`<div style='display : none' class='buyer-settings-wrapper sell-settings-view'>  \n    ${qe("Calcular Preço de Venda",{idSellFutBinPrice:_e},"(Usar preço do Futbin para Listagem)")}\n    ${je("Porcentagem do Preço de Venda",100,{idSellFutBinPercent:Ie},"(Porcentagem do Preço de Venda do FUTBIN)")}\n    ${je("Preço de Venda","",{idAbSellPrice:w},`Receber após Taxas: <span id=${oe}>0</span>`)}\n    ${je("Limpar Itens Vendidos",10,{idAbMinDeleteCount:T},"(Limpar Itens Vendidos quando atingir o número especificado)")}\n    ${je("Classificação Máxima",100,{idSellRatingThreshold:xe},"(Classificação Máxima para listar o Jogador snipado)")}\n    ${qe("Relistar Itens Não-Vendidos",{idAbSellToggle:S},"")}\n    </div>`},Xe=function(){return`<div style='display : none' class='buyer-settings-wrapper safety-settings-view'>\n  ${je("Tempo de Espera","7-15",{idAbWaitTime:C},"(Intervalo de Tempo Aleatório ex. 7-15)","text")}\n  ${je("Max de Compras por Solicitação de Pesquisa",1,{idAbMaxPurchases:x},"<br/>")}\n  ${je("Ciclo de Pausa",15,{idAbCycleAmount:_},"(No. de buscas realizadas antes de ativar a Pausa)")}\n  ${je("Pausar Por","5-8S",{idAbPauseFor:I},"(S para Segundos, M para Minutos, H para Horas ex. 0-0S)","text")}\n  ${qe("Add Delay Após a Compra",{idAbAddBuyDelay:R},"(Add Delay Após tentar <br/> comprar / bidar uma card)")}\n  ${je("Delay para adicionar","1S",{idAbDelayToAdd:F},"(S para Segundos, M para Minutos, H para Horas)","text")}\n  ${je("Parar Após","1H",{idAbStopAfter:P},"(S para Segundos, M para Minutos, H para Horas)","text")} \n  </div>`},Qe=function(){return`<div style='display : none' class='buyer-settings-wrapper captcha-settings-view'>\n    ${qe("Fechar Web App na Ativação do Captcha",{idAbCloseTabToggle:U},"")}\n    ${qe("Auto Resolução do Captcha",{idAbSolveCaptcha:ne},"")}\n    ${je("Chave Anti-Captcha","",{idAntiCaptchKey:Se},"","text")}\n    ${je("Endereço Proxy","",{idProxyAddress:Ae},"","text")}\n    ${je("Porta do Proxy","",{idProxyPort:we},"")}\n    ${je("Nome de Usuário Proxy (Opcional)","",{idProxyLogin:Te},"","text")}\n    ${je("Senha de Usuário Proxxy (Opcional)","",{idProxyPassword:$e},"","text")} \n    `};let Ze=new Set;const et=(e,t)=>{$(document).on({mouseenter:function(){$(this).addClass("hover")},mouseleave:function(){$(this).removeClass("hover")},click:function(){t()}},`#${e}`)},tt=function(){return`<div style='display : none' class='buyer-settings-wrapper notification-settings-view'>  \n  ${je("Telegram Bot Token","",{idTelegramBotToken:V},"Token do seu próprio bot","text")}\n  ${je("Telegram Chat ID","",{idTelegramChatId:H},"Seu Telegram ChatID","text")}\n  ${je("Discord Bot Token","",{idDiscordToken:j},"Seu Token do Discord Bot","text")}\n  ${je("ID do Canal Discord","",{idDiscordChannelId:G},"Seu ID do Canal Discord","text")}\n  ${je("Tipo de Notificação","",{idNotificationType:z},"Digite A para todas as notificações, B para compra ou L para perda","text")}\n  <div class="price-filter buyer-settings-field">\n  </div>\n  ${qe("Enviar Notificação",{idAbMessageNotificationToggle:O},"")}\n  ${qe("Notificação de Som",{idAbSoundToggle:W},"")}\n  <div class="btn-test-notification buyer-settings-field">\n  ${e=ee,t="Notificação de Teste",i=()=>Ne("Testar Notificação de Teste",!0),n="call-to-action",Ze.has(e)||(et(e,i),Ze.add(e)),`<button class="btn-standard ${n}" id="${e}">${t}</button>`}\n  <audio id=${ye} hidden">\n    <source src="https://notificationsounds.com/storage/sounds/file-sounds-869-coins.ogg" type="audio/ogg">\n    <source src="https://notificationsounds.com/storage/sounds/file-sounds-869-coins.mp3" type="audio/mpeg">\n      "Seu navegador não suporta o elemento de áudio"\n  </audio> \n  <audio id=${ve} hidden">\n    <source src="https://notificationsounds.com/storage/sounds/file-sounds-897-alarm-frenzy.ogg" type="audio/ogg">\n    <source src="https://notificationsounds.com/storage/sounds/file-sounds-897-alarm-frenzy.mp3" type="audio/mpeg">\n      "Seu navegador não suporta o elemento de áudio"\n  </audio>"\n  </div>\n  `;var e,t,i,n},it=function(){return`<div style='display : none' class='buyer-settings-wrapper common-settings-view'>\n  ${je("Códigos de erro para parar o bot (csv)","",{idAbStopErrorCode:ge},"(Ex. 412,421,521)","text")}\n  ${je("No. de vezes que o código de erro deve ocorrer",3,{idAbStopErrorCodeCount:be},"<br />","number")}\n  ${qe("Auto Clear Log",{idAutoClearLog:Ce},"(Limpe automaticamente o Log a cada 2 minutos)")}  \n  </div>`},nt=function(){return`<div style='display : none' class='buyer-settings-wrapper results-filter-view'>   \n    ${je("Classificação Mínima",10,{idAbMinRating:B},"Classificação Mínima do Jogador")}\n    ${je("Classificação Máxima do Jogador",100,{idAbMaxRating:M},"Classificação Máxima do Jogador")}\n    ${je("Valor máximo do lance mínimo aleatório",300,{idAbRandMinBidInput:k},"")}\n    ${qe("Usar lance mínimo aleatório",{idAbRandMinBidToggle:N},"")}\n    ${je("Valor máximo da Compra mínima aleatória",300,{idAbRandMinBuyInput:D},"")}\n    ${qe("Usar Compra mínima aleatória",{idAbRandMinBuyToggle:E},"")}\n    ${qe("SKIP GOL",{idAbAddFilterGK:L},"(Ignorar todos os Goleiros <br/> para comprar / bidar uma carta)")}\n  </div>`},ot=openDatabase("userDatas","1.0","FIFA AUTO BUYER DB",2097152);ot.transaction((function(e){e.executeSql("CREATE TABLE IF NOT EXISTS Filters (filterName,settings);",[],(function(e,t){e.executeSql("CREATE UNIQUE INDEX idx_filters_filterName ON Filters (filterName);")}),(function(e,t){console.log(t)}))}));const at=function(e,t){let i=!1;$(`${e} option`).each((function(){if(this.value===t)return i=!0,!1})),i||$(e).append($("<option></option>").attr("value",t).text(t))},rt=function(e){const t=$(`#${g}`).val()||[];t.length?(n("Filters",t),$(`#${te}`).text("("+t.length+") Filtro Selecionado")):$(`#${te}`).text("Nenhum Filtro Selecionado")},st=function(e,t,i){const n=new UTStandardButtonControl;if(n.init(),n.addTarget(n,t,EventType.TAP),n.setText(e),i){const e=i.split(" ");for(let t of e)n.getRootElement().classList.add(t)}return n};$(document).on({click:rt,touchend:rt},`#${g}`);const lt=async()=>(o("filters")||n("filters",await new Promise(((e,t)=>{ot.transaction((function(i){i.executeSql("SELECT * FROM Filters",[],(function(t,i){const n={};if(i.rows.length)for(let e=0;e<i.rows.length;e++)n[i.rows[e].filterName]=i.rows[e].settings;e(n)}),(function(e,i){t(i)}))}))}))||{}),o("filters")),ct=async function(){return`<div style='display : none' class='buyer-settings-wrapper filter-settings-view'> \n                <div class="price-filter buyer-settings-field multiple-filter">\n                    <select  multiple="multiple" class="multiselect-filter filter-header-settings" id="${g}"\n                     name="selectedFilters" style="overflow-y : scroll;width: 50%;">\n                     ${Object.keys(await lt()).map((e=>`<option value='${e}'>${e}</option>`))}\n                    </select>\n                    <label style="white-space: nowrap;width: 50%;" id="${te}" >Nenhum Filtro Selecionado</label>\n                </div>\n            </div>\n    `},dt=async function(){const e=this;$(document).on({change:function(){const t=$(`#${f} option`).filter(":selected").val();Tt.call(e,t)}},`#${f}`);const t=$(`<div style="width:100%;display: flex;flex-wrap: inherit;">\n               <div style="width:100%;" class="button-container">\n                   <select class="filter-header-settings" id=${f}>\n                      <option selected="true" disabled>Escolha um filtro para usar</option>\n                      ${Object.keys(await lt()).map((e=>`<option value='${e}'>${e}</option>`))}\n                   </select>\n               </div>\n               <div id="btn-actions" style="width:100%;margin-top: 1%;" class="button-container"> \n               </div>\n             </div>`),i=t.find("#btn-actions");return i.append(st("Deletar Filter",(()=>St.call(e)),"call-to-action btn-delete-filter").__root),i.append(st("Salvar Filtro",(function(){wt.call(this,e)}),"call-to-action btn-save-filter").__root),t},ut=new Map;let pt,mt;ut.set(0,{label:"Configurações de Compra/Lance",selector:".buy-settings-view"}),ut.set(1,{label:"Configurações de Venda",selector:".sell-settings-view"}),ut.set(2,{label:"Configurações de Busca",selector:".results-filter-view"}),ut.set(3,{label:"Configurações de Segurança",selector:".safety-settings-view"}),ut.set(4,{label:"Configurações de Filtro",selector:".filter-settings-view"}),ut.set(5,{label:"Configurações do Captcha ",selector:".captcha-settings-view"}),ut.set(6,{label:"Configurações de Notificação",selector:".notification-settings-view"}),ut.set(7,{label:"Configurações Comuns",selector:".common-settings-view"});const ft=function(){return mt=new EAFilterBarView,ut.forEach(((e,t)=>{mt.addTab(t,e.label)})),mt.setActiveTab(0),mt.layoutSubviews(),mt.addTarget(this,yt,EventType.TAP),mt.__root.style="margin-top: 20px;",pt=$(mt.__root),pt.find(".menu-container").css("overflow-x","auto"),bt(),mt},gt=()=>{ht(),bt()},bt=()=>{mt.setActiveTab(0),pt.append(Ke.call(void 0)),pt.append(Ye.call(void 0)),pt.append(nt.call(void 0)),pt.append(Xe.call(void 0)),ct.call(void 0).then((e=>{pt.append(e),pt.append(Qe.call(void 0)),pt.append(tt.call(void 0)),pt.append(it.call(void 0))}))},ht=()=>{ut.forEach(((e,t)=>{$(e.selector).remove()}))},yt=function(e,t,i){vt();const n=ut.get(i.index).selector;$(n).css("display","")},vt=()=>{ut.forEach(((e,t)=>{$(e.selector).css("display","none")}))},At=`#${f}`,wt=function(e){const t=this;$(t).addClass("active");let i=o("BuyerSettings");setTimeout((function(){let n={};const a=e._viewmodel;n.searchCriteria={criteria:a.searchCriteria,playerData:a.playerData,buyerSettings:i};let r=$(`${At} option`).filter(":selected").val();"Escolha o Filtro para Carregar"===r&&(r=void 0);let s=prompt("Insira um nome para este filtro",r);s?(s=s.toUpperCase(),at(At,s),at(`#${g}`,s),$(`${At} option[value="${s}"]`).attr("selected",!0),o("filters")[s]=JSON.stringify(n),((e,t)=>{new Promise(((i,n)=>{ot.transaction((function(o){o.executeSql("REPLACE INTO Filters(filterName,settings) Values (?,?)",[e,t],(function(e,t){i(!0)}),(function(e,t){n(t)}))}))}))})(s,o("filters")[s]),$(t).removeClass("active"),De("Alterações salvas com sucesso")):($(t).removeClass("active"),De("Nome do filtro é necessário",UINotificationType.NEGATIVE))}),200)},Tt=function(e){gt();const i=o("filters")[e];if(!i)return;const{searchCriteria:{criteria:a,playerData:r,buyerSettings:s}}=JSON.parse(i);n("BuyerSettings",s),this._viewmodel.playerData={},Object.assign(this._viewmodel.searchCriteria,a),Object.assign(this._viewmodel.playerData,r),$.isEmptyObject(this._viewmodel.playerData)&&(this._viewmodel.playerData=null),this.viewDidAppear();for(let e of Object.keys(s)){const i=s[e];if(s[e+"isDefaultValue"])continue;const n=`#${t[e]}`;if("boolean"==typeof i){if(i){$(n).addClass("toggled");continue}$(n).removeClass("toggled")}else $(n).val(i)}},St=function(){const e=$(`${At} option`).filter(":selected").val();"Escolha o filtro para carregar"!=e&&($(`${At} option[value="${e}"]`).remove(),$(`${At}`).prop("selectedIndex",0),gt(),this._viewmodel.playerData=null,Object.assign(this._viewmodel.searchCriteria,this._viewmodel.defaultSearchCriteria),this.viewDidAppear(),delete o("filters")[e],(e=>{new Promise(((t,i)=>{ot.transaction((function(n){n.executeSql("DELETE FROM Filters WHERE filterName=?",[e],(function(e,i){t(!0)}),(function(e,t){i(t)}))}))}))})(e),De("Alterações salvas com sucesso"))},$t=function(e){if(!o("autoBuyerActive"))return;const t=1e3*l(e.idAbPauseFor),i=e.idAbCycleAmount,n=o("sessionStats").searchCount;return!n||n%i?void 0:(zt(!0),setTimeout((()=>{Ht.call(this,!0)}),t))},Ct=function(){const e=o("Filters");if(!e||!e.length)return!1;let t=e[c(0,e.length-1)];Tt.call(this,t),Ve(`---------------------------  Rodando Pelo Filtro ${t}  ---------------------------------------------`,K)},xt=e=>{let t=JSUtils.find(UTCurrencyInputControl.PRICE_TIERS,(function(t){return e>=t.min}));var i=Math.round(e/t.inc)*t.inc;return Math.max(Math.min(i,14999e3),0)},_t=e=>e<=1e3?e-50:e>1e3&&e<=1e4?e-100:e>1e4&&e<=5e4?e-250:e>5e4&&e<=1e5?e-500:e-1e3,It=e=>e<1e3?e+50:e>=1e3&&e<1e4?e+100:e>=1e4&&e<5e4?e+250:e>=5e4&&e<1e5?e+500:e+1e3,Pt=e=>new Promise(((t,i)=>{GM_xmlhttpRequest({method:"GET",url:`https://www.futbin.com/22/playerPrices?player=${e}`,onload:o=>{200===o.status?(o.expiryTimeStamp=new Date(Date.now()+9e5),n(e,o),t(o)):i(o)}})})),Bt=()=>{let e=o("userPlatform");return e||(services.User.getUser().getSelectedPersona().isPlaystation?(n("userPlatform","ps"),"ps"):services.User.getUser().getSelectedPersona().isXbox?(n("userPlatform","xbox"),"xbox"):(n("userPlatform","pc"),"pc"))},Mt=new Map,kt=(e,t,i,n,r)=>{const c=o("BuyerSettings");return new Promise((f=>{services.Item.bid(e,i).observe(void 0,(async function(g,b){let h=u(i.toString(),6);const y=c.idNotificationType;if(b.success){r&&(a("purchasedCardCount"),m("cardWon"));const i=c.idSellRatingThreshold;let s=parseInt(e.rating);const l=!i||s<=i,f=c.idSellFutBinPrice;if(l&&f)try{const i=await(v=e.definitionId,A=3,o(v)?new Promise(((e,t)=>{e(o(v))})):p(Pt.bind(null,v),.5,A));if(200===i.status){const o=JSON.parse(i.responseText);n=parseInt(o[e.definitionId].prices[Bt()].LCPrice.replace(/[,.]/g,""));const a=c.idSellFutBinPercent,r=xt(n*a/100);Ve(`= Futbin preço por ${t}: ${n}: ${a}% do preço de venda: ${r}`,K),n=r}else n=null,Ve(`= Incapaz de obter o preço de Futbin pelo ${t}`,K)}catch(e){e=e.statusText||e.status||e,n=null,Ve(`= Incapaz de obter o preço de Futbin pelo ${t}, err: ${e||"ocorreu um erro"}`,K)}const g=n&&!isNaN(n)&&l;if(r){let i=a("winCount"),o=" W:"+u(i.toString(),4);Oe(o,t,h,"compra","successo",g?"vendendo por: "+n:"movendo para o club"),setTimeout((function(){g?services.Item.list(e,_t(n),n,3600):services.Item.move(e,ItemPile.CLUB)}),d(c.idAbWaitTime))}else{let e=a("bidCount"),i=" B:"+u(e.toString(),4);Oe(i,t,h,"lance","successo","aguardando expirar")}"B"!==y&&"A"!==y||Ne("| "+t.trim()+" | "+h.trim()+" | compra |")}else{let e=a("lossCount"),i=" L:"+u(e.toString(),4),n=(b.error?.code||b.status)+"";if(Oe(i,t,h,r?"compra":"lance","falha"," ERR: "+n),"L"!==y&&"A"!==y||Ne("| "+t.trim()+" | "+h.trim()+" | falha |"),c.idAbStopErrorCode){const e=new Set(c.idAbStopErrorCode.split(","));Mt.has(n)||Mt.set(n,{currentVal:0}),Mt.get(n).currentVal++,e.has(n)&&Mt.get(n).currentVal>=c.idAbStopErrorCodeCount&&(Ve(`[!!!] Autostopping bot desde o código de erro ${n} ocorreu ${Mt.get(n).currentVal} vezes\n`,q),Mt.clear(),zt())}}var v,A;c.idAbAddBuyDelay&&await s(l(c.idAbDelayToAdd)),f()}))}))};n("sessionStats",{ItensVendidos:"-",ItensNãoVendidos:"-",TransferênciasAtivas:"-",ItensDisponíveis:"-",coins:"-",coinsNumber:0,searchCount:0});const Dt=(e,t)=>{const i=o("sessionStats");i[e]=t,n("sessionStats",i)},Et=function(e,t,i){return Ee("Lista de Transferências - Exibição da lista"),new Promise((n=>{i||repositories.Item.isDirty(ItemPile.TRANSFER)?services.Item.requestTransferItems().observe(this,(function(i,o){let a=o.data.items.filter((function(e){return e.getAuctionData().isSold()})).length;Dt("ItensVendidos",a);const r=o.data.items.filter((function(e){return!e.getAuctionData().isSold()&&e.getAuctionData().isExpired()})).length;Dt("ItensNãoVendidos",r);const s=a>=t;r&&e&&services.Item.relistExpiredAuctions().observe(this,(function(e,t){!s&&UTTransferListViewController.prototype.refreshList()}));const l=o.data.items.filter((function(e){return e.getAuctionData().isSelling()})).length;Dt("TransferênciasAtivas",l);const c=o.data.items.filter((function(e){return e.getAuctionData().isInactive()})).length;Dt("ItensDisponíveis",c),s&&(Ve("[LISTA DE TRANSFERÊNCIAS] > "+a+" iten(s) vendidos\n",q),UTTransferListViewController.prototype._clearSold()),n()})):n()}))},Nt=new Set,Rt=function(e){return Ee("Metas de Transferência - exibição da lista"),new Promise((t=>{services.Item.clearTransferMarketCache(),services.Item.requestWatchedItems().observe(this,(function(i,n){let a=e.idAbMaxBid,r=e.idAbSellPrice,s=n.data.items.filter((function(e){return e._auction&&"active"===e._auction._tradeState}));services.Item.refreshAuctions(s).observe(this,(function(i,s){services.Item.requestWatchedItems().observe(this,(async function(i,s){const l=o("autoBuyerActive");if(l&&a){let t=s.data.items.filter((function(e){return"outbid"===e._auction._bidState&&"active"===e._auction._tradeState}));for(var c=0;c<t.length;c++)await Ft(t[c],a,r,e)}if(l&&r&&!isNaN(r)){const t=o("userWatchItems");let i=n.data.items.filter((function(e){return e.getAuctionData().isWon()&&!t.has(e._auction.tradeId)&&!Nt.has(e._auction.tradeId)}));for(c=0;c<i.length;c++)await Lt(i[c],r,e.idAbWaitTime)}services.Item.clearTransferMarketCache(),t()}))}))}))}))},Ft=async(e,t,i,n)=>{let a=e._auction,r=a.currentBid,l=a.currentBid||a.startingBid,c=u(e._staticData.name,15);const d=o("autoBuyerActive");let p=n.idAbBidExact?t:r?_t(t):t,m=n.idAbBidExact?t:r?It(l):l;d&&l<=p&&(Ve("Lance em item fora do preço de lance -> Preço de Lance :"+m,K),await kt(e,c,m,i),n.idAbAddBuyDelay&&await s(1))},Lt=async(e,t,i)=>{let n=e._auction,o=u(e._staticData.name,15);var a;Nt.add(n.tradeId),Ve(" ($$$) "+o+"["+e._auction.tradeId+"] -- Selling for: "+t,q),e.clearAuction(),await(a=function(){services.Item.list(e,_t(t),t,3600)},d(i),new Promise((e=>{setTimeout((function(){a(),e()}),1e3)})))},Ut=()=>{const e=o("BuyerSettings");let t=e.idAntiCaptchKey,i=e.idProxyAddress,n=e.idProxyPort,a=e.idProxyLogin,r=e.idProxyPassword;if(!i||!n||!t)return Ve("Info do Proxy não preenchida corretamente",q),void We(e.idAbCloseTabToggle);function s(e){let i={clientKey:t,taskId:e};var n=new XMLHttpRequest;n.open("POST","https://api.anti-captcha.com/getTaskResult",!0),n.setRequestHeader("Content-Type","application/json"),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var t=JSON.parse(n.responseText);if(0==t.errorId)if("ready"==t.status){new UTCaptchaViewModel(accessobjects.Captcha).validateToken(t.solution.token).observe(this,(function(e,t){t.success&&(Ve("Captcha Resolvido",q),Ht())}))}else setTimeout((()=>s(e)),1e3);else Ve("Ocorreu um erro ao verificar o resultado do Captcha : "+t.errorCode+", "+t.errorDescription,q)}};var o=JSON.stringify(i);n.send(o)}!function(){accessobjects.Captcha.getCaptchaData().observe(this,(function(e,o){if(o.success){if(!(c=o.response.blob))return!1;let e={clientKey:t,task:{type:"FunCaptchaTask",websiteURL:"https://www.ea.com/fifa/ultimate-team/web-app/",websitePublicKey:"A4EECF77-AC87-8C8D-5754-BF882F72063B",funcaptchaApiJSSubdomain:"ea-api.arkoselabs.com",data:o.response,proxyType:"http",proxyAddress:i,proxyPort:n,proxyLogin:a,proxyPassword:r,userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"}};var l=new XMLHttpRequest;l.open("POST","https://api.anti-captcha.com/createTask",!0),l.setRequestHeader("Content-Type","application/json"),l.onreadystatechange=function(){if(4===l.readyState&&200===l.status){var e=JSON.parse(l.responseText);0==e.errorId?s(e.taskId):Ve("Recebi um erro de Captcha API: "+e.errorCode+", "+e.errorDescription,q)}};var c=JSON.stringify(e);return l.send(c),!0}}))}()};let Ot=null,Wt=null;const Vt=new Set,Ht=async function(e){$("#"+ce).css("color","#2cbe2d").html("ATIVO");if(o("autoBuyerActive"))return;De(e?"Elite AB Retomou":"Elite AB Iniciou"),n("autoBuyerActive",!0),e||(n("botStartTime",new Date),n("purchasedCardCount",0));let t=Ct.bind(this),i=jt.bind(this),a=Rt.bind(this),r=Et.bind(this),s=$t.bind(this);t();let c=o("BuyerSettings");var d;await new Promise(((e,t)=>{services.Item.requestWatchedItems().observe(void 0,(function(t,i){if(i.success){const e=i.data.items.filter((e=>e._auction)).map((e=>e._auction.tradeId))||[];n("userWatchItems",new Set(e)),e.length&&Ve(`Encontrado ${e.length} itens na lista de observação do usuário e ignorados na venda`,K)}e()}))})),Ee("Hub - Transferências"),await i(c),Ee("Hub - Transferências"),await r(c.idAbSellToggle,c.idAbMinDeleteCount,!0),Ot=((e,t,i)=>{let n,o=!1;const a=()=>{if(o)return;const r=1e3*Math.round(Math.random()*(i-t)+t);n=setTimeout((()=>{e(),a()}),r)};return a(),{clear(){o=!0,clearTimeout(n)}}})((async()=>{Wt=s(c),(e=>{const t=o("purchasedCardCount"),i=e.idAbCardCount,n=o("botStartTime").getTime();let a=l(e.idAbStopAfter);(((new Date).getTime()-n)/1e3>=a||i&&t>=i)&&zt()})(c);o("autoBuyerActive")&&(t(),c=o("BuyerSettings"),Ee("Hub - Transferências"),await i(c),Ee("Hub - Transferências"),await a(c),Ee("Hub - Transferências"),await r(c.idAbSellToggle,c.idAbMinDeleteCount))}),...(d=c.idAbWaitTime,d?d.split("-").map((e=>parseInt(e))):[]))},zt=e=>{Ot&&Ot.clear(),!e&&Wt&&clearTimeout(Wt);o("autoBuyerActive")&&(n("autoBuyerActive",!1),De(e?"Elite AB Pausado":"Elite AB Parou"),$("#"+ce).css("color","red").html("INATIVO"))},jt=function(e){const t=Bt();return new Promise((i=>{Ee("Busca do Mercado de Transferências"),(()=>{const e=o("sessionStats");e.searchCount++,n("sessionStats",e)})();var a=this._viewmodel.searchCriteria;services.Item.clearTransferMarketCache();const r=l(e.idAbItemExpiring),s=e.idAbRandMinBidToggle,d=e.idAbRandMinBuyToggle;let p=1;s&&(a.minBid=xt(c(0,e.idAbRandMinBidInput))),d&&(a.minBuy=xt(c(0,e.idAbRandMinBuyInput))),services.Item.searchTransferMarket(a,p).observe(this,(async function(n,o){if(o.success){Ve(`= Recebido ${o.data.items.length} itens - da página (${p}) => config: (minlance: ${a.minBid}-mincompra:${a.minBuy})`,K),o.data.items.length>0&&(Ve("| classificação   | nome do jogador     | lance    | compra    | tempo            | ação",K),1===p&&Ee("Resultados do Mercado de Transferências"));let i=e.idAbMaxPurchases;const n=[];for(let a=o.data.items.length-1;a>=0;a--){let c=o.data.items[a],d=c._auction,m=parseInt(c.rating),f=services.Localization.localizeAuctionTimeRemaining(d.expires);const{trackPayLoad:g,playerPayLoad:b}=Gt(c,t);n.push(g);let h=d.buyNowPrice,y=d.currentBid||d.startingBid,v=d.currentBid,A=e.idAbMaxBid,w=e.idAbBidExact?A:v?_t(A):A,T=e.idAbBidExact?w:v?It(y):y,S=e.idAbBuyPrice,$=e.idAbSellPrice,C=e.idAbMinRating,x=e.idAbMaxRating,_=u(y.toString(),6),I=u(h.toString(),6),P=u(c._staticData.name,15),B=u(f,15);const M=!(C||x)||(l=x,(s=m)>=C&&s<=l),k=qt("("+m+"-"+(M?"ok":"no")+") ",P,_,I,B);if(p<=20&&21===o.data.items.length?p++:p=1,i<1){k("skip >>> (Excedeu o número de compras/lances por busca)");continue}if(isNaN(S)&&isNaN(w)){k("skip >>> (Nenhum preço de compra ou lance fornecido)");continue}if(!c.preferredPosition&&e.idAbAddFilterGK){k("skip >>> (é um Goleiro)");continue}if(!M){k("skip >>> (a classificação não se encaixa nos critérios)");continue}if(Vt.has(d.tradeId)){k("skip >>> (Item Expirado)");continue}if(h>S&&y>w){k("skip >>> (maior do que o preço de compra/lance especificado)");continue}const D=services.User.getUser().coins.amount;if(D<h&&D<w)k("skip >>> (Coins insuficientes para comprar)");else if(h<=S)k("Tentar Comprar: "+h),i--,Vt.add(d.tradeId),await kt(c,P,h,$,!0);else if(A&&y<=w){if(d.expires>r){k("skip >>> (Esperando pelo tempo de expiração especificado)");continue}k("tentar lance: "+T),Vt.add(d.tradeId),i--,await kt(c,P,T,$)}}n.length&&Be(n)}else((e,t,i)=>{e.status===UtasErrorCode.CAPTCHA_REQUIRED||e.error&&e.error.code==UtasErrorCode.CAPTCHA_REQUIRED?t?(Ve("[!!!] Captcha foi acionado, tentando resolvê-lo",q),Ut()):We(i):Ve("[!!!] Autostopping bot, como a pesquisa falhou, verifique se você pode acessar o mercado de transferências no WebApp",q),m("capatcha"),zt()})(o,e.idAbSolveCaptcha,e.idAbCloseTabToggle);var s,l;Ee("Busca no mercado de transferência"),i()}))}))},Gt=(e,t)=>{const{id:i,definitionId:n,_auction:{buyNowPrice:o,tradeId:a,expires:r},_metaData:{id:s,skillMoves:l,weakFoot:c}={},_attributes:d,_staticData:{firstName:u,knownAs:p,lastName:m,name:f}={},nationId:g,leagueId:b,rareflag:h}=e,y=new Date;y.setSeconds(y.getSeconds()+r);return{trackPayLoad:{definitionId:n,price:o,expiresOn:y,id:i+"",assetId:s+"_"+t+"_"+h,auctionId:a,year:21,updatedOn:new Date},playerPayLoad:{_id:n,nationId:g,leagueId:b,staticData:{firstName:u,knownAs:p,lastName:m,name:f},skillMoves:l,weakFoot:c,assetId:s,attributes:d,year:21,rareflag:h}}},qt=(e,t,i,n,o)=>a=>{((e,t,i,n,o,a)=>{Ve("| "+e+" | "+t+" | "+i+" | "+n+" | "+o+" | "+a,K)})(e,t,i,n,o,a)},Kt=function(e){UTMarketSearchFiltersViewController.call(this)},Jt=UTMarketSearchFiltersViewController.prototype.init,Yt=UTMarketSearchFiltersViewController.prototype.viewDidAppear;JSUtils.inherits(Kt,UTMarketSearchFiltersViewController),Kt.prototype.init=function(){Jt.call(this);let e=this.getView();isPhone()||(e.__root.style="width: 52%; float: left;");const t=ft.call(this);let i=$(e.__root);const n=st.bind(this),a=n("Parar",(()=>zt.call(this))),r=n("Clear Log",(()=>He.call(this))),s=n("Start",(()=>Ht.call(this)),"call-to-action");o("BuyerSettings"),setInterval((()=>{const e=o("sessionStats");$("#"+se).html(e.searchCount)}),1e3),i.addClass("auto-buyer");const l=i.find(".button-container");l.addClass("buyer-actions"),l.find(".call-to-action").remove();l.find('button:contains("Redefinir")').on("click",(function(){gt()})),l.append($(s.__root)),l.append($(a.__root)),l.append($(r.__root)),i.find(".search-prices").append(t.__root),dt.call(this).then((e=>{i.find(".ut-item-search-view").first().prepend(e)}))},Kt.prototype.viewDidAppear=function(){this.getNavigationController().setNavigationVisibility(!0,!0),Yt.call(this)},Kt.prototype.getNavigationTitle=function(){return setTimeout((()=>{const e=$(".title");isPhone()&&e.addClass("buyer-header"),e.append(`<span style='color:red' id="${ce}"> INATIVO </span> | NÚMERO DE AÇÕES: <span id="${se}">0</span> \n  `),$(".ut-navigation-container-view--content").append(`<div ${isPhone()?"":"style=width:48%"}>\n            <textarea readonly id=${q} class="autoBuyerLog"></textarea>\n            <label>Resultados da Busca:</label>\n            <br/>\n            <textarea readonly id=${K} class="autoBuyerLog searchLog"></textarea>\n        </div>`),Me()})),"Elite AutoBuyer"};const Xt=()=>{const e=UTGameTabBarController.prototype.initWithViewControllers;UTGameTabBarController.prototype.initWithViewControllers=function(t){const i=new UTGameFlowNavigationController;i.initWithRootController(new Kt),i.tabBarItem=Qt(),t.push(i),e.call(this,t)}},Qt=()=>{const e=new UTTabBarItemView;return e.init(),e.setTag(8),e.setText("Elite AutoBuyer"),e.addClass("icon-transfer"),e},Zt=()=>"\n  ::-webkit-scrollbar {\n    -webkit-appearance: none;\n  }\n  ::-webkit-scrollbar:vertical {\n      width: 12px;\n  }\n  ::-webkit-scrollbar:horizontal {\n      height: 12px;\n  }\n  ::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 0, 0, .5);\n      border-radius: 10px;\n      border: 2px solid #ffffff;\n  }\n  ::-webkit-scrollbar-track {\n      border-radius: 10px;\n      background-color: #ffffff;\n  }",ei=function(){let e=!1;services.Localization&&$("h1.title").html()===services.Localization.localize("navbar.label.home")&&(e=!0),e?(()=>{const e=document.createElement("style");e.innerText='\n  .buyer-header {\n      font-size: 20px !important;\n  }\n  .buyer-settings {\n      width: 100%;\n  }\n  .buyer-settings-field {\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .phone .buyer-settings-field{\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 100%;\n    padding: 10px;\n  }\n  .buyer-settings-wrapper {\n    display: flex; \n    flex-wrap: wrap; \n    margin-top: 20px;\n  }\n  .buyer-settings-field .ut-toggle-cell-view{\n    justify-content: center;\n  }\n  .buyer-settings-field input:disabled {\n    background-color: #c3c6ce;\n    cursor: not-allowed;\n  }\n  .btn-test-notification\n  {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  input[type="number"]{\n    padding: 0 .5em;\n    border-radius: 0;\n    background-color: #262c38;\n    border: 1px solid #4ee6eb;\n    box-sizing: border-box;\n    color: #4ee6eb;\n    font-family: UltimateTeam,sans-serif;\n    font-size: 1em;\n    height: 2.8em;\n    opacity: 1;\n    width: 100%;\n  }\n  .autoBuyerLog {\n    font-size: 15px; \n    width: 100%;\n    height: 58%;\n    background-color:#141414;\n    color:#e2dde2;\n  }\n  .searchLog {\n    font-size: 10px; \n    height: 37%;\n  }\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n  .captcha-settings-view input,\n  .notification-settings-view input {\n    text-transform: none;\n  }\n  .phone .buyer-header{\n    font-size: 1.2em !important;\n  }\n  .phone .buyer-actions .btn-standard{\n    padding: 0;\n    font-size: 1.2em;\n    text-overflow: unset;\n  }\n  .filter-header-settings {\n    width: 100%;\n    padding: 10px;\n    font-family: UltimateTeamCondensed, sans-serif;\n    font-size: 1.6em;\n    color: #e2dde2;\n    text-transform: uppercase;\n    background-color: #171826;\n  }\n  .btn-save-filter {\n    width:100%\n  }\n  .btn-delete-filter {\n    width:50%\n  }\n  .multiple-filter {\n    width: 100%  !important;\n    display: flex  !important;\n    justify-content: center;\n    align-items: center;\n  }\n  .ut-pinned-list-container.ut-content-container {\n    padding: 0 !important;\n  }\n  .auto-buyer .enhancer-option-header {\n    display: none;\n  }\n  .auto-buyer .enhancer-toggle {\n    display: none !important;\n  }\n  ',isPhone()||(e.innerText+=Zt()),document.head.appendChild(e)})():setTimeout(ei,1e3)},ti=function(){let e=!1;services.Localization&&[atob("UGF5cGFs"),atob("WW91dHViZSBTdWJzY3JpcHRpb24="),atob("UGF0cmVvbg==")].every((e=>utils.PopupManager.getLocalizedDialogOption(e)===e))&&(e=!0),e?(Xt(),ei()):setTimeout(ti,1e3)};ti()})();
