import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const Sources = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const sources = [
    {
      number: 1,
      title: 'What Does a Tax Lawyer Do?',
      author: 'Georgetown Law',
      publication: 'Georgetown Law Career Center',
      date: '2024',
      url: 'https://www.law.georgetown.edu/careers/career-planning/career-paths/tax-law/',
      description: 'Comprehensive overview of tax law career paths, responsibilities, and educational requirements from a top law school'
    },
    {
      number: 2,
      title: 'Tax Attorney Job Description and Duties',
      author: 'Internal Revenue Service',
      publication: 'IRS Careers',
      date: '2024',
      url: 'https://www.irs.gov/careers',
      description: 'Official government information on tax law careers, roles within the IRS, and professional requirements'
    },
    {
      number: 3,
      title: 'Becoming a Tax Lawyer: Education and Career Path',
      author: 'Law School Admission Council',
      publication: 'LSAC Career Resources',
      date: '2024',
      url: 'https://www.lsac.org/choosing-law-school/types-law/tax-law',
      description: 'Detailed guide to law school preparation, LSAT requirements, and specialization in tax law'
    },
    {
      number: 4,
      title: 'Finance Degree Program',
      author: 'Florida State University',
      publication: 'FSU College of Business',
      date: '2024',
      url: 'https://business.fsu.edu/undergraduate-programs/finance',
      description: 'Information on FSU\'s undergraduate Finance program and its preparation for law school and tax careers'
    },
    {
      number: 5,
      title: 'Political Science Major',
      author: 'Florida State University',
      publication: 'FSU College of Social Sciences',
      date: '2024',
      url: 'https://coss.fsu.edu/political-science',
      description: 'Overview of FSU\'s Political Science program and pre-law preparation resources'
    },
    {
      number: 6,
      title: 'Occupational Outlook: Lawyers',
      author: 'U.S. Bureau of Labor Statistics',
      publication: 'Occupational Outlook Handbook',
      date: 'September 2024',
      url: 'https://www.bls.gov/ooh/legal/lawyers.htm',
      description: 'Official government statistics on lawyer salaries, job outlook, and employment data including tax attorneys'
    },
    {
      number: 7,
      title: 'Tax Attorney Salary and Compensation',
      author: 'National Association for Law Placement',
      publication: 'NALP Salary Reports',
      date: '2024',
      url: 'https://www.nalp.org/',
      description: 'Professional association data on attorney compensation across different specializations and practice settings'
    },
    {
      number: 8,
      title: 'Florida Bright Futures Scholarship Program',
      author: 'Florida Department of Education',
      publication: 'Office of Student Financial Assistance',
      date: '2024',
      url: 'https://www.floridastudentfinancialaidsg.org/sapbfmain/bfmain.htm',
      description: 'Information on Florida\'s merit-based scholarship program for in-state university attendance'
    },
    {
      number: 9,
      title: 'LL.M. in Taxation Programs',
      author: 'American Bar Association',
      publication: 'ABA Section of Taxation',
      date: '2024',
      url: 'https://www.americanbar.org/groups/taxation/',
      description: 'Resources on advanced tax law education and professional development in tax specialization'
    },
    {
      number: 10,
      title: 'Skills for Success in Tax Law',
      author: 'Various Legal Professionals',
      publication: 'Tax Law Career Guides',
      date: '2024',
      url: 'https://www.lawcrossing.com/article/900050354/Tax-Attorney-Career-Overview/',
      description: 'Professional insights on essential skills, challenges, and strategies for success in tax law practice'
    }
  ];

  return (
    <section id="sources" className="py-20 bg-gradient-to-b from-navy-800 to-navy-900">
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
              Research <span className="text-gold-400">Sources</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              All information presented in this portfolio is based on credible sources and thorough research.
              Below are the references used to compile the tax attorney career research and educational planning.
            </p>
          </motion.div>

          {/* Sources List */}
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gold-400/10 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Works Cited</h3>
              </div>

              <div className="space-y-6">
                {sources.map((source, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-navy-700/30 rounded-lg p-6 border border-gold-400/10 hover:border-gold-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gold-400/10 px-3 py-1 rounded-lg min-w-[2.5rem] text-center">
                        <span className="text-gold-400 font-bold">[{source.number}]</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {source.title}
                        </h4>
                        <p className="text-gray-300 mb-2">
                          <span className="text-gold-400">{source.author}</span>
                          {'. '}
                          <em>{source.publication}</em>
                          {', '}
                          {source.date}
                          {'.'}
                        </p>
                        <p className="text-gray-400 text-sm mb-3">{source.description}</p>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors duration-200 text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="break-all">{source.url}</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Citation Format Note */}
              <div className="mt-8 pt-6 border-t border-gold-400/20">
                <p className="text-gray-400 text-sm text-center">
                  All sources cited in MLA format. Last accessed: December 9, 2024.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div variants={itemVariants} className="max-w-5xl mx-auto mt-12">
            <div className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-8 border border-gold-400/20">
              <h3 className="text-xl font-bold text-white mb-4">Additional Resources for Aspiring Tax Attorneys</h3>
              <p className="text-gray-300 mb-4">
                For those interested in learning more about tax law careers and preparation, consider exploring:
              </p>
              <ul className="space-y-2">
                {[
                  'American Bar Association (ABA) Section of Taxation - Professional resources and networking',
                  'LSAC Official Website - LSAT preparation and law school application guidance',
                  'Florida State University Pre-Law Advising - Undergraduate preparation support',
                  'IRS Tax Law Resources - Official tax code and regulatory information',
                  'National Association of Tax Professionals - Industry insights and continuing education'
                ].map((resource, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-gold-400 mt-1">•</span>
                    <span>{resource}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sources;
