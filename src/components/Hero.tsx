import React, { useState, useEffect } from 'react';
import { Play, Code, Phone, Zap, Monitor, Globe } from 'lucide-react';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    "Initializing AI Agent...",
    "Loading phone use capabilities...",
    "Connecting to Phone System...",
    "Dialing: +1 (555) 123-4567",
    "Call Connected ✓",
    "Transcribing conversation...",
    "Processing response...",
    "Call completed successfully!"
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= demoSteps.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isPlaying, demoSteps.length]);

  const handlePlayDemo = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-purple-950/20 to-cyan-950/20 pt-20 pb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Capability Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-600/30 rounded-lg">
                <Monitor className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <span className="text-xs sm:text-sm text-gray-400 font-mono">computer use</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-600/30 rounded-lg">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <span className="text-xs sm:text-sm text-gray-400 font-mono">browser use</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/50 rounded-lg">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm text-cyan-400 font-mono font-semibold">phone use</span>
                <div className="px-1.5 sm:px-2 py-0.5 bg-cyan-400/20 rounded text-xs text-cyan-300 font-bold">NEW</div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Give Your AI Agents
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Phone Use
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium">
                The Missing Capability for AI Agents
              </p>
              
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Just like <code className="px-1.5 sm:px-2 py-1 bg-gray-800 rounded text-cyan-400 font-mono text-sm sm:text-base">computer use</code> and <code className="px-1.5 sm:px-2 py-1 bg-gray-800 rounded text-cyan-400 font-mono text-sm sm:text-base">browser use</code>, 
                now your AI agents can have <code className="px-1.5 sm:px-2 py-1 bg-purple-600/20 border border-purple-500/50 rounded text-purple-300 font-mono text-sm sm:text-base">phone use</code> capabilities. 
                Make calls, receive callbacks, send fax - all through simple MCP integration.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-cyan-500 transition-all duration-200 hover:scale-105 text-base sm:text-lg">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Enable phone use
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </button>
              
              <button 
                onClick={handlePlayDemo}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-purple-500/30 rounded-lg font-semibold text-purple-300 hover:border-purple-400 hover:text-purple-200 transition-all duration-200 hover:bg-purple-500/10 text-base sm:text-lg"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                View Live Demo
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">50,000+</div>
                <div className="text-xs sm:text-sm text-gray-400">Calls per day</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400">500ms</div>
                <div className="text-xs sm:text-sm text-gray-400">Response time</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 relative overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-xl"></div>
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6 relative z-10">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-mono">phone_use_demo.py</span>
                </div>
              </div>

              {/* Code Example */}
              <div className="relative z-10 space-y-4">
                <div className="overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-gray-300 leading-relaxed whitespace-pre">
                    <code>
{`from anthropic import Anthropic
from vobil import phone_use

# Initialize Claude with phone use
client = Anthropic()

response = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    tools=[phone_use.get_tool()],
    messages=[{
        "role": "user", 
        "content": "Call pharmacy to confirm prescription"
    }]
)

# Claude uses phone use automatically`}
                    </code>
                  </pre>
                </div>

                {/* Demo Output */}
                <div className="bg-gray-950/80 border border-gray-700/50 rounded-lg p-3 sm:p-4 min-h-[150px] sm:min-h-[200px]">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                    <span className="text-xs sm:text-sm font-semibold text-cyan-400">phone use Output</span>
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2 font-mono text-xs sm:text-sm">
                    {demoSteps.slice(0, currentStep + 1).map((step, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-2 ${
                          index === currentStep && isPlaying 
                            ? 'text-cyan-400 animate-pulse' 
                            : 'text-gray-400'
                        }`}
                      >
                        <span className="text-cyan-500">→</span>
                        <span className="break-all">{step}</span>
                      </div>
                    ))}
                    
                    {isPlaying && currentStep < demoSteps.length - 1 && (
                      <div className="flex items-center gap-2 text-purple-400">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="animate-pulse">Processing...</span>
                      </div>
                    )}
                  </div>
                </div>

                {!isPlaying && currentStep === 0 && (
                  <button 
                    onClick={handlePlayDemo}
                    className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:border-purple-400 transition-all duration-200 text-sm sm:text-base"
                  >
                    ▶ Run phone use Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;