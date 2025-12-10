import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Resume', href: '#resume' },
    { name: 'Career Research', href: '#career-research' },
    { name: 'Experience', href: '#education-experience' },
    { name: 'Skills & Awards', href: '#skills-awards' },
    { name: 'Sources', href: '#sources' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#hero"
            className="text-2xl font-serif font-bold text-navy-800"
            whileHover={{ scale: 1.05 }}
          >
            Luciana Schiappa
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-navy-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="https://onedrive.live.com/personal/af53e3bf91971958/_layouts/15/Doc.aspx?sourcedoc=%7Bae392238-be62-4009-a942-e429bd162c38%7D&action=default"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-navy-700 text-white rounded-lg hover:bg-navy-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={18} />
              Resume
            </motion.a>
          </div>

          <button
            className="md:hidden text-navy-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-200 py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-slate-700 hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://onedrive.live.com/personal/af53e3bf91971958/_layouts/15/Doc.aspx?sourcedoc=%7Bae392238-be62-4009-a942-e429bd162c38%7D&action=default"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-3 px-4 py-3 bg-navy-700 text-white text-center rounded-lg"
            >
               Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
