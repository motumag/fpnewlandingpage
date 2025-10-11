import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaShieldAlt, FaBookOpen, FaCertificate, FaCheckCircle, FaLock, FaGavel, FaFileContract, FaUserShield } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Compliance = () => {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'licenses', title: 'Licenses & Registration' },
    { id: 'regulations', title: 'Federal Regulations' },
    { id: 'aml', title: 'AML/KYC Program' },
    { id: 'security', title: 'Security Standards' },
    { id: 'data-protection', title: 'Data Protection' },
    { id: 'reporting', title: 'Reporting & Monitoring' },
    { id: 'training', title: 'Training & Education' },
    { id: 'contact', title: 'Contact Compliance' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const licenses = [
    {
      name: 'NMLS Registration',
      id: '2327896',
      authority: 'Nationwide Multistate Licensing System',
      description: 'Registered with NMLS as a Money Services Business',
      icon: <FaCertificate className="text-4xl text-blue-600" />,
      color: 'blue'
    },
    {
      name: 'FinCEN MSB',
      id: '31000249115048',
      authority: 'Financial Crimes Enforcement Network',
      description: 'Registered Money Services Business with FinCEN',
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      color: 'green'
    },
    {
      name: 'Maryland License',
      id: 'Active',
      authority: 'Office of Financial Regulation',
      description: 'Licensed to operate in Maryland',
      icon: <FaGavel className="text-4xl text-purple-600" />,
      color: 'purple'
    },
    {
      name: 'NBE Approval',
      id: 'Approved',
      authority: 'National Bank of Ethiopia',
      description: 'Approved to facilitate remittances to Ethiopia',
      icon: <FaCheckCircle className="text-4xl text-amber-600" />,
      color: 'amber'
    }
  ]

  const regulations = [
    {
      title: 'Bank Secrecy Act (BSA)',
      description: 'We comply with all BSA requirements including customer identification, record keeping, and suspicious activity reporting.',
      requirements: [
        'Customer Identification Program (CIP)',
        'Customer Due Diligence (CDD)',
        'Enhanced Due Diligence (EDD)',
        'Record Retention Requirements',
        'Suspicious Activity Reports (SARs)'
      ]
    },
    {
      title: 'USA PATRIOT Act',
      description: 'We have implemented comprehensive anti-money laundering controls and screening procedures.',
      requirements: [
        'OFAC Sanctions Screening',
        'Terrorist Financing Prevention',
        'Cross-Border Transaction Monitoring',
        'Information Sharing with Authorities',
        'Enhanced Identity Verification'
      ]
    },
    {
      title: 'OFAC Compliance',
      description: 'All transactions are screened against OFAC sanctions lists to prevent prohibited transactions.',
      requirements: [
        'Real-time Sanctions Screening',
        'Specially Designated Nationals (SDN) List',
        'Blocked Persons List',
        'Sectoral Sanctions Identifications',
        'Foreign Sanctions Evaders'
      ]
    }
  ]

  const amlProgram = [
    {
      icon: <FaUserShield className="text-4xl" />,
      title: 'Customer Identification',
      description: 'Robust identity verification process for all customers',
      features: [
        'Government-issued ID verification',
        'Address verification',
        'Document authenticity checks'
      ],
      color: 'blue'
    },
    {
      icon: <FaLock className="text-4xl" />,
      title: 'Transaction Monitoring',
      description: 'Continuous monitoring of all transactions for suspicious activity',
      features: [
        'Real-time transaction analysis',
        'Pattern detection algorithms',
        'Threshold-based alerts',
        'Manual review processes'
      ],
      color: 'green'
    },
    {
      icon: <FaFileContract className="text-4xl" />,
      title: 'Risk Assessment',
      description: 'Comprehensive risk-based approach to compliance',
      features: [
        'Customer risk profiling',
        'Transaction risk scoring',
        'Geographic risk analysis',
        'Ongoing risk evaluation'
      ],
      color: 'purple'
    }
  ]

  const securityStandards = [
    {
      standard: 'PCI DSS Level 1',
      description: 'Payment Card Industry Data Security Standard compliance for secure payment processing',
      icon: <FaShieldAlt className="text-primary-600 text-2xl" />
    },
    {
      standard: 'SSL/TLS Encryption',
      description: '256-bit SSL encryption for all data transmission and storage',
      icon: <FaLock className="text-primary-600 text-2xl" />
    }
  ]

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    amber: 'from-amber-500 to-amber-600'
  }

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <FaShieldAlt className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Regulatory Compliance</h1>
            <p className="text-xl text-primary-100 mb-2">Committed to the Highest Standards</p>
            <p className="text-lg text-primary-200 max-w-3xl mx-auto">
              FastPay LLC operates under full regulatory compliance with federal and state authorities, maintaining the highest standards of security, transparency, and customer protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <FaBookOpen className="mr-2 text-primary-600" />
                Quick Navigation
              </h3>
              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#${section.id}`}
                    className={`block text-sm transition-all py-2 px-3 rounded ${
                      activeSection === section.id
                        ? 'text-white bg-primary-600 font-semibold shadow-md'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t">
                <Link
                  to="/contact"
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
              
              {/* Overview */}
              <section id="overview" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Compliance Overview
                </h2>
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    FastPay LLC is a fully licensed and compliant Money Services Business (MSB) dedicated to maintaining the highest standards of regulatory compliance, security, and customer protection. We operate under the strict oversight of federal and state regulatory authorities.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our comprehensive compliance program encompasses anti-money laundering (AML) controls, know-your-customer (KYC) procedures, transaction monitoring, and adherence to all applicable laws and regulations governing money transmission services.
                  </p>
                </div>
              </section>

              {/* Licenses & Registration */}
              <section id="licenses" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Licenses & Registration
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {licenses.map((license, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${colorClasses[license.color]} text-white mb-4`}>
                        {license.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{license.name}</h3>
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <span className="text-sm text-gray-600">ID: </span>
                        <span className="text-lg font-bold text-primary-600">{license.id}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 font-semibold">{license.authority}</p>
                      <p className="text-gray-700 leading-relaxed">{license.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Federal Regulations */}
              <section id="regulations" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Federal Regulations Compliance
                </h2>
                
                <div className="space-y-6">
                  {regulations.map((regulation, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-primary-50 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{regulation.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">{regulation.description}</p>
                      <div className="bg-white rounded-lg p-5">
                        <h4 className="font-bold text-gray-900 mb-3">Key Requirements:</h4>
                        <ul className="space-y-2">
                          {regulation.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start">
                              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* AML/KYC Program */}
              <section id="aml" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Anti-Money Laundering (AML) Program
                </h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Our comprehensive AML program is designed to detect and prevent money laundering, terrorist financing, and other financial crimes. We employ advanced technology and trained personnel to ensure full compliance with all regulatory requirements.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {amlProgram.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${colorClasses[program.color]} text-white mb-4`}>
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                      <ul className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="text-primary-600 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Security Standards */}
              <section id="security" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Security Standards & Certifications
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  We maintain industry-leading security standards to protect customer data and financial transactions.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {securityStandards.map((standard, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {standard.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{standard.standard}</h3>
                          <p className="text-gray-700 leading-relaxed">{standard.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Data Protection */}
              <section id="data-protection" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Data Protection & Privacy
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FaLock className="text-primary-600 mr-3" />
                      Data Encryption
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      All customer data is encrypted both in transit and at rest using industry-standard 256-bit AES encryption. We implement end-to-end encryption for all sensitive communications.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FaUserShield className="text-primary-600 mr-3" />
                      Privacy Compliance
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We comply with all applicable data protection regulations including CCPA, GDPR principles, and maintain strict privacy controls. Customer data is never sold or shared with third parties without explicit consent.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <FaShieldAlt className="text-primary-600 mr-3" />
                      Access Controls
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Role-based access controls ensure that only authorized personnel can access customer information. Multi-factor authentication is required for all system access.
                    </p>
                  </div>
                </div>
              </section>

              {/* Reporting & Monitoring */}
              <section id="reporting" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Reporting & Transaction Monitoring
                </h2>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Continuous Monitoring</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All transactions are monitored in real-time for suspicious activity, unusual patterns, and potential compliance violations.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Automated Systems</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">AI-powered transaction analysis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">Pattern recognition algorithms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">Real-time alert generation</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Regulatory Reporting</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">Suspicious Activity Reports (SARs)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">Currency Transaction Reports (CTRs)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-gray-700">Timely regulatory filings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Training & Education */}
              <section id="training" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Employee Training & Education
                </h2>
                
                <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    All FastPay employees undergo comprehensive compliance training to ensure they understand and adhere to our regulatory obligations.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-3">Initial Training</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• BSA/AML fundamentals</li>
                        <li>• KYC procedures</li>
                        <li>• Red flag identification</li>
                        <li>• Reporting requirements</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-3">Ongoing Training</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Annual refresher courses</li>
                        <li>• Regulatory updates</li>
                        <li>• Case studies</li>
                        <li>• Best practices</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-3">Specialized Training</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Role-specific modules</li>
                        <li>• Advanced analytics</li>
                        <li>• Investigation techniques</li>
                        <li>• Technology systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Compliance */}
              <section id="contact" className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Contact Our Compliance Team
                </h2>
                
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    If you have questions about our compliance program, need to report suspicious activity, or require compliance-related assistance, please contact our dedicated compliance team.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-3">General Compliance Inquiries</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Email:</strong> <a href="mailto:compliance@fastpayet.com" className="text-primary-600 hover:text-primary-700">compliance@fastpayet.com</a>
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Phone:</strong> +1 (301) 200-7090
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-3">Report Suspicious Activity</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Email:</strong> <a href="mailto:security@fastpayet.com" className="text-primary-600 hover:text-primary-700">security@fastpayet.com</a>
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>24/7 Hotline:</strong> +1 (301) 200-7090
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-center">
                <FaShieldAlt className="text-5xl text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">Trust & Security First</h3>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  Your security and compliance with regulations are our top priorities. We maintain the highest standards to protect you and your funds.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Compliance Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compliance

