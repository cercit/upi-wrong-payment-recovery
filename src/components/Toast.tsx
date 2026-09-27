import React from 'react';

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onDismiss }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 max-w-sm mx-auto bg-[#27313f] text-[#eaf1ff] rounded-xl p-3.5 shadow-2xl flex items-center justify-between z-50 border border-white/10 animate-fadeIn">
      <div className="flex items-center space-x-2.5">
        <span
          className="material-symbols-outlined text-[#6ffbbe] text-[20px] flex-shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <span className="text-xs font-medium leading-snug">{message}</span>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        className="text-[#eaf1ff]/70 hover:text-white ml-2 p-1 rounded-full hover:bg-white/10"
      >
        <span className="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  );
};
