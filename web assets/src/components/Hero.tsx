function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="left-section">
            <p className="section-label">BRANDING & DIGITAL PRESENCE</p>
            <h1>
              We build <span className="highlight">brands</span> that gets
              recognized
            </h1>
            <p className="hero-description">
              Build more than a logo; build a brand. We create complete branding
              systems, marketing materials, and digital experiences designed to
              elevate your business. Own every asset with flexible pricing that
              grows alongside your success.{" "}
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Tell us your challenge
              </a>
              <a href="#pricing" className="btn btn-secondary">
                See pricing →
              </a>
              <a href="#work" className="link-arrow">
                See the work →
              </a>
            </div>
          </div>

          <div className="right-section">
            <div>
              <div>
                <canvas></canvas>
              </div>
              <div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-label">PROJECTS DELIVERED</div>
                    <div className="stat-value">
                      50+ <span className="stat-sub">and counting</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">DELIVERY TIME</div>
                    <div className="stat-value">
                      1–2 <span className="stat-sub">weeks average</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">CLIENT SATISFACTION</div>
                    <div className="stat-value">
                      100% <span className="stat-sub">satisfaction rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
