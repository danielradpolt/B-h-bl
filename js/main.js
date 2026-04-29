// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});


// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// Lightbox
const serviceData = {
  hippo: {
    title: 'Hippotherapie',
    img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&auto=format&fit=crop&q=80',
    html: `
      <p>Bei der Hippotherapie handelt es sich um eine spezielle physiotherapeutische Behandlungsmethode – eine medizinisch-therapeutische Maßnahme mit dem Pferd als Therapiepartner.</p>
      <p>Die dreidimensionalen Bewegungen des Pferdes übertragen sich auf die Patient/innen und fordern eine ständige Anpassung, wodurch Haltungs-, Gleichgewichts- und Stützreaktion sowie Sensomotorik verbessert werden. Mit wachsendem Vertrauen zum Pferd erfahren die Patient/innen nicht nur mehr Körperbewusstsein, sondern auch gesteigertes Selbstbewusstsein.</p>
      <span class="modal-label">Anwendungsbereiche</span>
      <ul>
        <li>Erkrankungen des zentralen und peripheren Nervensystems</li>
        <li>Zustand nach Schädelhirntrauma und Schlaganfällen</li>
        <li>Muskel- und Stoffwechselerkrankungen</li>
        <li>Erkrankungen des Stütz- und Bewegungsapparates</li>
        <li>Syndrome z.B. Downsyndrom</li>
        <li>Bestimmte gynäkologische Probleme</li>
        <li>Entwicklungsverzögerungen</li>
      </ul>`
  },
  ergo: {
    title: 'Ergotherapie mit Pferd',
    img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80',
    html: `
      <p>Diese spezielle Form der Ergotherapie wird ärztlich verordnet. Ziel ist es, Handlungsabläufe zu verbessern und eine größtmögliche Selbstständigkeit zu erreichen. Geschicklichkeit, Gleichgewicht und Sensorik werden ebenso trainiert wie Eigen- und Fremdwahrnehmung, Handlungsplanung und Selbstverantwortung.</p>
      <span class="modal-label">Anwendungsbereiche</span>
      <ul>
        <li>Allgemeine Verhaltensauffälligkeiten</li>
        <li>Verstärkter oder fehlender Bewegungsdrang</li>
        <li>Psychische Störungen (ADHS, Depression)</li>
        <li>Außenseiterrolle, Distanzierung von Gruppen</li>
        <li>Übersteigertes oder geringes Schmerzempfinden</li>
        <li>Schulprobleme</li>
        <li>Gleichgewichtsprobleme</li>
        <li>Koordinationsprobleme</li>
        <li>Konzentrationsschwierigkeiten</li>
        <li>Übersteigertes oder geringes Selbstwertgefühl</li>
      </ul>`
  },
  htfp: {
    title: 'Heilpäd. & therapeutische Förderung (HTFP)',
    img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&auto=format&fit=crop&q=80',
    html: `
      <p>Die HTFP hat eine positive Beeinflussung des Befindens, des sozialen Verhaltens und der Persönlichkeitsentwicklung zum Ziel. Es handelt sich um eine ganzheitliche Förderung über das Medium Pferd: körperlich, emotional, geistig und sozial.</p>
      <span class="modal-label">Anwendungsbereiche</span>
      <ul>
        <li>Verhaltensauffälligkeiten</li>
        <li>Geistige Beeinträchtigung</li>
        <li>Sinnesbeeinträchtigungen</li>
        <li>Teilleistungs- und Lernschwächen</li>
        <li>Emotionale und soziale Probleme</li>
        <li>Wahrnehmungs- und Sprachstörungen</li>
        <li>Psychiatrische Erkrankungen</li>
      </ul>`
  },
  psycho: {
    title: 'Tiergestützte Psychotherapie',
    img: 'https://images.unsplash.com/photo-1560800452-f2d475982b96?w=600&auto=format&fit=crop&q=80',
    html: `
      <p>Diese spezielle Form der Psychotherapie ist eine medizinisch-therapeutische Maßnahme und wird von einer ausgebildeten Psychotherapeutin bzw. einem ausgebildeten Psychotherapeuten durchgeführt. Das Pferd wird als Therapiepartner in den Behandlungsprozess einbezogen.</p>
      <p>Durch den wertfreien Kontakt mit dem Tier können emotionale Prozesse angeregt, Selbst- und Fremdwahrnehmung verbessert sowie Vertrauen und Selbstwertgefühl gestärkt werden.</p>
      <span class="modal-label">Anwendungsbereiche</span>
      <ul>
        <li>Krisensituationen und Überforderung</li>
        <li>Angststörungen und Unsicherheiten</li>
        <li>Depressive Erkrankungen</li>
        <li>Traumatische Erfahrungen</li>
        <li>Emotionale Belastungen und Stresszustände</li>
        <li>Probleme in der Emotionsregulation</li>
        <li>Geringes Selbstwertgefühl</li>
        <li>Beziehungs- und Bindungsschwierigkeiten</li>
        <li>Psychosomatische Beschwerden</li>
        <li>Persönlichkeitsentwicklungs- und Anpassungsstörungen</li>
      </ul>`
  }
};

const teamData = {
  andrea: {
    name: 'Dipl. Päd. Andrea Enzenhofer',
    role: 'Systemische Familien-Psychotherapeutin · Hofbesitzerin',
    img: 'images/Andrea.jpg',
    bio: `<p>Mein Name ist Andrea Enzenhofer. Ich bin systemische Familien-Psychotherapeutin mit Zusatzausbildung in heilpädagogischer und therapeutischer Förderung mit dem Pferd (HTFP).</p>
          <p>Ich wohne auf unserem gemütlichen, familiären Bauernhof am „BÜHÜBL" in St. Martin im Mühlkreis, der durch eine barrierefreie Therapiehalle erweitert wurde und nun auf die besonderen Bedürfnisse von Menschen mit Beeinträchtigungen abgestimmt ist.</p>
          <p>Unser wichtigstes Anliegen ist, dass Ihr Euch bei Uns wohl fühlt und wir gemeinsam mit unseren Pferden einige wunderbare Stunden verbringen können. Ich freue mich, euch persönlich kennenzulernen.</p>`
  },
  maria: {
    name: 'Dipl. Päd. Maria Haudek',
    role: 'Sonder- & Sprachheilpädagogin · HTFP',
    img: 'images/Maria_Haudeck.jpg',
    bio: `<p>Mein Name ist Maria Haudek, BEd. Ich bin Sonder- und Sprachheilpädagogin mit Zusatzausbildung in heilpädagogischer und therapeutischer Förderung mit dem Pferd (HTFP).</p>
          <p>Ich begleite Kinder, Jugendliche und Erwachsene mit unterschiedlichen Förderbedürfnissen, unter anderem bei Sprach- und Wahrnehmungsstörungen, ADS/ADHS, Autismus, sozial-emotionalen Herausforderungen sowie körperlichen und/oder geistigen Beeinträchtigungen.</p>`
  },
  judith: {
    name: 'Mag.a Judith Pühringer',
    role: 'Hippotherapeutin · Kinder-Bobath-Physiotherapeutin',
    img: 'images/Judith_Pühringer.jpg',
    bio: `<p>Hallo, ich bin Judith Pühringer, PT. Ich bin Mutter von vier Kindern und seit 2014 Hippotherapeutin am Bühübl in St. Martin. Seit 2021 arbeite ich zusätzlich als Kinder-Bobath-Physiotherapeutin im Ambulatorium St. Isidor.</p>
          <p>Die Hippotherapie begeistert mich durch die positive Atmosphäre, die Freude der PatientInnen am Pferd und ihre vielfältigen positiven Effekte auf orthopädische und neurologische Symptome.</p>`
  },
  niki: {
    name: 'Nicole Tröbinger',
    role: 'Dipl. Physiotherapeutin · Hippotherapie',
    img: 'images/NikiTroebinger.jpg',
    bio: `<p>Mein Name ist Nicole Tröbinger, Dipl. PT. Ich bin diplomierte Physiotherapeutin mit Zusatzausbildung in der Hippotherapie.</p>
          <p>Ich begleite Kinder und Erwachsene mit angeborenen oder erworbenen körperlichen und/oder geistigen Beeinträchtigungen sowie bei neurologischen Erkrankungen wie Multipler Sklerose oder nach einem Schlaganfall. Dabei stehen die Förderung von Tonusregulierung, Gleichgewicht, Wahrnehmung, Koordination und Selbstvertrauen sowie die Freude am Pferd im Mittelpunkt.</p>`
  },
  martina: {
    name: 'Martina Lindorfer',
    role: 'Hippotherapeutin',
    img: 'images/MartinaLinddorfer.png',
    bio: `<p>Hallo, ich bin Martina Lindorfer, 47 Jahre alt, verheiratet und Mutter von vier Kindern. Seit vielen Jahren arbeite ich als Hippotherapeutin, unter anderem bei ASSISTA sowie am Bühübl in St. Martin und in der Praxis St. Aegidi mit orthopädischen und neurologischen Schwerpunkten.</p>
          <p>Hippotherapie ist für mich eine wertvolle Ergänzung für Kinder und Erwachsene, die durch die Arbeit mit dem Pferd Motivation, Freude und positive therapeutische Effekte ermöglicht.</p>`
  }
};

function openTeamModal(key) {
  const d = teamData[key];
  document.getElementById('teamModalAvatar').src = d.img;
  document.getElementById('teamModalName').textContent = d.name;
  document.getElementById('teamModalRole').textContent = d.role;
  document.getElementById('teamModalBio').innerHTML = d.bio;
  document.getElementById('teamModalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeTeamModal(e) {
  if (e && e.target !== document.getElementById('teamModalBackdrop')) return;
  document.getElementById('teamModalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function closeDatenschutz(e) {
  if (e && e.target !== document.getElementById('datenschutzBackdrop')) return;
  document.getElementById('datenschutzBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function closeImpressum(e) {
  if (e && e.target !== document.getElementById('impressumBackdrop')) return;
  document.getElementById('impressumBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function openServiceModal(key) {
  const d = serviceData[key];
  document.getElementById('serviceModalImg').src = d.img;
  document.getElementById('serviceModalImg').alt = d.title;
  document.getElementById('serviceModalTitle').textContent = d.title;
  document.getElementById('serviceModalContent').innerHTML = d.html;
  document.getElementById('serviceModalBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeServiceModal(e) {
  if (e && e.target !== document.getElementById('serviceModalBackdrop')) return;
  document.getElementById('serviceModalBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['serviceModalBackdrop','teamModalBackdrop','impressumBackdrop','datenschutzBackdrop'].forEach(id => {
      document.getElementById(id).classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

function switchTab(e, panelId) {
  document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.gallery-panel').forEach(p => p.classList.remove('active'));
  e.currentTarget.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

function openLightbox(el) {
  const img = el.querySelector('img');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .team-card, .gallery-item, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

// Form handler
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-form');
  btn.textContent = '✓ Nachricht gesendet!';
  btn.style.background = 'var(--green-dark)';
  setTimeout(() => {
    btn.textContent = 'Nachricht senden →';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
