import React from 'react';
import { Check, Zap, Crown, Building } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Developer Starter',
      icon: Zap,
      price: 'Free',
      description: 'Perfect for testing and development',
      features: [
        '50 minutes included',
        'Basic voice quality',
        'Community support',
        'Standard compliance',
        'API access',
        'Basic analytics'
      ],
      cta: 'Start Free',
      popular: false,
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/10',
      borderColor: 'border-gray-500/20'
    },
    {
      name: 'AI Agent Pro',
      icon: Crown,
      price: '$0.05',
      period: '/minute',
      description: 'Usage-based pricing for production AI agents',
      features: [
        'Pay per minute used',
        'HD voice quality',
        'Priority support',
        'Full compliance suite',
        'Advanced API access',
        'Real-time analytics',
        'Custom voice models',
        'Webhook integrations'
      ],
      cta: 'Start Trial',
      popular: true,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      name: 'Enterprise Agents',
      icon: Building,
      price: 'Custom',
      description: 'White-label solutions for large deployments',
      features: [
        'Custom pricing',
        'White-label options',
        'Dedicated support',
        'Custom compliance',
        'On-premise deployment',
        'Advanced analytics',
        'Custom integrations',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Start free, scale as you grow. Enterprise-grade infrastructure with usage-based pricing.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-gray-900/50 backdrop-blur-sm border ${plan.borderColor} rounded-xl p-6 sm:p-8 ${
                  plan.popular 
                    ? 'ring-2 ring-purple-500/50 scale-105 lg:scale-110' 
                    : 'hover:border-opacity-60'
                } transition-all duration-200`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-cyan-600 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold text-white">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Glow Effect */}
                <div className={`absolute inset-0 ${plan.bgColor} rounded-xl opacity-20`}></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className={`${plan.bgColor} ${plan.borderColor} border rounded-lg p-3 w-fit mx-auto mb-4`}>
                      <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 ${plan.color}`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4 text-sm sm:text-base">{plan.description}</p>
                    
                    {/* Price */}
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-400 text-base sm:text-lg">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`p-1 rounded-full ${plan.bgColor}`}>
                          <Check className={`w-3 h-3 sm:w-4 sm:h-4 ${plan.color}`} />
                        </div>
                        <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-500 hover:to-cyan-500 hover:scale-105'
                        : `${plan.bgColor} ${plan.borderColor} border ${plan.color} hover:bg-opacity-75`
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6 text-center">All Plans Include:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-400">
              <div>
                <h4 className="font-semibold text-white mb-3">Security & Compliance</h4>
                <div className="text-sm space-y-1">
                  <div>• End-to-end encryption</div>
                  <div>• TCPA compliance</div>
                  <div>• GDPR ready</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Developer Tools</h4>
                <div className="text-sm space-y-1">
                  <div>• Comprehensive APIs</div>
                  <div>• SDKs & Libraries</div>
                  <div>• Documentation</div>
                </div>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="font-semibold text-white mb-3">Global Infrastructure</h4>
                <div className="text-sm space-y-1">
                  <div>• 50+ countries</div>
                  <div>• 99.9% uptime SLA</div>
                  <div>• 24/7 monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;