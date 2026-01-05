/**
 * Calculates compound interest result.
 * Formula: P * (1 + r/100)^n
 */
export const calculateCompoundInterest = (principal: number, rate: number, year: number): number => {
  return principal * Math.pow(1 + rate / 100, year);
};

export const formatCurrency = (value: number, isMultiplier: boolean): string => {
  // Handle very large numbers with compact notation to save space
  if (value >= 1000000000000) return (value / 1000000000000).toFixed(2) + 'T';
  if (value >= 1000000000) return (value / 1000000000).toFixed(2) + 'B';
  if (value >= 1000000) return (value / 1000000).toFixed(2) + 'M';

  if (isMultiplier) {
    // Optimize decimals for multipliers based on magnitude to fit in narrow columns
    if (value >= 1000) return value.toFixed(0);
    if (value >= 100) return value.toFixed(1);
    return value.toFixed(3);
  }
  
  // Standard formatting for readable amounts < 1M
  return new Intl.NumberFormat('zh-TW', {
    style: 'decimal',
    maximumFractionDigits: 0,
  }).format(value);
};