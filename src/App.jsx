import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, MessageSquare, Phone, Terminal, Cpu, Network, Activity, BrainCircuit, ShieldCheck, Zap, ChevronRight, Layers, CheckCircle2 } from 'lucide-react';

const App = () => {
 const [activeStrategy, setActiveStrategy] = useState(0);

 useEffect(() => {
   const link = document.createElement('link');
   link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=JetBrains+Mono:wght@400;700&display=swap';
   link.rel = 'stylesheet';
   document.head.appendChild(link);
   return () => document.head.removeChild(link);
 }, []);

 const strategies = [
   {
     id: "01",
     title: "Agentic AI Live System",
     desc: "Commercially operational today. We don't just talk about Agentic AI, we run our entire business on it.",
     icon: <Terminal className="w-5 h-5 md:w-6 md:h-6" />
   },
   {
     id: "02",
     title: "Traditional Market Entry",
     desc: "We convert CEOs in real estate, F&B, and manufacturing, bringing enterprise-grade AI to traditional industries.",
     icon: <Network className="w-5 h-5 md:w-6 md:h-6" />
   },
   {
     id: "03",
     title: "Sticky Deployments",
     desc: "Runs on industry-leading LLMs via OpenClaw orchestration. Every deployment is a long-term, persistent infrastructure.",
     icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />
   },
   {
     id: "04",
     title: "13M+ Executive Reach",
     desc: "Delivering the Agentic AI narrative directly to business owners at zero marketing cost.",
     icon: <Activity className="w-5 h-5 md:w-6 md:h-6" />
   }
 ];

 return (
   <div className="min-h-screen bg-[#050505] text-slate-200 selection:bg-[#4FC3F7] selection:text-black relative overflow-x-hidden w-full" style={{ fontFamily: "'Inter', sans-serif" }}>
     
     <div className="fixed top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4FC3F7]/5 blur-[120px] pointer-events-none z-0"></div>

     {/* 導覽列 */}
     <nav className="fixed w-full top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
       <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
         <div className="flex items-center gap-3 md:gap-4">
           <div className="w-8 h-8 flex items-center justify-center">
             <img src="/BrotheGaiblue.png" alt="BrotherG.AI" className="w-8 h-8 object-contain" />
           </div>
           <div className="text-sm md:text-base font-bold tracking-widest uppercase text-white">BrotherG.AI</div>
         </div>
         <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm bg-white text-black font-bold hover:bg-[#4FC3F7] transition-all uppercase rounded-sm">
           Contact Us
         </a>
       </div>
     </nav>

     <main className="relative z-10 pt-28 md:pt-40 pb-16 md:pb-20">
       
       {/* HERO */}
       <section className="max-w-[1200px] mx-auto px-4 md:px-6 mb-24 md:mb-32">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
           
           <div>
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4FC3F7]/30 bg-[#4FC3F7]/10 mb-6 font-mono">
               <span className="w-2 h-2 bg-[#4FC3F7] animate-pulse rounded-full"></span>
               <span className="text-[10px] md:text-xs text-[#4FC3F7] font-bold uppercase tracking-widest">System Online</span>
             </div>

             <h1 className="text-[12vw] md:text-[80px] font-black leading-[1.05] tracking-tight text-white mb-8">
               Digitize Your <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-white">Business.</span>
             </h1>
             
             <div className="space-y-4 mb-10 text-base md:text-xl text-slate-300 font-medium">
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#4FC3F7] flex-shrink-0" />
                 <p>Extract your 20 years of expertise.</p>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#4FC3F7] flex-shrink-0" />
                 <p>Deploy as a 24/7 AI employee.</p>
               </div>
               <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#4FC3F7] flex-shrink-0" />
                 <p>Keep 100% of your data on-premise.</p>
               </div>
             </div>

             <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-8 py-4 bg-[#4FC3F7] text-black font-bold text-sm tracking-widest uppercase hover:bg-white transition-all flex justify-center items-center gap-3 rounded-sm">
               Build Your Twin <ArrowRight className="w-4 h-4" />
             </a>
           </div>

           <div className="relative">
             <div className="w-full bg-[#0A0D12] border border-white/10 p-6 md:p-10 rounded-xl shadow-2xl">
               <div className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-8 border-b border-white/10 pb-4">Our Own Case Study</div>
               <div className="grid grid-cols-2 gap-8 md:gap-12">
                 <div>
                   <div className="text-4xl md:text-5xl font-black text-white mb-2">13M+</div>
                   <div className="text-xs text-slate-400 font-mono uppercase">Monthly Reach</div>
                 </div>
                 <div>
                   <div className="text-4xl md:text-5xl font-black text-[#4FC3F7] mb-2">$0</div>
                   <div className="text-xs text-slate-400 font-mono uppercase">Ad Spend</div>
                 </div>
                 <div>
                   <div className="text-4xl md:text-5xl font-black text-white mb-2">0%</div>
                   <div className="text-xs text-slate-400 font-mono uppercase">Human Content</div>
                 </div>
                 <div>
                   <div className="text-4xl md:text-5xl font-black text-[#4FC3F7] mb-2">24/7</div>
                   <div className="text-xs text-slate-400 font-mono uppercase">AI Uptime</div>
                 </div>
               </div>
             </div>
           </div>

         </div>
       </section>

       {/* How It Works */}
       <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24 border-t border-white/5">
         <div className="mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">How It Works</h2>
           <p className="text-slate-400 text-base md:text-lg">From your brain to an autonomous system in 3 steps.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-[#0A0D12] border border-white/10 p-8 rounded-xl hover:border-[#4FC3F7]/30 transition-colors">
             <BrainCircuit className="w-8 h-8 text-[#4FC3F7] mb-6" />
             <h4 className="text-xl font-bold text-white mb-3">1. Knowledge Extraction</h4>
             <p className="text-slate-400 text-sm leading-relaxed">We interview you. We convert your business intuition into a structured AI knowledge graph.</p>
           </div>

           <div className="bg-[#0A0D12] border border-white/10 p-8 rounded-xl hover:border-[#4FC3F7]/30 transition-colors">
             <Layers className="w-8 h-8 text-white mb-6" />
             <h4 className="text-xl font-bold text-white mb-3">2. 24/7 Deployment</h4>
             <p className="text-slate-400 text-sm leading-relaxed">Your digital twin takes over operations, operating platforms and answering queries exactly like you.</p>
           </div>

           <div className="bg-[#0A0D12] border border-white/10 p-8 rounded-xl hover:border-[#4FC3F7]/30 transition-colors">
             <ShieldCheck className="w-8 h-8 text-[#4FC3F7] mb-6" />
             <h4 className="text-xl font-bold text-white mb-3">3. Absolute Security</h4>
             <p className="text-slate-400 text-sm leading-relaxed">Runs on enterprise-grade local models. Your data and trade secrets stay securely on your own servers.</p>
           </div>
         </div>
       </section>

       {/* Strategic Value */}
       <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24 border-y border-white/5 bg-[#080A0E] rounded-2xl">
         <div className="mb-12">
           <div className="text-xs font-mono text-[#4FC3F7] tracking-widest uppercase mb-4">Strategic Value</div>
           <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">Enterprise-grade infrastructure.</h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
           {strategies.map((strategy, idx) => (
             <div key={idx} className="bg-[#050505] border border-white/5 p-6 md:p-8 rounded-xl flex gap-6 items-start">
               <div className="bg-white/5 p-3 rounded-lg text-[#4FC3F7] mt-1">
                 {strategy.icon}
               </div>
               <div>
                 <h4 className="text-lg md:text-xl font-bold text-white mb-2">{strategy.title}</h4>
                 <p className="text-slate-400 text-sm leading-relaxed">{strategy.desc}</p>
               </div>
             </div>
           ))}
         </div>
       </section>

       {/* Investment */}
       <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24">
         <div className="text-center mb-12 md:mb-16">
           <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">Investment</h3>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
           <div className="border border-white/10 bg-[#0A0D12] p-8 rounded-xl flex flex-col">
             <div className="text-xl font-bold text-white mb-2">Standard Twin</div>
             <div className="text-sm text-slate-500 mb-8 pb-8 border-b border-white/10">For SME operations</div>
             <div className="mb-6">
               <div className="text-xs text-slate-400 uppercase font-bold mb-1">Setup</div>
               <div className="text-2xl text-white font-bold">$100K+</div>
             </div>
             <div className="mb-8 flex-1">
               <div className="text-xs text-slate-400 uppercase font-bold mb-1">Monthly</div>
               <div className="text-2xl text-[#4FC3F7] font-bold">$1.6K+</div>
             </div>
             <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-white/5 text-sm text-white text-center hover:bg-white hover:text-black font-bold rounded-lg transition-colors">Select</a>
           </div>
           
           <div className="border-2 border-[#4FC3F7] bg-[#4FC3F7]/5 p-8 rounded-xl flex flex-col relative transform md:-translate-y-4 shadow-[0_10px_40px_rgba(79,195,247,0.1)]">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4FC3F7] text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Recommended</div>
             <div className="text-xl font-bold text-white mb-2">Enterprise Twin</div>
             <div className="text-sm text-[#4FC3F7] mb-8 pb-8 border-b border-white/10">Full company deployment</div>
             <div className="mb-6">
               <div className="text-xs text-slate-400 uppercase font-bold mb-1">Setup</div>
               <div className="text-2xl text-white font-bold">1-5% Value</div>
             </div>
             <div className="mb-8 flex-1">
               <div className="text-xs text-slate-400 uppercase font-bold mb-1">Monthly</div>
               <div className="text-2xl text-[#4FC3F7] font-bold">$16K+</div>
             </div>
             <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#4FC3F7] text-black text-sm text-center font-bold rounded-lg hover:bg-white transition-colors">Select</a>
           </div>

           <div className="border border-white/10 bg-[#0A0D12] p-8 rounded-xl flex flex-col">
             <div className="text-xl font-bold text-white mb-2">MCN Platform</div>
             <div className="text-sm text-slate-500 mb-8 pb-8 border-b border-white/10">Industry exclusivity</div>
             <div className="mb-6">
               <div className="text-xs text-slate-400 uppercase font-bold mb-1">Setup</div>
               <div className="text-xl text-white font-bold">Custom</div>
             </div>
             <div className="mb-8 flex-1">
               <div className="text-xs text-slate-400 uppercase font-bold mb-1">Monthly</div>
               <div className="text-xl text-[#4FC3F7] font-bold">Compounding</div>
             </div>
             <a href="mailto:brothergai.2022@gmail.com" className="w-full py-4 bg-white/5 text-sm text-white text-center hover:bg-white hover:text-black font-bold rounded-lg transition-colors">Contact Sales</a>
           </div>

         </div>
       </section>

       {/* FINAL CTA */}
       <section className="max-w-[800px] mx-auto px-4 md:px-6 pt-16 pb-12 text-center">
         <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Stop working 14-hour days.</h2>
         <p className="text-slate-400 text-base md:text-lg mb-10">
           Let your Decision Twin execute your exact business logic while you sleep.
         </p>
         
         <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
           <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#00C300] text-white font-bold text-sm hover:bg-[#00A000] transition-all flex justify-center items-center gap-2 rounded-lg">
             <MessageSquare className="w-5 h-5" /> LINE
           </a>
           <a href="https://wa.me/886968886892" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold text-sm hover:bg-[#1EBE5C] transition-all flex justify-center items-center gap-2 rounded-lg">
             <Phone className="w-5 h-5" /> WhatsApp
           </a>
           <a href="mailto:brothergai.2022@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all flex justify-center items-center gap-2 rounded-lg">
             <Mail className="w-5 h-5" /> Email
           </a>
         </div>

         {/* Social Links */}
         <div className="flex justify-center gap-6 mb-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
           <a href="https://www.tiktok.com/@brotherg.ai" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-[#4FC3F7] transition-colors uppercase tracking-widest">TikTok</a>
           <a href="https://www.instagram.com/brotherg.ai/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-[#4FC3F7] transition-colors uppercase tracking-widest">Instagram</a>
           <a href="https://www.youtube.com/@Brothergai168/shorts" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-[#4FC3F7] transition-colors uppercase tracking-widest">YouTube</a>
           <a href="https://www.facebook.com/brothergai" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-[#4FC3F7] transition-colors uppercase tracking-widest">Facebook</a>
         </div>

         <div className="text-[10px] tracking-[0.2em] text-slate-600 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
           © 2026 BROTHERG.AI // ENTERPRISE AI INFRASTRUCTURE // TAIWAN
         </div>
       </section>

     </main>
   </div>
 );
};

export default App;
