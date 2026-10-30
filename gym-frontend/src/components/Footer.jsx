import React from 'react'
const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Contact', href: '#contact' },
];
export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full overflow-hidden border-t border-white/10 bg-neutral-950 px-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:py-16">
          {/* Brand */}
          <div className="min-w-0">
            <a
              href="#home"
              className="inline-flex max-w-full items-center gap-3"
              aria-label="Ironcore Fitness home"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-lime-400 text-2xl font-black italic text-black rounded-lg">
               <i class="bi bi-lightning-charge-fill text-black"></i>
              </span>

              <span className="text-xl font-black uppercase tracking-tight sm:text-2xl">
               PULSE
                <span className="ml-1 text-lime-400">FIT</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Build strength. Develop discipline. Become the strongest
              version of yourself. Your fitness journey starts here.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-lg text-gray-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <i className="bi bi-facebook" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-lg text-gray-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <i className="bi bi-instagram" />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-lg text-gray-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest">
              Quick Links
            </h3>

            <div className="mb-5 mt-3 h-0.5 w-10 bg-lime-400" />

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-lime-400"
                  >
                    <i className="bi bi-arrow-right text-lime-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="text-sm font-black uppercase tracking-widest">
              Get In Touch
            </h3>

            <div className="mb-5 mt-3 h-0.5 w-10 bg-lime-400" />

            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt mt-0.5 text-lg text-lime-400" />
                <span className="break-words">
                  No. 25, Peradeniya Road, Kandy, Sri Lanka
                </span>
              </li>

              <li className="flex items-start gap-3">
                <i className="bi bi-telephone mt-0.5 text-lg text-lime-400" />
                <span>+94 77 123 4567</span>
              </li>

              <li className="flex min-w-0 items-start gap-3">
                <i className="bi bi-envelope mt-0.5 text-lg text-lime-400" />
                <span className="break-all">
                  hello@pulsefit.lk
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-lime-400 px-5 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-lime-300 rounded-lg"
            >
              Contact Us
              <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs leading-5 text-gray-500 sm:text-left">
            © {currentYear} PULSEFIT FITNESS. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-400 transition hover:text-lime-400"
          >
            Back to Top
            <i className="bi bi-arrow-up" />
          </a>
        </div>
      </div>
    </footer>
  )
}
