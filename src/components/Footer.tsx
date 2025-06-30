import React from 'react';
import { Phone, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const aiAgentEndpoints = [
    {
      title: "MCP Server",
      endpoint: "mcp://api.vobil.com/v1",
      description: "Model Context Protocol server"
    },
    {
      title: "REST API",
      endpoint: "https://api.vobil.com/v1",
      description: "RESTful API endpoints"
    },
    {
      title: "WebSocket",
      endpoint: "wss://ws.vobil.com/v1",
      description: "Real-time voice streaming"
    }
  ];

  const humanLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Use Cases", href: "#use-cases" },
      { name: "Status", href: "#status" }
    ],
    developers: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "SDKs", href: "#sdks" },
      { name: "Playground", href: "#playground" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Support", href: "#support" },
      { name: "Security", href: "#security" }
    ]
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side - AI Agent Integration */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                For AI Agents: Technical Integration
              </h3>
              <p className="text-gray-400 mb-6">
                Machine-readable endpoints and specifications for autonomous AI agent discovery and integration
              </p>
            </div>

            {/* Technical Endpoints */}
            <div className="space-y-4">
              {aiAgentEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{endpoint.title}</h4>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="font-mono text-sm text-cyan-400 mb-1">{endpoint.endpoint}</div>
                  <div className="text-sm text-gray-400">{endpoint.description}</div>
                </div>
              ))}
            </div>

            {/* Machine-Readable Metadata */}
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-lg p-4">
              <h4 className="font-semibold text-white mb-3">Structured Data</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div>• OpenAPI 3.0 Specification</div>
                <div>• JSON-LD Service Metadata</div>
                <div>• MCP Tool Definitions</div>
                <div>• Compliance Certificates</div>
              </div>
            </div>
          </div>

          {/* Right Side - Human-Friendly Links */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Phone className="w-8 h-8 text-cyan-400" />
                  <div className="absolute inset-0 w-8 h-8 bg-cyan-400/20 blur-lg rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Vobil
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Give your AI agents a voice. The first phone use agent for AI agents.
              </p>
            </div>

            {/* Link Categories */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <div className="space-y-2">
                  {humanLinks.product.map((link, index) => (
                    <a key={index} href={link.href} className="block text-gray-400 hover:text-cyan-400 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Developers</h4>
                <div className="space-y-2">
                  {humanLinks.developers.map((link, index) => (
                    <a key={index} href={link.href} className="block text-gray-400 hover:text-cyan-400 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <div className="space-y-2">
                  {humanLinks.company.map((link, index) => (
                    <a key={index} href={link.href} className="block text-gray-400 hover:text-cyan-400 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Support</h4>
                <div className="space-y-2">
                  {humanLinks.support.map((link, index) => (
                    <a key={index} href={link.href} className="block text-gray-400 hover:text-cyan-400 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Vobil. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;