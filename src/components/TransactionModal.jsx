import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle, FaSpinner, FaTimes, FaReceipt } from 'react-icons/fa'

const TransactionModal = ({ isOpen, onClose, amount, exchangeRate, bonus, recipientAmount }) => {
  const [stage, setStage] = useState('processing') // processing, success

  useEffect(() => {
    if (isOpen) {
      setStage('processing')
      // Simulate processing time
      const timer = setTimeout(() => {
        setStage('success')
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  // Generate dummy transaction ID
  const transactionId = `FP${Date.now().toString().slice(-8)}`
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <FaTimes className="text-xl" />
            </button>

            {stage === 'processing' && (
              <div className="p-8 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-6"
                >
                  <FaSpinner className="text-6xl text-primary-600" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Processing Transaction
                </h3>
                <p className="text-gray-600 mb-6">
                  Please wait while we process your transfer...
                </p>

                {/* Progress steps */}
                <div className="space-y-3 text-left">
                  {['Verifying transaction', 'Connecting to bank', 'Transferring funds'].map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.5 }}
                      className="flex items-center space-x-3 text-sm text-gray-600"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, delay: index * 0.5 }}
                        className="w-2 h-2 bg-primary-600 rounded-full"
                      />
                      <span>{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {stage === 'success' && (
              <div className="p-8">
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <FaCheckCircle className="text-7xl text-green-500" />
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 bg-green-500 rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    Transfer Successful!
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Your money has been sent successfully
                  </p>

                  {/* Transaction Details Card */}
                  <div className="bg-gray-50 rounded-xl p-5 space-y-3 mb-6">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <div className="flex items-center space-x-2">
                        <FaReceipt className="text-gray-400" />
                        <span className="text-xs font-semibold text-gray-500 uppercase">Transaction ID</span>
                      </div>
                      <span className="font-mono text-sm font-semibold text-gray-900">{transactionId}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Amount Sent</span>
                      <span className="font-semibold text-gray-900">${amount} USD</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Exchange Rate</span>
                      <span className="font-semibold text-gray-900">{exchangeRate} ETB/USD</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bonus</span>
                      <span className="font-semibold text-green-600">+{bonus} ETB</span>
                    </div>

                    <div className="flex justify-between text-sm pt-3 border-t border-gray-200">
                      <span className="font-semibold text-gray-700">Recipient Gets</span>
                      <span className="text-xl font-bold text-primary-600">{recipientAmount} ETB</span>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 pt-2">
                      <span>Date & Time</span>
                      <span>{currentDate}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={onClose}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => {
                        // Simulate download receipt
                        alert('Receipt downloaded! (This is a demo)')
                      }}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <FaReceipt />
                      <span>Download Receipt</span>
                    </button>
                  </div>

                  {/* Success message */}
                  <p className="text-center text-xs text-gray-500 mt-4">
                    ✓ Funds will arrive within minutes
                  </p>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default TransactionModal

