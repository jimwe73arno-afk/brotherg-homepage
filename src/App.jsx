import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, MessageSquare, Phone, Terminal, Cpu, Network, Activity, Clock, Handshake, BrainCircuit, ShieldCheck, Zap, ChevronRight, Layers } from 'lucide-react';

const App = () => {
 const [activeStrategy, setActiveStrategy] = useState(0);

 useEffect(() => {
   const link = document.createElement('link');
   link.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&family=Space+Grotesk:wght@300..700&display=swap';
   link.rel = 'stylesheet';
   document.head.appendChild(link);
   return () => document.head.removeChild(link);
 }, []);

 const strategies = [
   {
     id: "01",
     title: "Turn GTC Vision into Revenue",
     desc: "NVIDIA declared the Agentic AI era at GTC 2026. Jensen Huang endorsed OpenClaw. BrotherG.AI is one of the few companies with a live, commercially operational Agentic AI system built on NVIDIA's stack. Ready for GTC 2027 showcase.",
     icon: <Terminal className="w-5 h-5" />
   },
   {
     id: "02",
     title: "Open Traditional Industry Market",
     desc: "Real estate, F&B, manufacturing make up 70% of global GDP. We convert CEOs in these industries. One CEO = entire company adopts AI = company-wide GPU consumption. We are the entry point.",
     icon: <Network className="w-5 h-5" />
   },
   {
     id: "03",
     title: "Create Sticky Deployments",
     desc: "Every Decision Twin runs on Claude + Nemotron, deployed on OpenClaw. Every client equals long-term, persistent inference workload on NVIDIA hardware. Full-stack dependency.",
     icon: <Cpu className="w-5 h-5" />
   },
   {
     id: "04",
     title: "Reach Decision-Makers at Scale",
     desc: "Our 13M monthly reach — 70%+ business owners — delivers NVIDIA's Agentic AI narrative directly into their daily information flow. Zero cost to NVIDIA.",
     icon: <Activity className="w-5 h-5" />
   }
 ];

 return (
   <div className="min-h-screen bg-[#030508] text-slate-300 selection:bg-[#4FC3F7] selection:text-black relative overflow-x-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
     
     <div className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
     <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#4FC3F7]/5 blur-[120px] pointer-events-none"></div>

     {/* 導覽列 */}
     <nav className="fixed w-full top-0 z-50 bg-[#030508]/80 backdrop-blur-xl border-b border-white/5">
       <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
         <div className="flex items-center gap-4">
           <div className="w-8 h-8 flex items-center justify-center">
             <img src="/BrotheGaiblue.png" alt="BrotherG.AI Logo" className="w-8 h-8 object-contain" />
           </div>
           <div className="text-sm font-bold tracking-widest uppercase text-white">BrotherG.AI</div>
           <div className="hidden md:flex ml-4 px-2 py-0.5 border border-[#4FC3F7]/30 bg-[#4FC3F7]/10 text-[#4FC3F7] font-mono text-[10px] tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
             NVIDIA INCEPTION MEMBER
           </div>
         </div>
         <div className="hidden md:flex gap-4 items-center" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
           <button className="text-xs text-slate-400 hover:text-white transition-colors uppercase">Product</button>
           <button className="text-xs text-slate-400 hover:text-white transition-colors uppercase">Proof</button>
           <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="ml-4 px-5 py-2 text-xs bg-white text-black font-bold hover:bg-[#4FC3F7] hover:shadow-[0_0_15px_rgba(79,195,247,0.5)] transition-all uppercase">
             Build Your Twin
           </a>
         </div>
       </div>
     </nav>

     <main className="relative z-10 pt-32 pb-20">
       
       {/* HERO */}
       <section className="max-w-[1400px] mx-auto px-6 py-12 md:py-24">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#4FC3F7]/30 bg-[#4FC3F7]/5 mb-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
           <span className="w-2 h-2 bg-[#4FC3F7] animate-[pulse_1.5s_ease-in-out_infinite]"></span>
           <span className="text-[10px] text-[#4FC3F7] tracking-widest uppercase">System Online // 13M+ Monthly Reach</span>
         </div>

         <h1 className="text-[10vw] md:text-[100px] font-black leading-[0.85] tracking-tighter uppercase mb-8">
           <span className="block text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Digitize Your</span>
           <span className="block text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Business</span>
           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4FC3F7] to-white animate-gradient-x bg-[length:200%_auto]">
             Judgment.
           </span>
         </h1>

         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12 relative">
           <div className="md:col-span-7">
             <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
               We build <span className="text-[#4FC3F7]">Decision Twins</span> for enterprise CEOs.
             </h2>
             <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
               Your 20 years of industry expertise shouldn't sleep when you do. We extract your business logic and deploy it as a 24/7 autonomous AI system. Real estate, manufacturing, F&B—we turn your brain into enterprise software.
             </p>
             <div className="flex flex-wrap gap-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
               <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-[#4FC3F7] text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(79,195,247,0.3)]">
                 How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </a>
             </div>
           </div>

           <div className="md:col-span-5 relative" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
             <div className="absolute inset-0 bg-gradient-to-b from-[#4FC3F7]/10 to-transparent border border-white/10 p-6 flex flex-col justify-between">
               <div>
                 <div className="text-[10px] text-slate-500 mb-6 uppercase flex justify-between">
                   <span>Our Own Case Study</span>
                   <span className="text-[#4FC3F7]">Live</span>
                 </div>
                 <div className="space-y-4">
                   <div className="flex justify-between items-end border-b border-white/5 pb-2">
                     <span className="text-xs text-slate-400">Human Founders</span>
                     <span className="text-2xl font-bold text-white">1</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-white/5 pb-2">
                     <span className="text-xs text-slate-400">AI Employees (EVA + NORA)</span>
                     <span className="text-2xl font-bold text-[#4FC3F7]">2</span>
                   </div>
                   <div className="flex justify-between items-end border-b border-white/5 pb-2">
                     <span className="text-xs text-slate-400">Monthly Organic Reach</span>
                     <span className="text-2xl font-bold text-white">13,000,000+</span>
                   </div>
                   <div className="flex justify-between items-end">
                     <span className="text-xs text-slate-400">Ad Spend</span>
                     <span className="text-2xl font-bold text-white">$0</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* 產品介紹 */}
       <section className="max-w-[1400px] mx-auto px-6 py-24 border-t border-white/5">
         <div className="text-center mb-20">
           <h2 className="text-sm text-[#4FC3F7] tracking-widest uppercase mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>The Product</h2>
           <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">What is a Decision Twin?</h3>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">It's not a chatbot. It's a localized, autonomous AI system that thinks exactly like you do, executing your business logic 24/7 across your company.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-[#0A0D12] border border-white/10 p-8 hover:border-[#4FC3F7]/50 transition-colors group">
             <div className="w-12 h-12 bg-[#4FC3F7]/10 flex items-center justify-center rounded-sm mb-8 group-hover:bg-[#4FC3F7]/20 transition-colors">
               <BrainCircuit className="w-6 h-6 text-[#4FC3F7]" />
             </div>
             <h4 className="text-xl font-bold text-white mb-4">1. Knowledge Extraction</h4>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               Using our <strong className="text-white">Cognitive Resonance</strong> pipeline, we conduct structured multi-turn dialogue with you to extract your tacit industry knowledge and gut-feelings into a RAG-based knowledge graph.
             </p>
             <div className="text-[10px] text-slate-500 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Result: Your brain, digitized.</div>
           </div>

           <div className="bg-[#0A0D12] border border-white/10 p-8 hover:border-[#4FC3F7]/50 transition-colors group">
             <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm mb-8 group-hover:bg-white/10 transition-colors">
               <Layers className="w-6 h-6 text-white" />
             </div>
             <h4 className="text-xl font-bold text-white mb-4">2. Autonomous Deployment</h4>
             <p className="text-slate-400 text-sm leading-relaxed mb-6">
               Your digital twin is deployed on <strong className="text-white">OpenClaw</strong> orchestration framework. It operates platforms, answers queries, and makes operational decisions exactly as you would.
             </p>
             <div className="text-[10px] text-slate-500 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Result: 24/7 Execution.</div>
           </div>

           <div className="bg-[#0A0D12] border border-white/10 p-8 hover:border-[#4FC3F7]/50 transition-colors group relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck className="w-32 h-32" /></div>
             <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm mb-8 group-hover:bg-white/10 transition-colors relative z-10">
               <ShieldCheck className="w-6 h-6 text-white" />
             </div>
             <h4 className="text-xl font-bold text-white mb-4 relative z-10">3. Full Sovereignty</h4>
             <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
               Built on NVIDIA's <strong className="text-white">Nemotron</strong> models. The system runs on your own on-premise hardware. Your data, your trade secrets, and your AI employee never leave your servers.
             </p>
             <div className="text-[10px] text-slate-500 uppercase relative z-10" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Result: Absolute Security.</div>
           </div>
         </div>
       </section>

       {/* NVIDIA 策略 */}
       <section className="max-w-[1400px] mx-auto px-6 py-24 border-y border-white/5 bg-[#05070A]">
         <div className="mb-16">
           <h2 className="text-sm tracking-[0.2em] text-[#4FC3F7] uppercase mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>NVIDIA Inception</h2>
           <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">The Strategic Value <br/>We Bring to NVIDIA.</h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
           <div className="md:col-span-5 flex flex-col gap-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
             {strategies.map((strategy, idx) => (
               <button 
                 key={idx}
                 onClick={() => setActiveStrategy(idx)}
                 className={`w-full text-left px-6 py-5 border transition-all duration-300 flex items-center justify-between group ${
                   activeStrategy === idx 
                     ? 'bg-[#4FC3F7]/10 text-white border-[#4FC3F7]' 
                     : 'bg-[#0A0D12] text-slate-500 border-white/5 hover:border-white/20'
                 }`}
               >
                 <div className="flex items-center gap-4">
                   <span className={`text-[10px] ${activeStrategy === idx ? 'text-[#4FC3F7]' : 'text-slate-600'}`}>[{strategy.id}]</span>
                   <span className="text-xs uppercase tracking-widest font-bold">{strategy.title}</span>
                 </div>
                 <ChevronRight className={`w-4 h-4 ${activeStrategy === idx ? 'text-[#4FC3F7]' : 'text-slate-600 group-hover:text-white'}`} />
               </button>
             ))}
           </div>

           <div className="md:col-span-7">
             <div className="h-full border border-white/10 bg-black p-8 md:p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 text-white/5">
                 {strategies[activeStrategy].icon}
               </div>
               <div className="text-[10px] text-[#4FC3F7] tracking-widest mb-6 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                 STRATEGY_{strategies[activeStrategy].id}
               </div>
               <h4 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight uppercase">
                 {strategies[activeStrategy].title}
               </h4>
               <p className="text-slate-400 leading-relaxed md:text-lg">
                 {strategies[activeStrategy].desc}
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* 定價 */}
       <section className="max-w-[1400px] mx-auto px-6 py-24">
         <div className="text-center mb-16">
           <h2 className="text-sm tracking-[0.2em] text-[#4FC3F7] uppercase mb-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Investment</h2>
           <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">Revenue Architecture</h3>
           <p className="text-slate-400">Every dollar of BrotherG revenue drives persistent NVIDIA GPU consumption.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
           
           <div className="border border-white/10 bg-[#0A0D12] p-8 flex flex-col hover:bg-[#0F131A] transition-colors">
             <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Tier_01</div>
             <div className="text-2xl font-bold text-white mb-8 font-sans uppercase">Standard Twin</div>
             <div className="mb-8 border-b border-white/5 pb-6">
               <div className="text-[10px] text-slate-500 mb-2 uppercase">Setup Infrastructure</div>
               <div className="text-xl text-white">$100K - $330K</div>
             </div>
             <div className="mb-8 flex-1">
               <div className="text-[10px] text-slate-500 mb-2 uppercase">Monthly Operations</div>
               <div className="text-xl text-[#4FC3F7]">$1.6K - $16K+</div>
             </div>
             <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="w-full py-4 border border-white/20 text-xs text-white text-center hover:bg-white hover:text-black transition-colors uppercase font-bold tracking-widest">Select</a>
           </div>
           
           <div className="border border-[#4FC3F7] bg-[#4FC3F7]/5 p-8 flex flex-col relative shadow-[0_0_30px_rgba(79,195,247,0.1)]">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4FC3F7] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Recommended</div>
             <div className="text-[10px] text-[#4FC3F7] uppercase tracking-widest mb-4 mt-2">Tier_02</div>
             <div className="text-2xl font-bold text-white mb-8 font-sans uppercase">Enterprise Twin</div>
             <div className="mb-8 border-b border-white/5 pb-6">
               <div className="text-[10px] text-slate-500 mb-2 uppercase">Setup Infrastructure</div>
               <div className="text-xl text-white">1-5% Decision Value</div>
             </div>
             <div className="mb-8 flex-1">
               <div className="text-[10px] text-slate-500 mb-2 uppercase">Monthly Operations</div>
               <div className="text-xl text-[#4FC3F7]">$16K+</div>
             </div>
             <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#4FC3F7] text-black text-center text-xs hover:bg-white transition-colors uppercase font-bold tracking-widest">Select</a>
           </div>

           <div className="border border-white/10 bg-[#0A0D12] p-8 flex flex-col hover:bg-[#0F131A] transition-colors">
             <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Tier_03</div>
             <div className="text-2xl font-bold text-white mb-8 font-sans uppercase">MCN Platform</div>
             <div className="mb-8 border-b border-white/5 pb-6">
               <div className="text-[10px] text-slate-500 mb-2 uppercase">Setup Infrastructure</div>
               <div className="text-xl text-white">Exclusivity Based</div>
             </div>
             <div className="mb-8 flex-1">
               <div className="text-[10px] text-slate-500 mb-2 uppercase">Monthly Operations</div>
               <div className="text-xl text-[#4FC3F7]">Compounding</div>
             </div>
             <a href="mailto:brothergai.2022@gmail.com" className="w-full py-4 border border-white/20 text-xs text-white text-center hover:bg-white hover:text-black transition-colors uppercase font-bold tracking-widest">Contact Sales</a>
           </div>
         </div>
       </section>

       {/* FINAL CTA */}
       <section className="max-w-[1400px] mx-auto px-6 pt-24 pb-16 text-center border-t border-white/10">
         <div className="w-16 h-16 mx-auto bg-[#4FC3F7]/10 rounded-full flex items-center justify-center mb-8 relative">
           <div className="absolute inset-0 border border-[#4FC3F7]/50 rounded-full animate-ping"></div>
           <Zap className="w-6 h-6 text-[#4FC3F7]" />
         </div>
         <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">Ready to digitize your brain?</h2>
         <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
           Stop working 14-hour days. Let your Decision Twin execute your exact business logic while you sleep.
         </p>
         
         <div className="flex flex-wrap justify-center gap-4 mb-16" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
           <a href="https://line.me/ti/p/tfH7deB1fh" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#4FC3F7] transition-all flex items-center gap-3">
             <MessageSquare className="w-4 h-4" /> Message on LINE
           </a>
           <a href="https://wa.me/886968886892" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all flex items-center gap-3">
             <Phone className="w-4 h-4" /> WhatsApp
           </a>
           <a href="mailto:brothergai.2022@gmail.com" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all flex items-center gap-3">
             <Mail className="w-4 h-4" /> Email Us
           </a>
         </div>

         {/* Social Links */}
         <div className="flex justify-center gap-8 mb-12" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
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

     <style dangerouslySetInnerHTML={{__html: `
       @keyframes gradient-x {
         0%, 100% { background-position: 0% 50%; }
         50% { background-position: 100% 50%; }
       }
       .animate-gradient-x {
         animation: gradient-x 4s ease infinite;
       }
     `}} />
   </div>
 );
};

export default App;
