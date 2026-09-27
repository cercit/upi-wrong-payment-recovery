import React from 'react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseId?: string;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  caseId = 'REC-884920',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-[#27313f]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-t-3xl p-5 shadow-2xl w-full max-w-lg mx-auto max-h-[85vh] overflow-y-auto pb-safe">
        <div className="flex items-center justify-between pb-3 border-b border-[#e6eeff]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#eedbff] text-[#470085] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">headset_mic</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-[#121c2a]">PhonePe 24x7 Priority Support</h3>
              <p className="text-xs text-[#006c49] font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#006c49] animate-pulse"></span>
                Dispute Helpdesk Online
              </p>
            </div>
          </div>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#121c2a] hover:bg-[#dee9fc]"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Case Card */}
        <div className="mt-4 p-4 rounded-xl bg-[#eff4ff] border border-[#d9e3f6]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-[#4b4452] font-semibold uppercase tracking-wider">
              Linked Ticket
            </span>
            <span className="text-xs font-bold text-[#470085] bg-[#eedbff] px-2 py-0.5 rounded-full">
              High Priority (P0)
            </span>
          </div>
          <p className="text-sm font-bold text-[#121c2a]">Case ID: #{caseId}</p>
          <p className="text-xs text-[#4b4452] mt-1">
            Disputed Amount: <strong className="text-[#121c2a]">₹4,500</strong> • Recipient: Ramesh Kumar
          </p>
        </div>

        {/* Contact Options */}
        <div className="space-y-3 mt-4">
          <a
            href="tel:08068727374"
            className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#e6eeff] hover:border-[#470085] hover:bg-[#eff4ff] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eff4ff] group-hover:bg-[#eedbff] text-[#470085] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#121c2a]">Instant Priority Callback</p>
                <p className="text-xs text-[#4b4452]">Toll-Free • Typical wait &lt; 45 secs</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#7c7483] group-hover:text-[#470085] text-[20px]">
              chevron_right
            </span>
          </a>

          <button
            type="button"
            onClick={() => {
              alert(`Connecting to live chat agent for Case #${caseId}...`);
              onClose();
            }}
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#e6eeff] hover:border-[#470085] hover:bg-[#eff4ff] transition-all group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eff4ff] group-hover:bg-[#eedbff] text-[#470085] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#121c2a]">Live Chat with Resolution Specialist</p>
                <p className="text-xs text-[#4b4452]">Share screenshots or bank statements</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#7c7483] group-hover:text-[#470085] text-[20px]">
              chevron_right
            </span>
          </button>
        </div>

        {/* Protection Note */}
        <div className="mt-4 p-3 rounded-xl bg-[#e6eeff]/60 flex items-start gap-2 text-xs text-[#4b4452]">
          <span className="material-symbols-outlined text-[#006c49] text-[18px] shrink-0">
            verified_user
          </span>
          <span>
            Protected under Reserve Bank of India (RBI) circular on unintended electronic fund transfers and NPCI UPI dispute guidelines.
          </span>
        </div>

        <button
          type="button"
          className="w-full mt-5 py-3 rounded-full bg-[#470085] text-white text-sm font-semibold shadow-md hover:bg-[#5f259f] active:scale-98 transition-all"
          onClick={onClose}
        >
          Done
        </button>
      </div>
    </div>
  );
};
