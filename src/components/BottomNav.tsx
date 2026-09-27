import React from 'react';
import { ScreenTab } from '../types';

interface BottomNavProps {
  currentTab: ScreenTab;
  onTabChange: (tab: ScreenTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange }) => {
  const tabs = [
    {
      id: 'transaction-receipt' as ScreenTab,
      label: 'Receipt',
      icon: 'receipt_long',
    },
    {
      id: 'recovery-request' as ScreenTab,
      label: 'Recovery',
      icon: 'assignment_return',
    },
    {
      id: 'easy-return' as ScreenTab,
      label: 'Return',
      icon: 'send_money',
    },
    {
      id: 'live-recovery-tracker' as ScreenTab,
      label: 'Tracker',
      icon: 'timeline',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#e6eeff] shadow-[0_-2px_12px_rgba(95,37,159,0.06)] pb-safe">
      <div className="max-w-lg mx-auto flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[64px] h-12 transition-all active:scale-95 ${
                isActive
                  ? 'text-[#470085] font-semibold'
                  : 'text-[#4b4452] hover:text-[#470085]'
              }`}
            >
              <div className="relative flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[23px] transition-transform"
                  style={{
                    fontVariationSettings: isActive ? "'FILL' 1, 'wght' 600" : "'FILL' 0, 'wght' 400",
                  }}
                >
                  {tab.icon}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#470085]" />
                )}
              </div>
              <span className="text-[11px] tracking-tight">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
