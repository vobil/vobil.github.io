import React from 'react';
import { Volume2, Zap, Shield, BarChart3 } from 'lucide-react';

const TechnicalCapabilities = () => {
  const capabilities = [
    {
      icon: Volume2,
      title: 'Voice Quality',
      description: 'Crystal-clear audio with 99.9% uptime',
      stats: ['HD Voice Codec', '22kHz Audio', 'Noise Cancellation'],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Zap,
      title: 'Response Time',
      description: 'Sub-500ms latency with real-time processing',
      stats: ['<500ms Latency', 'Global CDN', 'Edge Computing'],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'TCPA, HIPAA, and GDPR ready out of the box',
      stats: ['TCPA Certified', 'HIPAA Compliant', 'GDPR Ready'],
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: BarChart3,
      title: 'Scale',
      description: 'Thousands of concurrent calls across 50+ countries',
      stats: ['10K+ Concurrent', '50+ Countries', '24/7 Support'],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    }
  ];

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technical
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade infrastructure built for AI agents that demand reliability, speed, and compliance
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={index}
                className={`group bg-gray-900/50 backdrop-blur-sm border ${capability.borderColor} rounded-xl p-6 relative overflow-hidden hover:border-opacity-60 transition-all duration-200 hover:scale-105`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${capability.bgColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`${capability.bgColor} ${capability.borderColor} border rounded-lg p-3 w-fit mb-4`}>
                    <IconComponent className={`w-8 h-8 ${capability.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{capability.description}</p>

                  {/* Stats */}
                  <div className="space-y-2">
                    {capability.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${capability.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-sm text-gray-300">{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <div className="mt-20 bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Real-Time Performance Metrics
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime SLA</div>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full" style={{width: '99.99%'}}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">423ms</div>
              <div className="text-gray-400">Avg Response</div>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">12.5K</div>
              <div className="text-gray-400">Concurrent Calls</div>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '78%'}}></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98.7%</div>
              <div className="text-gray-400">Success Rate</div>
              <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full" style={{width: '98.7%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;