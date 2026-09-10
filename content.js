/* ============================================================
   ✏️  content.js  —  EDIT ALL YOUR TEXT HERE (SITE-WIDE)
   ============================================================
   This is the ONLY file you need to touch to change text.
   Everything is grouped by language: en, it, de.
   Save → refresh → changes appear on every page automatically.
   ============================================================ */

const SITE_CONTENT = {

  /* ═══════════════════════════════════════════════════════════
     🇬🇧  ENGLISH
     ═══════════════════════════════════════════════════════════ */
  en: {
    nav: {
      logo: "your.name",                     // ← your name / handle
      home: "Home",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
      hire: "Hire Me"
    },

    home: {
      greeting: "Hi there, my name is",
      title: "Your Name",                    // ← your full name
      typewriterPrefix: "I'm a ",
      typewriter: [
        "Web Developer",
        "Python Scripter",
        "Rust Learner",
        "Problem Solver"
      ],
      description: "I build clean, fast, and accessible websites. From pixel-perfect frontends to practical Python scripts — I turn ideas into working code with care and a lot of coffee.",
      btnWork: "View My Work",
      btnContact: "Get In Touch",
      stats: [
        { number: "3+",  label: "Years Coding" },
        { number: "20+", label: "Projects Built" },
        { number: "10+", label: "Happy Clients" }
      ],
      featuredTitle: "What I Do",
      featured: [
        { icon: "🖥️", title: "Frontend Development",
          text: "Responsive, accessible interfaces built with modern HTML, CSS and JavaScript." },
        { icon: "⚙️", title: "Backend & Scripting",
          text: "Practical APIs, automation and server-side tools with Python." },
        { icon: "🎨", title: "UI / UX Design",
          text: "Clean, thoughtful design that balances beauty with usability." }
      ],
      learnMore: "Learn more →",
      ctaTitle: "Let's build something",
      ctaHighlight: "amazing",
      ctaTitleEnd: " together.",
      ctaText: "I'm currently available for freelance projects and full-time opportunities.",
      ctaBtn: "Start a Project"
    },

    skills: {
      tag: "_skills",
      title: "My Tech Arsenal",
      subtitle: "Languages, tools and frameworks I use — with honest levels.",
      categories: [
        {
          title: "Frontend",
          items: [
            { name: "HTML5 & CSS3",        level: "Expert" },
            { name: "JavaScript (ES6+)",   level: "Advanced" },
            { name: "Responsive Design",   level: "Advanced" },
            { name: "Accessibility (a11y)",level: "Intermediate" }
          ]
        },
        {
          title: "Languages",
          items: [
            { name: "Python",       level: "Intermediate" },
            { name: "SQL",          level: "Intermediate" },
            { name: "TypeScript",   level: "Basics" },
            { name: "Rust",         level: "Basics" }
          ]
        },
        {
          title: "Tools & Workflow",
          items: [
            { name: "Git & GitHub", level: "Advanced" },
            { name: "Linux / CLI",  level: "Intermediate" },
            { name: "Figma",        level: "Intermediate" },
            { name: "Docker",       level: "Basics" }
          ]
        }
      ],
      note: "Always learning. Currently going deeper into Rust and systems programming."
    },

    portfolio: {
      tag: "_portfolio",
      title: "Selected Work",
      subtitle: "A few projects that show what I can do.",
      viewCase: "View Case Study",
      items: [
        { icon: "🖼️", title: "Project One",
          text: "Short description of what this project does and the problem it solves.",
          tags: ["HTML", "CSS", "JavaScript"] },
        { icon: "📊", title: "Project Two",
          text: "Short description of what this project does and the problem it solves.",
          tags: ["Python", "Flask"] },
        { icon: "📱", title: "Project Three",
          text: "Short description of what this project does and the problem it solves.",
          tags: ["JavaScript", "API"] },
        { icon: "🎵", title: "Project Four",
          text: "Short description of what this project does and the problem it solves.",
          tags: ["Rust", "CLI"] }
      ]
    },

    contact: {
      tag: "_contact",
      title: "Let's Talk",
      subtitle: "Have a project in mind? Reach out and let's make it happen.",
      infoTitle: "Contact Information",
      infoSubtitle: "I usually respond within 24 hours.",
      email: "you@email.com",                // ← your email
      phone: "+39 000 000 0000",             // ← your phone
      location: "Italy",                     // ← your location
      availability: "Available for freelance",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Project inquiry",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendBtn: "Send Message",
      preferEmail: "Prefer email?",
      footerEmail: "you@email.com"           // ← your email again
    },

    footer: {
      tagline: "Web developer crafting digital experiences with care and code.",
      navTitle: "Navigate",
      connectTitle: "Connect",
      rights: "All rights reserved.",
      quote: '"Talk is cheap. Show me the code." — Linus Torvalds'
    }
  },

  /* ═══════════════════════════════════════════════════════════
     🇮🇹  ITALIANO  — per il mercato italiano
     ═══════════════════════════════════════════════════════════ */
  it: {
    nav: {
      logo: "tuo.nome",
      home: "Home",
      skills: "Competenze",
      portfolio: "Portfolio",
      contact: "Contatti",
      hire: "Lavora con me"
    },

    home: {
      greeting: "Ciao, mi chiamo",
      title: "Il Tuo Nome",
      typewriterPrefix: "Sono ",
      typewriter: [
        "Sviluppatore Web",
        "Scripter Python",
        "Studente di Rust",
        "Problem Solver"
      ],
      description: "Realizzo siti web puliti, veloci e accessibili. Dal frontend curato nei minimi dettagli agli script Python pratici — trasformo le idee in codice funzionante con cura e tanto caffè.",
      btnWork: "Guarda i miei lavori",
      btnContact: "Contattami",
      stats: [
        { number: "3+",  label: "Anni di coding" },
        { number: "20+", label: "Progetti realizzati" },
        { number: "10+", label: "Clienti soddisfatti" }
      ],
      featuredTitle: "Cosa faccio",
      featured: [
        { icon: "🖥️", title: "Sviluppo Frontend",
          text: "Interfacce responsive e accessibili costruite con HTML, CSS e JavaScript moderni." },
        { icon: "⚙️", title: "Backend e Scripting",
          text: "API pratiche, automazione e strumenti lato server con Python." },
        { icon: "🎨", title: "Design UI / UX",
          text: "Design pulito e curato che unisce estetica e usabilità." }
      ],
      learnMore: "Scopri di più →",
      ctaTitle: "Costruiamo insieme qualcosa di",
      ctaHighlight: "straordinario",
      ctaTitleEnd: ".",
      ctaText: "Sono attualmente disponibile per progetti freelance e opportunità a tempo pieno.",
      ctaBtn: "Inizia un progetto"
    },

    skills: {
      tag: "_competenze",
      title: "Il mio arsenale tecnologico",
      subtitle: "Linguaggi, strumenti e framework che uso — con livelli onesti.",
      categories: [
        {
          title: "Frontend",
          items: [
            { name: "HTML5 e CSS3",         level: "Esperto" },
            { name: "JavaScript (ES6+)",    level: "Avanzato" },
            { name: "Design Responsive",    level: "Avanzato" },
            { name: "Accessibilità (a11y)", level: "Intermedio" }
          ]
        },
        {
          title: "Linguaggi",
          items: [
            { name: "Python",     level: "Intermedio" },
            { name: "SQL",        level: "Intermedio" },
            { name: "TypeScript", level: "Base" },
            { name: "Rust",       level: "Base" }
          ]
        },
        {
          title: "Strumenti e Workflow",
          items: [
            { name: "Git e GitHub", level: "Avanzato" },
            { name: "Linux / CLI",  level: "Intermedio" },
            { name: "Figma",        level: "Intermedio" },
            { name: "Docker",       level: "Base" }
          ]
        }
      ],
      note: "Sempre imparando. Al momento sto approfondendo Rust e la programmazione di sistema."
    },

    portfolio: {
      tag: "_portfolio",
      title: "Lavori selezionati",
      subtitle: "Alcuni progetti che mostrano ciò che so fare.",
      viewCase: "Vedi caso di studio",
      items: [
        { icon: "🖼️", title: "Progetto Uno",
          text: "Breve descrizione di cosa fa questo progetto e quale problema risolve.",
          tags: ["HTML", "CSS", "JavaScript"] },
        { icon: "📊", title: "Progetto Due",
          text: "Breve descrizione di cosa fa questo progetto e quale problema risolve.",
          tags: ["Python", "Flask"] },
        { icon: "📱", title: "Progetto Tre",
          text: "Breve descrizione di cosa fa questo progetto e quale problema risolve.",
          tags: ["JavaScript", "API"] },
        { icon: "🎵", title: "Progetto Quattro",
          text: "Breve descrizione di cosa fa questo progetto e quale problema risolve.",
          tags: ["Rust", "CLI"] }
      ]
    },

    contact: {
      tag: "_contatti",
      title: "Parliamo",
      subtitle: "Hai un progetto in mente? Contattami e realizziamolo insieme.",
      infoTitle: "Informazioni di contatto",
      infoSubtitle: "Di solito rispondo entro 24 ore.",
      email: "tu@email.com",
      phone: "+39 000 000 0000",
      location: "Italia",
      availability: "Disponibile per freelance",
      nameLabel: "Il tuo nome",
      namePlaceholder: "Mario Rossi",
      emailLabel: "La tua email",
      emailPlaceholder: "mario@esempio.com",
      subjectLabel: "Oggetto",
      subjectPlaceholder: "Richiesta progetto",
      messageLabel: "Messaggio",
      messagePlaceholder: "Raccontami del tuo progetto...",
      sendBtn: "Invia messaggio",
      preferEmail: "Preferisci l'email?",
      footerEmail: "tu@email.com"
    },

    footer: {
      tagline: "Sviluppatore web che crea esperienze digitali con cura e codice.",
      navTitle: "Navigazione",
      connectTitle: "Connettiti",
      rights: "Tutti i diritti riservati.",
      quote: '"Parlare è facile. Mostrami il codice." — Linus Torvalds'
    }
  },

  /* ═══════════════════════════════════════════════════════════
     🇩🇪  DEUTSCH
     ═══════════════════════════════════════════════════════════ */
  de: {
    nav: {
      logo: "dein.name",
      home: "Startseite",
      skills: "Fähigkeiten",
      portfolio: "Portfolio",
      contact: "Kontakt",
      hire: "Engagiere mich"
    },

    home: {
      greeting: "Hallo, mein Name ist",
      title: "Dein Name",
      typewriterPrefix: "Ich bin ",
      typewriter: [
        "Webentwickler",
        "Python-Scripter",
        "Rust-Lernender",
        "Problemlöser"
      ],
      description: "Ich baue saubere, schnelle und barrierefreie Websites. Von pixelgenauen Frontends bis zu praktischen Python-Skripten — ich verwandle Ideen in funktionierenden Code, mit Sorgfalt und viel Kaffee.",
      btnWork: "Meine Arbeiten ansehen",
      btnContact: "Kontakt aufnehmen",
      stats: [
        { number: "3+",  label: "Jahre Coding" },
        { number: "20+", label: "Projekte umgesetzt" },
        { number: "10+", label: "Zufriedene Kunden" }
      ],
      featuredTitle: "Was ich mache",
      featured: [
        { icon: "🖥️", title: "Frontend-Entwicklung",
          text: "Responsive, barrierefreie Interfaces mit modernem HTML, CSS und JavaScript." },
        { icon: "⚙️", title: "Backend & Scripting",
          text: "Praktische APIs, Automatisierung und serverseitige Tools mit Python." },
        { icon: "🎨", title: "UI / UX Design",
          text: "Klares, durchdachtes Design, das Ästhetik und Nutzbarkeit verbindet." }
      ],
      learnMore: "Mehr erfahren →",
      ctaTitle: "Lass uns gemeinsam etwas",
      ctaHighlight: "Großartiges",
      ctaTitleEnd: " bauen.",
      ctaText: "Ich bin derzeit für Freelance-Projekte und Vollzeitstellen verfügbar.",
      ctaBtn: "Projekt starten"
    },

    skills: {
      tag: "_fähigkeiten",
      title: "Mein Tech-Arsenal",
      subtitle: "Sprachen, Tools und Frameworks, die ich nutze — mit ehrlichen Levels.",
      categories: [
        {
          title: "Frontend",
          items: [
            { name: "HTML5 & CSS3",          level: "Experte" },
            { name: "JavaScript (ES6+)",     level: "Fortgeschritten" },
            { name: "Responsive Design",     level: "Fortgeschritten" },
            { name: "Barrierefreiheit (a11y)", level: "Mittel" }
          ]
        },
        {
          title: "Sprachen",
          items: [
            { name: "Python",     level: "Mittel" },
            { name: "SQL",        level: "Mittel" },
            { name: "TypeScript", level: "Grundlagen" },
            { name: "Rust",       level: "Grundlagen" }
          ]
        },
        {
          title: "Tools & Workflow",
          items: [
            { name: "Git & GitHub", level: "Fortgeschritten" },
            { name: "Linux / CLI",  level: "Mittel" },
            { name: "Figma",        level: "Mittel" },
            { name: "Docker",       level: "Grundlagen" }
          ]
        }
      ],
      note: "Immer am Lernen. Aktuell vertiefe ich Rust und Systemprogrammierung."
    },

    portfolio: {
      tag: "_portfolio",
      title: "Ausgewählte Arbeiten",
      subtitle: "Ein paar Projekte, die zeigen, was ich kann.",
      viewCase: "Fallstudie ansehen",
      items: [
        { icon: "🖼️", title: "Projekt Eins",
          text: "Kurze Beschreibung, was dieses Projekt macht und welches Problem es löst.",
          tags: ["HTML", "CSS", "JavaScript"] },
        { icon: "📊", title: "Projekt Zwei",
          text: "Kurze Beschreibung, was dieses Projekt macht und welches Problem es löst.",
          tags: ["Python", "Flask"] },
        { icon: "📱", title: "Projekt Drei",
          text: "Kurze Beschreibung, was dieses Projekt macht und welches Problem es löst.",
          tags: ["JavaScript", "API"] },
        { icon: "🎵", title: "Projekt Vier",
          text: "Kurze Beschreibung, was dieses Projekt macht und welches Problem es löst.",
          tags: ["Rust", "CLI"] }
      ]
    },

    contact: {
      tag: "_kontakt",
      title: "Sprechen wir",
      subtitle: "Hast du ein Projekt im Kopf? Melde dich und lass es uns umsetzen.",
      infoTitle: "Kontaktinformationen",
      infoSubtitle: "Ich antworte normalerweise innerhalb von 24 Stunden.",
      email: "du@email.com",
      phone: "+49 000 000 0000",
      location: "Deutschland",
      availability: "Verfügbar für Freelance",
      nameLabel: "Dein Name",
      namePlaceholder: "Max Mustermann",
      emailLabel: "Deine E-Mail",
      emailPlaceholder: "max@beispiel.de",
      subjectLabel: "Betreff",
      subjectPlaceholder: "Projektanfrage",
      messageLabel: "Nachricht",
      messagePlaceholder: "Erzähl mir von deinem Projekt...",
      sendBtn: "Nachricht senden",
      preferEmail: "Lieber per E-Mail?",
      footerEmail: "du@email.com"
    },

    footer: {
      tagline: "Webentwickler, der digitale Erlebnisse mit Sorgfalt und Code gestaltet.",
      navTitle: "Navigation",
      connectTitle: "Verbinden",
      rights: "Alle Rechte vorbehalten.",
      quote: '"Reden ist billig. Zeig mir den Code." — Linus Torvalds'
    }
  }
};
