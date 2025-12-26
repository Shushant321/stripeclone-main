import React, { useState, useEffect, useRef } from 'react';

const EnhancedMobileDemo = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const screens = [
    {
      id: 1,
      type: "crossborder",
      title: "Cross-Border Operations",
      subtitle: "More than just transactions",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      type: "regulation",
      title: "Regulation tracker",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 3,
      type: "invoicing",
      title: "Manual processes",
      color: "from-red-500 to-red-600"
    },
    {
      id: 4,
      type: "reconciliation",
      title: "Fragmented systems",
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      type: "PAYMENTS",
      title: "Expensive, slow & opaque",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 6,
      type: "cashflow",
      title: "Financial overview",
      color: "from-blue-500 to-blue-600"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Simple scroll-based screen switching
      const screenIndex = Math.floor(scrollY / (windowHeight * 0.5));
      setCurrentScreen(Math.min(screenIndex, screens.length - 1));
      
      // Calculate progress for animations
      const progress = Math.min(scrollY / (windowHeight * screens.length), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [screens.length]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center min-h-screen">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Phone Frame with enhanced styling */}
            <div className="w-80 h-[640px] bg-black rounded-[3rem] p-1 shadow-2xl">
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-white"></div>
                
                {/* Screen Content */}
                <div className="h-full relative z-10">
                  {screens[currentScreen].type === 'crossborder' ? (
                    /* Cross-Border Operations Screen */
                    <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-50">
                      {/* Icon with ripple effect */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 rounded-full bg-blue-200 animate-ping opacity-20"></div>
                        <div className="absolute inset-2 rounded-full bg-blue-300 animate-ping opacity-30 animation-delay-200"></div>
                        <div className="relative w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <span className="text-blue-500 text-xl">🌐</span>
                            <span className="text-blue-500 text-sm ml-1">$</span>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
                        Cross-Border
                      </h2>
                      <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
                        Operations
                      </h2>

                      {/* Subtitle */}
                      <p className="text-gray-500 text-center mb-12">
                        More than just transactions
                      </p>

                      {/* Progress dots */}
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  ) : screens[currentScreen].type === 'regulation' ? (
                    /* Regulation Tracker Screen */
                    <div className="h-full p-6 bg-gray-50">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">COMPLIANCE</p>
                          <h2 className="text-xl font-semibold text-gray-800">Regulation tracker</h2>
                        </div>
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-500 text-xs">!</span>
                        </div>
                      </div>

                      {/* Tax Systems Card */}
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">⚖️</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-800 text-sm mb-1">12 jurisdictions, 12 tax systems</h3>
                            <p className="text-xs text-gray-600 mb-3">Different GST/VAT requirements per country</p>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <span className="bg-white px-2 py-1 rounded text-gray-700">IN 18%</span>
                              <span className="bg-white px-2 py-1 rounded text-gray-700">AE 5%</span>
                              <span className="bg-white px-2 py-1 rounded text-gray-700">GB 20%</span>
                              <span className="bg-white px-2 py-1 rounded text-gray-700">SG 8%</span>
                              <span className="bg-white px-2 py-1 rounded text-gray-700">AU 10%</span>
                              <span className="bg-white px-2 py-1 rounded text-gray-700">CA 13%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Regulatory Updates Card */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">🔄</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-800 text-sm mb-1">Constant regulatory updates</h3>
                            <p className="text-xs text-gray-600 mb-3">Avg 8 changes per month across markets</p>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                <div className="flex-1">
                                  <p className="text-xs font-medium text-gray-700">UAE VAT amendments</p>
                                  <p className="text-xs text-gray-500">Effective Jan 2025</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                <div className="flex-1">
                                  <p className="text-xs font-medium text-gray-700">India GST rate revision</p>
                                  <p className="text-xs text-gray-500">Effective Feb 2025</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className="flex-1">
                                  <p className="text-xs font-medium text-gray-700">UK Making Tax Digital update</p>
                                  <p className="text-xs text-gray-500">Effective Mar 2025</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Compliance Coverage */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Compliance coverage</span>
                          <span className="text-sm font-medium text-orange-600">68%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: '68%'}}></div>
                        </div>
                        <div className="flex items-center justify-between mt-2 text-xs">
                          <span className="text-green-600 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                            Covered: 8
                          </span>
                          <span className="text-red-600 flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                            At risk: 4
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : screens[currentScreen].type === 'invoicing' ? (
                    /* Manual Invoicing Screen */
                    <div className="h-full p-6 bg-gray-50">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">INVOICING</p>
                          <h2 className="text-xl font-semibold text-gray-800">Manual processes</h2>
                        </div>
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-500 text-xs">📄</span>
                        </div>
                      </div>

                      {/* Invoice Card */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <span className="text-blue-600 text-sm">📄</span>
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-800 text-sm">Acme Corp Ltd.</h3>
                              <p className="text-xs text-gray-500">Invoice #INV-2024-1023</p>
                            </div>
                          </div>
                          <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">Awaiting review</span>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Amount</span>
                            <span className="font-medium">$12,450.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Due date</span>
                            <span className="font-medium">Jan 10, 2025</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Location</span>
                            <span className="font-medium">Mumbai, India 🇮🇳</span>
                          </div>
                        </div>
                        <div className="flex items-center mt-3 text-xs text-gray-500">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                          Manual entry: 2.5 hours
                        </div>
                      </div>

                      {/* Tax Conflict Alert */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-sm">⚠️</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-800 text-sm mb-1">Cross-border tax conflict</h3>
                            <p className="text-xs text-gray-600 mb-3">GST/VAT rates require manual reconciliation</p>
                            <div className="grid grid-cols-3 gap-2 text-xs">
                              <div className="text-center">
                                <p className="text-gray-600">India</p>
                                <p className="font-medium">18%</p>
                              </div>
                              <div className="text-center">
                                <p className="text-gray-600">UAE</p>
                                <p className="font-medium">5%</p>
                              </div>
                              <div className="text-center">
                                <p className="text-gray-600">UK</p>
                                <p className="font-medium">20%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                            Pending invoices
                          </span>
                          <span className="font-medium">23</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                            Errors this week
                          </span>
                          <span className="font-medium">17</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            Hours spent/week
                          </span>
                          <span className="font-medium">42.5</span>
                        </div>
                      </div>
                    </div>
                  ) : screens[currentScreen].type === 'cashflow' ? (
                    /* Cash Flow Screen */
                    <div className="h-full p-6 bg-gray-50">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Cash Flow</p>
                          <h2 className="text-xl font-semibold text-gray-800">Financial overview</h2>
                        </div>
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-500 text-xs">📊</span>
                        </div>
                      </div>

                      {/* Outstanding Card */}
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600 flex items-center">
                            <span className="text-red-500 mr-1">↗</span>
                            Outstanding
                          </span>
                        </div>
                        <div className="mb-1">
                          <span className="text-2xl font-bold text-red-600">$1.2M</span>
                        </div>
                        <p className="text-xs text-gray-500">Across 47 invoices</p>
                      </div>

                      {/* Average Settlement Card */}
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600 flex items-center">
                            <span className="text-orange-500 mr-1">⏱</span>
                            Avg settlement
                          </span>
                        </div>
                        <div className="mb-1">
                          <span className="text-2xl font-bold text-orange-600">14 days</span>
                        </div>
                        <p className="text-xs text-gray-500">Industry avg: 7 days</p>
                      </div>

                      {/* Payment Schedule */}
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Overdue</span>
                          <span className="font-medium text-red-600">$340K</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Due this week</span>
                          <span className="font-medium text-orange-600">$520K</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">Due next month</span>
                          <span className="font-medium text-blue-600">$340K</span>
                        </div>
                      </div>

                      {/* Bottom Button */}
                      <div className="absolute bottom-8 left-6 right-6">
                        <button className="w-full bg-gray-800 text-white text-sm py-3 rounded-lg font-medium">
                          Poor cash-flow visibility
                        </button>
                      </div>
                    </div>
                  ) : screens[currentScreen].type === 'reconciliation' ? (
                    /* Reconciliation Screen */
                    <div className="h-full p-6 bg-gray-50">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">RECONCILIATION</p>
                          <h2 className="text-xl font-semibold text-gray-800">Fragmented systems</h2>
                        </div>
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-500 text-xs">!</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        {/* Data across multiple systems */}
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">×</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-red-800 text-sm mb-1">Data across multiple systems</h3>
                              <p className="text-xs text-red-600 mb-3">Banks, gateways & ERPs don't talk to each other</p>
                              
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2 text-xs text-gray-600">
                                  <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
                                  <span>3 different banks</span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-gray-600">
                                  <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                                  <span>5 payment gateways</span>
                                </div>
                                <div className="flex items-center space-x-2 text-xs text-gray-600">
                                  <div className="w-3 h-3 bg-purple-400 rounded-sm"></div>
                                  <span>2 ERP systems</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Manual reconciliation */}
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">!</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-orange-800 text-sm mb-1">Manual reconciliation</h3>
                              <p className="text-xs text-orange-600 mb-3">Finance teams spend hours stitching data</p>
                              
                              <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                  <p className="text-gray-500">Weekly hours</p>
                                  <p className="font-medium text-gray-800">18-24h</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Error rate</p>
                                  <p className="font-medium text-gray-800">12-15%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Delayed financial insights */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">📊</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-800 text-sm mb-1">Delayed financial insights</h3>
                              <p className="text-xs text-gray-600 mb-3">Data silos prevent real-time visibility</p>
                              
                              <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Time to reconcile</span>
                                  <span className="font-medium text-gray-800">3-5 days</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Discrepancies found</span>
                                  <span className="font-medium text-orange-600">47 this month</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : screens[currentScreen].type === 'PAYMENTS' ? (
                    /* Payment Processing Screen */
                    <div className="h-full p-6 bg-gray-50">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">PAYMENTS</p>
                          <h2 className="text-xl font-semibold text-gray-800">Expensive, slow & opaque</h2>
                        </div>
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-500 text-xs">📉</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        {/* Unpredictable payment cycles */}
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">⏰</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-red-800 text-sm mb-1">Unpredictable payment cycles</h3>
                              <p className="text-xs text-red-600 mb-3">Overseas clients follow their own schedules</p>
                              
                              <div className="space-y-2">
                                <div className="flex justify-between text-xs text-gray-600">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-blue-500">🇮🇳</span>
                                    <span>India clients</span>
                                  </div>
                                  <span className="font-medium">45-60 days</span>
                                </div>
                                <div className="flex justify-between text-xs text-gray-600">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-green-500">🇦🇪</span>
                                    <span>UAE clients</span>
                                  </div>
                                  <span className="font-medium">30-90 days</span>
                                </div>
                                <div className="flex justify-between text-xs text-gray-600">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-blue-500">🇬🇧</span>
                                    <span>UK clients</span>
                                  </div>
                                  <span className="font-medium">30-45 days</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Hidden FX margins */}
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">$</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-orange-800 text-sm mb-1">Hidden FX margins</h3>
                              <p className="text-xs text-orange-600 mb-3">Banks add 2-4% on exchange rates</p>
                              
                              <div className="grid grid-cols-2 gap-3 text-xs">
                                <div>
                                  <p className="text-gray-500">FX markup</p>
                                  <p className="font-medium text-gray-800">2.5%</p>
                                </div>
                                <div>
                                  <p className="text-gray-500">Transfer fees</p>
                                  <p className="font-medium text-gray-800">$35-75</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Slow settlements */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">⚠️</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-800 text-sm mb-1">Slow settlements</h3>
                              <p className="text-xs text-gray-600 mb-3">Tracking becomes difficult across borders</p>
                              
                              <div className="space-y-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Avg settlement time</span>
                                  <span className="font-medium text-red-600">5-7 days</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : screens[currentScreen].type === 'analytics' ? (
                    /* Analytics Screen */
                    <div className="h-full p-6 bg-gray-50">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">ANALYTICS</p>
                          <h2 className="text-xl font-semibold text-gray-800">Business Analytics</h2>
                        </div>
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-500 text-xs">📊</span>
                        </div>
                      </div>

                      {/* Revenue Card */}
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-600 flex items-center">
                            <span className="text-purple-500 mr-1">📈</span>
                            Monthly Revenue
                          </span>
                          <span className="text-xs text-green-600">+12.5%</span>
                        </div>
                        <div className="mb-1">
                          <span className="text-2xl font-bold text-purple-600">$847K</span>
                        </div>
                        <p className="text-xs text-gray-500">vs $753K last month</p>
                      </div>

                      {/* Geographic Distribution */}
                      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                        <h3 className="font-medium text-gray-800 text-sm mb-3">Geographic distribution</h3>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">🇺🇸 North America</span>
                            <span className="font-medium">42%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">🇪🇺 Europe</span>
                            <span className="font-medium">28%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">🇦🇺 Asia Pacific</span>
                            <span className="font-medium">22%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">🌍 Others</span>
                            <span className="font-medium">8%</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-gray-600 mb-1">Active users</p>
                          <p className="font-bold text-blue-600">12.4K</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-gray-600 mb-1">Conversion</p>
                          <p className="font-bold text-green-600">8.7%</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Default Screen Layout */
                    <div className="h-full flex flex-col items-center justify-center p-8">
                      {/* Animated Icon Container */}
                      <div className="relative mb-8">
                        {/* Ripple Effects */}
                        <div className="absolute inset-0 rounded-full bg-current opacity-10 animate-ping" 
                             style={{ color: screens[currentScreen].color.split(' ')[1] }}></div>
                        <div className="absolute inset-2 rounded-full bg-current opacity-20 animate-ping animation-delay-200"
                             style={{ color: screens[currentScreen].color.split(' ')[1] }}></div>
                        
                        {/* Main Icon */}
                        <div className={`relative w-24 h-24 bg-gradient-to-br ${screens[currentScreen].color} rounded-2xl flex items-center justify-center text-white text-4xl shadow-xl transform transition-all duration-700`}
                             style={{
                               transform: `scale(${0.8 + scrollProgress * 0.4}) rotate(${scrollProgress * 360}deg)`
                             }}>
                          {screens[currentScreen].icon}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-gray-800 text-center mb-3 transition-all duration-700">
                        {screens[currentScreen].title}
                      </h2>

                      {/* Subtitle */}
                      <p className="text-gray-500 text-center transition-all duration-700">
                        {screens[currentScreen].subtitle}
                      </p>

                      {/* Progress Indicator */}
                      <div className="flex space-x-2 mt-12">
                        {screens.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-500 ${
                              index === currentScreen 
                                ? `bg-gradient-to-r ${screens[currentScreen].color} scale-125` 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Scroll Progress Bar */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="">
                      <div 
                        className={`h-full bg-gradient-to-r ${screens[currentScreen].color} transition-all duration-300 rounded-full`}
                        style={{ width: `${(scrollProgress * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Side buttons */}
                <div className="absolute right-0 top-20 w-1 h-12 bg-gray-800 rounded-l-sm"></div>
                <div className="absolute right-0 top-36 w-1 h-8 bg-gray-800 rounded-l-sm"></div>
                <div className="absolute right-0 top-48 w-1 h-8 bg-gray-800 rounded-l-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for scroll effect */}
        <div className="h-[300vh]"></div>
        
        {/* Problem Box - Only for regulation tracker screen */}
        {screens[currentScreen].type === 'regulation' && (
          <div className="fixed bottom-20 right-20 w-80 bg-white rounded-lg shadow-xl p-6 z-30">
            <p className="text-sm text-blue-500 uppercase tracking-wide mb-2">PROBLEM</p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fragmented Compliance</h3>
            <p className="text-gray-600 leading-relaxed">
              Compliance requirements constantly change by geography and transaction type , creating ongoing operational burden.
            </p>
          </div>
        )}
        
        {/* Problem Box - Only for manual processes screen */}
        {screens[currentScreen].type === 'invoicing' && (
          <div className="fixed bottom-20 left-20 w-80 bg-white rounded-lg shadow-xl p-6 z-30">
            <p className="text-sm text-blue-500 uppercase tracking-wide mb-2">PROBLEM</p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Manual Invoicing</h3>
            <p className="text-gray-600 leading-relaxed">
              Invoicing is inconsistent across contries, with different formats,currencies, and tax requirements slowing operations .
            </p>
          </div>
        )}
        
        {/* Problem Box - Only for reconciliation screen */}
        {screens[currentScreen].type === 'reconciliation' && (
          <div className="fixed bottom-20 right-20 w-80 bg-white rounded-lg shadow-xl p-6 z-30">
            <p className="text-sm text-blue-500 uppercase tracking-wide mb-2">PROBLEM</p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Fragmented reconciliation</h3>
            <p className="text-gray-600 leading-relaxed">
              Data scattered across banks, gateways, and ERPs creates reconciliation nightmares and operational inefficiency.
            </p>
          </div>
        )}
        
        {/* Problem Box - Only for payments screen */}
        {screens[currentScreen].type === 'PAYMENTS' && (
          <div className="fixed bottom-20 left-20 w-80 bg-white rounded-lg shadow-xl p-6 z-30">
            <p className="text-sm text-blue-500 uppercase tracking-wide mb-2">PROBLEM</p>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Expensive & slow collections</h3>
            <p className="text-gray-600 leading-relaxed">
              Cross-border payments are slow, expensive, and opaque. Hidden FX margins and unpredictable settlement times drain resources.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedMobileDemo;