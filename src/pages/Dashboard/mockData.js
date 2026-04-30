export const dashboardData = {
  gmv: {
    total: 4128940.22,
    growth: 14.2,
    history: [
      { month: 'Jan', value: 1200000 },
      { month: 'Feb', value: 1500000 },
      { month: 'Mar', value: 1800000 },
      { month: 'Apr', value: 1700000 },
      { month: 'May', value: 2100000 },
      { month: 'Jun', value: 2500000 },
      { month: 'Jul', value: 2400000 },
      { month: 'Aug', value: 3100000 },
      { month: 'Sep', value: 3400000 },
      { month: 'Oct', value: 4128940 }
    ]
  },
  alerts: [
    { id: 1, type: 'error', title: 'Webhook Failure: Gym #402', description: 'Retry attempts exhausted (403 Forbidden)' },
    { id: 2, type: 'success', title: 'Financial Sync Complete', description: 'Monthly Fawry reconciliation finalized.' },
    { id: 3, type: 'info', title: 'Db Backup Finished', description: 'Duration: 1.2s | Size: 1.4GB' }
  ],
  stats: {
    supabase: { size: '2.4 TB', provisioned: '4.0 TB', usage: 72 },
    edgeFunctions: { invocations: '42.8M', avgLatency: '12ms' },
    cloudflare: { egress: '12.5 PB', cacheEfficiency: 99.2 },
    liveCapacity: { activeMAU: '892,104', activeSessions: '14,202' }
  },
  approvals: [
    { id: 1, name: 'Iron Temple Cairo', tier: 'Premium Branch (Downtown)', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=150&auto=format&fit=crop' },
    { id: 2, name: 'Velocity Athletics', tier: 'Standard Tier (Giza)', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=150&auto=format&fit=crop' },
    { id: 3, name: 'Oasis Fitness Hub', tier: 'Enterprise Partner', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=150&auto=format&fit=crop' }
  ],
  directory: [
    { id: 'GP-001', name: 'Iron Temple Cairo', tier: 'Premium Branch (Downtown)', revenue: 45200.00, status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=150&auto=format&fit=crop' },
    { id: 'GP-402', name: 'Velocity Athletics', tier: 'Standard Tier (Giza)', revenue: 12180.50, status: 'SUSPENDED', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=150&auto=format&fit=crop' },
    { id: 'GP-122', name: 'Oasis Fitness Hub', tier: 'Enterprise Partner', revenue: 89400.00, status: 'ACTIVE', image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=150&auto=format&fit=crop' },
    { id: 'GP-125', name: 'Summit Strength Center', tier: 'Elite Membership (Maadi)', revenue: 33750.75, status: 'PENDING', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=150&auto=format&fit=crop' }
  ]
};
