import React from 'react';
import { Star, Building, Users, PhoneCall } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Engineer",
      company: "TechFlow AI",
      content: "Vobil transformed our customer service AI. Integration took less than an hour, and call quality is exceptional.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "HealthTech Solutions",
      content: "HIPAA compliance out of the box was crucial for our healthcare AI agents. Vobil delivered exactly what we needed.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Emily Thompson",
      role: "Lead Developer",
      company: "InsuranceBot Inc",
      content: "The MCP integration is seamless. Our AI agents can now handle complex insurance quotes over the phone autonomously.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const partners = [
    { name: "Salesforce", logo: "SF" },
    { name: "HubSpot", logo: "HS" },
    { name: "Twilio", logo: "TW" },
    { name: "OpenAI", logo: "AI" },
    { name: "Anthropic", logo: "AN" },
    { name: "Microsoft", logo: "MS" }
  ];

  const stats = [
    { icon: PhoneCall, value: "50,000+", label: "Calls per day" },
    { icon: Building, value: "500+", label: "Companies" },
    { icon: Users, value: "10,000+", label: "AI Agents" },
    { icon: Star, value: "4.9/5", label: "Developer Rating" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted by
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Leading AI Teams
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of developers building the future of AI-powered phone automation
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 mb-4">
                  <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-xl"></div>
              
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Integration Partners</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-lg px-6 py-4 hover:border-purple-500/30 transition-all duration-200"
              >
                <div className="w-16 h-8 bg-gradient-to-r from-purple-400 to-cyan-400 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{partner.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Give Your AI Agents a Voice?
            </h3>
            <p className="text-gray-400 mb-6">
              Join the growing community of developers building the future of AI phone automation
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all duration-200 hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;