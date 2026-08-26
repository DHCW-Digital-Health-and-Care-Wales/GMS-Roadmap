/**
 * Single source of roadmap content.
 *
 * Updating the roadmap is a content edit here, not a code change. Every piece
 * of display text is language-keyed so Welsh and English are both supported.
 * Welsh values are left empty for now; the UI falls back to English when a
 * Welsh string is empty (see src/lib/i18n.ts).
 */

export type Horizon = 'now' | 'next' | 'later';
export type ItemStatus = 'exploring' | 'in-progress' | 'shipped';

/** Every piece of display text is language-keyed. */
export interface Localised {
  cy: string; // Welsh
  en: string; // English
}

export interface Category {
  id: string;
  name: Localised;
  headline: Localised;
  description: Localised;
  accent: string;
}

export interface RoadmapItem {
  id: string;
  title: Localised;
  summary: Localised;
  categoryId: string;
  horizon: Horizon;
  status: ItemStatus;
  phase?: string;
  phaseKind?: 'discovery';
  outcome?: string;
  metric?: string;
  capabilities?: { label: string; items: string[] };
  services?: string[];
  updated: string;
}

/**
 * A single item in a delivered work section.
 */
export interface DeliveredItem {
  id: string;
  title: Localised;
  summary: Localised;
  metric?: string;
  capabilities?: { label: string; items: string[] };
}

/**
 * A delivered work section (Recently delivered / Other work this year / Not doing right now).
 */
export interface DeliveredSectionData {
  id: string;
  heading: Localised;
  description: Localised;
  /** Visible on-page placeholder shown when items is empty. */
  placeholder: Localised;
  items: DeliveredItem[];
}

export interface RoadmapMeta {
  title: Localised;
  vision: Localised;
  serviceDescription: Localised;
  intro: Localised;
  horizonNote: Localised;
  owner: string;
  lastUpdated: string;
  reviewNote: Localised;
  statusLabel: string;
  betaNote: Localised;
}

export interface Roadmap {
  meta: RoadmapMeta;
  horizons: { id: Horizon; label: Localised; definition: Localised }[];
  categories: Category[];
  items: RoadmapItem[];
  recentlyDelivered: DeliveredSectionData;
  otherDelivered: DeliveredSectionData;
  notDoingNow: DeliveredSectionData;
}

const TODO_CY = '';
const UPDATED_AT = '2026-08-26';
const CATEGORY_ID = 'general-medical-services';

const localised = (en: string): Localised => ({ cy: TODO_CY, en });

export const roadmap: Roadmap = {
  meta: {
    title: localised('DHCW General Medical Services roadmap'),

    vision: localised(
      'General Practice in Wales is supported by safe, reliable and user-centred digital services that enable high-quality patient care.',
    ),

    serviceDescription: localised(
      'Digital services that enable General Practice systems across Wales to securely exchange information with NHS Wales services, supporting safe, efficient patient care.',
    ),

    intro: localised(
      "This roadmap shows what we're working on now, what's coming next and the direction we expect to take later.",
    ),
    horizonNote: localised(
      "Now is what we are actively working on. Next is what we expect to pick up soon. Later is the direction we're setting as we learn more with users, families and partners. We don't put dates on this work, and the order isn't a priority list.",
    ),
    owner: 'General Medical Services team, DHCW',
    lastUpdated: UPDATED_AT,
    reviewNote: localised(
      'We update this roadmap as plans develop and we learn from delivery.',
    ),
    statusLabel: 'Draft for Discussion',
    betaNote: localised(
      'We are trialling a public beta of our roadmap here. Our long-term goal is to make these available through our website.',
    ),
  },

  horizons: [
    {
      id: 'now',
      label: localised('Now'),
      definition: localised(
        'Work that is underway now and shaping the next changes to the service.',
      ),
    },
    {
      id: 'next',
      label: localised('Next'),
      definition: localised(
        'Work we expect to pick up soon as current delivery moves forward.',
      ),
    },
    {
      id: 'later',
      label: localised('Later'),
      definition: localised(
        'Longer-term direction that will keep evolving as we learn more.',
      ),
    },
  ],

  categories: [
    {
      id: CATEGORY_ID,
      name: localised('General Medical Services'),
      headline: localised('Now, Next and Later for General Medical Services'),
      description: localised(
        "This roadmap is a simple view of the work shaping General Medical Services in Wales. Each card shows a change we're working on now, planning to take on next, or working towards later.",
      ),
      accent: '#325083',
    },
  ],

  items: [
    // NOW
    {
      id: 'gp-discovery-roadmap',
      title: localised('Completing GP discovery and shaping a co-designed digital roadmap'),
      summary: localised(
        'Completing GP discovery and shaping a co-designed digital roadmap.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'The team has a clearer evidence base for future product direction and prioritisation.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-gptr-tech-deep-dive',
      title: localised('Progressing the WCCG and GPTR technology deep dive'),
      summary: localised(
        'Progressing the WCCG and GPTR technology deep dive across architecture, integrations, hosting, technical debt and operational risks.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Modernisation opportunities and service resilience needs are better understood.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-upgrade-decision',
      title: localised('Working through the WCCG upgrade decision'),
      summary: localised(
        'Working through the WCCG upgrade decision, including plan, cost and product direction.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'An options appraisal is produced, future investment and enhancement choices are better informed.',
      updated: UPDATED_AT,
    },
    {
      id: 'archive-database-retention',
      title: localised('Defining archive database retention requirements'),
      summary: localised(
        'Defining archive database retention requirements.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Disk space, service stability and compliance needs are managed more effectively.',
      updated: UPDATED_AT,
    },
    {
      id: 'user-discovery-and-research',
      title: localised('Running user discovery and user research across products'),
      summary: localised(
        'Running user discovery and user research across GPTR, WCCG, GP Portal and GP Links.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Strategic directions for the products are shaped by service evidence and user need.',
      updated: UPDATED_AT,
    },
    {
      id: 'active-gms-delivery-priorities',
      title: localised('Supporting active GMS delivery priorities'),
      summary: localised(
        'Supporting active GMS delivery priorities including AVT procurement, GMS Show and Tell, the GMS Resource Hub, One Advanced Exit, SNOMED support and the National Cluster project.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Key service, procurement and engagement priorities keep moving while discovery work progresses.',
      updated: UPDATED_AT,
    },

    // NEXT
    {
      id: 'nhs-wales-app-digital-access',
      title: localised('Enabling digital access through NHS Wales App options'),
      summary: localised(
        'Enabling access to immunisations, problems and test results through NHS Wales App options.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Contract reform priorities can progress with EMIS/Enlivio and patients can benefit from broader digital access to GP-held information.',
      updated: UPDATED_AT,
    },
    {
      id: 'avt-framework-call-off',
      title: localised('Moving AVT into framework and call-off process'),
      summary: localised(
        'Moving AVT from procurement into a framework and call-off process.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Practices have a clearer route to adopt ambient voice technology solutions from the framework.',
      updated: UPDATED_AT,
    },
    {
      id: 'emis-clinical-services-integrations',
      title: localised('Testing national integrations with EMIS Clinical Services'),
      summary: localised(
        'Progressing the testing of national integrations with EMIS Clinical Services and undertake cluster evaluation work.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'The team can understand how cluster models should be configured, assured and supported.',
      updated: UPDATED_AT,
    },
    {
      id: 'national-cluster-digital-service-blueprint',
      title: localised('Developing the national cluster digital service blueprint'),
      summary: localised(
        'Developing the national cluster digital service blueprint.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Roles, pathways, configuration and onboarding are clearer for delivery teams and stakeholders.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-gptr-migration',
      title: localised('Progressing WCCG and GPTR migration work'),
      summary: localised(
        'Progressing WCCG and GPTR migration work, including VCF migration, UAT and production cloud migration planning.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Migration activity is better sequenced, risk-managed and ready for delivery.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-enhancements',
      title: localised('Assessing and preparing WCCG enhancements'),
      summary: localised(
        'Assessing and preparing WCCG enhancements including clinical notes, BCU ePOC replacement, SBU ECHO reports, Velindre hospital-initiated referrals and fixed manual referral fields.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'High-value enhancements are understood, prioritised and prepared for delivery decisions.',
      updated: UPDATED_AT,
    },
    {
      id: 'gptr-improvements',
      title: localised('Progressing GPTR improvements'),
      summary: localised(
        'Progressing GPTR improvements such as editable pathology requests before sample collection.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Users have more flexibility to correct requests earlier and reduce avoidable rework.',
      updated: UPDATED_AT,
    },
    {
      id: 'eps-improvement-work',
      title: localised('Continuing EPS improvement work'),
      summary: localised(
        'Continuing EPS improvement work, including bulk signing and related priorities where funding and impact assessment activity allow.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Prescribing workflows become safer, more efficient and better aligned to future service needs.',
      updated: UPDATED_AT,
    },

    // LATER
    {
      id: 'gp2gp-cross-border-discovery',
      title: localised('Exploring GP2GP cross-border discovery'),
      summary: localised(
        'Exploring GP2GP cross-border discovery.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'The team can understand options for improving electronic transfer of GP patient records.',
      updated: UPDATED_AT,
    },
    {
      id: 'emis-web-optum-roadmap',
      title: localised('Considering future EMIS Web and Optum roadmap items'),
      summary: localised(
        'Considering future EMIS Web and Optum roadmap items such as EMIS-X Browser, EMIS-X Companion App, Desktop Integration API, and Dynamic Templates.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Potential supplier-led changes are understood early and can be assessed against Welsh priorities.',
      updated: UPDATED_AT,
    },
    {
      id: 'nhs-wales-app-gms-enhancements',
      title: localised('Exploring future NHS Wales App enhancements for GMS'),
      summary: localised(
        'Exploring future NHS Wales App enhancements for GMS, including proxy enhancements and GP IT registration, where these align to wider product direction.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Future app opportunities are assessed against user need, strategic fit and delivery readiness.',
      updated: UPDATED_AT,
    },
    {
      id: 'safety-and-resilience-items',
      title: localised('Considering future safety and resilience items'),
      summary: localised(
        'Considering future safety and resilience items including National Record Locator, Panic Button 2.0, reasonable adjustment patient flags and GP2GP transport or failure rate improvements.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Future resilience and safety improvements can be assessed and sequenced in line with service risk.',
      updated: UPDATED_AT,
    },
    {
      id: 'future-eps-priorities',
      title: localised('Reviewing future electronic prescribing priorities'),
      summary: localised(
        'Continuing to review future electronic prescribing priorities such as post-dated scripts, CIS2 phase 2 and other EPS priorities where dependencies, funding and strategic fit are clear.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Future EPS work is considered in a way that balances value, readiness and delivery constraints.',
      updated: UPDATED_AT,
    },
  ],

  recentlyDelivered: {
    id: 'recently-delivered',
    heading: localised('Recently delivered'),
    description: localised(
      "Work we've completed recently and that is now live in the service.",
    ),
    placeholder: localised(
      'Content to be confirmed. This section will list recently delivered work once reviewed and agreed with the service team.',
    ),
    items: [
      {
        id: 'aws-pilot-2-completion',
        title: localised('AWS Pilot 2 completion'),
        summary: localised(
          'AWS Pilot 2 completion, supporting the wider move towards modernised hosting foundations.',
        ),
      },
      {
        id: 'eps-sha-256-signing',
        title: localised('EPS SHA-256 signing test work completed'),
        summary: localised(
          'EPS SHA-256 signing test work completed for the pilots, supporting safer electronic prescribing foundations.',
        ),
      },
      {
        id: 'avt-procurement-milestones',
        title: localised('AVT procurement documentation milestones'),
        summary: localised(
          'AVT procurement documentation milestones, including ITT requirements approval, contract briefing paper progression and ITT publication.',
        ),
      },
      {
        id: 'sql-server-2019-upgrade',
        title: localised('Completed SQL Server 2019 upgrade activity'),
        summary: localised(
          'Completed SQL Server 2019 upgrade activity for WCCG, GP Links and GPTR so production infrastructure remains supported, secure and capable of meeting operational needs.',
        ),
      },
      {
        id: 'menb-writeback-to-emis',
        title: localised('MenB writeback to EMIS'),
        summary: localised(
          'MenB writeback to EMIS successfully implemented, supporting immunisation writeback activity.',
        ),
      },
    ],
  },

  otherDelivered: {
    id: 'other-delivered',
    heading: localised('Other work we have delivered this year'),
    description: localised(
      'A broader view of the delivery this year that sits outside the main roadmap horizons.',
    ),
    placeholder: localised(
      'Content to be confirmed. This section will capture wider delivery this year once reviewed and agreed with the service team.',
    ),
    items: [
      {
        id: 'lab-messaging-migration',
        title: localised('Migration of laboratory messaging'),
        summary: localised(
          'Successfully completed the migration of laboratory messaging from RADIS to RISP across all health boards, with the final health board going live on 20/21 June, helping to modernise the service, improve resilience, and support a single national platform for pathology messaging.',
        ),
      },
    ],
  },

  notDoingNow: {
    id: 'not-doing-now',
    heading: localised('Not doing right now'),
    description: localised(
      'Being clear about what we’re not doing keeps the focus where it matters.',
    ),
    placeholder: localised(
      'Content to be confirmed. This section will explain what is out of scope for now once reviewed and agreed with the service team.',
    ),
    items: [],
  },
};
