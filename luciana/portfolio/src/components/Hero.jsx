import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-50 via-white to-blue-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-navy-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Luciana
              <br />
              <span className="text-navy-600">Schiappa</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-600 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Future Tax Attorney
            </motion.p>

            <motion.p
              className="text-lg text-slate-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Finance & Political Science Student
            </motion.p>

            <motion.div
              className="pt-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-slate-600 leading-relaxed">
                I am currently a senior at <strong>Cypress Creek High School</strong> with plans to double major in Finance and Political Science at Florida State University. After completing my undergraduate studies, I will attend law school to earn my Juris Doctor (JD) and pursue a career as a Tax Attorney.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="#resume"
                  className="px-6 py-3 bg-navy-700 text-white rounded-lg font-medium hover:bg-navy-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/resume/Luciana Schiappa Castro Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-navy-700 text-navy-700 rounded-lg font-medium hover:bg-navy-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   Resume
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-navy-600 to-blue-600 rounded-2xl"
                animate={{
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img
                src="/images/Image 1.png"
                alt="Luciana Schiappa - Professional Portrait"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-3xl font-bold text-navy-700">22</div>
              <div className="text-sm text-slate-600">College Credits</div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-3xl font-bold text-navy-700">4.0</div>
              <div className="text-sm text-slate-600">GPA</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-navy-600" size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;

