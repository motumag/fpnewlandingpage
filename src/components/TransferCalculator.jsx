import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaMobileAlt, FaUniversity, FaShieldAlt, FaGlobe, FaUsers, FaBolt, FaChevronLeft, FaChevronRight, FaChartLine, FaLock, FaClock } from 'react-icons/fa'

const TransferCalculator = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef(null)

  // Feature cards with circular icon design
  const featureCards = [
    {
      id: 1,
      icon: FaMobileAlt,
      title: "Mobile Transfer",
      description: "Send money instantly from your phone to any bank in Ethiopia",
      circleColor: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: FaUniversity,
      title: "30+ Banks",
      description: "Direct integration with leading Ethiopian banks nationwide",
      circleColor: "from-primary-500 to-primary-700",
      bgColor: "bg-primary-50"
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: "Secure & Licensed",
      description: "NMLS licensed, FinCEN registered & fully compliant",
      circleColor: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 4,
      icon: FaBolt,
      title: "Instant Delivery",
      description: "Real-time processing with instant confirmation",
      circleColor: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      id: 5,
      icon: FaChartLine,
      title: "Real-Time Tracking",
      description: "Monitor your transactions with live status updates",
      circleColor: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 6,
      icon: FaLock,
      title: "Bank-Level Security",
      description: "End-to-end encryption protecting every transaction",
      circleColor: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      id: 7,
      icon: FaUsers,
      title: "24/7 Support",
      description: "Always here to help your family stay connected",
      circleColor: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      id: 8,
      icon: FaClock,
      title: "Instant Confirmation",
      description: "Get immediate confirmation for peace of mind",
      circleColor: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current
        const scrollWidth = container.scrollWidth - container.clientWidth
        
        // Calculate card width based on screen size
        const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : window.innerWidth < 1024 ? 340 : 360
        const gap = window.innerWidth < 640 ? 12 : window.innerWidth < 1024 ? 16 : 24
        
        if (scrollPosition >= scrollWidth - 10) {
          // Reset to start
          container.scrollTo({ left: 0, behavior: 'smooth' })
          setScrollPosition(0)
        } else {
          // Scroll to next card
          const newPosition = Math.min(scrollPosition + cardWidth + gap, scrollWidth)
          container.scrollTo({ left: newPosition, behavior: 'smooth' })
          setScrollPosition(newPosition)
        }
      }
    }, 4000) // Slightly longer delay for better UX

    return () => clearInterval(interval)
  }, [scrollPosition])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      // Adjust scroll amount based on card width + gap
      const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 320 : window.innerWidth < 1024 ? 340 : 360
      const gap = window.innerWidth < 640 ? 12 : window.innerWidth < 1024 ? 16 : 24
      const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap)
      const newPosition = container.scrollLeft + scrollAmount
      container.scrollTo({ left: newPosition, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full px-4 sm:px-6 lg:px-8"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Why Choose FastPay?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Experience the best in remittance services
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          {/* Left Arrow - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-3 lg:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-gray-800 text-lg lg:text-xl" />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 lg:gap-8 pb-4 snap-x snap-mandatory scrollbar-hide px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] snap-start"
              >
                <div className="relative group/card">
                  {/* Dotted Line Connector - Only show for not the last card */}
                  {index < featureCards.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-8 w-4 lg:w-8 border-t-2 border-dashed border-gray-300 z-0"></div>
                  )}

                  {/* Card */}
                  <div className={`relative ${card.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-gray-300 cursor-pointer transform hover:-translate-y-1`}>
                    {/* Circular Icon */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="relative"
                    >
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${card.circleColor} flex items-center justify-center shadow-lg relative z-10`}>
                        <card.icon className="text-3xl text-white" />
                      </div>
                      
                      {/* Circular border ring */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-2 border-dashed border-gray-300 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {card.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom decorative element */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-12 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 bg-white hover:bg-gray-50 shadow-xl rounded-full p-3 lg:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-gray-800 text-lg lg:text-xl" />
          </button>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-2">
          {featureCards.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-primary-500"
              role="button"
              aria-label={`Scroll to card ${index + 1}`}
              tabIndex={0}
            ></div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="md:hidden text-center mt-4">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <span>👈</span>
            <span>Swipe to explore</span>
            <span>👉</span>
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default TransferCalculator

