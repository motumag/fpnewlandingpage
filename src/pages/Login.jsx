import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaLock, FaEye, FaEyeSlash, FaApple, FaGoogle, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically handle authentication
  }

  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-primary-600" />,
      title: "Bank-Level Security",
      description: "Your data is protected with end-to-end encryption and multi-factor authentication"
    },
    {
      icon: <FaMobileAlt className="text-3xl text-primary-600" />,
      title: "24/7 Access",
      description: "Send money anytime, anywhere from your mobile device or computer"
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Branding & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to <br />
              <span className="text-primary-600">Fast</span>
              <span className="text-accent-500">Pay</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join agents of customers who trust FastPay for secure, fast, and reliable money transfers to Ethiopia.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex-shrink-0 p-3 bg-primary-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Fully Licensed & Compliant</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold">NMLS ID</div>
                  <div className="text-primary-200">2327896</div>
                </div>
                <div>
                  <div className="font-semibold">FinCEN</div>
                  <div className="text-primary-200">Registered MSB</div>
                </div>
                <div>
                  <div className="font-semibold">Maryland</div>
                  <div className="text-primary-200">Licensed</div>
                </div>
                <div>
                  <div className="font-semibold">NBE</div>
                  <div className="text-primary-200">Approved</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Login/Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              {/* Tab Switcher */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isLogin
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    !isLogin
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-gray-600 mb-6">
                {isLogin
                  ? 'Enter your credentials to access your account'
                  : 'Get started with FastPay in minutes'}
              </p>

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-md">
                  <FaGoogle className="text-xl text-red-500" />
                  <span>Continue with Google</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-3 bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-md">
                  <FaApple className="text-2xl" />
                  <span>Continue with Apple</span>
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Sign Up Only Fields */}
                {!isLogin && (
                  <>
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required={!isLogin}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required={!isLogin}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </>
                )}

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password (Sign Up Only) */}
                {!isLogin && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required={!isLogin}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}

                {/* Remember Me / Forgot Password */}
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-semibold">
                      Forgot password?
                    </a>
                  </div>
                )}

                {/* Terms Agreement (Sign Up Only) */}
                {!isLogin && (
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      required={!isLogin}
                      className="w-4 h-4 mt-1 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-primary-600 hover:text-primary-700 font-semibold">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-primary-600 hover:text-primary-700 font-semibold">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              {/* Footer Links */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? "Don't have an account? " : 'Already have an account? '}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>

              {/* Mobile-only compliance info */}
              <div className="lg:hidden mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  FastPay LLC is a licensed Money Services Business
                  <br />
                  NMLS ID: 2327896 | FinCEN Registered
                </p>
              </div>
            </div>

            {/* Additional Links */}
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600">
                Need help? <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">Contact Support</Link>
              </p>
              <p className="text-sm text-gray-600">
                Learn more <Link to="/about" className="text-primary-600 hover:text-primary-700 font-semibold">About Us</Link> | <Link to="/faqs" className="text-primary-600 hover:text-primary-700 font-semibold">FAQs</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login


