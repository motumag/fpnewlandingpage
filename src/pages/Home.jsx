import { motion } from 'framer-motion'
import { 
  FaRocket, 
  FaShieldAlt, 
  FaGlobe, 
  FaMobileAlt, 
  FaUniversity, 
  FaClock,
  FaCheckCircle,
  FaChartLine,
  FaLock,
  FaUserShield,
  FaNetworkWired,
  FaCloud
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
      description: "Send money to Ethiopia instantly using our iOS and Android apps. Available 24/7 from anywhere in the world."
    },
    {
      icon: <FaUniversity className="text-4xl text-primary-600" />,
      title: "Bank Network Access",
      description: "Direct integration with 30+ leading banks in Ethiopia ensures wide coverage and reliable delivery."
    },
    {
      icon: <FaGlobe className="text-4xl text-primary-600" />,
      title: "Agent Services",
      description: "Authorized agents can process transfers securely through our dedicated agent platform."
    },
    {
      icon: <FaClock className="text-4xl text-primary-600" />,
      title: "Real-Time Processing",
      description: "Automated transaction validation and instant confirmation for faster fund delivery."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary-600" />,
      title: "Secure Transactions",
      description: "End-to-end encryption, multi-factor authentication, and compliance with US regulations."
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-600" />,
      title: "Competitive Rates",
      description: "Transparent pricing with competitive exchange rates and low transfer fees."
    }
  ]

  const features = [
    {
      icon: <FaCloud className="text-4xl text-primary-600" />,
      title: "Cloud Infrastructure",
      description: "Scalable, secure cloud-based systems ensuring 99.9% uptime and disaster recovery capabilities."
    },
    {
      icon: <FaNetworkWired className="text-4xl text-primary-600" />,
      title: "API Integration",
      description: "Direct connections with Ethiopian banks through secure APIs for seamless transactions."
    },
    {
      icon: <FaUserShield className="text-4xl text-primary-600" />,
      title: "KYC/AML Compliance",
      description: "Advanced identity verification and transaction monitoring in compliance with BSA and PATRIOT Act."
    },
    {
      icon: <FaLock className="text-4xl text-primary-600" />,
      title: "Data Security",
      description: "SSL encryption, role-based access controls, and secure data storage protect your information."
    }
  ]

  const stats = [
    { number: "30+", label: "Partner Banks" },
    { number: "24/7", label: "Availability" },
    { number: "100K+", label: "Transactions" },
    { number: "99.9%", label: "Success Rate" }
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
                <Link to="/login" className="btn-primary text-center">
                  Get Started
                </Link>
                <Link to="/contact" className="btn-secondary text-center">
                  Contact Us
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>NMLS Licensed</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>FinCEN Registered</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  <span>NBE Approved</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-primary-50 rounded-xl">
                    <span className="font-semibold text-gray-700">Transfer Amount</span>
                    <span className="text-2xl font-bold text-primary-600">$500</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-accent-50 rounded-xl">
                    <span className="font-semibold text-gray-700">Exchange Rate</span>
                    <span className="text-2xl font-bold text-accent-600">55.80 ETB</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <span className="font-semibold text-gray-700">Recipient Gets</span>
                    <span className="text-2xl font-bold text-green-600">27,900 ETB</span>
                  </div>
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Send Money Now
                  </button>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </motion.div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <div className="inline-block mb-4 p-4 bg-primary-50 rounded-full transform hover:rotate-12 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
                <div className="text-sm text-gray-600">ID: 2327896</div>
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
              Ready to Send Money?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of customers who trust FastPay for their remittance needs. Fast, secure, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Create Account
              </Link>
              <Link to="/about" className="bg-primary-700 hover:bg-primary-800 text-white border-2 border-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home


