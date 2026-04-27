/* ═══════════════════════════════════════════
   NTNUI SJAKK — Internationalization (i18n)
   Languages: Norwegian (no) + English (en)
   ═══════════════════════════════════════════ */

const TRANSLATIONS = {
  no: {
    /* Nav */
    nav_home:   "Hjem",
    nav_faq:    "FAQ",
    nav_board:  "Styret",
    nav_lang:   "Språk",

    /* Index – hero */
    hero_welcome: "Velkommen til NTNUI Sjakk!",
    hero_sub: "Et åpent møtepunkt for alle sjakkinteresserte studenter i Trondheim.",

    /* Index – intro */
    intro_text: "NTNUI Sjakk er et åpent møtepunkt for alle sjakkinteresserte studenter i Trondheim. Det er ingen krav om verken medlemskap eller gode sjakkferdigheter, alle er velkomne til våre sjakkvelder!",
    intro_fb:   "Alle aktiviteter og oppdateringer publiseres jevnlig på vår",
    intro_fb2:  "Facebook-side",
    intro_ig:   "Vi deler også bilder og videoer fra sjakkkveldene på",
    intro_ig2:  "Instagram",

    /* Activities */
    section_activities: "Aktiviteter",
    wed_title:  "Onsdagssjakk",
    wed_body:   `Hver <strong>onsdag</strong> fra <strong>18:15 til 20:15</strong> møtes vi i rom <strong>R10</strong> på Realfagsbygget, Gløshaugen, og spiller hyggelig lyn- og hurtigsjakk. Omtrent én gang i måneden introduserer vi morsomme varianter som lagsjakk, freestyle sjakk eller «hand &amp; brain».<br><br>Under onsdagssjakken holder vi også et <strong>nybegynnerkurs</strong> der interesserte studenter kan lære det vakre spillet!`,
    fide_title: "FIDE-rangert sjakk",
    fide_body:  `NTNUI Sjakk er medlem i Norges Sjakkforbund (NSF). Som offisielt medlem av klubben kan du representere NTNUI i FIDE-rangerte turneringer, både nasjonalt og internasjonalt. NTNUI Sjakk har tidligere deltatt på spennende internasjonale sjakkturer, blant annet studentmesterskap i Italia. Vi stiller dessuten alltid sterkt med flere lag i den årlige <strong>Midtnorgeserien</strong>.<br><br>Det anbefales sterkt å melde seg inn i klubben!<br><br>Medlemskap krever betaling av NSFs årlige kontingent:<br><br><strong>198 kr</strong> (under 26 år)<br><strong>572 kr</strong> (26 år og oppover)<br><br>Ved interesse, ta kontakt med kassereren vår på <a href="mailto:sjakk-kasserer@ntnui.no">sjakk-kasserer@ntnui.no</a>, som vil hjelpe deg med innmeldingen.`,

    /* Collaboration */
    section_collab:    "Samarbeid",
    rental_title:      "Utlån av sjakkutstyr",
    rental_body:       `Skal du arrangere et sjakk-event? NTNUI Sjakk låner ut komplette sett med sjakkbrett, brikker og sjakk-klokker.<br><br><strong>Pris:</strong> 300 kr per dag for 10 komplette sett<br>Flere enn 10 sett kan lånes ved behov!<br><strong>Henting og levering:</strong> Realfagsbygget på Gløshaugen (innen kl. 18:00)<br><br>Dersom utstyret leveres etter kl. 18:00, regnes utlånet som én ekstra dag.<br><br>Ønsker dere mer enn bare utstyr? <strong>NTNUI Sjakk kan også bistå med gjennomføring av sjakkturneringer</strong>, inkludert oppsett, klokker og turneringsledelse. Bare ta kontakt! 😊`,
    partner_title:     "Bli samarbeidspartner",
    partner_body:      "NTNUI Sjakk ser alltid etter nye samarbeidspartnere som ønsker å støtte sjakkmiljøet vårt ved NTNU. Ønsker du eller din bedrift å bidra? Ikke nøl med å ta kontakt!",

    /* Contact */
    section_contact:   "Kontakt",
    contact_body:      `Har du spørsmål eller ønsker å komme i kontakt med oss? Send en e-post til <a href="mailto:sjakk-leder@ntnui.no">sjakk-leder@ntnui.no</a>, så hjelper vi deg gjerne!`,
    puzzle_btn:        "♟ Dagens sjakkpuzzle",

    /* FAQ page */
    faq_hero_title:    "Ofte stilte spørsmål",
    faq_hero_sub:      "Alt du lurer på om NTNUI Sjakk",
    faq_q1: "Hvordan blir man medlem av NTNUI Sjakk?",
    faq_a1: "Vi har ikke et eget medlemsregister, det er bare å møte opp på våre sjakkvelder og delta!",
    faq_q2: "Hvor mye koster det å spille med NTNUI Sjakk?",
    faq_a2: "Ingenting!",
    faq_q3: "Hvor god må man være for å spille med NTNUI Sjakk?",
    faq_a3: "Du burde kjenne til reglene i sjakk, men det er ingen krav om ferdighetsnivå.",
    faq_q4: "Kan man få rating av å spille med NTNUI Sjakk?",
    faq_a4: `NTNUI Sjakk er medlem i NSF og det er mulig å få rating ved å delta i offisielle turneringer, som blant annet NTNUI arrangerer fra tid til annen. For å bli medlem i NSF-klubben, ta kontakt med <a href="mailto:sjakk-kasserer@ntnui.no">sjakk-kasserer@ntnui.no</a>.`,

    /* Board page */
    board_hero_title:  "Styret",
    board_hero_sub:    "Hvem driver NTNUI Sjakk?",
    board_roles: [
      { role: "Leder",              name: "Jonathan Lundstedt",     email: "sjakk-leder@ntnui.no" },
      { role: "Nestleder",          name: "Jens Vatne",             email: "sjakk-nestleder@ntnui.no" },
      { role: "Kasserer",           name: "Max Dahl",               email: "sjakk-kasserer@ntnui.no" },
      { role: "Økonomiansvarlig",   name: "Livia Lindstad",         email: null },
      { role: "SoMe-ansvarlig",     name: "Sigrid Øhlén",           email: null },
      { role: "Promoansvarlig",     name: "Marte Wenneck Rasmussen",email: null },
      { role: "Materialansvarlig",  name: "Sigurd Bøhler",          email: null },
      { role: "Sosialansvarlig",    name: "Inga Hem",               email: null },
      { role: "Trener",             name: "CM Gaute Uglenes Bergan",email: null },
      { role: "Styremedlem",        name: "Ole Marius Green",       email: null },
    ],

    /* Footer */
    footer: "© 2025 NTNUI Sjakk · Norges Teknisk-Naturvitenskapelige Universitets Idrettslag",

    /* Countdown */
    countdown_label: "Neste onsdagssjakk om",
    countdown_now:   "Pågår nå! Kom til R10 på Realfagsbygget",
    cd_days:  "dager",
    cd_hours: "timer",
    cd_mins:  "min",
    cd_secs:  "sek",

    /* Puzzle */
    puzzle_heading:      "Dagens sjakkpuzzle",
    puzzle_sub:          "Finn det beste trekket",
    puzzle_next:         "Neste puzzle",
    puzzle_more:         "Mer på Lichess",
    puzzle_turn_label:   "Det er",
    puzzle_white_moves:  "hvits tur",
    puzzle_black_moves:  "svarts tur",
    puzzle_rating_label: "Vanskelighetsgrad:",
    puzzle_find_move:    "Finn det beste trekket",
    puzzle_correct:      "Riktig! Godt gjort!",
    puzzle_wrong:        "Ikke riktig — prøv igjen",
    puzzle_error:        "Kunne ikke laste puzzle. Sjekk internettforbindelsen.",
  },

  en: {
    nav_home:   "Home",
    nav_faq:    "FAQ",
    nav_board:  "Board",
    nav_lang:   "Language",

    hero_welcome: "Welcome to NTNUI Chess!",
    hero_sub: "An open meeting place for all chess-interested students in Trondheim.",

    intro_text: "NTNUI Chess is an open meeting place for all chess-interested students in Trondheim. There are no membership requirements or demands on chess skill — everyone is welcome at our chess evenings!",
    intro_fb:   "All activities and updates are regularly posted on our",
    intro_fb2:  "Facebook page",
    intro_ig:   "We also share photos and videos from our evenings on",
    intro_ig2:  "Instagram",

    section_activities: "Activities",
    wed_title:  "Wednesday Chess",
    wed_body:   `Every <strong>Wednesday</strong> from <strong>18:15 to 20:15</strong>, we meet in room <strong>R10</strong> at Realfagsbygget, Gløshaugen, for casual blitz and rapid chess. About once a month we introduce fun variants such as team chess, freestyle chess, or "hand &amp; brain."<br><br>During the Wednesday session we also hold a <strong>beginner crash course</strong> where new students can learn the beautiful game!`,
    fide_title: "FIDE-rated Chess",
    fide_body:  `NTNUI Chess is a member of the Norwegian Chess Federation (NSF). As an official club member you can represent NTNUI in FIDE-rated tournaments, both nationally and internationally. We have previously participated in exciting international trips, including student championships in Italy. We also compete with several teams in the annual <strong>Mid-Norway League</strong> (Midtnorgeserien).<br><br>We highly recommend joining the club!<br><br>Membership requires payment of the NSF annual fee:<br><br><strong>198 NOK</strong> (under 26 years)<br><strong>572 NOK</strong> (26 years and older)<br><br>If interested, please contact our treasurer at <a href="mailto:sjakk-kasserer@ntnui.no">sjakk-kasserer@ntnui.no</a>, who will assist you with registration.`,

    section_collab:    "Collaboration",
    rental_title:      "Chess Equipment Rental",
    rental_body:       `Planning a chess event? NTNUI Chess offers complete sets including chessboards, pieces, and clocks.<br><br><strong>Price:</strong> NOK 300 per day for 10 complete sets<br>More than 10 sets available if needed!<br><strong>Pick-up and return:</strong> Realfagsbygget, Gløshaugen (by 6:00 PM)<br><br>Equipment returned after 6:00 PM will be counted as an additional day.<br><br>Need more than equipment? <strong>NTNUI Chess can also help organize tournaments</strong>, including setup, clocks, and tournament management. Just get in touch! 😊`,
    partner_title:     "Become a Partner",
    partner_body:      "NTNUI Chess is always looking for new partners who want to support our chess community at NTNU. Would you or your company like to contribute? Don't hesitate to reach out!",

    section_contact:   "Contact",
    contact_body:      `Questions or want to get in touch? Send an email to <a href="mailto:sjakk-leder@ntnui.no">sjakk-leder@ntnui.no</a> and we'll be happy to help!`,
    puzzle_btn:        "♟ Daily Chess Puzzle",

    faq_hero_title:    "Frequently Asked Questions",
    faq_hero_sub:      "Everything you need to know about NTNUI Chess",
    faq_q1: "How do I become a member of NTNUI Chess?",
    faq_a1: "We don't have a separate membership register — just show up at our chess evenings and join in!",
    faq_q2: "How much does it cost to play with NTNUI Chess?",
    faq_a2: "Nothing!",
    faq_q3: "How good do you need to be to play with NTNUI Chess?",
    faq_a3: "You should know the rules of chess, but there are no skill requirements whatsoever.",
    faq_q4: "Can you get a FIDE rating by playing with NTNUI Chess?",
    faq_a4: `NTNUI Chess is a member of NSF and it is possible to get a rating by participating in official tournaments, which NTNUI organizes from time to time. To join the NSF club, contact <a href="mailto:sjakk-kasserer@ntnui.no">sjakk-kasserer@ntnui.no</a>.`,

    board_hero_title:  "The Board",
    board_hero_sub:    "Who runs NTNUI Chess?",
    board_roles: [
      { role: "President",          name: "Jonathan Lundstedt",     email: "sjakk-leder@ntnui.no" },
      { role: "Vice President",     name: "Jens Vatne",             email: "sjakk-nestleder@ntnui.no" },
      { role: "Treasurer",          name: "Max Dahl",               email: "sjakk-kasserer@ntnui.no" },
      { role: "Finance",            name: "Livia Lindstad",         email: null },
      { role: "Social Media",       name: "Sigrid Øhlén",           email: null },
      { role: "Promotion",          name: "Marte Wenneck Rasmussen",email: null },
      { role: "Equipment",          name: "Sigurd Bøhler",          email: null },
      { role: "Social Events",      name: "Inga Hem",               email: null },
      { role: "Coach",              name: "CM Gaute Uglenes Bergan",email: null },
      { role: "Board Member",       name: "Ole Marius Green",       email: null },
    ],

    footer: "© 2025 NTNUI Chess · Norwegian University of Science and Technology Sports Association",

    /* Countdown */
    countdown_label: "Next Wednesday Chess in",
    countdown_now:   "Happening now! Come to R10 at Realfagsbygget",
    cd_days:  "days",
    cd_hours: "hours",
    cd_mins:  "min",
    cd_secs:  "sec",

    /* Puzzle */
    puzzle_heading:      "Daily Chess Puzzle",
    puzzle_sub:          "Find the best move",
    puzzle_next:         "Next puzzle",
    puzzle_more:         "More on Lichess",
    puzzle_turn_label:   "It is",
    puzzle_white_moves:  "white's turn",
    puzzle_black_moves:  "black's turn",
    puzzle_rating_label: "Difficulty:",
    puzzle_find_move:    "Find the best move",
    puzzle_correct:      "Correct! Well done!",
    puzzle_wrong:        "Not quite — try again",
    puzzle_error:        "Could not load puzzle. Check your internet connection.",
  }
};

/* ─── Language state ─── */
const DEFAULT_LANG = 'no';

function getLang() {
  return localStorage.getItem('ntnui-sjakk-lang') || DEFAULT_LANG;
}
function setLang(lang) {
  localStorage.setItem('ntnui-sjakk-lang', lang);
}
function t(key) {
  return TRANSLATIONS[getLang()][key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
}

/* ─── Apply translations to data-i18n elements ─── */
function applyTranslations() {
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = TRANSLATIONS[lang][key] ?? TRANSLATIONS[DEFAULT_LANG][key];
    if (val !== undefined) el.innerHTML = val;
  });
  /* Update lang toggle buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  /* Update <html> lang attribute */
  document.documentElement.lang = lang;
}

/* ─── Nav builder (shared across all pages) ─── */
function buildNav(activePage) {
  const nav = document.getElementById('top-nav');
  if (!nav) return;
  const lang = getLang();

  nav.innerHTML = `
    <a href="index.html" class="nav-logo" aria-label="NTNUI Sjakk hjem">
      <img src="https://ntnui.no/sjakk/wp-content/uploads/sites/270/2019/01/ntnui-logo-header.png" alt="NTNUI Sjakk">
    </a>
    <div class="nav-spacer"></div>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Meny">☰</button>
    <div class="nav-links" id="nav-links">
      <a href="index.html" class="nav-link ${activePage==='home'?'active':''}" data-i18n="nav_home">
        <i class="fa-solid fa-house nav-link-icon"></i> <span data-i18n="nav_home"></span>
      </a>
      <a href="faq.html" class="nav-link ${activePage==='faq'?'active':''}" >
        <i class="fa-solid fa-circle-question nav-link-icon"></i> <span data-i18n="nav_faq"></span>
      </a>
      <a href="styre.html" class="nav-link ${activePage==='board'?'active':''}">
        <i class="fa-solid fa-users nav-link-icon"></i> <span data-i18n="nav_board"></span>
      </a>
      <div class="lang-toggle">
        <button class="lang-btn ${lang==='no'?'active':''}" data-lang="no">NO</button>
        <button class="lang-btn ${lang==='en'?'active':''}" data-lang="en">EN</button>
      </div>
    </div>
  `;

  /* Hamburger */
  document.getElementById('nav-hamburger').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });

  /* Language buttons */
  nav.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      applyTranslations();
      buildNav(activePage); // rebuild nav labels
    });
  });

  applyTranslations();
}
