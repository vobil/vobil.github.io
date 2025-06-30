import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import AIAgentDiscovery from './components/AIAgentDiscovery';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import Pricing from './components/Pricing';
import DeveloperResources from './components/DeveloperResources';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <Hero />
      <UseCases />
      <AIAgentDiscovery />
      <TechnicalCapabilities />
      <Pricing />
      <DeveloperResources />
      <SocialProof />
      <Footer />
    </div>
  );
}

export default App;