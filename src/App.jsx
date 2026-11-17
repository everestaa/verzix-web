
import './App.css'

function App() {
  return (
    <main>
      <header className="navbar">
        <a href="#" className="brand">
          <span className="brand-icon">V.</span>
          <span>VERZIX</span>
        </a>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Plataforma</a>
          <a href="#funciones">Funcionalidades</a>
          <a href="#negocios">Para quiénes</a>

        </nav>

        <a href="#contacto" className="nav-button">
          Solicitar una demo
        </a>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">
            GESTIÓN INTELIGENTE DE RESERVAS
          </span>

          <h1>
            Tu negocio organizado.
            <span> Tu tiempo en tus manos.</span>
          </h1>

          <p>
            Simplificá la gestión de tu negocio con una plataforma
            de reservas online. Organizá tus horarios, administrá
            tus servicios y ofrecé una experiencia profesional
            a tus clientes.
          </p>

          <div className="hero-actions">
            <a href="#contacto" className="primary-button">
              Solicitar una demo →
            </a>

          </div>

          <div className="hero-note">
            <span className="online-dot"></span>
            Una nueva forma de gestionar tus reservas
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
            <p className="preview-label">RESUMEN GENERAL</p>
            <h3>Tu negocio, bajo control.</h3>

            <div className="preview-stats">
              <div className="preview-card">
                <span>Reservas</span>
                <strong>Agenda</strong>
                <small>Organización de turnos</small>
              </div>
              <div className="preview-card">
                <span>Servicios</span>
                <strong>Gestión</strong>
                <small>Todo en un solo lugar</small>
              </div>
            </div>

            <div className="preview-agenda">
              <div className="agenda-heading">
                <strong>Gestión de agenda</strong>
                <span>VERZIX</span>
              </div>
              <div className="agenda-line">
                <span className="agenda-dot"></span>
                Reservas organizadas
                <b>✓</b>
              </div>
              <div className="agenda-line">
                <span className="agenda-dot"></span>
                Servicios configurados
                <b>✓</b>
              </div>
              <div className="agenda-line">
                <span className="agenda-dot"></span>
                Horarios administrados
                <b>✓</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section" id="nosotros">
        <span className="eyebrow">CONOCÉ VERZIX</span>
        <h2>¿Qué es VERZIX?</h2>
        <p>
          VERZIX es una plataforma de gestión y reservas online
          diseñada para ayudar a los negocios a organizar sus
          agendas, administrar sus servicios y simplificar
          la atención de sus clientes.
        </p>
        <p>
          Todo desde un mismo lugar, con herramientas simples,
          prácticas y profesionales.
        </p>
      </section>

      <section className="features-section" id="funciones">
        <div className="section-heading">
          <span className="eyebrow">UNA PLATAFORMA COMPLETA</span>
          <h2>Todo lo que necesitás para organizar tu negocio</h2>
          <p>
            Herramientas para administrar tu agenda y brindar
            una mejor experiencia a tus clientes.
          </p>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <span className="feature-icon">▦</span>
            <h3>Reservas online</h3>
            <p>
              Ofrecé una página de reservas para que tus clientes
              puedan consultar y solicitar sus turnos.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">◷</span>
            <h3>Gestión de agenda</h3>
            <p>
              Organizá los horarios, consultá las reservas
              y mantené tu agenda bajo control.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">◇</span>
            <h3>Administración de servicios</h3>
            <p>
              Configurá los servicios de tu negocio,
              sus precios y sus duraciones.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">▤</span>
            <h3>Panel administrativo</h3>
            <p>
              Gestioná la información de tu negocio
              desde un espacio centralizado.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">◎</span>
            <h3>Página para tu negocio</h3>
            <p>
              Compartí un enlace propio para que tus clientes
              conozcan tus servicios y realicen reservas.
            </p>
          </article>

          <article className="feature-card">
            <span className="feature-icon">↗</span>
            <h3>Más organización</h3>
            <p>
              Reducí las tareas manuales y dedicá más tiempo
              a la atención de tus clientes.
            </p>
          </article>
        </div>
      </section>

      <section className="business-section" id="negocios">
        <div className="section-heading">
          <span className="eyebrow">VERZIX SE ADAPTA A VOS</span>
          <h2>¿Para qué negocios está pensado?</h2>
          <p>
            Si tu actividad trabaja con citas, turnos o reservas,
            VERZIX puede ayudarte a organizarla.
          </p>
        </div>

        <div className="business-grid">
          <div className="business-card">
            <span>✂</span>
            <h3>Barberías</h3>
            <p>Organizá los turnos y servicios de tu barbería.</p>
          </div>
          <div className="business-card">
            <span>✿</span>
            <h3>Belleza y estética</h3>
            <p>Administrá citas para salones, manicura y estética.</p>
          </div>
          <div className="business-card">
            <span>◇</span>
            <h3>Servicios profesionales</h3>
            <p>Organizá las citas de atención de tus clientes.</p>
          </div>
          <div className="business-card">
            <span>▣</span>
            <h3>Otros negocios</h3>
            <p>Adaptá la agenda a las necesidades de tu actividad.</p>
          </div>
        </div>
      </section>
<section className="pricing-section" id="precios">
  <div className="section-heading">
    <span className="eyebrow">UN PLAN, TODO LO NECESARIO</span>
    <h2>Una solución para organizar tu negocio</h2>
    <p>
      Empezá a gestionar tus reservas con una plataforma
      diseñada para simplificar tu trabajo.
    </p>
  </div>

  <div className="pricing-card">
    <span className="pricing-label">PLAN VERZIX</span>
    <h3>Plataforma completa</h3>
    <p className="pricing-description">
      Todo lo necesario para administrar tu negocio desde un solo lugar.
    </p>

    <div className="pricing-setup">
      <span>Configuración inicial</span>
      <strong>Gs. 350.000</strong>
      <small>Pago único</small>
    </div>

    <div className="pricing-monthly">
      <strong>Gs. 150.000</strong>
      <span>/ mes</span>
    </div>

    <p className="pricing-note">Mensualidad por uso de la plataforma.</p>

    <div className="pricing-divider"></div>

    <ul className="pricing-list">
      <li>✓ Página personalizada para tu negocio</li>
      <li>✓ Sistema de reservas online</li>
      <li>✓ Gestión de horarios y servicios</li>
      <li>✓ Panel administrativo</li>
      <li>✓ Mantenimiento y soporte básico</li>
    </ul>

<a
  href="https://wa.me/595981889670?text=Hola%2C%20quiero%20hablar%20con%20un%20asesor%20de%20VERZIX."
  className="primary-button pricing-button"
  target="_blank"
  rel="noreferrer"
>
  Contactar con un asesor →
</a>
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
  href="https://wa.me/595981889670?text=Hola%2C%20quiero%20conocer%20VERZIX."
  target="_blank"
  rel="noreferrer"
  className="primary-button"
>
  Contactar con un asesor →
</a>
      </section>

      <footer className="footer">
        <a href="#" className="brand">
          <span className="brand-icon">V.</span>
          <span>VERZIX</span>
        </a>
        <p>Gestión inteligente de reservas.</p>
        <small>© 2026 VERZIX. Todos los derechos reservados.</small>
      </footer>
      <a
  href="https://wa.me/595981889670?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20VERZIX."
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
