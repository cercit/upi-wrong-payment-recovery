import React, { useState } from 'react';

interface BalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BalanceModal: React.FC<BalanceModalProps> = ({ isOpen, onClose }) => {
  const [pinEntered, setPinEntered] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCheck = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPinEntered(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-[#27313f]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-t-3xl p-5 shadow-2xl w-full max-w-lg mx-auto pb-safe">
        <div className="flex items-center justify-between pb-3 border-b border-[#e6eeff]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#470085] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
            </div>
            <h3 className="text-base font-bold text-[#121c2a]">Bank Balance</h3>
          </div>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#121c2a]"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-[#eff4ff] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#470085] shadow-xs">
              <span className="material-symbols-outlined text-[20px]">account_balance</span>
            </div>
            <div>
              <p className="text-sm font-bold text-[#121c2a]">HDFC Bank</p>
              <p className="text-xs text-[#4b4452]">Savings A/c •••• 4821</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#6cf8bb]/30 text-[#00714d]">
            Primary
          </span>
        </div>

        {pinEntered ? (
          <div className="my-5 text-center p-5 rounded-2xl bg-[#6cf8bb]/20 border border-[#006c49]/20">
            <p className="text-xs text-[#005236] font-semibold uppercase tracking-wider">
              Available Balance
            </p>
            <p className="text-3xl font-extrabold text-[#006c49] mt-1">₹38,940.50</p>
            <p className="text-[11px] text-[#00714d] mt-1 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[14px]">sync</span>
              Updated just now via UPI NPCI CBS
            </p>
          </div>
        ) : (
          <div className="my-6 text-center">
            <button
              type="button"
              onClick={handleCheck}
              disabled={loading}
              className="px-6 py-3 rounded-full bg-[#470085] text-white text-sm font-semibold shadow-md active:scale-95 disabled:opacity-50 inline-flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
                  <span>Fetching CBS Balance...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">pin</span>
                  <span>Fetch Balance via UPI PIN</span>
                </>
              )}
            </button>
          </div>
        )}

        <button
          type="button"
          className="w-full py-3 rounded-full bg-[#eff4ff] text-[#121c2a] text-sm font-semibold hover:bg-[#dee9fc] transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
