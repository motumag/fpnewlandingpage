import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  FaArrowLeft, 
  FaCheckCircle, 
  FaArrowRight, 
  FaInfoCircle,
  FaMobileAlt,
  FaFileInvoiceDollar,
  FaGlobe,
  FaClock,
  FaShieldAlt,
  FaChartLine,
  FaBookOpen,
  FaLightbulb
} from 'react-icons/fa'

const ServiceGuide = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('overview')

  // Service data with icons
  const services = {
    'mobile-money-transfer': {
      icon: <FaMobileAlt className="text-5xl" />,
      title: "Mobile Money Transfer",
      shortDesc: "Send money instantly using our mobile apps",
      color: "blue",
      overview: "Send money to Ethiopia instantly using our mobile applications available on iOS and Android platforms. Our service is available 24/7, allowing you to transfer funds from anywhere in the world at your convenience.",
      howItWorks: [
        {
          title: "Download the App",
          description: "Get FastPay from App Store or Google Play. Available for iOS 12+ and Android 8+."
        },
        {
          title: "Create Your Account",
          description: "Sign up with your email and complete the quick verification process with your government-issued ID."
        },
        {
          title: "Add Recipient Details",
          description: "Enter recipient's name, bank account or mobile wallet details, and save for future transfers."
        },
        {
          title: "Choose Payment Method",
          description: "Link your debit card, bank account, or mobile wallet for seamless payments."
        },
        {
          title: "Confirm & Send",
          description: "Review details, confirm the exchange rate, and send. Both parties receive instant confirmation."
        },
        {
          title: "Track Your Transfer",
          description: "Monitor your transaction in real-time through the app until funds are delivered."
        }
      ],
      benefits: [
        "24/7 availability - send money anytime, anywhere",
        "Instant push notifications for sender and recipient",
        "Save recipient details for faster future transfers",
        "Real-time transaction history and receipts",
        "Multi-language support (English & Amharic)",
        "Biometric authentication (fingerprint/Face ID)",
        "Live exchange rate display",
        "In-app customer support chat"
      ],
      requirements: [
        "Smartphone with iOS 12+ or Android 8+",
        "Valid government-issued ID for verification",
        "Active email address and phone number",
        "Recipient's Ethiopian bank account or mobile wallet",
        "Stable internet connection",
        "Payment method (debit card or bank account)"
      ]
    },
    'bill-payment-service': {
      icon: <FaFileInvoiceDollar className="text-5xl" />,
      title: "Bill Payment Service",
      shortDesc: "Pay bills in Ethiopia from anywhere",
      color: "blue",
      overview: "Pay utility bills, school fees, and other services directly in Ethiopia from anywhere in the world. Convenient, fast, and secure bill payment solutions for your family's needs.",
      howItWorks: [
        {
          title: "Select Bill Payment",
          description: "Choose 'Bill Payment' from our mobile app or website and select the service provider."
        },
        {
          title: "Enter Bill Details",
          description: "Provide the account number, customer ID, or reference number for the bill."
        },
        {
          title: "Verify Amount",
          description: "System automatically fetches bill amount or you can enter the payment amount."
        },
        {
          title: "Review & Confirm",
          description: "Review all payment details including service provider, account, and amount."
        },
        {
          title: "Complete Payment",
          description: "Pay securely using your debit card, credit card, or bank account."
        },
        {
          title: "Receive Confirmation",
          description: "Get instant confirmation with receipt showing successful payment and transaction reference."
        }
      ],
      benefits: [
        "Pay bills from anywhere in the world 24/7",
        "Instant payment processing and confirmation",
        "Support for electricity, water, internet, and phone bills",
        "School fees and tuition payment options",
        "Automatic bill reminders and history tracking",
        "Save beneficiary details for quick future payments",
        "Digital receipts sent via email and SMS",
        "Scheduled payments for recurring bills"
      ],
      requirements: [
        "Valid FastPay account with verified identity",
        "Recipient's bill account number or customer ID",
        "Service provider name and location",
        "Valid payment method (debit/credit card or bank)",
        "Sufficient funds to cover bill amount plus small service fee"
      ]
    },
    'agent-services': {
      icon: <FaGlobe className="text-5xl" />,
      title: "Agent Services",
      shortDesc: "Become an authorized FastPay agent",
      color: "blue",
      overview: "Authorized agents can process transfers securely through our dedicated agent platform. Become a FastPay agent and offer remittance services to your community while earning commissions.",
      howItWorks: [
        {
          title: "Apply Online",
          description: "Submit your agent application through our website with business and personal details."
        },
        {
          title: "Background Check",
          description: "We conduct thorough background and compliance verification for security."
        },
        {
          title: "Training Program",
          description: "Complete our comprehensive 2-day training on systems, compliance, and customer service."
        },
        {
          title: "Receive Credentials",
          description: "Get your agent ID, access to the agent portal, and marketing materials."
        },
        {
          title: "Start Processing",
          description: "Accept customer transfers, process transactions through our secure platform."
        },
        {
          title: "Earn Commissions",
          description: "Receive competitive commissions on every transaction you process."
        }
      ],
      benefits: [
        "Free comprehensive training and certification",
        "Secure web-based agent management platform",
        "Real-time reporting and transaction tracking",
        "Marketing materials and signage provided",
        "Ongoing support from dedicated agent team",
        "Build your business while serving community",
        "Flexible working hours and location"
      ],
      requirements: [
        "Valid business license in your jurisdiction",
        "Physical retail location accessible to customers",
        "Minimum capital: $5,000 for liquidity management",
        "Pass background check and compliance verification",
        "Complete FastPay agent training program",
        "Stable internet connection and computer",
        "Professional business insurance"
      ]
    },
    'real-time-processing': {
      icon: <FaClock className="text-5xl" />,
      title: "Real-Time Processing",
      shortDesc: "Funds delivered in minutes, not days",
      color: "blue",
      overview: "Automated transaction validation and instant confirmation for faster fund delivery. Our advanced technology ensures your money reaches recipients in minutes, not days.",
      howItWorks: [
        {
          title: "Submit Transfer",
          description: "Enter transfer details through any FastPay channel (app, web, or agent)."
        },
        {
          title: "Instant Validation",
          description: "Our system validates all details in real-time - recipient info, amount, and payment method."
        },
        {
          title: "Secure Processing",
          description: "Payment is processed through encrypted channels with multi-layer security."
        },
        {
          title: "Immediate Confirmation",
          description: "Receive instant confirmation once payment is successful with transaction ID."
        },
        {
          title: "Rapid Disbursement",
          description: "Funds are released to recipient's bank or pickup location within minutes."
        },
        {
          title: "Notification Sent",
          description: "Both sender and recipient receive SMS and email confirmation instantly."
        }
      ],
      benefits: [
        "Funds delivered in 5-15 minutes average",
        "Automated validation reduces errors",
        "Instant confirmation gives peace of mind",
        "Real-time exchange rate locked at confirmation",
        "24/7 automated processing (no business hours)",
        "No delays for holidays or weekends",
        "Live tracking through mobile app",
        "Immediate email and SMS alerts"
      ],
      requirements: [
        "Valid recipient bank account or pickup location details",
        "Completed sender identity verification",
        "Sufficient funds in selected payment method",
        "Stable internet connection during transaction",
        "Up-to-date mobile app version"
      ]
    },
    'secure-transactions': {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Secure Transactions",
      shortDesc: "Bank-level security and compliance",
      color: "blue",
      overview: "End-to-end encryption, multi-factor authentication, and compliance with US regulations ensure your money and data are always protected.",
      howItWorks: [
        {
          title: "Encrypted Connection",
          description: "All data is encrypted using bank-level 256-bit SSL encryption from your device to our servers."
        },
        {
          title: "Multi-Factor Authentication",
          description: "Verify your identity with password plus SMS code, email, or biometric authentication."
        },
        {
          title: "Transaction Monitoring",
          description: "AI-powered fraud detection monitors all transactions 24/7 for suspicious activity."
        },
        {
          title: "Compliance Review",
          description: "Automated and manual reviews ensure compliance with BSA/AML regulations."
        },
        {
          title: "Secure Processing",
          description: "Your payment data is tokenized and never stored on our servers."
        },
        {
          title: "Audit Trail",
          description: "Complete transaction history maintained for security and compliance."
        }
      ],
      benefits: [
        "256-bit SSL encryption (same as major banks)",
        "PCI DSS Level 1 compliant payment processing",
        "NMLS licensed & FinCEN registered",
        "Full BSA/AML compliance monitoring",
        "24/7 fraud detection and prevention",
        "Secure data centers with redundancy",
        "Regular third-party security audits",
        "Customer data never sold or shared"
      ],
      requirements: [
        "Complete identity verification (KYC process)",
        "Enable two-factor authentication on account",
        "Use strong, unique passwords",
        "Keep login credentials confidential",
        "Update app to latest version regularly",
        "Use secure internet connections (avoid public WiFi)"
      ]
    },
    'competitive-rates': {
      icon: <FaChartLine className="text-5xl" />,
      title: "Competitive Rates",
      shortDesc: "Transparent pricing, no hidden fees",
      color: "blue",
      overview: "Transparent pricing with competitive exchange rates and low transfer fees. We believe in fair, honest pricing with no hidden charges.",
      howItWorks: [
        {
          title: "Check Live Rates",
          description: "View real-time exchange rates before starting your transfer - updated every 30 seconds."
        },
        {
          title: "See All Fees Upfront",
          description: "Complete fee breakdown shown before you confirm - no surprises."
        },
        {
          title: "Lock Your Rate",
          description: "Exchange rate is locked at confirmation and guaranteed for your transaction."
        },
        {
          title: "Compare Rates",
          description: "Use our rate comparison tool to see how we stack up against competitors."
        },
        {
          title: "Complete Transfer",
          description: "Pay the exact amount shown - no additional or hidden charges."
        },
        {
          title: "Receive Receipt",
          description: "Detailed receipt showing all charges, exchange rate, and total amount delivered."
        }
      ],
      benefits: [
        "Competitive exchange rates (updated every 30 seconds)",
        "Low, transparent transfer fees from $5",
        "No hidden charges or surprise fees",
        "Rate locked at time of transaction",
        "Volume discounts for frequent senders",
        "Special promotional rates for new customers",
        "Loyalty rewards program",
        "Price match guarantee available"
      ],
      requirements: [
        "Valid payment method (debit card or bank)",
        "Completed account registration",
        "Meet minimum transfer amount ($10)",
        "Verify identity for regulatory compliance"
      ]
    }
  }

  const service = services[serviceId]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
      const sections = ['overview', 'how-it-works', 'benefits', 'requirements']

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const colorClasses = {
    blue: 'from-primary-600 to-primary-800',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    indigo: 'from-indigo-500 to-indigo-600',
    pink: 'from-pink-500 to-pink-600'
  }

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section className={`bg-gradient-to-r ${colorClasses[service.color]} py-12 md:py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-white/90 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span className="font-medium">Back to Home</span>
          </button>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white flex-shrink-0">
              {service.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <FaBookOpen className="mr-2 text-primary-600" />
                On This Page
              </h3>
              <nav className="space-y-1">
                <a 
                  href="#overview" 
                  className={`block text-sm transition-all py-2 px-3 rounded ${
                    activeSection === 'overview'
                      ? 'text-white bg-primary-600 font-semibold shadow-md'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  Overview
                </a>
                <a 
                  href="#how-it-works" 
                  className={`block text-sm transition-all py-2 px-3 rounded ${
                    activeSection === 'how-it-works'
                      ? 'text-white bg-primary-600 font-semibold shadow-md'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  How It Works
                </a>
                <a 
                  href="#benefits" 
                  className={`block text-sm transition-all py-2 px-3 rounded ${
                    activeSection === 'benefits'
                      ? 'text-white bg-primary-600 font-semibold shadow-md'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  Key Benefits
                </a>
                <a 
                  href="#requirements" 
                  className={`block text-sm transition-all py-2 px-3 rounded ${
                    activeSection === 'requirements'
                      ? 'text-white bg-primary-600 font-semibold shadow-md'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  Requirements
                </a>
              </nav>

              <div className="mt-8 pt-6 border-t">
                <Link
                  to="/contact"
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center font-semibold py-3 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm">
              {/* Overview */}
              <motion.div
                id="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 md:p-8 border-b"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <FaInfoCircle className="text-primary-600 text-2xl" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Overview</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.overview}
                </p>
              </motion.div>

              {/* How It Works */}
              <motion.div
                id="how-it-works"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 md:p-8 border-b"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FaArrowRight className="text-primary-600 text-2xl" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How It Works</h2>
                </div>
                <div className="space-y-6">
                  {service.howItWorks.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                id="benefits"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 md:p-8 border-b"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FaCheckCircle className="text-primary-600 text-2xl" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Key Benefits</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <FaCheckCircle className="text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                id="requirements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 md:p-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <FaLightbulb className="text-primary-600 text-2xl" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Requirements</h2>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 space-y-4">
                  {service.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{req}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust FastPay for their remittance needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/login"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Create Account
                </Link>
                <Link
                  to="/contact"
                  className="bg-primary-700 hover:bg-primary-800 text-white border-2 border-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceGuide

