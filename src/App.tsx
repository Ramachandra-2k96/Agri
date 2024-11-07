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
import { SoilHealth } from './pages/dashboard/SoilHealth';
import { CommunityUpdates } from './pages/dashboard/CommunityUpdates';
import { WeatherInsights } from './pages/dashboard/WeatherInsights';
import { YieldPredictions } from './pages/dashboard/YieldPredictions';
import { MarketplacePage } from './pages/dashboard/Market';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/community" element={<><Navbar /><Community /><Footer /></>} />
        <Route path="/resources" element={<><Navbar /><Resources /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={
            <> 
            <Overview />
            <YieldPredictions/>
            </>} />
          <Route path="soil" element={<SoilHealth />} />
          <Route path="community" element={<CommunityUpdates />} />
          <Route path="weather" element={<WeatherInsights />} />
          <Route path="market" element={<MarketplacePage />} />
          {/* Add other dashboard routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;