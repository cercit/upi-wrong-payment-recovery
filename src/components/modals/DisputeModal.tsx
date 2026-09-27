import React, { useState } from 'react';

interface DisputeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

export const DisputeModal: React.FC<DisputeModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [selectedReason, setSelectedReason] = useState<string>(
    'This is payment for goods, services, or rent'
  );

  if (!isOpen) return null;

  const reasons = [
    'This is payment for goods, services, or rent',
    'I already refunded Suresh through another method',
    'I recognize Suresh and this was an agreed transfer',
  ];

  const handleSubmit = () => {
    onSubmit(selectedReason);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-[#27313f]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-t-3xl p-5 shadow-2xl w-full max-w-lg mx-auto max-h-[85vh] overflow-y-auto pb-safe">
        <div className="flex items-center justify-between pb-2 border-b border-[#e6eeff]">
          <h3 className="text-base font-bold text-[#121c2a]">
            Claim Dispute or Verification
          </h3>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#121c2a] hover:bg-[#dee9fc]"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <p className="text-sm text-[#4b4452] mt-3">
          Select why ₹4,500 should not be reversed to Suresh Kumar:
        </p>

        <div className="space-y-2 mt-4">
          {reasons.map((reason) => (
            <label
              key={reason}
              className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all border ${
                selectedReason === reason
                  ? 'bg-[#eedbff]/30 border-[#470085]'
                  : 'bg-[#eff4ff] border-transparent hover:bg-[#e6eeff]'
              }`}
            >
              <input
                type="radio"
                name="disputeReason"
                checked={selectedReason === reason}
                onChange={() => setSelectedReason(reason)}
                className="accent-[#470085] w-4 h-4 mt-0.5"
              />
              <span className="text-sm text-[#121c2a] leading-tight font-medium">
                {reason}
              </span>
            </label>
          ))}
        </div>

        <div className="mt-5 p-3 rounded-xl bg-[#eff4ff] flex items-start gap-2 text-xs text-[#4b4452]">
          <span className="material-symbols-outlined text-[#470085] text-[18px] shrink-0 mt-0.5">
            info
          </span>
          <span>
            Submitting a dispute pauses automated bank reversal and initiates NPCI-mandated
            mutual verification.
          </span>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            className="flex-1 py-3 rounded-full bg-[#eff4ff] hover:bg-[#dee9fc] text-[#121c2a] text-sm font-semibold transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="flex-1 py-3 rounded-full bg-[#5f259f] hover:bg-[#470085] text-white text-sm font-semibold shadow-md active:scale-98 transition-all"
            onClick={handleSubmit}
          >
            Submit Response
          </button>
        </div>
      </div>
    </div>
  );
};
