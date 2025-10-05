import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaArrowLeft,
  FaMapMarkerAlt, 
  FaClock, 
  FaGraduationCap,
  FaDollarSign,
  FaBriefcase,
  FaCheckCircle,
  FaShareAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaExternalLinkAlt,
  FaUsers,
  FaLightbulb,
  FaHeart
} from 'react-icons/fa'
import { useState } from 'react'
import ApplicationModal from '../components/ApplicationModal'

const CareerDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [showApplicationModal, setShowApplicationModal] = useState(false)

  // Job data (in real app, this would come from API or context)
  const jobListings = [
    {
      id: 1,
      title: 'Principal Software Engineer',
      department: 'Engineering',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      experience: '6+ years',
      salary: 'Competitive Package',
      description: 'Lead the design, architecture, and technical direction of FastPay\'s financial systems. Mentor engineers and drive best practices.',
      fullDescription: `The Principal Software Engineer leads the design, architecture, and technical direction of FastPay's financial systems, ensuring scalability, reliability, and compliance across all payment channels. This role acts as a hands-on technical leader — mentoring engineers, reviewing designs, and driving the adoption of best practices in software architecture, cloud, security, and integration with partner ecosystems such as payment gateway, and Ethiopian banks.

This role is pivotal to achieving FastPay's vision of becoming the most reliable digital financial infrastructure provider in Ethiopia and beyond.`,
      responsibilities: [
        'Define and own the technical architecture for FastPay\'s platforms — wallet, payment gateway, remittance, and core banking integrations',
        'Ensure systems are modular, scalable, secure, and fault-tolerant, leveraging microservices and event-driven design',
        'Design high-availability architectures for payment transaction processing, settlement, and reconciliation systems',
        'Serve as the technical authority for engineering teams, conducting architecture and code reviews',
        'Set coding standards, CI/CD practices, and DevOps guidelines across all services',
        'Design and oversee secure, high-throughput APIs for internal and external integrations',
        'Guide the engineering team on Kubernetes-based deployments, CI/CD pipelines, and infrastructure automation',
        'Work closely with compliance and InfoSec teams to ensure all platforms align with PCI DSS and regulatory standards',
        'Mentor senior and mid-level engineers through pair programming, design sessions, and knowledge sharing',
        'Collaborate with product management and leadership to define the technical roadmap',
        'Establish and enforce automated testing frameworks, continuous quality gates, and performance benchmarks'
      ],
      requirements: [
        'Bachelor\'s or Master\'s degree in Computer Science, Software Engineering, or related field',
        '6+ years of progressive software development experience, with at least 3 years in a principal or lead engineering capacity',
        'Proven experience designing and building large-scale distributed systems in FinTech, banking, or payments',
        'Proficiency in Java/Spring Boot, Node.js, Kotlin, or Go',
        'Strong knowledge of microservices, Kafka, RabbitMQ, and RESTful APIs',
        'Deep understanding of cloud infrastructure (AWS/GCP), DevOps practices, and CI/CD automation',
        'Strong knowledge of secure payment and integration protocols (ISO 8583, REST, SOAP)',
        'Excellent communication, documentation, and cross-team collaboration skills'
      ],
      niceToHave: [
        'Experience with Kubernetes, Terraform, and Helm',
        'Knowledge of PCI DSS compliance and payment security standards',
        'Experience with event-driven architectures and message queues',
        'Familiarity with AI-driven fraud detection systems',
        'Experience working with Ethiopian banking systems and regulations',
        'Contributions to open-source projects'
      ],
      benefits: [
        'Competitive salary package based on experience',
        'Health insurance coverage',
        'Professional development and training opportunities',
        'Leadership role with strategic impact',
        'Work on cutting-edge financial technology',
        'Collaborative and innovation-driven environment',
        'Career growth opportunities within FastPay',
        'Performance-based bonuses'
      ],
      posted: '1 day ago'
    },
    {
      id: 2,
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote / Maryland, USA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $160K',
      description: 'Build and scale our money transfer platform serving thousands of customers. Work with React, Node.js, and cloud infrastructure.',
      fullDescription: `We're looking for an experienced Full Stack Engineer to join our growing engineering team. You'll play a key role in building and scaling our money transfer platform that serves thousands of customers daily.

In this role, you'll work on both frontend and backend systems, designing and implementing features that directly impact our users' experience. You'll collaborate with product managers, designers, and other engineers to deliver high-quality solutions.`,
      responsibilities: [
        'Design, develop, and maintain scalable web applications using React and Node.js',
        'Build RESTful APIs and microservices for our payment processing system',
        'Collaborate with the team to define and implement new features',
        'Write clean, maintainable, and well-tested code',
        'Optimize application performance and ensure high availability',
        'Participate in code reviews and mentor junior engineers',
        'Work with cloud infrastructure (AWS/GCP) and containerization technologies'
      ],
      requirements: [
        'Proficient in React, Node.js, and modern JavaScript/TypeScript',
        'Experience with cloud platforms (AWS/GCP/Azure)',
        'Strong understanding of API design and microservices architecture',
        'Experience with relational and NoSQL databases',
        'Familiarity with CI/CD pipelines and DevOps practices',
        'Excellent problem-solving and communication skills',
        'Fintech or payment systems experience preferred'
      ],
      niceToHave: [
        'Experience with Kubernetes and Docker',
        'Knowledge of payment gateway integrations',
        'Contributions to open-source projects',
        'Experience with real-time systems (WebSockets, messaging queues)'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Health, dental, and vision insurance',
        'Flexible work arrangements (remote-friendly)',
        '401(k) with company match',
        'Professional development budget',
        'Generous PTO and paid holidays',
        'Latest tech equipment and tools'
      ],
      posted: '2 days ago'
    },
    {
      id: 3,
      title: 'Financial Compliance Analyst',
      department: 'Finance',
      location: 'Maryland, USA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80K - $110K',
      description: 'Ensure regulatory compliance with BSA, AML, and international money transfer regulations.',
      fullDescription: `Join our compliance team to ensure FastPay operates in full accordance with federal and state regulations. You'll be responsible for monitoring transactions, conducting investigations, and maintaining our compliance programs.

This role is critical to our operations and requires someone with strong analytical skills and attention to detail.`,
      responsibilities: [
        'Monitor and review transactions for suspicious activity',
        'Conduct enhanced due diligence on high-risk customers',
        'File Suspicious Activity Reports (SARs) with FinCEN',
        'Maintain and update AML/BSA compliance policies',
        'Conduct internal audits and compliance assessments',
        'Provide compliance training to staff members',
        'Stay current with regulatory changes and industry best practices'
      ],
      requirements: [
        'Strong knowledge of BSA/AML regulations and FinCEN requirements',
        'Experience in fintech, banking, or money services business',
        'Excellent analytical and reporting skills',
        'Strong attention to detail and organizational abilities',
        'Ability to work independently and manage multiple priorities',
        'Proficiency in compliance software and data analysis tools'
      ],
      niceToHave: [
        'CAMS (Certified Anti-Money Laundering Specialist) certification',
        'Experience with international remittance regulations',
        'Knowledge of OFAC sanctions programs',
        'Bilingual (English/Amharic) skills'
      ],
      benefits: [
        'Competitive salary and performance bonuses',
        'Comprehensive health benefits',
        'Hybrid work schedule',
        'Professional certification support',
        'Retirement savings plan',
        'Paid time off and sick leave',
        'Career advancement opportunities'
      ],
      posted: '1 week ago'
    },
    {
      id: 4,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Maryland, USA / Hybrid',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90K - $120K',
      description: 'Lead our operations team to ensure smooth transaction processing and excellent customer support.',
      fullDescription: `We're seeking an experienced Operations Manager to lead our day-to-day operations and ensure seamless service delivery. You'll manage a team of operations specialists and customer support agents while optimizing processes for efficiency.

The ideal candidate has strong leadership skills and experience in financial services operations.`,
      responsibilities: [
        'Lead and manage the operations team (15+ staff members)',
        'Oversee daily transaction processing and reconciliation',
        'Develop and implement operational procedures and workflows',
        'Monitor KPIs and implement improvements to meet targets',
        'Manage relationships with partner banks and agents',
        'Handle escalated customer issues and complex cases',
        'Coordinate with compliance, finance, and technology teams',
        'Prepare operational reports for senior management'
      ],
      requirements: [
        'Proven operations management experience in financial services',
        'Strong leadership and team management skills',
        'Experience with process optimization and workflow automation',
        'Excellent problem-solving and decision-making abilities',
        'Strong communication and interpersonal skills',
        'Ability to work in a fast-paced, dynamic environment',
        'Knowledge of remittance operations preferred'
      ],
      niceToHave: [
        'Six Sigma or Lean certification',
        'Experience with CRM and operations management software',
        'Bilingual capabilities',
        'Background in international money transfers'
      ],
      benefits: [
        'Leadership role with growth potential',
        'Competitive salary and performance incentives',
        'Health and wellness benefits',
        'Flexible hybrid work model',
        'Professional development opportunities',
        'Team building activities and events',
        'Generous PTO policy'
      ],
      posted: '3 days ago'
    },
    {
      id: 5,
      title: 'Business Development Manager',
      department: 'Business',
      location: 'Remote / Travel Required',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$100K - $140K + Commission',
      description: 'Drive growth by building partnerships with banks, agents, and financial institutions.',
      fullDescription: `FastPay is expanding its network, and we need a dynamic Business Development Manager to drive our growth strategy. You'll be responsible for identifying, negotiating, and closing partnership deals with banks, agents, and other financial institutions.

This role requires travel to Ethiopia and within the United States to meet with potential partners and strengthen existing relationships.`,
      responsibilities: [
        'Identify and develop new business opportunities and partnerships',
        'Negotiate contracts and agreements with banks and agents',
        'Build and maintain relationships with key stakeholders',
        'Conduct market research and competitive analysis',
        'Develop and execute strategic business development plans',
        'Represent FastPay at industry events and conferences',
        'Collaborate with operations and product teams on partner integration',
        'Track and report on business development metrics'
      ],
      requirements: [
        'Strong business development and negotiation skills',
        'Experience in financial services, fintech, or payments industry',
        'Excellent communication and presentation abilities',
        'Proven track record of meeting or exceeding sales targets',
        'Willingness to travel domestically and internationally (30-40%)',
        'Strong understanding of remittance and cross-border payments',
        'Self-motivated with entrepreneurial mindset'
      ],
      niceToHave: [
        'Existing network in Ethiopian banking sector',
        'Bilingual (English/Amharic)',
        'MBA or relevant advanced degree',
        'Experience with international business development'
      ],
      benefits: [
        'Competitive base salary plus commission',
        'Travel allowances and expenses covered',
        'Health and insurance benefits',
        'Flexible remote work',
        'Professional development support',
        'Performance-based bonuses',
        'Stock options'
      ],
      posted: '5 days ago'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110K - $150K',
      description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems.',
      fullDescription: `We're looking for a skilled DevOps Engineer to manage and optimize our cloud infrastructure. You'll be responsible for ensuring high availability, security, and scalability of our payment processing platform.

In this role, you'll work closely with the engineering team to automate deployments, monitor system health, and implement best practices for infrastructure management.`,
      responsibilities: [
        'Design and maintain cloud infrastructure on AWS/GCP',
        'Build and optimize CI/CD pipelines',
        'Implement infrastructure as code using Terraform/CloudFormation',
        'Set up monitoring, logging, and alerting systems',
        'Ensure security best practices and compliance requirements',
        'Manage containerization and orchestration (Docker, Kubernetes)',
        'Troubleshoot production issues and perform root cause analysis',
        'Document infrastructure architecture and procedures'
      ],
      requirements: [
        'Expert knowledge of AWS or GCP cloud platforms',
        'Experience with Kubernetes, Docker, and container orchestration',
        'Strong scripting skills (Python, Bash, or similar)',
        'Proficiency with Infrastructure as Code (Terraform, Ansible)',
        'Experience with CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
        'Knowledge of security best practices and compliance',
        'Strong problem-solving and troubleshooting skills'
      ],
      niceToHave: [
        'AWS/GCP certification',
        'Experience with payment systems or fintech',
        'Knowledge of service mesh technologies',
        'Experience with observability tools (Prometheus, Grafana, ELK)'
      ],
      benefits: [
        'Fully remote position',
        'Competitive salary and equity',
        'Latest tools and technology',
        'Health and dental coverage',
        'Home office stipend',
        'Professional certification support',
        'Flexible work hours'
      ],
      posted: '1 week ago'
    },
    {
      id: 7,
      title: 'Customer Success Specialist',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$50K - $70K',
      description: 'Provide exceptional support to our customers and help them navigate our money transfer services.',
      fullDescription: `Join our customer success team to provide world-class support to FastPay customers. You'll be the first point of contact for customers, helping them with their transactions and resolving any issues they encounter.

We're looking for someone with excellent communication skills and a genuine passion for helping people.`,
      responsibilities: [
        'Respond to customer inquiries via phone, email, and chat',
        'Assist customers with account setup and transactions',
        'Troubleshoot and resolve customer issues efficiently',
        'Document customer interactions in CRM system',
        'Escalate complex issues to appropriate teams',
        'Identify and suggest process improvements',
        'Maintain high customer satisfaction ratings',
        'Stay updated on product features and company policies'
      ],
      requirements: [
        'Excellent communication and interpersonal skills',
        'Strong problem-solving abilities',
        'Customer service experience (2+ years)',
        'Ability to work in a fast-paced environment',
        'Proficiency with CRM and support software',
        'Detail-oriented with strong organizational skills',
        'Bilingual (English/Amharic) preferred'
      ],
      niceToHave: [
        'Experience in fintech or financial services',
        'Knowledge of money transfer processes',
        'Additional language skills',
        'Previous remote work experience'
      ],
      benefits: [
        'Work from home opportunity',
        'Competitive salary',
        'Health insurance benefits',
        'Paid training program',
        'Career growth opportunities',
        'Flexible scheduling',
        'Employee assistance program'
      ],
      posted: '4 days ago'
    },
    {
      id: 8,
      title: 'Data Analyst',
      department: 'Business',
      location: 'Remote / Maryland',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$85K - $115K',
      description: 'Analyze transaction data, customer behavior, and market trends to drive strategic decisions.',
      fullDescription: `We're seeking a Data Analyst to help us make data-driven decisions across the organization. You'll work with large datasets to uncover insights, build dashboards, and support various teams with analytics needs.

The ideal candidate has strong SQL skills and experience with data visualization tools.`,
      responsibilities: [
        'Analyze transaction data and customer behavior patterns',
        'Build and maintain dashboards and reports',
        'Conduct ad-hoc analyses to support business decisions',
        'Identify trends, anomalies, and opportunities',
        'Collaborate with product, operations, and marketing teams',
        'Develop predictive models for fraud detection and risk assessment',
        'Present findings and recommendations to stakeholders',
        'Ensure data quality and integrity'
      ],
      requirements: [
        'Strong SQL and database querying skills',
        'Experience with Python or R for data analysis',
        'Proficiency with BI tools (Tableau, Power BI, Looker)',
        'Statistical analysis and data modeling experience',
        'Excellent analytical and critical thinking skills',
        'Strong communication and presentation abilities',
        'Financial services experience is a plus'
      ],
      niceToHave: [
        'Machine learning knowledge',
        'Experience with big data technologies (Spark, Hadoop)',
        'Knowledge of payment systems and fraud analytics',
        'Advanced degree in Statistics, Data Science, or related field'
      ],
      benefits: [
        'Competitive salary and bonuses',
        'Remote or hybrid work options',
        'Health and wellness benefits',
        'Learning and development budget',
        'Latest data tools and technologies',
        '401(k) matching',
        'Collaborative team environment'
      ],
      posted: '6 days ago'
    },
    {
      id: 9,
      title: 'Product Manager',
      department: 'Business',
      location: 'Maryland, USA / Hybrid',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $160K',
      description: 'Define product strategy and roadmap for our money transfer platform.',
      fullDescription: `We're looking for an experienced Product Manager to lead the development of our payment platform. You'll work cross-functionally with engineering, design, operations, and business teams to define and execute the product roadmap.

The ideal candidate has a strong technical background and experience in fintech or payments.`,
      responsibilities: [
        'Define and communicate product vision and strategy',
        'Develop and maintain product roadmap',
        'Gather and prioritize requirements from stakeholders',
        'Write detailed user stories and specifications',
        'Work closely with engineering team on feature development',
        'Conduct user research and usability testing',
        'Analyze product metrics and user feedback',
        'Make data-driven decisions to improve product performance',
        'Coordinate product launches and releases'
      ],
      requirements: [
        'Proven product management experience (5+ years)',
        'Strong technical background and understanding',
        'Excellent stakeholder management skills',
        'Experience with agile development methodologies',
        'Strong analytical and problem-solving abilities',
        'Excellent communication and leadership skills',
        'Fintech or payment systems experience preferred'
      ],
      niceToHave: [
        'MBA or technical degree',
        'Experience with mobile app development',
        'Knowledge of payment processing and compliance',
        'Background in user experience design'
      ],
      benefits: [
        'Leadership role with strategic impact',
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Hybrid work model',
        'Professional development opportunities',
        'Collaborative work environment',
        'Innovation-focused culture'
      ],
      posted: '1 week ago'
    }
  ]

  const job = jobListings.find(j => j.id === parseInt(id))

  if (!job) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <Link to="/careers" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Back to Careers
          </Link>
        </div>
      </div>
    )
  }

  const getDepartmentColor = (dept) => {
    const colors = {
      'Engineering': '#3b82f6',
      'Finance': '#10b981',
      'Operations': '#8b5cf6',
      'Business': '#f59e0b',
      'Other': '#6b7280'
    }
    return colors[dept] || '#2563eb'
  }

  const handleShare = (platform) => {
    const jobUrl = window.location.href
    const text = `Check out this job opportunity at FastPay: ${job.title}`
    
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(jobUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${text}\n\n${jobUrl}`)}`
    }

    if (platform === 'copy') {
      navigator.clipboard.writeText(jobUrl)
      alert('Link copied to clipboard!')
      setShowShareMenu(false)
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
      setShowShareMenu(false)
    }
  }

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/careers')}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors mb-4"
          >
            <FaArrowLeft />
            <span className="font-medium">Back to All Jobs</span>
          </button>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm p-8 mb-6"
            >
              {/* Job Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: getDepartmentColor(job.department) }}
                  >
                    {job.department}
                  </span>
                  <span className="text-sm text-gray-500">{job.posted}</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {job.title}
                </h1>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-primary-600" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock className="text-primary-600" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaGraduationCap className="text-primary-600" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <FaDollarSign className="text-green-600 text-xl" />
                  <span className="text-xl font-bold text-green-600">{job.salary}</span>
                </div>
              </div>

              {/* About the Role */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaBriefcase className="mr-3 text-primary-600" />
                  About the Role
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {job.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaCheckCircle className="mr-3 text-primary-600" />
                  Key Responsibilities
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-xl p-6">
                  <ul className="space-y-4">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start pl-4">
                        <div className="mt-1.5 mr-4 flex-shrink-0">
                          <div className="w-2.5 h-2.5 bg-primary-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaUsers className="mr-3 text-primary-600" />
                  Requirements
                </h2>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <ul className="space-y-4">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start pl-4">
                        <FaCheckCircle className="text-green-500 mr-4 mt-1 flex-shrink-0 text-lg" />
                        <span className="text-gray-700 leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Nice to Have */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaLightbulb className="mr-3 text-primary-600" />
                  Nice to Have
                </h2>
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-dashed border-amber-200">
                  <ul className="space-y-4">
                    {job.niceToHave.map((item, idx) => (
                      <li key={idx} className="flex items-start pl-4">
                        <div className="mt-1.5 mr-4 flex-shrink-0">
                          <div className="w-2.5 h-2.5 bg-amber-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FaHeart className="mr-3 text-primary-600" />
                  Benefits & Perks
                </h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {job.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start p-3 bg-green-50 rounded-lg">
                      <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Apply Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm p-6 mb-6"
              >
                <button 
                  onClick={() => setShowApplicationModal(true)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mb-4"
                >
                  Apply for this Position
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2"
                  >
                    <FaShareAlt />
                    <span>Share this Job</span>
                  </button>

                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <FaLinkedin className="text-blue-600 text-2xl mb-1" />
                          <span className="text-xs text-gray-600">LinkedIn</span>
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <FaTwitter className="text-blue-400 text-2xl mb-1" />
                          <span className="text-xs text-gray-600">Twitter</span>
                        </button>
                        <button
                          onClick={() => handleShare('facebook')}
                          className="flex flex-col items-center p-3 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <FaFacebook className="text-blue-700 text-2xl mb-1" />
                          <span className="text-xs text-gray-600">Facebook</span>
                        </button>
                        <button
                          onClick={() => handleShare('email')}
                          className="flex flex-col items-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <FaEnvelope className="text-gray-600 text-2xl mb-1" />
                          <span className="text-xs text-gray-600">Email</span>
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="col-span-2 flex items-center justify-center space-x-2 p-3 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <FaExternalLinkAlt className="text-gray-600" />
                          <span className="text-sm text-gray-600">Copy Link</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 mb-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Department</span>
                    <span className="font-semibold text-gray-900">{job.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employment Type</span>
                    <span className="font-semibold text-gray-900">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience Level</span>
                    <span className="font-semibold text-gray-900">{job.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posted</span>
                    <span className="font-semibold text-gray-900">{job.posted}</span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">Questions?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about this role? Reach out to our recruiting team.
                </p>
                <a
                  href="mailto:careers@fastpay.com"
                  className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center space-x-2"
                >
                  <FaEnvelope />
                  <span>careers@fastpay.com</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Similar Jobs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-7xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Positions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {jobListings
              .filter(j => j.id !== job.id && j.department === job.department)
              .slice(0, 3)
              .map((similarJob) => (
                <Link key={similarJob.id} to={`/careers/${similarJob.id}`}>
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full group">
                    <span 
                      className="inline-block px-2.5 py-1 rounded-full text-xs font-bold text-white mb-3"
                      style={{ backgroundColor: getDepartmentColor(similarJob.department) }}
                    >
                      {similarJob.department}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {similarJob.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{similarJob.location}</p>
                    <p className="text-sm font-semibold text-green-600">{similarJob.salary}</p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        jobTitle={job.title}
        jobId={job.id}
        department={job.department}
      />
    </div>
  )
}

export default CareerDetail

