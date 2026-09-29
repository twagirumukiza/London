/* ============================================
   LONDON GUIDE — theme, font, menu, i18n
   ============================================ */

const translations = {
  fr: {
    "search.placeholder": "Rechercher…",
    "nav.home": "Accueil",
    "nav.map": "Carte",
    "nav.quartiers": "Quartiers",
    "nav.about": "À propos",
    "nav.blitz": "Londres sous les bombes",
    "nav.stages": "Les quartiers",
    "mobile.elsewhere": "Ailleurs",
    "hero.subtitle": "CARNET DE DÉCOUVERTE · LONDRES",
    "hero.title": "LONDON — CITY OF POSSIBILITIES",
    "hero.desc": "Après un an à Chelsea, une exploration locale plutôt qu’une liste d’incontournables. Chaque quartier a sa propre identité.",
    "hero.cta": "Explorer les quartiers",
    "map.title": "Carte des quartiers",
    "map.desc": "Clique sur un point pour ouvrir le récit du quartier.",
    "map.hint": "Clique un point jaune pour aller au récit du quartier.",
    "intro.tagline": "LONDON — CITY OF POSSIBILITIES",
    "intro.lead": "Une ville, mille quartiers, une multitude de façons de la vivre.",
    "intro.text": "The Big Smoke a changé. Londres n’est plus la ville noyée dans les fumées de charbon qui lui ont valu ce surnom. Aujourd’hui, c’est une métropole immense, multiple, parfois vertigineuse, mais surtout une ville de quartiers. Et c’est ce Londres-là que je veux raconter : celui que j’ai connu en y vivant, celui de ses rues, de ses ambiances et des quartiers auxquels je suis resté attaché.",
    "stat.quartiers": "QUARTIERS",
    "stat.photos": "PHOTOS",
    "stat.ville": "VILLE",
    "quartiers.title": "Les quartiers",
    "quartiers.desc": "Dix-neuf parcours pour (re)découvrir la ville autrement.",
    "a.faire": "À faire",
    "blitz.title": "Londres sous les bombes",
    "blitz.subtitle": "Le Blitz — 1940-1941",
    "tabs.afaire": "À faire",
    "wm.esprit": "L’esprit du parcours",
    "wm.tab.whitehall": "A · Whitehall",
    "wm.tab.downing": "B · Downing Street",
    "wm.tab.palace": "C · Palace of Westminster",
    "wm.tab.bigben": "Big Ben",
    "wm.tab.bigben": "Big Ben",
    "wm.tab.abbey": "D · Westminster Abbey",
    "wm.tab.smith": "E · Smith Square",
    "wm.tab.cowley": "F · Cowley Street",
    "wm.tab.littleben": "G · Little Ben",
    "wm.tab.buckingham": "H · Buckingham Palace",
    "wm.tab.stjames": "I · St James’s Park",
    "wm.tab.mall": "J · The Mall",
    "wm.tab.greenpark": "K · Green Park",
    "wm.tab.embankment": "L · Victoria Embankment",
    "wm.tab.trafalgar": "M · Trafalgar Square",
    "wm.tab.ambiance": "Ambiance",
    "wm.tab.manger": "Où se restaurer",
    "wm.tab.venir": "Comment venir",
    "wm.tab.manquer": "À ne pas manquer",
    "so.tab.square": "Soho Square",
    "so.tab.carnaby": "Carnaby Street",
    "so.tab.berwick": "Berwick Street",
    "so.tab.denmark": "Denmark Street",
    "so.tab.ronnie": "Ronnie Scott’s",
    "so.tab.noses": "Seven Noses",
    "so.tab.chinatown": "Chinatown",
    "so.tab.leicester": "Leicester Square",
    "so.tab.piccadilly": "Piccadilly Circus",
    "so.tab.outernet": "Outernet",
    "so.tab.pub": "Le pub",
    "so.tab.manger": "Où manger",
    "so.tab.metro": "Métro & marche",
    "label.borough": "Borough",
    "label.walkmap": "Plan de balade · cliquer pour agrandir",

    "belle.promenade": "Belle promenade",
    "soho.note": "Soho est particulièrement intéressant le soir : restaurants, théâtres, musique et vie nocturne se concentrent dans un espace relativement compact.",
    "city.note": "C’est un Londres complètement différent de Chelsea.",
    "shoreditch.note": "C’est probablement l’un des quartiers à privilégier si tu veux voir un Londres très différent du Chelsea résidentiel. Scène créative et marchés.",
    "hampstead.note": "Excellent choix pour sortir du Londres touristique. Grands espaces verts et vues sur la ville.",
    "notting.note": "Notting Hill mérite vraiment une balade dans les petites rues plutôt qu’une simple visite de Portobello.",
    "kensington.note": "Puisque tu as vécu à Chelsea, je ne mets pas Chelsea au centre. En revanche, une journée Kensington que tu n’aurais peut-être pas vécue comme touriste :",
    "chelsea.note": "Puisque tu y as vécu, je transforme la visite en balade personnelle :",
    "harbour.note": "Prolongement naturel de Chelsea, côté rivière et marina. Un Londres plus confidentiel, entre design et front de mer.",
    "kingscross.note": "Le quartier a énormément changé et vaut la peine d’être revu si tu connais Londres depuis longtemps.",
    "greenwich.note": "Greenwich donne presque l’impression de quitter Londres alors qu’on est toujours dans la ville. Patrimoine maritime et Observatoire royal.",
    "brixton.note": "Très intéressant pour comprendre le Londres multiculturel contemporain.",
    "bromley.note": "La plus grande superficie d’espaces verts de Londres. Un vrai changement de rythme, à 20–30 minutes du centre.",
    "about.title": "À propos",
    "about.text": "Ce carnet n’est pas un guide touristique classique. Il part du fait que tu as déjà vécu un an à Chelsea et cherche à te faire (re)découvrir Londres à travers ses quartiers, du plus officiel au plus local."
  },
  en: {
    "search.placeholder": "Search…",
    "nav.home": "Home",
    "nav.map": "Map",
    "nav.quartiers": "Neighbourhoods",
    "nav.about": "About",
    "nav.blitz": "London under the bombs",
    "nav.stages": "The neighbourhoods",
    "mobile.elsewhere": "Elsewhere",
    "hero.subtitle": "DISCOVERY NOTEBOOK · LONDON",
    "hero.title": "LONDON — CITY OF POSSIBILITIES",
    "hero.desc": "After a year in Chelsea, a local exploration rather than a list of must-sees. Each neighbourhood has its own identity.",
    "hero.cta": "Explore the neighbourhoods",
    "map.title": "Neighbourhood map",
    "map.desc": "Click a pin to open that neighbourhood’s story.",
    "map.hint": "Click a yellow pin to jump to that neighbourhood’s story.",
    "intro.tagline": "LONDON — CITY OF POSSIBILITIES",
    "intro.lead": "One city, a thousand neighbourhoods, countless ways to live it.",
    "intro.text": "The Big Smoke has changed. London is no longer the city drowned in coal smoke that earned it that nickname. Today it is a vast, multiple, sometimes dizzying metropolis — above all a city of neighbourhoods. And that is the London I want to tell: the one I knew while living there, of its streets, its moods, and the areas I remain attached to.",
    "stat.quartiers": "AREAS",
    "stat.photos": "PHOTOS",
    "stat.ville": "CITY",
    "quartiers.title": "The neighbourhoods",
    "quartiers.desc": "Nineteen routes to (re)discover the city differently.",
    "a.faire": "What to do",
    "blitz.title": "London under the bombs",
    "blitz.subtitle": "The Blitz — 1940-1941",
    "tabs.afaire": "What to do",
    "wm.esprit": "The spirit of the walk",
    "wm.tab.whitehall": "A · Whitehall",
    "wm.tab.downing": "B · Downing Street",
    "wm.tab.palace": "C · Palace of Westminster",
    "wm.tab.bigben": "Big Ben",
    "wm.tab.bigben": "Big Ben",
    "wm.tab.abbey": "D · Westminster Abbey",
    "wm.tab.smith": "E · Smith Square",
    "wm.tab.cowley": "F · Cowley Street",
    "wm.tab.littleben": "G · Little Ben",
    "wm.tab.buckingham": "H · Buckingham Palace",
    "wm.tab.stjames": "I · St James’s Park",
    "wm.tab.mall": "J · The Mall",
    "wm.tab.greenpark": "K · Green Park",
    "wm.tab.embankment": "L · Victoria Embankment",
    "wm.tab.trafalgar": "M · Trafalgar Square",
    "wm.tab.ambiance": "Atmosphere",
    "wm.tab.manger": "Where to eat",
    "wm.tab.venir": "How to get there",
    "wm.tab.manquer": "Don’t miss",
    "so.tab.square": "Soho Square",
    "so.tab.carnaby": "Carnaby Street",
    "so.tab.berwick": "Berwick Street",
    "so.tab.denmark": "Denmark Street",
    "so.tab.ronnie": "Ronnie Scott’s",
    "so.tab.noses": "Seven Noses",
    "so.tab.chinatown": "Chinatown",
    "so.tab.leicester": "Leicester Square",
    "so.tab.piccadilly": "Piccadilly Circus",
    "so.tab.outernet": "Outernet",
    "so.tab.pub": "The pub",
    "so.tab.manger": "Where to eat",
    "so.tab.metro": "Tube & walking",
    "label.borough": "Borough",
    "label.walkmap": "Walking map · click to enlarge",

    "belle.promenade": "Nice walk",
    "soho.note": "Soho is especially interesting in the evening: restaurants, theatres, music and nightlife concentrate in a relatively compact space.",
    "city.note": "This is a completely different London from Chelsea.",
    "shoreditch.note": "Probably one of the areas to prioritise if you want a London very different from residential Chelsea. Creative scene and markets.",
    "hampstead.note": "An excellent choice to get away from tourist London. Large green spaces and views over the city.",
    "notting.note": "Notting Hill really rewards a wander through the side streets rather than just a visit to Portobello.",
    "kensington.note": "Since you lived in Chelsea, I’m not putting Chelsea at the centre. Instead, a Kensington day you might not have lived as a tourist:",
    "chelsea.note": "Since you lived there, I turn the visit into a personal walk:",
    "harbour.note": "A natural extension of Chelsea, by the river and marina. A more discreet London, between design and waterfront.",
    "kingscross.note": "The area has changed enormously and is worth revisiting if you’ve known London for a long time.",
    "greenwich.note": "Greenwich almost feels like leaving London while still being in the city. Maritime heritage and the Royal Observatory.",
    "brixton.note": "Very interesting for understanding contemporary multicultural London.",
    "bromley.note": "The largest area of green space in London. A real change of pace, 20–30 minutes from the centre.",
    "about.title": "About",
    "about.text": "This notebook is not a classic tourist guide. It starts from the fact that you already lived a year in Chelsea and aims to help you (re)discover London through its neighbourhoods, from the most official to the most local."
  },
  es: {
    "search.placeholder": "Buscar…",
    "nav.home": "Inicio",
    "nav.map": "Mapa",
    "nav.quartiers": "Barrios",
    "nav.about": "Acerca de",
    "nav.blitz": "Londres bajo las bombas",
    "nav.stages": "Los barrios",
    "mobile.elsewhere": "Otros destinos",
    "hero.subtitle": "CUADERNO DE DESCUBRIMIENTO · LONDRES",
    "hero.title": "LONDON — CITY OF POSSIBILITIES",
    "hero.desc": "Tras un año en Chelsea, una exploración local en lugar de una lista de imprescindibles. Cada barrio tiene su propia identidad.",
    "hero.cta": "Explorar los barrios",
    "map.title": "Mapa de barrios",
    "map.desc": "Haz clic en un punto para abrir el relato del barrio.",
    "map.hint": "Haz clic en un punto amarillo para ir al relato del barrio.",
    "intro.tagline": "LONDON — CITY OF POSSIBILITIES",
    "intro.lead": "Una ciudad, mil barrios, incontables formas de vivirla.",
    "intro.text": "The Big Smoke ha cambiado. Londres ya no es la ciudad ahogada en el humo del carbón que le dio ese apodo. Hoy es una metrópolis inmensa, múltiple, a veces vertiginosa, pero sobre todo una ciudad de barrios. Y ese es el Londres que quiero contar: el que conocí viviendo allí, el de sus calles, sus ambientes y los barrios a los que sigo apegado.",
    "stat.quartiers": "BARRIOS",
    "stat.photos": "FOTOS",
    "stat.ville": "CIUDAD",
    "quartiers.title": "Los barrios",
    "quartiers.desc": "Diecinueve recorridos para (re)descubrir la ciudad de otro modo.",
    "a.faire": "Qué hacer",
    "blitz.title": "Londres bajo las bombas",
    "blitz.subtitle": "El Blitz — 1940-1941",
    "tabs.afaire": "Qué hacer",
    "wm.esprit": "El espíritu del recorrido",
    "wm.tab.whitehall": "A · Whitehall",
    "wm.tab.downing": "B · Downing Street",
    "wm.tab.palace": "C · Palace of Westminster",
    "wm.tab.bigben": "Big Ben",
    "wm.tab.bigben": "Big Ben",
    "wm.tab.abbey": "D · Westminster Abbey",
    "wm.tab.smith": "E · Smith Square",
    "wm.tab.cowley": "F · Cowley Street",
    "wm.tab.littleben": "G · Little Ben",
    "wm.tab.buckingham": "H · Buckingham Palace",
    "wm.tab.stjames": "I · St James’s Park",
    "wm.tab.mall": "J · The Mall",
    "wm.tab.greenpark": "K · Green Park",
    "wm.tab.embankment": "L · Victoria Embankment",
    "wm.tab.trafalgar": "M · Trafalgar Square",
    "wm.tab.ambiance": "Ambiente",
    "wm.tab.manger": "Dónde comer",
    "wm.tab.venir": "Cómo llegar",
    "wm.tab.manquer": "No te pierdas",
    "so.tab.square": "Soho Square",
    "so.tab.carnaby": "Carnaby Street",
    "so.tab.berwick": "Berwick Street",
    "so.tab.denmark": "Denmark Street",
    "so.tab.ronnie": "Ronnie Scott’s",
    "so.tab.noses": "Seven Noses",
    "so.tab.chinatown": "Chinatown",
    "so.tab.leicester": "Leicester Square",
    "so.tab.piccadilly": "Piccadilly Circus",
    "so.tab.outernet": "Outernet",
    "so.tab.pub": "El pub",
    "so.tab.manger": "Dónde comer",
    "so.tab.metro": "Metro y a pie",
    "label.borough": "Borough",
    "label.walkmap": "Plano del paseo · clic para ampliar",

    "belle.promenade": "Bonito paseo",
    "soho.note": "Soho es especialmente interesante por la noche: restaurantes, teatros, música y vida nocturna se concentran en un espacio relativamente compacto.",
    "city.note": "Es un Londres completamente distinto de Chelsea.",
    "shoreditch.note": "Probablemente uno de los barrios a priorizar si quieres ver un Londres muy distinto del Chelsea residencial. Escena creativa y mercados.",
    "hampstead.note": "Una excelente opción para salir del Londres turístico. Grandes espacios verdes y vistas sobre la ciudad.",
    "notting.note": "Notting Hill merece de verdad un paseo por las calles laterales más que una simple visita a Portobello.",
    "kensington.note": "Como viviste en Chelsea, no pongo Chelsea en el centro. En cambio, un día en Kensington que quizá no viviste como turista:",
    "chelsea.note": "Como viviste allí, transformo la visita en un paseo personal:",
    "harbour.note": "Prolongación natural de Chelsea, junto al río y la marina. Un Londres más discreto, entre diseño y frente fluvial.",
    "kingscross.note": "El barrio ha cambiado enormemente y merece ser revisitado si conoces Londres desde hace tiempo.",
    "greenwich.note": "Greenwich da casi la impresión de salir de Londres estando aún en la ciudad. Patrimonio marítimo y Observatorio real.",
    "brixton.note": "Muy interesante para entender el Londres multicultural contemporáneo.",
    "bromley.note": "La mayor superficie de espacios verdes de Londres. Un verdadero cambio de ritmo, a 20–30 minutos del centro.",
    "about.title": "Acerca de",
    "about.text": "Este cuaderno no es una guía turística clásica. Parte del hecho de que ya viviste un año en Chelsea y busca hacerte (re)descubrir Londres a través de sus barrios, de lo más oficial a lo más local."
  }
};

let currentLang = 'fr';
let fontSize = 16;

function applyTranslations(lang) {
  currentLang = lang;
  const t = translations[lang] || {};
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  // Long narrative blocks: show only the active language (not lang switcher buttons)
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.classList.contains('lang-btn')) return;
    el.hidden = el.getAttribute('data-lang') !== lang;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
});

// Theme
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('theme-light');
  const isLight = document.body.classList.contains('theme-light');
  themeIcon.textContent = isLight ? '☀' : '☾';
  localStorage.setItem('london-theme', isLight ? 'light' : 'dark');
});

// Font size
document.getElementById('font-minus').addEventListener('click', () => {
  fontSize = Math.max(14, fontSize - 1);
  document.documentElement.style.setProperty('--font-base', fontSize + 'px');
});
document.getElementById('font-plus').addEventListener('click', () => {
  fontSize = Math.min(20, fontSize + 1);
  document.documentElement.style.setProperty('--font-base', fontSize + 'px');
});

// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  burger.classList.toggle('active');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('active');
  });
});

// Restore theme
if (localStorage.getItem('london-theme') === 'dark') {
  document.body.classList.remove('theme-light');
  themeIcon.textContent = '☾';
}

// Init
applyTranslations('fr');


// ========== LIGHTBOX + GALLERIES ==========
(function() {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-caption');
  const lbCount = document.getElementById('lb-counter');
  if (!lb) return;

  let gallery = []; // current list of {src, alt}
  let index = 0;

  function openAt(i) {
    if (!gallery.length) return;
    index = (i + gallery.length) % gallery.length;
    const item = gallery[index];
    lbImg.src = item.src;
    lbImg.alt = item.alt || '';
    lbCap.textContent = item.alt || '';
    lbCount.textContent = (index + 1) + ' / ' + gallery.length;
    const nav = gallery.length > 1;
    const prev = lb.querySelector('.lb-prev');
    const next = lb.querySelector('.lb-next');
    if (prev) prev.style.display = nav ? '' : 'none';
    if (next) next.style.display = nav ? '' : 'none';
    if (!nav) lbCount.textContent = '';
    lb.hidden = false;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    setTimeout(() => { lb.hidden = true; }, 250);
    document.body.style.overflow = '';
  }

  function collectPhotos(container) {
    // Photos only — maps excluded from carousel
    const card = container.closest('.story-card') || container;
    const imgs = card.querySelectorAll('.quartier-img img, .quartier-gallery img, .soho-gallery img, .tab-img, .full-gallery-grid img');
    return Array.from(imgs).map(img => ({
      src: img.currentSrc || img.src,
      alt: img.alt || img.getAttribute('alt') || ''
    })).filter(x => x.src);
  }

  function isMapImage(img) {
    return !!(img.closest('.quartier-loc-map') || img.classList.contains('walk-map-img') || img.classList.contains('quartier-loc-map-img'));
  }

  function onClick(e) {
    const img = e.target.closest('img');
    if (!img) return;
    const inCard = img.closest('.story-card');
    const inFull = img.closest('.full-gallery-grid');
    if (!inCard && !inFull) return;

    e.preventDefault();

    // Maps: enlarge alone, not part of photo carousel
    if (isMapImage(img)) {
      gallery = [{
        src: img.currentSrc || img.src,
        alt: img.alt || img.getAttribute('alt') || ''
      }];
      openAt(0);
      return;
    }

    const container = inCard || inFull;
    gallery = collectPhotos(container);
    if (!gallery.length) return;

    const src = img.currentSrc || img.src;
    let i = gallery.findIndex(g => g.src === src);
    if (i < 0) i = 0;
    openAt(i);
  }

  document.addEventListener('click', onClick);

  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => openAt(index - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => openAt(index + 1));

  lb.addEventListener('click', (e) => {
    if (e.target === lb) close();
  });

  document.addEventListener('keydown', (e) => {
    if (lb.hidden || !lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') openAt(index - 1);
    if (e.key === 'ArrowRight') openAt(index + 1);
  });

  // Swipe support mobile
  let touchX = 0;
  lb.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].screenX; }, {passive: true});
  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchX;
    if (Math.abs(dx) < 50) return;
    if (dx > 0) openAt(index - 1);
    else openAt(index + 1);
  }, {passive: true});

  // Populate full gallery grid
  const grid = document.getElementById('full-gallery-grid');
  if (grid) {
    const photos = [
      'westminster.jpg','big-ben.jpg','westminster-street.jpg','st-james-park.jpg','st-james-eye.jpg',
      'soho.jpg','covent-garden.jpg','neals-yard.jpg','royal-opera-house.jpg',
      'city.jpg','leadenhall.jpg','sky-garden.jpg','millennium-bridge.jpg',
      'tower-bridge.jpg','tower-bridge-2.jpg','tower-bridge-3.jpg','tower-of-london.jpg','st-katharine-docks.jpg',
      'borough.jpg','tate-modern.jpg',
      'shoreditch.jpg','shoreditch-streetart.jpg','shoreditch-street.jpg','columbia-road.jpg',
      'camden.jpg','little-venice.jpg','little-venice-2.jpg','little-venice-3.jpg',
      'hampstead.jpg','notting-hill.jpg','notting-hill-portobello.jpg',
      'kensington.jpg','chelsea.jpg','chelsea-harbour.jpg','chelsea-creek.jpg',
      'marylebone.jpg','kings-cross.jpg','st-pancras.jpg',
      'greenwich.jpg','brixton.jpg','hero-london.jpg'
    ];
    photos.forEach(p => {
      const fig = document.createElement('figure');
      const img = document.createElement('img');
      img.src = 'photos/' + p;
      img.alt = p.replace(/\.jpg$/,'').replace(/-/g,' ');
      img.loading = 'lazy';
      img.onerror = () => fig.remove();
      const cap = document.createElement('figcaption');
      cap.textContent = img.alt;
      fig.appendChild(img);
      fig.appendChild(cap);
      grid.appendChild(fig);
    });
  }
})();

// Desktop Quartiers dropdown
(function() {
  const dd = document.querySelector('.nav-dropdown');
  if (!dd) return;
  const btn = dd.querySelector('.nav-dropdown-btn');
  const panel = dd.querySelector('.nav-dropdown-panel');

  function close() {
    dd.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  function open() {
    dd.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
  function toggle(e) {
    e.preventDefault();
    e.stopPropagation();
    if (dd.classList.contains('open')) close();
    else open();
  }

  btn.addEventListener('click', toggle);

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!dd.contains(e.target)) close();
  });

  // Close when choosing a quartier
  panel.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => close());
  });

  // Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();

// ========== SITE SEARCH (full-text) ==========
(function() {
  const input = document.getElementById('site-search');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  // Build searchable index from page content
  function buildIndex() {
    const index = [];
    const sections = document.querySelectorAll('article.story-card, section[id], .intro-prose, .about-section');
    sections.forEach((sec, i) => {
      const id = sec.id || sec.closest('[id]')?.id || ('sec-' + i);
      const titleEl = sec.querySelector('h2, h3, .section-title');
      const title = titleEl ? titleEl.textContent.trim() : id;
      // Collect text from headings, paragraphs, lists, notes
      const parts = [];
      sec.querySelectorAll('h2, h3, h4, p, li, .note, .etape-desc').forEach(el => {
        const t = el.textContent.replace(/\s+/g, ' ').trim();
        if (t.length > 1) parts.push(t);
      });
      const body = parts.join(' ').replace(/\s+/g, ' ').trim();
      if (body.length < 3 && !title) return;
      index.push({ id, title, body, bodyLower: (title + ' ' + body).toLowerCase() });
    });
    // Also index individual list items as optional hits inside cards
    document.querySelectorAll('article.story-card').forEach(card => {
      const cardId = card.id;
      const cardTitle = card.querySelector('h3')?.textContent.trim() || cardId;
      card.querySelectorAll('li').forEach(li => {
        const t = li.textContent.replace(/\s+/g, ' ').trim();
        if (t.length < 2) return;
        index.push({
          id: cardId,
          title: cardTitle,
          body: t,
          bodyLower: (cardTitle + ' ' + t).toLowerCase(),
          snippetOnly: true
        });
      });
    });
    return index;
  }

  let index = null;
  let activeIdx = -1;

  function ensureIndex() {
    if (!index) index = buildIndex();
  }

  function snippet(text, term, maxLen) {
    maxLen = maxLen || 90;
    const lower = text.toLowerCase();
    const pos = lower.indexOf(term);
    if (pos === -1) {
      return text.length > maxLen ? text.slice(0, maxLen) + '…' : text;
    }
    const start = Math.max(0, pos - 30);
    const end = Math.min(text.length, pos + term.length + 50);
    let s = text.slice(start, end);
    if (start > 0) s = '…' + s;
    if (end < text.length) s = s + '…';
    // highlight
    const re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    return s.replace(re, '<mark>$1</mark>');
  }

  function render(q) {
    ensureIndex();
    const term = q.trim().toLowerCase();
    if (term.length < 2) {
      results.hidden = true;
      results.innerHTML = '';
      return;
    }

    const seen = new Set();
    const matches = [];
    for (const item of index) {
      if (!item.bodyLower.includes(term)) continue;
      // Prefer one result per section id (best: non-snippet or first)
      const key = item.id + '|' + (item.snippetOnly ? item.body.slice(0, 40) : 'main');
      if (seen.has(item.id) && !item.snippetOnly) continue;
      if (seen.has(key)) continue;
      // Limit to 1 main + a few snippets per section
      const countForId = matches.filter(m => m.id === item.id).length;
      if (countForId >= 3) continue;
      if (!item.snippetOnly) seen.add(item.id);
      seen.add(key);
      matches.push(item);
      if (matches.length >= 12) break;
    }

    if (!matches.length) {
      results.innerHTML = '<div class="search-empty">Aucun résultat</div>';
      results.hidden = false;
      activeIdx = -1;
      return;
    }

    results.innerHTML = matches.map((m, i) => {
      const snip = snippet(m.body, term);
      return '<a href="#' + m.id + '" role="option" data-idx="' + i + '">' +
        '<strong>' + m.title + '</strong>' +
        '<span class="search-snippet">' + snip + '</span></a>';
    }).join('');
    results.hidden = false;
    activeIdx = -1;

    results.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        results.hidden = true;
        // keep query so user sees context; optional clear:
        // input.value = '';
      });
    });
  }

  input.addEventListener('input', () => render(input.value));
  input.addEventListener('focus', () => { if (input.value.trim().length >= 2) render(input.value); });

  input.addEventListener('keydown', (e) => {
    const items = results.querySelectorAll('a');
    if (results.hidden || !items.length) {
      if (e.key === 'Escape') { input.blur(); results.hidden = true; }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
      items[activeIdx]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
      items[activeIdx]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx >= 0) items[activeIdx].click();
      else if (items[0]) items[0].click();
    } else if (e.key === 'Escape') {
      results.hidden = true;
      input.blur();
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-wrap')) results.hidden = true;
  });

  // Rebuild index after language change (text content changes)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => { index = null; });
  });
})();

// ========== CONTENT TABS ==========
(function() {
  document.querySelectorAll('.content-tabs').forEach(wrap => {
    const buttons = wrap.querySelectorAll('.tab-btn');
    const panels = wrap.querySelectorAll('.tab-panel');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.tab;
        buttons.forEach(b => {
          b.classList.toggle('active', b === btn);
          b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });
        panels.forEach(p => {
          const on = p.dataset.panel === id;
          p.classList.toggle('active', on);
          if (on) p.removeAttribute('hidden');
          else p.setAttribute('hidden', '');
        });
      });
    });
  });
})();
