import React, { useState, useEffect } from 'react';
import MobileScreen from './MobileScreen';

const MobileApp = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      id: 1,
      icon: "🌐",
      title: "Cross-Border Operations",
      subtitle: "More than just transactions",
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: "💳",
      title: "Payment Processing",
      subtitle: "Seamless global payments",
      color: "bg-purple-500"
    },
    {
      id: 3,
      icon: "🔒",
      title: "Secure Transactions",
      subtitle: "Bank-level security",
      color: "bg-green-500"
    },
    {
      id: 4,
      icon: "📊",
      title: "Analytics Dashboard",
      subtitle: "Real-time insights",
      color: "bg-orange-500"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const newScreen = Math.floor(scrollY / (screenHeight * 0.3));
      setCurrentScreen(Math.min(newScreen, screens.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [screens.length]);

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mobile Experience
          </h1>
          <p className="text-gray-600 text-lg">
            Scroll down to see different screens emerge
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <MobileScreen 
              screen={screens[currentScreen]} 
              isActive={true}
            />
            
            {/* Progress dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {screens.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentScreen 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Spacer for scroll effect */}
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default MobileApp;