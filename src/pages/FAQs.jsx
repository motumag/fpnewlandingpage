import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaQuestionCircle, FaSearch } from 'react-icons/fa'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is FastPay LLC?",
          answer: "FastPay LLC is a licensed Money Services Business (MSB) that provides secure, fast, and reliable cross-border payment solutions between the United States and Ethiopia. We are fully licensed by Maryland's Office of Financial Regulation, registered with NMLS (ID: 2327896) and FinCEN, and approved by the National Bank of Ethiopia."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple. Click on 'Login' in the header, then select 'Sign Up'. You'll need to provide your personal information, verify your identity (KYC requirements), and set up your payment methods. The entire process typically takes 5-10 minutes."
        },
        {
          question: "What documents do I need to register?",
          answer: "For KYC compliance, you'll need a valid government-issued photo ID (driver's license, passport, or state ID), proof of address (utility bill or bank statement), and your Social Security Number or Tax ID. This is required by federal regulations including the Bank Secrecy Act and USA PATRIOT Act."
        }
      ]
    },
    {
      category: "Sending Money",
      questions: [
        {
          question: "How long does a transfer take?",
          answer: "Most transfers are completed within minutes. Once you submit a transaction, it's processed in real-time and funds are typically available to the recipient immediately. In rare cases, transfers may take up to 1 business day due to bank processing times."
        },
        {
          question: "What are your fees and exchange rates?",
          answer: "FastPay offers transparent, competitive pricing. Our fees vary based on the transfer amount and payment method. Exchange rates are updated in real-time and displayed before you confirm your transaction. There are no hidden fees – what you see is what you pay."
        },
        {
          question: "How much can I send?",
          answer: "Transfer limits depend on your account verification level and transaction history. New accounts typically start with a daily limit of $2,500 and can be increased upon request with additional verification. For business accounts, higher limits are available."
        },
        {
          question: "Which banks in Ethiopia can receive transfers?",
          answer: "FastPay partners with more than 30 leading banks across Ethiopia, including Commercial Bank of Ethiopia, Awash Bank, Dashen Bank, Bank of Abyssinia, and many others. This ensures broad coverage and accessibility for your recipients."
        }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          question: "Is FastPay secure?",
          answer: "Yes, security is our top priority. We use bank-level security including end-to-end encryption, SSL connections, multi-factor authentication, and role-based access controls. All transactions are monitored for fraud, and we comply with BSA, USA PATRIOT Act, and OFAC regulations."
        },
        {
          question: "How is my personal information protected?",
          answer: "Your data is protected through multiple layers of security. We use industry-standard encryption for data transmission and storage, maintain strict access controls, and never share your information with third parties except as required by law or to complete your transactions."
        },
        {
          question: "What is KYC and why is it required?",
          answer: "KYC (Know Your Customer) is a regulatory requirement under the Bank Secrecy Act and USA PATRIOT Act. It helps prevent money laundering, fraud, and terrorist financing. As a licensed MSB, we are legally required to verify the identity of all customers."
        },
        {
          question: "Are my transactions monitored?",
          answer: "Yes, as required by federal law, all transactions are monitored for suspicious activity using automated systems and manual reviews. This includes velocity checks, pattern analysis, and screening against OFAC watchlists. This protects both you and the integrity of the financial system."
        }
      ]
    },
    {
      category: "Account & Support",
      questions: [
        {
          question: "How can I track my transfer?",
          answer: "You can track your transfer in real-time through your account dashboard on our mobile app or website. You'll receive instant notifications at each stage: submitted, processing, and completed. Each transaction has a unique reference number for tracking."
        },
        {
          question: "What if my transfer fails?",
          answer: "In the rare case of a failed transfer, funds are automatically refunded to your original payment method within 3-5 business days. You'll receive immediate notification and our support team will contact you to explain the reason and help you complete the transfer successfully."
        },
        {
          question: "How do I contact customer support?",
          answer: "Our customer support team is available 24/7. You can reach us through the Contact Us page, email at support@fastpay.com, or call our support line. We typically respond to inquiries within a few hours."
        },
        {
          question: "Can I cancel a transfer?",
          answer: "You can cancel a transfer only if it hasn't been processed yet. Once processing begins (usually within seconds), the transfer cannot be cancelled. For urgent issues, contact our support team immediately."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          question: "Which platforms does FastPay support?",
          answer: "FastPay is available on iOS (iPhone and iPad), Android devices, and through our web platform accessible from any modern browser. You can initiate and manage transfers from any of these platforms."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept bank transfers (ACH), debit cards, and credit cards. Bank transfers typically have lower fees, while card payments offer instant funding. Your payment method can be saved securely for future transactions."
        },
        {
          question: "Do you have an API for businesses?",
          answer: "Yes, we offer a robust API for businesses and agents. Our agent portal allows authorized representatives to process transfers on behalf of customers. Contact our business development team for API documentation and integration support."
        }
      ]
    }
  ]

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <FaQuestionCircle className="text-6xl mx-auto mb-6 opacity-90" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-100">
              Find answers to common questions about FastPay's services, security, and compliance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No questions found matching your search.</p>
              </div>
            ) : (
              filteredFaqs.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                    <span className="w-2 h-8 bg-primary-600 rounded-full mr-4"></span>
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const index = `${categoryIndex}-${questionIndex}`
                      const isOpen = openIndex === index

                      return (
                        <div
                          key={questionIndex}
                          className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                          <button
                            onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
                          >
                            <span className="text-lg font-semibold text-gray-900 pr-8">
                              {faq.question}
                            </span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0"
                            >
                              <FaChevronDown className="text-primary-600 text-xl" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@fastpay.com"
                className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/about"
                className="text-center p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">About Us</h4>
                <p className="text-sm text-gray-600">Learn about our company and mission</p>
              </a>
              <a
                href="/#features"
                className="text-center p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                <p className="text-sm text-gray-600">Explore our platform capabilities</p>
              </a>
              <a
                href="/login"
                className="text-center p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Get Started</h4>
                <p className="text-sm text-gray-600">Create your account today</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQs


