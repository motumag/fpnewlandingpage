import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaApple, FaGooglePlay } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-primary-400">Fast</span>
              <span className="text-accent-400">Pay</span>
            </h3>
            <p className="text-sm mb-4">
              Licensed Money Services Business delivering secure, fast, and reliable cross-border payment solutions to Ethiopia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-primary-400 transition-colors">Leadership Team</Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-primary-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/#features" className="hover:text-primary-400 transition-colors">Features</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-primary-400 transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-sm">8701 Georgia Ave, Suite 606<br />Silver Spring, MD 20910</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-sm">+1 (301) 200-7090</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-sm">+251 99-549-9844</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-primary-400 flex-shrink-0" />
                <a href="mailto:support@fastpayet.com" className="text-sm hover:text-primary-400 transition-colors">support@fastpayet.com</a>
              </li>
            </ul>
          </div>

          {/* Regulatory Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Regulatory Compliance</h4>
            <ul className="space-y-2 text-sm">
              <li>NMLS ID: 2327896</li>
              <li>FinCEN MSB: 31000249115048</li>
              <li>Maryland License: Active</li>
              <li>NBE Approved</li>
              <li>MD ORF Licensed</li>
            </ul>
          </div>

          {/* App Store Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Download Our App</h4>
            <div className="space-y-3">
              <a 
                href="https://apps.apple.com/pw/app/fastpayet/id1666650448"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-2.5 rounded-lg transition-all duration-300 group"
              >
                <FaApple className="text-2xl text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-400">Download on the</span>
                  <span className="text-sm font-semibold text-white group-hover:text-primary-400">App Store</span>
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.fastpay.android&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700 px-4 py-2.5 rounded-lg transition-all duration-300 group"
              >
                <FaGooglePlay className="text-2xl text-white" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-400">Get it on</span>
                  <span className="text-sm font-semibold text-white group-hover:text-primary-400">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © {currentYear} FastPay LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
              <Link to="/compliance" className="hover:text-primary-400 transition-colors">Compliance</Link>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            FastPay LLC is a licensed Money Services Business registered with FinCEN and complies with the Bank Secrecy Act (BSA), USA PATRIOT Act, and OFAC regulations.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


