import { motion } from 'framer-motion'
import { FaCheckCircle, FaShieldAlt, FaGlobe, FaUsers, FaAward, FaHandshake } from 'react-icons/fa'

const AboutUs = () => {
  const milestones = [
    { year: "2021", event: "FastPay LLC Incorporated in Maryland" },
    { year: "2022", event: "Received Maryland Money Transmitter License" },
    { year: "2022", event: "NMLS Registration & FinCEN MSB Registration" },
    { year: "2023", event: "National Bank of Ethiopia Approval" },
    { year: "2024", event: "Integration with 30+ Ethiopian Banks" }
  ]

  const values = [
    {
      icon: <FaShieldAlt className="text-4xl text-primary-600" />,
      title: "Security First",
      description: "We prioritize the security of your funds and data with enterprise-grade encryption and compliance."
    },
    {
      icon: <FaGlobe className="text-4xl text-primary-600" />,
      title: "Global Reach",
      description: "Connecting communities across borders with seamless remittance services."
    },
    {
      icon: <FaUsers className="text-4xl text-primary-600" />,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We deliver exceptional service 24/7."
    },
    {
      icon: <FaAward className="text-4xl text-primary-600" />,
      title: "Excellence",
      description: "We strive for excellence in every transaction and customer interaction."
    }
  ]

  const licenses = [
    {
      name: "Maryland Incorporation",
      details: "Department ID: W22452742",
      date: "December 15, 2021",
      link: "https://egov.maryland.gov/businessexpress/entitysearch"
    },
    {
      name: "NMLS Registration",
      details: "NMLS ID: 2327896",
      date: "Licensed Money Transmitter",
      link: "https://www.nmlsconsumeraccess.org/"
    },
    {
      name: "FinCEN MSB Registration",
      details: "Registration #: 31000249115048",
      date: "Federal Registration",
      link: "https://www.fincen.gov/msb-state-selector"
    },
    {
      name: "National Bank of Ethiopia",
      details: "NBE Approved Money Transfer Operator",
      date: "International Authorization",
      link: "https://nbe.gov.et/mta/"
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About FastPay LLC</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              A licensed FinTech Money Services Business dedicated to delivering innovative, secure, and dependable cross-border payment solutions between the United States and Ethiopia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                FastPay LLC was established to bridge the gap between Ethiopian diaspora communities and their families back home, providing a secure, fast, and cost-effective way to send money across borders.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With our principal office in Silver Spring, Maryland, we combine the trust and regulatory safeguards of a licensed Money Services Business with the innovation and efficiency of a modern FinTech provider.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through strategic partnerships with more than 30 leading banks in Ethiopia, we ensure broad coverage, unmatched speed, and unwavering reliability for every transaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose FastPay?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Fully licensed and regulated MSB in the United States</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Direct integration with 30+ Ethiopian banks</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Real-time processing and instant confirmations</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Bank-level security with end-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Transparent pricing with competitive rates</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">24/7 availability through mobile and web platforms</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every service we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-block mb-4 p-4 bg-primary-50 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in FastPay's growth</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-primary-600">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary-200"></div>
                  )}
                </div>
                <div className="ml-8 bg-gray-50 rounded-lg p-4 flex-grow">
                  <p className="text-gray-800 font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing & Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Licensing & Regulatory Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FastPay LLC operates under full regulatory compliance with U.S. federal and state regulations, reflecting our commitment to transparency and consumer protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {licenses.map((license, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{license.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{license.details}</p>
                <p className="text-gray-600 mb-4">{license.date}</p>
                <a
                  href={license.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Verify License
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Compliance Framework</h3>
            <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
              FastPay adheres to all applicable regulations including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <p className="font-semibold text-gray-900">Bank Secrecy Act (BSA)</p>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <p className="font-semibold text-gray-900">USA PATRIOT Act</p>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <p className="font-semibold text-gray-900">OFAC Regulations</p>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <p className="font-semibold text-gray-900">AML/CTF Requirements</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Technology Platform
              </h2>
              <p className="text-xl text-gray-600">
                Modern digital infrastructure powering secure and efficient transactions
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-50 to-white rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloud-Based Infrastructure</h3>
                <p className="text-gray-600">
                  Scalable systems hosted on secure cloud platforms ensure 99.9% uptime, high availability, and robust disaster recovery capabilities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white to-accent-50 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Real-Time Processing</h3>
                <p className="text-gray-600">
                  Automated transaction validation and instant confirmation systems ensure the fastest possible delivery of funds to recipients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary-50 to-white rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Banking Network Integration</h3>
                <p className="text-gray-600">
                  Direct API connections with more than 30 banks in Ethiopia provide wide coverage, reliability, and seamless fund transfers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white to-accent-50 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Security & Data Protection</h3>
                <p className="text-gray-600">
                  End-to-end encryption, SSL connections, role-based access controls, and multi-factor authentication protect customer information and transactions at every step.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs


