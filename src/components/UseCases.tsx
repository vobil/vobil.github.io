import React, { useState } from 'react';
import { Heart, Shield, Utensils, ChevronRight, Check } from 'lucide-react';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      id: 'healthcare',
      title: 'Healthcare Coordination',
      icon: Heart,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      description: 'Automate pharmacy medication confirmations and patient follow-ups',
      benefits: ['TCPA-compliant', 'AI-powered', 'Ready in 3 minutes'],
      code: `from anthropic import Anthropic
from vobil import phone_use

# Healthcare coordination with phone use
client = Anthropic()

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    tools=[phone_use.get_tool()],
    messages=[{
        "role": "user",
        "content": """Call CVS Pharmacy at +1-555-PHARMACY 
        to confirm if prescription RX123456 for John Doe 
        (Lisinopril 10mg) is ready for pickup"""
    }]
)

# Claude automatically uses phone use to:
# 1. Dial the pharmacy
# 2. Navigate phone menu
# 3. Speak with pharmacist
# 4. Confirm prescription status
# 5. Return structured results

print(response.content)`,
      image: 'https://images.pexels.com/photos/576831/pexels-photo-576831.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'insurance',
      title: 'Insurance Shopping',
      icon: Shield,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      description: 'Get insurance quotes and compare rates automatically',
      benefits: ['Save 40% on quotes', 'Human-like conversations', 'Multi-carrier support'],
      code: `from anthropic import Anthropic
from vobil import phone_use

# Insurance quote collection with phone use
client = Anthropic()

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    tools=[phone_use.get_tool()],
    messages=[{
        "role": "user",
        "content": """Call Progressive at +1-800-PROGRESSIVE 
        to get an auto insurance quote for:
        - 2020 Honda Civic
        - 32-year-old driver
        - Full coverage needed"""
    }]
)

# Claude uses phone use to:
# 1. Call Progressive
# 2. Provide vehicle/driver info
# 3. Navigate quote process
# 4. Collect pricing details
# 5. Return structured quote data

quote_data = response.content`,
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'restaurant',
      title: 'Restaurant Reservations',
      icon: Utensils,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      description: 'Book restaurant reservations and manage dining schedules',
      benefits: ['Instant booking', 'Calendar integration', 'Preference memory'],
      code: `from anthropic import Anthropic
from vobil import phone_use

# Restaurant booking with phone use
client = Anthropic()

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    tools=[phone_use.get_tool()],
    messages=[{
        "role": "user",
        "content": """Call Mario's Italian Bistro at 
        +1-555-ITALIAN-BISTRO to make a reservation:
        - Party of 4
        - December 25th at 7:00 PM
        - Request quiet table if available"""
    }]
)

# Claude uses phone use to:
# 1. Call restaurant
# 2. Request reservation
# 3. Confirm date/time/party size
# 4. Note special requests
# 5. Return confirmation details

reservation = response.content`,
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const currentUseCase = useCases[activeTab];
  const IconComponent = currentUseCase.icon;

  return (
    <section id="use-cases" className="py-12 sm:py-16 lg:py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Three Ways
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              <code className="font-mono text-2xl sm:text-3xl lg:text-4xl">phone use</code> Transforms Business
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            See how AI agents use <code className="px-2 py-1 bg-purple-600/20 border border-purple-500/50 rounded text-purple-300 font-mono text-sm sm:text-base">phone use</code> to automate phone interactions across different industries
          </p>
        </div>

        {/* Use Case Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center">
          {useCases.map((useCase, index) => {
            const TabIcon = useCase.icon;
            return (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center sm:justify-start gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                  activeTab === index
                    ? `${useCase.bgColor} ${useCase.borderColor} border text-white`
                    : 'bg-gray-900/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600'
                }`}
              >
                <TabIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${activeTab === index ? useCase.color : ''}`} />
                <span className="hidden sm:inline">{useCase.title}</span>
                <span className="sm:hidden">{useCase.title.split(' ')[0]}</span>
                {activeTab === index && <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />}
              </button>
            );
          })}
        </div>

        {/* Active Use Case Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Description and Benefits */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 justify-center lg:justify-start">
                <div className={`p-2.5 sm:p-3 rounded-lg ${currentUseCase.bgColor} ${currentUseCase.borderColor} border`}>
                  <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${currentUseCase.color}`} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-center lg:text-left">{currentUseCase.title}</h3>
              </div>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed text-center lg:text-left">
                {currentUseCase.description}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white mb-4 text-center lg:text-left">Key Benefits:</h4>
              {currentUseCase.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className={`p-1 rounded-full ${currentUseCase.bgColor}`}>
                    <Check className={`w-3 h-3 sm:w-4 sm:h-4 ${currentUseCase.color}`} />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Visual Element */}
            <div className="relative">
              <img 
                src={currentUseCase.image} 
                alt={currentUseCase.title}
                className="w-full h-40 sm:h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm sm:text-base">{currentUseCase.title}</span>
                  <div className={`px-2 sm:px-3 py-1 rounded-full ${currentUseCase.bgColor} ${currentUseCase.borderColor} border`}>
                    <span className={`text-xs sm:text-sm ${currentUseCase.color}`}>phone use</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Code Example */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 relative overflow-hidden">
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentUseCase.bgColor} rounded-xl opacity-20`}></div>
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6 relative z-10">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-mono">{currentUseCase.id}_phone_use.py</span>
                </div>
              </div>

              {/* Code */}
              <div className="relative z-10">
                <div className="overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
                    <code>{currentUseCase.code}</code>
                  </pre>
                </div>
              </div>

              {/* Run Button */}
              <div className="mt-4 sm:mt-6 relative z-10">
                <button className={`w-full py-2.5 sm:py-3 ${currentUseCase.bgColor} ${currentUseCase.borderColor} border rounded-lg ${currentUseCase.color} hover:bg-opacity-75 transition-all duration-200 text-sm sm:text-base`}>
                  ▶ Run phone use Example
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;