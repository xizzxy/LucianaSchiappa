import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/luciana-schiappa-castro-76307432a/',
      label: '/in/luciana-schiappa-castro-76307432a/'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:lucianaschiappa@outlook.com',
      label: 'lucianaschiappa@outlook.com'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-navy-900 to-black py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(217, 179, 80) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Thank You for Visiting My Portfolio
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              This portfolio represents my journey toward becoming a tax attorney and my commitment to
              combining analytical expertise with public service. Through rigorous education at Florida State
              University and law school, I plan to develop the skills needed to help individuals and businesses
              navigate the complex world of tax law. My goal is to provide expert legal guidance while upholding
              the highest standards of ethics and professionalism, making a positive impact on my clients and
              community.
            </p>
            <p className="text-gold-400 font-semibold">
              "The law is reason, free from passion." - Aristotle
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-navy-800/50 backdrop-blur-sm px-6 py-3 rounded-lg border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 group"
            >
              <social.icon className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors duration-200" />
              <div className="text-left">
                <p className="text-white font-semibold text-sm">{social.name}</p>
                <p className="text-gray-400 text-xs">{social.label}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent mb-8"></div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2">
              &copy; {currentYear} Luciana's Portfolio. 
              
            </p>
            <p className="mt-2 text-xs">
              Aspiring Tax Attorney | Future FSU Student
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-gray-400 text-xs text-center">
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gold-400/10 p-3 rounded-lg border border-gold-400/30 hover:border-gold-400/60 hover:bg-gold-400/20 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors duration-200" />
            </motion.button>
          </div>
        </motion.div>

        {/* Portfolio Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gold-400/10"
        >
          <div className="max-w-3xl mx-auto">
            <h4 className="text-white font-semibold text-center mb-4">About This Portfolio</h4>
            <p className="text-gray-400 text-sm text-center leading-relaxed">
              This digital portfolio was created as part of my career exploration and professional development
              in pursuing a career as a tax attorney. It showcases my research into the tax law profession,
              educational planning through Florida State University, leadership experience through FBLA, and
              commitment to community service. The site demonstrates my technical skills while presenting my
              journey toward combining analytical expertise with legal advocacy. All content is thoroughly
              researched and properly cited from credible sources.
            </p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: 'Resume', href: '#resume' },
            { label: 'Career Research', href: '#career-research' },
            { label: 'Education', href: '#education-experience' },
            { label: 'Skills & Awards', href: '#skills-awards' },
            { label: 'Sources', href: '#sources' }
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold-400/10 blur-3xl rounded-full"></div>
    </footer>
  );
};

export default Footer;
