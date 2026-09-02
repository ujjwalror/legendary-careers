// Central Zoho Bookings Configuration for Legendary Careers

export interface ZohoStaffConfig {
  name: string;
  marn?: string;
  zohoUrl: string;
}

export const ZOHO_BOOKINGS_CONFIG: {
  mainPortalUrl: string;
  agents: Record<string, ZohoStaffConfig>;
} = {
  // Main company portal URL (for general booking buttons in Navbar/Hero)
  mainPortalUrl: 'https://legendarycareers.zohobookings.com.au/portal-embed#/',

  // Agent specific Zoho Bookings links
  agents: {
    'mohit-kharbanda': {
      name: 'Mohit Kharbanda',
      marn: 'MARN 2318016',
      zohoUrl: 'https://legendarycareers.zohobookings.com.au/portal-embed#/18126000001741116',
    },
    'eve-gaurav-tyagi': {
      name: 'Eve (Gaurav Tyagi)',
      marn: 'MARN 2619403',
      zohoUrl: 'https://legendarycareers.zohobookings.com.au/portal-embed#/18126000001743030',
    },
    'randhir-dhundoo': {
      name: 'Randhir Dhundoo',
      marn: 'Registered Migration Specialist',
      zohoUrl: 'https://legendarycareers.zohobookings.com.au/portal-embed#/randhir',
    },
    'aradhana-sethi': {
      name: 'Aradhana Sethi',
      marn: 'MARN 2318040',
      zohoUrl: 'https://legendarycareers.zohobookings.com.au/portal-embed#/18126000001743075',
    },
  },
};
