import React, { useState } from 'react';

interface UpiPinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  amount: number;
  recipientName: string;
}

export const UpiPinModal: React.FC<UpiPinModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  amount,
  recipientName,
}) => {
  const [pin, setPin] = useState<string>('');
  const [showPin, setShowPin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleKeyPress = (num: string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + num);
      setError(null);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
    setError(null);
  };

  const handleSubmit = () => {
    if (pin.length < 4) {
      setError('Please enter your 4 or 6-digit UPI PIN');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
      setPin('');
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end bg-[#27313f]/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg mx-auto bg-white rounded-t-3xl shadow-2xl overflow-hidden pb-safe">
        {/* UPI Standard Header */}
        <div className="bg-[#121c2a] text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#6cf8bb]">
              NPCI • UPI
            </span>
            <span className="text-white/40">|</span>
            <span className="text-xs text-white/80 font-medium">Axis Bank •••• 9012</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Transaction Summary Header */}
        <div className="p-5 text-center bg-[#f8f9ff] border-b border-[#e6eeff]">
          <p className="text-xs text-[#4b4452] uppercase tracking-wide font-medium">
            Returning funds to
          </p>
          <h3 className="text-lg font-bold text-[#121c2a] mt-0.5">{recipientName}</h3>
          <div className="text-3xl font-extrabold text-[#470085] mt-1">
            ₹{amount.toLocaleString('en-IN')}
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6cf8bb]/30 text-[#00714d] text-xs font-semibold mt-2">
            <span className="material-symbols-outlined text-[15px]">verified_user</span>
            Zero Platform Fee • Safe Direct Reversal
          </div>
        </div>

        {/* PIN Input Stage */}
        <div className="p-6 flex flex-col items-center">
          <div className="flex items-center justify-between w-full max-w-xs mb-3">
            <span className="text-xs font-semibold text-[#4b4452] tracking-wider uppercase">
              Enter UPI PIN
            </span>
            <button
              type="button"
              onClick={() => setShowPin(!showPin)}
              className="text-xs text-[#470085] font-semibold flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">
                {showPin ? 'visibility_off' : 'visibility'}
              </span>
              {showPin ? 'Hide' : 'Show'}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-3 my-2 h-12">
            {[0, 1, 2, 3, 4, 5].map((idx) => {
              const hasDigit = pin.length > idx;
              return (
                <div
                  key={idx}
                  className={`w-4 h-4 rounded-full transition-all duration-150 flex items-center justify-center text-sm font-bold ${
                    hasDigit
                      ? showPin
                        ? 'text-[#470085] bg-[#eedbff] border border-[#470085]'
                        : 'bg-[#470085] scale-110 shadow-sm'
                      : 'border-2 border-[#cdc3d4] bg-white'
                  }`}
                >
                  {hasDigit && showPin ? pin[idx] : null}
                </div>
              );
            })}
          </div>

          {error && <p className="text-xs text-[#ba1a1a] mt-2 font-medium">{error}</p>}

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs mt-4">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
              <button
                key={digit}
                type="button"
                onClick={() => handleKeyPress(digit)}
                className="h-12 rounded-xl bg-[#eff4ff] hover:bg-[#dee9fc] active:scale-95 text-lg font-bold text-[#121c2a] flex items-center justify-center transition-all"
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              onClick={handleDelete}
              className="h-12 rounded-xl bg-[#eff4ff] hover:bg-[#dee9fc] active:scale-95 text-sm font-medium text-[#4b4452] flex items-center justify-center transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">backspace</span>
            </button>
            <button
              type="button"
              onClick={() => handleKeyPress('0')}
              className="h-12 rounded-xl bg-[#eff4ff] hover:bg-[#dee9fc] active:scale-95 text-lg font-bold text-[#121c2a] flex items-center justify-center transition-all"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || pin.length < 4}
              className="h-12 rounded-xl bg-[#006c49] hover:bg-[#005236] disabled:opacity-40 disabled:pointer-events-none active:scale-95 text-white flex items-center justify-center shadow-md transition-all"
            >
              {isSubmitting ? (
                <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
              ) : (
                <span className="material-symbols-outlined text-[22px]">check</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
