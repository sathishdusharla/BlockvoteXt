import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import VoterLogin from './pages/VoterLogin';
import VoterRegistration from './pages/VoterRegistration';
import AdminLogin from './pages/AdminLogin';
import Voting from './pages/Voting';
import Results from './pages/Results';
import VoterDashboard from './pages/VoterDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ConductElections from './pages/ConductElections';
import AddAdmin from './pages/AddAdmin'; // Import AddAdmin
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import PrivacyPolicy

// Admin route protection wrapper
const ProtectedAdminRoute = ({ children }: { children: JSX.Element }) => {
  const adminEmail = localStorage.getItem('adminEmail');
  if (!adminEmail) {
    return <Navigate to="/admin-login" />;
  }
  return children;
};

// Voter route protection wrapper
const ProtectedVoterRoute = ({ children }: { children: JSX.Element }) => {
  const voterEmail = localStorage.getItem('voterEmail');
  if (!voterEmail) {
    return <Navigate to="/voter-login" />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
          
          {/* Voter Routes */}
          <Route path="voter-login" element={<VoterLogin />} />
          <Route path="voter-registration" element={<VoterRegistration />} />
          <Route path="voting" element={<ProtectedVoterRoute><Voting /></ProtectedVoterRoute>} />
          <Route path="results" element={<ProtectedVoterRoute><Results /></ProtectedVoterRoute>} />
          <Route path="voter_dashboard" element={<ProtectedVoterRoute><VoterDashboard /></ProtectedVoterRoute>} />

          {/* Admin Routes */}
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="admin-dashboard" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
          <Route path="admin/conduct-elections" element={<ProtectedAdminRoute><ConductElections /></ProtectedAdminRoute>} />
          <Route path="admin/add-admin" element={<ProtectedAdminRoute><AddAdmin /></ProtectedAdminRoute>} />
          
          {/* Other Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
