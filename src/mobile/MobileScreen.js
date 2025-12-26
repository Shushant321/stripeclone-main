import React from 'react';

const MobileScreen = ({ screen, isActive }) => {
  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-80 h-[640px] bg-black rounded-[2rem] p-1 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          
          {/* Screen Content */}
          <div className={`h-full flex flex-col items-center justify-center p-8 transition-all duration-700 ${
            isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            
            {/* Icon with ripple effect */}
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping opacity-20"></div>
              <div className="absolute inset-2 rounded-full bg-blue-300 animate-ping opacity-30 animation-delay-200"></div>
              <div className={`relative w-20 h-20 ${screen.color} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg transform transition-all duration-500 ${
                isActive ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
              }`}>
                {screen.icon}
              </div>
            </div>

            {/* Title */}
            <h2 className={`text-2xl font-bold text-gray-800 text-center mb-3 transition-all duration-500 ${
              isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              {screen.title}
            </h2>

            {/* Subtitle */}
            <p className={`text-gray-500 text-center transition-all duration-700 delay-200 ${
              isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              {screen.subtitle}
            </p>

            {/* Progress dots */}
            <div className={`flex space-x-2 mt-12 transition-all duration-700 delay-300 ${
              isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Side buttons */}
          <div className="absolute right-0 top-20 w-1 h-12 bg-gray-800 rounded-l-sm"></div>
          <div className="absolute right-0 top-36 w-1 h-8 bg-gray-800 rounded-l-sm"></div>
          <div className="absolute right-0 top-48 w-1 h-8 bg-gray-800 rounded-l-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileScreen;