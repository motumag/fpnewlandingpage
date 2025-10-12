import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaEnvelope, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import ctoImage from '../images/ctoimage.jpeg'

const LeadershipTeam = () => {
  const [selectedLeader, setSelectedLeader] = useState(null)

  const leaders = [
    {
      name: "Fitsum Merdassa",
      role: "Chief Executive Officer",
      department: "CEO",
      isFounder: true,
      image: "https://ui-avatars.com/api/?name=Fitsum+Merdassa&size=300&background=1e40af&color=fff&bold=true&rounded=true",
      linkedin: "#",
      twitter: "#",
      email: "fitsum.merdassa@fastpayet.com",
      background: {
        overview: "Fitsum Merdassa is a visionary leader and co-founder of FastPay with extensive experience in financial technology and cross-border payments. He leads FastPay's strategic direction and global expansion initiatives.",
        experience: [
          "15+ years of experience in financial services and technology",
          "Co-founded FastPay to revolutionize cross-border payments to Ethiopia",
          "Previously led digital transformation initiatives at major financial institutions",
          "Expert in regulatory compliance and international payment systems",
          "Established strategic partnerships with banks and payment networks across Africa"
        ],
        education: [
          "MBA in Finance and International Business",
          "Bachelor's degree in Economics"
        ],
        achievements: [
          "Successfully launched FastPay's remittance services in multiple markets",
          "Built strategic partnerships with 30+ Ethiopian banks",
          "Secured regulatory approvals from FinCEN, Maryland ORF, and NBE",
          "Led company from startup to licensed MSB with nationwide reach"
        ]
      }
    },
    {
      name: "Motuma Gishu",
      role: "Chief Technology Officer",
      department: "CTO",
      isFounder: true,
      image: ctoImage,
      linkedin: "#",
      twitter: "#",
      email: "motuma.gishu@fastpayet.com",
      background: {
        overview: "Motuma Gishu is the Founder and Chief Technology Officer of FastPay, a leading fintech company providing digital payment, remittance, and wallet solutions. With over a decade of experience in financial technology, digital transformation, and enterprise systems, he has played a pivotal role in designing scalable platforms that power financial inclusion across Ethiopia and the global market.",
        experience: [
          "10+ years of experience in financial technology, digital transformation, and enterprise systems",
          "Founder and CTO of FastPay - Director of Digital Technologies and Software Engineering",
          "Oversees architecture, development, and deployment of FastPay's ecosystem including mobile apps, payment gateways, and digital wallet infrastructure",
          "Led enterprise integration projects for banks and financial institutions with Core Banking (Temenos T24), WSO2 Middleware, and CyberSource Payment Gateway",
          "Delivered end-to-end integrations with M-PESA, Telebirr, DSTV, Canal+, and multiple digital lending and remittance platforms",
          "Expert in Spring Boot, Node.js, Kotlin, and cloud architecture (GCP/AWS)"
        ],
        education: [
          "Master's degree in Computer Science",
          "Bachelor's degree in Software Engineering",
          "Certified in AWS Solutions Architecture and Security",
          "Specialized training in payment systems and regulatory compliance"
        ],
        achievements: [
          "Architected and launched Souqpass, FarmPass, and FastPayEt platforms",
          "Integrated 30+ Ethiopian banks and international payment gateways including Mastercard MPGS, Visa CyberSource, and Authorize.net",
          "Built secure, scalable payment infrastructure handling millions of transactions",
          "Established modern DevOps practices and CI/CD pipelines across all systems",
          "Combines deep engineering expertise with product innovation and regulatory compliance to build intelligent financial ecosystems"
        ]
      }
    },
    {
      name: "Jarra Balcha",
      role: "Chief Operating Officer",
      department: "COO",
      isFounder: true,
      image: "https://ui-avatars.com/api/?name=Jarra+Balcha&size=300&background=16a34a&color=fff&bold=true&rounded=true",
      linkedin: "#",
      twitter: "#",
      email: "jarra.balcha@fastpayet.com",
      background: {
        overview: "Jarra Balcha is a co-founder of FastPay and brings operational excellence and strategic business development expertise. He manages day-to-day operations and drives business growth initiatives.",
        experience: [
          "10+ years in operations management and business development",
          "Co-founded FastPay to provide reliable remittance services",
          "Expert in process optimization and operational efficiency",
          "Experience in compliance, risk management, and AML/KYC operations",
          "Background in financial services operations and merchant management"
        ],
        education: [
          "MBA in Operations Management",
          "Bachelor's degree in Business Administration"
        ],
        achievements: [
          "Streamlined operations resulting in 40% efficiency improvement",
          "Built and managed agent network across multiple regions",
          "Implemented comprehensive compliance and risk management framework",
          "Established operational partnerships with key financial institutions"
        ]
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Compact */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h1>
            <p className="text-lg text-gray-600">
              Experienced leaders driving innovation in digital financial services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid - Compact Design */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-40 h-40 rounded-full object-contain border-4 border-white shadow-lg bg-white"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center">
                    <div className="mb-1">
                      <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                        {leader.department}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{leader.role}</p>
                    
                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className="w-full px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 mb-4"
                    >
                      View Background
                    </button>

                    {/* Social Links - Minimal */}
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={leader.linkedin}
                        className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 rounded hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin className="text-sm" />
                      </a>
                      <a
                        href={leader.twitter}
                        className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 rounded hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        aria-label="Twitter"
                      >
                        <FaTwitter className="text-sm" />
                      </a>
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-600 rounded hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                        aria-label="Email"
                      >
                        <FaEnvelope className="text-sm" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA - Minimal */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're looking for talented individuals who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/careers"
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a
                href="/about"
                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
              >
                About FastPay
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Details Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between z-10">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-20 h-20 rounded-full object-contain border-2 border-primary-600 bg-white"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedLeader.name}</h2>
                    <p className="text-primary-600 font-semibold">{selectedLeader.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedLeader.background.overview}</p>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Professional Experience</h3>
                  <ul className="space-y-2">
                    {selectedLeader.background.experience.map((exp, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Education</h3>
                  <ul className="space-y-2">
                    {selectedLeader.background.education.map((edu, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {selectedLeader.background.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Connect</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedLeader.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                    <a
                      href={selectedLeader.twitter}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                    <a
                      href={`mailto:${selectedLeader.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                      aria-label="Email"
                    >
                      <FaEnvelope className="text-lg" />
                    </a>
                    <span className="text-sm text-gray-600 ml-2">{selectedLeader.email}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LeadershipTeam

