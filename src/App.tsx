import { useState } from "react";

const catalog = [
  {
    number: "01",
    title: "Web Infrastructure",
    body: "Soluciones de desarrollo y mantenimiento web adaptadas al nivel de madurez y time-to-market de cada negocio.",
    services: [
      {
        name: "Express Web Launch",
        description: "Desarrollo ágil sobre plantillas seleccionadas y optimizadas en WordPress.",
        value: "Lanza tu sitio web rápidamente con una inversión contenida, código limpio, optimización SEO inicial y diseño responsivo.",
        model: "Proyecto cerrado",
        highlight: false,
      },
      {
        name: "Custom Web Launch",
        description: "Diseño UI 100% exclusivo en Figma implementado en Elementor Pro mediante conectores de sincronización directa.",
        value: "Diferenciación visual absoluta, arquitectura orientada a la conversión, total adaptabilidad y alto rendimiento en velocidad de carga.",
        model: "Proyecto cerrado",
        highlight: true,
      },
      {
        name: "WordPress Support & Care",
        description: "Mantenimiento técnico preventivo, actualizaciones de dependencias, parches de seguridad, optimización WPO y soporte continuo.",
        value: "Garantía de que tu activo digital principal funciona 24/7 sin interrupciones, seguro y actualizado.",
        model: "Cuota recurrente (Retainer)",
        highlight: false,
      },
    ],
  },
  {
    number: "02",
    title: "Product Design",
    body: "Diseño de interfaces e investigación de usuario enfocados en la usabilidad y en la conversión.",
    services: [
      {
        name: "UI Design & Prototyping",
        description: "Diseño de interfaces complejas e interactivas (web o app) en Figma, preparadas para su posterior desarrollo.",
        value: "Entregables con especificaciones técnicas detalladas y design tokens, listos para que tu equipo de desarrollo implemente la interfaz sin fricciones (Hand-off Ready).",
        model: "Proyecto cerrado",
        highlight: true,
      },
      {
        name: "UX Research & Audit",
        description: "Evaluaciones heurísticas, pruebas con usuarios y detección de puntos de dolor en el embudo de conversión.",
        value: "Identifica exactamente dónde y por qué estás perdiendo potenciales clientes en tu producto digital y obtén un plan de acción claro.",
        model: "Proyecto cerrado",
        highlight: false,
      },
    ],
  },
  {
    number: "03",
    title: "Design Systems",
    body: "Estructuración de bases visuales y de código reutilizables para marcas en fase de crecimiento y escalabilidad.",
    services: [
      {
        name: "Design System Setup",
        description: "Creación de librerías de componentes UI reutilizables (tokens, átomos, moléculas) con reglas de gobernanza en Figma.",
        value: "Escala la presencia digital de tu empresa manteniendo coherencia visual absoluta y reduciendo los tiempos y costes de futuros desarrollos.",
        model: "Proyecto cerrado",
        highlight: true,
      },
    ],
  },
  {
    number: "04",
    title: "Customer Experience",
    body: "Optimización de los puntos de contacto entre tu marca y tu cliente para maximizar retención y recurrencia.",
    services: [
      {
        name: "Customer Experience Strategy",
        description: "Auditoría, mapeo, creación y/o mejora de la experiencia de usuario/cliente en productos o servicios físicos o digitales.",
        value: "Alinea todos los canales de interacción de tu negocio para eliminar fricciones, aumentar la satisfacción y maximizar la retención.",
        model: "Proyecto cerrado / Consultoría",
        highlight: false,
      },
    ],
  },
];

const businessModels = [
  {
    number: "01",
    title: "Proyectos Cerrados",
    subtitle: "Fixed-Price",
    description:
      "Para servicios de desarrollo web (Express y Custom), auditorías UX/CX y diseño UI Hand-off. Entregables definidos, alcances acotados y plazos transparentes.",
  },
  {
    number: "02",
    title: "Servicios Recurrentes",
    subtitle: "Retainer / Suscripción",
    description:
      "Mantenimiento continuo en WordPress y soporte evolutivo para asegurar la salud y mejora permanente de tu infraestructura digital.",
  },
  {
    number: "03",
    title: "Consultoría Puntual",
    subtitle: "Advisory",
    description:
      "Asesoramiento estratégico en experiencia de cliente (CX) e investigación de usuario. Intervención enfocada y accionable.",
  },
];

const targets = [
  {
    index: "A",
    heading: "PYMEs sin equipo digital",
    body: "Pequeñas y medianas empresas sin especialización interna que necesitan lanzar o evolucionar sus activos digitales con calidad metodológica y eficiencia de coste.",
    dark: true,
  },
  {
    index: "B",
    heading: "Equipos de desarrollo propio",
    body: "Empresas con equipo técnico interno que requieren diseño UI/UX de alto nivel y prototipos listos para implementación directa (Developer Hand-off).",
    dark: false,
    accent: true,
  },
  {
    index: "C",
    heading: "La diferencia NOVITA",
    body: "Enfoque modular y progresivo. Calidad metodológica de gran agencia, modelo flexible y cercano, adaptado a la escala de inversión de tu negocio.",
    dark: false,
    accent: false,
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success">
        <span className="form-success__icon">✓</span>
        <h3>Mensaje recibido.</h3>
        <p>
          Gracias, <strong>{form.name}</strong>. Te contactamos en menos de 48h
          para coordinar la consultoría inicial.
        </p>
        <button className="button" onClick={() => setSent(false)}>
          Enviar otra consulta <Arrow />
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row form-row--half">
        <div className="form-field">
          <label htmlFor="cf-name">Nombre</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handle}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            placeholder="tu@empresa.com"
            value={form.email}
            onChange={handle}
            required
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="cf-service">Área de interés</label>
        <select id="cf-service" name="service" value={form.service} onChange={handle} required>
          <option value="">Selecciona un área</option>
          <option value="web-infrastructure">Web Infrastructure</option>
          <option value="product-design">Product Design</option>
          <option value="design-systems">Design Systems</option>
          <option value="customer-experience">Customer Experience</option>
          <option value="no-se">Todavía no lo sé</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="cf-message">Cuéntanos tu proyecto</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="¿Qué necesitas? Cuanto más nos cuentes, mejor podremos orientarte."
          value={form.message}
          onChange={handle}
          required
        />
      </div>
      <button className="button button--full" type="submit">
        Solicitar consultoría gratuita <Arrow />
      </button>
    </form>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="logo" href="#inicio" onClick={closeMenu} aria-label="NOVITA, inicio">
          NOVITA<span>.</span>
        </a>
        <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Navegación principal">
          <a href="#nosotros" onClick={closeMenu}>Por qué NOVITA</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#detalle" onClick={closeMenu}>Catálogo</a>
          <a href="#modelo" onClick={closeMenu}>Modelo</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
          <i />
        </button>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero section-pad" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Partner digital · Diseño &amp; Desarrollo web</p>
            <h1>El equipo digital que tu negocio necesita para escalar.</h1>
            <p className="hero-lead">
              Diseñamos productos digitales, experiencias de cliente y sitios web
              orientados a conversión. La metodología de una gran agencia, adaptada
              a la realidad de tu PYME.
            </p>
            <div className="hero-ctas">
              <a className="button" href="#contacto">
                Agendar consultoría <Arrow />
              </a>
              <a className="button button--outline" href="#servicios">
                Ver catálogo de servicios <Arrow />
              </a>
            </div>
          </div>
          <figure className="hero-visual">
            <img
              src="/assets/novita-team.jpg"
              alt="Equipo NOVITA trabajando en diseño y desarrollo digital"
            />
            <figcaption>
              <span>NOVITA</span>
              Diseño de nivel corporativo, agilidad y visión de negocio.
            </figcaption>
          </figure>
        </section>

        {/* ── Ticker ── */}
        <div className="ticker" aria-label="Áreas de servicio">
          <div>
            Web Infrastructure <b>✦</b> Product Design <b>✦</b> Design Systems{" "}
            <b>✦</b> Customer Experience <b>✦</b> Web Infrastructure <b>✦</b> Product Design{" "}
            <b>✦</b> Design Systems <b>✦</b> Customer Experience <b>✦</b>
          </div>
        </div>

        {/* ── Por qué NOVITA ── */}
        <section className="section-pad intro" id="nosotros">
          <div className="section-heading split-heading">
            <p className="eyebrow">01 · Por qué NOVITA</p>
            <h2>Diseño de nivel corporativo, adaptado a tu escala.</h2>
          </div>
          <div className="value-body">
            <p className="large-copy">
              En NOVITA actuamos como tu partner digital externo. Eliminamos la
              complejidad del diseño y desarrollo web creando productos digitales
              estéticos, funcionales y optimizados para impulsar la captación y
              retención de tus clientes.
            </p>
          </div>
          <div className="three-up">
            {targets.map((t) => (
              <article
                key={t.index}
                className={
                  "statement-card" +
                  (t.dark ? " dark-card" : "") +
                  (t.accent ? " accent-card" : "")
                }
              >
                <span className="card-index">{t.index}</span>
                <h3>{t.heading}</h3>
                <p>{t.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Posicionamiento ── */}
        <section className="fracture section-pad">
          <div className="gap-layout">
            <div className="gap-manifesto">
              <p className="eyebrow">02 · Posicionamiento</p>
              <h2>El gap que NOVITA resuelve</h2>
              <p className="gap-statement">
                Las grandes agencias han establecido el estándar de calidad que el
                mercado digital exige. NOVITA trabaja contigo con exactamente ese mismo
                nivel de exigencia metodológica: los mismos procesos, los mismos
                entregables, el mismo rigor estratégico que esas agencias aplican con
                sus partners certificados.
              </p>
              <p className="gap-statement">
                La diferencia es que nosotros lo hacemos contigo directamente, sin
                estructuras corporativas innecesarias, con total transparencia de coste
                y adaptados a los tiempos reales de tu negocio.
              </p>
            </div>
            <div className="gap-standard">
              <small>El estándar que adoptamos</small>
              <strong>Calidad de partner certificado de gran agencia</strong>
              <ul className="gap-list">
                <li>Procesos de diseño y entrega documentados y auditables</li>
                <li>Design tokens, hand-off specs y guías de componentes</li>
                <li>Arquitectura web orientada a conversión y velocidad de carga</li>
                <li>SEO técnico y accesibilidad desde la fase de diseño</li>
                <li>Revisiones iterativas con criterio estratégico, no solo estético</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Catálogo integrado ── */}
        <section className="catalog section-pad" id="servicios">
          <div className="section-heading split-heading">
            <p className="eyebrow">03 · Catálogo MVP1</p>
            <h2>Cuatro áreas. Siete servicios. Una sola arquitectura.</h2>
          </div>
          {catalog.map((area) => (
            <div className="catalog-area" key={area.number}>
              <div className="catalog-area__header">
                <span className="catalog-area__number">{area.number}</span>
                <div>
                  <h3 className="catalog-area__title">{area.title}</h3>
                  <p className="catalog-area__body">{area.body}</p>
                </div>
              </div>
              <div className={"catalog-services catalog-services--" + area.services.length}>
                {area.services.map((svc) => (
                  <article
                    key={svc.name}
                    className={"catalog-svc" + (svc.highlight ? " catalog-svc--highlight" : "")}
                  >
                    <h4 className="catalog-svc__name">{svc.name}</h4>
                    <p className="catalog-svc__desc">{svc.description}</p>
                    <p className="catalog-svc__value">{svc.value}</p>
                    <div className="catalog-svc__model">{svc.model}</div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Cómo trabajamos / proceso ── */}
        <section className="platform section-pad">
          <div className="platform-copy">
            <p className="eyebrow">04 · Cómo trabajamos</p>
            <h2>Una estructura ligera. Un proceso claro de punta a punta.</h2>
            <p className="large-copy">
              NOVITA no es una agencia voluminosa. Es un partner estratégico que se
              integra en tus objetivos con soluciones a medida, sin costes de
              estructura inasumibles.
            </p>
          </div>
          <div className="platform-points">
            <article>
              <span>01</span>
              <h3>Diagnóstico y propuesta</h3>
              <p>
                Sesión estratégica de 30–60 minutos para entender tus objetivos,
                identificar cuellos de botella y definir el alcance exacto del
                servicio.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Diseño y prototipado</h3>
              <p>
                Todo proyecto web o de producto arranca con una fase de diseño UI
                rigurosa en Figma, validada contigo antes de pasar al desarrollo.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Desarrollo e implementación</h3>
              <p>
                Ejecución con plazos y entregables definidos. Para webs, entrega
                en WordPress con código limpio, responsivo y optimizado para SEO.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Soporte y evolución</h3>
              <p>
                Tras el lanzamiento, opción de retainer mensual de mantenimiento
                técnico, actualizaciones y soporte continuo 24/7.
              </p>
            </article>
          </div>
        </section>

        {/* ── Modelo de negocio ── */}
        <section className="synergy section-pad" id="modelo">
          <div className="section-heading">
            <p className="eyebrow">05 · Modelo de relación</p>
            <h2>Nos adaptamos a tus necesidades en cada proyecto.</h2>
          </div>
          <div className="synergy-grid">
            {businessModels.map((bm) => (
              <article key={bm.number}>
                <span>{bm.number}</span>
                <h3>
                  {bm.title}
                  <em>{bm.subtitle}</em>
                </h3>
                <p>{bm.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Contacto ── */}
        <section className="contact section-pad" id="contacto">
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">06 · Contacto</p>
              <h2>Hablemos de tu proyecto.</h2>
              <p className="contact-lead">
                Cuéntanos qué necesitas. En menos de 48h te respondemos con
                una propuesta de consultoría inicial sin compromiso.
              </p>
              <ul className="contact-promises">
                <li>Consultoría estratégica inicial gratuita</li>
                <li>Propuesta con alcance y precio cerrado</li>
                <li>Sin permanencia ni contratos de larga duración</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="logo" href="#inicio">
            NOVITA<span>.</span>
          </a>
          <p>Partner digital de diseño y desarrollo web para PYMEs · MVP1</p>
        </div>
        <a className="button button--light" href="#contacto">
          Agendar consultoría <Arrow />
        </a>
        <p>© 2025 NOVITA · Diseño de nivel corporativo, adaptado a tu escala de inversión.</p>
      </footer>
    </div>
  );
}
