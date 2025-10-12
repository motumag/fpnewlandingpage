import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  FaUser, FaStore, FaFileUpload, FaCheckCircle, 
  FaArrowRight, FaArrowLeft, FaPhone, FaEnvelope,
  FaMapMarkerAlt, FaIdCard, FaBuilding, FaMoneyBillWave
} from 'react-icons/fa'

const AgentOnboarding = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    
    // Step 2: Business Information
    businessName: '',
    businessType: '',
    registrationNumber: '',
    taxId: '',
    address: '',
    city: '',
    region: '',
    
    // Step 3: KYC & Compliance
    sourceOfFunds: '',
    purposeOfAccount: '',
    isPoliticallyExposed: '',
    beneficialOwner: '',
    beneficialOwnerRelation: '',
    annualRevenue: '',
    numberOfEmployees: '',
    kycConsent: false,
    amlPolicyConsent: false,
    sanctionsScreeningConsent: false,
    
    // Step 4: Financial Information
    bankName: '',
    accountNumber: '',
    accountHolderName: '',
    expectedMonthlyVolume: '',
    
    // Step 5: Documents
    idDocument: null,
    businessLicense: null,
    bankStatement: null,
    proofOfAddress: null
  })

  const steps = [
    { number: 1, title: 'Personal Info', icon: FaUser },
    { number: 2, title: 'Business Details', icon: FaStore },
    { number: 3, title: 'KYC & Compliance', icon: FaCheckCircle },
    { number: 4, title: 'Financial Info', icon: FaMoneyBillWave },
    { number: 5, title: 'Documents', icon: FaFileUpload }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }))
    }
  }

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone && formData.dateOfBirth
      case 2:
        return formData.businessName && formData.businessType && formData.address && formData.city && formData.region
      case 3:
        return formData.sourceOfFunds && formData.purposeOfAccount && formData.isPoliticallyExposed && 
               formData.annualRevenue && formData.kycConsent && formData.amlPolicyConsent && formData.sanctionsScreeningConsent
      case 4:
        return formData.bankName && formData.accountNumber && formData.accountHolderName && formData.expectedMonthlyVolume
      case 5:
        return formData.idDocument && formData.businessLicense
      default:
        return false
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 5) {
        setCurrentStep(prev => prev + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setShowSuccess(true)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaEnvelope className="inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaPhone className="inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="+251 91 234 5678"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Details</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBuilding className="inline mr-2" />
                Business Name *
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your Business Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Type *
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Select Business Type</option>
                <option value="retail">Retail Store</option>
                <option value="supermarket">Supermarket</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="electronics">Electronics Shop</option>
                <option value="cafe">Café/Restaurant</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Registration Number
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Optional"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tax ID (TIN)
                </label>
                <input
                  type="text"
                  name="taxId"
                  value={formData.taxId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaMapMarkerAlt className="inline mr-2" />
                Business Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Street Address"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Addis Ababa"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region *
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Region</option>
                  <option value="addis-ababa">Addis Ababa</option>
                  <option value="oromia">Oromia</option>
                  <option value="amhara">Amhara</option>
                  <option value="tigray">Tigray</option>
                  <option value="sidama">Sidama</option>
                  <option value="southern">Southern Nations</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">KYC & Compliance Verification</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <FaCheckCircle className="inline mr-2 text-blue-600" />
                This information is required for Customer Identification Program (CIP) and Anti-Money Laundering (AML) compliance.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Source of Funds *
              </label>
              <select
                name="sourceOfFunds"
                value={formData.sourceOfFunds}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Select Source</option>
                <option value="business-revenue">Business Revenue</option>
                <option value="personal-savings">Personal Savings</option>
                <option value="loan">Business Loan</option>
                <option value="investment">Investment</option>
                <option value="inheritance">Inheritance</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purpose of Agent Account *
              </label>
              <select
                name="purposeOfAccount"
                value={formData.purposeOfAccount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Select Purpose</option>
                <option value="remittance-service">Providing Remittance Services</option>
                <option value="bill-payment">Bill Payment Services</option>
                <option value="money-transfer">Money Transfer Services</option>
                <option value="all-services">All FastPay Services</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Annual Revenue (ETB) *
              </label>
              <select
                name="annualRevenue"
                value={formData.annualRevenue}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Select Range</option>
                <option value="0-500k">ETB 0 - 500,000</option>
                <option value="500k-1m">ETB 500,000 - 1,000,000</option>
                <option value="1m-5m">ETB 1,000,000 - 5,000,000</option>
                <option value="5m-10m">ETB 5,000,000 - 10,000,000</option>
                <option value="10m+">ETB 10,000,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <select
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select Range</option>
                <option value="1">Just Me (Sole Proprietor)</option>
                <option value="2-5">2-5 Employees</option>
                <option value="6-10">6-10 Employees</option>
                <option value="11-20">11-20 Employees</option>
                <option value="20+">20+ Employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you a Politically Exposed Person (PEP)? *
              </label>
              <select
                name="isPoliticallyExposed"
                value={formData.isPoliticallyExposed}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Select</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
                <option value="family-member">Family Member of PEP</option>
                <option value="close-associate">Close Associate of PEP</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                A PEP is an individual who holds or has held a prominent public function (government official, senior executive, etc.)
              </p>
            </div>

            {formData.isPoliticallyExposed !== 'no' && formData.isPoliticallyExposed !== '' && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beneficial Owner Name (if different)
                  </label>
                  <input
                    type="text"
                    name="beneficialOwner"
                    value={formData.beneficialOwner}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Full name of beneficial owner"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relationship to Beneficial Owner
                  </label>
                  <input
                    type="text"
                    name="beneficialOwnerRelation"
                    value={formData.beneficialOwnerRelation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., Spouse, Parent, etc."
                  />
                </div>
              </div>
            )}

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Compliance Acknowledgments</h4>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="kycConsent"
                    checked={formData.kycConsent}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I consent to identity verification checks and understand that FastPay will verify my information against government databases and sanctions lists (OFAC, SDN, etc.) *
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="amlPolicyConsent"
                    checked={formData.amlPolicyConsent}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I acknowledge FastPay's Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) policies and agree to comply with all regulatory requirements *
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="sanctionsScreeningConsent"
                    checked={formData.sanctionsScreeningConsent}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I authorize real-time sanctions screening and continuous transaction monitoring for suspicious activity detection and regulatory compliance *
                  </span>
                </label>
              </div>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Financial Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Name *
              </label>
              <select
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Select Bank</option>
                <option value="cbe">Commercial Bank of Ethiopia</option>
                <option value="awash">Awash Bank</option>
                <option value="dashen">Dashen Bank</option>
                <option value="boa">Bank of Abyssinia</option>
                <option value="wegagen">Wegagen Bank</option>
                <option value="united">United Bank</option>
                <option value="nib">Nib International Bank</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Number *
              </label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="1000123456789"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Holder Name *
              </label>
              <input
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="As it appears on bank account"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaMoneyBillWave className="inline mr-2" />
                Expected Monthly Transaction Volume *
              </label>
              <select
                name="expectedMonthlyVolume"
                value={formData.expectedMonthlyVolume}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              >
                <option value="">Select Range</option>
                <option value="0-50k">ETB 0 - 50,000</option>
                <option value="50k-100k">ETB 50,000 - 100,000</option>
                <option value="100k-500k">ETB 100,000 - 500,000</option>
                <option value="500k-1m">ETB 500,000 - 1,000,000</option>
                <option value="1m+">ETB 1,000,000+</option>
              </select>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-blue-800">
                <FaCheckCircle className="inline mr-2 text-blue-600" />
                Your financial information is encrypted and securely stored. We use this information only for commission payments and compliance purposes.
              </p>
            </div>
          </motion.div>
        )

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upload Documents</h3>
            
            <div className="space-y-4">
              <FileUpload
                label="Government-Issued ID *"
                name="idDocument"
                file={formData.idDocument}
                onChange={handleFileChange}
                required
                description="National ID, Passport, or Driver's License"
              />
              
              <FileUpload
                label="Business License *"
                name="businessLicense"
                file={formData.businessLicense}
                onChange={handleFileChange}
                required
                description="Trade license or business registration certificate"
              />
              
              <FileUpload
                label="Bank Statement"
                name="bankStatement"
                file={formData.bankStatement}
                onChange={handleFileChange}
                description="Recent bank statement (last 3 months)"
              />
              
              <FileUpload
                label="Proof of Address"
                name="proofOfAddress"
                file={formData.proofOfAddress}
                onChange={handleFileChange}
                description="Utility bill or rental agreement"
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-yellow-800">
                <FaIdCard className="inline mr-2 text-yellow-600" />
                Please ensure all documents are clear and readable. Accepted formats: PDF, JPG, PNG (max 5MB each)
              </p>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center pt-24 pb-12 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FaCheckCircle className="text-5xl text-green-600" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying to become a FastPay agent. We've received your application and will review it within 2-3 business days.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              You'll receive an email at <strong>{formData.email}</strong> with next steps and your application status.
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-semibold"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 bg-clip-text text-transparent mb-4"
          >
            Become a FastPay Agent
          </motion.h1>
          <p className="text-lg text-gray-700 font-medium">Complete the form below to start your agent journey</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isCompleted = currentStep > step.number
              const isCurrent = currentStep === step.number
              
              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300
                      ${isCompleted ? 'bg-green-500 text-white' : 
                        isCurrent ? 'bg-primary-600 text-white ring-4 ring-primary-200' : 
                        'bg-gray-200 text-gray-500'}
                    `}>
                      {isCompleted ? <FaCheckCircle /> : <Icon />}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${isCurrent ? 'text-primary-600' : 'text-gray-500'}`}>
                      {step.title}
                    </span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 transition-all duration-300 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <AnimatePresence mode="wait">
            {renderStepContent()}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaArrowLeft /> Back
            </button>

            <button
              onClick={handleNext}
              disabled={!validateStep(currentStep) || isSubmitting}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !validateStep(currentStep) || isSubmitting
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : currentStep === 5 ? (
                <>Submit Application <FaCheckCircle /></>
              ) : (
                <>Next <FaArrowRight /></>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const FileUpload = ({ label, name, file, onChange, required, description }) => {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary-500 transition-colors">
      <label className="block">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            {label}
          </span>
          {required && <span className="text-red-500 text-sm">*</span>}
        </div>
        {description && (
          <p className="text-xs text-gray-500 mb-3">{description}</p>
        )}
        <input
          type="file"
          name={name}
          onChange={onChange}
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          required={required}
        />
        <div className={`flex items-center justify-center px-4 py-3 rounded-lg cursor-pointer transition-all ${
          file ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          {file ? (
            <div className="flex items-center gap-2 text-green-700">
              <FaCheckCircle />
              <span className="text-sm font-medium truncate">{file.name}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-600">
              <FaFileUpload />
              <span className="text-sm">Click to upload</span>
            </div>
          )}
        </div>
      </label>
    </div>
  )
}

export default AgentOnboarding

