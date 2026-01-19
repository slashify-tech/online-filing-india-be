import { ServiceContent } from '../types/sub-service.types';

export const trademarkServicesContent: { slug: string; content: ServiceContent }[] = [
    {
        slug: 'trademark-registration',
        content: {
            heroSection: {
                heading: 'Trademark Registration',
                subtext:
                    'Protect your brand name, logo & tagline with complete registration, objection handling and renewal support.',
                primaryCTAs: ['Apply Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Legal Protection', whyItMatters: 'Prevents others from copying or misusing your brand in the same class of goods/services' },
                { benefit: 'Brand Value', whyItMatters: 'Builds brand value, investor confidence and customer trust while allowing you to use the ® symbol after registration' },
            ],
            whatYouWillGet: [
                'Detailed TM search',
                'Correct class selection (out of 45 classes)',
                'Drafting of Form TM‑A with all supporting documents',
                'End‑to‑end handling of examination, journal publication, objections and final registration',
                'Regular status updates',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: 'Day 1-3', activity: 'TM search & filing' },
                    { days: '6-18 months', activity: 'Examination, journal and registration' },
                ],
                totalTime: 'TM search & filing: 1–3 days once documents are received. Examination, journal and registration: typically 6–18 months depending on objections/oppositions at the Registry',
            },
            stepByStepProcess: [
                { step: 'TM search & filing' },
                { step: 'Examination' },
                { step: 'Journal publication' },
                { step: 'Objections handling' },
                { step: 'Final registration' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to register your trademark?',
                ctas: ['Apply Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'trademark-objection',
        content: {
            heroSection: {
                heading: 'Trademark Objection',
                subtext:
                    'A trademark objection is a preliminary refusal or query raised by the Examiner in the examination report when your TM application does not fully meet legal requirements or appears similar to existing marks.',
                primaryCTAs: ['Get Help', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Prevent Abandonment', whyItMatters: 'If not replied to properly within the deadline (usually 1 month), the application can be abandoned' },
                { benefit: 'Revive Application', whyItMatters: 'A strong, reasoned response can revive the application and move it forward to acceptance and publication' },
            ],
            whatYouWillGet: [
                'Analyse the examination report',
                'Compare cited marks',
                'Draft a detailed reply covering legal grounds, evidence of use and distinctiveness',
                'File the objection reply online',
                'Track the next actions',
                'Represent you in any follow‑up hearings where required',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-7 days', activity: 'Drafting and filing objection reply' },
                    { days: '3-6 months', activity: 'Next action by Registry' },
                ],
                totalTime: 'Drafting and filing objection reply: usually 3–7 working days after receiving all inputs. Next action by Registry: generally 3–6 months, depending on load at the TM office',
            },
            stepByStepProcess: [
                { step: 'Analyse examination report' },
                { step: 'Compare cited marks' },
                { step: 'Draft detailed reply' },
                { step: 'File objection reply' },
                { step: 'Track next actions' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Need help with trademark objection?',
                ctas: ['Get Help', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'trademark-renewal',
        content: {
            heroSection: {
                heading: 'Trademark Renewal',
                subtext:
                    'Trademark renewal extends protection of a registered mark for another 10‑year term and keeps it active on the official Register.',
                primaryCTAs: ['Renew Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Maintain Protection', whyItMatters: 'Non‑renewal can lead to removal from the Register, loss of exclusive rights and open the door for others to register similar marks' },
                { benefit: 'Asset Value', whyItMatters: 'A renewed mark remains a long‑term intangible asset and supports valuation, licensing and franchising' },
            ],
            whatYouWillGet: [
                'Track renewal due dates',
                'Prepare and file renewal applications',
                'Handle restoration if the deadline has been missed',
                'Coordinate with the Registry until the renewed entry is reflected',
                'Share updated status/records with you',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-3 days', activity: 'Filing renewal request' },
                    { days: '3-4 months', activity: 'Registry processing & renewal confirmation' },
                ],
                totalTime: 'Filing renewal request: 1–3 days from document/fee confirmation. Registry processing & renewal confirmation: usually 3–4 months',
            },
            stepByStepProcess: [
                { step: 'Track renewal due dates' },
                { step: 'Prepare renewal application' },
                { step: 'File renewal request' },
                { step: 'Registry processing' },
                { step: 'Renewal confirmation' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to renew your trademark?',
                ctas: ['Renew Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'trademark-watch-services',
        content: {
            heroSection: {
                heading: 'Trademark Watch Services',
                subtext:
                    'Trademark watch is a proactive monitoring service to track new filings or uses that are identical or confusingly similar to your registered or pending mark.',
                primaryCTAs: ['Start Watching', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Early Detection', whyItMatters: 'Early detection lets you oppose or act against infringing marks before they become harder and costlier to remove' },
                { benefit: 'Brand Protection', whyItMatters: 'Helps maintain distinctiveness of your brand and prevents dilution in the market' },
            ],
            whatYouWillGet: [
                'Periodic searches of TM journals and databases in relevant classes',
                'Keyword‑based monitoring of new applications',
                'Alert reports with risk rating',
                'Recommendations (oppose, send notice, or monitor only)',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '2-3 days', activity: 'Setup of watch parameters' },
                    { days: 'Ongoing', activity: 'Monthly/quarterly reports or event‑based alerts' },
                ],
                totalTime: 'Setup of watch parameters: 2–3 working days. Ongoing alerts: monthly/quarterly reports or event‑based alerts when a risky mark is spotted',
            },
            stepByStepProcess: [
                { step: 'Setup watch parameters' },
                { step: 'Monitor TM journals and databases' },
                { step: 'Generate alert reports' },
                { step: 'Provide recommendations' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to protect your trademark?',
                ctas: ['Start Watching', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'trademark-opposition',
        content: {
            heroSection: {
                heading: 'Trademark Opposition',
                subtext:
                    'Trademark opposition is a legal challenge filed by a third party against a mark that has been advertised in the TM Journal but is not yet registered.',
                primaryCTAs: ['File Opposition', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Stop Conflicting Marks', whyItMatters: 'As an owner, filing opposition stops conflicting marks from entering the Register' },
                { benefit: 'Defend Your Mark', whyItMatters: 'If your mark is opposed, defending it properly is critical to avoid refusal after years of waiting' },
            ],
            whatYouWillGet: [
                'Draft and file a detailed notice of opposition or counter‑statement',
                'Supported by legal grounds and documentary evidence',
                'Manage all timelines for evidence, hearings and settlement discussions',
                'Representation until the matter is decided',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '4 months', activity: 'Opposition filing deadline' },
                    { days: '1-3 years', activity: 'Proceedings (pleadings, evidence, hearing)' },
                ],
                totalTime: 'Opposition filing deadline: typically 4 months from journal publication date. Proceedings (pleadings, evidence, hearing): can run 1–3 years depending on complexity and Registry workload',
            },
            stepByStepProcess: [
                { step: 'Draft notice of opposition' },
                { step: 'File opposition with legal grounds' },
                { step: 'Submit evidence' },
                { step: 'Attend hearings' },
                { step: 'Settlement discussions if needed' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Need to file or defend a trademark opposition?',
                ctas: ['File Opposition', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'trademark-hearing',
        content: {
            heroSection: {
                heading: 'Trademark Hearing',
                subtext:
                    'Trademark hearings are personal or virtual appearances before the TM Officer to argue objections or issues raised in examination or opposition.',
                primaryCTAs: ['Get Representation', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Convert Refusal', whyItMatters: 'A well‑handled hearing can convert a provisional refusal into acceptance or save an application from being abandoned' },
                { benefit: 'Avoid Rejection', whyItMatters: 'Poor representation or non‑appearance may lead to straight rejection' },
            ],
            whatYouWillGet: [
                'Review the file',
                'Prepare written submissions/case law',
                'Brief you on possible questions before the hearing',
                'Attend the hearing (online/physical) on your behalf',
                'Follow up for orders and further compliances if any',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-7 days', activity: 'Preparation time' },
                    { days: '1-6 months', activity: 'Order issuance' },
                ],
                totalTime: 'Preparation time: generally 3–7 working days before hearing date. Order issuance: often 1–6 months after hearing, depending on the Registry',
            },
            stepByStepProcess: [
                { step: 'Review the file' },
                { step: 'Prepare written submissions' },
                { step: 'Brief on possible questions' },
                { step: 'Attend hearing' },
                { step: 'Follow up for orders' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Need representation for trademark hearing?',
                ctas: ['Get Representation', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'trademark-transfer-assignment',
        content: {
            heroSection: {
                heading: 'Trademark Transfer (Assignment)',
                subtext:
                    'Trademark transfer (assignment) records a change of ownership of a registered or pending trademark from one party to another.',
                primaryCTAs: ['Transfer Now', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Essential in M&A', whyItMatters: 'Essential in M&A, brand sale, franchise and internal group restructurings so that rights sit with the correct entity' },
                { benefit: 'Legal Enforcement', whyItMatters: 'Ensures the new owner can legally enforce and license the mark' },
            ],
            whatYouWillGet: [
                'Draft assignment/transfer agreements',
                'Check chain of title',
                'Prepare TM forms (like TM‑P) with supporting documents',
                'File assignment with the Registry',
                'Follow up until the new proprietor is recorded on the Register',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '5-10 days', activity: 'Document drafting & filing' },
                    { days: '6-12 months', activity: 'Registry recordal of new owner' },
                ],
                totalTime: 'Document drafting & filing: usually 5–10 working days. Registry recordal of new owner: typically 6–12 months',
            },
            stepByStepProcess: [
                { step: 'Draft assignment agreement' },
                { step: 'Check chain of title' },
                { step: 'Prepare TM forms' },
                { step: 'File assignment' },
                { step: 'Follow up for recordal' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to transfer your trademark?',
                ctas: ['Transfer Now', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'trademark-rectification',
        content: {
            heroSection: {
                heading: 'Trademark Rectification',
                subtext:
                    'Trademark rectification is the process of correcting or removing an entry on the Register when it has been wrongly made or remains wrongly on record.',
                primaryCTAs: ['File Rectification', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Correct Errors', whyItMatters: 'Used to cancel wrongly registered marks, clear the Register, or correct errors in proprietor details, specifications or conditions' },
                { benefit: 'Powerful Remedy', whyItMatters: 'A powerful remedy if someone obtained registration in bad faith or without use' },
            ],
            whatYouWillGet: [
                'Draft rectification or cancellation petitions',
                'Grounds like non‑use, misrepresentation or prior rights',
                'Represent you before the Registry/courts',
                'Evidence, arguments and hearings until disposal',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '5-10 days', activity: 'Filing rectification' },
                    { days: '1-3 years', activity: 'Adjudication' },
                ],
                totalTime: 'Filing rectification: 5–10 working days for preparation and submission. Adjudication: can range from 1–3 years depending on opposition and evidence',
            },
            stepByStepProcess: [
                { step: 'Draft rectification petition' },
                { step: 'File with grounds' },
                { step: 'Submit evidence' },
                { step: 'Attend hearings' },
                { step: 'Follow up until disposal' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Need to file trademark rectification?',
                ctas: ['File Rectification', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'tm-infringement-notice',
        content: {
            heroSection: {
                heading: 'TM Infringement Notice',
                subtext:
                    'An infringement notice (legal notice/cease & desist) is a formal demand to stop unauthorised use of an identical or deceptively similar mark.',
                primaryCTAs: ['Send Notice', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Quick Resolution', whyItMatters: 'Often resolves disputes quickly without immediate litigation and creates a written record of your enforcement efforts' },
                { benefit: 'Seek Remedies', whyItMatters: 'Can seek cessation, destruction of infringing stock and, if needed, settlement or licensing' },
            ],
            whatYouWillGet: [
                'Review your registration and evidence of misuse',
                'Draft a customised notice stating violations and remedies demanded',
                'Manage follow‑up, negotiations',
                'Escalation to civil/criminal action if the infringer does not comply',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-5 days', activity: 'Draft & dispatch notice' },
                    { days: '7-15 days', activity: 'Response window' },
                ],
                totalTime: 'Draft & dispatch notice: 3–5 working days. Response window: typically 7–15 days; next steps depend on reply or non‑reply',
            },
            stepByStepProcess: [
                { step: 'Review registration and evidence' },
                { step: 'Draft infringement notice' },
                { step: 'Dispatch notice' },
                { step: 'Manage follow-up and negotiations' },
                { step: 'Escalate if needed' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Need to send an infringement notice?',
                ctas: ['Send Notice', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'trademark-search-report',
        content: {
            heroSection: {
                heading: 'Trademark Search Report',
                subtext:
                    'A trademark search report evaluates the availability and risk of a proposed brand name or logo before filing an application.',
                primaryCTAs: ['Get Search Report', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Reduce Refusal Risk', whyItMatters: 'Reduces chances of refusal, objection or costly rebranding by revealing conflicting marks in advance' },
                { benefit: 'Choose Strong Mark', whyItMatters: 'Helps choose a stronger, more distinctive mark and correct TM classes' },
            ],
            whatYouWillGet: [
                'Conduct identical and phonetic searches',
                'Search on the IP India database and marketplaces',
                'Search in relevant classes',
                'Written report with conflict analysis',
                'Recommendation: safe to file, modify or avoid',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '1-2 days', activity: 'Standard search & report' },
                    { days: 'Same day', activity: 'Priority/express search option' },
                ],
                totalTime: 'Standard search & report: 1–2 working days per mark. Priority/express search: same‑day option for urgent filings',
            },
            stepByStepProcess: [
                { step: 'Conduct identical search' },
                { step: 'Conduct phonetic search' },
                { step: 'Search IP India database' },
                { step: 'Search marketplaces' },
                { step: 'Generate conflict analysis report' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to get a trademark search report?',
                ctas: ['Get Search Report', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'logo-designing',
        content: {
            heroSection: {
                heading: 'Logo Designing',
                subtext:
                    'Logo design creates a unique visual identity (symbol, wordmark or combination mark) for your brand that is ready for trademark registration and multi‑channel use.',
                primaryCTAs: ['Design Logo', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Brand Identity', whyItMatters: 'A distinctive logo improves recall, supports TM protection and ensures consistent branding across web, print and packaging' },
                { benefit: 'Easier Registration', whyItMatters: 'Professionally designed logos are easier to register as device marks and defend against copycats' },
            ],
            whatYouWillGet: [
                'Brand discovery',
                'Mood boards',
                '2–3 initial concepts aligned with your industry and positioning',
                'Refinement cycles',
                'Final master file delivery (AI/PNG/JPG/SVG)',
                'Logo usage guidelines tailored for TM filing',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-5 days', activity: 'First concepts' },
                    { days: '1-2 weeks', activity: 'Finalisation' },
                ],
                totalTime: 'First concepts: typically 3–5 working days after brief approval. Finalisation: 1–2 weeks depending on feedback rounds',
            },
            stepByStepProcess: [
                { step: 'Brand discovery' },
                { step: 'Mood boards' },
                { step: 'Initial concepts' },
                { step: 'Refinement cycles' },
                { step: 'Final master file delivery' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to design your logo?',
                ctas: ['Design Logo', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'copyright-registration',
        content: {
            heroSection: {
                heading: 'Copyright Registration',
                subtext:
                    'Copyright registration records ownership of original literary, artistic, musical, software and cinematographic works under the Copyright Act.',
                primaryCTAs: ['Register Copyright', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Evidentiary Value', whyItMatters: 'Provides strong evidentiary value in disputes and helps you enforce rights against unauthorised copying or distribution' },
                { benefit: 'Monetise IP', whyItMatters: 'Useful for content creators, app developers, designers and agencies monetising their IP' },
            ],
            whatYouWillGet: [
                'Identify protectable works',
                'Prepare forms and affidavits',
                'Compile copies/samples as per type of work',
                'File application online',
                'Track scrutiny/objections',
                'Obtain registration certificate when granted',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '3-5 days', activity: 'Filing' },
                    { days: '6-12 months', activity: 'Scrutiny & registration' },
                ],
                totalTime: 'Filing: 3–5 working days after receiving work files and details. Scrutiny & registration: often 6–12 months, depending on category and objections',
            },
            stepByStepProcess: [
                { step: 'Identify protectable works' },
                { step: 'Prepare forms and affidavits' },
                { step: 'Compile copies/samples' },
                { step: 'File application online' },
                { step: 'Track scrutiny/objections' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to register your copyright?',
                ctas: ['Register Copyright', 'Talk to an Expert'],
            },
        },
    },
    {
        slug: 'patent-registration',
        content: {
            heroSection: {
                heading: 'Patent Registration',
                subtext:
                    'Patent registration grants exclusive rights over a new invention (product or process) that is novel, inventive and industrially applicable.',
                primaryCTAs: ['Register Patent', 'Talk to an Expert'],
            },
            whyChoose: {
                bestFor: [],
                notSuitableFor: [],
            },
            basicRequirements: [],
            keyBenefits: [
                { benefit: 'Exclusive Rights', whyItMatters: 'Prevents others from making, using or selling the invention without your permission for up to 20 years' },
                { benefit: 'Attract Funding', whyItMatters: 'Critical for tech, pharma, engineering and startup innovations to attract funding and licensing deals' },
            ],
            whatYouWillGet: [
                'Prior‑art search',
                'Patentability assessment',
                'Drafting of provisional/complete specifications with claims',
                'Filing with the Patent Office',
                'Request for examination',
                'Responding to FERs',
                'Assisting through grant and maintenance',
            ],
            smartSupport: {
                features: [],
            },
            timeline: {
                steps: [
                    { days: '2-6 weeks', activity: 'Drafting & filing provisional/complete' },
                    { days: '2-4 years', activity: 'Examination to grant' },
                ],
                totalTime: 'Drafting & filing provisional/complete: generally 2–6 weeks depending on complexity. Examination to grant: commonly 2–4 years with fast‑track options available for eligible applicants',
            },
            stepByStepProcess: [
                { step: 'Prior-art search' },
                { step: 'Patentability assessment' },
                { step: 'Draft specifications' },
                { step: 'File with Patent Office' },
                { step: 'Request examination' },
                { step: 'Respond to FERs' },
                { step: 'Grant and maintenance' },
            ],
            documentsRequired: [],
            faqs: [],
            finalCTA: {
                heading: 'Ready to register your patent?',
                ctas: ['Register Patent', 'Talk to an Expert'],
            },
        },
    },
];
