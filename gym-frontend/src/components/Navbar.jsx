import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Programs', href: '#programs' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (

 <nav className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <a href="#home" className="text-2xl font-black tracking-tight">
          {/* <i class="bi bi-lightning-charge-fill"></i> */}
          <span className='bg-lime-300 rounded-md px-2 py-1 mr-2'><i class="bi bi-lightning-charge-fill text-black"></i></span>
            PULSE<span className="text-lime-300">FIT</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-md font-medium text-gray-300 transition hover:text-lime-400 hover:underline decoration-[#68D454] decoration-2 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Join Button */}
        <a
          href="#membership"
          className="hidden bg-lime-300 px-5 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-lime-300 sm:inline-block rounded-2xl"
        >
          Join Now
          <span className='text-lg pl-2'><i class="bi bi-chevron-right"></i></span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="text-2xl text-lime-400 md:hidden"
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-neutral-950 px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/5 py-3 text-sm text-gray-300 transition hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#membership"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block bg-lime-400 px-5 py-3 text-center font-bold uppercase text-black"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>




  )
}
