import React, { useState } from 'react';

interface SplitBillModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
}

export const SplitBillModal: React.FC<SplitBillModalProps> = ({
  isOpen,
  onClose,
  totalAmount,
}) => {
  const [peopleCount, setPeopleCount] = useState<number>(3);
  const [splitEqually, setSplitEqually] = useState<boolean>(true);

  if (!isOpen) return null;

  const perPerson = Math.round(totalAmount / peopleCount);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-[#27313f]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-t-3xl p-5 shadow-2xl w-full max-w-lg mx-auto pb-safe">
        <div className="flex items-center justify-between pb-3 border-b border-[#e6eeff]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#470085] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">call_split</span>
            </div>
            <h3 className="text-base font-bold text-[#121c2a]">Split UPI Bill</h3>
          </div>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#121c2a]"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-[#eff4ff] text-center">
          <p className="text-xs text-[#4b4452]">Total Transaction Amount</p>
          <p className="text-2xl font-black text-[#470085]">₹{totalAmount.toLocaleString('en-IN')}</p>
        </div>

        {/* Counter */}
        <div className="mt-4 flex items-center justify-between p-3.5 rounded-xl border border-[#e6eeff]">
          <span className="text-sm font-semibold text-[#121c2a]">Number of people</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPeopleCount((c) => Math.max(2, c - 1))}
              className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#470085] font-bold flex items-center justify-center active:scale-90"
            >
              -
            </button>
            <span className="text-base font-bold text-[#121c2a] w-5 text-center">
              {peopleCount}
            </span>
            <button
              type="button"
              onClick={() => setPeopleCount((c) => Math.min(10, c + 1))}
              className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#470085] font-bold flex items-center justify-center active:scale-90"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-[#6cf8bb]/20 border border-[#006c49]/20 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#005236] font-medium">Each person owes</p>
            <p className="text-xl font-extrabold text-[#006c49]">₹{perPerson.toLocaleString('en-IN')}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(
                `Hey! Split ₹${perPerson} for PhonePe transaction of ₹${totalAmount}. Pay via UPI: suresh.k@okhdfcbank`
              );
              alert('Split payment invite link copied to clipboard!');
              onClose();
            }}
            className="px-4 py-2 rounded-full bg-[#006c49] text-white text-xs font-bold shadow-sm active:scale-95"
          >
            Copy Invite
          </button>
        </div>

        <button
          type="button"
          className="w-full mt-4 py-3 rounded-full bg-[#470085] text-white text-sm font-semibold shadow-md active:scale-98"
          onClick={onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
};
