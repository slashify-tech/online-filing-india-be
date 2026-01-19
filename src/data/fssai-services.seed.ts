import { ServiceContent } from '../types/sub-service.types';

export const fssaiServicesContent: { slug: string; content: ServiceContent }[] = [
    {
        slug: 'fssai-basic-registration',
        content: {
            heroSection: {
                heading: 'FSSAI (Basic)',
                subtext:
                    'FSSAI Basic registration is mandatory for small food businesses with annual turnover below ₹12 lakh, covering petty traders, snack makers and home-based food operations.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Legal Requirement', whyItMatters: 'Legal requirement to sell or manufacture food items without fines up to ₹10 lakh or business closure' },
                { benefit: 'Customer Trust', whyItMatters: 'Builds customer trust with the FSSAI logo and license number on packaging/invoices' },
            ],
            whatYouWillGet: [
                'Collect basic details (Aadhaar, photo, business proof)',
                'File Form A online',
                'Handle verification till license issuance',
                'Guide on label compliance',
                'Renewals every 1–5 years based on business type',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-3 days', activity: 'Document submission & filing' },
                    { days: '7-30 days', activity: 'FSSAI approval' },
                ],
                totalTime: 'Document submission & filing: 1–3 working days. FSSAI approval: typically 7–30 days',
            },
            stepByStepProcess: [
                { step: 'Collect basic details' },
                { step: 'File Form A online' },
                { step: 'Handle verification' },
                { step: 'License issuance' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your FSSAI Basic registration?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'fssai-state-licence',
        content: {
            heroSection: {
                heading: 'FSSAI State Licence',
                subtext:
                    'FSSAI State license for medium food businesses (turnover ₹12 lakh–₹20 crore) like restaurants, bakeries and distributors operating within one state.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Required for Multi-State', whyItMatters: 'Required for multi-state supply chains or higher volume operations; non-compliance invites inspections and penalties' },
                { benefit: 'Interstate Trade', whyItMatters: 'Enables interstate trade documentation and quality certification' },
            ],
            whatYouWillGet: [
                'Site eligibility check',
                'Prepare layout plan',
                'Product list preparation',
                'File Form B with lab test reports if needed',
                'Coordinate inspections',
                'Address queries',
                'Secure license with validity of 1–5 years',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-5 days', activity: 'Application preparation' },
                    { days: '30-60 days', activity: 'Processing & inspection' },
                ],
                totalTime: 'Application preparation: 3–5 working days. Processing & inspection: 30–60 days',
            },
            stepByStepProcess: [
                { step: 'Site eligibility check' },
                { step: 'Prepare layout plan and product list' },
                { step: 'File Form B' },
                { step: 'Coordinate inspections' },
                { step: 'Address queries' },
                { step: 'Secure license' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your FSSAI State Licence?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'fssai-central-licence',
        content: {
            heroSection: {
                heading: 'FSSAI Central Licence',
                subtext:
                    'FSSAI Central license for large-scale operations (turnover >₹20 crore), exporters, importers, hotels and multi-state manufacturers.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'National/International Trade', whyItMatters: 'Essential for national/international trade, e-commerce food sales and import-export compliance' },
                { benefit: 'Perpetual Validity', whyItMatters: 'Higher scrutiny but perpetual validity (with renewals) and priority support' },
            ],
            whatYouWillGet: [
                'Full documentation (MOA, layout, HACCP plan)',
                'Microbiological testing',
                'Online Form B submission',
                'Liaison with Central FSSAI office',
                'Audits coordination',
                'License grant',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '5-10 days', activity: 'Complete filing' },
                    { days: '60-90 days', activity: 'Approval cycle including audits' },
                ],
                totalTime: 'Complete filing: 5–10 working days. Approval cycle: 60–90 days including audits',
            },
            stepByStepProcess: [
                { step: 'Full documentation preparation' },
                { step: 'Microbiological testing' },
                { step: 'Online Form B submission' },
                { step: 'Liaison with Central FSSAI office' },
                { step: 'Audits coordination' },
                { step: 'License grant' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your FSSAI Central Licence?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'eating-house-licence',
        content: {
            heroSection: {
                heading: 'Eating House Licence',
                subtext:
                    'Eating House License (under Shops & Establishments or local municipal laws) permits operation of restaurants, cafes, dhabas and food service outlets.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Local Mandatory Permit', whyItMatters: 'Local mandatory permit alongside FSSAI; violation leads to closure notices and fines from municipal authorities' },
                { benefit: 'Compliance Coverage', whyItMatters: 'Covers hygiene standards, fire safety and employee welfare compliances' },
            ],
            whatYouWillGet: [
                'Assess location-specific rules (Delhi MCD, BMC Mumbai etc.)',
                'Prepare application with menu, layout and NOC proofs',
                'File with the municipal corporation',
                'Follow up till license display approval',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '2-4 days', activity: 'Documentation & filing' },
                    { days: '15-45 days', activity: 'Municipal processing' },
                ],
                totalTime: 'Documentation & filing: 2–4 working days. Municipal processing: 15–45 days depending on the city',
            },
            stepByStepProcess: [
                { step: 'Assess location-specific rules' },
                { step: 'Prepare application with menu and layout' },
                { step: 'File with municipal corporation' },
                { step: 'Follow up for approval' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your Eating House Licence?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'lab-test-reports',
        content: {
            heroSection: {
                heading: 'Lab Test Reports',
                subtext:
                    'Mandatory food safety lab testing for FSSAI applications, verifying microbial, chemical and adulterant levels in samples.',
                primaryCTAs: ['Get Test Reports', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'FSSAI Requirement', whyItMatters: 'FSSAI rejects applications without valid NABL-accredited lab reports; ensures food safety compliance' },
                { benefit: 'Avoid Product Recalls', whyItMatters: 'Critical for renewals and during inspections to avoid product recalls' },
            ],
            whatYouWillGet: [
                'Recommend FSSAI-empanelled labs',
                'Collect/guide sample submission (water, raw materials, finished products)',
                'Track test results',
                'Interpret against standards',
                'Include in license applications',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-7 days', activity: 'Sample collection & testing' },
                    { days: '5-10 days', activity: 'Report delivery' },
                ],
                totalTime: 'Sample collection & testing: 3–7 working days. Report delivery: 5–10 days total',
            },
            stepByStepProcess: [
                { step: 'Recommend FSSAI-empanelled labs' },
                { step: 'Collect/guide sample submission' },
                { step: 'Track test results' },
                { step: 'Interpret against standards' },
                { step: 'Include in license applications' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get lab test reports?',
                ctas: ['Get Test Reports', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'health-trade-licence',
        content: {
            heroSection: {
                heading: 'Health Trade Licence',
                subtext:
                    'Health Trade License from local health department for food-related businesses like catering, grocery, juice centers and meat shops.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Verifies Sanitary Conditions', whyItMatters: 'Verifies sanitary conditions, waste disposal and hygiene practices; mandatory for food handling operations' },
                { benefit: 'Annual Renewal', whyItMatters: 'Renewed annually; lapse triggers health inspections and penalties' },
            ],
            whatYouWillGet: [
                'Prepare application with medical fitness certificates',
                'Premises inspection report',
                'Waste management plan',
                'Coordinate health officer visit',
                'Secure license for display at premises',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-3 days', activity: 'Application submission' },
                    { days: '7-30 days', activity: 'Inspection & issuance' },
                ],
                totalTime: 'Application submission: 1–3 working days. Inspection & issuance: 7–30 days',
            },
            stepByStepProcess: [
                { step: 'Prepare application with medical fitness certificates' },
                { step: 'Premises inspection report' },
                { step: 'Waste management plan' },
                { step: 'Coordinate health officer visit' },
                { step: 'Secure license' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your Health Trade Licence?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
];
