import React from 'react';
import { ASSETS } from '../data/mockData';
import { ScreenTab } from '../types';

interface HeaderProps {
  currentTab: ScreenTab;
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  onHelpClick?: () => void;
  onProfileClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack,
  onBack,
  onHelpClick,
  onProfileClick,
}) => {
  return (
    <header className="sticky top-0 w-full z-40 bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e6eeff]/60">
      <div className="h-16 px-4 flex items-center justify-between gap-3 max-w-lg mx-auto">
        <div className="flex items-center gap-2.5 min-w-0">
          {showBack ? (
            <button
              type="button"
              aria-label="Go back"
              onClick={onBack}
              className="w-10 h-10 -ml-1 flex items-center justify-center rounded-full text-[#121c2a] hover:text-[#470085] hover:bg-[#e6eeff] transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
          ) : (
            <img
              alt="UPI Recover logo"
              className="h-8 w-auto object-contain flex-shrink-0"
              src={ASSETS.phonePeLogo}
            />
          )}

          <div className="flex flex-col min-w-0">
            {!showBack && (
              <span className="text-[10px] text-[#470085] uppercase font-bold tracking-wider leading-none mb-0.5">
                PhonePe UPI
              </span>
            )}
            <h1 className="text-[16px] text-[#121c2a] font-semibold truncate leading-tight">
              {title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            type="button"
            aria-label="UPI Help & Support"
            onClick={onHelpClick}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#4b4452] hover:text-[#470085] hover:bg-[#e6eeff] transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-[22px]">help_outline</span>
          </button>
          <button
            type="button"
            aria-label="Profile"
            onClick={onProfileClick}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e6eeff] transition-colors"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-transparent hover:ring-[#470085]/30 transition-all"
              src={ASSETS.userProfile}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
