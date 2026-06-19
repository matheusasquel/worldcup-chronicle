/* =========================================================
   COPA DO MUNDO FIFA (1930–2022) — Vanilla JS
   ========================================================= */

// ============ DATA ============
const EDICOES = [
  {ano:1930,sede:"Uruguai",flag:"🇺🇾",campeao:"Uruguai",vice:"Argentina",placar:"4 x 2",terceiro:"EUA",quarto:"Iugoslávia",cidade:"Montevidéu",estadio:"Centenário",prorrogacao:false,penaltis:false,gols:5,amarelos:0,vermelhos:0,faltas:35,selec:13,golsTotal:70,amTotal:0,verTotal:1,artilheiro:"Guillermo Stábile (8 gols)",curio:"Primeira final da história das Copas."},
  {ano:1934,sede:"Itália",flag:"🇮🇹",campeao:"Itália",vice:"Tchecoslováquia",placar:"2 x 1",terceiro:"Alemanha",quarto:"Áustria",cidade:"Roma",estadio:"Nazionale PNF",prorrogacao:true,penaltis:false,gols:3,amarelos:0,vermelhos:0,faltas:38,selec:16,golsTotal:70,amTotal:0,verTotal:1,artilheiro:"Oldřich Nejedlý (5 gols)",curio:"Primeira Copa decidida na prorrogação."},
  {ano:1938,sede:"França",flag:"🇫🇷",campeao:"Itália",vice:"Hungria",placar:"4 x 2",terceiro:"Brasil",quarto:"Suécia",cidade:"Paris",estadio:"Olympique de Colombes",prorrogacao:false,penaltis:false,gols:6,amarelos:0,vermelhos:0,faltas:30,selec:15,golsTotal:84,amTotal:0,verTotal:4,artilheiro:"Leônidas (7 gols)",curio:"Itália se torna o primeiro bicampeão mundial."},
  {ano:1950,sede:"Brasil",flag:"🇧🇷",campeao:"Uruguai",vice:"Brasil",placar:"2 x 1",terceiro:"Suécia",quarto:"Espanha",cidade:"Rio de Janeiro",estadio:"Maracanã",prorrogacao:false,penaltis:false,gols:3,amarelos:0,vermelhos:0,faltas:34,selec:13,golsTotal:88,amTotal:0,verTotal:0,artilheiro:"Ademir (8 gols)",curio:"Maracanazo: maior trauma do futebol brasileiro."},
  {ano:1954,sede:"Suíça",flag:"🇨🇭",campeao:"Alemanha Ocidental",vice:"Hungria",placar:"3 x 2",terceiro:"Áustria",quarto:"Uruguai",cidade:"Berna",estadio:"Wankdorf",prorrogacao:false,penaltis:false,gols:5,amarelos:0,vermelhos:0,faltas:40,selec:16,golsTotal:140,amTotal:0,verTotal:3,artilheiro:"Sándor Kocsis (11 gols)",curio:"Maior média de gols por jogo da história: 5,38."},
  {ano:1958,sede:"Suécia",flag:"🇸🇪",campeao:"Brasil",vice:"Suécia",placar:"5 x 2",terceiro:"França",quarto:"Alemanha Oc.",cidade:"Estocolmo",estadio:"Råsunda",prorrogacao:false,penaltis:false,gols:7,amarelos:0,vermelhos:0,faltas:32,selec:16,golsTotal:126,amTotal:0,verTotal:3,artilheiro:"Just Fontaine (13 gols)",curio:"Pelé, com 17 anos, brilha e Brasil é campeão pela 1ª vez."},
  {ano:1962,sede:"Chile",flag:"🇨🇱",campeao:"Brasil",vice:"Tchecoslováquia",placar:"3 x 1",terceiro:"Chile",quarto:"Iugoslávia",cidade:"Santiago",estadio:"Nacional",prorrogacao:false,penaltis:false,gols:4,amarelos:0,vermelhos:0,faltas:36,selec:16,golsTotal:89,amTotal:0,verTotal:6,artilheiro:"6 atletas com 4 gols",curio:"Garrincha lidera o bi após lesão de Pelé."},
  {ano:1966,sede:"Inglaterra",flag:"🏴",campeao:"Inglaterra",vice:"Alemanha Ocidental",placar:"4 x 2",terceiro:"Portugal",quarto:"URSS",cidade:"Londres",estadio:"Wembley",prorrogacao:true,penaltis:false,gols:6,amarelos:0,vermelhos:0,faltas:39,selec:16,golsTotal:89,amTotal:0,verTotal:5,artilheiro:"Eusébio (9 gols)",curio:"Único título da Inglaterra; gol fantasma de Hurst."},
  {ano:1970,sede:"México",flag:"🇲🇽",campeao:"Brasil",vice:"Itália",placar:"4 x 1",terceiro:"Alemanha Oc.",quarto:"Uruguai",cidade:"Cidade do México",estadio:"Azteca",prorrogacao:false,penaltis:false,gols:5,amarelos:0,vermelhos:0,faltas:32,selec:16,golsTotal:95,amTotal:51,verTotal:0,artilheiro:"Gerd Müller (10 gols)",curio:"Brasil tricampeão e Jules Rimet vai para sempre ao país."},
  {ano:1974,sede:"Alemanha Ocidental",flag:"🇩🇪",campeao:"Alemanha Ocidental",vice:"Holanda",placar:"2 x 1",terceiro:"Polônia",quarto:"Brasil",cidade:"Munique",estadio:"Olympiastadion",prorrogacao:false,penaltis:false,gols:3,amarelos:5,vermelhos:0,faltas:38,selec:16,golsTotal:97,amTotal:87,verTotal:5,artilheiro:"Grzegorz Lato (7 gols)",curio:"Estreia da taça atual da FIFA."},
  {ano:1978,sede:"Argentina",flag:"🇦🇷",campeao:"Argentina",vice:"Holanda",placar:"3 x 1",terceiro:"Brasil",quarto:"Itália",cidade:"Buenos Aires",estadio:"Monumental",prorrogacao:true,penaltis:false,gols:4,amarelos:5,vermelhos:0,faltas:42,selec:16,golsTotal:102,amTotal:58,verTotal:3,artilheiro:"Mario Kempes (6 gols)",curio:"Primeiro título argentino, em casa."},
  {ano:1982,sede:"Espanha",flag:"🇪🇸",campeao:"Itália",vice:"Alemanha Ocidental",placar:"3 x 1",terceiro:"Polônia",quarto:"França",cidade:"Madri",estadio:"Santiago Bernabéu",prorrogacao:false,penaltis:false,gols:4,amarelos:4,vermelhos:0,faltas:42,selec:24,golsTotal:146,amTotal:99,verTotal:5,artilheiro:"Paolo Rossi (6 gols)",curio:"Primeira Copa com 24 seleções; Itália tri."},
  {ano:1986,sede:"México",flag:"🇲🇽",campeao:"Argentina",vice:"Alemanha Ocidental",placar:"3 x 2",terceiro:"França",quarto:"Bélgica",cidade:"Cidade do México",estadio:"Azteca",prorrogacao:false,penaltis:false,gols:5,amarelos:1,vermelhos:0,faltas:40,selec:24,golsTotal:132,amTotal:131,verTotal:8,artilheiro:"Gary Lineker (6 gols)",curio:"A 'Mão de Deus' e o gol do século por Maradona."},
  {ano:1990,sede:"Itália",flag:"🇮🇹",campeao:"Alemanha Ocidental",vice:"Argentina",placar:"1 x 0",terceiro:"Itália",quarto:"Inglaterra",cidade:"Roma",estadio:"Olímpico",prorrogacao:false,penaltis:false,gols:1,amarelos:6,vermelhos:2,faltas:50,selec:24,golsTotal:115,amTotal:164,verTotal:16,artilheiro:"Salvatore Schillaci (6 gols)",curio:"Final mais violenta da história; 2 expulsões."},
  {ano:1994,sede:"EUA",flag:"🇺🇸",campeao:"Brasil",vice:"Itália",placar:"0 x 0 (3x2 pen.)",terceiro:"Suécia",quarto:"Bulgária",cidade:"Pasadena",estadio:"Rose Bowl",prorrogacao:true,penaltis:true,gols:0,amarelos:4,vermelhos:0,faltas:48,selec:24,golsTotal:141,amTotal:227,verTotal:15,artilheiro:"Stoichkov e Salenko (6 gols)",curio:"Primeira final decidida nos pênaltis; Brasil tetra."},
  {ano:1998,sede:"França",flag:"🇫🇷",campeao:"França",vice:"Brasil",placar:"3 x 0",terceiro:"Croácia",quarto:"Holanda",cidade:"Saint-Denis",estadio:"Stade de France",prorrogacao:false,penaltis:false,gols:3,amarelos:6,vermelhos:1,faltas:46,selec:32,golsTotal:171,amTotal:258,verTotal:22,artilheiro:"Davor Šuker (6 gols)",curio:"Primeira Copa com 32 seleções; Zidane brilha."},
  {ano:2002,sede:"Coreia/Japão",flag:"🇰🇷",campeao:"Brasil",vice:"Alemanha",placar:"2 x 0",terceiro:"Turquia",quarto:"Coreia do Sul",cidade:"Yokohama",estadio:"International",prorrogacao:false,penaltis:false,gols:2,amarelos:2,vermelhos:0,faltas:36,selec:32,golsTotal:161,amTotal:272,verTotal:17,artilheiro:"Ronaldo (8 gols)",curio:"Brasil penta; Ronaldo Fenômeno volta dos lesões."},
  {ano:2006,sede:"Alemanha",flag:"🇩🇪",campeao:"Itália",vice:"França",placar:"1 x 1 (5x3 pen.)",terceiro:"Alemanha",quarto:"Portugal",cidade:"Berlim",estadio:"Olympiastadion",prorrogacao:true,penaltis:true,gols:2,amarelos:4,vermelhos:1,faltas:43,selec:32,golsTotal:147,amTotal:345,verTotal:28,artilheiro:"Miroslav Klose (5 gols)",curio:"Cabeçada de Zidane em Materazzi marca a final."},
  {ano:2010,sede:"África do Sul",flag:"🇿🇦",campeao:"Espanha",vice:"Holanda",placar:"1 x 0",terceiro:"Alemanha",quarto:"Uruguai",cidade:"Joanesburgo",estadio:"Soccer City",prorrogacao:true,penaltis:false,gols:1,amarelos:14,vermelhos:1,faltas:47,selec:32,golsTotal:145,amTotal:261,verTotal:17,artilheiro:"Thomas Müller (5 gols)",curio:"Espanha conquista seu primeiro título mundial."},
  {ano:2014,sede:"Brasil",flag:"🇧🇷",campeao:"Alemanha",vice:"Argentina",placar:"1 x 0",terceiro:"Holanda",quarto:"Brasil",cidade:"Rio de Janeiro",estadio:"Maracanã",prorrogacao:true,penaltis:false,gols:1,amarelos:3,vermelhos:0,faltas:32,selec:32,golsTotal:171,amTotal:187,verTotal:10,artilheiro:"James Rodríguez (6 gols)",curio:"Mineirazo: Brasil 1x7 Alemanha nas semifinais."},
  {ano:2018,sede:"Rússia",flag:"🇷🇺",campeao:"França",vice:"Croácia",placar:"4 x 2",terceiro:"Bélgica",quarto:"Inglaterra",cidade:"Moscou",estadio:"Lujniki",prorrogacao:false,penaltis:false,gols:6,amarelos:4,vermelhos:0,faltas:25,selec:32,golsTotal:169,amTotal:219,verTotal:4,artilheiro:"Harry Kane (6 gols)",curio:"Estreia do VAR em Copas; Mbappé revela-se ao mundo."},
  {ano:2022,sede:"Catar",flag:"🇶🇦",campeao:"Argentina",vice:"França",placar:"3 x 3 (4x2 pen.)",terceiro:"Croácia",quarto:"Marrocos",cidade:"Lusail",estadio:"Lusail Iconic",prorrogacao:true,penaltis:true,gols:6,amarelos:17,vermelhos:0,faltas:45,selec:32,golsTotal:172,amTotal:227,verTotal:4,artilheiro:"Kylian Mbappé (8 gols)",curio:"Messi consagra-se; final considerada a melhor da história."},
];

const HISTORIA = [
  {year:"1928",title:"A ideia nasce",text:"Jules Rimet, presidente da FIFA, propõe a criação de um torneio mundial de seleções."},
  {year:"1930",title:"A primeira Copa",text:"O Uruguai sedia e conquista a edição inaugural no Estádio Centenário."},
  {year:"1934–1938",title:"Antes da guerra",text:"A Itália de Vittorio Pozzo conquista dois títulos consecutivos."},
  {year:"1942 e 1946",title:"Cancelamentos",text:"Duas edições não foram realizadas por causa da Segunda Guerra Mundial."},
  {year:"1950",title:"Retorno no Maracanã",text:"O Brasil sedia e o Uruguai vence o histórico 'Maracanazo'."},
  {year:"1958–1970",title:"Era Pelé",text:"O Brasil conquista três títulos em quatro Copas e leva a Jules Rimet definitivamente."},
  {year:"1982",title:"Expansão para 24 seleções",text:"A FIFA amplia o torneio na edição da Espanha."},
  {year:"1998",title:"Expansão para 32 seleções",text:"Mais inclusão e novos países representados na França."},
  {year:"2006",title:"Cartão amarelo se consolida",text:"Crescente uso do amarelo: 345 cartões na edição alemã."},
  {year:"2018",title:"Introdução do VAR",text:"Tecnologia revoluciona a arbitragem na Rússia."},
  {year:"2026",title:"Expansão para 48 seleções",text:"Próxima edição (EUA/México/Canadá) terá 48 países."},
];

const MAIORES = [
  {pais:"Brasil",flag:"🇧🇷",titulos:5,part:22,v:76,e:19,d:19,gm:237},
  {pais:"Alemanha",flag:"🇩🇪",titulos:4,part:20,v:68,e:21,d:23,gm:232},
  {pais:"Itália",flag:"🇮🇹",titulos:4,part:18,v:45,e:21,d:17,gm:128},
  {pais:"Argentina",flag:"🇦🇷",titulos:3,part:18,v:47,e:16,d:24,gm:152},
  {pais:"França",flag:"🇫🇷",titulos:2,part:16,v:39,e:13,d:21,gm:136},
  {pais:"Uruguai",flag:"🇺🇾",titulos:2,part:14,v:24,e:12,d:21,gm:89},
  {pais:"Inglaterra",flag:"🏴",titulos:1,part:16,v:32,e:21,d:16,gm:104},
  {pais:"Espanha",flag:"🇪🇸",titulos:1,part:16,v:31,e:15,d:19,gm:108},
];

const RANKING_DISC = [
  {pais:"Argentina",am:124,ver:11},
  {pais:"Holanda",am:99,ver:7},
  {pais:"Brasil",am:108,ver:11},
  {pais:"Alemanha",am:113,ver:6},
  {pais:"México",am:88,ver:8},
  {pais:"Itália",am:93,ver:8},
  {pais:"Uruguai",am:86,ver:11},
];

// ============ NAVBAR ============
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
  updateActiveLink();
});

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}

document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// ============ COUNTERS ============
const counters = document.querySelectorAll('.stat .num');
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      counterObs.unobserve(e.target);
    }
  });
},{threshold:.4});
counters.forEach(c => counterObs.observe(c));

function animateCount(el) {
  const target = +el.dataset.count;
  const dur = 1800, start = performance.now();
  function tick(t) {
    const p = Math.min((t - start)/dur, 1);
    const eased = 1 - Math.pow(1-p, 3);
    el.textContent = Math.floor(target * eased).toLocaleString('pt-BR');
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString('pt-BR');
  }
  requestAnimationFrame(tick);
}

// ============ REVEAL ============
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ============ HISTÓRIA (timeline vertical) ============
const histEl = document.getElementById('historiaTimeline');
histEl.innerHTML = HISTORIA.map(h => `
  <div class="tl-item"><div class="tl-card">
    <div class="year">${h.year}</div>
    <h4>${h.title}</h4>
    <p>${h.text}</p>
  </div></div>`).join('');

// ============ CAMPEÕES TABLE ============
let sortAsc = true;
const tbody = document.querySelector('#champTable tbody');
const searchInput = document.getElementById('searchInput');
const filterCampeao = document.getElementById('filterCampeao');

function renderTable() {
  const q = searchInput.value.trim().toLowerCase();
  const f = filterCampeao.value;
  let rows = [...EDICOES];
  rows.sort((a,b) => sortAsc ? a.ano - b.ano : b.ano - a.ano);
  rows = rows.filter(r => {
    const matchQ = !q || `${r.ano} ${r.sede} ${r.campeao} ${r.vice}`.toLowerCase().includes(q);
    const matchF = !f || r.campeao === f;
    return matchQ && matchF;
  });
  tbody.innerHTML = rows.map(r => `
    <tr>
      <td><strong>${r.ano}</strong></td>
      <td>${r.flag} ${r.sede}</td>
      <td class="champ"><span class="champ">${r.campeao}</span></td>
      <td>${r.vice}</td>
      <td>${r.placar}</td>
      <td>${r.terceiro}</td>
      <td>${r.quarto}</td>
    </tr>`).join('') || `<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--muted)">Nenhum resultado</td></tr>`;
}

const uniqueChamps = [...new Set(EDICOES.map(e => e.campeao))].sort();
filterCampeao.innerHTML = `<option value="">Filtrar por campeão</option>` + uniqueChamps.map(c => `<option value="${c}">${c}</option>`).join('');
searchInput.addEventListener('input', renderTable);
filterCampeao.addEventListener('change', renderTable);
document.getElementById('sortYear').addEventListener('click', () => { sortAsc = !sortAsc; renderTable(); });
renderTable();

// ============ FINAIS ============
document.getElementById('finalsGrid').innerHTML = EDICOES.map(e => `
  <article class="final-card">
    <div class="fc-year">${e.ano}</div>
    <div class="fc-venue">${e.flag} ${e.cidade} — ${e.estadio}</div>
    <div class="fc-score">${e.campeao} <em>${e.placar}</em> ${e.vice}</div>
    <ul>
      <li><span>Prorrogação</span><strong>${e.prorrogacao?'Sim':'Não'}</strong></li>
      <li><span>Pênaltis</span><strong>${e.penaltis?'Sim':'Não'}</strong></li>
      <li><span>Gols na final</span><strong>${e.gols}</strong></li>
      <li><span>Cartões amarelos</span><strong>${e.amarelos}</strong></li>
      <li><span>Cartões vermelhos</span><strong>${e.vermelhos}</strong></li>
      <li><span>Faltas</span><strong>${e.faltas}</strong></li>
    </ul>
    <div class="fc-curio">💡 ${e.curio}</div>
  </article>`).join('');

// ============ MAIORES CAMPEÕES ============
document.getElementById('champCards').innerHTML = MAIORES.map(c => `
  <div class="country-card">
    <div class="flag">${c.flag}</div>
    <h3>${c.pais}</h3>
    <div class="stars">${'★'.repeat(c.titulos)}</div>
    <div class="titles">${c.titulos} título${c.titulos>1?'s':''}</div>
    <dl>
      <dt>Participações</dt><dd>${c.part}</dd>
      <dt>Vitórias</dt><dd>${c.v}</dd>
      <dt>Empates</dt><dd>${c.e}</dd>
      <dt>Derrotas</dt><dd>${c.d}</dd>
      <dt>Gols</dt><dd>${c.gm}</dd>
    </dl>
  </div>`).join('');

// ============ DISCIPLINA ============
const rankSorted = [...RANKING_DISC].sort((a,b) => (b.am + b.ver*3) - (a.am + a.ver*3));
document.getElementById('disciplineRank').innerHTML = rankSorted.map(r => `
  <li><span>${r.pais}</span><span><span class="dot yellow" title="amarelos"></span> ${r.am} &nbsp; <span class="dot red" title="vermelhos"></span> ${r.ver}</span></li>
`).join('');

// ============ TIMELINE HORIZONTAL ============
document.getElementById('timelineH').innerHTML = EDICOES.map(e => `
  <div class="tl-year" data-ano="${e.ano}">
    <div class="y">${e.ano}</div>
    <div class="c">${e.flag} ${e.campeao}</div>
  </div>`).join('');
document.querySelectorAll('.tl-year').forEach(el => {
  el.addEventListener('click', () => openModal(+el.dataset.ano));
});

// ============ MODAL ============
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
modal.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function openModal(ano) {
  const e = EDICOES.find(x => x.ano === ano);
  if (!e) return;
  modalBody.innerHTML = `
    <h3>Copa de ${e.ano} — ${e.flag} ${e.sede}</h3>
    <p class="sub">${e.cidade} • ${e.estadio}</p>
    <div class="grid">
      <div><b>Campeão</b>${e.campeao}</div>
      <div><b>Vice</b>${e.vice}</div>
      <div><b>Placar da Final</b>${e.placar}</div>
      <div><b>Artilheiro</b>${e.artilheiro}</div>
      <div><b>Gols (edição)</b>${e.golsTotal}</div>
      <div><b>Seleções</b>${e.selec}</div>
      <div><b>Amarelos (edição)</b>${e.amTotal}</div>
      <div><b>Vermelhos (edição)</b>${e.verTotal}</div>
    </div>
    <p style="margin-top:16px;color:var(--muted)">💡 ${e.curio}</p>`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }

// ============ CHARTS (Canvas) ============
const tooltip = document.getElementById('tooltip');

function drawBarChart(canvas, dataset, color, label) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.clientWidth, cssH = canvas.clientHeight;
  canvas.width = cssW * dpr; canvas.height = cssH * dpr;
  ctx.scale(dpr, dpr);
  const W = cssW, H = cssH;
  const padL = 44, padR = 16, padT = 16, padB = 36;
  const chartW = W - padL - padR, chartH = H - padT - padB;
  const max = Math.max(...dataset.map(d => d.value)) * 1.15 || 1;
  const bw = chartW / dataset.length;

  ctx.clearRect(0,0,W,H);
  // axes grid
  ctx.strokeStyle = 'rgba(255,255,255,.06)'; ctx.lineWidth = 1;
  ctx.fillStyle = '#8fa0bd'; ctx.font = '11px Inter, sans-serif';
  for (let i=0;i<=4;i++){
    const y = padT + chartH * (i/4);
    ctx.beginPath(); ctx.moveTo(padL,y); ctx.lineTo(W-padR,y); ctx.stroke();
    ctx.fillText(Math.round(max*(1-i/4)), 4, y+4);
  }

  const bars = [];
  dataset.forEach((d,i) => {
    const x = padL + i*bw + bw*0.15;
    const w = bw*0.7;
    const h = (d.value/max) * chartH;
    const y = padT + chartH - h;
    const grad = ctx.createLinearGradient(0,y,0,y+h);
    grad.addColorStop(0,color[0]); grad.addColorStop(1,color[1]);
    ctx.fillStyle = grad;
    roundRect(ctx,x,y,w,h,4); ctx.fill();
    bars.push({x,y,w,h,d});
    if (i % Math.ceil(dataset.length/12) === 0) {
      ctx.fillStyle = '#8fa0bd';
      ctx.fillText(d.label, x, H - padB + 14);
    }
  });
  canvas._bars = bars;
  canvas._label = label;
}

function roundRect(ctx,x,y,w,h,r) {
  if (h < 1) h = 1;
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.lineTo(x+w-r,y);
  ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h);
  ctx.lineTo(x,y+h);
  ctx.lineTo(x,y+r);
  ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

function attachTooltip(canvas) {
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const bars = canvas._bars || [];
    const hit = bars.find(b => mx>=b.x && mx<=b.x+b.w && my>=b.y && my<=b.y+b.h);
    if (hit) {
      tooltip.innerHTML = `<strong>${hit.d.label}</strong><br>${canvas._label}: ${hit.d.value}`;
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top = (e.clientY + 14) + 'px';
      tooltip.classList.add('show');
      canvas.style.cursor = 'pointer';
    } else {
      tooltip.classList.remove('show');
      canvas.style.cursor = 'default';
    }
  });
  canvas.addEventListener('mouseleave', () => tooltip.classList.remove('show'));
}

function renderAllCharts() {
  const labels = EDICOES.map(e => e.ano);
  drawBarChart(document.getElementById('chartGols'),
    EDICOES.map(e => ({label:e.ano, value:e.golsTotal})),
    ['#13c47e','#0a6a47'], 'Gols');
  drawBarChart(document.getElementById('chartSelec'),
    EDICOES.map(e => ({label:e.ano, value:e.selec})),
    ['#f1c40f','#8a5a00'], 'Seleções');
  drawBarChart(document.getElementById('chartAm'),
    EDICOES.map(e => ({label:e.ano, value:e.amTotal})),
    ['#ffd54a','#a07b00'], 'Amarelos');
  drawBarChart(document.getElementById('chartVer'),
    EDICOES.map(e => ({label:e.ano, value:e.verTotal})),
    ['#e74c3c','#7a1d12'], 'Vermelhos');
}
['chartGols','chartSelec','chartAm','chartVer'].forEach(id => attachTooltip(document.getElementById(id)));
renderAllCharts();
window.addEventListener('resize', () => { clearTimeout(window._rt); window._rt = setTimeout(renderAllCharts, 150); });

console.log('🏆 Copa do Mundo FIFA Portal — pronto.');