import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Community } from './pages/Community';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Overview } from './pages/dashboard/Overview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="community" element={<Community />} />
                <Route path="resources" element={<Resources />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          }
        />
        
        {/* Auth routes */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* Dashboard routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          {/* Add other dashboard routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;