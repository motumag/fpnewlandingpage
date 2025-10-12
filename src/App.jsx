import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Careers from './pages/Careers'
import CareerDetail from './pages/CareerDetail'
import ServiceGuide from './pages/ServiceGuide'
import Agent from './pages/Agent'
import AgentOnboarding from './pages/AgentOnboarding'
import ContactUs from './pages/ContactUs'
import FAQs from './pages/FAQs'
import Donations from './pages/Donations'
import Login from './pages/Login'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Compliance from './pages/Compliance'
import LeadershipTeam from './pages/LeadershipTeam'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:id" element={<CareerDetail />} />
          <Route path="/services/:serviceId" element={<ServiceGuide />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/agent-onboarding" element={<AgentOnboarding />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/leadership" element={<LeadershipTeam />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App


