import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDollarSign, FaArrowRight } from 'react-icons/fa'
import TransactionModal from './TransactionModal'

const TransferCalculator = () => {
  const [transferAmount, setTransferAmount] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const exchangeRate = 142.81
  const bonusBirr = 12

  // Calculate recipient amount
  const calculateRecipientAmount = (amount) => {
    const numAmount = parseFloat(amount) || 0
    return (numAmount * exchangeRate + bonusBirr).toFixed(2)
  }

  const handleAmountChange = (e) => {
    const value = e.target.value
    // Allow empty string, numbers, and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setTransferAmount(value)
    }
  }

  const recipientGets = calculateRecipientAmount(transferAmount)
  const exchangeValue = ((parseFloat(transferAmount) || 0) * exchangeRate).toFixed(2)

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative max-w-md mx-auto"
    >
      <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
        {/* Header */}
        <div className="mb-5 text-center">
          <h3 className="text-xl font-bold text-gray-900">Transfer Calculator</h3>
          <p className="text-xs text-gray-500 mt-1">Calculate in real-time</p>
        </div>

        <div className="space-y-4">
          {/* Transfer Amount Input */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
              You Send
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                $
              </span>
              <input
                type="text"
                value={transferAmount}
                onChange={handleAmountChange}
                placeholder="0.00"
                className="w-full pl-8 pr-14 py-3 text-xl font-bold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-gray-500">
                USD
              </span>
            </div>
          </div>

          {/* Exchange Info - Compact */}
          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Exchange Rate</span>
              <span className="font-semibold text-gray-900">{exchangeRate} ETB/USD</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Transfer Amount × Rate</span>
              <span className="font-semibold text-gray-900">{exchangeValue} ETB</span>
            </div>
            <div className="flex items-center justify-between text-xs border-t border-gray-200 pt-2">
              <span className="text-gray-600">Bonus</span>
              <span className="font-semibold text-green-600">+{bonusBirr} ETB</span>
            </div>
          </div>

          {/* Recipient Gets - Clean */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-4">
            <div className="text-center">
              <p className="text-xs font-semibold text-primary-100 uppercase tracking-wide mb-1">
                Recipient Gets
              </p>
              <motion.div
                key={recipientGets}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-3xl font-bold text-white"
              >
                {recipientGets} <span className="text-lg">ETB</span>
              </motion.div>
            </div>
          </div>

          {/* Send Money Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
          >
            <span>Send Money</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Footer Info */}
          <p className="text-center text-xs text-gray-500">
            🔒 Secure & Licensed
          </p>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute -top-4 -right-4 w-40 h-40 bg-primary-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 -z-10"></div>
      <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 -z-10"></div>

      {/* Transaction Modal */}
      <TransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amount={parseFloat(transferAmount) || 0}
        exchangeRate={exchangeRate}
        bonus={bonusBirr}
        recipientAmount={recipientGets}
      />
    </motion.div>
  )
}

export default TransferCalculator

