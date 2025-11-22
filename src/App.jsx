import React, { useState } from 'react';
import { 
  Search, ShoppingBag, Home, Plane, Car, ArrowRight
} from 'lucide-react';

const products = [
  {
    id: 'shopee',
    title: 'Shopee Analyst',
    desc: '智能選品與市場熱度預測',
    icon: ShoppingBag,
    color: 'text-[#0096E1]',
    bg: 'bg-blue-50',
    status: 'active',
    link: '/shopee'
  },
  {
    id: 'landlord',
    title: 'Landlord Shield',
    desc: '租客風險評估與合約生成',
    icon: Home,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    status: 'coming_soon',
    link: '#'
  },
  {
    id: 'travel',
    title: 'Travel Planner',
    desc: '個性化旅遊行程規劃',
    icon: Plane,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    status: 'coming_soon',
    link: '#'
  },
  {
    id: 'tesla',
    title: 'Tesla Hub',
    desc: '車輛數據與改裝建議',
    icon: Car,
    color: 'text-red-600',
    bg: 'bg-red-50',
    status: 'coming_soon',
    link: '#'
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-slate-900">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#0096E1] rounded-lg flex items-center justify-center text-white text-xl font-bold">B</div>
            <span className="text-xl font-bold">BROTHER G <span className="text-[#0096E1]">AI</span></span>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Where Business <br />
          <span className="text-[#0096E1]">Intelligence Begins.</span>
        </h1>
        <p className="text-lg text-gray-500 mb-12">
          Instant, intelligent tools designed to empower your daily decisions.
        </p>

        {/* Search */}
        <div className="w-full max-w-2xl mx-auto mb-16">
          <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-lg p-3">
            <Search size={24} className="text-gray-400 ml-2" />
            <input 
              type="text"
              placeholder="Ask anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-3 flex-1 bg-transparent border-none outline-none text-lg"
            />
            <button className="bg-[#0096E1] text-white p-3 rounded-full mr-2">
              <ArrowRight size={20}/>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((p) => (
            <div 
              key={p.id}
              className={`p-6 border rounded-2xl transition-all ${
                p.status === 'active'
                  ? 'bg-white hover:shadow-xl cursor-pointer'
                  : 'bg-gray-50 opacity-70 cursor-not-allowed'
              }`}
            >
              <div className="flex justify-between mb-4">
                <div className={`p-3 rounded-xl ${p.bg} ${p.color}`}>
                  <p.icon size={24} />
                </div>
                {p.status === 'active' ? (
                  <ArrowRight className="text-gray-300" />
                ) : (
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Coming Soon</span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-1">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
