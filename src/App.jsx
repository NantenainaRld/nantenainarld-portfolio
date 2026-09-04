import React, { useState, useEffect } from "react";
import {
  FileText,
  Code2,
  Briefcase,
  GraduationCap,
  Sun,
  Moon,
  Globe,
  Layers,
  X,
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("fr");
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Intersection Observer configuré pour relancer l'animation à chaque passage (aller et retour)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          } else {
            // Réinitialise l'animation lorsque l'élément sort de l'écran pour qu'elle se relance au retour
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.15 },
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projectsData = [
    {
      id: "medical",
      title: "Système de Rendez-vous Médicaux",
      period: "Mars - Avril 2026",
      category: "Java / JSP",
      summary:
        "Plateforme web complète de prise de rendez-vous médicaux pour les patients, les médecins et les administrateurs.",
      description:
        "Développement complet d’une application web de gestion de rendez-vous médicaux basée sur une architecture MVC robuste. Le système intègre un module patient (recherche de médecins par spécialité/tarif, réservation, modification/annulation), un module médecin (gestion des horaires de travail CRUD, confirmation des rendez-vous, notifications email automatisées via l’API JavaMail), et un module administrateur sécurisé pour la supervision globale.",
      tech: [
        "Java 21",
        "JSP / Servlets",
        "MySQL",
        "Bootstrap 5",
        "BCrypt",
        "JavaMail API",
        "Apache Tomcat",
      ],
      link: "https://github.com/NantenainaRld/jsp-doctor-apointment-system",
    },
    {
      id: "faktiora",
      title: "Gestion de Caisse (Faktiora)",
      period: "Novembre - Décembre 2025",
      category: "PHP MVC",
      summary:
        "Application web de caisse et de gestion des transactions financières développée pour un environnement professionnel.",
      description:
        "Conception et développement d’un logiciel de gestion de caisse et de facturation. Mise en place de tables relationnelles optimisées, d’une architecture MVC personnalisée en PHP natif avec PDO, d’une gestion rigoureuse des sessions utilisateurs et d’un tableau de bord analytique pour le suivi des entrées/sorties financières.",
      tech: ["PHP 8.2", "MySQL", "PDO", "Bootstrap", "JavaScript"],
      link: "https://github.com/NantenainaRld/www-faktiora-mg",
    },
    {
      id: "bank",
      title: "Gestion de Prêts & Virements Bancaires",
      period: "2025 - 2026",
      category: "PHP / MySQL",
      summary:
        "Application web de gestion des transactions bancaires, des dépôts et des virements de comptes.",
      description:
        "Mise en place d’un système de simulation et de gestion de transactions financières (dépôts, transferts de fonds d’un compte à un autre, gestion de prêts bancaires). Utilisation de MySQLi pour les interactions sécurisées avec la base de données et interface utilisateur ergonomique.",
      tech: ["PHP", "MySQLi", "HTML5/CSS3", "JavaScript"],
      link: "https://github.com/NantenainaRld/php-bank-transaction-management",
    },
    {
      id: "telephony",
      title: "Système de Téléphonie IP",
      period: "Août 2026",
      category: "VoIP / Asterisk",
      summary:
        "Gestion des CDR, appels vocaux, messages, serveurs vocaux interactifs (IVR) et conférences via Asterisk.",
      description:
        "Mise en place d’une infrastructure de téléphonie sur IP complète. Configuration de serveurs Asterisk pour la gestion des enregistrements de détails d’appels (CDR), routage des appels vocaux, messagerie, serveurs vocaux interactifs (IVR) sur mesure et salles de conférence virtuelles.",
      tech: ["Asterisk", "VoIP", "Linux", "SIP Protocols"],
      link: "https://github.com/NantenainaRld",
    },
    {
      id: "smart",
      title: "Fianara Smart",
      period: "Mai 2026",
      category: "Mobile / Flutter",
      summary:
        "Application mobile de signalement urbain, d’assistance administrative par chatbot et de cartographie interactive.",
      description:
        "Développement d’une solution mobile innovante présentée lors d’un hackathon/compétition technique. L’application permet aux citoyens d’effectuer des signalements géolocalisés, d’interagir avec un assistant virtuel intelligent (chatbot) et d’explorer les services administratifs via une carte interactive.",
      tech: ["Flutter", "Express.js", "Supabase", "PostgreSQL"],
      link: "https://github.com/NantenainaRld",
    },
  ];

  const t = {
    fr: {
      about: "À propos",
      serviceWork: "Services & Projets",
      skills: "Compétences",
      resume: "CV",
      hello: "Bonjour,",
      titlePrefix: "Je suis Nantenaina",
      titleRole: "Développeur Full-Stack",
      description:
        "Embarquons pour un voyage numérique, où chaque ligne de code raconte une histoire d'architecture réfléchie et d'expérience utilisateur fluide.",
      discoverMore: "Découvrir plus",
      keyProjects: "Projets Clés & Services",
      projectsSubtitle: "Réalisations récentes et architecture système",
      techSkills: "Compétences Techniques",
      academicPath: "Parcours Académique",
      projectsDone: "Projets terminés",
      languagesMastered: "Langages & Outils",
      contactTitle: "Contact & Réseaux",
      socialsLabel: "Réseaux :",
      footer: "Conçu avec style, animations et glassmorphisme dark.",
      detailsBtn: "Voir les détails complets",
      close: "Fermer",
      sourceCode: "Code source (GitHub)",
    },
    en: {
      about: "About",
      serviceWork: "Service & Work",
      skills: "Skills",
      resume: "Resume",
      hello: "Hello,",
      titlePrefix: "I'm Nantenaina",
      titleRole: "A Full-Stack Developer",
      description:
        "Let's embark on a digital journey together, where every line of code tells a story of thoughtful architecture and seamless user experience.",
      discoverMore: "Discover More",
      keyProjects: "Key Projects & Services",
      projectsSubtitle: "Recent achievements & system architecture",
      techSkills: "Technical Skills",
      academicPath: "Academic Path",
      projectsDone: "Projects done",
      languagesMastered: "Languages & Tools",
      contactTitle: "Contact & Socials",
      socialsLabel: "Social networks:",
      footer: "Designed with style, animations, and dark glassmorphism.",
      detailsBtn: "View full details",
      close: "Close",
      sourceCode: "Source code (GitHub)",
    },
  };

  return (
    <div
      className={`min-h-screen selection:bg-orange-500 selection:text-white transition-colors duration-700 relative overflow-x-hidden font-sans ${
        darkMode ? "bg-[#0A0C14] text-slate-300" : "bg-slate-50 text-slate-700"
      }`}
    >
      {/* INTÉGRATION DE FONTAWESOME (CDN) POUR LES ICÔNES */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* ARRIÈRE-PLAN ILLUSTRÉ EN GLASSMORPHISME */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className={`absolute top-[-10%] right-[-5%] w-[45rem] h-[45rem] rounded-full blur-[140px] transition-colors duration-700 ${
            darkMode ? "bg-orange-600/10" : "bg-orange-500/15"
          }`}
        ></div>
        <div
          className={`absolute bottom-[-20%] left-[-10%] w-[50rem] h-[50rem] rounded-full blur-[160px] transition-colors duration-700 ${
            darkMode ? "bg-blue-900/10" : "bg-blue-400/15"
          }`}
        ></div>

        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            darkMode
              ? "bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem]"
              : "bg-[linear-gradient(to_right,#cbd5e133_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e133_1px,transparent_1px)] bg-[size:4rem_4rem]"
          } [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`}
        ></div>
      </div>

      {/* STYLES D'ANIMATION CSS PERSONNALISÉS (ANIMATION DU CONTOUR DE LA PHOTO - PAS D'OPACITÉ) */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes borderPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.8), 0 0 0 0 rgba(59, 130, 246, 0.6);
          }
          70% {
            box-shadow: 0 0 0 18px rgba(249, 115, 22, 0), 0 0 0 32px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0), 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }
        .animate-float {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-border-pulse {
          animation: borderPulse 2.8s infinite;
        }
      `}</style>

      {/* MODAL / POP-UP APERÇU PHOTO EN GRAND */}
      {isPhotoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsPhotoOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-slate-900 border border-slate-700 rounded-3xl p-4 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsPhotoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-orange-500 text-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-full h-[400px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-950">
              <img
                src="/photo_portfolio_00.jpeg"
                alt="Nantenaina Ralandison - Grand format"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-lg">
                RALANDISON Nantenaina Noelly Edouardo
              </h3>
              <p className="text-orange-500 text-sm">
                {lang === "fr"
                  ? "Développeur Full-Stack"
                  : "Full-Stack Developer"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL / POP-UP DETAILS PROJET COMPLET */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className={`relative max-w-2xl w-full border rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] ${
              darkMode
                ? "bg-slate-950 border-slate-800 text-white"
                : "bg-white border-slate-200 text-slate-900"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/50 hover:bg-orange-500 text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs rounded-lg bg-orange-500/10 text-orange-500 border border-orange-500/20 font-bold uppercase">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeModalProject.period}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black">
                {activeModalProject.title}
              </h2>

              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider">
                  Description détaillée
                </h4>
                <p
                  className={`text-sm sm:text-base leading-relaxed opacity-90 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  {activeModalProject.description}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((tItem, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 text-xs rounded-xl border font-semibold ${
                        darkMode
                          ? "bg-slate-900 border-slate-800 text-orange-300"
                          : "bg-slate-100 border-slate-200 text-orange-600"
                      }`}
                    >
                      {tItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-slate-800">
                <a
                  href={activeModalProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>{t[lang].sourceCode}</span>
                </a>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className={`px-5 py-3 rounded-full border text-sm font-semibold transition-colors ${
                    darkMode
                      ? "border-slate-800 hover:bg-slate-900 text-slate-400"
                      : "border-slate-200 hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  {t[lang].close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HEADER / NAVBAR */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors duration-700 ${
          darkMode
            ? "bg-[#0A0C14]/80 border-slate-800/60"
            : "bg-white/85 border-slate-200/80 shadow-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-black text-white shadow-lg shadow-orange-500/30 animate-bounce">
              NR
            </div>
            <span
              className={`font-bold tracking-wide text-lg ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              Nantenaina R.
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#about"
              className="transition opacity-75 hover:opacity-100 hover:text-orange-500"
            >
              {t[lang].about}
            </a>
            <a
              href="#projets"
              className="transition opacity-75 hover:opacity-100 hover:text-orange-500"
            >
              {t[lang].serviceWork}
            </a>
            <a
              href="#competences"
              className="transition opacity-75 hover:opacity-100 hover:text-orange-500"
            >
              {t[lang].skills}
            </a>
            <a
              href="#contact"
              className="transition opacity-75 hover:opacity-100 hover:text-orange-500"
            >
              {t[lang].contactTitle}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-bold ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800 text-orange-400"
                  : "bg-slate-100 border-slate-200 text-orange-600 shadow-sm"
              }`}
            >
              <Globe size={14} />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? "bg-slate-900/80 border-slate-800 text-orange-400"
                  : "bg-slate-100 border-slate-200 text-orange-600 shadow-sm"
              }`}
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a
              href="/CV_Nantenaina_RALANDISON_Developpeur_FullStack.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-lg shadow-orange-500/25 items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>{t[lang].resume}</span>
              <FileText size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-28 relative z-10">
        {/* HERO SECTION */}
        <section
          id="about"
          className="animate-section opacity-0 translate-y-12 transition-all duration-1000 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6"
        >
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
                {t[lang].hello}
              </span>
              <h1
                className={`text-4xl sm:text-6xl font-black tracking-tight leading-none ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {t[lang].titlePrefix} <br />
                <span className="text-orange-500">{t[lang].titleRole}</span>
              </h1>
              <p
                className={`text-base sm:text-lg max-w-xl leading-relaxed pt-2 opacity-90 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                {t[lang].description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projets"
                className="px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-all shadow-xl shadow-orange-500/30 flex items-center gap-2 group transform hover:-translate-y-1"
              >
                <span>{t[lang].discoverMore}</span>
                <i className="fa-solid fa-arrow-up-right-from-square group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-xs"></i>
              </a>
            </div>

            {/* RÉSEAUX SOCIAUX AVEC FONT AWESOME (SANS LE MOT FORBIDDEN) */}
            <div className="flex items-center gap-4 pt-4 text-sm">
              <span
                className={`font-medium ${darkMode ? "text-slate-500" : "text-slate-400"}`}
              >
                {t[lang].socialsLabel}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/NantenainaRld"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all transform hover:scale-110 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/50 text-slate-300 hover:text-orange-500 hover:border-orange-500/50"
                      : "border-slate-200 bg-white text-slate-700 hover:text-orange-600 shadow-sm"
                  }`}
                  title="GitHub"
                >
                  <i className="fa-brands fa-github text-base"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nantenaina-ralandison"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all transform hover:scale-110 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/50 text-slate-300 hover:text-orange-500 hover:border-orange-500/50"
                      : "border-slate-200 bg-white text-slate-700 hover:text-orange-600 shadow-sm"
                  }`}
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-base"></i>
                </a>
                <a
                  href="https://wa.me/261335956438"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all transform hover:scale-110 ${
                    darkMode
                      ? "border-slate-800 bg-slate-900/50 text-emerald-400 hover:border-emerald-500/50"
                      : "border-slate-200 bg-white text-emerald-600 shadow-sm"
                  }`}
                  title="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                </a>
              </div>
            </div>
          </div>

          {/* CERCLE PHOTO AVEC ANIMATION DE CONTOUR UNIQUE (PAS D'OPACITÉ) */}
          <div className="lg:col-span-5 flex justify-center relative pt-8">
            <div className="absolute w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] rounded-full border border-orange-500/20 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] rounded-full border border-dashed border-slate-700/60 animate-[spin_30s_linear_infinite_reverse]"></div>

            <div
              onClick={() => setIsPhotoOpen(true)}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 p-1.5 shadow-2xl flex items-center justify-center animate-border-pulse cursor-pointer group"
              title="Cliquez pour agrandir la photo"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 flex items-end justify-center">
                <img
                  src="/photo_portfolio_00.jpeg"
                  alt="RALANDISON Nantenaina Noelly Edouardo"
                  className="w-full h-[115%] object-cover object-top scale-105 transform translate-y-2 group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-15 transition-opacity flex items-center justify-center text-white font-bold text-sm">
                Agrandir 🔍
              </div>
            </div>

            {/* Widget Projets */}
            <div
              className={`absolute -left-2 sm:-left-6 top-1/4 backdrop-blur-xl border p-4 rounded-2xl shadow-2xl animate-float ${
                darkMode
                  ? "bg-slate-950/80 border-slate-800 text-white"
                  : "bg-white/90 border-slate-200 text-slate-900 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-500">
                  <i className="fa-solid fa-briefcase text-lg"></i>
                </div>
                <div>
                  <span className="block text-xl font-black text-orange-500">
                    12+
                  </span>
                  <span className="text-xs font-medium opacity-80">
                    {t[lang].projectsDone}
                  </span>
                </div>
              </div>
            </div>

            {/* Widget Langages */}
            <div
              className={`absolute -right-2 sm:-right-6 bottom-1/4 backdrop-blur-xl border px-4 py-3.5 rounded-2xl shadow-2xl animate-float [animation-delay:2s] ${
                darkMode
                  ? "bg-slate-950/80 border-slate-800 text-white"
                  : "bg-white/90 border-slate-200 text-slate-900 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                  <i className="fa-solid fa-layer-group text-lg"></i>
                </div>
                <div className="text-xs">
                  <span className="block font-bold text-orange-500">
                    Flutter & React
                  </span>
                  <span className="opacity-80">
                    {t[lang].languagesMastered}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS / WORK (AVEC TOUS LES PROJETS COMPLETS ET LIENS GITHUB) */}
        <section
          id="projets"
          className="animate-section opacity-0 translate-y-12 transition-all duration-1000 space-y-8 pt-12"
        >
          <div
            className={`flex items-center justify-between border-b pb-4 transition-colors duration-700 ${
              darkMode ? "border-slate-800/80" : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <Briefcase className="text-orange-500" size={24} />
              <h2
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {t[lang].keyProjects}
              </h2>
            </div>
            <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">
              {t[lang].projectsSubtitle}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className={`backdrop-blur-xl border p-6 rounded-3xl transition duration-500 flex flex-col justify-between space-y-4 shadow-xl group hover:-translate-y-1.5 ${
                  darkMode
                    ? "bg-slate-950/40 border-slate-800/80 hover:border-orange-500/50"
                    : "bg-white/80 border-slate-200 hover:border-orange-400 shadow-md"
                }`}
              >
                <div className="space-y-2">
                  <span className="text-xs text-orange-500 font-bold uppercase tracking-wider">
                    {project.period}
                  </span>
                  <h3
                    className={`text-lg font-bold transition-colors ${darkMode ? "text-white group-hover:text-orange-400" : "text-slate-900 group-hover:text-orange-600"}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed opacity-90 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-lg bg-orange-500/10 text-orange-500 border border-orange-500/20 font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/40">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-orange-500 hover:underline flex items-center gap-1"
                    >
                      <span>{t[lang].detailsBtn}</span>
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-xl border transition-colors ${
                        darkMode
                          ? "bg-slate-900 border-slate-800 text-slate-300 hover:text-orange-500"
                          : "bg-slate-100 border-slate-200 text-slate-700 hover:text-orange-600"
                      }`}
                      title="GitHub"
                    >
                      <i className="fa-brands fa-github text-base"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPETENCES & FORMATION */}
        <section
          id="competences"
          className="animate-section opacity-0 translate-y-12 transition-all duration-1000 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12"
        >
          <div className="space-y-6">
            <div
              className={`flex items-center gap-3 border-b pb-4 transition-colors duration-700 ${
                darkMode ? "border-slate-800/80" : "border-slate-200"
              }`}
            >
              <Code2 className="text-orange-500" size={24} />
              <h2
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {t[lang].techSkills}
              </h2>
            </div>

            <div
              className={`backdrop-blur-xl border p-6 rounded-3xl space-y-4 shadow-xl transition-colors duration-700 ${
                darkMode
                  ? "bg-slate-950/40 border-slate-800/80"
                  : "bg-white/80 border-slate-200 shadow-md"
              }`}
            >
              <div>
                <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">
                  Langages & Frameworks
                </h3>
                <p
                  className={`text-sm leading-relaxed opacity-90 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  Flutter, Dart, React.js, JavaScript, Node.js, Express.js,
                  Java, PHP, C++
                </p>
              </div>
              <div
                className={`border-t pt-4 ${darkMode ? "border-slate-800/80" : "border-slate-200"}`}
              >
                <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">
                  Bases de données & Outils
                </h3>
                <p
                  className={`text-sm leading-relaxed opacity-90 ${darkMode ? "text-slate-300" : "text-slate-600"}`}
                >
                  MySQL, PostgreSQL, Git, GitHub, Docker, Linux (Arch Linux)
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className={`flex items-center gap-3 border-b pb-4 transition-colors duration-700 ${
                darkMode ? "border-slate-800/80" : "border-slate-200"
              }`}
            >
              <GraduationCap className="text-orange-500" size={24} />
              <h2
                className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {t[lang].academicPath}
              </h2>
            </div>

            <div className="space-y-4">
              <div
                className={`backdrop-blur-xl border p-5 rounded-2xl flex items-center justify-between shadow-xl transition-colors duration-700 ${
                  darkMode
                    ? "bg-slate-950/40 border-slate-800/80"
                    : "bg-white/80 border-slate-200 shadow-md"
                }`}
              >
                <div>
                  <h3
                    className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Licence 3 en Informatique
                  </h3>
                  <p className="text-xs text-orange-500 font-medium">
                    ENI Fianarantsoa
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-semibold">
                  2025 - 2026
                </span>
              </div>

              <div
                className={`backdrop-blur-xl border p-5 rounded-2xl flex items-center justify-between shadow-xl transition-colors duration-700 ${
                  darkMode
                    ? "bg-slate-950/40 border-slate-800/80"
                    : "bg-white/80 border-slate-200 shadow-md"
                }`}
              >
                <div>
                  <h3
                    className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    Certification Adobe Creative
                  </h3>
                  <p className="text-xs text-orange-500 font-medium">
                    Orange Digital Center Fianarantsoa
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 font-semibold">
                  Mai 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CONTACT & RÉSEAUX DÉDIÉE (AVEC LES NUMÉROS WHATSAPP ET EMAIL EXACTS) */}
        <section
          id="contact"
          className="animate-section opacity-0 translate-y-12 transition-all duration-1000 space-y-8 pt-12"
        >
          <div
            className={`flex items-center gap-3 border-b pb-4 transition-colors duration-700 ${
              darkMode ? "border-slate-800/80" : "border-slate-200"
            }`}
          >
            <i className="fa-solid fa-envelope text-orange-500 text-xl"></i>
            <h2
              className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
            >
              {t[lang].contactTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Téléphone */}
            <a
              href="tel:+261335956438"
              className={`backdrop-blur-xl border p-6 rounded-3xl flex items-center gap-4 transition-all duration-300 shadow-xl group hover:-translate-y-1 ${
                darkMode
                  ? "bg-slate-950/40 border-slate-800/80 hover:border-orange-500/50 text-white"
                  : "bg-white/80 border-slate-200 hover:border-orange-400 text-slate-900 shadow-md"
              }`}
            >
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <i className="fa-solid fa-phone text-lg"></i>
              </div>
              <div>
                <span className="block text-xs font-medium opacity-70">
                  Téléphone
                </span>
                <span className="text-sm font-bold">+261 33 59 564 38</span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/261335956438"
              target="_blank"
              rel="noreferrer"
              className={`backdrop-blur-xl border p-6 rounded-3xl flex items-center gap-4 transition-all duration-300 shadow-xl group hover:-translate-y-1 ${
                darkMode
                  ? "bg-slate-950/40 border-slate-800/80 hover:border-emerald-500/50 text-white"
                  : "bg-white/80 border-slate-200 hover:border-emerald-400 text-slate-900 shadow-md"
              }`}
            >
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </div>
              <div>
                <span className="block text-xs font-medium opacity-70">
                  WhatsApp
                </span>
                <span className="text-sm font-bold">+261 33 59 564 38</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:nantenainarld@gmail.com"
              className={`backdrop-blur-xl border p-6 rounded-3xl flex items-center gap-4 transition-all duration-300 shadow-xl group hover:-translate-y-1 ${
                darkMode
                  ? "bg-slate-950/40 border-slate-800/80 hover:border-orange-500/50 text-white"
                  : "bg-white/80 border-slate-200 hover:border-orange-400 text-slate-900 shadow-md"
              }`}
            >
              <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <i className="fa-solid fa-envelope text-lg"></i>
              </div>
              <div>
                <span className="block text-xs font-medium opacity-70">
                  Email
                </span>
                <span className="text-xs font-bold break-all">
                  nantenainarld@gmail.com
                </span>
              </div>
            </a>

            {/* GitHub & LinkedIn avec FontAwesome */}
            <div
              className={`backdrop-blur-xl border p-6 rounded-3xl flex items-center justify-around transition-all duration-300 shadow-xl ${
                darkMode
                  ? "bg-slate-950/40 border-slate-800/80 text-white"
                  : "bg-white/80 border-slate-200 text-slate-900 shadow-md"
              }`}
            >
              <a
                href="https://github.com/NantenainaRld"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-slate-900 text-slate-300 hover:text-orange-500 hover:scale-110 transition-all border border-slate-800"
                title="GitHub"
              >
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nantenaina-ralandison"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-2xl bg-slate-900 text-slate-300 hover:text-orange-500 hover:scale-110 transition-all border border-slate-800"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className={`border-t mt-28 py-8 text-center text-xs relative z-10 transition-colors duration-700 ${
          darkMode
            ? "border-slate-800/80 bg-[#0A0C14] text-slate-500"
            : "border-slate-200 bg-white text-slate-500"
        }`}
      >
        <p>
          © {new Date().getFullYear()} - Nantenaina Ralandison. {t[lang].footer}
        </p>
      </footer>
    </div>
  );
}
