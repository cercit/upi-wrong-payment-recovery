import React, { useState } from 'react';
import { ScreenTab } from '../../types';

interface RecoveryRequestScreenProps {
  onNavigate: (tab: ScreenTab) => void;
  onShowToast: (message: string) => void;
}

export const RecoveryRequestScreen: React.FC<RecoveryRequestScreenProps> = ({
  onNavigate,
  onShowToast,
}) => {
  const [selectedReason, setSelectedReason] = useState<string>('typo');
  const [note, setNote] = useState<string>(
    'Hi Ramesh, I mistakenly sent ₹4,500 to your UPI ID instead of another contact. Please return it via PhonePe Easy Return.'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const reasons = [
    {
      id: 'typo',
      title: 'Typo in recipient UPI ID',
      desc: 'Misspelled VPA or phone digit',
      icon: 'spellcheck',
    },
    {
      id: 'wrong_contact',
      title: 'Sent to wrong contact',
      desc: 'Picked unintended payee from book',
      icon: 'contacts',
    },
    {
      id: 'duplicate',
      title: 'Duplicate transfer',
      desc: 'Debited twice during slow network',
      icon: 'content_copy',
    },
  ];

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onShowToast('Recovery ticket REC-884920 registered with Axis Bank');
      setTimeout(() => {
        onNavigate('live-recovery-tracker');
      }, 1000);
    }, 1100);
  };

  return (
    <div className="flex flex-col w-full pb-32">
      <div className="px-4 pt-1 flex flex-col gap-3">
        {/* Top Alert Card: Safety & Auto-fill Guarantee */}
        <div className="w-full bg-[#eff4ff] rounded-2xl p-3.5 shadow-xs border border-[#d9e3f6]/60 flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-[#470085]/10 flex items-center justify-center flex-shrink-0 text-[#470085] mt-0.5">
            <span
              className="material-symbols-outlined text-[19px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              shield_person
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] uppercase tracking-wider text-[#470085] font-bold">
                Auto-Linked Txn
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#470085]/40" />
              <span className="text-xs text-[#4b4452] font-semibold">#429188201948</span>
            </div>
            <p className="text-xs text-[#121c2a] mt-1 leading-snug">
              Auto-filled from Txn #429188201948. We will notify recipient's bank and send an
              instant Easy-Return prompt.
            </p>
          </div>
        </div>

        {/* Golden Window Badge */}
        <div className="w-full bg-[#6cf8bb]/20 rounded-2xl p-3.5 shadow-xs border border-[#006c49]/20 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#6cf8bb] flex items-center justify-center text-[#002113] flex-shrink-0">
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-[#121c2a] font-semibold flex items-center gap-1.5 flex-wrap">
              Within 24-hr Golden Window
              <span className="bg-[#6ffbbe] text-[#002113] text-[10px] px-2 py-0.5 rounded-full font-bold">
                94% Success
              </span>
            </p>
            <p className="text-xs text-[#006c49] font-medium">
              Verified: High recovery probability for fast dispute routing
            </p>
          </div>
        </div>

        {/* Transaction Summary Card */}
        <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#e6eeff] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#4b4452] uppercase tracking-wide font-medium">
              Amount to Recover
            </span>
            <span className="bg-[#eff4ff] text-[#4b4452] text-[11px] px-2.5 py-0.5 rounded-full font-medium">
              UPI Instant
            </span>
          </div>
          <div className="flex items-baseline gap-1 font-currency">
            <span className="text-3xl text-[#470085] font-extrabold tracking-tight">₹4,500</span>
            <span className="text-sm text-[#4b4452] font-semibold">.00</span>
          </div>
          <div className="w-full h-px bg-[#d9e3f6]/40" />

          {/* Recipient Detail */}
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full bg-[#dee9fc] flex items-center justify-center text-[#470085] text-base font-bold flex-shrink-0">
              RK
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white shadow-xs flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[11px] text-[#470085]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  sync_alt
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm text-[#121c2a] font-bold truncate">Ramesh Kumar</h2>
                <span
                  className="material-symbols-outlined text-[15px] text-[#006c49]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  title="Verified Recipient"
                >
                  check_circle
                </span>
              </div>
              <p className="text-xs text-[#4b4452] truncate">ramesh.k98@okaxis</p>
            </div>
          </div>

          {/* Bank & Timestamp Grid */}
          <div className="grid grid-cols-2 gap-2 bg-[#eff4ff] p-3 rounded-xl border border-[#d9e3f6]/50">
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] text-[#4b4452]">Debited Account</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#470085]">
                  account_balance
                </span>
                <span className="text-xs text-[#121c2a] font-semibold truncate">
                  HDFC •••• 4821
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] text-[#4b4452]">Timestamp</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#4b4452]">
                  schedule
                </span>
                <span className="text-xs text-[#121c2a] font-semibold truncate">
                  24 Oct, 02:45 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Reason for Recovery Form Section */}
        <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#e6eeff] flex flex-col gap-3">
          <div>
            <h3 className="text-sm text-[#121c2a] font-bold">Select Reason</h3>
            <p className="text-xs text-[#4b4452] mt-0.5">
              Helps recipient understand the genuine error
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {reasons.map((r) => {
              const isSelected = selectedReason === r.id;
              return (
                <label
                  key={r.id}
                  onClick={() => setSelectedReason(r.id)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-[#eedbff]/30 border-[#470085]'
                      : 'bg-[#eff4ff] border-transparent hover:bg-[#e6eeff]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#470085]/10 text-[#470085]'
                          : 'bg-[#dee9fc] text-[#121c2a]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {r.icon}
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span
                        className={`text-xs font-bold truncate ${
                          isSelected ? 'text-[#121c2a]' : 'text-[#121c2a]'
                        }`}
                      >
                        {r.title}
                      </span>
                      <span className="text-[11px] text-[#4b4452] truncate">
                        {r.desc}
                      </span>
                    </div>
                  </div>
                  <input
                    type="radio"
                    name="recovery_reason"
                    checked={isSelected}
                    onChange={() => setSelectedReason(r.id)}
                    className="accent-[#470085] w-4 h-4 flex-shrink-0 ml-2"
                  />
                </label>
              );
            })}
          </div>

          {/* Note To Recipient */}
          <div className="flex flex-col gap-1.5 mt-1">
            <div className="flex items-center justify-between">
              <label htmlFor="recovery-note" className="text-xs text-[#121c2a] font-semibold">
                Note to Ramesh (Optional)
              </label>
              <span className="text-[11px] text-[#4b4452]" id="note-char-count">
                {note.length}/200
              </span>
            </div>
            <div className="relative bg-[#eff4ff] rounded-xl p-3 border border-[#d9e3f6]/60 focus-within:bg-white focus-within:border-[#470085] focus-within:shadow-xs transition-all">
              <textarea
                id="recovery-note"
                maxLength={200}
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-transparent resize-none text-xs text-[#121c2a] outline-none leading-relaxed"
              />
              <div className="flex items-center gap-1.5 pt-1 text-[#470085]">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                <span className="text-[11px] font-semibold">
                  Includes secure single-tap reversal link
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Notice Card */}
        <div className="w-full bg-[#dee9fc]/40 rounded-xl p-3 flex items-start gap-2.5 mb-2 border border-[#d9e3f6]/50">
          <span className="material-symbols-outlined text-[18px] text-[#4b4452] flex-shrink-0 mt-0.5">
            policy
          </span>
          <p className="text-xs text-[#4b4452] leading-relaxed">
            Under RBI guidelines, recipient's bank will be officially notified. Both parties will be
            updated on the live tracker.
          </p>
        </div>
      </div>

      {/* Sticky Bottom Confirmation Bar */}
      <div className="fixed bottom-16 left-0 right-0 z-30 bg-[#f8f9ff]/95 backdrop-blur-md px-4 py-3 shadow-[0_-4px_20px_rgba(71,0,133,0.06)] border-t border-[#e6eeff]">
        <div className="w-full max-w-lg mx-auto flex flex-col gap-2">
          <button
            type="button"
            id="confirm-recovery-btn"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full h-12 text-white rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-md active:scale-99 transition-all ${
              isSuccess
                ? 'bg-[#006c49]'
                : 'bg-[#470085] hover:bg-[#5f259f]'
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Initiating Recovery Ticket...</span>
              </>
            ) : isSuccess ? (
              <>
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                <span>Recovery Request Sent</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">
                  send_time_extension
                </span>
                <span>Confirm &amp; Send Recovery Request</span>
              </>
            )}
          </button>
          <div className="flex items-center justify-center gap-2 text-[#4b4452]">
            <span className="material-symbols-outlined text-[14px] text-[#006c49]">timer</span>
            <span className="text-[11px] font-medium">Under 10 seconds execution</span>
            <span className="inline-block w-1 h-1 rounded-full bg-[#cdc3d4]" />
            <span className="material-symbols-outlined text-[14px] text-[#470085]">gavel</span>
            <span className="text-[11px] font-medium">DPDP Act Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};
