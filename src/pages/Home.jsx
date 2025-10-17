import { motion } from 'framer-motion'
import { 
  FaRocket, 
  FaShieldAlt, 
  FaGlobe, 
  FaMobileAlt, 
  FaFileInvoiceDollar, 
  FaClock,
  FaCheckCircle,
  FaChartLine,
  FaLock,
  FaUserShield,
  FaNetworkWired,
  FaCloud
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import TransferCalculator from '../components/TransferCalculator'

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const services = [
    {
      icon: <FaMobileAlt className="text-4xl text-primary-600" />,
      title: "Mobile Money Transfer",
      description: "Send money to Ethiopia instantly using our iOS and Android apps. Available 24/7 from anywhere in the world.",
      link: "mobile-money-transfer"
    },
    {
      icon: <FaFileInvoiceDollar className="text-4xl text-primary-600" />,
      title: "Bill Payment Service",
      description: "Pay utility bills, school fees, and other services directly in Ethiopia from anywhere in the world.",
      link: "bill-payment-service"
    },
    {
      icon: <FaGlobe className="text-4xl text-primary-600" />,
      title: "Agent Services",
      description: "Authorized agents can process transfers securely through our dedicated agent platform.",
      link: "agent-services"
    },
    {
      icon: <FaClock className="text-4xl text-primary-600" />,
      title: "Real-Time Processing",
      description: "Automated transaction validation and instant confirmation for faster fund delivery.",
      link: "real-time-processing"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-600" />,
      title: "Secure Transactions",
      description: "End-to-end encryption, multi-factor authentication, and compliance with US regulations.",
      link: "secure-transactions"
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-600" />,
      title: "Competitive Rates",
      description: "Transparent pricing with competitive exchange rates and low transfer fees.",
      link: "competitive-rates"
    }
  ]

  const features = [
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud-based systems ensuring 99.9% uptime and disaster recovery capabilities."
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "API Integration",
      description: "Direct connections with Ethiopian banks through secure APIs for seamless transactions."
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "KYC/AML Compliance",
      description: "Advanced identity verification and transaction monitoring in compliance with BSA and PATRIOT Act."
    },
    {
      icon: <FaLock className="text-4xl" />,
      title: "Data Security",
      description: "SSL encryption, role-based access controls, and secure data storage protect your information."
    }
  ]

  const stats = [
    { number: "5+", label: "Partner Banks" },
    { number: "30+", label: "Instant Bank Deposit" },
    { number: "37K+", label: "Customer Base" },
    { number: "24/7", label: "Availability" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Fast, Secure <br />
                <span className="text-primary-600">Money Transfer</span> <br />
                to <span className="text-accent-500">Ethiopia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Licensed Money Services Business delivering innovative, secure, and dependable cross-border payment solutions. Send money instantly to 30+ banks across Ethiopia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="btn-primary text-center">
                  Learn More
                </Link>
                <Link to="/contact" className="btn-secondary text-center">
                  Contact Us
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>NMLS Registered</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>FinCEN Registered</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>NBE Approved</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>MD ORF Licensed</span>
                </div>
              </div>
            </motion.div>

            <TransferCalculator />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive remittance solutions designed for speed, security, and convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={`/services/${service.link}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card group cursor-pointer relative overflow-hidden"
                >
                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary-600 text-white rounded-full p-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Learn More hint */}
                  <div className="flex items-center text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Read Full Guide</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="section-title">Technology & Features</h2>
            <p className="section-subtitle">
              Built on cutting-edge technology with security and compliance at the core
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" style={{ perspective: '1000px' }}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="relative text-center p-6 rounded-xl bg-gradient-to-br from-white to-primary-50 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ 
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* 3D Floating Background Element */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-xl blur-sm"
                  style={{ 
                    transform: 'translateZ(-20px)',
                    transformStyle: 'preserve-3d'
                  }}
                />
                
                {/* Content with 3D depth */}
                <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                  <motion.div 
                    className="inline-flex items-center justify-center mb-4 p-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-lg"
                    whileHover={{ 
                      rotateY: 360,
                      transition: { duration: 0.8 }
                    }}
                    style={{ 
                      transform: 'translateZ(40px)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>
                  
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ transform: 'translateZ(20px)' }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p 
                    className="text-gray-600"
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 blur-md"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compliance Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Fully Licensed & Compliant</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                FastPay LLC operates under full regulatory compliance with federal and state authorities
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">NMLS</div>
                <div className="text-sm text-gray-600">Registered ID: 2327896</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">FinCEN</div>
                <div className="text-sm text-gray-600">MSB Registered</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">Maryland</div>
                <div className="text-sm text-gray-600">OFR Licensed</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl font-bold text-primary-600 mb-2">NBE</div>
                <div className="text-sm text-gray-600">Approved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Become an Agent?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join Agents who trust FastPay for their remittance needs. Fast, secure, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agent" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Learn More About Us
              </Link>
              <Link to="/faqs" className="bg-primary-700 hover:bg-primary-800 text-white border-2 border-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View FAQs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home


