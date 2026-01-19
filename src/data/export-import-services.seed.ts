import { ServiceContent } from '../types/sub-service.types';

export const exportImportServicesContent: { slug: string; content: ServiceContent }[] = [
    {
        slug: 'import-export-code',
        content: {
            heroSection: {
                heading: 'Import Export Code (IEC)',
                subtext:
                    'IEC is a 10-digit lifetime code issued by DGFT mandatory for any import/export transactions in India, regardless of value.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Mandatory for EXIM', whyItMatters: 'Without IEC, customs rejects shipments and banks block EXIM transactions; fines up to ₹1 lakh for non-compliance' },
                { benefit: 'Duty Benefits', whyItMatters: 'Enables duty benefits, RoDTEP claims and international trade documentation' },
            ],
            whatYouWillGet: [
                'PAN-based online application via DGFT portal',
                'PAN, bank certificate and digital photo submission',
                'No physical documents needed',
                'Instant e-IEC issuance',
                'Linkage with customs/ICE GATE for seamless trade',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-2 days', activity: 'Document upload & filing' },
                    { days: 'Same day or 24 hours', activity: 'DGFT approval' },
                ],
                totalTime: 'Document upload & filing: 1–2 working days. DGFT approval: usually same day or within 24 hours',
            },
            stepByStepProcess: [
                { step: 'Document upload & filing' },
                { step: 'DGFT approval' },
                { step: 'Instant e-IEC issuance' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your Import Export Code?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'ad-code-registration',
        content: {
            heroSection: {
                heading: 'AD Code Registration',
                subtext:
                    'AD Code (Additional Director Code) is a customs-assigned 13-digit code for importers/exporters at specific ports/airports for cargo clearance.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Mandatory for Clearance', whyItMatters: 'Mandatory for Bill of Entry/Shipping Bill filing; without AD code, goods stuck at port incur demurrage charges' },
                { benefit: 'Faster Processing', whyItMatters: 'Links IEC to specific customs locations for faster processing' },
            ],
            whatYouWillGet: [
                'Apply via ICEGATE with IEC',
                'Cancelled cheque and undertaking submission',
                'Coordinate with jurisdictional customs for approval',
                'Activate code across multiple ports',
                'Handle modifications if business expands',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '2-3 days', activity: 'Application submission' },
                    { days: '3-7 days', activity: 'Customs approval' },
                ],
                totalTime: 'Application submission: 2–3 working days. Customs approval: 3–7 working days',
            },
            stepByStepProcess: [
                { step: 'Apply via ICEGATE' },
                { step: 'Submit cancelled cheque and undertaking' },
                { step: 'Coordinate with customs' },
                { step: 'Get approval' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your AD Code?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'icegate-registration',
        content: {
            heroSection: {
                heading: 'ICEGATE Registration',
                subtext:
                    'ICEGATE is the single-window customs portal for electronic filing of import/export documents, linked to your IEC/AD code.',
                primaryCTAs: ['Register Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Paperless Clearance', whyItMatters: 'Paperless customs clearance; mandatory for all EXIM documentation post-2018 digital mandate' },
                { benefit: 'Real-time Tracking', whyItMatters: 'Real-time tracking, duty calculation and document exchange with customs officers' },
            ],
            whatYouWillGet: [
                'Register digital signature (DSC)',
                'Create ICEGATE profile',
                'Map IEC/AD codes for BOE/Bill of Export filing',
                'Train on portal usage',
                'Handle first-time filings till you\'re comfortable',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-3 days', activity: 'DSC procurement & profile setup' },
                    { days: 'Immediate', activity: 'Activation after verification' },
                ],
                totalTime: 'DSC procurement & profile setup: 1–3 working days. Activation: immediate after verification',
            },
            stepByStepProcess: [
                { step: 'Register digital signature (DSC)' },
                { step: 'Create ICEGATE profile' },
                { step: 'Map IEC/AD codes' },
                { step: 'Get activated' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to register on ICEGATE?',
                ctas: ['Register Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'port-registration',
        content: {
            heroSection: {
                heading: 'Port Registration',
                subtext:
                    'Port-specific registration links your IEC/AD code to customs stations (ports, ICDs, CFS) for smooth cargo movement and clearance.',
                primaryCTAs: ['Register Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Smooth Cargo Movement', whyItMatters: 'Enables gate-pass, container tracking and port-specific compliances like fumigation/phytosanitary checks' },
                { benefit: 'Prevent Delays', whyItMatters: 'Prevents delays and extra charges at Nhava Sheva, Chennai, Mundra or air cargo complexes' },
            ],
            whatYouWillGet: [
                'Register across multiple ports via ICEGATE/CUSDEC',
                'Submit KYC',
                'Coordinate local approvals',
                'Maintain active status',
                'Handle de-registration when routes change',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-5 days', activity: 'Multi-port registration' },
                    { days: '2-4 days', activity: 'Individual port activation' },
                ],
                totalTime: 'Multi-port registration: 3–5 working days. Individual port activation: 2–4 days each',
            },
            stepByStepProcess: [
                { step: 'Register via ICEGATE/CUSDEC' },
                { step: 'Submit KYC' },
                { step: 'Coordinate local approvals' },
                { step: 'Get activated' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to register at ports?',
                ctas: ['Register Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'rcmc-registration',
        content: {
            heroSection: {
                heading: 'RCMC Registration',
                subtext:
                    'RCMC (Registration Cum Membership Certificate) from Export Promotion Councils verifies exporter status for duty benefits and incentives.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Duty Benefits', whyItMatters: 'Prerequisite for RoDTEP, duty drawback, MEIS/advance authorisation schemes worth 2–7% of FOB value' },
                { benefit: 'Required for Tenders', whyItMatters: 'Required for bank realisation certificates and government tenders' },
            ],
            whatYouWillGet: [
                'Identify correct EPC (FIEO, APEDA, EEPC etc.)',
                'Prepare export proofs',
                'File online/offline applications',
                'Secure digital RCMC',
                'Renew every 5 years with updated turnover data',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-5 days', activity: 'Document preparation & filing' },
                    { days: '15-30 days', activity: 'EPC issuance' },
                ],
                totalTime: 'Document preparation & filing: 3–5 working days. EPC issuance: 15–30 days',
            },
            stepByStepProcess: [
                { step: 'Identify correct EPC' },
                { step: 'Prepare export proofs' },
                { step: 'File application' },
                { step: 'Get RCMC issued' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your RCMC?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'iec-renewal',
        content: {
            heroSection: {
                heading: 'IEC Renewal',
                subtext:
                    'IEC update/renewal process to modify details (address, bank, partners) or revalidate inactive codes; IEC itself is lifetime but needs current data.',
                primaryCTAs: ['Renew Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Avoid Rejection', whyItMatters: 'Banks/customs reject outdated IECs; mandatory annual digital signature update via DGFT' },
                { benefit: 'Uninterrupted EXIM', whyItMatters: 'Ensures uninterrupted EXIM and benefit claims' },
            ],
            whatYouWillGet: [
                'Check current status',
                'Update via DGFT ANF-2A with new proofs',
                'Apply DSC renewal',
                'Instant e-update confirmation',
                'Notify banks/customs of changes',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-2 days', activity: 'Details verification & filing' },
                    { days: 'Immediate to 2 days', activity: 'DGFT processing' },
                ],
                totalTime: 'Details verification & filing: 1–2 working days. DGFT processing: immediate to 2 days',
            },
            stepByStepProcess: [
                { step: 'Check current status' },
                { step: 'Update via DGFT ANF-2A' },
                { step: 'Apply DSC renewal' },
                { step: 'Get confirmation' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to renew your IEC?',
                ctas: ['Renew Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'certificate-of-origin',
        content: {
            heroSection: {
                heading: 'Certificate of Origin',
                subtext:
                    'COO certifies Indian origin of goods for preferential customs duties under FTAs like India-ASEAN, India-UAE CEPA.',
                primaryCTAs: ['Get Certificate', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Reduce Import Duties', whyItMatters: 'Reduces import duties by 5–100% for partner countries; mandatory for 100+ FTAs India has signed' },
                { benefit: 'FTA Benefits', whyItMatters: 'Issued by Chambers/FIEO/EPCs with exporter declaration and invoice scrutiny' },
            ],
            whatYouWillGet: [
                'Verify FTA eligibility',
                'Prepare self-certification or non-preferential COO',
                'Get chamber/EPC endorsement',
                'Electronic issuance via ECO system',
                'Instant customs validation abroad',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-3 days', activity: 'Document review & certification' },
                    { days: 'Same day to 2 days', activity: 'Chamber/EPC stamping' },
                ],
                totalTime: 'Document review & certification: 1–3 working days. Chamber/EPC stamping: same day to 2 days',
            },
            stepByStepProcess: [
                { step: 'Verify FTA eligibility' },
                { step: 'Prepare COO' },
                { step: 'Get chamber/EPC endorsement' },
                { step: 'Electronic issuance' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your Certificate of Origin?',
                ctas: ['Get Certificate', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'freight-forwarding-services',
        content: {
            heroSection: {
                heading: 'Freight Forwarding Services',
                subtext:
                    'End-to-end logistics coordination for ocean/air cargo: booking, documentation, customs clearance and delivery.',
                primaryCTAs: ['Get Quote', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Complex Documentation', whyItMatters: 'Handles complex shipping docs (B/L, AWB, commercial invoice, packing list) and multimodal transport' },
                { benefit: 'Optimise Costs', whyItMatters: 'Optimises costs via consolidations, FCL/LCL and insurance arrangements' },
            ],
            whatYouWillGet: [
                'Quote competitive rates across 50+ lines (Maersk, MSC)',
                'Arrange pickup',
                'Customs filing',
                'Door delivery',
                'Track shipments real-time',
                'Resolve delays/demurrage issues',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1 day', activity: 'Quote & booking confirmation' },
                    { days: '7-45 days', activity: 'Pickup to delivery' },
                ],
                totalTime: 'Quote & booking confirmation: 1 day. Pickup to delivery: 7–45 days depending on route (air/ocean)',
            },
            stepByStepProcess: [
                { step: 'Get quote' },
                { step: 'Booking confirmation' },
                { step: 'Arrange pickup' },
                { step: 'Customs filing' },
                { step: 'Door delivery' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready for freight forwarding services?',
                ctas: ['Get Quote', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'phytosanitary-services',
        content: {
            heroSection: {
                heading: 'Phytosanitary Services',
                subtext:
                    'Phytosanitary certificate verifies agricultural/plant products are free from pests/diseases for export compliance.',
                primaryCTAs: ['Get Certificate', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Mandatory for Agri Exports', whyItMatters: 'Mandatory for food/agri exports to EU, US, Middle East; rejection at destination leads to total shipment loss' },
                { benefit: 'Compliance Verification', whyItMatters: 'Issued by APEDA/PPQS after lab tests and field inspection' },
            ],
            whatYouWillGet: [
                'Arrange plant quarantine inspection',
                'Fumigation if needed',
                'Lab testing (pesticide residue, fumigation)',
                'Fast-track electronic phy to sanitary certificate',
                'Via TRACES/EPIDEMI systems',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-2 days', activity: 'Inspection & sampling' },
                    { days: '3-7 days', activity: 'Lab report & certification' },
                ],
                totalTime: 'Inspection & sampling: 1–2 working days. Lab report & certification: 3–7 days',
            },
            stepByStepProcess: [
                { step: 'Plant quarantine inspection' },
                { step: 'Fumigation if needed' },
                { step: 'Lab testing' },
                { step: 'Get certificate' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get phytosanitary certificate?',
                ctas: ['Get Certificate', 'Talk to an Expert'],
            },
        },
    },
];
