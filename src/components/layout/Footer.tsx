import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/evergreenodeh" },
  { label: "Substack", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Figma", href: "#" },
  { label: "YouTube", href: "#" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Mentorship", href: "/mentorship" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)" }}
    >
      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 text-center">
        <p
          className="font-serif italic text-4xl md:text-5xl mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          I find the gap.
        </p>
        <p
          className="font-serif text-4xl md:text-5xl mb-10"
          style={{ color: "var(--text-accent)" }}
        >
          Then I build in it.
        </p>
        <p
          className="text-sm mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          Got one that needs filling?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:everodeh48@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 mask-hover mask-lavender glass"
            style={{ color: "var(--text-accent)" }}
          >
            Get in touch →
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105"
            style={{ color: "var(--text-muted)" }}
          >
            Download CV ↓
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                {s.label}
              </a>
            ))}
          </div>

          <p
            className="text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            © Evergreen Odeh · Built with love 🌿
          </p>
        </div>
      </div>
    </footer>
  );
}