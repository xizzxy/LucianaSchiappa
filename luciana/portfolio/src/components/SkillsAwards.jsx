import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const SkillsAwards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const skills = {
    'Legal & Analytical': [
      { name: 'Legal Research & Writing', level: 85 },
      { name: 'Critical Thinking', level: 90 },
      { name: 'Case Analysis', level: 85 },
      { name: 'Attention to Detail', level: 95 }
    ],
    'Financial & Business': [
      { name: 'Financial Analysis', level: 85 },
      { name: 'Business Operations', level: 80 },
      { name: 'Client Service', level: 90 },
      { name: 'Project Management', level: 85 }
    ],
    'Professional Skills': [
      { name: 'Public Speaking', level: 90 },
      { name: 'Leadership', level: 85 },
      { name: 'Ethics & Professionalism', level: 95 },
      { name: 'Communication', level: 90 }
    ]
  };

  return (
    <section id="skills-awards" className="py-20 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & <span className="text-gold-400">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gold-400/10 p-3 rounded-lg">
                <Star className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Key Skills for Tax Law</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-gold-400 mb-6">{category}</h4>
                  <div className="space-y-4">
                    {skillList.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-gold-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-navy-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gold-400/10 p-3 rounded-lg">
                <Trophy className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Awards & Honors</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Award 1 - FBLA Nationals */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg">
                    <Trophy className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      FBLA National Qualifier & Competitor
                    </h4>
                    <p className="text-gold-400 mb-3">Future Business Leaders of America</p>
                    <p className="text-gray-300 mb-3">National Leadership Conference</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Competed at the national level representing my state in FBLA business competitions.
                      This achievement demonstrates excellence in business knowledge, professional skills,
                      and competitive performance against top students nationwide.
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-lg overflow-hidden border border-gold-400/20">
                  <img
                    src="/images/image 4.png"
                    alt="FBLA Nationals - National Qualifier & Competitor"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Award 2 - State Competition */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg">
                    <Medal className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      3rd Place - Client Service Event
                    </h4>
                    <p className="text-gold-400 mb-3">FBLA State Competition</p>
                    <p className="text-gray-300 mb-3">State Leadership Conference</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Earned 3rd place at the state level in Client Service competitive event.
                      This achievement showcases strong client communication skills, professional
                      demeanor, and ability to solve complex business problems - all essential
                      skills for a successful tax attorney career.
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-lg overflow-hidden border border-gold-400/20">
                  <img
                    src="/images/image 5.png"
                    alt="FBLA State Competition - 3rd Place Client Service"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Award 3 - Member Spotlight */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg">
                    <Star className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      FBLA Member Spotlight Recognition
                    </h4>
                    <p className="text-gold-400 mb-3">Future Business Leaders of America</p>
                    <p className="text-gray-300 mb-3">Chapter Recognition</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Selected as the first and only member to be featured in the chapter's member
                      spotlight. This honor recognizes outstanding leadership, dedication to the
                      organization, and exemplary character both in competition and community service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Award 4 - Food Drive */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Community Service Leadership
                    </h4>
                    <p className="text-gold-400 mb-3">Food Drive Initiative</p>
                    <p className="text-gray-300 mb-3">10,400+ Items Collected</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Led community food drive that collected over 10,400 items for families in need.
                      Demonstrated exceptional organizational skills, community engagement, and
                      commitment to public service - values essential for a career in tax law where
                      helping others navigate complex systems is paramount.
                    </p>
                  </div>
                </div>
              </div>

              {/* Award 5 - LegalEagleBee */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg">
                    <Trophy className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Top 6% Worldwide
                    </h4>
                    <p className="text-gold-400 mb-3">LegalEagleBee Court Case Exam Competition</p>
                    <p className="text-gray-300 mb-3">International Recognition</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Recognized for legal reasoning and case analysis skills in a worldwide competition.
                      This achievement demonstrates exceptional analytical abilities and deep understanding
                      of legal principles - critical skills for a successful career in tax law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Award 6 - Horizon Academic */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg">
                    <Medal className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Top 3% Worldwide
                    </h4>
                    <p className="text-gold-400 mb-3">Horizon Academic Research Essay Contest</p>
                    <p className="text-gray-300 mb-3">$1,500 Scholarship Award</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Awarded scholarship for outstanding research and writing skills in a global academic
                      competition. This recognition highlights strong research capabilities, critical analysis,
                      and persuasive writing - all essential competencies for legal practice and scholarship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gold-400/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Training & Certifications</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Business Foundations',
                  issuer: 'Wharton School of Business',
                  date: 'Online Course',
                  description: 'Completed comprehensive business fundamentals course from one of the top business schools, building foundation in corporate operations and financial principles'
                },
                {
                  name: 'Mock Trial Certificate',
                  issuer: 'Stetson University',
                  date: 'Legal Training',
                  description: 'Participated in mock trial program, gaining practical experience in courtroom procedures, legal argumentation, and professional legal conduct'
                }
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="w-5 h-5 text-gold-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-gold-400 text-sm mb-2">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs mb-3">{cert.date}</p>
                      <p className="text-gray-300 text-sm">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAwards;
