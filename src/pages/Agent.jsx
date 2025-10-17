import { motion } from 'framer-motion'
import { 
  FaUserTie, 
  FaChartLine, 
  FaDollarSign, 
  FaUsers, 
  FaCheckCircle,
  FaLaptop,
  FaHandshake,
  FaAward,
  FaGraduationCap,
  FaHeadset,
  FaShieldAlt,
  FaRocket,
  FaArrowRight,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Agent = () => {
  const benefits = [
    {
      icon: <FaDollarSign className="text-5xl" />,
      title: "Earn Competitive Commissions",
      description: "Earn 1-3% commission on every transaction you process. The more you process, the more you earn.",
      color: "green"
    },
    {
      icon: <FaLaptop className="text-5xl" />,
      title: "Advanced Agent Platform",
      description: "Access our secure, user-friendly agent portal with real-time reporting and transaction tracking.",
      color: "blue"
    },
    {
      icon: <FaGraduationCap className="text-5xl" />,
      title: "Free Training & Certification",
      description: "Comprehensive training program covering systems, compliance, and customer service best practices.",
      color: "purple"
    },
    {
      icon: <FaHeadset className="text-5xl" />,
      title: "24/7 Support",
      description: "Dedicated agent support team available around the clock to assist with any questions or issues.",
      color: "orange"
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Trusted Brand",
      description: "Partner with a fully licensed and compliant MSB - NMLS registered and FinCEN compliant.",
      color: "indigo"
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Serve Your Community",
      description: "Help families send money home while building your business and earning steady income.",
      color: "pink"
    }
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Apply Online",
      description: "Submit your application through our website with your business details and documentation."
    },
    {
      step: "2",
      title: "KYC/AML Verification",
      description: "Complete the KYC/AML verification process to ensure the security of your transaction."
    },
    {
      step: "3",
      title: "Verification Process",
      description: "We conduct background checks and verify your business license and compliance requirements."
    },
    {
      step: "4",
      title: "Training Program",
      description: "Complete our comprehensive 2-day training covering platform usage, compliance, and procedures."
    },
    {
      step: "5",
      title: "Get Certified",
      description: "Receive your agent credentials, access to the portal, and marketing materials."
    },
    {
      step: "6",
      title: "Start Processing",
      description: "Begin accepting transfers, processing transactions, and earning commissions immediately."
    },
    {
      step: "7",
      title: "Grow Your Business",
      description: "Scale your operations, serve more customers, and increase your earnings over time."
    }
  ]

  const requirements = [
    "Valid business license in your jurisdiction",
    "Physical retail location accessible to customers",
    "Minimum capital of $5,000 for liquidity management",
    "Professional business insurance",
    "Stable internet connection and computer",
    "Pass background check and compliance verification",
    "Complete FastPay agent training program"
  ]

  const stats = [
    { number: "2", label: "Active Agents" },
    { number: "$1M+", label: "Monthly Volume" },
    { number: "10K+", label: "Transactions/Month" },
    { number: "99.8%", label: "Agent Satisfaction" }
  ]

  const colorClasses = {
    green: "from-green-500 to-green-600",
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
    indigo: "from-indigo-500 to-indigo-600",
    pink: "from-pink-500 to-pink-600"
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20 md:py-28 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <FaUserTie className="mr-2" />
                <span className="text-sm font-semibold">Join Our Agent Network</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Become a <span className="text-accent-400">FastPay Agent</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Partner with us and build a profitable business while serving your community. Earn competitive commissions on every transaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/agent-onboarding" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  Apply Now
                </Link>
                <a href="#how-it-works" className="bg-primary-700 hover:bg-primary-800 text-white border-2 border-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">
                  Learn More
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Why Agents Choose FastPay</h3>
                <div className="space-y-4">
                  {[
                    // "No commission per transaction",
                    "Free comprehensive training",
                    "Real-time reporting dashboard",
                    "Marketing materials provided",
                    "No setup or monthly fees",
                    "Ongoing support & assistance"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <FaCheckCircle className="text-green-400 flex-shrink-0" />
                      <span className="text-primary-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
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
                <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Agent Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join successful agents who trust FastPay for their remittance business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colorClasses[benefit.color]} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Become an Agent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 6-step process to start your agent business with FastPay
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Connecting line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 w-0.5 h-20 bg-gradient-to-b from-primary-600 to-primary-300"></div>
                )}

                <div className="flex gap-6 items-start">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Agent Requirements
              </h2>
              <p className="text-xl text-gray-600">
                What you need to become a FastPay authorized agent
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FaCheckCircle className="text-green-500 flex-shrink-0 mt-1 text-xl" />
                    <p className="text-gray-700 leading-relaxed">{requirement}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-center">
                  <strong>Note:</strong> All agents must comply with federal and state regulations including BSA/AML requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Temporarily Disabled */}
      {false && <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Agents Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our agent network
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Ahmed Mohammed",
                location: "Silver Spring, MD",
                quote: "Partnering with FastPay has been the best business decision. The platform is easy to use, and the support team is always there when I need them.",
                commission: "$5K+/month"
              },
              {
                name: "Sara Johnson",
                location: "Washington, DC",
                quote: "I love serving my community while earning great commissions. The training was comprehensive and the ongoing support is excellent.",
                commission: "$8K+/month"
              },
              {
                name: "David Tesfaye",
                location: "Baltimore, MD",
                quote: "FastPay's reliable system and fast settlements make my job easy. My customers trust the service, and I trust FastPay.",
                commission: "$12K+/month"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center text-sm">
                  <FaDollarSign className="text-green-600 mr-2" />
                  <span className="font-semibold text-green-600">Earning: {testimonial.commission}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>}

      {/* Application CTA Section */}
      <section id="apply" className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <FaRocket className="text-6xl text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Agent Business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our growing network of successful agents. Apply today and start earning competitive commissions.
            </p>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <FaPhone className="text-primary-600" />
                  <span>Call us: +1 (301) 200-7090</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-700">
                  <FaEnvelope className="text-primary-600" />
                  <span>Email: support@fastpayet.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/agent-onboarding"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <FaArrowRight />
                </Link>
                <a
                  href="tel:+13012007090"
                  className="bg-gray-100 hover:bg-gray-200 text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Call Us Today
                </a>
              </div>

              <p className="text-sm text-gray-600 mt-6">
                No setup fees • Free training • Start earning immediately
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Agent

