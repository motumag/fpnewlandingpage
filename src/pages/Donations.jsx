import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaMedkit, FaHome, FaCheckCircle } from 'react-icons/fa'

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedCause, setSelectedCause] = useState('general')
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    anonymous: false
  })
  const [submitted, setSubmitted] = useState(false)

  const causes = [
    {
      id: 'general',
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "General Fund",
      description: "Support FastPay's community initiatives and operational assistance programs"
    },
    {
      id: 'education',
      icon: <FaGraduationCap className="text-4xl text-blue-500" />,
      title: "Education",
      description: "Help provide educational resources and scholarships for Ethiopian students"
    },
    {
      id: 'healthcare',
      icon: <FaMedkit className="text-4xl text-green-500" />,
      title: "Healthcare",
      description: "Support medical assistance and healthcare initiatives in Ethiopia"
    },
    {
      id: 'community',
      icon: <FaUsers className="text-4xl text-purple-500" />,
      title: "Community Development",
      description: "Fund community building projects and local infrastructure improvements"
    }
  ]

  const predefinedAmounts = [25, 50, 100, 250, 500]

  const handleSubmit = (e) => {
    e.preventDefault()
    const amount = customAmount || selectedAmount
    console.log('Donation submitted:', { amount, cause: selectedCause, ...donorInfo })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setCustomAmount('')
      setSelectedAmount(50)
      setDonorInfo({ name: '', email: '', anonymous: false })
    }, 3000)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <FaHandHoldingHeart className="text-7xl mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Difference</h1>
            <p className="text-xl text-white opacity-90">
              Your donation helps FastPay support communities, education, healthcare, and development initiatives in Ethiopia. Together, we can create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">$500K+</div>
              <div className="text-gray-600 font-medium">Donated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">1,000+</div>
              <div className="text-gray-600 font-medium">Families Helped</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Transparent</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose Your Cause</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select a cause that resonates with you. Every contribution makes a meaningful impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {causes.map((cause, index) => (
              <motion.div
                key={cause.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCause(cause.id)}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                  selectedCause === cause.id
                    ? 'bg-white shadow-2xl ring-4 ring-primary-500 transform scale-105'
                    : 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div className="mb-4">{cause.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cause.title}</h3>
                <p className="text-gray-600 text-sm">{cause.description}</p>
                {selectedCause === cause.id && (
                  <div className="mt-4 flex items-center text-primary-600 font-semibold">
                    <FaCheckCircle className="mr-2" />
                    Selected
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-2xl p-8 md:p-12"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-block p-6 bg-green-100 rounded-full mb-6">
                    <FaHeart className="text-5xl text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                  <p className="text-xl text-gray-600">
                    Your generous donation will make a real difference. We appreciate your support!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Make Your Donation</h2>

                  {/* Amount Selection */}
                  <div className="mb-8">
                    <label className="block text-lg font-semibold text-gray-700 mb-4">Select Amount</label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setSelectedAmount(amount)
                            setCustomAmount('')
                          }}
                          className={`py-4 rounded-lg font-semibold transition-all duration-300 ${
                            selectedAmount === amount && !customAmount
                              ? 'bg-primary-600 text-white shadow-lg scale-110'
                              : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl font-semibold">
                        $
                      </span>
                      <input
                        type="number"
                        placeholder="Other amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
                      />
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="mb-8 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        required={!donorInfo.anonymous}
                        disabled={donorInfo.anonymous}
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={donorInfo.anonymous}
                        onChange={(e) => setDonorInfo({ ...donorInfo, anonymous: e.target.checked })}
                        className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <label htmlFor="anonymous" className="ml-3 text-gray-700">
                        Make this donation anonymous
                      </label>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="bg-white rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Donation Summary</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Donation Amount:</span>
                      <span className="text-2xl font-bold text-primary-600">
                        ${customAmount || selectedAmount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cause:</span>
                      <span className="font-semibold text-gray-900">
                        {causes.find(c => c.id === selectedCause)?.title}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <FaHeart />
                    <span>Complete Donation</span>
                  </button>

                  <p className="text-sm text-gray-600 text-center mt-4">
                    Your donation is secure and will be processed through our licensed payment platform.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Donations Help */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Your Donation Helps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every dollar you donate goes directly to supporting communities in Ethiopia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <FaGraduationCap className="text-4xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">
                Provide school supplies, scholarships, and educational resources for students in need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <FaMedkit className="text-4xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600">
                Support medical clinics, provide essential medicines, and fund healthcare initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
                <FaHome className="text-4xl text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Infrastructure</h3>
              <p className="text-gray-600">
                Build community centers, improve local infrastructure, and support development projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Your Trust Matters</h2>
            <p className="text-xl text-primary-100 mb-8">
              As a licensed and regulated Money Services Business, FastPay ensures that all donations are handled with complete transparency and security. We provide detailed reports on how donations are utilized and their impact on communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn About Us
              </a>
              <a
                href="/contact"
                className="bg-primary-700 hover:bg-primary-800 text-white border-2 border-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Donations


