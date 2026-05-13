/* ============================================================
   EX · i18n — DE / EN / ES language switcher
   ------------------------------------------------------------
   Usage (per page):
   1. Add data-i18n="page.section.key" to any text element.
   2. Add data-i18n-attr="title:page.x.title;placeholder:page.x.ph"
      for attributes (title, placeholder, alt, aria-label, content).
   3. Set data-i18n-page="index" on the <body> so we know which
      sub-block of strings to use (defaults to first body class).
   4. Drop a <script src="i18n.js" defer></script> in <head>.
   5. Render the switcher with class .lang-switch — see CSS below.
   Strings live in window.__I18N below; one block per page id,
   with three locales. Falls back to DE if a key is missing.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- STRINGS ---------- */
  /* Each top-level key = page id (matches body data-i18n-page).
     Common keys live under "common" and are merged into every page. */

  var I18N = {
    common: {
      de: {
        'nav.beratung': 'Beratung',
        'nav.ki_pruefung': 'KI-Prüfung',
        'nav.technik': 'Technik',
        'nav.branchen': 'Branchen',
        'nav.bundeslaender': 'Bundesländer',
        'nav.marketing': 'Marketing',
        'nav.finanzen': 'Finanzen',
        'nav.banking': 'Banking',
        'nav.foerdermittel': 'Fördermittel',
        'nav.partner': 'Partner',
        'nav.ex_venture': 'EX Venture',
        'nav.ueber_uns': 'Über uns',
        'nav.vision': 'Vision',
        'nav.stellen': 'Stellen',
        'nav.ausbildung': 'Ausbildung',
        'nav.cta': 'Termin anfragen',
        'nav.cta_price': '799 € · 60 Min.',
        'foot.tag': 'Standorte Leipzig & Dresden · Sprechzeiten Mo–Fr · Antwort werktags binnen vier Stunden.',
        'foot.col1': 'Beratung',
        'foot.col2': 'Sister-Brands',
        'foot.col3': 'Kontakt',
        'foot.copy': '© 2026 EX Venture Group · Standorte Leipzig & Dresden',
        'foot.h.bundes': 'Bundesländer',
        'foot.h.gruppe': 'Gruppe',
        'foot.about': 'EX·AI ist der KI-Arm der EX Venture Group — einer deutschen Unternehmens­gruppe mit Standorten in Leipzig und Dresden. Eigenes Entwickler­team, eigene Bank, eigene Bilanz. Wir bauen KI-Systeme für den deutschen Mittelstand — unabhängig und hersteller­neutral.',
        'foot.imprint': 'Impressum',
        'foot.privacy': 'Datenschutz',
        'lang.de': 'DE',
        'lang.en': 'EN',
        'lang.es': 'ES'
      },
      en: {
        'nav.beratung': 'Consulting',
        'nav.ki_pruefung': 'AI Audit',
        'nav.technik': 'Engineering',
        'nav.branchen': 'Industries',
        'nav.bundeslaender': 'Regions',
        'nav.marketing': 'Marketing',
        'nav.finanzen': 'Finance',
        'nav.banking': 'Banking',
        'nav.foerdermittel': 'Funding',
        'nav.partner': 'Partners',
        'nav.ex_venture': 'EX Venture',
        'nav.ueber_uns': 'About',
        'nav.vision': 'Vision',
        'nav.stellen': 'Careers',
        'nav.ausbildung': 'Academy',
        'nav.cta': 'Book a call',
        'nav.cta_price': '€799 · 60 min',
        'foot.tag': 'Offices in Leipzig & Dresden · Mon–Fri · Reply within four working hours.',
        'foot.col1': 'Consulting',
        'foot.col2': 'Sister brands',
        'foot.col3': 'Contact',
        'foot.copy': '© 2026 EX Venture Group · Leipzig & Dresden',
        'foot.h.bundes': 'Regions',
        'foot.h.gruppe': 'Group',
        'foot.about': 'EX·AI is the AI arm of EX Venture Group — a German group based in Leipzig and Dresden. Our own engineering team, our own bank, our own balance sheet. We build AI systems for the German Mittelstand — independent and vendor-neutral.',
        'foot.imprint': 'Imprint',
        'foot.privacy': 'Privacy',
        'lang.de': 'DE',
        'lang.en': 'EN',
        'lang.es': 'ES'
      },
      es: {
        'nav.beratung': 'Consultoría',
        'nav.ki_pruefung': 'Auditoría IA',
        'nav.technik': 'Ingeniería',
        'nav.branchen': 'Sectores',
        'nav.bundeslaender': 'Regiones',
        'nav.marketing': 'Marketing',
        'nav.finanzen': 'Finanzas',
        'nav.banking': 'Banca',
        'nav.foerdermittel': 'Subvenciones',
        'nav.partner': 'Socios',
        'nav.ex_venture': 'EX Venture',
        'nav.ueber_uns': 'Sobre nosotros',
        'nav.vision': 'Visión',
        'nav.stellen': 'Empleo',
        'nav.ausbildung': 'Academia',
        'nav.cta': 'Reservar cita',
        'nav.cta_price': '799 € · 60 min',
        'foot.tag': 'Oficinas en Leipzig y Dresde · L–V · Respuesta en cuatro horas laborables.',
        'foot.col1': 'Consultoría',
        'foot.col2': 'Marcas hermanas',
        'foot.col3': 'Contacto',
        'foot.copy': '© 2026 EX Venture Group · Leipzig y Dresde',
        'foot.h.bundes': 'Regiones',
        'foot.h.gruppe': 'Grupo',
        'foot.about': 'EX·AI es el brazo de IA de EX Venture Group — un grupo alemán con sede en Leipzig y Dresde. Equipo de ingeniería propio, banco propio, balance propio. Construimos sistemas de IA para la mediana empresa alemana — independientes y neutrales respecto al fabricante.',
        'foot.imprint': 'Aviso legal',
        'foot.privacy': 'Privacidad',
        'lang.de': 'DE',
        'lang.en': 'EN',
        'lang.es': 'ES'
      }
    },

    /* INDEX (homepage) ---------------------------------------- */
    index: {
      de: {
        'page.title': 'EX · AI — KI-Audit für den deutschen Mittelstand · 799 €',
        'page.desc': 'Ein Werksbesuch. Ein schriftlicher Bericht. 799 Euro Pauschale. EX·AI ist der KI-Arm der EX Venture Group mit Sitz in Leipzig und Dresden.',
        'hero.kicker': 'KI, Software und Fördermittel · für den deutschen Mittelstand',
        'hero.h1': 'Es gibt hundert KI-Lösungen. <em>Wir finden die richtige für Ihre Branche.</em>',
        'hero.lead': 'Wir sind EX·AI — der KI-Arm der EX Venture Group. Seit zehn Jahren bauen und betreiben wir eigene Produkte: <em>SteuerVX</em> für Steuer­optimierung, <em>FundingVX</em> für Kapital und Förderungen, <em>OptiVX</em> für KI-Daten­management in der Industrie. 16 Portfolio­firmen. 84 Mitarbeitende. Eigene Bank, eigene Entwickler, eigene Bilanz.',
        'hero.img.alt': 'Werkzeug­schrank und Messinstrumente in einer sächsischen Fertigungs­halle',
        'hero.img.cap': 'Werkstatt eines Zuliefer­betriebs · Erzgebirge',
        'hero.img.ref': 'EX·AI<br/>Ref · 2026',
        'hero.cta': 'Audit vereinbaren',
        'hero.cta_price': '799 € · 60 Min · online',
        'hero.note': 'Direkt einsteigen. Kein Vertriebs­termin, kein Vorgespräch.',
        'hero.s1.k': 'Fördermittel',
        'hero.s1.unit': 'MIO €',
        'hero.s1.t': 'Bewilligte Fördermittel, die wir für unsere Partner eingeworben haben — aus 67 bewilligten Anträgen.',
        'hero.s2.k': 'Bewilligungen',
        'hero.s2.t': 'Erfolgreiche Förder­bewilligungen. Eigene Antrags­abteilung. SAB · ZIM · go-Inno · Forschungs­zulage.',
        'hero.s3.k': 'Portfolio',
        'hero.s3.t': 'Eigene Produkte und Portfolio­firmen — von Steuer­software bis KI-Daten­management für die Industrie.',
        'hero.s4.k': 'Team',
        'hero.s4.t': 'Mitarbeitende. Eigene Full-Stack-Entwickler in Leipzig. Deutsche Ansprech­partner.'
      },
      en: {
        'page.title': 'EX · AI — AI audit for German Mittelstand · €799',
        'page.desc': 'A plant visit. A written report. €799 flat fee. EX·AI is the AI arm of EX Venture Group, based in Leipzig and Dresden.',
        'hero.kicker': 'AI, software and funding · for the German Mittelstand',
        'hero.h1': 'There are a hundred AI tools. <em>We find the right one for your industry.</em>',
        'hero.lead': 'We are EX·AI — the AI arm of EX Venture Group. For ten years we have built and run our own products: <em>SteuerVX</em> for tax optimisation, <em>FundingVX</em> for capital and grants, <em>OptiVX</em> for AI data management in industry. 16 portfolio firms. 84 employees. Our own bank, our own engineers, our own balance sheet.',
        'hero.img.alt': 'Tool cabinet and measuring instruments in a Saxon manufacturing hall',
        'hero.img.cap': 'Supplier workshop · Erzgebirge',
        'hero.img.ref': 'EX·AI<br/>Ref · 2026',
        'hero.cta': 'Book the audit',
        'hero.cta_price': '€799 · 60 min · online',
        'hero.note': 'Straight in. No sales call, no discovery meeting.',
        'hero.s1.k': 'Grants placed',
        'hero.s1.unit': 'M €',
        'hero.s1.t': 'In approved funding placed for our partners — from 67 approved applications.',
        'hero.s2.k': 'Approvals',
        'hero.s2.t': 'Successful grant approvals. In-house application team. SAB · ZIM · go-Inno · R&D tax credit.',
        'hero.s3.k': 'Portfolio',
        'hero.s3.t': 'Own products and portfolio firms — from tax software to AI data management for industry.',
        'hero.s4.k': 'Team',
        'hero.s4.t': 'Employees. Full-stack engineers in Leipzig. German points of contact.'
      },
      es: {
        'page.title': 'EX · AI — Auditoría de IA para la mediana empresa alemana · 799 €',
        'page.desc': 'Una visita a la planta. Un informe escrito. 799 € de tarifa fija. EX·AI es el brazo de IA de EX Venture Group, con sede en Leipzig y Dresde.',
        'hero.kicker': 'IA, software y subvenciones · para la mediana empresa alemana',
        'hero.h1': 'Hay cien herramientas de IA. <em>Encontramos la adecuada para su sector.</em>',
        'hero.lead': 'Somos EX·AI — el brazo de IA de EX Venture Group. Llevamos diez años construyendo y operando productos propios: <em>SteuerVX</em> para optimización fiscal, <em>FundingVX</em> para capital y subvenciones, <em>OptiVX</em> para gestión de datos con IA en la industria. 16 empresas de cartera. 84 empleados. Banco propio, ingenieros propios, balance propio.',
        'hero.img.alt': 'Armario de herramientas e instrumentos de medida en una nave de fabricación sajona',
        'hero.img.cap': 'Taller de un proveedor · Erzgebirge',
        'hero.img.ref': 'EX·AI<br/>Ref · 2026',
        'hero.cta': 'Reservar la auditoría',
        'hero.cta_price': '799 € · 60 min · en línea',
        'hero.note': 'Directo al grano. Sin llamada comercial, sin reunión previa.',
        'hero.s1.k': 'Capital movilizado',
        'hero.s1.unit': 'MIO €',
        'hero.s1.t': 'Subvenciones aprobadas que hemos conseguido para nuestros socios — de 67 solicitudes aprobadas.',
        'hero.s2.k': 'Aprobaciones',
        'hero.s2.t': 'Subvenciones aprobadas con éxito. Equipo propio de solicitudes. SAB · ZIM · go-Inno · deducción I+D.',
        'hero.s3.k': 'Cartera',
        'hero.s3.t': 'Productos y empresas propios — desde software fiscal hasta gestión de datos con IA para la industria.',
        'hero.s4.k': 'Equipo',
        'hero.s4.t': 'Empleados. Ingenieros full-stack en Leipzig. Interlocutores alemanes.'
      }
    },

    /* INDEX — body sections (problem / solution / whyus / story / different / regions / cta) */
    indexBody: {
      de: {
        'p.k': '01 · Das Problem',
        'p.h': 'Der Mittelstand will KI. <em>Bekommt aber Folien.</em>',
        'p.lead': 'Wir haben in den letzten zwölf Monaten mit über sechzig Geschäfts­führerinnen und Geschäfts­führern aus dem deutschen Mittelstand gesprochen — vom Schwarzwald bis in die Lausitz, vom Zulieferer mit 80 Mitarbeitenden bis zum Familien­unternehmen mit 1 400. Dreimal bekamen wir dieselben drei Antworten.',
        'p.1.n': '01 · Tool-Flut',
        'p.1.h': '„Jede Woche ruft jemand an. <em>Keiner versteht unseren Betrieb.</em>"',
        'p.1.t': 'Globale SaaS-Anbieter, generische Berater, Agenturen mit ChatGPT-Wrapper. Viel Marketing, wenig Domänen­wissen. Niemand war je in der Halle.',
        'p.2.n': '02 · Papierberge',
        'p.2.h': '„Wir kriegen Konzepte. <em>Wir brauchen Umsetzung.</em>"',
        'p.2.t': 'Strategie­präsentationen, Studien, Reifegrad-Analysen — 120 Seiten, 40 000 Euro, am Ende Mitarbeiter­schulungen. Kein System, das am Montag läuft.',
        'p.3.n': '03 · Fördermittel-Nebel',
        'p.3.h': '„Es gibt Töpfe. <em>Keiner erklärt, welche für uns passen.</em>"',
        'p.3.t': 'ZIM, go-Inno, Forschungs­zulage, Landes­förderung. Die meisten Berater kennen drei Programme, die auch andere kennen. Die nützlichen liegen fünf Klicks tiefer.',
        'p.4.n': '04 · Daten­schutz-Angst',
        'p.4.h': '„ChatGPT ja — <em>aber nicht mit unseren Kalkulationen.</em>"',
        'p.4.t': 'Zu Recht. US-Dienste, unklare Datenhaltung, der AI Act ab August 2026. Die meisten KI-Projekte scheitern nicht an Technik, sondern an Compliance.',
        'p.5.n': '05 · Anbindungs­chaos',
        'p.5.h': '„Unsere ERP ist aus 2008. <em>KI soll daran andocken?</em>"',
        'p.5.t': 'Gewachsene IT-Landschaften. Altmaschinen ohne Sensorik. Excel-Kalkulationen auf Netzwerk­laufwerken. Das ist die Realität — kein Showroom.',
        'p.6.n': '06 · Fachkraft­mangel',
        'p.6.h': '„Wir haben niemanden, der <em>nebenbei</em> ein KI-Projekt stemmt."',
        'p.6.t': 'Der Produktions­leiter hat keine Zeit. Der IT-Admin hält den Laden zusammen. Beide sollen jetzt auch noch „die Transformation gestalten". Geht nicht.',

        's.k': '02 · Unser Angebot',
        's.h': 'Eine Stunde. <em>Ein Bericht.</em> 799 Euro.',
        's.lead': 'Sie buchen direkt — kein kostenloses Vorgespräch, kein Vertriebs­termin. Das Audit findet online per Video­konferenz statt, dauert 60 Minuten und passt in einen Mittags­termin. Drei Werktage später liegt ein schriftlicher Bericht bei Ihnen auf dem Schreibtisch. In klarem Deutsch, ohne Management­folien, mit konkreten Zahlen. Wenn ein Werks­besuch später sinnvoll ist, vereinbaren wir ihn — der erste Schritt bleibt schlank.',
        's.price.unit': '€ NETTO',
        's.price.sub': 'Pauschal · einmalig · keine Folge­bindung',
        's.price.h': 'Warum <em>so günstig</em> — und wo wir Geld verlieren.',
        's.price.t': 'Ein Berater­tag kostet im Mittelstand 2 400 bis 3 600 Euro. Wir liegen bewusst unter Selbst­kosten — und halten den Einstieg schlank: 60 Minuten online, keine Anreise, kein Werkstück vor die Tür. Überzeugt der Bericht, sprechen wir weiter und kommen bei Bedarf in Ihr Werk. Wenn nicht, haben Sie eine strukturierte Zweit­meinung zu Ihrem Betrieb — für 799 Euro.',
        's.r.lbl': 'Was nach drei Werktagen auf Ihrem Tisch liegt',
        's.r.1.t': 'Engpass-Analyse Ihrer Wert­schöpfungs­kette',
        's.r.1.d': 'Wo genau Zeit, Marge oder Qualität verloren gehen. Mit Beispielen aus Ihren letzten zehn Vorgängen – nicht aus einer Branchen­studie.',
        's.r.2.t': 'Drei priorisierte Anwendungs­fälle',
        's.r.2.d': 'Aus einem Dutzend Möglichkeiten wählen wir drei. Jeweils mit Zeitbedarf, Investitions­rahmen und realistischer jährlicher Ersparnis.',
        's.r.3.t': 'Risiko-Prüfung EU AI Act',
        's.r.3.d': 'Was Sie ab 2. August 2026 beachten müssen. Welche Bußgeld­stufe auf Sie zutrifft und welche Ihrer Prozesse als Hochrisiko gelten.',
        's.r.4.t': 'Fördermittel-Landkarte Bund & Land',
        's.r.4.d': 'ZIM · Forschungs­zulage · go-Inno · SAB · L-Bank · NRW.BANK · IB Berlin — welche Töpfe Ihr Vorhaben decken und welche nicht.',
        's.r.5.t': 'Drei Vorgehens­optionen mit unserer Empfehlung',
        's.r.5.d': 'Selber machen · gemeinsam · nichts tun. Letzteres ist eine mögliche Empfehlung. Wir haben sie ausgesprochen.',

        'w.k': '03 · Wer wir sind',
        'w.h': 'Keine Berater aus dem Lehrbuch. <em>Unternehmer aus dem Mittelstand.</em>',
        'w.lead': 'EX·AI ist Teil der EX Venture Group — einer deutschen Unternehmens­gruppe mit eigener Entwicklungs­abteilung, eigener Bank und eigener Bilanz. Wir bauen, was wir empfehlen, selbst. Seit Jahren. Im Alltag.',
        'w.1.n': 'Die Gruppe',
        'w.1.h': 'Eigene Bank. Eigene Entwickler. <em>Eigenes Risiko.</em>',
        'w.1.t': 'EX·FI — unser Banking-Arm. Gemino AI — Engineering in Leipzig, 40 Entwickler. MindWaves — System­integration. Wir betreiben sechs Plattformen im deutschen Mittelstand selbst. Was wir empfehlen, haben wir selbst gebaut, betrieben und bezahlt.',
        'w.2.n': 'Unabhängig',
        'w.2.lbl': 'Keine Partner­schaft · keine Provision',
        'w.2.h': 'Hersteller­neutral. Cloud-frei, wenn Sie wollen.',
        'w.2.t': 'Wir haben keinen Rahmen­vertrag mit Microsoft, SAP, AWS oder Salesforce. Keine Kick-backs, keine Zertifizierungs­ziele. Was für Sie passt, empfehlen wir — egal wessen Logo drauf ist.',
        'w.3.n': 'Deutsch',
        'w.3.lbl': 'Standorte · Leipzig · Dresden',
        'w.3.h': 'Ansprech­partner in Deutschland. Deutsche Sprache.',
        'w.3.t': 'Kein Call-Center in Riga. Keine zwischen­geschaltete Agentur. Sie sprechen mit den Leuten, die den Bericht schreiben und das System bauen.',
        'w.4.n': 'Fördermittel',
        'w.4.lbl': 'Anträge seit 2016',
        'w.4.h': 'Eigene Antrags­abteilung.',
        'w.4.t': 'Wir kennen ZIM, go-Inno, Forschungs­zulage, SAB, L-Bank, NRW.BANK von innen. Bei 4 von 5 Kunden übersteigen die eingeworbenen Mittel das Audit-Honorar — das erstatten wir dann zurück.',
        'w.5.n': 'Mittelstand',
        'w.5.lbl': 'Gespräche · 12 Monate',
        'w.5.h': 'Wir kennen die Halle.',
        'w.5.t': 'Maschinenbau in Chemnitz. Stahlbau in Bautzen. Automobil­zulieferer im Erzgebirge. Chemie in Leuna. Textil bei Zwickau. Wir sprechen Werkstatt­sprache, nicht Consultant-Englisch.',

        'st.k': '04 · Unsere Geschichte',
        'st.h': 'Gegründet, um es <em>richtig</em> zu machen.',
        'st.sig': '— Paulo Silveira · Gründer, EX Venture Group',
        'st.p1': 'Die EX Venture Group wurde 2016 gegründet. Nicht als Beratung, sondern als <em>Unternehmer­haus</em> — eine Gruppe, die Technologie-Firmen selbst betreibt, finanziert und skaliert. Über die Jahre haben wir eine eigene Bank aufgebaut (EX·FI), eine Engineering-Firma mit Sitz in Leipzig (Gemino AI), einen System­integrator (MindWaves) und mehrere SaaS-Plattformen, die wir selbst im Markt führen.',
        'st.p2': '2024 haben wir begonnen, das, was wir intern für uns selbst gebaut haben — KI-gestützte Kalkulation, Dokumenten­automation, Fach­wissens­systeme — auch dem deutschen Mittelstand anzubieten. <em>Unter einer Bedingung: Es muss funktionieren.</em> Keine Folien, keine Vapor­ware, keine Versprechen, die wir selbst nicht eingelöst haben.',
        'st.pull': '„Wir verkaufen keine KI-Träume. Wir zeigen, was am Montag im Werk läuft."',
        'st.p3': 'EX·AI ist das Ergebnis. Ein fester Tarif, ein fester Liefergegen­stand, ein klares Versprechen: Nach zwei Stunden und drei Werktagen wissen Sie, ob sich ein KI-Projekt in Ihrem Betrieb lohnt — <em>und wenn ja, welches.</em>',

        'd.k': '05 · Was uns unterscheidet',
        'd.h': 'Was wir <em>nicht</em> machen.',
        'd.lead': 'Es gibt genug Unternehmens­beratungen, KI-Agenturen und Cloud-Vertriebler im deutschen Mittelstand. Wir sind keine davon. Was uns unterscheidet, lässt sich in sieben Punkten zusammenfassen.',
        'd.head.1': 'Thema',
        'd.head.2': 'Typische Beratung',
        'd.head.3': 'EX · AI',
        'd.r1.l': 'Erstgespräch',
        'd.r1.t': 'Kostenloses „Kennenlernen" — 45 Minuten Vertrieb, Bedarf wecken, Folge­termine fixieren.',
        'd.r1.u': '<em>Kein Vorgespräch.</em> Sie buchen direkt das Audit. Eine Stunde online, drei Werktage Bericht, fertig.',
        'd.r2.l': 'Liefergegen­stand',
        'd.r2.t': 'Strategie­folien, Reifegrad-Matrix, Roadmap mit 40 Swim­lanes.',
        'd.r2.u': '<em>Ein schriftlicher Bericht</em> in klarem Deutsch. Drei konkrete Anwendungs­fälle. Mit Euro-Beträgen.',
        'd.r3.l': 'Preis',
        'd.r3.t': '15 000 – 80 000 € für eine „Strategie­phase". Tagessätze 2 400 – 3 600 €.',
        'd.r3.u': '<em>799 € Pauschale.</em> Einmalig, netto, keine Folge­bindung. Rück­erstattbar über Fördermittel.',
        'd.r4.l': 'Unabhängigkeit',
        'd.r4.t': 'Microsoft-Gold-Partner, AWS-Premier, SAP-Platinum. Provisions­modelle im Hintergrund.',
        'd.r4.u': '<em>Keine Partner­schaften.</em> Keine Kick-backs. Was passt, empfehlen wir — auch Open Source, auch On-Premise.',
        'd.r5.l': 'Herkunft',
        'd.r5.t': 'Beratungs-Junioren, McKinsey-Absolventen, Framework-Anwender.',
        'd.r5.u': '<em>Unternehmer und Ingenieure.</em> Wir bauen und betreiben eigene Plattformen im Mittelstand.',
        'd.r6.l': 'Standort',
        'd.r6.t': 'Büros in Frankfurt, München, Hamburg. Für Werks­termine fliegen wir ein.',
        'd.r6.u': '<em>Leipzig und Dresden.</em> Für das Audit kein Flug, kein Hotel — per Video­konferenz. Werks­besuch erst, wenn wir was zum Anschauen haben.',
        'd.r7.l': 'Nach dem Audit',
        'd.r7.t': 'Implementierungs­vertrag über 400 – 800 Tausend Euro mit Rahmen­stunden­budget.',
        'd.r7.u': '<em>Ihre Entscheidung.</em> Wir sagen auch „machen Sie nichts" — wenn das die richtige Empfehlung ist.',

        'b.k': '06 · Wo wir arbeiten',
        'b.h': 'Vor Ort in <em>neun Bundes­ländern</em>.',
        'b.lead': 'Unsere Standorte sind Leipzig und Dresden. Für Werks­besuche kommen wir in der Regel per Auto oder Bahn — ohne Flug, ohne Hotel in der Rechnung. Jede Region hat eigene Landes­förderung, eigene Branchen­struktur, eigene Ansprech­partner. Hier die Länder, in denen wir bisher arbeiten.',

        'cta.k': '· Der nächste Schritt',
        'cta.h': 'Schreiben Sie uns. <em>Werktags binnen vier Stunden.</em>',
        'cta.lead': 'Eine kurze Mail mit Ihrem Bundes­land und Ihrer Branche genügt — wir schlagen Ihnen zwei Online-Termine vor, in der Regel schon in dieser Woche. Kein Vorgespräch, kein Vertriebs­nachgang. Das Audit dauert 60 Minuten per Video­konferenz, danach erhalten Sie den Bericht. Wenn das Audit nicht passt, sagen wir es offen und empfehlen im Zweifel einen Kollegen.',
        'cta.btn.pr': '799 € · netto',
        'cta.phone': 'oder +49 351 4967 2200 · werktags 08:00–18:00'
      },
      en: {
        'p.k': '01 · The problem',
        'p.h': 'The Mittelstand wants AI. <em>It gets slides.</em>',
        'p.lead': 'Over the last twelve months we have spoken to more than sixty CEOs and managing directors across the German Mittelstand — from the Black Forest to Lusatia, from 80-person suppliers to 1,400-person family firms. Three answers came back, three times each.',
        'p.1.n': '01 · Tool flood',
        'p.1.h': '"Someone calls every week. <em>None of them understand our shop.</em>"',
        'p.1.t': 'Global SaaS vendors, generic consultants, agencies wrapping ChatGPT. Lots of marketing, little domain knowledge. None of them ever set foot on the floor.',
        'p.2.n': '02 · Paper mountain',
        'p.2.h': '"We get concepts. <em>We need execution.</em>"',
        'p.2.t': 'Strategy decks, studies, maturity assessments — 120 pages, €40,000, ending in staff training. No system that runs on Monday.',
        'p.3.n': '03 · Funding fog',
        'p.3.h': '"There are grants. <em>No one explains which ones fit us.</em>"',
        'p.3.t': 'ZIM, go-Inno, R&D tax credit, regional funding. Most consultants know the same three programmes everyone else knows. The useful ones are five clicks deeper.',
        'p.4.n': '04 · Data-protection fear',
        'p.4.h': '"ChatGPT, yes — <em>but not with our cost calculations.</em>"',
        'p.4.t': 'Rightly so. US services, unclear data handling, the AI Act from August 2026. Most AI projects fail not on technology but on compliance.',
        'p.5.n': '05 · Integration chaos',
        'p.5.h': '"Our ERP is from 2008. <em>AI is supposed to plug into that?</em>"',
        'p.5.t': 'Grown IT landscapes. Old machines without sensors. Excel files on shared drives. That is the reality — not a showroom.',
        'p.6.n': '06 · Skills shortage',
        'p.6.h': '"We have no one to run an AI project <em>on the side.</em>"',
        'p.6.t': 'The plant manager has no time. The IT admin keeps the lights on. Both are now expected to "shape the transformation". It does not work.',

        's.k': '02 · Our offer',
        's.h': 'One hour. <em>One report.</em> €799.',
        's.lead': 'You book directly — no free discovery call, no sales meeting. The audit runs online via video, takes 60 minutes and fits into a lunch slot. Three working days later a written report lands on your desk. In plain language, no management decks, with concrete numbers. If a plant visit makes sense later, we arrange it — the first step stays light.',
        's.price.unit': '€ NET',
        's.price.sub': 'Flat fee · one-off · no follow-on commitment',
        's.price.h': 'Why <em>so cheap</em> — and where we lose money.',
        's.price.t': 'A consulting day in the German Mittelstand costs €2,400–3,600. We sit deliberately below cost — and keep the entry light: 60 minutes online, no travel, no part on the bench. If the report convinces you, we talk further and visit your plant if needed. If not, you have a structured second opinion on your operation — for €799.',
        's.r.lbl': 'What lands on your desk after three working days',
        's.r.1.t': 'Bottleneck analysis of your value chain',
        's.r.1.d': 'Exactly where time, margin or quality is lost. With examples from your last ten jobs — not from an industry study.',
        's.r.2.t': 'Three prioritised use cases',
        's.r.2.d': 'Out of a dozen possibilities we pick three. Each with effort, investment range and realistic annual savings.',
        's.r.3.t': 'EU AI Act risk check',
        's.r.3.d': 'What you must observe from 2 August 2026. Which fine bracket applies to you and which of your processes count as high-risk.',
        's.r.4.t': 'Funding map federal & state',
        's.r.4.d': 'ZIM · R&D tax credit · go-Inno · SAB · L-Bank · NRW.BANK · IB Berlin — which schemes cover your project and which do not.',
        's.r.5.t': 'Three options with our recommendation',
        's.r.5.d': 'Do it yourself · together · do nothing. The last one is a possible recommendation. We have given it.',

        'w.k': '03 · Who we are',
        'w.h': 'Not textbook consultants. <em>Mittelstand operators.</em>',
        'w.lead': 'EX·AI is part of EX Venture Group — a German group with its own engineering team, its own bank and its own balance sheet. What we recommend, we have built ourselves. For years. In daily use.',
        'w.1.n': 'The group',
        'w.1.h': 'Own bank. Own engineers. <em>Own risk.</em>',
        'w.1.t': 'EX·FI — our banking arm. Gemino AI — engineering in Leipzig, 40 developers. MindWaves — systems integration. We run six platforms in the German Mittelstand ourselves. Whatever we recommend, we have built, run and paid for.',
        'w.2.n': 'Independent',
        'w.2.lbl': 'No partnerships · no commissions',
        'w.2.h': 'Vendor-neutral. Cloud-free if you want.',
        'w.2.t': 'We have no framework agreement with Microsoft, SAP, AWS or Salesforce. No kick-backs, no certification targets. We recommend whatever fits — regardless of the logo.',
        'w.3.n': 'German',
        'w.3.lbl': 'Offices · Leipzig · Dresden',
        'w.3.h': 'German contacts. German language.',
        'w.3.t': 'No call centre in Riga. No agency in between. You speak with the people writing the report and building the system.',
        'w.4.n': 'Funding',
        'w.4.lbl': 'Applications since 2016',
        'w.4.h': 'In-house application team.',
        'w.4.t': 'We know ZIM, go-Inno, R&D tax credit, SAB, L-Bank, NRW.BANK from the inside. With 4 out of 5 clients the funding placed exceeds the audit fee — in which case we refund it.',
        'w.5.n': 'Mittelstand',
        'w.5.lbl': 'Conversations · 12 months',
        'w.5.h': 'We know the shop floor.',
        'w.5.t': 'Machinery in Chemnitz. Steel in Bautzen. Automotive supply in Erzgebirge. Chemicals in Leuna. Textiles near Zwickau. We speak workshop, not consultant English.',

        'st.k': '04 · Our story',
        'st.h': 'Founded to do it <em>right</em>.',
        'st.sig': '— Paulo Silveira · Founder, EX Venture Group',
        'st.p1': 'EX Venture Group was founded in 2016. Not as a consultancy, but as an <em>operator house</em> — a group that runs, finances and scales technology firms itself. Over the years we have built our own bank (EX·FI), an engineering firm in Leipzig (Gemino AI), a systems integrator (MindWaves) and several SaaS platforms we operate ourselves.',
        'st.p2': 'In 2024 we began offering what we had built internally for ourselves — AI-supported costing, document automation, expert-knowledge systems — to the German Mittelstand as well. <em>On one condition: it has to work.</em> No slides, no vaporware, no promises we have not delivered ourselves.',
        'st.pull': '"We do not sell AI dreams. We show what runs in the plant on Monday."',
        'st.p3': 'EX·AI is the result. A fixed price, a fixed deliverable, a clear promise: after two hours and three working days you will know whether an AI project pays off in your operation — <em>and if so, which one.</em>',

        'd.k': '05 · What sets us apart',
        'd.h': 'What we <em>do not</em> do.',
        'd.lead': 'There are plenty of management consultancies, AI agencies and cloud sales teams chasing the German Mittelstand. We are not one of them. What sets us apart fits into seven points.',
        'd.head.1': 'Topic',
        'd.head.2': 'Typical consultancy',
        'd.head.3': 'EX · AI',
        'd.r1.l': 'First call',
        'd.r1.t': 'Free "introduction" — 45 minutes of sales, generating need, pinning down follow-ups.',
        'd.r1.u': '<em>No discovery call.</em> You book the audit directly. One hour online, three days for the report, done.',
        'd.r2.l': 'Deliverable',
        'd.r2.t': 'Strategy decks, maturity matrix, roadmap with 40 swim lanes.',
        'd.r2.u': '<em>A written report</em> in plain language. Three concrete use cases. With euro figures.',
        'd.r3.l': 'Price',
        'd.r3.t': '€15,000–80,000 for a "strategy phase". Day rates €2,400–3,600.',
        'd.r3.u': '<em>€799 flat fee.</em> One-off, net, no follow-on commitment. Refundable through grants.',
        'd.r4.l': 'Independence',
        'd.r4.t': 'Microsoft Gold partner, AWS Premier, SAP Platinum. Commission models in the background.',
        'd.r4.u': '<em>No partnerships.</em> No kick-backs. We recommend what fits — including open source, including on-premise.',
        'd.r5.l': 'Background',
        'd.r5.t': 'Junior consultants, McKinsey alumni, framework appliers.',
        'd.r5.u': '<em>Operators and engineers.</em> We build and run our own platforms in the Mittelstand.',
        'd.r6.l': 'Location',
        'd.r6.t': 'Offices in Frankfurt, Munich, Hamburg. They fly in for plant visits.',
        'd.r6.u': '<em>Leipzig and Dresden.</em> No flight, no hotel for the audit — by video. Plant visit only when there is something to look at.',
        'd.r7.l': 'After the audit',
        'd.r7.t': 'Implementation contract for €400–800k with framework hours.',
        'd.r7.u': '<em>Your decision.</em> We will also say "do nothing" — if that is the right recommendation.',

        'b.k': '06 · Where we work',
        'b.h': 'On site in <em>nine federal states</em>.',
        'b.lead': 'Our offices are in Leipzig and Dresden. We usually travel to plant visits by car or train — no flight, no hotel on the invoice. Each region has its own state funding, its own industry mix, its own contacts. The states we currently operate in:',

        'cta.k': '· Next step',
        'cta.h': 'Write to us. <em>Reply within four working hours.</em>',
        'cta.lead': 'A short email with your federal state and your industry is enough — we propose two online slots, usually still in the same week. No discovery call, no sales follow-up. The audit takes 60 minutes by video; afterwards you receive the report. If the audit does not fit, we say so plainly and refer you to a colleague when in doubt.',
        'cta.btn.pr': '€799 · net',
        'cta.phone': 'or +49 351 4967 2200 · Mon–Fri 08:00–18:00'
      },
      es: {
        'p.k': '01 · El problema',
        'p.h': 'La mediana empresa quiere IA. <em>Recibe diapositivas.</em>',
        'p.lead': 'En los últimos doce meses hemos hablado con más de sesenta directores y gerentes de la mediana empresa alemana — de la Selva Negra a Lusacia, de proveedores con 80 personas a empresas familiares de 1 400. Tres respuestas se repitieron tres veces.',
        'p.1.n': '01 · Avalancha de herramientas',
        'p.1.h': '«Llaman cada semana. <em>Nadie entiende nuestra fábrica.</em>»',
        'p.1.t': 'Proveedores SaaS globales, consultores genéricos, agencias que envuelven ChatGPT. Mucho marketing, poco conocimiento sectorial. Ninguno pisó la nave.',
        'p.2.n': '02 · Montañas de papel',
        'p.2.h': '«Recibimos conceptos. <em>Necesitamos ejecución.</em>»',
        'p.2.t': 'Presentaciones de estrategia, estudios, análisis de madurez — 120 páginas, 40 000 €, al final formación de personal. Ningún sistema que funcione el lunes.',
        'p.3.n': '03 · Niebla de subvenciones',
        'p.3.h': '«Hay programas. <em>Nadie explica cuál encaja.</em>»',
        'p.3.t': 'ZIM, go-Inno, deducción I+D, ayudas regionales. La mayoría de consultores conoce los mismos tres programas. Los útiles están cinco clics más abajo.',
        'p.4.n': '04 · Miedo a la protección de datos',
        'p.4.h': '«ChatGPT sí — <em>pero no con nuestros cálculos.</em>»',
        'p.4.t': 'Con razón. Servicios estadounidenses, tratamiento de datos opaco, la Ley de IA desde agosto de 2026. La mayoría de proyectos de IA no fracasa por la técnica, sino por el cumplimiento.',
        'p.5.n': '05 · Caos de integración',
        'p.5.h': '«Nuestro ERP es de 2008. <em>¿Y la IA se conecta a eso?</em>»',
        'p.5.t': 'Paisajes informáticos crecidos. Máquinas antiguas sin sensores. Hojas Excel en unidades de red. Esa es la realidad — no un showroom.',
        'p.6.n': '06 · Falta de personal',
        'p.6.h': '«No tenemos a nadie que lleve un proyecto de IA <em>de paso.</em>»',
        'p.6.t': 'El jefe de planta no tiene tiempo. El administrador de IT mantiene el barco a flote. Ahora ambos deben "configurar la transformación". No funciona.',

        's.k': '02 · Nuestra oferta',
        's.h': 'Una hora. <em>Un informe.</em> 799 €.',
        's.lead': 'Reserva directamente — sin llamada gratuita, sin reunión comercial. La auditoría se realiza en línea por videoconferencia, dura 60 minutos y cabe en una pausa de mediodía. Tres días laborables después, un informe escrito llega a su mesa. En lenguaje claro, sin diapositivas de gestión, con cifras concretas. Si más adelante tiene sentido una visita a la planta, la concertamos — el primer paso es ligero.',
        's.price.unit': '€ NETO',
        's.price.sub': 'Tarifa fija · única · sin compromiso posterior',
        's.price.h': '¿Por qué <em>tan barato</em> — y dónde perdemos dinero?',
        's.price.t': 'Un día de consultoría en la mediana empresa alemana cuesta entre 2 400 y 3 600 €. Estamos a propósito por debajo del coste — y mantenemos la entrada ligera: 60 minutos en línea, sin desplazamiento, sin pieza sobre la mesa. Si el informe convence, seguimos hablando y visitamos su planta si hace falta. Si no, tiene una segunda opinión estructurada sobre su operación — por 799 €.',
        's.r.lbl': 'Lo que llega a su mesa tras tres días laborables',
        's.r.1.t': 'Análisis de cuellos de botella de su cadena de valor',
        's.r.1.d': 'Dónde se pierde tiempo, margen o calidad. Con ejemplos de sus últimos diez encargos — no de un estudio sectorial.',
        's.r.2.t': 'Tres casos de uso priorizados',
        's.r.2.d': 'De una docena de posibilidades elegimos tres. Cada uno con esfuerzo, rango de inversión y ahorro anual realista.',
        's.r.3.t': 'Revisión de riesgo Ley de IA UE',
        's.r.3.d': 'Lo que debe tener en cuenta a partir del 2 de agosto de 2026. Qué tramo de sanción le corresponde y qué procesos cuentan como alto riesgo.',
        's.r.4.t': 'Mapa de subvenciones federales y estatales',
        's.r.4.d': 'ZIM · deducción I+D · go-Inno · SAB · L-Bank · NRW.BANK · IB Berlin — qué programas cubren su proyecto y cuáles no.',
        's.r.5.t': 'Tres opciones con nuestra recomendación',
        's.r.5.d': 'Hacerlo solo · juntos · no hacer nada. Lo último es una recomendación posible. La hemos pronunciado.',

        'w.k': '03 · Quiénes somos',
        'w.h': 'No consultores de manual. <em>Operadores de la mediana empresa.</em>',
        'w.lead': 'EX·AI forma parte de EX Venture Group — un grupo alemán con su propio equipo de ingeniería, su propio banco y su propio balance. Lo que recomendamos, lo construimos nosotros. Desde hace años. En el día a día.',
        'w.1.n': 'El grupo',
        'w.1.h': 'Banco propio. Ingenieros propios. <em>Riesgo propio.</em>',
        'w.1.t': 'EX·FI — nuestro brazo bancario. Gemino AI — ingeniería en Leipzig, 40 desarrolladores. MindWaves — integración de sistemas. Operamos seis plataformas en la mediana empresa alemana. Lo que recomendamos lo hemos construido, operado y pagado.',
        'w.2.n': 'Independiente',
        'w.2.lbl': 'Sin alianzas · sin comisiones',
        'w.2.h': 'Neutrales respecto al fabricante. Sin nube si lo desea.',
        'w.2.t': 'No tenemos contrato marco con Microsoft, SAP, AWS o Salesforce. Sin retornos, sin objetivos de certificación. Recomendamos lo que encaja — sea cual sea el logo.',
        'w.3.n': 'Alemán',
        'w.3.lbl': 'Sedes · Leipzig · Dresde',
        'w.3.h': 'Interlocutores en Alemania. Idioma alemán.',
        'w.3.t': 'Sin centro de llamadas en Riga. Sin agencia intermedia. Habla con quienes escriben el informe y construyen el sistema.',
        'w.4.n': 'Subvenciones',
        'w.4.lbl': 'Solicitudes desde 2016',
        'w.4.h': 'Equipo propio de solicitudes.',
        'w.4.t': 'Conocemos ZIM, go-Inno, deducción I+D, SAB, L-Bank, NRW.BANK por dentro. En 4 de cada 5 clientes el capital obtenido supera el honorario de la auditoría — en ese caso lo devolvemos.',
        'w.5.n': 'Mediana empresa',
        'w.5.lbl': 'Conversaciones · 12 meses',
        'w.5.h': 'Conocemos la nave.',
        'w.5.t': 'Maquinaria en Chemnitz. Acero en Bautzen. Proveedores de automoción en Erzgebirge. Química en Leuna. Textil cerca de Zwickau. Hablamos lenguaje de taller, no inglés de consultor.',

        'st.k': '04 · Nuestra historia',
        'st.h': 'Fundada para hacerlo <em>bien</em>.',
        'st.sig': '— Paulo Silveira · Fundador, EX Venture Group',
        'st.p1': 'EX Venture Group se fundó en 2016. No como consultora, sino como <em>casa de operadores</em> — un grupo que opera, financia y escala empresas tecnológicas. Con los años hemos construido un banco propio (EX·FI), una empresa de ingeniería en Leipzig (Gemino AI), un integrador de sistemas (MindWaves) y varias plataformas SaaS que operamos nosotros mismos.',
        'st.p2': 'En 2024 empezamos a ofrecer a la mediana empresa alemana lo que habíamos construido internamente — costeo asistido por IA, automatización documental, sistemas de conocimiento experto. <em>Con una condición: tiene que funcionar.</em> Sin diapositivas, sin vaporware, sin promesas que no hayamos cumplido nosotros.',
        'st.pull': '«No vendemos sueños de IA. Mostramos lo que funciona el lunes en la planta.»',
        'st.p3': 'EX·AI es el resultado. Tarifa fija, entregable fijo, promesa clara: tras dos horas y tres días laborables sabrá si un proyecto de IA merece la pena en su operación — <em>y si es así, cuál.</em>',

        'd.k': '05 · Lo que nos diferencia',
        'd.h': 'Lo que <em>no</em> hacemos.',
        'd.lead': 'Hay suficientes consultoras, agencias de IA y comerciales de nube tras la mediana empresa alemana. No somos una de ellas. Lo que nos diferencia cabe en siete puntos.',
        'd.head.1': 'Tema',
        'd.head.2': 'Consultora típica',
        'd.head.3': 'EX · AI',
        'd.r1.l': 'Primera llamada',
        'd.r1.t': '«Conocernos» gratis — 45 minutos de venta, generar necesidad, fijar seguimientos.',
        'd.r1.u': '<em>Sin llamada previa.</em> Reserva directamente la auditoría. Una hora en línea, tres días el informe, listo.',
        'd.r2.l': 'Entregable',
        'd.r2.t': 'Diapositivas de estrategia, matriz de madurez, hoja de ruta con 40 carriles.',
        'd.r2.u': '<em>Un informe escrito</em> en lenguaje claro. Tres casos de uso concretos. Con cifras en euros.',
        'd.r3.l': 'Precio',
        'd.r3.t': '15 000 – 80 000 € por una «fase de estrategia». Tarifa diaria 2 400 – 3 600 €.',
        'd.r3.u': '<em>799 € tarifa fija.</em> Una vez, neto, sin compromiso. Reembolsable vía subvenciones.',
        'd.r4.l': 'Independencia',
        'd.r4.t': 'Microsoft Gold, AWS Premier, SAP Platinum. Modelos de comisión por detrás.',
        'd.r4.u': '<em>Sin alianzas.</em> Sin retornos. Recomendamos lo que encaja — incluido open source y on-premise.',
        'd.r5.l': 'Origen',
        'd.r5.t': 'Consultores junior, exalumnos de McKinsey, aplicadores de plantillas.',
        'd.r5.u': '<em>Operadores e ingenieros.</em> Construimos y operamos plataformas propias en la mediana empresa.',
        'd.r6.l': 'Ubicación',
        'd.r6.t': 'Oficinas en Frankfurt, Múnich, Hamburgo. Vuelan para visitar plantas.',
        'd.r6.u': '<em>Leipzig y Dresde.</em> Para la auditoría, sin vuelo ni hotel — por videoconferencia. Visita a planta solo cuando haya algo que ver.',
        'd.r7.l': 'Tras la auditoría',
        'd.r7.t': 'Contrato de implantación de 400 000 – 800 000 € con horas marco.',
        'd.r7.u': '<em>Su decisión.</em> También decimos «no haga nada» — cuando esa es la recomendación correcta.',

        'b.k': '06 · Dónde trabajamos',
        'b.h': 'Sobre el terreno en <em>nueve estados federados</em>.',
        'b.lead': 'Nuestras sedes están en Leipzig y Dresde. Para visitas a planta solemos viajar en coche o tren — sin vuelo, sin hotel en la factura. Cada región tiene su propia financiación estatal, su propia industria, sus propios interlocutores. Los estados en los que trabajamos:',

        'cta.k': '· Siguiente paso',
        'cta.h': 'Escríbanos. <em>Respuesta en cuatro horas laborables.</em>',
        'cta.lead': 'Un correo breve con su estado federado y su sector basta — proponemos dos horarios en línea, normalmente esa misma semana. Sin llamada previa, sin seguimiento comercial. La auditoría dura 60 minutos por videoconferencia; después recibe el informe. Si la auditoría no encaja, lo decimos abiertamente y, en caso de duda, le derivamos a un colega.',
        'cta.btn.pr': '799 € · neto',
        'cta.phone': 'o +49 351 4967 2200 · L–V 08:00–18:00'
      }
    }
  };

  /* ---------- ENGINE ---------- */

  var STORAGE_KEY = 'exai.lang';
  var DEFAULT_LANG = 'de';
  var SUPPORTED = ['de', 'en', 'es'];

  function getLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v && SUPPORTED.indexOf(v) !== -1) return v;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
  }

  function pageId() {
    var b = document.body;
    if (b && b.getAttribute('data-i18n-page')) return b.getAttribute('data-i18n-page');
    return 'index';
  }

  function strings(lang) {
    var page = pageId();
    var common = (I18N.common && I18N.common[lang]) || {};
    var pageBlock = (I18N[page] && I18N[page][lang]) || {};
    var out = {};
    for (var k in common) out[k] = common[k];
    for (var k2 in pageBlock) out[k2] = pageBlock[k2];
    /* If page is "index", also merge indexBody so all keys live in one namespace. */
    if (page === 'index' && I18N.indexBody && I18N.indexBody[lang]) {
      var extra = I18N.indexBody[lang];
      for (var k3 in extra) out[k3] = extra[k3];
    }
    return out;
  }

  function lookup(key, lang) {
    var s = strings(lang);
    if (s.hasOwnProperty(key)) return s[key];
    if (lang !== DEFAULT_LANG) {
      var sd = strings(DEFAULT_LANG);
      if (sd.hasOwnProperty(key)) return sd[key];
    }
    return null;
  }

  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    var s = strings(lang);

    /* Title + meta description */
    var titleVal = lookup('page.title', lang);
    if (titleVal) document.title = titleVal;
    var descVal = lookup('page.desc', lang);
    if (descVal) {
      var m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', descVal);
    }

    /* Text content */
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      var v = lookup(key, lang);
      if (v != null) {
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = v;
        } else {
          el.textContent = v;
        }
      }
    }

    /* Attributes */
    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var an = attrNodes[j];
      var spec = an.getAttribute('data-i18n-attr');
      var pairs = spec.split(';');
      for (var p = 0; p < pairs.length; p++) {
        var pair = pairs[p].trim();
        if (!pair) continue;
        var bits = pair.split(':');
        if (bits.length !== 2) continue;
        var attr = bits[0].trim();
        var k3 = bits[1].trim();
        var v2 = lookup(k3, lang);
        if (v2 != null) an.setAttribute(attr, v2);
      }
    }

    /* Switcher active state */
    var sw = document.querySelectorAll('[data-lang-btn]');
    for (var k4 = 0; k4 < sw.length; k4++) {
      var btn = sw[k4];
      var blang = btn.getAttribute('data-lang-btn');
      if (blang === lang) btn.setAttribute('aria-current', 'true');
      else btn.removeAttribute('aria-current');
    }
  }

  function bindSwitcher() {
    document.addEventListener('click', function (ev) {
      var t = ev.target.closest('[data-lang-btn]');
      if (!t) return;
      ev.preventDefault();
      var lang = t.getAttribute('data-lang-btn');
      setLang(lang);
    });
  }

  function init() {
    bindSwitcher();
    apply(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Expose for debugging / extension */
  window.__I18N = I18N;
  window.__setLang = setLang;
  window.__getLang = getLang;
})();
