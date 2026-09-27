import React, { useState } from 'react';
import { ASSETS } from '../../data/mockData';

interface EasyReturnScreenProps {
  onOpenUpiPin: () => void;
  onOpenDispute: () => void;
  onShowToast: (message: string) => void;
}

export const EasyReturnScreen: React.FC<EasyReturnScreenProps> = ({
  onOpenUpiPin,
  onOpenDispute,
  onShowToast,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full pb-20">
      <div className="px-4 pt-1 space-y-3">
        {/* Top Warm Alert Banner */}
        <div className="bg-[#ffddb8] rounded-2xl p-4 shadow-xs border border-[#ffb95f]/40">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#653e00]/10 flex items-center justify-center flex-shrink-0 text-[#653e00]">
              <span className="material-symbols-outlined text-[24px]">notification_important</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider bg-[#653e00]/15 text-[#653e00] px-2 py-0.5 rounded-full font-bold">
                  Action Requested
                </span>
                <span className="text-[11px] text-[#653e00]/80">24 Oct, 02:45 PM</span>
              </div>
              <h2 className="text-sm text-[#2a1700] font-bold mt-1">
                Accidental Payment Reported
              </h2>
              <p className="text-xs text-[#653e00] mt-0.5 leading-snug">
                Suresh K. reported sending{' '}
                <strong className="text-[#2a1700] font-bold">₹4,500</strong> to you by mistake.
              </p>
            </div>
          </div>
        </div>

        {/* Sender & Inbound Transaction Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e6eeff]">
          <div className="flex items-start justify-between gap-2 pb-3 border-b border-[#e6eeff]">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#eff4ff] flex-shrink-0 ring-2 ring-[#e6eeff]">
                <img
                  className="w-full h-full object-cover"
                  alt="Suresh Kumar"
                  src={ASSETS.sureshAvatar}
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#006c49] rounded-full flex items-center justify-center text-white ring-2 ring-white">
                  <span className="material-symbols-outlined text-[10px] font-bold">check</span>
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-sm text-[#121c2a] font-bold truncate">Suresh Kumar</span>
                  <span className="flex items-center text-[10px] bg-[#6cf8bb] text-[#00714d] px-1.5 py-0.2 rounded-full font-bold">
                    <span className="material-symbols-outlined text-[11px] mr-0.5">verified</span>
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#4b4452] text-xs mt-0.5">
                  <span className="flex items-center text-[#faa213] font-semibold">
                    <span
                      className="material-symbols-outlined text-[13px] mr-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    4.9
                  </span>
                  <span>•</span>
                  <span className="truncate">PhonePe UPI user</span>
                </div>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-[10px] text-[#4b4452] uppercase font-medium">Txn Ref</span>
              <p className="text-xs text-[#121c2a] font-semibold tracking-tight font-mono">
                #429188201948
              </p>
            </div>
          </div>

          {/* Sender's Personal Note */}
          <div className="bg-[#eff4ff] rounded-xl p-3 mt-3 border border-[#d9e3f6]/60">
            <div className="flex items-start gap-1.5">
              <span className="material-symbols-outlined text-[#470085] text-[18px] shrink-0 mt-0.5">
                format_quote
              </span>
              <p className="text-xs text-[#121c2a] italic leading-relaxed">
                "Hi Ramesh, I mistakenly sent ₹4,500 to your UPI ID instead of another contact.
                Please return it via PhonePe Easy Return."
              </p>
            </div>
          </div>

          {/* Money Received Snapshot */}
          <div className="mt-3 bg-[#dee9fc]/40 rounded-xl p-3 flex items-center justify-between border border-[#d9e3f6]/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#6cf8bb] text-[#002113] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">south_west</span>
              </div>
              <div>
                <p className="text-[11px] text-[#4b4452]">Credited on 24 Oct, 02:44 PM</p>
                <p className="text-xs text-[#121c2a] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#470085]">
                    account_balance
                  </span>{' '}
                  Axis Bank •••• 9012
                </p>
              </div>
            </div>
            <div className="text-right font-currency">
              <p className="text-[11px] text-[#006c49] font-bold">Inbound Credit</p>
              <p className="text-base text-[#121c2a] font-extrabold tracking-tight">₹4,500</p>
            </div>
          </div>
        </div>

        {/* Quick Micro-Interaction Card: One-Tap Return Highlight */}
        <div className="bg-gradient-to-br from-[#eedbff]/40 via-[#eff4ff] to-[#e6eeff] rounded-2xl p-4 shadow-sm border border-[#e6eeff]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#470085] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#470085]" />
              </span>
              <span className="text-xs text-[#470085] font-bold tracking-wide">
                1-Tap Easy Return
              </span>
            </div>
            <span className="text-[11px] bg-[#470085]/10 text-[#470085] px-2.5 py-0.5 rounded-full font-semibold">
              Safe Reversal
            </span>
          </div>

          <div className="text-center my-3">
            <p className="text-xs text-[#4b4452]">
              Amount to reverse to Suresh's original handle
            </p>
            <h3 className="text-3xl text-[#470085] font-black mt-1 font-currency">₹4,500</h3>
            <p className="text-xs text-[#006c49] font-medium flex items-center justify-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px]">lock</span> Encrypted via NPCI
              Auto-Resolve
            </p>
          </div>

          {/* Primary Action: Return Money CTA */}
          <button
            type="button"
            id="easyReturnBtn"
            onClick={onOpenUpiPin}
            className="w-full py-3 px-4 bg-[#5f259f] hover:bg-[#470085] active:scale-98 transition-all text-white rounded-full flex items-center justify-center gap-2 shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">keyboard_return</span>
            <span className="text-sm font-semibold">Return ₹4,500 to Suresh</span>
          </button>

          {/* Subtext details */}
          <div className="mt-2.5 flex items-center justify-center gap-2 text-[#4b4452] text-[11px] text-center flex-wrap">
            <span>• Requires UPI PIN</span>
            <span>• Zero platform fee</span>
            <span>• Instant digital receipt</span>
          </div>
        </div>

        {/* Secondary Edge Case / Dispute CTA */}
        <div className="text-center px-2 py-1">
          <button
            type="button"
            onClick={onOpenDispute}
            className="inline-flex items-center gap-1 text-xs text-[#470085] hover:text-[#5f259f] font-bold py-1 px-3 rounded-full hover:bg-[#eff4ff] transition-colors"
          >
            <span>This was an expected payment / Dispute</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
          <p className="text-[11px] text-[#4b4452] mt-0.5">
            If you provided goods or services for this amount, tap here to verify.
          </p>
        </div>

        {/* Trust & Regulatory Safety Box */}
        <div className="bg-[#e6eeff] rounded-2xl p-4 shadow-xs border border-[#d9e3f6]/60">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-[#dee9fc] flex items-center justify-center flex-shrink-0 text-[#470085]">
              <span className="material-symbols-outlined text-[20px]">gavel</span>
            </div>
            <div className="flex-1">
              <h4 className="text-xs text-[#121c2a] font-bold flex items-center gap-1">
                Why return accidental funds?
                <span className="material-symbols-outlined text-[#006c49] text-[16px]">
                  verified_user
                </span>
              </h4>
              <p className="text-xs text-[#4b4452] mt-1 leading-relaxed">
                Under <strong>RBI &amp; NPCI norms</strong>, retaining accidental funds can lead to
                temporary account hold by the issuing bank during customer dispute arbitration.
                PhonePe Easy Return resolves it securely in seconds without sharing your mobile or
                account details.
              </p>
              <div className="flex items-center gap-4 mt-2.5">
                <span className="text-[11px] text-[#470085] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">shield</span> 100%
                  Protected
                </span>
                <span className="text-[11px] text-[#470085] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">history_edu</span> Legal
                  Clearance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Helpful FAQ Quick Tabs */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#e6eeff] space-y-2">
          <h4 className="text-xs text-[#121c2a] font-bold mb-2">Common Questions</h4>

          <div className="bg-[#eff4ff] rounded-xl p-3 border border-[#d9e3f6]/50">
            <button
              type="button"
              onClick={() => toggleFaq(1)}
              className="w-full flex justify-between items-center text-xs text-[#121c2a] font-semibold text-left"
            >
              <span>Will any charges be deducted from my bank?</span>
              <span className="material-symbols-outlined text-[#4b4452] text-[18px]">
                {openFaq === 1 ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {openFaq === 1 && (
              <p className="text-xs text-[#4b4452] mt-2 pt-2 border-t border-[#d9e3f6]/50 animate-fadeIn">
                No. PhonePe Easy Return executes a zero-surcharge, direct reverse credit to the
                sender's exact source account.
              </p>
            )}
          </div>

          <div className="bg-[#eff4ff] rounded-xl p-3 border border-[#d9e3f6]/50">
            <button
              type="button"
              onClick={() => toggleFaq(2)}
              className="w-full flex justify-between items-center text-xs text-[#121c2a] font-semibold text-left"
            >
              <span>What if I already sent it back outside PhonePe?</span>
              <span className="material-symbols-outlined text-[#4b4452] text-[18px]">
                {openFaq === 2 ? 'expand_less' : 'expand_more'}
              </span>
            </button>
            {openFaq === 2 && (
              <p className="text-xs text-[#4b4452] mt-2 pt-2 border-t border-[#d9e3f6]/50 animate-fadeIn">
                Tap "This was an expected payment / Dispute" above and submit the UTR of your
                independent transfer to resolve the claim instantly.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
