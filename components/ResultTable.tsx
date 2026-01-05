import React, { useMemo } from 'react';
import { calculateCompoundInterest, formatCurrency } from '../utils/math';

interface ResultTableProps {
  principal: number;
}

export const ResultTable: React.FC<ResultTableProps> = ({ principal }) => {
  // Generate ranges
  const years = useMemo(() => Array.from({ length: 40 }, (_, i) => i + 1), []);
  
  // Rates: 1% to 30% (step 1), then 35%, 40%, 45%, 50%
  const rates = useMemo(() => {
    const range = Array.from({ length: 30 }, (_, i) => i + 1); // 1...30
    return [...range, 35, 40, 45, 50];
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col h-[75vh]">
      <div className="overflow-auto flex-1 relative custom-scrollbar">
        <table className="border-collapse w-full text-right">
          <thead className="bg-slate-800 text-white">
            <tr>
              {/* Top-Left Empty Corner (Sticky) */}
              <th className="sticky top-0 left-0 z-30 bg-slate-900 px-2 py-2 min-w-[40px] text-center font-bold border-b border-r border-slate-600 shadow-md text-xs">
                年
              </th>
              
              {/* Rate Headers (Sticky Top) */}
              {rates.map((rate) => (
                <th
                  key={`header-${rate}`}
                  className="sticky top-0 z-20 bg-slate-800 px-1 py-2 min-w-[60px] font-bold border-b border-slate-600 whitespace-nowrap text-xs text-center"
                >
                  {rate}%
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {years.map((year) => (
              <tr key={`row-${year}`} className="hover:bg-blue-50 transition-colors group">
                {/* Year Column (Sticky Left) */}
                <td className="sticky left-0 z-10 bg-slate-100 group-hover:bg-blue-100 px-2 py-1.5 font-bold text-slate-700 text-center border-r border-slate-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] text-xs">
                  {year}
                </td>
                
                {/* Data Cells */}
                {rates.map((rate) => {
                   const value = calculateCompoundInterest(principal, rate, year);
                   return (
                    <td
                      key={`cell-${year}-${rate}`}
                      className={`px-1 py-1.5 text-slate-600 border-r border-slate-50 last:border-none tabular-nums whitespace-nowrap text-xs
                        ${year % 5 === 0 ? 'border-b border-slate-200' : ''} 
                        ${rate % 5 === 0 ? 'border-r-slate-200' : ''}
                      `}
                    >
                      {formatCurrency(value, principal === 1)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-50 p-2 text-xs text-slate-500 border-t border-slate-200 text-center">
        數據顯示每年的複利累積結果。
      </div>
    </div>
  );
};