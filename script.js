/* ============================================
   LONDON GUIDE — theme, font, menu, i18n
   ============================================ */

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.quartiers": "Quartiers",
    "nav.about": "À propos",
    "nav.stages": "Les quartiers",
    "mobile.elsewhere": "Ailleurs",
    "hero.subtitle": "CARNET DE DÉCOUVERTE · LONDRES",
    "hero.title": "Londres<br>quartier par quartier",
    "hero.desc": "Après un an à Chelsea, une exploration locale plutôt qu’une liste d’incontournables. Chaque quartier a sa propre identité.",
    "hero.cta": "Explorer les quartiers",
    "intro.title": "L’idée",
    "intro.text": "Tu as déjà vécu à Chelsea. Je ne te fais donc pas une simple liste des « incontournables de Londres ». On part plutôt sur une découverte quartier par quartier, en distinguant ce que tu connais probablement déjà de ce qui permet de retrouver un Londres plus local. Londres se prête particulièrement bien à cette approche : chaque quartier a une identité assez forte.",
    "intro.highlight": "Si tu veux vraiment retrouver le Londres que tu as connu plutôt que faire un voyage de touriste, privilégie Shoreditch, Hampstead, Greenwich, Brixton, Southwark/Borough et les petites rues de Notting Hill avant certains grands monuments.",
    "quartiers.title": "Les quartiers",
    "quartiers.desc": "Dix-neuf parcours pour (re)découvrir la ville autrement.",
    "a.faire": "À faire",
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
    "nav.home": "Home",
    "nav.quartiers": "Neighbourhoods",
    "nav.about": "About",
    "nav.stages": "The neighbourhoods",
    "mobile.elsewhere": "Elsewhere",
    "hero.subtitle": "DISCOVERY NOTEBOOK · LONDON",
    "hero.title": "London<br>neighbourhood by neighbourhood",
    "hero.desc": "After a year in Chelsea, a local exploration rather than a list of must-sees. Each neighbourhood has its own identity.",
    "hero.cta": "Explore the neighbourhoods",
    "intro.title": "The idea",
    "intro.text": "You’ve already lived in Chelsea. So this isn’t a simple list of London’s “must-sees”. Instead we go neighbourhood by neighbourhood, distinguishing what you probably already know from what lets you rediscover a more local London. London lends itself particularly well to this approach: each area has a strong identity.",
    "intro.highlight": "If you really want to rediscover the London you knew rather than do a tourist trip, prioritise Shoreditch, Hampstead, Greenwich, Brixton, Southwark/Borough and the side streets of Notting Hill before some of the big monuments.",
    "quartiers.title": "The neighbourhoods",
    "quartiers.desc": "Nineteen routes to (re)discover the city differently.",
    "a.faire": "What to do",
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
  }
};

let currentLang = 'fr';
let fontSize = 16;

function applyTranslations(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
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
