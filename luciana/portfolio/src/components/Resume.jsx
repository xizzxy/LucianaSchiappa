import { motion } from 'framer-motion';
import { FileText, Award, Briefcase, GraduationCap, Users } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Founder & President",
      organization: "Cypress Creek High School Mock Trial Club",
      description: "Recruited 25+ members, created weekly case packets, built a year-long curriculum, led bi-weekly lectures, organized try-outs, and trained the entire team from scratch.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Accounting Intern (Paid)",
      organization: "CliftonLarsonAllen (Top 10 U.S. Firm)",
      description: "Selective 4% acceptance; spearheaded 10.4k+ item donation drive; designed outreach materials; presented an immersive case study to 100+ industry professionals.",
      color: "from-navy-500 to-navy-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Legal Translator & Digital Assistant",
      organization: "Independent Community Service",
      description: "Translated 200+ legal and government documents monthly for Spanish-speaking residents; guided families through court filings and government systems.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Secretary & Officer",
      organization: "Future Business Leaders of America (FBLA)",
      description: "Sole national qualifier; increased membership by 46%; chaired Competitive Events Committee; led workshops mentoring peers.",
      color: "from-gold-400 to-gold-500"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Mock Attorney",
      organization: "Stetson University Criminal Trial Program",
      description: "Received scholarship; completed an intensive trial program; presented full courtroom components under judges and attorneys.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const otherExperience = [
    {
      title: "Party Host",
      org: "Main Event Entertainment",
      desc: "Led events for 30+ guests; coordinated logistics and full execution; trained and supported new team members."
    },
    {
      title: "Co-Founder & Vice President",
      org: "Herd of Youth Trailblazers",
      desc: "Built the executive board, recruited founding members, and organized the first toy and food donation drives."
    },
    {
      title: "Pantry Volunteer",
      org: "St. Mark's Catholic Church",
      desc: "Collected and organized donations; scheduled volunteers; coordinated weekly distribution for 100+ families."
    }
  ];

  const awards = [
    "Top 3% Worldwide — Horizon Academic Research Essay Contest ($1,500 scholarship)",
    "FBLA Competitive Events — Districts 1st • State 3rd • Nationals Qualifier",
    "Top 6% Worldwide — LegalEagleBee Court Case Exam Competition"
  ];

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
            Resume • Activities • Awards
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            A visual overview of my experience, leadership, and recognitions
          </p>
          <motion.a
            href="/resume/Luciana Schiappa Castro Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-700 text-white rounded-lg font-medium hover:bg-navy-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} />
            View Full Resume
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-navy-800 mb-6">Academic Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="text-4xl font-bold text-navy-700 mb-2">22</div>
              <p className="text-slate-700 font-medium">
                College credits through dual enrollment, including coursework centered around <strong>law, criminology, and justice studies</strong> with a <strong>4.0 GPA</strong>
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="text-4xl font-bold text-navy-700 mb-2">7</div>
              <p className="text-slate-700 font-medium">
                AP courses completed in the past 2 years
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-navy-800 mb-8">Activities & Leadership</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} text-white flex items-center justify-center shadow-lg`}>
                    {exp.icon}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold text-navy-800">{exp.title}</h4>
                    <p className="text-navy-600 font-medium mb-2">{exp.organization}</p>
                    <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-navy-800 mb-6">Other Experience</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherExperience.map((exp, index) => (
              <motion.div
                key={index}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-navy-300 transition-colors"
                whileHover={{ y: -5 }}
              >
                <h4 className="font-bold text-navy-800 mb-1">{exp.title}</h4>
                <p className="text-sm text-navy-600 font-medium mb-3">{exp.org}</p>
                <p className="text-sm text-slate-600">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy-800 mb-6">Awards & Recognitions</h3>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-gold-50 to-yellow-50 rounded-lg border border-gold-200"
              >
                <Award className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700 font-medium">{award}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
