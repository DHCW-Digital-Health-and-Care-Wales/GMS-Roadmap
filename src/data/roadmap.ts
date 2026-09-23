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

export interface Localised {
  cy: string;
  en: string;
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

export interface DeliveredItem {
  id: string;
  title: Localised;
  summary: Localised;
  outcome?: Localised;
  metric?: string;
  capabilities?: { label: string; items: string[] };
}

export interface DeliveredSectionData {
  id: string;
  heading: Localised;
  description: Localised;
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
  notRightNow: DeliveredSectionData;
}

const TODO_CY = '';
const UPDATED_AT = '2026-09-22';
const CATEGORY_ID = 'general-medical-services';

const localised = (en: string): Localised => ({ cy: TODO_CY, en });

export const roadmap: Roadmap = {
  meta: {
    title: localised('General Medical Services roadmap'),
    vision: localised(
      'General Practice in Wales is supported by safe, reliable and user-centred digital services that enable high-quality patient care.',
    ),
    serviceDescription: localised(
      'Digital services that provide the foundation for safe, efficient and coordinated primary care across Wales, enabling healthcare professionals to access accurate patient records, undertake consultations, prescribe, receive and review test results and manage referrals safely and efficiently.',
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
    statusLabel: 'Beta',
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
        'This roadmap shows how General Medical Services is improving digital services for safe, efficient and coordinated primary care across Wales.',
      ),
      accent: '#325083',
    },
  ],

  items: [
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
      id: 'active-gms-delivery-priorities',
      title: localised('Supporting active GMS delivery priorities'),
      summary: localised(
        'Supporting active GMS delivery priorities including AVT procurement, GMS Show and Tell, the GMS Resource Hub, One Advanced Exit, SNOMED support and the National Cluster project.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Key service improvements, procurement and engagement priorities progressed.',
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
      outcome: 'Better understanding of the architecture state of the products.',
      updated: UPDATED_AT,
    },
    {
      id: 'wgpr-transition-project',
      title: localised('WGPR Transition Project'),
      summary: localised(
        'Looking at the transfer of the support model to the primary care services team and creating a support tool to facilitate a smooth transition.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Review governance model and product ownership around the product and ensure the support tool is developed to aid the transition.',
      updated: UPDATED_AT,
    },
    {
      id: 'application-server-upgrades',
      title: localised('Application Server Upgrades for WCCG and GPTR'),
      summary: localised(
        'Application Server Upgrades for WCCG and GPTR from 2016 to 2022.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome:
        'Keeping the servers in line with the supported environment as the 2016 servers will go out of support soon.',
      updated: UPDATED_AT,
    },
    {
      id: 'eps-digital-signing',
      title: localised(
        'Product enhancements to support digital signing of electronic prescriptions service',
      ),
      summary: localised(
        'Product enhancements to support digital signing of electronic prescriptions service.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome: 'Product updates required to enable continued use of EPS.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-gptr-infrastructure-upgrade',
      title: localised('Progressing WCCG and GPTR infrastructure upgrade'),
      summary: localised(
        'Progressing WCCG and GPTR infrastructure upgrade including VCF migration.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'now',
      status: 'in-progress',
      outcome: 'Infrastructure enhancement.',
      updated: UPDATED_AT,
    },

    {
      id: 'user-discovery-and-research',
      title: localised('Running user discovery and user research across GPTR, WCCG and GP Portal'),
      summary: localised(
        'Running user discovery and user research across GPTR, WCCG and GP Portal.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Strategic directions for the products are shaped by service evidence and user need.',
      updated: UPDATED_AT,
    },
    {
      id: 'avt-framework-evaluation',
      title: localised('Procurement evaluation for the AVT framework'),
      summary: localised('Procurement evaluation for the AVT framework.'),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Evaluation of tenders will be completed and approvals progressed with senior stakeholders.',
      updated: UPDATED_AT,
    },
    {
      id: 'national-integrations-and-cluster-service-design',
      title: localised('Testing national integrations and undertaking cluster service design work'),
      summary: localised(
        'Progressing the testing of national integrations with EMIS Clinical Services and undertaking cluster service design work to inform a national recommendation.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'The team can understand how cluster models should be configured, assured and supported if we were to scale this to adopt a national approach.',
      updated: UPDATED_AT,
    },
    {
      id: 'gptr-memory-leak',
      title: localised('Addressing the GPTR memory leak issue'),
      summary: localised('Addressing the GPTR memory leak issue.'),
      categoryId: CATEGORY_ID,
      horizon: 'next',
      status: 'exploring',
      outcome:
        'Improved GPTR stability and reduced reliance on scheduled application pool recycling.',
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

    {
      id: 'referrals-and-test-requesting-strategy',
      title: localised('Product strategy for referrals and test requesting in Primary Care'),
      summary: localised('Product strategy for referrals and test requesting in Primary Care.'),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'nhs-wales-app-digital-access',
      title: localised('Enabling access to immunisations, problems and test results through NHS Wales App'),
      summary: localised(
        'Enabling access to immunisations, problems and test results through NHS Wales App.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Contract reform priorities can progress with EMIS/Enlivio and patients can benefit from broader digital access to GP-held information.',
      updated: UPDATED_AT,
    },
    {
      id: 'avt-framework-call-off',
      title: localised('Publishing the AVT framework and implementing the call-off process for practices'),
      summary: localised(
        'Publish the AVT framework and implement the call-off process for practices.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Practices have a clearer route to adopt ambient voice technology solutions from the framework.',
      updated: UPDATED_AT,
    },
    {
      id: 'wccg-gptr-cloud-migration',
      title: localised('Progressing WCCG and GPTR infrastructure upgrade'),
      summary: localised(
        'Progressing WCCG and GPTR infrastructure upgrade including UAT and production cloud migration planning.',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Infrastructure enhancement to align with the organisation cloud first strategy.',
      updated: UPDATED_AT,
    },
    {
      id: 'national-cluster-digital-service-blueprint',
      title: localised('Developing the national cluster digital service blueprint'),
      summary: localised('Developing the national cluster digital service blueprint.'),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      outcome:
        'Roles, pathways, configuration and onboarding are clearer for delivery teams and stakeholders.',
      updated: UPDATED_AT,
    },
    {
      id: 'aws-phase-two-migration',
      title: localised('AWS Phase 2 migration of the data centres, including shared services'),
      summary: localised(
        'AWS Phase 2 migration of the data centres, including shared services (11 services).',
      ),
      categoryId: CATEGORY_ID,
      horizon: 'later',
      status: 'exploring',
      updated: UPDATED_AT,
    },
    {
      id: 'emis-web-optum-roadmap',
      title: localised('Considering future EMIS Web and Optum roadmap items'),
      summary: localised(
        'Considering future EMIS Web and Optum roadmap items such as EMIS-X Capabilities and Resource Publisher.',
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
        id: 'aws-phase-one-practice-migrations',
        title: localised('AWS Phase 1 completion of the practice migrations'),
        summary: localised(
          'AWS Phase 1 completion of the practice migrations, supporting the wider move towards modernised hosting foundations.',
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
        id: 'vaccination-records-writeback',
        title: localised('Vaccination records shared back into GP systems'),
        summary: localised(
          'Current and upcoming vaccination records can now be shared back into GP systems, supporting more complete and up-to-date patient records.',
        ),
      },
      {
        id: 'archive-database-retention',
        title: localised('Defining archive database retention requirements'),
        summary: localised(
          'Defining archive database retention requirements.',
        ),
        outcome: localised(
          'Disk space, service stability and compliance needs are managed more effectively.',
        ),
      },
    ],
  },

  otherDelivered: {
    id: 'other-delivered',
    heading: localised('Other work delivered this year'),
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

  notRightNow: {
    id: 'not-right-now',
    heading: localised('Not now'),
    description: localised(
      "Being clear about what we're not doing keeps the focus where it matters.",
    ),
    placeholder: localised(''),
    items: [
      {
        id: 'unplanned-work-outside-gms-priorities',
        title: localised('Unplanned work outside current GMS priorities'),
        summary: localised(
          'We are not taking on unplanned work that is not linked to current GMS priorities, so the team can stay focused on the commitments in this roadmap.',
        ),
      },
    ],
  },
};