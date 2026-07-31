import type { Currency } from '@/lib/i18n';

/**
 * Shape of the GET /api/marketing/pricing response (served by the backend).
 * Kept here as a standalone type so the marketing frontend has no dependency
 * on the backend's server-only pricing service. Amounts are minor units
 * (cents/pence); byte counts are strings (they originate from BigInt columns).
 */
export interface PublicPlan {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  isFree: boolean;
  sortOrder: number;
  price: { baseAmount: number; currency: string; interval: string } | null;
  included: {
    websites: number;
    apiRequests: number;
    storageBytes: string;
    teamMembers: number;
  };
  addOns: {
    website: number;
    apiBlock: number;
    storageBlock: number;
    teamMember: number;
  };
}

export interface PublicPricing {
  currency: Currency;
  availableCurrencies: Currency[];
  plans: PublicPlan[];
}
