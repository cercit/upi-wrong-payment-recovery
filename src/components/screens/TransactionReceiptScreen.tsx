import React, { useState, useEffect } from 'react';
import { ScreenTab } from '../../types';

interface TransactionReceiptScreenProps {
  onNavigate: (tab: ScreenTab) => void;
  onShowToast: (message: string) => void;
  onOpenSplitBill: () => void;
  onOpenCheckBalance: () => void;
  onOpenShareModal: () => void;
}

export const TransactionReceiptScreen: React.FC<TransactionReceiptScreenProps> = ({
  onNavigate,
  onShowToast,
  onOpenSplitBill,
  onOpenCheckBalance,
  onOpenShareModal,
}) => {
  // Countdown timer for 4-hour settlement window
  const [remainingSeconds, setRemainingSeconds] = useState(3 * 3600 + 59 * 60 + 42);
  const [showExplainer, setShowExplainer] = useState(false);
  const [isLocking, setIsLocking] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (totalSecs: number) => {
    if (totalSecs <= 0) return 'Expired';
    const h = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
    const s = String(totalSecs % 60).padStart(2, '0');
    return `${h}h : ${m}m : ${s}s`;
  };

  const handleRecoverClick = () => {
    setIsLocking(true);
    setTimeout(() => {
      setIsLocking(false);
      setIsLocked(true);
      onShowToast('Freeze claim placed with Axis & HDFC Bank');
      // Navigate to Recovery Request screen
      setTimeout(() => {
        onNavigate('recovery-request');
      }, 700);
    }, 1100);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    onShowToast(`${label} copied to clipboard`);
  };

  return (
    <div className="flex flex-col w-full px-4 space-y-3 pb-8">
      {/* Transaction Success Top Banner & Hero Amount */}
      <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm p-4 border border-[#e6eeff] flex flex-col items-center text-center">
        {/* Subtle Celebration Gradient Halo */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#6cf8bb]/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#eedbff]/30 rounded-full blur-2xl pointer-events-none" />

        {/* Verified Success Icon with Animated Ring Effect */}
        <div className="relative flex items-center justify-center mb-2">
          <div className="w-16 h-16 rounded-full bg-[#6cf8bb]/30 flex items-center justify-center animate-pulse">
            <div className="w-12 h-12 rounded-full bg-[#006c49] flex items-center justify-center shadow-md">
              <span
                className="material-symbols-outlined text-white text-[28px]"
                style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}
              >
                check
              </span>
            </div>
          </div>
          <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs">
            <span
              className="material-symbols-outlined text-[#006c49] text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </span>
        </div>

        {/* Headline and Amount */}
        <span className="text-xs text-[#006c49] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
          Transaction Successful
        </span>
        <div className="text-[34px] leading-tight text-[#121c2a] font-extrabold tracking-tight flex items-baseline justify-center font-currency">
          <span className="text-[34px] text-[#470085] mr-0.5">₹</span>4,500
        </div>
        <p className="text-xs text-[#4b4452] mt-0.5">24 Oct 2024, 02:45 PM</p>

        {/* Visual divider soft strip */}
        <div className="w-full h-1 bg-[#e6eeff] my-3 rounded-full" />

        {/* Transfer Parties Mini Grid */}
        <div className="w-full flex items-center justify-between text-left gap-2 bg-[#eff4ff] rounded-xl p-3 border border-[#d9e3f6]/60">
          {/* Recipient */}
          <div className="flex items-center gap-2.5 min-w-0 flex-1">
            <div className="w-10 h-10 rounded-full bg-[#eedbff] flex items-center justify-center text-[#470085] font-bold text-sm flex-shrink-0 shadow-xs">
              RK
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-sm text-[#121c2a] font-semibold truncate">
                  Ramesh Kumar
                </span>
                <span
                  className="material-symbols-outlined text-[#006c49] text-[15px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <span className="text-xs text-[#4b4452] truncate">ramesh.k98@okaxis</span>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className="flex-shrink-0 text-[#cdc3d4]">
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </div>

          {/* Source Bank */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#d9e3f6] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#470085] text-[18px]">
                account_balance
              </span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs text-[#121c2a] font-medium">HDFC Bank</span>
              <span className="text-[11px] text-[#4b4452]">•••• 4821</span>
            </div>
          </div>
        </div>
      </div>

      {/* CRUCIAL P0 FEATURE BANNER: One-Tap Recovery Mode */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-white via-[#eff4ff] to-[#e6eeff] rounded-2xl shadow-sm p-4 border border-[#e6eeff] transition-all duration-300"
        id="recovery-banner-container"
      >
        {/* Accent indicator strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ffb95f] via-[#5f259f] to-[#006c49]" />

        <div className="flex items-start gap-3">
          {/* Dynamic Recovery Badge Icon */}
          <div className="w-10 h-10 rounded-xl bg-[#ffddb8]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span
              className="material-symbols-outlined text-[#653e00] text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              undo
            </span>
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="text-sm text-[#121c2a] font-bold leading-snug">
                Sent to wrong person or UPI typo?
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] bg-[#6cf8bb] text-[#00714d] font-bold">
                Active
              </span>
            </div>
            <p className="text-xs text-[#4b4452] leading-relaxed mb-3">
              Recover payment in one tap while funds are locked in the settlement window.
            </p>

            {/* Dynamic Timer & NPCI Guarantee Tag */}
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              <div className="inline-flex items-center gap-1 bg-[#d9e3f6] px-2 py-0.5 rounded-full text-[#4b4452] text-[11px]">
                <span
                  className="material-symbols-outlined text-[13px] text-[#653e00] animate-spin"
                  style={{ animationDuration: '4s' }}
                >
                  timelapse
                </span>
                <span>
                  Eligible for:{' '}
                  <strong className="text-[#121c2a] font-bold">
                    {formatTimer(remainingSeconds)}
                  </strong>
                </span>
              </div>
              <div className="inline-flex items-center gap-1 bg-[#d9e3f6] px-2 py-0.5 rounded-full text-[#4b4452] text-[11px]">
                <span className="material-symbols-outlined text-[13px] text-[#006c49]">
                  verified_user
                </span>
                <span>NPCI Dispute Protocol v3</span>
              </div>
            </div>

            {/* Prominent Purple CTA for Instant Payment Recovery */}
            <button
              type="button"
              id="recover-cta-btn"
              onClick={handleRecoverClick}
              disabled={isLocking}
              className={`w-full flex items-center justify-center gap-2 py-3 px-3 rounded-full shadow-md active:scale-98 transition-all ${
                isLocked
                  ? 'bg-[#006c49] text-white'
                  : 'bg-[#470085] hover:bg-[#5f259f] text-white'
              }`}
            >
              {isLocking ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">
                    refresh
                  </span>
                  <span className="text-xs font-bold tracking-wide">
                    Locking Transaction...
                  </span>
                </>
              ) : isLocked ? (
                <>
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  <span className="text-xs font-bold tracking-wide">
                    Recovery Claim Registered (#REC-4921)
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="material-symbols-outlined text-[18px] text-[#ffb95f]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bolt
                  </span>
                  <span className="text-xs font-bold tracking-wide">
                    Recover Payment Now
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Micro interactive drawer trigger for how it works */}
        <div className="mt-3 pt-1 flex items-center justify-between border-t border-[#d9e3f6]/40">
          <button
            type="button"
            onClick={() => setShowExplainer(!showExplainer)}
            className="flex items-center gap-1 text-[#470085] text-xs font-semibold hover:underline"
          >
            <span className="material-symbols-outlined text-[15px]">info</span>
            <span>How does PhonePe UPI Recovery work?</span>
            <span className="material-symbols-outlined text-[14px]">
              {showExplainer ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          <span className="text-[10px] text-[#7c7483]">NPCI Circular 2024</span>
        </div>

        {/* Expandable explanation note */}
        {showExplainer && (
          <div className="mt-2.5 p-3 bg-[#d9e3f6]/60 rounded-xl text-[#4b4452] text-xs space-y-1.5 animate-fadeIn">
            <p className="text-xs font-bold text-[#121c2a]">
              Immediate Freeze &amp; Reverse Guarantee:
            </p>
            <p>1. Tapping initiate sends an automated NPCI lock flag to AXIS Bank.</p>
            <p>2. If reported within 4 hours, destination funds cannot be liquidated.</p>
            <p>3. Direct refund reflects in your HDFC account within 2-4 hours.</p>
          </div>
        )}
      </div>

      {/* Detailed Transaction Attributes (Passbook Style) */}
      <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#e6eeff] space-y-3">
        <div className="flex items-center justify-between pb-1 border-b border-[#e6eeff]">
          <h2 className="text-sm text-[#121c2a] font-bold">Payment Details</h2>
          <button
            type="button"
            onClick={() =>
              handleCopy(
                'PhonePe UPI TXN: 429188201948 | UTR: AXIS9921004123 | Amount: ₹4,500 | Paid to: Ramesh Kumar',
                'All transaction details'
              )
            }
            className="text-[#470085] text-xs font-medium flex items-center gap-1 hover:underline"
          >
            <span className="material-symbols-outlined text-[14px]">content_copy</span>
            <span>Copy Details</span>
          </button>
        </div>

        <div className="space-y-2 text-xs">
          {/* UPI ID */}
          <div className="flex items-center justify-between py-0.5">
            <span className="text-[#4b4452]">UPI Transaction ID</span>
            <div className="flex items-center gap-1.5 font-medium text-[#121c2a]">
              <span className="font-mono">429188201948</span>
              <button
                type="button"
                aria-label="Copy UPI Transaction ID"
                onClick={() => handleCopy('429188201948', 'UPI ID')}
                className="text-[#7c7483] hover:text-[#470085] active:scale-90"
              >
                <span className="material-symbols-outlined text-[15px]">content_copy</span>
              </button>
            </div>
          </div>

          {/* Bank Ref/UTR */}
          <div className="flex items-center justify-between py-0.5">
            <span className="text-[#4b4452]">Google/NPCI UTR</span>
            <div className="flex items-center gap-1.5 font-medium text-[#121c2a]">
              <span className="font-mono">AXIS9921004123</span>
              <button
                type="button"
                aria-label="Copy UTR number"
                onClick={() => handleCopy('AXIS9921004123', 'UTR')}
                className="text-[#7c7483] hover:text-[#470085] active:scale-90"
              >
                <span className="material-symbols-outlined text-[15px]">content_copy</span>
              </button>
            </div>
          </div>

          {/* Payment Source Details */}
          <div className="flex items-center justify-between py-0.5">
            <span className="text-[#4b4452]">Debited Account</span>
            <span className="font-medium text-[#121c2a]">HDFC Bank •••• 4821</span>
          </div>

          {/* Category / Type */}
          <div className="flex items-center justify-between py-0.5">
            <span className="text-[#4b4452]">Payment Mode</span>
            <span className="font-medium text-[#121c2a] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]" />
              Instant P2P UPI Transfer
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Actions Row */}
      <div className="grid grid-cols-3 gap-2">
        {/* Share Receipt */}
        <button
          type="button"
          onClick={onOpenShareModal}
          className="flex flex-col items-center justify-center p-3 bg-white hover:bg-[#eff4ff] rounded-2xl shadow-xs border border-[#e6eeff] active:scale-95 transition-all text-center"
        >
          <div className="w-9 h-9 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#470085] mb-1">
            <span className="material-symbols-outlined text-[18px]">share</span>
          </div>
          <span className="text-xs text-[#121c2a] font-semibold">Share Receipt</span>
        </button>

        {/* Split with Friends */}
        <button
          type="button"
          onClick={onOpenSplitBill}
          className="flex flex-col items-center justify-center p-3 bg-white hover:bg-[#eff4ff] rounded-2xl shadow-xs border border-[#e6eeff] active:scale-95 transition-all text-center"
        >
          <div className="w-9 h-9 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#470085] mb-1">
            <span className="material-symbols-outlined text-[18px]">call_split</span>
          </div>
          <span className="text-xs text-[#121c2a] font-semibold">Split Bill</span>
        </button>

        {/* Check Bank Balance */}
        <button
          type="button"
          onClick={onOpenCheckBalance}
          className="flex flex-col items-center justify-center p-3 bg-white hover:bg-[#eff4ff] rounded-2xl shadow-xs border border-[#e6eeff] active:scale-95 transition-all text-center"
        >
          <div className="w-9 h-9 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#470085] mb-1">
            <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
          </div>
          <span className="text-xs text-[#121c2a] font-semibold">Check Balance</span>
        </button>
      </div>

      {/* Security & Compliance Assurance Badge */}
      <div className="flex items-center justify-center gap-2 p-3 bg-[#eff4ff] rounded-xl text-[#4b4452] text-center border border-[#d9e3f6]/40">
        <span
          className="material-symbols-outlined text-[#006c49] text-[18px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          shield
        </span>
        <span className="text-xs font-semibold tracking-wide">
          100% Safe Payments • NPCI Approved UPI Partner
        </span>
      </div>
    </div>
  );
};
