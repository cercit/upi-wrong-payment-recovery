export type ScreenTab = 'transaction-receipt' | 'recovery-request' | 'easy-return' | 'live-recovery-tracker';

export interface Milestone {
  id: string;
  title: string;
  timestamp: string;
  description: string;
  status: 'completed' | 'in_progress' | 'pending';
  badge?: string;
  meta?: { label: string; value: string }[];
}

export interface DisputeCase {
  caseId: string;
  status: 'In Progress' | 'Resolved' | 'Under Review';
  amount: number;
  recipientName: string;
  recipientUpi: string;
  senderName: string;
  senderUpi: string;
  senderBank: string;
  recipientBank: string;
  utr: string;
  docketNumber: string;
  slaRemaining: string;
  officerName: string;
  officerRole: string;
  progressPercent: number;
  expectedResolution: string;
  milestones: Milestone[];
}
