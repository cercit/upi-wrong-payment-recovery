import { DisputeCase } from '../types';

export const ASSETS = {
  phonePeLogo: 'https://lh3.googleusercontent.com/aida/AEtjO1VHVTdR5rlDGe9AJxifMXgNIkWFDvzOIVjUbZY_TwDCYIDcJ23lM91KN6Z5tJ4khimoMysqIqgGLi2u7QsQ5b8_2Wx3n5eCF1Pns2C2r4RQEvsHUEHHNVtHkDzI3NC-xegH_P1ysgIGU45LebZinxM4_pn9954dQ0SzTl_acQIamMHJXXDKQ0WI6Ar8bopO290ooSWGBIg8RteFzPkmLagcM_8Tu9TceLjkx2ZM3NynZ2Q0QuAoLkZSjXA',
  userProfile: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBJlpcOXU7KYCXU2oXiEeZYmq6nulLGpd-p857E4L157v9Pl3Uw3XkJ871X3PI98IiA6qtfuV6FYVRbAQn5Bozxed3BIv1kUKRnu-RVnRp0qP8rKRpTS8dwN5pGtfrK-0LKK1mTYTQEcAuZedTvkn_uSnemXnZbasHz2naht28Gr7V68289FgfLZgV17sLlND88i4AqkhoLhSQPcsNxFMZJzOaQdEYSJ4AZv9h3uOHbETgXeo6kcrWsg',
  rameshAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCTWta1_8VzOYNSQcUt80WVxjjp_ogwvJDDIUsdRJdW2fbi9d3HL3ixYTMSDHjd6Z1oQbSyaBY03SsnRvCETVa-mCBVBUF4_qfzSYN0GQzMW2kjU5AIEXHm2ARk7_1NRKMe4vtfRSpQu091C1g_l3K3Rmm2gv1-qHJ43tNhkqk4ahLPdoxJamI64BsTzGTpQwfpQSa_Y13YEY6R-Zb32sc5GpMlTvWLU8PNNM569P-WOIaRsm9x42qPQ',
  sureshAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMgruErhXhm6qmYuEQ9QZiYg1tX_ycd_X4zhleV3xH5CbTurjMQO3RMyMgLrn9THfKwkn1k2_lgAgcFvDypESGqyezA_m_cTM7Z_82jpxzXbAuxxvQxdV7KcqKuBkrXzhTGNeVi-HahGYUlfHsRRRzrzSxo4LLEjLbPLzzGSYb4qMMVdSlc0P4gAYEytO_46rLBonNn5PaOLyDxgftZTIxlLvdehURaD5GI6v7fzNqw0BmgsSUwt993g',
};

export const INITIAL_CASE: DisputeCase = {
  caseId: 'REC-884920',
  status: 'In Progress',
  amount: 4500,
  recipientName: 'Ramesh Kumar',
  recipientUpi: 'ramesh.k98@okaxis',
  senderName: 'Suresh Kumar',
  senderUpi: 'suresh.k@okhdfcbank',
  senderBank: 'HDFC Bank •••• 4821',
  recipientBank: 'Axis Bank •••• 9012',
  utr: 'AXIS9921004123',
  docketNumber: 'NPCI-REV-2024-912',
  slaRemaining: 'Within 3 hrs 15 mins',
  officerName: 'M. Sharma',
  officerRole: 'Axis Bank NPCI Recovery Desk (Mumbai Central Hub)',
  progressPercent: 65,
  expectedResolution: 'Today, 06:00 PM',
  milestones: [
    {
      id: 'step-1',
      title: 'Recovery Request Raised',
      timestamp: 'Oct 24, 02:47 PM',
      description: 'Initiated automatically via UTR: AXIS9921004123',
      status: 'completed',
    },
    {
      id: 'step-2',
      title: 'Recipient Notified via PhonePe & SMS',
      timestamp: 'Oct 24, 02:48 PM',
      description: 'Interactive Easy-Return prompt delivered to Ramesh Kumar',
      status: 'completed',
      badge: 'Delivered to registered mobile',
    },
    {
      id: 'step-3',
      title: 'Recipient Bank (Axis Bank) Contacted',
      timestamp: 'Oct 24, 02:50 PM',
      description: 'Case assigned to Axis Bank Nodal Recovery Cell',
      status: 'in_progress',
      meta: [
        { label: 'Reference Docket:', value: 'NPCI-REV-2024-912' },
        { label: 'SLA Target Deadline:', value: 'Within 3 hrs 15 mins' },
      ],
    },
    {
      id: 'step-4',
      title: 'Automated Reversal & Credit',
      timestamp: 'Pending',
      description: 'Funds will be credited directly to your HDFC Bank A/c •••• 4821',
      status: 'pending',
    },
  ],
};
