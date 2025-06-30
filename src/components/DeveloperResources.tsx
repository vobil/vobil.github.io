import React from 'react';
import { BookOpen, Download, Play, FileText, ExternalLink, Phone } from 'lucide-react';

const DeveloperResources = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'phone use Documentation',
      description: 'Complete integration guides and API references for phone use',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      links: [
        'phone use Quick Start',
        'API Reference',
        'Best Practices'
      ]
    },
    {
      icon: Download,
      title: 'SDK Downloads',
      description: 'Python, Node.js, and Go libraries for phone use integration',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      links: [
        'Python phone use SDK',
        'Node.js phone use SDK',
        'Go phone use SDK'
      ]
    },
    {
      icon: Play,
      title: 'Interactive Playground',
      description: 'Browser-based testing environment for phone use capabilities',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      links: [
        'phone use Playground',
        'Code Examples',
        'Test Scenarios'
      ]
    },
    {
      icon: FileText,
      title: 'Compliance Guide',
      description: 'Legal and regulatory guidance for phone use automation',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      links: [
        'TCPA Guidelines',
        'HIPAA Requirements',
        'GDPR Compliance'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Developer
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to integrate <code className="px-2 py-1 bg-purple-600/20 border border-purple-500/50 rounded text-purple-300 font-mono">phone use</code> capabilities into your AI agents
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className={`group bg-gray-900/50 backdrop-blur-sm border ${resource.borderColor} rounded-xl p-6 relative overflow-hidden hover:border-opacity-60 transition-all duration-200 hover:scale-105 cursor-pointer`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${resource.bgColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`${resource.bgColor} ${resource.borderColor} border rounded-lg p-3 w-fit mb-4`}>
                    <IconComponent className={`w-8 h-8 ${resource.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{resource.description}</p>

                  {/* Links */}
                  <div className="space-y-2">
                    {resource.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">
                        <ExternalLink className="w-3 h-3" />
                        <span>{link}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Example Section */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Get Started with phone use in Minutes</h3>
            <p className="text-gray-400">
              Copy and paste this code to give your AI agent phone use capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Installation */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Download className="w-5 h-5 text-purple-400" />
                Installation
              </h4>
              <div className="bg-gray-950/80 border border-gray-700/50 rounded-lg p-4">
                <pre className="text-sm font-mono text-gray-300">
                  <code>{`# Install Python SDK
pip install vobil-phone-use

# Or Node.js
npm install @vobil/phone-use

# Or Go
go get github.com/vobil/phone-use-go`}</code>
                </pre>
              </div>
            </div>

            {/* Quick Start */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                Quick Start
              </h4>
              <div className="bg-gray-950/80 border border-gray-700/50 rounded-lg p-4">
                <pre className="text-sm font-mono text-gray-300">
                  <code>{`from anthropic import Anthropic
from vobil import phone_use

client = Anthropic()
response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    tools=[phone_use.get_tool()],
    messages=[{
        "role": "user",
        "content": "Call +1-555-0123 to confirm appointment"
    }]
)

print(response.content)`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all duration-200 hover:scale-105">
              View Full phone use Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperResources;