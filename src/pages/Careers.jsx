import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCode,
  FaChartLine,
  FaCogs,
  FaUsers,
  FaGraduationCap,
  FaDollarSign,
  FaArrowRight
} from 'react-icons/fa'

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  const departments = [
    { name: 'All', icon: <FaBriefcase />, color: 'primary' },
    { name: 'Engineering', icon: <FaCode />, color: 'blue' },
    { name: 'Finance', icon: <FaDollarSign />, color: 'green' },
    { name: 'Operations', icon: <FaCogs />, color: 'purple' },
    { name: 'Business', icon: <FaChartLine />, color: 'orange' },
    { name: 'Other', icon: <FaUsers />, color: 'gray' }
  ]

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

  const filteredJobs = selectedDepartment === 'All' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedDepartment)

  const getDepartmentColor = (dept) => {
    const department = departments.find(d => d.name === dept)
    return department?.color || 'gray'
  }

  const getColorClass = (color) => {
    const colors = {
      blue: '#3b82f6',
      green: '#10b981',
      purple: '#8b5cf6',
      orange: '#f59e0b',
      gray: '#6b7280'
    }
    return colors[color] || '#2563eb'
  }

  return (
    <div className="pt-16">
      {/* Hero Section - More Compact */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <FaBriefcase className="text-3xl text-primary-600" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              Join Our <span className="text-primary-600">Mission</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Transform cross-border payments. Build the future of remittance technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Remote-Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Competitive Salary</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">Growth Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Filter - Compact */}
      <section className="py-4 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <motion.button
                key={dept.name}
                onClick={() => setSelectedDepartment(dept.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedDepartment === dept.name
                    ? 'text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={selectedDepartment === dept.name ? {
                  backgroundColor: getColorClass(dept.color)
                } : {}}
              >
                <span className="text-base">{dept.icon}</span>
                <span>{dept.name}</span>
                {dept.name !== 'All' && (
                  <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${
                    selectedDepartment === dept.name
                      ? 'bg-white/20'
                      : 'bg-gray-200'
                  }`}>
                    {jobListings.filter(job => job.department === dept.name).length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings - Compact Cards */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-primary-600">{filteredJobs.length}</span> open position{filteredJobs.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/careers/${job.id}`}>
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col group cursor-pointer">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-3">
                      <span 
                        className="px-2.5 py-1 rounded-full text-xs font-bold text-white"
                        style={{
                          backgroundColor: getColorClass(getDepartmentColor(job.department))
                        }}
                      >
                        {job.department}
                      </span>
                      <span className="text-xs text-gray-500">{job.posted}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {job.title}
                    </h3>

                    {/* Info Tags */}
                    <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt className="text-primary-600" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaClock className="text-primary-600" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FaGraduationCap className="text-primary-600" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    {/* Salary */}
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-green-600">{job.salary}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">
                      {job.description}
                    </p>

                    {/* View Details Button */}
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                        View Details
                      </span>
                      <FaArrowRight className="text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-5xl mb-3">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-600 text-sm">Check back soon for new opportunities!</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Join Us - Compact */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Why Join FastPay?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <FaChartLine className="text-3xl" />,
                title: 'Growth & Impact',
                description: 'Work on cutting-edge fintech solutions that impact thousands of families'
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: 'Collaborative Culture',
                description: 'Join a diverse, passionate team that values innovation'
              },
              {
                icon: <FaGraduationCap className="text-3xl" />,
                title: 'Career Development',
                description: 'Benefits, training programs, and clear advancement paths'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-3 text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Don't See the Perfect Role?
            </h2>
            <p className="text-base text-primary-100 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's talk!
            </p>
            <a
              href="mailto:careers@fastpay.com"
              className="inline-block bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers
