import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, TrendingUp, FileText, Scale, Users } from 'lucide-react';

const EducationExperience = () => {
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

  return (
    <section id="education-experience" className="py-20 bg-gradient-to-b from-navy-800 to-navy-900">
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
              Career-Related Education & <span className="text-gold-400">Work Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              My education and hands-on experiences have helped me build a strong foundation for a future in tax law
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
          </motion.div>

          {/* Academic and Career Preparation Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gold-400/10 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Academic and Career Preparation</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1: Dual Enrollment */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg flex-shrink-0">
                    <FileText className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      Advanced Legal Coursework
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Completed 22 dual enrollment credits in law, criminology and justice studies
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Internship Experience */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      Tax & Financial Experience
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Gained experience with financial documents and tax-related tasks through my internship
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Mock Trial */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg flex-shrink-0">
                    <Scale className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      Legal Research & Reasoning
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Strengthened legal reasoning and research skills by founding and leading Mock Trial
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Leadership */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-400/10 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">
                      Professional Development
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Developed leadership, organization and communication through multiple officer roles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gold-400/10 p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {/* CliftonLarsonAllen Internship */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          Accounting Intern (Paid)
                        </h4>
                        <p className="text-xl text-gold-400 mb-3">
                          CliftonLarsonAllen (Top 10 U.S. Firm)
                        </p>
                        <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-gold-400" />
                            <span>Selective 4% acceptance rate</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5 className="text-lg font-semibold text-white mb-3">Tax-Related Experience</h5>
                    <ul className="space-y-2 mb-4">
                      {[
                        'Gained hands-on experience with financial documents and tax-related tasks',
                        'Worked alongside tax professionals on client documentation',
                        'Developed understanding of tax compliance and financial reporting',
                        'Spearheaded 10.4k+ item donation drive, coordinating logistics and community outreach'
                      ].map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="text-gold-400 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    <h5 className="text-lg font-semibold text-white mb-3">Skills for Tax Law Career</h5>
                    <ul className="space-y-2">
                      {[
                        'Financial document analysis and attention to detail',
                        'Understanding of tax compliance procedures',
                        'Professional communication with clients and team members',
                        'Experience in a top-tier professional services environment'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="text-gold-400 mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-1">
                    <div className="bg-navy-700/50 rounded-lg overflow-hidden border border-gold-400/20">
                      <img
                        src="/images/Image 2. Internship.png"
                        alt="CliftonLarsonAllen Internship - Top 10 U.S. Accounting Firm"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-400 text-sm text-center mt-3">
                      CliftonLarsonAllen Internship - Top 10 U.S. Accounting Firm
                    </p>
                  </div>
                </div>
              </div>

              {/* FBLA Experience */}
              <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          Active Member & Competitor
                        </h4>
                        <p className="text-xl text-gold-400 mb-3">
                          Future Business Leaders of America (FBLA)
                        </p>
                        <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gold-400" />
                            <span>High School Chapter</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gold-400" />
                            <span>Current Member</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5 className="text-lg font-semibold text-white mb-3">Business & Finance Leadership</h5>
                    <ul className="space-y-2 mb-4">
                      {[
                        'Active participant in business competitions and leadership conferences',
                        'Competed at state and national levels in various business events',
                        'Developed professional skills in client service and business communication',
                        'First and only member to be featured in chapter member spotlight',
                        'Built network with business professionals and student leaders'
                      ].map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="text-gold-400 mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>

                    <h5 className="text-lg font-semibold text-white mb-3">Skills for Tax Law Career</h5>
                    <ul className="space-y-2">
                      {[
                        'Business acumen and understanding of financial operations',
                        'Professional communication and client relations',
                        'Financial literacy and economic analysis',
                        'Experience presenting complex information clearly',
                        'Leadership and collaboration in professional settings'
                      ].map((skill, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="text-gold-400 mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-1">
                    <div className="bg-navy-700/50 rounded-lg overflow-hidden border border-gold-400/20">
                      <img
                        src="/images/Image 3. Member spotlight.png"
                        alt="FBLA Member Spotlight - First & Only Featured Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-400 text-sm text-center mt-3">
                      Member Spotlight - First & Only Featured Member
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career-Related Skills Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gold-400/10 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Career-Related Skills</h3>
            </div>

            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Financial Skills */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gold-400" />
                    Financial & Tax
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Financial document analysis',
                      'Tax compliance understanding',
                      'Financial reporting',
                      'Economic analysis',
                      'Financial literacy'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Skills */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-gold-400" />
                    Legal & Research
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Legal research',
                      'Legal reasoning',
                      'Case analysis',
                      'Attention to detail',
                      'Regulatory compliance'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Professional Skills */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-gold-400" />
                    Professional
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Client communication',
                      'Leadership',
                      'Organization',
                      'Public speaking',
                      'Team collaboration'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationExperience;
