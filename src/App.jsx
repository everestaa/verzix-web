
import './App.css'

function App() {
  return (
    <main>

<header className="navbar">
  <a href="#" className="brand">
<img src="/logo.png" alt="VERZIX" className="brand-logo" />
    <span>VERZIX</span>
  </a>

  <nav>
    <a href="#inicio">Inicio</a>
    <a href="#nosotros">Plataforma</a>
    <a href="#funciones">Funcionalidades</a>
    <a href="#negocios">Para quiénes</a>
  </nav>

  <a href="#contacto" className="nav-button">
    Solicitar una demo <span>↗</span>
  </a>
</header>

<section className="hero-section" id="inicio">
  <div className="hero-content">
    <span className="eyebrow">
      <span className="online-dot"></span>
      SOFTWARE DE GESTIÓN Y RESERVAS
    </span>

    <h1>
      Tu negocio.
      <span> Una forma más inteligente de gestionarlo.</span>
    </h1>

    <p>
      Simplificá la administración de tu negocio con VERZIX.
      Gestioná reservas, organizá tus horarios y ofrecé a tus
      clientes una experiencia profesional desde cualquier lugar.
    </p>

    <div className="hero-actions">
      <a href="#contacto" className="primary-button">
        Conocé VERZIX <span>→</span>
      </a>
      <a href="#funciones" className="secondary-button">
        Explorar plataforma
      </a>
    </div>

    <div className="hero-note">
      <span className="online-dot"></span>
      Una plataforma. Todo tu negocio organizado.
    </div>
  </div>

  <div className="dashboard-preview">
    <div className="preview-top">
      <div className="preview-brand">
        <span className="mini-logo">V.</span>
        <strong>VERZIX</strong>
      </div>
      <span className="preview-status">Panel administrativo</span>
    </div>

    <div className="preview-body">
      <p className="preview-label">VISTA GENERAL</p>
      <h3>Tu negocio, bajo control.</h3>

      <div className="preview-stats">
        <div className="preview-card">
          <span>Agenda</span>
          <strong>Reservas</strong>
          <small>Turnos organizados</small>
        </div>
        <div className="preview-card">
          <span>Administración</span>
          <strong>Servicios</strong>
          <small>Todo centralizado</small>
        </div>
      </div>

      <div className="preview-agenda">
        <div className="agenda-heading">
          <strong>Tu gestión diaria</strong>
          <span>VERZIX</span>
        </div>
        <div className="agenda-line">
          <span className="agenda-dot"></span>
          Reservas organizadas
          <b>✓</b>
        </div>
        <div className="agenda-line">
          <span className="agenda-dot"></span>
          Servicios administrados
          <b>✓</b>
        </div>
        <div className="agenda-line">
          <span className="agenda-dot"></span>
          Horarios configurados
          <b>✓</b>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="intro-section" id="nosotros">
  <div className="intro-content">
    <span className="eyebrow">CONOCÉ VERZIX</span>

    <h2>
      Más que reservas.
      <span> Una nueva forma de gestionar.</span>
    </h2>

    <p className="intro-description">
      VERZIX conecta todo lo que necesitás para administrar
      tu negocio en una sola plataforma. Organizá tus turnos,
      gestioná tus servicios y ofrecé una experiencia moderna
      a cada cliente.
    </p>

    <div className="intro-features">
      <div className="intro-feature">
        <span className="intro-feature-number">01</span>
        <div>
          <h3>Todo organizado</h3>
          <p>Tu agenda y tus reservas en un solo lugar.</p>
        </div>
      </div>

      <div className="intro-feature">
        <span className="intro-feature-number">02</span>
        <div>
          <h3>Gestión sencilla</h3>
          <p>Administrá tu negocio de forma práctica.</p>
        </div>
      </div>

      <div className="intro-feature">
        <span className="intro-feature-number">03</span>
        <div>
          <h3>Mejor experiencia</h3>
          <p>Facilitá las reservas para tus clientes.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="features-section" id="funciones">
  <div className="section-heading">
    <span className="eyebrow">UNA PLATAFORMA COMPLETA</span>
    <h2>Todo tu negocio. En un solo lugar.</h2>
    <p>
      Las herramientas que necesitás para simplificar la gestión,
      organizar tus reservas y hacer crecer tu negocio.
    </p>
  </div>

  <div className="features-grid">
    <article className="feature-card">
      <span className="feature-number">01 / RESERVAS</span>
      <span className="feature-icon">▦</span>
      <h3>Reservas online</h3>
      <p>
        Permití que tus clientes consulten tus servicios
        y soliciten sus turnos de forma online.
      </p>
      <span className="feature-arrow">↗</span>
    </article>

    <article className="feature-card">
      <span className="feature-number">02 / AGENDA</span>
      <span className="feature-icon">◷</span>
      <h3>Gestión de agenda</h3>
      <p>
        Visualizá tus reservas, organizá los horarios
        y mantené cada jornada bajo control.
      </p>
      <span className="feature-arrow">↗</span>
    </article>

    <article className="feature-card">
      <span className="feature-number">03 / SERVICIOS</span>
      <span className="feature-icon">◇</span>
      <h3>Administración de servicios</h3>
      <p>
        Configurá tus servicios, establecé precios
        y definí la duración de cada atención.
      </p>
      <span className="feature-arrow">↗</span>
    </article>

    <article className="feature-card">
      <span className="feature-number">04 / CONTROL</span>
      <span className="feature-icon">▤</span>
      <h3>Panel administrativo</h3>
      <p>
        Accedé a la información de tu negocio
        desde un espacio centralizado.
      </p>
      <span className="feature-arrow">↗</span>
    </article>

    <article className="feature-card">
      <span className="feature-number">05 / PRESENCIA</span>
      <span className="feature-icon">◎</span>
      <h3>Tu negocio online</h3>
      <p>
        Compartí tu propia página para mostrar
        tus servicios y recibir reservas.
      </p>
      <span className="feature-arrow">↗</span>
    </article>

    <article className="feature-card">
      <span className="feature-number">06 / ORGANIZACIÓN</span>
      <span className="feature-icon">↗</span>
      <h3>Más organización</h3>
      <p>
        Simplificá las tareas diarias y dedicá
        más tiempo a tus clientes.
      </p>
      <span className="feature-arrow">↗</span>
    </article>
  </div>
</section>

      <section className="business-section" id="negocios">
  <div className="section-heading">
    <span className="eyebrow">DISEÑADO PARA DISTINTAS ACTIVIDADES</span>
    <h2>Tu negocio también puede estar en VERZIX.</h2>
    <p>
      Una plataforma flexible para negocios que trabajan
      con citas, turnos y reservas.
    </p>
  </div>

  <div className="business-grid">
    <article className="business-card">
      <span className="business-number">01</span>
      <span className="business-icon">✂</span>
      <h3>Barberías</h3>
      <p>
        Organizá los turnos, servicios y horarios
        de atención de tu barbería.
      </p>
      <span className="business-link">GESTIÓN DE TURNOS ↗</span>
    </article>

    <article className="business-card">
      <span className="business-number">02</span>
      <span className="business-icon">✿</span>
      <h3>Belleza y estética</h3>
      <p>
        Administrá las citas de salones de belleza,
        manicura y centros de estética.
      </p>
      <span className="business-link">GESTIÓN DE CITAS ↗</span>
    </article>

    <article className="business-card">
      <span className="business-number">03</span>
      <span className="business-icon">◇</span>
      <h3>Servicios profesionales</h3>
      <p>
        Organizá las consultas y horarios
        de atención de tus clientes.
      </p>
      <span className="business-link">AGENDA PROFESIONAL ↗</span>
    </article>

    <article className="business-card">
      <span className="business-number">04</span>
      <span className="business-icon">▣</span>
      <h3>Otros negocios</h3>
      <p>
        Adaptá la plataforma a las necesidades
        y características de tu actividad.
      </p>
      <span className="business-link">SOLUCIONES FLEXIBLES ↗</span>
    </article>
  </div>
</section>
<section className="pricing-section" id="precios">
  <div className="section-heading">
    <span className="eyebrow">UNA INVERSIÓN EN TU NEGOCIO</span>
    <h2>Todo lo que necesitás. Un solo plan.</h2>
    <p>
      Empezá a gestionar tu negocio con herramientas
      profesionales y una plataforma diseñada para vos.
    </p>
  </div>

  <div className="pricing-card">
    <div className="pricing-card-header">
      <span className="pricing-label">VERZIX / PLAN COMPLETO</span>
      <span className="pricing-status">TODO INCLUIDO</span>
    </div>

    <h3>Tu negocio, mejor organizado.</h3>

    <p className="pricing-description">
      Una plataforma para administrar tus reservas,
      servicios y horarios desde un solo lugar.
    </p>

    <div className="pricing-setup">
      <span>IMPLEMENTACIÓN Y CONFIGURACIÓN</span>
      <strong>Gs. 350.000</strong>
      <small>Pago único inicial</small>
    </div>

    <div className="pricing-monthly">
      <strong>Gs. 150.000</strong>
      <span>/ mes</span>
    </div>

    <p className="pricing-note">
      Mensualidad por uso de la plataforma.
    </p>

    <div className="pricing-divider"></div>

    <span className="pricing-includes">LO QUE INCLUYE TU PLAN</span>

    <ul className="pricing-list">
      <li>✓ Página personalizada para tu negocio</li>
      <li>✓ Sistema de reservas online</li>
      <li>✓ Gestión de horarios y servicios</li>
      <li>✓ Panel administrativo</li>
      <li>✓ Mantenimiento y soporte básico</li>
    </ul>

    <a
      href="https://wa.me/595986368231?text=Hola%2C%20quiero%20hablar%20con%20un%20asesor%20de%20VERZIX."
      className="primary-button pricing-button"
      target="_blank"
      rel="noreferrer"
    >
      Solicitar información →
    </a>

    <p className="pricing-footer">
      VERZIX · Gestión inteligente para tu negocio.
    </p>
  </div>
</section>
 
      <section className="faq-section" id="preguntas">
  <div className="section-heading">
    <span className="eyebrow">RESOLVEMOS TUS DUDAS</span>
    <h2>Preguntas frecuentes</h2>
    <p>
      Conocé más sobre VERZIX y cómo puede ayudarte a organizar tu negocio.
    </p>
  </div>

  <div className="faq-container">
    <details className="faq-item">
      <summary>¿Qué es VERZIX?</summary>
      <p>
        VERZIX es una plataforma de gestión y reservas online que permite
        organizar los horarios, administrar los servicios y gestionar
        las reservas de tu negocio.
      </p>
    </details>

    <details className="faq-item">
      <summary>¿Cómo funciona el sistema?</summary>
      <p>
        Tu negocio cuenta con una página personalizada que podés compartir
        con tus clientes para que consulten tus servicios y soliciten
        sus reservas. Desde el panel administrativo podés gestionar
        tu negocio.
      </p>
    </details>

    <details className="faq-item">
      <summary>¿Cuánto cuesta contratar VERZIX?</summary>
      <p>
        La configuración inicial tiene un costo único de Gs. 350.000
        y la mensualidad por uso de la plataforma es de Gs. 150.000.
      </p>
    </details>

    <details className="faq-item">
      <summary>¿Puedo personalizar la página de mi negocio?</summary>
      <p>
        Sí. Tu negocio tendrá una página personalizada con su información
        y sus servicios para compartir con tus clientes.
      </p>
    </details>

    <details className="faq-item">
      <summary>¿Cómo puedo contratar VERZIX?</summary>
      <p>
        Podés contactar con nuestro equipo por WhatsApp para recibir
        información y conocer los pasos para comenzar.
      </p>
    </details>
  </div>
</section>
      <section className="cta-section" id="contacto">
        <span className="eyebrow">EMPEZÁ CON VERZIX</span>
        <h2>Tu negocio merece una mejor organización.</h2>
        <p>
          Conocé cómo funciona VERZIX y descubrí una forma
          más simple de gestionar tus reservas.
        </p>
<a
  href="https://wa.me/595986368231?text=Hola%2C%20quiero%20conocer%20VERZIX."
  target="_blank"
  rel="noreferrer"
  className="primary-button"
>
  Contactar con un asesor →
</a>
      </section>

      <footer className="footer">
        <a href="#" className="brand">
<img src="/logo.png" alt="VERZIX" className="brand-logo" />
          <span>VERZIX</span>
        </a>
        <p>Gestión inteligente de reservas.</p>
        <small>© 2026 VERZIX. Todos los derechos reservados.</small>
      </footer>
      <a
  href="https://wa.me/595986368231?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20VERZIX."
  className="whatsapp-float"
  target="_blank"
  rel="noreferrer"
  aria-label="Contactar por WhatsApp"
>
  <span>WhatsApp</span>
  <strong>↗</strong>
</a>
    </main>
  )
}

export default App
