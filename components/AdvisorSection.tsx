import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { getAyurvedicAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AdvisorSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste. I am your Ayurvedic Advisor. How can the wisdom of the Himalayas assist you today? Ask me about Shilajit, Ashwagandha, or general wellness.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await getAyurvedicAdvice(input);
    const modelMessage: ChatMessage = { role: 'model', text: responseText };

    setMessages(prev => [...prev, modelMessage]);
    setIsLoading(false);
  };

  return (
    <section id="advisor" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nepal-gold rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nepal-sage rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Text Side */}
          <div className="w-full lg:w-1/3 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-nepal-gold/50 rounded-full text-nepal-gold text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              <span>AI Powered</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Consult the <br /> <span className="text-nepal-gold">Himalayan Sage</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Unsure which herb is right for you? Our AI advisor, trained on traditional Ayurvedic texts, is here to guide your journey to holistic health.
            </p>
            <div className="hidden lg:block bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Sample Questions</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="cursor-pointer hover:text-nepal-gold transition-colors" onClick={() => setInput("What are the benefits of Shilajit?")}>• "What are the benefits of Shilajit?"</li>
                <li className="cursor-pointer hover:text-nepal-gold transition-colors" onClick={() => setInput("How does Ashwagandha help with stress?")}>• "How does Ashwagandha help with stress?"</li>
                <li className="cursor-pointer hover:text-nepal-gold transition-colors" onClick={() => setInput("Is Triphala good for digestion?")}>• "Is Triphala good for digestion?"</li>
              </ul>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
              {/* Chat Header */}
              <div className="bg-nepal-light p-4 border-b flex items-center gap-3">
                <div className="bg-nepal-dark p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-nepal-dark">Ayurveda Advisor</h3>
                  <span className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> Online
                  </span>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-6 overflow-y-auto bg-gray-50 h-[400px]">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div 
                      key={index} 
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                          msg.role === 'user' 
                            ? 'bg-nepal-dark text-white rounded-br-none' 
                            : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                        <Loader2 className="w-5 h-5 text-nepal-gold animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about your health needs..."
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nepal-gold/50 transition-all text-sm"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="bg-nepal-gold text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvisorSection;