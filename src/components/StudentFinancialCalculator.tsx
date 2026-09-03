'use client';

import React, { useState } from 'react';

interface StudentFinancialCalculatorProps {
  onOpenConsultation?: (agentName?: string) => void;
}

export const StudentFinancialCalculator: React.FC<StudentFinancialCalculatorProps> = ({
  onOpenConsultation,
}) => {
  // Inputs State
  const [tuitionFee, setTuitionFee] = useState<number>(35000);
  const [depositPaid, setDepositPaid] = useState<number>(10000);
  const [hasPartner, setHasPartner] = useState<boolean>(false);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [schoolAgeChildrenCount, setSchoolAgeChildrenCount] = useState<number>(0);
  const [region, setRegion] = useState<'asia' | 'world'>('asia');
  const [currency, setCurrency] = useState<'AUD' | 'INR' | 'NPR' | 'PKR' | 'BDT'>('AUD');

  // Currency Exchange Rates (Base: 1 AUD)
  const exchangeRates: Record<string, { symbol: string; rate: number; label: string }> = {
    AUD: { symbol: 'AUD $', rate: 1, label: 'Australian Dollar (AUD)' },
    INR: { symbol: '₹', rate: 56.2, label: 'Indian Rupee (INR)' },
    NPR: { symbol: 'Rs.', rate: 89.5, label: 'Nepalese Rupee (NPR)' },
    PKR: { symbol: 'Rs.', rate: 185.0, label: 'Pakistani Rupee (PKR)' },
    BDT: { symbol: '৳', rate: 79.8, label: 'Bangladeshi Taka (BDT)' },
  };

  // Official DHA 2026 Threshold Constants
  const PRIMARY_STUDENT_LIVING = 29710;
  const PARTNER_LIVING = 10394;
  const CHILD_LIVING = 4449;
  const CHILD_SCHOOLING = 13502;
  const TRAVEL_ASIA = 2000;
  const TRAVEL_WORLD = 3000;

  // Calculations
  const netTuition = Math.max(0, tuitionFee - depositPaid);
  const travelCost = region === 'asia' ? TRAVEL_ASIA : TRAVEL_WORLD;
  const partnerCost = hasPartner ? PARTNER_LIVING : 0;
  const childrenLivingCost = childrenCount * CHILD_LIVING;
  const childrenSchoolingCost = Math.min(childrenCount, schoolAgeChildrenCount) * CHILD_SCHOOLING;

  const totalLivingCosts = PRIMARY_STUDENT_LIVING + partnerCost + childrenLivingCost;
  const totalFamilyCosts = totalLivingCosts + childrenSchoolingCost;
  const grandTotalAUD = netTuition + totalFamilyCosts + travelCost;

  // Conversion helper
  const formatCurrency = (amountAUD: number) => {
    const curr = exchangeRates[currency];
    const converted = amountAUD * curr.rate;
    return `${curr.symbol} ${Math.round(converted).toLocaleString('en-US')}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 font-body">
      {/* Top Banner Notice */}
      <div className="bg-[#0163C8]/10 border border-[#0163C8]/30 rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
        <div className="flex items-center space-x-3 text-[#061D38]">
          <span className="text-2xl">🇦🇺</span>
          <div>
            <div className="font-bold text-xs sm:text-sm">Official DHA 2026 Financial Capacity Guidelines</div>
            <div className="text-[11px] text-zinc-600">Updated per Department of Home Affairs Subclass 500 Student Visa regulations</div>
          </div>
        </div>

        {/* Currency Selector */}
        <div className="flex items-center space-x-2 shrink-0 bg-white px-3.5 py-2 rounded-2xl border border-[#C2DAF3] shadow-xs">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Currency:</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as any)}
            className="text-xs font-bold text-[#061D38] bg-transparent focus:outline-none cursor-pointer"
          >
            {Object.entries(exchangeRates).map(([code, config]) => (
              <option key={code} value={code}>
                {code} ({config.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Grid: Inputs (Left) & Results Summary (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Calculator Inputs (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#C2DAF3] p-6 sm:p-8 shadow-lg space-y-6">
          <div className="border-b border-[#C2DAF3]/60 pb-4">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#061D38] flex items-center gap-2">
              <span>🧮</span>
              <span>1. Enter Your Academic & Family Details</span>
            </h3>
            <p className="text-xs text-zinc-500 mt-1">Adjust your 1st year tuition fees, deposit paid, and accompanying dependents.</p>
          </div>

          {/* Input 1: Annual Tuition Fee */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-[#061D38] uppercase tracking-wider text-[11px]">
                1st Year Course Tuition Fee (AUD $) *
              </label>
              <span className="font-mono font-bold text-[#0163C8] text-sm">AUD ${tuitionFee.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={10000}
              max={60000}
              step={1000}
              value={tuitionFee}
              onChange={(e) => setTuitionFee(Number(e.target.value))}
              className="w-full h-2 bg-[#F4F8FC] rounded-lg appearance-none cursor-pointer accent-[#0163C8]"
            />
            <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
              <span>AUD $10,000</span>
              <span>AUD $35,000</span>
              <span>AUD $60,000</span>
            </div>
          </div>

          {/* Input 2: Deposit Paid to University */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-[#061D38] uppercase tracking-wider text-[11px]">
                Deposit / Initial Fee Paid to Institution (AUD $)
              </label>
              <span className="font-mono font-bold text-[#96F189] bg-[#061D38] px-2 py-0.5 rounded text-xs">
                - AUD ${depositPaid.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={Math.min(tuitionFee, 30000)}
              step={1000}
              value={depositPaid}
              onChange={(e) => setDepositPaid(Number(e.target.value))}
              className="w-full h-2 bg-[#F4F8FC] rounded-lg appearance-none cursor-pointer accent-[#96F189]"
            />
            <p className="text-[11px] text-zinc-500">
              Net Tuition Balance Required: <strong className="text-[#061D38]">AUD ${netTuition.toLocaleString()}</strong>
            </p>
          </div>

          {/* Input 3: Accompanying Family Members */}
          <div className="space-y-4 pt-2 border-t border-[#C2DAF3]/60">
            <label className="block font-bold text-[#061D38] uppercase tracking-wider text-[11px]">
              2. Accompanying Family Members (Visa Dependents)
            </label>

            {/* Partner Toggle */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F4F8FC] border border-[#C2DAF3]/80">
              <div>
                <div className="font-bold text-xs text-[#061D38]">Accompanying Spouse / De Facto Partner</div>
                <div className="text-[10px] text-zinc-500">DHA Living Allowance: +AUD $10,394/yr</div>
              </div>
              <button
                type="button"
                onClick={() => setHasPartner(!hasPartner)}
                className={`w-12 h-6 rounded-full transition-colors p-1 flex items-center cursor-pointer ${
                  hasPartner ? 'bg-[#0163C8] justify-end' : 'bg-zinc-300 justify-start'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white shadow-sm" />
              </button>
            </div>

            {/* Children Counter */}
            <div className="p-4 rounded-2xl bg-[#F4F8FC] border border-[#C2DAF3]/80 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-[#061D38]">Accompanying Dependent Children</div>
                  <div className="text-[10px] text-zinc-500">DHA Living Allowance: +AUD $4,449/yr per child</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={() => {
                      const newCount = Math.max(0, childrenCount - 1);
                      setChildrenCount(newCount);
                      if (schoolAgeChildrenCount > newCount) setSchoolAgeChildrenCount(newCount);
                    }}
                    className="w-8 h-8 rounded-full bg-white border border-[#C2DAF3] font-bold text-sm text-[#061D38] hover:bg-[#0163C8] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-[#061D38] w-4 text-center">{childrenCount}</span>
                  <button
                    type="button"
                    onClick={() => setChildrenCount(childrenCount + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-[#C2DAF3] font-bold text-sm text-[#061D38] hover:bg-[#0163C8] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {childrenCount > 0 && (
                <div className="pt-2 border-t border-[#C2DAF3]/60 flex items-center justify-between text-xs animate-fadeIn">
                  <span className="text-zinc-600">School-Aged Children (5–18 yrs):</span>
                  <select
                    value={schoolAgeChildrenCount}
                    onChange={(e) => setSchoolAgeChildrenCount(Number(e.target.value))}
                    className="px-3 py-1 rounded-xl bg-white border border-[#C2DAF3] text-[#061D38] font-bold text-xs focus:outline-none"
                  >
                    {Array.from({ length: childrenCount + 1 }, (_, i) => (
                      <option key={i} value={i}>
                        {i} child ({i * CHILD_SCHOOLING} AUD/yr schooling)
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Input 4: Travel Region */}
          <div className="space-y-2 pt-2 border-t border-[#C2DAF3]/60">
            <label className="block font-bold text-[#061D38] uppercase tracking-wider text-[11px]">
              3. Home Country Region (Airfare Allowance)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRegion('asia')}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  region === 'asia'
                    ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md'
                    : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3] hover:bg-white'
                }`}
              >
                <div className="font-bold text-xs">Asia / South Asia</div>
                <div className="text-[10px] opacity-80 mt-0.5">DHA Travel: AUD $2,000</div>
              </button>

              <button
                type="button"
                onClick={() => setRegion('world')}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  region === 'world'
                    ? 'bg-[#0163C8] text-white border-[#0163C8] shadow-md'
                    : 'bg-[#F4F8FC] text-[#061D38] border-[#C2DAF3] hover:bg-white'
                }`}
              >
                <div className="font-bold text-xs">Rest of World</div>
                <div className="text-[10px] opacity-80 mt-0.5">DHA Travel: AUD $3,000</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Calculated Total & Breakdown (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 sticky top-28">
          {/* Main Result Card */}
          <div className="bg-[#061D38] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#0163C8] space-y-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0163C8]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#96F189]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0163C8]/40 border border-[#0163C8] text-[#96F189] text-[10px] font-bold uppercase tracking-wider">
                <span>📊 OFFICIAL 2026 ESTIMATE</span>
              </div>

              <div>
                <div className="text-xs text-zinc-300 font-medium">Total Proof of Funds Required (AUD):</div>
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mt-1">
                  AUD ${grandTotalAUD.toLocaleString()}
                </div>
              </div>

              {/* Currency Equivalent Banner */}
              {currency !== 'AUD' && (
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
                  <div className="text-[10px] text-zinc-300 uppercase tracking-wider font-bold">
                    Equivalent in {exchangeRates[currency].label}:
                  </div>
                  <div className="text-2xl font-bold text-[#96F189] font-mono mt-0.5">
                    {formatCurrency(grandTotalAUD)}
                  </div>
                  <div className="text-[9px] text-zinc-400 mt-1">
                    *Based on current indicative rate (1 AUD = {exchangeRates[currency].rate} {currency})
                  </div>
                </div>
              )}

              {/* Itemized Financial Breakdown */}
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#96F189]">
                  Itemized Funding Breakdown:
                </div>

                <div className="flex justify-between items-center text-zinc-200">
                  <span>📘 Primary Student Living Costs:</span>
                  <span className="font-mono font-bold text-white">AUD $29,710</span>
                </div>

                <div className="flex justify-between items-center text-zinc-200">
                  <span>🎓 Net Tuition Balance:</span>
                  <span className="font-mono font-bold text-white">AUD ${netTuition.toLocaleString()}</span>
                </div>

                {hasPartner && (
                  <div className="flex justify-between items-center text-zinc-200">
                    <span>👩‍❤️‍👨 Spouse / Partner Living:</span>
                    <span className="font-mono font-bold text-white">AUD $10,394</span>
                  </div>
                )}

                {childrenCount > 0 && (
                  <div className="flex justify-between items-center text-zinc-200">
                    <span>👶 Children Living ({childrenCount}):</span>
                    <span className="font-mono font-bold text-white">AUD ${childrenLivingCost.toLocaleString()}</span>
                  </div>
                )}

                {schoolAgeChildrenCount > 0 && (
                  <div className="flex justify-between items-center text-zinc-200">
                    <span>🎒 Children Schooling:</span>
                    <span className="font-mono font-bold text-white">AUD ${childrenSchoolingCost.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-zinc-200">
                  <span>✈️ Travel & OSHC Allowance:</span>
                  <span className="font-mono font-bold text-white">AUD ${travelCost.toLocaleString()}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => onOpenConsultation && onOpenConsultation('Mohit Kharbanda')}
                  className="w-full py-4 rounded-2xl bg-[#96F189] text-[#061D38] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#96F189]/20 cursor-pointer"
                >
                  📅 Book Financial Audit with MARA Agent →
                </button>

                <a
                  href="/calculator"
                  className="block text-center w-full py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold text-xs hover:bg-white/20 transition-all cursor-pointer"
                >
                  Check General Skilled Visa Points →
                </a>
              </div>
            </div>
          </div>

          {/* Accepted DHA Proof of Funds Guide Card */}
          <div className="bg-white rounded-3xl border border-[#C2DAF3] p-6 shadow-md space-y-4">
            <h4 className="font-heading font-bold text-sm text-[#061D38] flex items-center gap-2">
              <span>🛡️</span>
              <span>DHA Accepted Proof of Funds Sources</span>
            </h4>

            <ul className="text-xs text-zinc-600 space-y-2 font-normal">
              <li className="flex items-start gap-2">
                <span className="text-[#0163C8] font-bold">✓</span>
                <span><strong>Personal Savings Accounts</strong> (with 3-6 months statement history)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0163C8] font-bold">✓</span>
                <span><strong>Fixed Deposits (FDs)</strong> with bank confirmation certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0163C8] font-bold">✓</span>
                <span><strong>Nationalized Bank Education Loans</strong> (Sanction Letter)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0163C8] font-bold">✓</span>
                <span><strong>Government Provident Funds</strong> (EPF / PPF withdrawal capability)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0163C8] font-bold">✓</span>
                <span><strong>Sponsor Affidavits</strong> (Parents, Siblings, or Spouse)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
