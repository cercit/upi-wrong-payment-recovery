import React from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopied: () => void;
  amount: number;
  recipientName: string;
  utr: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  onCopied,
  amount,
  recipientName,
  utr,
}) => {
  if (!isOpen) return null;

  const shareText = `PhonePe UPI Payment Receipt\nPaid: ₹${amount}\nTo: ${recipientName}\nUTR: ${utr}\nStatus: Successful`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareText);
    onCopied();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-[#27313f]/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-t-3xl p-5 shadow-2xl w-full max-w-lg mx-auto pb-safe">
        <div className="flex items-center justify-between pb-3 border-b border-[#e6eeff]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#eff4ff] text-[#470085] flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </div>
            <h3 className="text-base font-bold text-[#121c2a]">Share Receipt</h3>
          </div>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#121c2a]"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3 my-5">
          <button
            type="button"
            onClick={handleCopy}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#eff4ff] hover:bg-[#dee9fc] active:scale-95 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#470085] shadow-xs">
              <span className="material-symbols-outlined text-[20px]">content_copy</span>
            </div>
            <span className="text-xs font-semibold text-[#121c2a]">Copy Text</span>
          </button>

          <button
            type="button"
            onClick={() => {
              window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
              onClose();
            }}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#eff4ff] hover:bg-[#dee9fc] active:scale-95 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xs">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </div>
            <span className="text-xs font-semibold text-[#121c2a]">WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => {
              window.open(`sms:?body=${encodeURIComponent(shareText)}`, '_blank');
              onClose();
            }}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#eff4ff] hover:bg-[#dee9fc] active:scale-95 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-full bg-[#5f259f] flex items-center justify-center text-white shadow-xs">
              <span className="material-symbols-outlined text-[20px]">sms</span>
            </div>
            <span className="text-xs font-semibold text-[#121c2a]">Messages</span>
          </button>

          <button
            type="button"
            onClick={() => {
              alert('Downloading official PhonePe signed PDF receipt...');
              onClose();
            }}
            className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#eff4ff] hover:bg-[#dee9fc] active:scale-95 transition-all text-center"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#ba1a1a] shadow-xs">
              <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
            </div>
            <span className="text-xs font-semibold text-[#121c2a]">PDF Receipt</span>
          </button>
        </div>

        <button
          type="button"
          className="w-full py-3 rounded-full bg-[#eff4ff] text-[#121c2a] text-sm font-semibold hover:bg-[#dee9fc] transition-colors"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
