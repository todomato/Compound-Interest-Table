import React, { useState } from 'react';
import { Controls } from './components/Controls';
import { ResultTable } from './components/ResultTable';

const App: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(1);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
      <div className="max-w-[95vw] mx-auto py-8 px-4">
        
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            複利效應查詢表
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            愛因斯坦曾說：「複利是世界第八大奇蹟。」此表格協助您快速查詢不同利率與年份下的複利增長倍數。
          </p>
        </header>

        {/* Controls */}
        <Controls principal={principal} setPrincipal={setPrincipal} />

        {/* Main Table */}
        <ResultTable principal={principal} />

        {/* Footer info */}
        <footer className="mt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Compound Interest Visualizer. Designed for clarity.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;