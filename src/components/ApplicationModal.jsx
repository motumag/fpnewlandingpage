import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaTimes, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub,
  FaFileUpload,
  FaPaperPlane,
  FaCheckCircle,
  FaMapMarkerAlt
} from 'react-icons/fa'

const ApplicationModal = ({ isOpen, onClose, jobTitle, jobId, department }) => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedIn: '',
    github: '',
    portfolio: '',
    coverLetter: '',
    yearsOfExperience: '',
    currentCompany: '',
    expectedSalary: '',
    availableFrom: '',
    resume: null
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({
          ...prev,
          resume: 'File size should be less than 5MB'
        }))
        return
      }
      setFormData(prev => ({
        ...prev,
        resume: file
      }))
      setErrors(prev => ({
        ...prev,
        resume: ''
      }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    
    if (!formData.resume) {
      newErrors.resume = 'Resume is required'
    }
    
    if (!formData.yearsOfExperience) {
      newErrors.yearsOfExperience = 'Years of experience is required'
    }
    
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required'
    } else if (formData.coverLetter.trim().length < 100) {
      newErrors.coverLetter = 'Cover letter should be at least 100 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    }
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateStep2()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call with dummy data
    setTimeout(() => {
      console.log('Application submitted:', {
        ...formData,
        jobId,
        jobTitle,
        department,
        submittedAt: new Date().toISOString()
      })
      
      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Auto close after 3 seconds
      setTimeout(() => {
        handleClose()
      }, 3000)
    }, 2000)
  }

  const handleClose = () => {
    setStep(1)
    setIsSuccess(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedIn: '',
      github: '',
      portfolio: '',
      coverLetter: '',
      yearsOfExperience: '',
      currentCompany: '',
      expectedSalary: '',
      availableFrom: '',
      resume: null
    })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-5 flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">Apply for Position</h2>
                <p className="text-primary-100 text-sm mt-1">{jobTitle}</p>
              </div>
              <button
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <FaCheckCircle className="text-5xl text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 text-lg mb-2">
                  Thank you for applying to {jobTitle}
                </p>
                <p className="text-gray-500">
                  We'll review your application and get back to you soon.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="px-6 pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Step {step} of 2
                    </span>
                    <span className="text-sm text-gray-500">
                      {step === 1 ? 'Personal Information' : 'Application Details'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: step === 1 ? '50%' : '100%' }}
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Form Content */}
                <div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-240px)]">
                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Personal Information */}
                    {step === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleChange}
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
                                errors.fullName ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="John Doe"
                            />
                          </div>
                          {errors.fullName && (
                            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="john.doe@example.com"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
                                errors.phone ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="+251 911 234567"
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                          )}
                        </div>

                        {/* Location */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Current Location <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={handleChange}
                              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
                                errors.location ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="Addis Ababa, Ethiopia"
                            />
                          </div>
                          {errors.location && (
                            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                          )}
                        </div>

                        {/* LinkedIn */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            LinkedIn Profile
                          </label>
                          <div className="relative">
                            <FaLinkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                              type="url"
                              name="linkedIn"
                              value={formData.linkedIn}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                              placeholder="https://linkedin.com/in/johndoe"
                            />
                          </div>
                        </div>

                        {/* GitHub/Portfolio */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              GitHub
                            </label>
                            <div className="relative">
                              <FaGithub className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              <input
                                type="url"
                                name="github"
                                value={formData.github}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                placeholder="github.com/johndoe"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Portfolio Website
                            </label>
                            <input
                              type="url"
                              name="portfolio"
                              value={formData.portfolio}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                              placeholder="johndoe.com"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Application Details */}
                    {step === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        {/* Resume Upload */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Upload Resume/CV <span className="text-red-500">*</span>
                          </label>
                          <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                            errors.resume ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-primary-500 bg-gray-50'
                          }`}>
                            <FaFileUpload className="text-4xl text-gray-400 mx-auto mb-3" />
                            <label className="cursor-pointer">
                              <span className="text-primary-600 font-semibold hover:text-primary-700">
                                Click to upload
                              </span>
                              <span className="text-gray-600"> or drag and drop</span>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                                className="hidden"
                              />
                            </label>
                            <p className="text-xs text-gray-500 mt-2">
                              PDF, DOC, DOCX (Max 5MB)
                            </p>
                            {formData.resume && (
                              <p className="text-sm text-green-600 mt-2 font-medium">
                                ✓ {formData.resume.name}
                              </p>
                            )}
                          </div>
                          {errors.resume && (
                            <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
                          )}
                        </div>

                        {/* Years of Experience & Current Company */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Years of Experience <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="yearsOfExperience"
                              value={formData.yearsOfExperience}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
                                errors.yearsOfExperience ? 'border-red-500' : 'border-gray-300'
                              }`}
                            >
                              <option value="">Select</option>
                              <option value="0-1">0-1 years</option>
                              <option value="1-3">1-3 years</option>
                              <option value="3-5">3-5 years</option>
                              <option value="5-7">5-7 years</option>
                              <option value="7-10">7-10 years</option>
                              <option value="10+">10+ years</option>
                            </select>
                            {errors.yearsOfExperience && (
                              <p className="text-red-500 text-xs mt-1">{errors.yearsOfExperience}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Current Company
                            </label>
                            <input
                              type="text"
                              name="currentCompany"
                              value={formData.currentCompany}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                              placeholder="Current Employer"
                            />
                          </div>
                        </div>

                        {/* Expected Salary & Availability */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Expected Salary (ETB)
                            </label>
                            <input
                              type="text"
                              name="expectedSalary"
                              value={formData.expectedSalary}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                              placeholder="e.g., 150,000 ETB/month"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Available From
                            </label>
                            <input
                              type="date"
                              name="availableFrom"
                              value={formData.availableFrom}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Cover Letter */}
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Cover Letter <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            rows="6"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none ${
                              errors.coverLetter ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                          />
                          <div className="flex justify-between items-center mt-1">
                            {errors.coverLetter ? (
                              <p className="text-red-500 text-xs">{errors.coverLetter}</p>
                            ) : (
                              <p className="text-xs text-gray-500">Minimum 100 characters</p>
                            )}
                            <p className="text-xs text-gray-500">
                              {formData.coverLetter.length} characters
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </div>

                {/* Footer Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
                  <button
                    onClick={step === 1 ? handleClose : handleBack}
                    className="px-6 py-2.5 text-gray-700 hover:bg-gray-200 rounded-lg font-semibold transition-colors"
                  >
                    {step === 1 ? 'Cancel' : 'Back'}
                  </button>
                  
                  {step === 1 ? (
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ApplicationModal

