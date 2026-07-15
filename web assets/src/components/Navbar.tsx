import { useEffect, useState } from "react";
import logo from "../assets/favicon.png";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#work", label: "Our work" },
  { href: "#about", label: "About" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <img src={logo} alt="Recognit" className="logo-image" />
              <div className="nav-brand">
                <span className="logo-text">RECOGNIT</span>
                <span className="brand-2">Agency</span>
              </div>
            </div>

            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary nav-cta">
              Tell us your challenge →
            </a>

            <button
              type="button"
              className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu-backdrop ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`mobile-menu-panel ${menuOpen ? "active" : ""}`}>
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        >
          →
        </button>

        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Tell us your challenge →
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
