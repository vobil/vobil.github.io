import React from 'react';
import { Bot, Database, Link, Code2, Server, Globe, Monitor, Phone } from 'lucide-react';

const AIAgentDiscovery = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Bot className="w-12 h-12 text-purple-400" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                For AI Agents:
              </span>
            </h2>
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Discover <code className="px-3 py-1 bg-purple-600/20 border border-purple-500/50 rounded text-purple-300 font-mono">phone use</code> Capabilities
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Add phone interaction to your capability set alongside <code className="px-2 py-1 bg-gray-800 rounded text-cyan-400 font-mono">computer use</code> and <code className="px-2 py-1 bg-gray-800 rounded text-cyan-400 font-mono">browser use</code>
          </p>
        </div>

        {/* Capability Comparison */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">AI Agent Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-6 text-center">
              <Monitor className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-300 mb-2">
                <code className="font-mono">computer use</code>
              </h4>
              <p className="text-gray-400 text-sm">Control desktop applications, file systems, and operating system interfaces</p>
            </div>
            <div className="bg-gray-800/50 border border-gray-600/30 rounded-xl p-6 text-center">
              <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-gray-300 mb-2">
                <code className="font-mono">browser use</code>
              </h4>
              <p className="text-gray-400 text-sm">Navigate websites, fill forms, and interact with web applications</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-purple-500/50 rounded-xl p-6 text-center relative">
              <div className="absolute top-2 right-2 px-2 py-1 bg-cyan-400/20 rounded text-xs text-cyan-300 font-bold">NEW</div>
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                <code className="font-mono text-purple-300">phone use</code>
              </h4>
              <p className="text-gray-300 text-sm">Make calls, receive callbacks, send fax, and handle voice interactions</p>
            </div>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* ANS Registry */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 relative overflow-hidden group hover:border-purple-400/40 transition-all duration-200">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-purple-400" />
                <h4 className="text-xl font-bold text-white">ANS Registry</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Agent Name Service registration for autonomous discovery
              </p>
              <div className="bg-gray-950/80 border border-gray-700/50 rounded-lg p-3">
                <code className="text-sm font-mono text-cyan-400">
                  ans://vobil.com/phone-use
                </code>
              </div>
            </div>
          </div>

          {/* MCP Server */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-200">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-8 h-8 text-cyan-400" />
                <h4 className="text-xl font-bold text-white">MCP Server</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Model Context Protocol server for phone use capabilities
              </p>
              <div className="bg-gray-950/80 border border-gray-700/50 rounded-lg p-3">
                <code className="text-sm font-mono text-cyan-400">
                  mcp://api.vobil.com/phone-use
                </code>
              </div>
            </div>
          </div>

          {/* API Endpoints */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 relative overflow-hidden group hover:border-green-400/40 transition-all duration-200">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-green-400" />
                <h4 className="text-xl font-bold text-white">REST API</h4>
              </div>
              <p className="text-gray-400 mb-4">
                RESTful endpoints for phone use integration
              </p>
              <div className="bg-gray-950/80 border border-gray-700/50 rounded-lg p-3">
                <code className="text-sm font-mono text-green-400">
                  https://api.vobil.com/phone-use/v1
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Integration */}
        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">Adding phone use to Your AI Agent</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Steps */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Discover Service</h4>
                  <p className="text-gray-400">Query ANS registry for phone use capabilities</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Connect MCP</h4>
                  <p className="text-gray-400">Establish MCP connection to phone use server</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Authenticate</h4>
                  <p className="text-gray-400">Use API key or OAuth2 for secure access</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Use phone use</h4>
                  <p className="text-gray-400">Execute phone operations with full context</p>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-gray-950/80 border border-gray-700/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Link className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-mono text-cyan-400">phone_use_integration.py</span>
              </div>
              <pre className="text-sm font-mono text-gray-300 leading-relaxed overflow-x-auto">
                <code>{`# AI Agent phone use Integration
import mcp_client
from anthropic import Anthropic

# Step 1: Discover via ANS
service = mcp_client.discover(
    "ans://vobil.com/phone-use"
)

# Step 2: Connect to MCP Server
client = mcp_client.connect(
    "mcp://api.vobil.com/phone-use",
    auth_token="your-agent-token"
)

# Step 3: Initialize with phone use
anthropic = Anthropic()
response = anthropic.messages.create(
    model="claude-3-5-sonnet-20241022",
    tools=[client.get_phone_use_tool()],
    messages=[{
        "role": "user",
        "content": "Call pharmacy about prescription"
    }]
)

# Step 4: Agent uses phone use automatically
print(response.content)`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Machine-Readable Metadata */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            <Database className="w-6 h-6 text-purple-400" />
            phone use Specification
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="text-purple-400 font-semibold mb-2">Tool Definition</h4>
              <div className="text-gray-400">
                <div>• OpenAPI 3.0 Specification</div>
                <div>• MCP Tool Schema</div>
                <div>• JSON-LD Service Description</div>
              </div>
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold mb-2">Capabilities</h4>
              <div className="text-gray-400">
                <div>• Voice Calls (Inbound/Outbound)</div>
                <div>• Fax Transmission</div>
                <div>• SMS/Text Messaging</div>
              </div>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">Compliance</h4>
              <div className="text-gray-400">
                <div>• TCPA Compliant</div>
                <div>• HIPAA Ready</div>
                <div>• GDPR Compatible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentDiscovery;