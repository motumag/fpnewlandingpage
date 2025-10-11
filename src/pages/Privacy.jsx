import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaShieldAlt, FaBookOpen, FaLock, FaUserShield } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('interpretation')

  const sections = [
    { id: 'interpretation', title: 'Interpretation and Definitions' },
    { id: 'collecting', title: 'Collecting and Using Your Personal Data' },
    { id: 'use', title: 'Use of Your Personal Data' },
    { id: 'retention', title: 'Retention of Your Personal Data' },
    { id: 'transfer', title: 'Transfer of Your Personal Data' },
    { id: 'disclosure', title: 'Disclosure of Your Personal Data' },
    { id: 'security', title: 'Security of Your Personal Data' },
    { id: 'processing', title: 'Detailed Information on Processing' },
    { id: 'ccpa', title: 'CCPA Privacy' },
    { id: 'do-not-track', title: '"Do Not Track" Policy' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'links', title: 'Links to Other Websites' },
    { id: 'changes', title: 'Changes to this Privacy Policy' },
    { id: 'contact', title: 'Contact Us' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <FaShieldAlt className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-primary-100 mb-2">Last updated: December 9, 2023</p>
            <p className="text-lg text-primary-200 max-w-3xl mx-auto">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <FaBookOpen className="mr-2 text-primary-600" />
                Quick Navigation
              </h3>
              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#${section.id}`}
                    className={`block text-sm transition-all py-2 px-3 rounded ${
                      activeSection === section.id
                        ? 'text-white bg-primary-600 font-semibold shadow-md'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t">
                <Link
                  to="/contact"
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Have Questions?
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
              
              {/* Introduction */}
              <div className="mb-12 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed">
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* Interpretation and Definitions */}
              <section id="interpretation" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Interpretation and Definitions
                </h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Interpretation</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Definitions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For the purposes of this Privacy Policy:
                </p>
                
                <div className="space-y-4 bg-gray-50 rounded-lg p-6">
                  {[
                    { term: 'You', definition: 'means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.' },
                    { term: 'Company', definition: '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to FastPay LLC, 12026 Saw Mill Ct, Silver Spring, MD 20902.' },
                    { term: 'Application', definition: 'means the software program provided by the Company downloaded by You on any electronic device, named FastPay' },
                    { term: 'Affiliate', definition: 'means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.' },
                    { term: 'Account', definition: 'means a unique account created for You to access our Service or parts of our Service.' },
                    { term: 'Service', definition: 'refers to the Application.' },
                    { term: 'Country', definition: 'refers to: Maryland, United States' },
                    { term: 'Service Provider', definition: 'means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.' },
                    { term: 'Third-party Social Media Service', definition: 'refers to any website or any social network website through which a User can log in or create an account to use the Service.' },
                    { term: 'Personal Data', definition: 'is any information that relates to an identified or identifiable individual. For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.' },
                    { term: 'Device', definition: 'means any device that can access the Service such as a computer, a cellphone or a digital tablet.' },
                    { term: 'Usage Data', definition: 'refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).' },
                    { term: 'Do Not Track (DNT)', definition: 'is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.' },
                    { term: 'Business', definition: 'for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers\' personal information and determines the purposes and means of the processing of Consumers\' personal information.' },
                    { term: 'Consumer', definition: 'for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident.' },
                    { term: 'Sale', definition: 'for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer\'s Personal information to another business or a third party for monetary or other valuable consideration.' }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <span className="font-bold text-primary-600 mr-2 flex-shrink-0">{item.term}:</span>
                      <span className="text-gray-700">{item.definition}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Collecting and Using Your Personal Data */}
              <section id="collecting" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Collecting and Using Your Personal Data
                </h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Data Collected</h3>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Personal Data</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 space-y-2 mb-6">
                  {[
                    'Email address',
                    'First name and last name',
                    'Phone number',
                    'Address, State, Province, ZIP/Postal code, City'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Usage Data</h4>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Usage Data is collected automatically when using the Service.
                  </p>
                  <p>
                    Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Information from Third-Party Social Media Services</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:
                </p>
                <div className="bg-purple-50 rounded-lg p-6 space-y-2 mb-4">
                  {['Facebook', 'Google', 'Twitter'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-purple-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.
                  </p>
                  <p>
                    You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Information Collected while Using the Application</h4>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    While using Our Application, in order to provide features of Our Application, We may collect, with your prior permission:
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                    <p className="font-semibold text-amber-900 mb-2">
                      Information regarding your location
                    </p>
                    <p className="text-gray-700">
                      We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it be simply stored on Your device.
                    </p>
                  </div>
                  <p>
                    You can enable or disable access to this information at any time, through Your Device settings. You can also enable or disable location services when You use Our Service at any time, through Your Device settings.
                  </p>
                </div>
              </section>

              {/* Use of Your Personal Data */}
              <section id="use" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Use of Your Personal Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Company may use Personal Data for the following purposes:
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: 'To provide and maintain our Service', desc: 'including to monitor the usage of our Service.' },
                    { title: 'To manage Your Account', desc: 'to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.' },
                    { title: 'For the performance of a contract', desc: 'the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.' },
                    { title: 'To contact You', desc: 'To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application\'s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.' },
                    { title: 'To provide You with news and offers', desc: 'To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.' },
                    { title: 'To manage Your requests', desc: 'To attend and manage Your requests to Us.' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">We may share your personal information in the following situations:</h3>
                <div className="space-y-4">
                  {[
                    { title: 'With Service Providers', desc: 'We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to show advertisements to You to help support and maintain Our Service, to contact You, to advertise on third party websites to You after You visited our Service or for payment processing.' },
                    { title: 'For Business transfers', desc: 'We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.' },
                    { title: 'With Affiliates', desc: 'We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.' },
                    { title: 'With Business partners', desc: 'We may share Your information with Our business partners to offer You certain products, services or promotions.' },
                    { title: 'With other users', desc: 'when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.' }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <span className="font-bold text-primary-600 mr-2 flex-shrink-0 mt-1">•</span>
                      <div>
                        <span className="font-bold text-gray-900">{item.title}:</span>
                        <span className="text-gray-700"> {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Retention of Your Personal Data */}
              <section id="retention" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Retention of Your Personal Data
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                  </p>
                  <p>
                    The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                  </p>
                </div>
              </section>

              {/* Transfer of Your Personal Data */}
              <section id="transfer" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Transfer of Your Personal Data
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold text-blue-900">
                      Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                    </p>
                  </div>
                  <p>
                    The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                  </p>
                </div>
              </section>

              {/* Disclosure of Your Personal Data */}
              <section id="disclosure" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Disclosure of Your Personal Data
                </h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Transactions</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Law Enforcement</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                </p>
                <div className="bg-red-50 rounded-lg p-6 space-y-2">
                  {[
                    'Comply with a legal obligation',
                    'Protect and defend the rights or property of the Company',
                    'Prevent or investigate possible wrongdoing in connection with the Service',
                    'Protect the personal safety of Users of the Service or the public',
                    'Protect against legal liability'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">⚠</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Security of Your Personal Data */}
              <section id="security" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Security of Your Personal Data
                </h2>
                <div className="bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <FaLock className="text-3xl text-primary-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">
                      The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>
              </section>

              {/* Detailed Information on Processing */}
              <section id="processing" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Detailed Information on the Processing of Your Personal Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Service Providers have access to Your Personal Data only to perform their tasks on Our behalf and are obligated not to disclose or use it for any other purpose.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use third-party Service providers to monitor and analyze the use of our Service.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Firebase</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Firebase is an analytics service provided by Google Inc.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: <a href="https://policies.google.com/privacy?hl=en" className="text-primary-600 hover:text-primary-700 font-semibold" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=en</a>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We also encourage you to review the Google's policy for safeguarding your data: <a href="https://support.google.com/analytics/answer/6004245" className="text-primary-600 hover:text-primary-700 font-semibold" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245</a>
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advertising</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may use Service providers to show advertisements to You to help support and maintain Our Service.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Important:</strong> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">AdMob by Google</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    AdMob by Google is provided by Google Inc.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You can opt-out from the AdMob by Google service by following the instructions described by Google: <a href="https://support.google.com/ads/answer/2662922?hl=en" className="text-primary-600 hover:text-primary-700 font-semibold" target="_blank" rel="noopener noreferrer">https://support.google.com/ads/answer/2662922?hl=en</a>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    For more information on how Google uses the collected information, please visit: <a href="https://policies.google.com/privacy" className="text-primary-600 hover:text-primary-700 font-semibold" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Email Marketing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may use Your Personal Data to contact You with newsletters, marketing or promotional materials and other information that may be of interest to You. You may opt-out of receiving any, or all, of these communications from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us.
                </p>
              </section>

              {/* CCPA Privacy */}
              <section id="ccpa" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  CCPA Privacy
                </h2>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Rights under the CCPA</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under this Privacy Policy, and by law if You are a resident of California, You have the following rights:
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: 'The right to notice', desc: 'You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.' },
                    { title: 'The right to access / the right to request', desc: 'The CCPA permits You to request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months by the Company or its subsidiaries to a third-party for the third party\'s direct marketing purposes.' },
                    { title: 'The right to say no to the sale of Personal Data', desc: 'You also have the right to ask the Company not to sell Your Personal Data to third parties. You can submit such a request by visiting our "Do Not Sell My Personal Information" section or web page.' },
                    { title: 'The right to know about Your Personal Data', desc: 'You have the right to request and obtain from the Company information regarding the disclosure of Personal Data categories, sources, purposes, third parties, and specific pieces collected.' },
                    { title: 'The right to delete Personal Data', desc: 'You also have the right to request the deletion of Your Personal Data that have been collected in the past 12 months.' },
                    { title: 'The right not to be discriminated against', desc: 'You have the right not to be discriminated against for exercising any of Your Consumer\'s rights.' }
                  ].map((item, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Exercising Your CCPA Data Protection Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In order to exercise any of Your rights under the CCPA, and if you are a California resident, You can email or call us or visit our "Do Not Sell My Personal Information" section or web page. The Company will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Do Not Sell My Personal Information</h3>
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 mb-4">
                  <p className="text-gray-700 leading-relaxed mb-3 font-semibold">
                    We do not sell personal information.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    However, the Service Providers we partner with (for example, our advertising partners) may use technology on the Service that "sells" personal information as defined by the CCPA law. If you wish to opt out of the use of your personal information for interest-based advertising purposes and these potential sales as defined under CCPA law, you may do so by following the instructions below.
                  </p>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Website</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You can opt out of receiving ads that are personalized as served by our Service Providers by following our instructions presented on the Service through our various opt-out notices and banners.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">Mobile Devices</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Your mobile device may give you the ability to opt out of the use of information about the apps you use in order to serve you ads that are targeted to your interests:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                  <div className="flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-700">"Opt out of Interest-Based Ads" or "Opt out of Ads Personalization" on Android devices</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-gray-700">"Limit Ad Tracking" on iOS devices</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You can also stop the collection of location information from Your mobile device by changing the preferences on your mobile device.
                </p>
              </section>

              {/* Do Not Track Policy */}
              <section id="do-not-track" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  "Do Not Track" Policy as Required by California Online Privacy Protection Act (CalOPPA)
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our Service does not respond to Do Not Track signals.
                  </p>
                  <p>
                    However, some third party websites do keep track of You browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section id="children" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Children's Privacy
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded">
                    <p className="font-semibold text-red-900 mb-2">
                      Our Service does not address anyone under the age of 13.
                    </p>
                    <p className="text-gray-700">
                      We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                    </p>
                  </div>
                  <p>
                    We also may limit how We collect, use, and store some of the information of Users between 13 and 18 years old. In some cases, this means We will be unable to provide certain functionality of the Service to these users.
                  </p>
                  <p>
                    If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
                  </p>
                </div>
              </section>

              {/* Links to Other Websites */}
              <section id="links" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Links to Other Websites
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                  </p>
                  <p>
                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                  </p>
                </div>
              </section>

              {/* Changes to Privacy Policy */}
              <section id="changes" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Changes to this Privacy Policy
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                  </p>
                  <p>
                    We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact" className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, You can contact us:
                </p>
                
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaUserShield className="text-primary-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-900">By email:</p>
                      <a href="mailto:info@fastpayet.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                        info@fastpayet.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShieldAlt className="text-primary-600 text-xl" />
                    <div>
                      <p className="font-semibold text-gray-900">Website:</p>
                      <a href="https://www.fastpayet.com/" className="text-primary-600 hover:text-primary-700 font-semibold" target="_blank" rel="noopener noreferrer">
                        https://www.fastpayet.com/
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Questions About Your Privacy?</h3>
                <p className="text-primary-100 mb-6">
                  We're committed to protecting your privacy. Contact us if you have any concerns.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
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

export default Privacy

