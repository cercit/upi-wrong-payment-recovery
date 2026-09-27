import React, { useState } from 'react';
import { ASSETS, INITIAL_CASE } from '../../data/mockData';

interface LiveTrackerScreenProps {
  onShowToast: (message: string) => void;
  onOpenSupport: () => void;
}

export const LiveTrackerScreen: React.FC<LiveTrackerScreenProps> = ({
  onShowToast,
  onOpenSupport,
}) => {
  const [reminderSent, setReminderSent] = useState(false);
  const [sendingReminder, setSendingReminder] = useState(false);

  const handleSendReminder = () => {
    setSendingReminder(true);
    setTimeout(() => {
      setSendingReminder(false);
      setReminderSent(true);
      onShowToast('Gentle reminder & 1-tap return link dispatched via SMS!');
    }, 900);
  };

  const handleCopyCase = () => {
    navigator.clipboard?.writeText(INITIAL_CASE.caseId);
    onShowToast(`Case ID #${INITIAL_CASE.caseId} copied to clipboard`);
  };

  return (
    <div className="flex flex-col w-full px-4 space-y-3 pb-24">
      {/* Case Header Card */}
      <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#e6eeff] flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="text-[10px] uppercase font-bold text-[#7c7483]">Case ID</span>
            <span className="text-xs font-bold text-[#121c2a]">#{INITIAL_CASE.caseId}</span>
            <button
              type="button"
              aria-label="Copy Case ID"
              onClick={handleCopyCase}
              className="text-[#4b4452] hover:text-[#470085] transition-colors flex items-center active:scale-90"
            >
              <span className="material-symbols-outlined text-[15px]">content_copy</span>
            </button>
          </div>
          <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#ffddb8] text-[#2a1700] text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#653e00] mr-1.5 animate-pulse" />
            In Progress
          </div>
        </div>

        <div className="flex items-baseline justify-between pt-1">
          <div>
            <p className="text-[11px] text-[#4b4452]">Disputed Recovery Sum</p>
            <p className="text-3xl text-[#470085] font-extrabold tracking-tight font-currency">
              ₹4,500
            </p>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-[#4b4452] block">Wrongly transferred to</span>
            <span className="text-sm font-bold text-[#121c2a]">
              {INITIAL_CASE.recipientName}
            </span>
          </div>
        </div>
      </div>

      {/* Status & Resolution ETA Banner */}
      <div className="w-full bg-[#e6eeff] rounded-2xl p-4 shadow-sm border border-[#d9e3f6]/60 flex flex-col space-y-3">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#eedbff] flex items-center justify-center flex-shrink-0 text-[#470085]">
            <span className="material-symbols-outlined text-[22px]">hourglass_top</span>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-sm font-bold text-[#121c2a] leading-snug">
              Awaiting Recipient Bank Confirmation
            </h2>
            <p className="text-xs text-[#4b4452] mt-0.5">
              Expected resolution by{' '}
              <strong className="text-[#121c2a] font-bold">
                {INITIAL_CASE.expectedResolution}
              </strong>
            </p>
          </div>
        </div>

        {/* Progress Meter (65%) */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs text-[#4b4452]">
            <span>Recovery Lifecycle</span>
            <span className="font-bold text-[#470085]">65% Completed</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#d9e3f6] overflow-hidden">
            <div
              className="h-full bg-[#470085] rounded-full transition-all duration-1000 ease-out"
              style={{ width: '65%' }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-[#7c7483] font-medium pt-0.5">
            <span>Raised</span>
            <span>Recipient Alert</span>
            <span>Bank Reversal</span>
            <span>Credited</span>
          </div>
        </div>
      </div>

      {/* Live Visual Timeline */}
      <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#e6eeff]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[#121c2a]">Live Recovery Milestones</h3>
          <span className="text-xs text-[#4b4452] flex items-center gap-1 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#006c49] animate-pulse" /> Live Sync
          </span>
        </div>

        <div className="relative pl-6 space-y-5">
          {/* Connecting Track Line */}
          <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-[#dee9fc] rounded-full" />

          {/* Step 1: Completed */}
          <div className="relative group">
            <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-[#006c49] flex items-center justify-center text-white shadow-xs">
              <span className="material-symbols-outlined text-[13px] font-bold">check</span>
            </div>
            <div className="flex flex-col space-y-0.5">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-[#121c2a]">Recovery Request Raised</span>
                <span className="text-[10px] text-[#7c7483]">Oct 24, 02:47 PM</span>
              </div>
              <p className="text-xs text-[#4b4452]">
                Initiated automatically via UTR:{' '}
                <span className="font-mono text-[#121c2a] font-semibold">AXIS9921004123</span>
              </p>
            </div>
          </div>

          {/* Step 2: Completed */}
          <div className="relative group">
            <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-[#006c49] flex items-center justify-center text-white shadow-xs">
              <span className="material-symbols-outlined text-[13px] font-bold">check</span>
            </div>
            <div className="flex flex-col space-y-0.5">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-[#121c2a]">
                  Recipient Notified via PhonePe &amp; SMS
                </span>
                <span className="text-[10px] text-[#7c7483]">Oct 24, 02:48 PM</span>
              </div>
              <p className="text-xs text-[#4b4452]">
                Interactive Easy-Return prompt delivered to Ramesh Kumar
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center text-[10px] text-[#006c49] bg-[#eff4ff] px-2 py-0.5 rounded-full font-semibold border border-[#6cf8bb]/40">
                  <span className="material-symbols-outlined text-[12px] mr-1">done_all</span>{' '}
                  Delivered to registered mobile
                </span>
              </div>
            </div>
          </div>

          {/* Step 3: In Progress (Pulsing) */}
          <div className="relative group">
            <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-[#470085] flex items-center justify-center text-white ring-4 ring-[#eedbff] animate-pulse">
              <span className="material-symbols-outlined text-[13px]">sync</span>
            </div>
            <div className="flex flex-col space-y-1.5 bg-[#eff4ff] rounded-xl p-3 border border-[#d9e3f6]">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-[#470085]">
                  Recipient Bank (Axis Bank) Contacted
                </span>
                <span className="text-[10px] text-[#470085] font-semibold">
                  Oct 24, 02:50 PM
                </span>
              </div>
              <p className="text-xs text-[#121c2a]">
                Case assigned to{' '}
                <strong className="font-bold text-[#121c2a]">
                  Axis Bank Nodal Recovery Cell
                </strong>
              </p>
              <div className="flex flex-col space-y-1 text-xs text-[#4b4452] pt-1 border-t border-[#d9e3f6]/60">
                <div className="flex items-center justify-between">
                  <span>Reference Docket:</span>
                  <span className="font-mono font-bold text-[#121c2a]">
                    NPCI-REV-2024-912
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>SLA Target Deadline:</span>
                  <span className="font-bold text-[#653e00]">Within 3 hrs 15 mins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Upcoming */}
          <div className="relative group opacity-75">
            <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-[#d9e3f6] flex items-center justify-center text-[#7c7483]">
              <span className="material-symbols-outlined text-[13px]">schedule</span>
            </div>
            <div className="flex flex-col space-y-0.5">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-[#7c7483]">
                  Automated Reversal &amp; Credit
                </span>
                <span className="text-[10px] text-[#7c7483]">Pending</span>
              </div>
              <p className="text-xs text-[#7c7483]">
                Funds will be credited directly to your{' '}
                <strong className="text-[#121c2a] font-medium">HDFC Bank A/c •••• 4821</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Owner & Transparency Box */}
      <div className="w-full bg-white rounded-2xl p-4 shadow-sm border border-[#e6eeff] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="material-symbols-outlined text-[#470085] text-[18px]">badge</span>
            <h4 className="text-xs font-bold text-[#121c2a]">Assigned Desk &amp; Transparency</h4>
          </div>
          <span className="text-[10px] font-bold bg-[#e6eeff] text-[#470085] px-2 py-0.5 rounded-full">
            NPCI Regulated
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2 bg-[#eff4ff] rounded-xl p-3 border border-[#d9e3f6]/60">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#d9e3f6] flex items-center justify-center text-[#470085] font-bold text-xs">
              MS
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-[#121c2a]">Officer: M. Sharma</p>
              <p className="text-[11px] text-[#4b4452] truncate">
                Axis Bank NPCI Recovery Desk (Mumbai Central Hub)
              </p>
            </div>
            <div className="w-7 h-7 rounded-full bg-[#e6eeff] flex items-center justify-center text-[#470085]">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-2 p-2.5 bg-[#e6eeff] rounded-xl border border-[#d9e3f6]/60">
          <span className="material-symbols-outlined text-[#653e00] text-[18px] flex-shrink-0 mt-0.5">
            policy
          </span>
          <p className="text-xs text-[#4b4452] leading-relaxed">
            Protected under NPCI circular on unintended transfers. If not resolved within 48 hours,
            this request automatically unlocks a one-tap escalation to the{' '}
            <strong className="text-[#121c2a] font-semibold">RBI CMS Ombudsman</strong>.
          </p>
        </div>
      </div>

      {/* Recipient Profile Snapshot */}
      <div className="w-full bg-white rounded-2xl p-3.5 shadow-sm border border-[#e6eeff] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full object-cover shadow-xs ring-2 ring-[#e6eeff]"
            alt="Ramesh Kumar"
            src={ASSETS.rameshAvatar}
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#121c2a]">Ramesh Kumar</p>
            <p className="text-[11px] text-[#4b4452] truncate">
              ramesh.kumar91@oksbi • Verified UPI Contact
            </p>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="text-[10px] font-bold text-[#006c49] flex items-center justify-end">
            <span className="material-symbols-outlined text-[14px] mr-0.5">
              notifications_active
            </span>{' '}
            Pinged
          </span>
          <span className="text-[10px] text-[#7c7483]">10 mins ago</span>
        </div>
      </div>

      {/* Interactive Action Buttons */}
      <div className="w-full pt-1 pb-4 flex flex-col space-y-2">
        <button
          type="button"
          id="reminder-btn"
          onClick={handleSendReminder}
          disabled={sendingReminder || reminderSent}
          className={`w-full h-12 rounded-full flex items-center justify-center space-x-2 text-xs font-bold shadow-md transition-all active:scale-98 ${
            reminderSent
              ? 'bg-[#d9e3f6] text-[#4b4452] cursor-not-allowed'
              : 'bg-[#470085] hover:bg-[#5f259f] text-white'
          }`}
        >
          {sendingReminder ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
              <span>Sending Reminder...</span>
            </>
          ) : reminderSent ? (
            <>
              <span className="material-symbols-outlined text-[18px]">done_all</span>
              <span>Reminder Sent (Available again in 1h)</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">send_to_mobile</span>
              <span>Send Friendly Reminder to Ramesh</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onOpenSupport}
          className="w-full h-11 bg-[#e6eeff] hover:bg-[#dee9fc] transition-colors rounded-full flex items-center justify-center space-x-2 text-[#470085] text-xs font-bold active:scale-98"
        >
          <span className="material-symbols-outlined text-[18px]">headset_mic</span>
          <span>Need Help? Contact PhonePe 24x7 Support</span>
        </button>
      </div>
    </div>
  );
};
