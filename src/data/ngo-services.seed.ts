import { ServiceContent } from '../types/sub-service.types';

export const ngoServicesContent: { slug: string; content: ServiceContent }[] = [
    {
        slug: '12a-registration',
        content: {
            heroSection: {
                heading: '12A Registration',
                subtext:
                    '12A registration under Income Tax Act exempts NGOs from tax on income derived from charitable activities like education, healthcare and poverty relief.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Tax Exemption', whyItMatters: 'Essential for tax exemption on surplus funds; without it, NGOs pay corporate tax rates up to 30% on receipts' },
                { benefit: 'Prerequisite for 80G', whyItMatters: 'Prerequisite for 80G approval and builds donor confidence in legitimacy' },
            ],
            whatYouWillGet: [
                'Prepare IT application with trust deed',
                'Activity proofs, financials and governance documents',
                'Form 10A/10AB filing',
                'Respond to queries',
                'Secure provisional/permanent exemption certificates valid for 5–10 years',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-5 days', activity: 'Document preparation & filing' },
                    { days: '1-3 months', activity: 'IT Dept approval' },
                ],
                totalTime: 'Document preparation & filing: 3–5 working days. IT Dept approval: 1–3 months',
            },
            stepByStepProcess: [
                { step: 'Prepare IT application' },
                { step: 'File Form 10A/10AB' },
                { step: 'Respond to queries' },
                { step: 'Get approval certificate' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your 12A registration?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: '80g-registration',
        content: {
            heroSection: {
                heading: '80G Registration',
                subtext:
                    '80G approval allows donors to claim 50–100% tax deduction on contributions to your NGO under Section 80G.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Increase Donations', whyItMatters: 'Dramatically increases donations as corporations/individuals get tax benefits; mandatory for fundraising credibility' },
                { benefit: 'Donor Confidence', whyItMatters: 'Without 80G, donors hesitate as contributions become fully taxable in their hands' },
            ],
            whatYouWillGet: [
                'Verify 12A status',
                'Prepare activity reports',
                'File Form 10G/10GB with audited accounts and donor records',
                'Handle scrutiny',
                'Obtain approval certificate for display on receipts/website',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-7 days', activity: 'Application filing' },
                    { days: '2-6 months', activity: 'Approval processing' },
                ],
                totalTime: 'Application filing: 3–7 working days post-12A. Approval processing: 2–6 months',
            },
            stepByStepProcess: [
                { step: 'Verify 12A status' },
                { step: 'Prepare activity reports' },
                { step: 'File Form 10G/10GB' },
                { step: 'Handle scrutiny' },
                { step: 'Get approval certificate' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your 80G registration?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'ngo-darpan',
        content: {
            heroSection: {
                heading: 'NGO Darpan',
                subtext:
                    'NGO Darpan ID is mandatory NITI Aayog registration for all NGOs seeking government grants and CSR funding.',
                primaryCTAs: ['Register Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Prerequisite for Grants', whyItMatters: 'Prerequisite for FCRA, E-Anudaan portal access and CSR project eligibility worth ₹20,000+ crore annually' },
                { benefit: 'Verified Profiles', whyItMatters: 'Creates verified profiles visible to 1 lakh+ corporates and government departments' },
            ],
            whatYouWillGet: [
                'Online registration with PAN',
                '12A/80G proofs',
                'Activity details and governing body information',
                'Via Darpan portal',
                'Obtain unique NGO-Darpan ID',
                'PAN-NGO linking for grant applications',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '2-4 days', activity: 'Profile creation & verification' },
                    { days: 'Immediate to 7 days', activity: 'ID generation' },
                ],
                totalTime: 'Profile creation & verification: 2–4 working days. ID generation: immediate to 7 days',
            },
            stepByStepProcess: [
                { step: 'Online registration with PAN' },
                { step: 'Submit 12A/80G proofs' },
                { step: 'Provide activity details' },
                { step: 'Get NGO-Darpan ID' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to register on NGO Darpan?',
                ctas: ['Register Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'e-anudaan',
        content: {
            heroSection: {
                heading: 'E-Anudaan',
                subtext:
                    'E-Anudaan is the online grants portal for Ministries (Women & Child, Social Justice, Tribal Affairs) providing ₹1 lakh–₹50 lakh project funding.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Direct Government Funding', whyItMatters: 'Direct government funding for social projects without middlemen; requires NGO Darpan ID and project proposal' },
                { benefit: 'Multiple Programs', whyItMatters: 'Covers education, health, skill training, women empowerment and tribal welfare programs' },
            ],
            whatYouWillGet: [
                'Assess scheme eligibility',
                'Draft detailed project proposals with budgets',
                'Timelines and impact metrics',
                'File applications across multiple ministries',
                'Track evaluation/approval stages',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '5-10 days', activity: 'Proposal preparation' },
                    { days: '3-6 months', activity: 'Ministry sanction' },
                ],
                totalTime: 'Proposal preparation: 5–10 working days. Ministry sanction: 3–6 months per funding cycle',
            },
            stepByStepProcess: [
                { step: 'Assess scheme eligibility' },
                { step: 'Draft project proposal' },
                { step: 'File application' },
                { step: 'Track evaluation' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to apply for E-Anudaan grants?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'csr-registration',
        content: {
            heroSection: {
                heading: 'CSR Registration',
                subtext:
                    'CSR-1 registration with MCA makes NGOs eligible to receive mandatory CSR contributions from 40,000+ companies.',
                primaryCTAs: ['Register Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Unlock CSR Pool', whyItMatters: 'Unlocks ₹25,000+ crore annual CSR pool; required under Companies Act 2013 Section 135' },
                { benefit: 'Listed on MCA Portal', whyItMatters: 'Listed on MCA CSR portal for corporate selection without tender processes' },
            ],
            whatYouWillGet: [
                'File Form CSR-1 with 12A/80G certificates',
                'PAN and governing body details',
                'Via MCA V3 portal',
                'Obtain unique CSR Registration Number',
                'Valid indefinitely with annual compliance',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-3 days', activity: 'Document verification & filing' },
                    { days: '2-7 days', activity: 'MCA approval' },
                ],
                totalTime: 'Document verification & filing: 1–3 working days. MCA approval: usually 2–7 days',
            },
            stepByStepProcess: [
                { step: 'File Form CSR-1' },
                { step: 'Submit 12A/80G certificates' },
                { step: 'Get CSR Registration Number' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get CSR registration?',
                ctas: ['Register Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'csr-exchange-registration',
        content: {
            heroSection: {
                heading: 'CSR Exchange Registration',
                subtext:
                    'CSR Exchange listing connects NGOs with corporates seeking verified implementation partners for CSR projects.',
                primaryCTAs: ['List Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Direct Access to Corporates', whyItMatters: 'Direct access to corporates like Reliance, TCS, HDFC CSR budgets through searchable NGO profiles' },
                { benefit: 'Preferred Over Cold Outreach', whyItMatters: 'Preferred over cold outreach; includes project history, financials and impact ratings' },
            ],
            whatYouWillGet: [
                'Create detailed profiles with past projects',
                'Team credentials, financial audits and sector expertise',
                'Optimise for corporate search filters',
                'Respond to RFPs/EOIs from listed companies',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-5 days', activity: 'Profile setup' },
                    { days: 'Immediate', activity: 'Live listing post-verification' },
                ],
                totalTime: 'Profile setup: 3–5 working days. Live listing: immediate post-verification',
            },
            stepByStepProcess: [
                { step: 'Create detailed profile' },
                { step: 'Add past projects and credentials' },
                { step: 'Get verified' },
                { step: 'Go live on CSR Exchange' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to list on CSR Exchange?',
                ctas: ['List Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'project-report',
        content: {
            heroSection: {
                heading: 'Project Report',
                subtext:
                    'Professional project reports/proposals for CSR, government grants and FCRA funding applications.',
                primaryCTAs: ['Get Report', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Higher Approval Rate', whyItMatters: '80%+ proposals rejected due to poor structure; well-crafted reports secure 3x more funding approvals' },
                { benefit: 'Required Format', whyItMatters: 'Required format for E-Anudaan, CSR-1 projects and international donors' },
            ],
            whatYouWillGet: [
                'Conduct needs assessment',
                'Design logical framework (logframe)',
                'Detailed budgets and monitoring plans',
                'Customise for specific funders',
                'Case studies, sustainability plans and impact metrics',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '5-10 days', activity: 'Research & drafting' },
                    { days: '2-3 days', activity: 'Final review & delivery' },
                ],
                totalTime: 'Research & drafting: 5–10 working days. Final review & delivery: 2–3 days post feedback',
            },
            stepByStepProcess: [
                { step: 'Conduct needs assessment' },
                { step: 'Design logical framework' },
                { step: 'Create detailed budgets' },
                { step: 'Customise for funders' },
                { step: 'Final review & delivery' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get your project report?',
                ctas: ['Get Report', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'fcra-registration',
        content: {
            heroSection: {
                heading: 'FCRA Registration',
                subtext:
                    'FCRA registration under Foreign Contribution Regulation Act allows NGOs to receive foreign donations >₹10,000.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'International Funding', whyItMatters: 'Critical for international funding from USAID, UN, Bill Gates Foundation; 20,000+ NGOs cancelled post-2021 amendments' },
                { benefit: 'Avoid Restrictions', whyItMatters: 'Without FCRA, foreign funds must be routed through designated banks with 20% utilisation restrictions' },
            ],
            whatYouWillGet: [
                'Gap analysis against 17-point FCRA criteria',
                'Prepare 3-year activity proofs',
                'File Form FC-3A online',
                'Respond to MHA queries',
                'Secure 5-year renewable registration',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '7-15 days', activity: 'Documentation & filing' },
                    { days: '6-12 months', activity: 'MHA approval' },
                ],
                totalTime: 'Documentation & filing: 7–15 working days. MHA approval: 6–12 months',
            },
            stepByStepProcess: [
                { step: 'Gap analysis against FCRA criteria' },
                { step: 'Prepare 3-year activity proofs' },
                { step: 'File Form FC-3A' },
                { step: 'Respond to MHA queries' },
                { step: 'Get 5-year renewable registration' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get FCRA registration?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: '12a-80g-renewal',
        content: {
            heroSection: {
                heading: '12A & 80G Renewal',
                subtext:
                    'Revalidation of 12A/80G certificates every 5 years with updated activity, financial and compliance proofs.',
                primaryCTAs: ['Renew Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Maintain Tax Benefits', whyItMatters: 'Lapsed certificates lose tax benefits immediately; mandatory Form 10AB re-application post-2021 rules' },
                { benefit: 'Donor Confidence', whyItMatters: 'Ensures continued donor confidence and uninterrupted fundraising' },
            ],
            whatYouWillGet: [
                'Audit last 3–5 years\' activities',
                'Prepare renewal forms with digital signatures',
                'Recent ITRs',
                'File before expiry',
                'Handle transition to new permanent/provisional status',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '5-7 days', activity: 'Renewal preparation' },
                    { days: '2-4 months', activity: 'IT Dept processing' },
                ],
                totalTime: 'Renewal preparation: 5–7 working days. IT Dept processing: 2–4 months',
            },
            stepByStepProcess: [
                { step: 'Audit last 3–5 years\' activities' },
                { step: 'Prepare renewal forms' },
                { step: 'File before expiry' },
                { step: 'Handle transition' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to renew your 12A & 80G?',
                ctas: ['Renew Now', 'Talk to an Expert'],
            },
        },
    },
];
