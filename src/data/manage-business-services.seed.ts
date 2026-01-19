import { ServiceContent } from '../types/sub-service.types';
import { businessLicencesSubGroups } from './business-licences-sub-groups.seed';

export const manageBusinessServicesContent: { slug: string; content: ServiceContent }[] = [
    {
        slug: 'business-licences-registration',
        content: {
            heroSection: {
                heading: 'Get Any Business Licence in India — Fast, Simple & 100% Online',
                subtext:
                    'From Trademark to FSSAI to Startup India Registration, apply for all business registrations in one place with expert guidance, fixed pricing and guaranteed timelines.',
                primaryCTAs: ['Explore all licenses', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [
                'Trademark Registration',
                'ISO Certification',
                'Import Export Code',
                'AD Code Registration',
                'ICEGATE Registration',
                'Port Registration',
                'RCMC Registration',
                'IEC Renewal',
                'Certificate of Origin',
                'Freight Forwarding Services',
                'Phytosanitary Services',
                'Startup India Registration',
                'FSSAI Basic Registration',
                'FSSAI State Licence',
                'FSSAI Central Licence',
                'Eating House Licence',
                'Lab Test Reports',
                'Health Trade Licence',
                'MSME / Udyam Registration',
                'Shop & Establishment Registration',
                'Professional Tax Registration',
                'PAN/TAN',
                'Legal Entity Identified Code',
                'PF Registration',
                'ESIC Registration',
                'RERA Registration',
                'Professional Tax',
                'Barcodes',
                'BIS Registration',
                'NSIC Registration',
                'GEM Registration',
                'Logo Designing',
                'Copyright Registration',
                'Patent Registration',
            ],
            serviceSlugMapping: {
                'Trademark Registration': 'trademark-registration',
                'ISO Certification': 'iso-certification',
                'Import Export Code': 'import-export-code',
                'AD Code Registration': 'ad-code-registration',
                'ICEGATE Registration': 'icegate-registration',
                'Port Registration': 'port-registration',
                'RCMC Registration': 'rcmc-registration',
                'IEC Renewal': 'iec-renewal',
                'Certificate of Origin': 'certificate-of-origin',
                'Freight Forwarding Services': 'freight-forwarding-services',
                'Phytosanitary Services': 'phytosanitary-services',
                'Startup India Registration': 'startup-india-registration',
                'FSSAI Basic Registration': 'fssai-basic-registration',
                'FSSAI State Licence': 'fssai-state-licence',
                'FSSAI Central Licence': 'fssai-central-licence',
                'Eating House Licence': 'eating-house-licence',
                'Lab Test Reports': 'lab-test-reports',
                'Health Trade Licence': 'health-trade-licence',
                'MSME / Udyam Registration': 'msme-udyam-registration',
                'Shop & Establishment Registration': 'shop-establishment-registration',
                'Professional Tax Registration': 'professional-tax-registration',
                'PAN/TAN': 'pan-tan',
                'Legal Entity Identified Code': 'legal-entity-identified-code',
                'PF Registration': 'pf-registration',
                'ESIC Registration': 'esic-registration',
                'RERA Registration': 'rera-registration',
                'Professional Tax': 'professional-tax',
                'Barcodes': 'barcodes',
                'BIS Registration': 'bis-registration',
                'NSIC Registration': 'nsic-registration',
                'GEM Registration': 'gem-registration',
                'Logo Designing': 'logo-designing',
                'Copyright Registration': 'copyright-registration',
                'Patent Registration': 'patent-registration',
            },
            subServiceGroups: businessLicencesSubGroups,
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Share Documents' },
                    { days: 'Step 2', activity: 'We Verify' },
                    { days: 'Step 3', activity: 'We file application' },
                    { days: 'Step 4', activity: 'Govt Processing' },
                    { days: 'Step 5', activity: 'Licence issued' },
                ],
                totalTime: '3-30 days depending on licence',
            },
            stepByStepProcess: [
                { step: 'Share Documents' },
                { step: 'We Verify' },
                { step: 'We file application' },
                { step: 'Govt Processing' },
                { step: 'Licence issued' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to apply for your business licences?',
                ctas: ['Apply a License', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'gst-tax-filings',
        content: {
            heroSection: {
                heading: 'GST Registration & Return Filings',
                subtext:
                    'One-stop GST desk for getting your GSTIN, configuring invoicing, and managing monthly, quarterly, and annual GST returns without penalties.',
                primaryCTAs: ['Explore More', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [
                'GST Registration',
                'GST Monthly Return (Nil)',
                'GST Monthly Return with Bills',
                'GST Quarterly Return',
                'GST Quarterly',
                'GST LUT Registrations',
                'GST Annual Return',
                'GST Surrender',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Share business details' },
                    { days: 'Step 2', activity: 'We prepare REG-01' },
                    { days: 'Step 3', activity: 'Dept verification' },
                    { days: 'Step 4', activity: 'GSTIN issued' },
                ],
                totalTime: '3-7 days for registration; Monthly/Quarterly for filings',
            },
            stepByStepProcess: [
                { step: 'Share business details' },
                { step: 'We prepare REG-01' },
                { step: 'Dept verification' },
                { step: 'GSTIN issued' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to apply for your business GST Tax & Filings?',
                ctas: ['Apply a GST', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'annual-compliances-filings',
        content: {
            heroSection: {
                heading: 'Annual Company & LLP Compliances',
                subtext:
                    'Complete ROC and tax compliance package covering AOC‑4, MGT‑7/MGT‑7A, DIR‑3 KYC, LLP Form 8 & Form 11, and related filings to keep your entity status "Active & Compliant".',
                primaryCTAs: ['Explore More', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [
                'Bookwriting ( with less than 200 entries) + Stat Audit + AOC4 + MGT-7 + DIR 3 KYC + ITR',
                'Bookwriting ( with less than 500 entries) + Stat Audit + AOC4 + MGT-7 + DIR 3 KYC + ITR',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Compliance review' },
                    { days: 'Step 2', activity: 'Prepare forms' },
                    { days: 'Step 3', activity: 'Board approvals' },
                    { days: 'Step 4', activity: 'E-file with MCA' },
                ],
                totalTime: '30-60 days post FY/AGM',
            },
            stepByStepProcess: [
                { step: 'Compliance review' },
                { step: 'Prepare forms' },
                { step: 'Board approvals' },
                { step: 'E-file with MCA' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to apply for your business annual compliances?',
                ctas: ['Apply Annual Compliances', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'accounting-virtual-cfo-services',
        content: {
            heroSection: {
                heading: 'Accounting & Virtual CFO Services',
                subtext:
                    'Cloud-based bookkeeping plus senior finance guidance for budgeting, MIS, cash-flow planning, and compliance oversight, without the cost of a full-time CFO.',
                primaryCTAs: ['Explore More', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Setup accounts' },
                    { days: 'Step 2', activity: 'Monthly books' },
                    { days: 'Step 3', activity: 'CFO review' },
                ],
                totalTime: '1-2 weeks onboarding; Monthly ongoing',
            },
            stepByStepProcess: [
                { step: 'Setup accounts' },
                { step: 'Monthly books' },
                { step: 'CFO review' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to apply for your business Virtual CFO?',
                ctas: ['Apply a Virtual CFO', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'monthly-retainer-packages',
        content: {
            heroSection: {
                heading: 'Monthly Compliance & Advisory Retainers',
                subtext:
                    'Fixed-fee plans that bundle GST, TDS, ITR/ROC filings, accounting support, and periodic expert calls into a single, predictable monthly subscription.',
                primaryCTAs: ['Explore More', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Plan Selection' },
                    { days: 'Step 2', activity: 'Onboard Team' },
                    { days: 'Step 3', activity: 'Monthly Execution' },
                ],
                totalTime: 'Immediate start post selection',
            },
            stepByStepProcess: [
                { step: 'Plan Selection' },
                { step: 'Onboard Team' },
                { step: 'Monthly Execution' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to apply for your business Monthly Retainer Packages?',
                ctas: ['Apply a Monthly Retainer', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'compliance-calendar',
        content: {
            heroSection: {
                heading: 'Smart Compliance Calendar',
                subtext:
                    'A dynamic calendar that tracks all your statutory due dates (GST, TDS, ITR, ROC, labour, licences) and sends proactive reminders so you never miss a filing.',
                primaryCTAs: ['Explore More', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Map obligations' },
                    { days: 'Step 2', activity: 'Get reminders' },
                ],
                totalTime: 'One-time setup; Real-time tracking',
            },
            stepByStepProcess: [
                { step: 'Map obligations' },
                { step: 'Get reminders' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to set up your Compliance Calendar?',
                ctas: ['Set Up Calendar', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'check-compliance-score',
        content: {
            heroSection: {
                heading: 'Compliance Health & Score Check',
                subtext:
                    'A diagnostic that scans your registrations, past filings, and current practices to generate a simple compliance score and risk report for your business.',
                primaryCTAs: ['Explore More', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Share details' },
                    { days: 'Step 2', activity: 'Get score & report' },
                ],
                totalTime: '3-5 working days',
            },
            stepByStepProcess: [
                { step: 'Share details' },
                { step: 'Get score & report' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to check compliance scores for your business ?',
                ctas: ['Check Compliance Score', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'filingbuddy-ai-assistant',
        content: {
            heroSection: {
                heading: 'Expert Tax, Legal & Regulatory Advisory',
                subtext:
                    'On-demand access to CAs, CSs, and lawyers for structuring, tax planning, transaction queries, and day-to-day compliance decisions.',
                primaryCTAs: ['Explore More', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Book & brief' },
                    { days: 'Step 2', activity: 'Expert consult' },
                    { days: 'Step 3', activity: 'Get opinion' },
                ],
                totalTime: 'Same day booking; 1-3 days delivery',
            },
            stepByStepProcess: [
                { step: 'Book & brief' },
                { step: 'Expert consult' },
                { step: 'Get opinion' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get expert advisory for your business?',
                ctas: ['Apply Expert Advisory', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'expert-advisory-services',
        content: {
            heroSection: {
                heading: 'Expert Tax, Legal & Regulatory Advisory',
                subtext:
                    'On-demand access to CAs, CSs, and lawyers for structuring, tax planning, transaction queries, and day-to-day compliance decisions.',
                primaryCTAs: ['Explore More', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [],
            whatYouWillGet: [],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Step 1', activity: 'Book & brief' },
                    { days: 'Step 2', activity: 'Expert consult' },
                    { days: 'Step 3', activity: 'Get opinion' },
                ],
                totalTime: 'Same day booking; 1-3 days delivery',
            },
            stepByStepProcess: [
                { step: 'Book & brief' },
                { step: 'Expert consult' },
                { step: 'Get opinion' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get expert advisory for your business?',
                ctas: ['Apply Expert Advisory', 'Talk to an Expert'],
            },
        },
    },
];
