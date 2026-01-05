import React from 'react';

interface ControlsProps {
  principal: number;
  setPrincipal: (value: number) => void;
}

export const Controls: React.FC<ControlsProps> = ({ principal, setPrincipal }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-4 z-40 bg-opacity-95 backdrop-blur-sm">
      <div className="flex flex-col gap-1 w-full md:w-auto">
        <label htmlFor="principal" className="text-sm font-bold text-slate-500 uppercase tracking-wider">
          本金金額 (Principal)
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
          <input
            id="principal"
            type="number"
            min="1"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="pl-8 pr-4 py-2 w-full md:w-64 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all font-bold text-slate-700 text-lg"
          />
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {principal === 1 ? "目前顯示為倍數表 (Multiplier)" : "目前顯示為實際金額預測"}
        </p>
      </div>
      
      <div className="flex gap-2">
         <button 
           onClick={() => setPrincipal(1)}
           className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${principal === 1 ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
         >
           1 (倍數)
         </button>
         <button 
           onClick={() => setPrincipal(10000)}
           className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${principal === 10000 ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
         >
           10,000
         </button>
         <button 
           onClick={() => setPrincipal(1000000)}
           className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${principal === 1000000 ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
         >
           100萬
         </button>
      </div>
    </div>
  );
};