export interface ServiceCard {
    icon: string;
    title: string;
    content: string;
    slug: string;
    serviceContentId?: string; // MongoDB ObjectId reference
}

export interface HeroSection {
    heading: string;
    subtext: string;
    primaryCTAs: string[];
}

export interface WhyChooseSection {
    bestFor: string[];
    notSuitableFor: string[];
}

export interface Benefit {
    benefit: string;
    whyItMatters: string;
}

export interface Package {
    name: string;
    tagline?: string;
    includes: string[];
    cta?: string;
}

export interface TimelineStep {
    days: string;
    activity: string;
}

export interface ProcessStep {
    step: string;
}

export interface DocumentCategory {
    category: string;
    documents: string[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ServiceContent {
    heroSection: HeroSection;
    whyChoose: WhyChooseSection;
    basicRequirements: string[];
    keyBenefits: Benefit[];
    whatYouWillGet: string[];
    smartSupport: {
        features: string[];
    };
    feesCalculator?: {
        inputs: string[];
        outputs: string[];
    };
    // Section 8: Select package - Commented out for now, add in production
    // packages?: Package[];
    // Section 10: Package Comparison - Commented out for now, add in production
    // packageComparison?: {
    //     features: string[];
    //     basic: boolean[];
    //     launch: boolean[];
    //     premium: boolean[];
    // };
    timeline: {
        steps: TimelineStep[];
        totalTime: string;
    };
    stepByStepProcess: ProcessStep[];
    documentsRequired: DocumentCategory[];
    postIncorporationRoadmap?: {
        timeline: string;
        filing: string;
    }[];
    smartAddOns?: string[];
    // Section 16: Common Mistakes - Commented out for now, add in production
    // commonMistakes?: {
    //     mistakes: string[];
    //     howWeAvoid: string;
    // };
    // Section 17: Why We Are Better - Commented out for now, add in production
    // whyWeAreBetter?: {
    //     feature: string;
    //     others: boolean;
    //     onlineFilingIndia: boolean;
    // }[];
    // Section 18: Testimonials - Commented out for now, add in production
    // testimonials?: string[];
    faqs: FAQ[];
    finalCTA: {
        heading?: string;
        ctas: string[];
    };
}

export interface SubService {
    slug: string;
    title: string;
    ServiceCard: ServiceCard[];
}

export interface SubServiceDocument extends SubService {
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ServiceContentDocument extends ServiceContent {
    _id?: string;
    slug: string; // References the ServiceCard slug
    createdAt?: Date;
    updatedAt?: Date;
}
