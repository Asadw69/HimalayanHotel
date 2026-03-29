import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Rooms', href: '#rooms', id: 'rooms' },
    { name: 'Facilities', href: '#facilities', id: 'facilities' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Location', href: '#location', id: 'location' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'rooms', 'facilities', 'gallery', 'location', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 glass-card shadow-lg' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="font-headline font-extrabold text-2xl tracking-tighter text-primary uppercase">
          HIMALAYAN HOTEL
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`font-headline font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:text-secondary ${activeSection === link.id ? 'text-secondary' : 'text-primary'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/918433265403"
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-full font-headline font-bold text-sm tracking-widest hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
          >
            BOOK NOW
          </a>
        </div>

        {/* Hamburger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-2 group z-[110]"
        >
          <div className={`w-8 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center gap-8 lg:hidden transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-2xl font-headline font-bold text-primary hover:text-secondary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a 
          href="https://wa.me/918433265403"
          target="_blank"
          rel="noreferrer"
          className="mt-4 bg-primary text-white px-10 py-4 rounded-full font-headline font-bold text-lg shadow-xl"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
