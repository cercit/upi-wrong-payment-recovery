import { useState, useEffect } from 'react';
import { ScreenTab } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { Toast } from './components/Toast';
import { TransactionReceiptScreen } from './components/screens/TransactionReceiptScreen';
import { RecoveryRequestScreen } from './components/screens/RecoveryRequestScreen';
import { EasyReturnScreen } from './components/screens/EasyReturnScreen';
import { LiveTrackerScreen } from './components/screens/LiveTrackerScreen';
import { UpiPinModal } from './components/modals/UpiPinModal';
import { DisputeModal } from './components/modals/DisputeModal';
import { SupportModal } from './components/modals/SupportModal';
import { SplitBillModal } from './components/modals/SplitBillModal';
import { BalanceModal } from './components/modals/BalanceModal';
import { ShareModal } from './components/modals/ShareModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<ScreenTab>('transaction-receipt');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals state
  const [isUpiPinOpen, setIsUpiPinOpen] = useState(false);
  const [isDisputeOpen, setIsDisputeOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSplitBillOpen, setIsSplitBillOpen] = useState(false);
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleBack = () => {
    if (currentTab === 'recovery-request') {
      setCurrentTab('transaction-receipt');
    } else if (currentTab === 'easy-return') {
      setCurrentTab('live-recovery-tracker');
    } else {
      setCurrentTab('transaction-receipt');
    }
  };

  const getTitle = () => {
    switch (currentTab) {
      case 'transaction-receipt':
        return 'Transaction Receipt';
      case 'recovery-request':
        return 'Recovery Request';
      case 'easy-return':
        return 'Easy Return';
      case 'live-recovery-tracker':
        return 'Live Recovery Tracker';
      default:
        return 'PhonePe UPI';
    }
  };

  const showBack = currentTab === 'recovery-request' || currentTab === 'easy-return';

  return (
    <div className="min-h-screen bg-[#edf2f7] flex flex-col justify-start items-center">
      {/* Top Banner on larger screens explaining persona flow */}
      <aside aria-label="Fintech demo switcher" className="hidden lg:flex w-full bg-[#121c2a] text-white px-6 py-2.5 items-center justify-between text-xs border-b border-white/10 z-50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
          <span className="font-semibold text-[#6ffbbe]">NPCI UPI Dispute Resolution v3</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">
            Interactive simulation of Bharat Fintech Accidental Payment Recovery
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/60">Quick Switch Screen:</span>
          <button
            type="button"
            onClick={() => setCurrentTab('transaction-receipt')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              currentTab === 'transaction-receipt'
                ? 'bg-[#5f259f] text-white font-bold'
                : 'bg-white/10 hover:bg-white/20 text-white/80'
            }`}
          >
            1. Receipt
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab('recovery-request')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              currentTab === 'recovery-request'
                ? 'bg-[#5f259f] text-white font-bold'
                : 'bg-white/10 hover:bg-white/20 text-white/80'
            }`}
          >
            2. Request Recovery
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab('easy-return')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              currentTab === 'easy-return'
                ? 'bg-[#5f259f] text-white font-bold'
                : 'bg-white/10 hover:bg-white/20 text-white/80'
            }`}
          >
            3. Receiver (Easy Return)
          </button>
          <button
            type="button"
            onClick={() => setCurrentTab('live-recovery-tracker')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              currentTab === 'live-recovery-tracker'
                ? 'bg-[#5f259f] text-white font-bold'
                : 'bg-white/10 hover:bg-white/20 text-white/80'
            }`}
          >
            4. Live Tracker
          </button>
        </div>
      </aside>

      {/* Mobile App Canvas Container */}
      <div className="w-full max-w-[440px] min-h-screen bg-[#f8f9ff] text-[#121c2a] flex flex-col relative shadow-2xl border-x border-[#d9e3f6]/60">
        {/* Header */}
        <Header
          currentTab={currentTab}
          title={getTitle()}
          showBack={showBack}
          onBack={handleBack}
          onHelpClick={() => setIsSupportOpen(true)}
          onProfileClick={() =>
            showToast('Logged in as Suresh Kumar (demo user)')
          }
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full pt-3 pb-20 overflow-y-auto no-scrollbar">
          {currentTab === 'transaction-receipt' && (
            <TransactionReceiptScreen
              onNavigate={setCurrentTab}
              onShowToast={showToast}
              onOpenSplitBill={() => setIsSplitBillOpen(true)}
              onOpenCheckBalance={() => setIsBalanceOpen(true)}
              onOpenShareModal={() => setIsShareOpen(true)}
            />
          )}

          {currentTab === 'recovery-request' && (
            <RecoveryRequestScreen
              onNavigate={setCurrentTab}
              onShowToast={showToast}
            />
          )}

          {currentTab === 'easy-return' && (
            <EasyReturnScreen
              onOpenUpiPin={() => setIsUpiPinOpen(true)}
              onOpenDispute={() => setIsDisputeOpen(true)}
              onShowToast={showToast}
            />
          )}

          {currentTab === 'live-recovery-tracker' && (
            <LiveTrackerScreen
              onShowToast={showToast}
              onOpenSupport={() => setIsSupportOpen(true)}
            />
          )}
        </main>

        {/* Bottom Navigation */}
        <BottomNav currentTab={currentTab} onTabChange={setCurrentTab} />

        {/* Global Toast */}
        <Toast message={toastMessage} onDismiss={() => setToastMessage(null)} />

        {/* Modals & Dialogs */}
        <UpiPinModal
          isOpen={isUpiPinOpen}
          amount={4500}
          recipientName="Suresh Kumar"
          onClose={() => setIsUpiPinOpen(false)}
          onSuccess={() => {
            showToast('₹4,500 successfully reversed to Suresh Kumar via NPCI Instant Protocol!');
            setTimeout(() => {
              setCurrentTab('live-recovery-tracker');
            }, 1200);
          }}
        />

        <DisputeModal
          isOpen={isDisputeOpen}
          onClose={() => setIsDisputeOpen(false)}
          onSubmit={(reason) => {
            showToast(`Dispute registered: "${reason}". Automated reversal paused.`);
          }}
        />

        <SupportModal
          isOpen={isSupportOpen}
          onClose={() => setIsSupportOpen(false)}
          caseId="REC-884920"
        />

        <SplitBillModal
          isOpen={isSplitBillOpen}
          totalAmount={4500}
          onClose={() => setIsSplitBillOpen(false)}
        />

        <BalanceModal
          isOpen={isBalanceOpen}
          onClose={() => setIsBalanceOpen(false)}
        />

        <ShareModal
          isOpen={isShareOpen}
          amount={4500}
          recipientName="Ramesh Kumar"
          utr="AXIS9921004123"
          onClose={() => setIsShareOpen(false)}
          onCopied={() => showToast('Payment receipt copied to clipboard')}
        />
      </div>
    </div>
  );
}
