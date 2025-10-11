import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaMobileAlt, FaUniversity, FaShieldAlt, FaGlobe, FaUsers, FaBolt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const TransferCalculator = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef(null)

  // Remittance-related cards
  const remittanceCards = [
    {
      id: 1,
      icon: FaMobileAlt,
      title: "Mobile Transfer",
      description: "Send money instantly from your phone to any bank in Ethiopia",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      accentColor: "blue"
    },
    {
      id: 2,
      icon: FaUniversity,
      title: "30+ Banks",
      description: "Direct integration with leading Ethiopian banks nationwide",
      gradient: "from-green-500 via-green-600 to-green-700",
      accentColor: "green"
    },
    {
      id: 3,
      icon: FaShieldAlt,
      title: "Secure & Licensed",
      description: "NMLS licensed, FinCEN registered & fully compliant",
      gradient: "from-purple-500 via-purple-600 to-purple-700",
      accentColor: "purple"
    },
    {
      id: 4,
      icon: FaBolt,
      title: "Instant Delivery",
      description: "Real-time processing with instant confirmation",
      gradient: "from-orange-500 via-orange-600 to-orange-700",
      accentColor: "orange"
    },
    {
      id: 5,
      icon: FaUsers,
      title: "Family Support",
      description: "Helping families stay connected across borders",
      gradient: "from-pink-500 via-pink-600 to-pink-700",
      accentColor: "pink"
    },
    {
      id: 6,
      icon: FaGlobe,
      title: "Global Reach",
      description: "Send from anywhere in the world, anytime",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
      accentColor: "indigo"
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
            className="flex overflow-x-auto gap-3 sm:gap-4 lg:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {remittanceCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] snap-start"
              >
                <div className={`relative min-h-[300px] sm:min-h-[320px] lg:min-h-[340px] bg-gradient-to-br ${card.gradient} rounded-xl lg:rounded-2xl shadow-xl overflow-hidden group/card cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full -ml-10 sm:-ml-12 -mb-10 sm:-mb-12"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-center items-center text-center text-white">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-xl lg:rounded-2xl"
                    >
                      <card.icon className="text-4xl sm:text-5xl lg:text-6xl" />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
                      {card.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-4 sm:mt-6 w-12 sm:w-16 h-1 bg-white/40 rounded-full"></div>
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
          {remittanceCards.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-gray-400"
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

