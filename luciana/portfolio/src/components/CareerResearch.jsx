import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, GraduationCap, Target, AlertCircle } from 'lucide-react';

const CareerResearch = () => {
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
    <section id="career-research" className="py-20 bg-gradient-to-b from-navy-900 to-navy-800">
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
              Career Research: <span className="text-gold-400">Tax Attorney</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
          </motion.div>

          {/* Career Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-gold-400/10 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">What is a Tax Attorney?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A tax attorney is a lawyer who specializes in helping people and businesses understand and
                    follow tax laws. They work with clients to navigate complex federal and state tax regulations,
                    represent them during audits, and provide strategic advice on tax planning. Tax attorneys combine
                    legal expertise with financial acumen to help individuals and organizations minimize tax liability
                    while remaining compliant with the law. They serve as essential advisors for both routine tax
                    matters and complex financial transactions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Responsibilities */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gold-400/10 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Key Responsibilities</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Research and interpret federal and state tax laws and regulations',
                  'Prepare and review complex tax forms and documentation',
                  'Represent clients during IRS audits and tax disputes',
                  'Advise clients on tax implications of financial decisions',
                  'Help businesses and individuals stay compliant with tax requirements',
                  'Develop tax strategies to minimize liability legally',
                  'Negotiate settlements with tax authorities',
                  'Stay current with changing tax legislation and court rulings'
                ].map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-gold-400 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gold-400/10 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Career Benefits</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gold-400 mb-3">Professional Benefits</h4>
                  <ul className="space-y-2">
                    {[
                      'Consistent demand - businesses and individuals always need tax help',
                      'Strong earning potential - median salary of $135,000 annually',
                      'Diverse career options in private practice, government, or corporations',
                      'Intellectual challenge and continuous learning opportunities',
                      'High level of job security and stability'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-400 mb-3">Personal Benefits</h4>
                  <ul className="space-y-2">
                    {[
                      'Opportunity to help clients navigate complex financial situations',
                      'Blend analytical thinking with client advocacy',
                      'Work on diverse cases across multiple industries',
                      'Potential for partnership or solo practice ownership',
                      'Professional respect and recognition in the legal field'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Path */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gold-400/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education Path</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gold-400 mb-3">Required Education</h4>
                  <ul className="space-y-2">
                    {[
                      "Bachelor's degree in Finance and Political Science from Florida State University",
                      "Juris Doctor (JD) degree from an accredited law school (3 years)",
                      "Pass the Bar examination in the state where you wish to practice",
                      "Optional: Master of Laws (LL.M.) in Taxation for advanced specialization"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-400 mb-3">My Planned Path</h4>
                  <ul className="space-y-2">
                    {[
                      'Pursue dual degree in Finance and Political Science at FSU',
                      'Build strong foundation in financial analysis and governmental systems',
                      'Gain practical experience through internships and FBLA leadership',
                      'Attend law school with focus on tax law and corporate finance',
                      'Leverage Bright Futures scholarship to minimize educational debt'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Required Skills */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Required Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gold-400 mb-3">Technical Skills</h4>
                  <ul className="space-y-2">
                    {[
                      'Deep understanding of tax codes and financial regulations',
                      'Strong legal research and writing abilities',
                      'Proficiency in analyzing complex financial documents',
                      'Knowledge of accounting principles and practices',
                      'Ability to interpret IRS rulings and court decisions',
                      'Understanding of business structures and corporate law',
                      'Familiarity with tax preparation software and legal databases',
                      'Mastery of oral advocacy and negotiation techniques'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-400 mb-3">Professional Skills</h4>
                  <ul className="space-y-2">
                    {[
                      'Attention to detail and meticulous accuracy',
                      'Strong ethical standards and professional integrity',
                      'Excellent client communication and counseling skills',
                      'Ability to explain complex concepts in simple terms',
                      'Time management and ability to meet strict deadlines',
                      'Analytical thinking and problem-solving capabilities',
                      'Discretion and confidentiality in handling sensitive information',
                      'Adaptability to changing laws and regulations'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Obstacles */}
          <motion.div variants={itemVariants}>
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gold-400/10 p-3 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Potential Obstacles & Solutions</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gold-400 mb-3">Challenges</h4>
                  <ul className="space-y-2">
                    {[
                      'High cost of law school tuition and educational expenses',
                      'Demanding workload with long hours, especially during tax season',
                      'Complex and constantly changing tax laws requiring continuous study',
                      'Intensive Bar examination preparation',
                      'High-pressure environment representing clients in disputes',
                      'Balancing multiple client cases and deadlines'
                    ].map((obstacle, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{obstacle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gold-400 mb-3">How I Will Overcome</h4>
                  <ul className="space-y-2">
                    {[
                      'Utilize Florida Bright Futures scholarship to significantly reduce costs',
                      'Passionate about law and helping others, which fuels motivation',
                      'Strong foundation from FSU Finance and Political Science programs',
                      'Develop disciplined study habits and time management skills',
                      'Gain experience through FBLA leadership and mock trial participation',
                      'Build professional network early through internships and mentorship'
                    ].map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <span className="text-gold-400 mt-1">•</span>
                        <span>{solution}</span>
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

export default CareerResearch;
