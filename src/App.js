import React from 'react';
import Header from './components/Header';
import ProblemSection from './components/ProblemSection';
import PlatformLayers from './components/PlatformLayers';
import SolutionOverview from './components/SolutionOverview';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import ComparisonSection from './components/ComparisonSection';
import ModularSolutions from './components/ModularSolutions';
import BackgroundElements from './components/BackgroundElements';
import EnhancedMobileDemo from './mobile/EnhancedMobileDemo';
import './mobile/mobile.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white relative">
      
      {/* Enhanced Mobile Demo Section - Front Page */}
      <EnhancedMobileDemo />
      
      <div className="max-w-7xl mx-auto px-10 py-16 relative z-10">
        {/* <Header />*/}
        {/* <ProblemSolutionSection /> */}
        {/* <ProblemSection /> */}
        {/* <PlatformLayers />
        <SolutionOverview />
        <HowItWorks /> */}
        {/* <PricingSection />
        <ComparisonSection />
        <ModularSolutions /> */}
      </div>
    </div>
  );
};

export default App;